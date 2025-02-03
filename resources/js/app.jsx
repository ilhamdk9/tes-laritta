import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FibonacciPage from "./components/Fibonacci";
import SortArrayPage from "./components/SortArray";
import DisplayAPIPage from "./components/DisplayAPI";

function MainPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-red-500 to-white flex justify-center items-center p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg p-8 rounded-2xl w-full max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Ilham Dwi Kurniawan Front End
                </h1>
                <Link to="/fibonacci">
                    <button className="bg-red-500 w-full text-white p-4 rounded-md hover:bg-red-600 transition duration-200">
                        Fibonacci
                    </button>
                </Link>

                <Link to="/sortarray">
                    <button className="bg-red-500 mt-2 w-full text-white p-4 rounded-md hover:bg-red-600 transition duration-200">
                        Sort Array
                    </button>
                </Link>

                <Link to="/displayapi">
                    <button className="bg-red-500 mt-2 w-full text-white p-4 rounded-md hover:bg-red-600 transition duration-200">
                        Display API
                    </button>
                </Link>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/fibonacci" element={<FibonacciPage />} />
                <Route path="/sortarray" element={<SortArrayPage />} />
                <Route path="/displayapi" element={<DisplayAPIPage />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
