import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryOne() {
    const { countryId } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        fetch(`http://localhost/country/${countryId}`)
            .then((res) => { return res.json(); })
            .then((data) => {setCountry(data)});
    }, [countryId]);

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

            <button onClick={() => {

            }}>[삭제]</button>
            
            <button onClick={() => {

            }}>[수정]</button>
        </div>
    )
}
