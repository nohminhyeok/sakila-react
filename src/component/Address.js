import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Address() {
    const [addressList, setAddressList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLast, setIsLast] = useState(false);

    useEffect(() => {
        fetch("http://localhost/addressList/" + pageNumber)
            .then((res) => { return res.json(); })
            .then((data) => { setAddressList(data.content); setIsLast(data.last); })
    }, [pageNumber]);

    return (
        <div className="max-w-6xl mx-auto mt-10 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-8">
                📮 Address List
            </h1>

            <Link to="/AddAddress">Add address</Link>

            <table className="w-full text-sm text-left text-gray-700 border-separate border-spacing-y-2 mb-6">
                <thead className="bg-indigo-100">
                    <tr>
                        <th className="px-4 py-2 rounded-l-xl">ID</th>
                        <th className="px-4 py-2">주소</th>
                        <th className="px-4 py-2">구역</th>
                        <th className="px-4 py-2">전화번호</th>
                        <th className="px-4 py-2 rounded-r-xl">우편번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addressList.map((c) => (
                            <tr key={c.addressId} className="bg-white shadow-md hover:scale-[1.01] hover:shadow-lg transition-all duration-200">
                                <td className="px-4 py-2 rounded-l-xl">{c.addressId}</td>
                                <td className="px-4 py-2 text-blue-600 hover:underline">
                                    <Link to={`/address/${c.addressId}`}>{c.address}</Link>
                                </td>
                                <td className="px-4 py-2">{c.district}</td>
                                <td className="px-4 py-2">{c.phone}</td>
                                <td className="px-4 py-2 rounded-r-xl">{c.postalCode}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => {
                        if (pageNumber > 1) setPageNumber(pageNumber - 1);
                    }}
                    disabled={pageNumber === 1}
                    className={`px-5 py-2 rounded-xl font-semibold text-white transition-all duration-200 ${
                        pageNumber === 1
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-400 to-purple-500 hover:brightness-110 shadow-lg'
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
                            : 'bg-gradient-to-r from-indigo-400 to-purple-500 hover:brightness-110 shadow-lg'
                    }`}
                >
                    다음
                </button>
            </div>
        </div>
    )
}
