import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CityOne() {
    const { cityId } = useParams();
    const [city, setCity] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/city/${cityId}`)
            .then((res) => { return res.json(); })
            .then((data) => setCity(data));
    }, [cityId]);

    return (
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6">
                🏙️ 도시 상세 정보
            </h1>

            <div className="space-y-4 text-lg text-gray-800">
                <p>
                    <span className="font-semibold text-gray-600">🆔 ID:</span> {city.cityId}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">📍 도시명:</span> {city.city}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🕒 최종 수정일:</span> {city.lastUpdate}
                </p>
            </div>
        </div>
    );
}
