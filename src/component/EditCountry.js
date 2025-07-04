import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function EditCountry() {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});
    const navigate = useNavigate();

    function edit() {
        fetch("http://localhost/country", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                countryId: countryId,  
                country: country.country
            })
    })
        .then((res) => {
            if(res.ok){
                navigate('/Country')
            } else {
                alert('수정 실패')
                navigate(`/CountryOne/${country.countryId}`)
            }
        })
    }

    useEffect(() => {
        fetch(`http://localhost/country/${countryId}`)
            .then((res) => { return res.json(); })
            .then((data) => {setCountry(data)});
    }, []);

    return (
        <div className="max-w-xl mx-auto mt-20 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-500 mb-6">
                EditCountry(countryId : {countryId})
            </h1>
            <div className="space-y-4 text-gray-800 text-lg">
                <label className="block font-semibold text-gray-600">country :</label>
                <input
                    type="text"
                    value={country.country}
                    onChange={(e) => setCountry({ ...country, country: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <br/>
                <button
                    onClick={edit}
                    className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-emerald-500 text-white font-bold shadow hover:opacity-90 transition"
                >
                    수정
                </button>
            </div>
        </div>
    )
}
