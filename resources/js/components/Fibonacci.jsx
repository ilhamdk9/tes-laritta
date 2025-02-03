import React, { useState } from "react";
import axios from "axios";

function FibonacciPage() {
    const [count, setCount] = useState("");
    const [fibonacciSeries, setFibonacciSeries] = useState([]);
    const [error, setError] = useState(null);

    const fetchFibonacci = async () => {
        if (!count || count <= 0) {
            setError("Masukkan jumlah deret yang valid!");
            setFibonacciSeries([]);
            return;
        }
        setError(null);
        try {
            const response = await axios.get(`/api/fibonacci/${count}`);
            setFibonacciSeries(response.data);
        } catch (error) {
            console.error("Error fetching Fibonacci series", error);
            setError("Terjadi kesalahan, coba lagi nanti.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-500 to-white flex justify-center items-center p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-8 rounded-2xl w-full max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Fibonacci
                </h1>
                <input
                    type="number"
                    className="border w-full p-4 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
                    placeholder="Masukkan jumlah deret Fibonacci"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                    onClick={fetchFibonacci}
                    className="bg-red-500 w-full text-white p-4 rounded-md hover:bg-red-600 transition duration-200"
                >
                    Tampilkan Fibonacci
                </button>
                <div className="mt-6">
                    {fibonacciSeries.length > 0 && (
                        <div className="bg-gray-100 p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700">
                                Deret Fibonacci:
                            </h2>
                            <p className="text-gray-800 mt-2">
                                {fibonacciSeries.join(", ")}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FibonacciPage;
