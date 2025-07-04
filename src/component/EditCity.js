import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function EditCity() {
    const { cityId } = useParams();
    const [city, setCity] = useState({});
    const navigate = useNavigate();

    function edit() {
        if (window.confirm('정말 수정하시겠습니까?')) {
            fetch('http://localhost/city', {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cityId: city.cityId,
                    city: city.city,
                    countryId: city.countryId
                })
            })
            .then((res) => {
                if (res.ok) {
                    alert('수정 성공');
                    navigate('/city');
                } else {
                    alert('수정 실패');
                    navigate(`/CityOne/${city.cityId}`);
                }
            });
        }
    }

    useEffect(() => {
        fetch(`http://localhost/city/${cityId}`)
            .then((res) => res.json())
            .then((data) => setCity(data));
    }, [cityId]);

    return (
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 mb-6">
                🏙️ 도시 수정
            </h1>

            <div className="space-y-4 text-gray-800 text-lg">
                <div>
                    <label className="block font-semibold text-gray-600">도시명</label>
                    <input
                        type="text"
                        value={city.city || ''}
                        onChange={(e) => setCity({ ...city, city: e.target.value })}
                        className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <button
                    onClick={edit}
                    className="mt-6 w-full py-2 px-4 rounded-xl bg-gradient-to-r from-green-400 to-teal-600 text-white font-bold shadow hover:opacity-90 transition"
                >
                    ✅ 수정
                </button>
            </div>
        </div>
    );
}
