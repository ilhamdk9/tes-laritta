import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayAPIPage() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        axios
            .get("https://api.npoint.io/99c279bb173a6e28359c/data")
            .then((response) => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        const filtered = data.filter(
            (item) =>
                item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.asma.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    const handleSort = () => {
        const sorted = [...filteredData].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.nama.localeCompare(b.nama);
            } else {
                return b.nama.localeCompare(a.nama);
            }
        });
        setFilteredData(sorted);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 text-white">
            <h1 className="text-4xl font-bold text-center mb-8">
                Surah Data from API
            </h1>

            <div className="flex flex-col md:flex-row justify-between mb-6">
                <button
                    onClick={handleSort}
                    className="bg-white text-black p-2 rounded-md mb-2 hover:bg-gray-200"
                >
                    Sort by Name (
                    {sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>
                <input
                    type="text"
                    placeholder="Search by name"
                    className="p-2 rounded-md text-black w-full mb-2 md:w-1/3 mb-4 md:mb-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((surah, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-8 rounded-2xl w-full max-w-md text-black rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            {surah.nama} ({surah.asma})
                        </h2>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Nomor:</strong> {surah.nomor}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Arti:</strong> {surah.arti}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Jumlah Ayat:</strong> {surah.ayat}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Type:</strong> {surah.type}
                        </p>
                        <p className="text-sm text-gray-700 mb-4">
                            {surah.keterangan}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayAPIPage;
