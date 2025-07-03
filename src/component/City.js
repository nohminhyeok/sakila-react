import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function City() {
    const [cityList, setCityList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLast, setIsLast] = useState(false);

    useEffect(() => {
        fetch("http://localhost/cityList/" + pageNumber)
            .then((res) => { return res.json(); })
            .then((data) => { setCityList(data.content); setIsLast(data.last); })
    }, [pageNumber]);

    return (
        <div className="max-w-5xl mx-auto mt-10 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-8">
                🌆 City List
            </h1>

            <Link to="/AddCity" className="inline-block mb-4 px-4 py-2 rounded-xl bg-gradient-to-r from-green-400 to-teal-600 text-white font-semibold shadow-md hover:brightness-110 transition-all duration-200">
            ➕ Add city</Link>

            <table className="w-full text-sm text-left text-gray-700 border-separate border-spacing-y-2">
                <thead className="bg-green-100 text-gray-700">
                    <tr>
                        <th className="px-6 py-3 rounded-l-xl">City ID</th>
                        <th className="px-6 py-3 rounded-r-xl">City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cityList.map((c) => (
                            <tr key={c.cityId} className="bg-white shadow-md hover:scale-[1.01] hover:shadow-lg transition-all duration-200">
                                <td className="px-6 py-3 rounded-l-xl">{c.cityId}</td>
                                <td className="px-6 py-3 rounded-r-xl">
                                    <Link to={`/city/${c.cityId}`} className="text-blue-600 hover:underline">
                                        {c.city}
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => {
                        if (pageNumber > 1) setPageNumber(pageNumber - 1);
                    }}
                    disabled={pageNumber === 1}
                    className={`px-5 py-2 rounded-xl font-semibold text-white transition-all duration-200 ${
                        pageNumber === 1
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-400 to-emerald-500 hover:brightness-110 shadow-lg'
                    }`}
                >
                    이전
                </button>

                <button
                    onClick={() => {
                        if (!isLast) setPageNumber(pageNumber + 1);
                    }}
                    className={`px-5 py-2 rounded-xl font-semibold text-white transition-all duration-200 ${
                        isLast
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-400 to-emerald-500 hover:brightness-110 shadow-lg'
                    }`}
                >
                    다음
                </button>
            </div>
        </div>
    )
}
