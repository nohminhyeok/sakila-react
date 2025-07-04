import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CityOne() {
    const { cityId } = useParams();
    const [city, setCity] = useState([]);
    const navigate = useNavigate();
    function remove() {
        if(window.confirm('삭제하겠습니까?')){
            fetch(`http://localhost/city/${cityId}`, {
                method : 'DELETE'
            })
            .then((res) => {
                if(res.ok){
                    alert('삭제 성공');
                    navigate('/City');
                } else {
                    alert('삭제 실패');
                }
            })
        }

    }
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
            <div className="flex justify-end mt-8 space-x-4">
                <button
                    onClick={remove}
                    className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow hover:opacity-90 transition"
                >
                    삭제
                </button>
                <button
                    onClick={() => navigate(`/EditCity/${cityId}`)}
                    className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-teal-600 shadow hover:opacity-90 transition"
                >
                    수정
                </button>
            </div>
        </div>
    );
}
