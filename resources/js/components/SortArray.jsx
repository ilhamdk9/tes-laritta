import React, { useState } from "react";
import axios from "axios";

function SortArrayPage() {
    const [inputValue, setInputValue] = useState("");
    const [arrayValues, setArrayValues] = useState([]);
    const [sortedArray, setSortedArray] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAddValue = () => {
        if (inputValue.trim() !== "") {
            setArrayValues((prevArray) => [...prevArray, Number(inputValue)]);
            setInputValue("");
        } else {
            alert("Masukkan nilai yang valid.");
        }
    };

    const fetchSortedArray = async () => {
        if (arrayValues.length === 0) {
            alert("Masukkan beberapa nilai array terlebih dahulu.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("/api/sortarray", {
                values: arrayValues,
            });
            setSortedArray(response.data.sorted_array);
        } catch (error) {
            console.error("Error fetching sorted array:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-white flex justify-center items-center p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-8 rounded-2xl w-full max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Sort Array
                </h1>

                <div className="mb-4">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full p-4 rounded-md border border-gray-300"
                        placeholder="Masukkan nilai array"
                    />
                </div>

                <button
                    onClick={handleAddValue}
                    className="bg-green-500 w-full text-white p-4 rounded-md hover:bg-green-600 transition duration-200"
                >
                    Add Value
                </button>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Current Values:</h2>
                    <ul className="list-disc pl-6 mt-2">
                        {arrayValues.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={fetchSortedArray}
                    className="bg-blue-500 w-full text-white p-4 rounded-md hover:bg-blue-600 transition duration-200 mt-4"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Get Sorted Array"}
                </button>

                {sortedArray.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold">
                            Sorted Array:
                        </h2>
                        <pre className="mt-2 bg-gray-100 p-4 rounded-md">
                            {JSON.stringify(sortedArray, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SortArrayPage;
