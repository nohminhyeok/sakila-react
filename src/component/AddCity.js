import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCity() {
    const [city, setCity] = useState("");
    const [countryId, setCountryId] = useState("");
    const navigate = useNavigate();

    function addCity() {
        fetch("http://localhost/city", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                city: city,
                countryId: countryId
            })
        })
        .then((res) => {
            if (res.ok) {
                alert("입력 성공");
                navigate("/City");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                🏙️ 도시 등록
            </h1>

            <div className="space-y-4">
                <InputField label="City" value={city} onChange={setCity} />
                <InputField label="Country ID" value={countryId} onChange={setCountryId} />

                <button
                    onClick={addCity}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:brightness-110 text-white font-semibold py-2 rounded-xl transition-all duration-200 shadow-lg"
                >
                    입력
                </button>
            </div>
        </div>
    );
}

// 서브 컴포넌트 - 입력 필드
function InputField({ label, value, onChange }) {
    return (
        <div>
            <label className="block mb-1 font-semibold text-gray-700">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
        </div>
    );
}
