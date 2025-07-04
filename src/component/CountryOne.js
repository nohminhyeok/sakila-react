import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CountryOne() {
    const { countryId } = useParams();
    const [country, setCountry] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/country/${countryId}`)
            .then((res) => { return res.json(); })
            .then((data) => {setCountry(data)});
    }, [countryId]);

    function remove(){
        if(window.confirm('삭제하시겠습니까?')) {
            // alert('삭제 API 통신')
            // navigate
            fetch(`http://localhost/country/${countryId}`, {
                method: 'DELETE'
            })
            .then((res) => {
                if(res.ok) { // ex) http code 200
                    navigate('/Country')
                } else { // ex) http error code 400, 500
                    window.alert('삭제 실패')
                }
            })
        } else {
            alert('삭제를 취소했습니다')
        }
    }

    return (
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-6">
                🌐 나라 상세 정보 (ID: {countryId})
            </h1>

            <div className="space-y-4 text-lg text-gray-800">
                <p>
                    <span className="font-semibold text-gray-600">🆔 countryId:</span> {country.countryId}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🏳️ country:</span> {country.country}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🕒 lastUpdate:</span> {country.lastUpdate}
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
                    onClick={() => navigate(`/EditCountry/${countryId}`)}
                    className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-pink-500 shadow hover:opacity-90 transition"
                >
                    수정
                </button>
            </div>
        </div>
    )
}
