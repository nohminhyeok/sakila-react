import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry() {
    const [country, setCountry] = useState("");
    const navigate = useNavigate();

    function addCountry() {
        fetch("http://localhost/country", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: country })
        })
        .then((res) => {
            if (res.ok) {
                alert("입력 성공");
                navigate("/Country");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                🌍 나라 추가
            </h1>

            <div className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Country</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <button
                    onClick={addCountry}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:brightness-110 text-white font-semibold py-2 rounded-xl transition-all duration-200 shadow-lg"
                >
                    입력
                </button>
            </div>
        </div>
    );
}
