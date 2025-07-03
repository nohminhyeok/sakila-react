import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLast, setIsLast] = useState(false);

    useEffect(function () {
        fetch("http://localhost/customerList/" + pageNumber)
            .then(function (res) { return res.json(); })
            .then(function (data) { setCustomerList(data.content); setIsLast(data.last); })
    }, [pageNumber]);

    return (
        <div className="max-w-6xl mx-auto mt-10 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-500 mb-6">
                👤 Customer (현재 페이지: {pageNumber})
            </h1>

            <Link to="/AddCustomer" className="inline-block mb-4 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-emerald-500 text-white font-semibold shadow-md hover:brightness-110 transition-all duration-200">
                ➕ Add customer
            </Link>

            <table className="w-full text-sm text-left text-gray-700 border-separate border-spacing-y-2 mb-6">
                <thead className="bg-sky-100">
                    <tr>
                        <th className="px-4 py-2 rounded-l-xl">Customer ID</th>
                        <th className="px-4 py-2">First Name</th>
                        <th className="px-4 py-2">Last Name</th>
                        <th className="px-4 py-2 rounded-r-xl">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerList.map((c) => (
                            <tr key={c.customerId} className="bg-white shadow-md hover:scale-[1.01] hover:shadow-lg transition-all duration-200">
                                <td className="px-4 py-2 rounded-l-xl text-blue-600 hover:underline">
                                    <Link to={`/customer/${c.customerId}`}>{c.customerId}</Link>
                                </td>
                                <td className="px-4 py-2">{c.firstName}</td>
                                <td className="px-4 py-2">{c.lastName}</td>
                                <td className="px-4 py-2 rounded-r-xl">{c.email}</td>
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
                            : 'bg-gradient-to-r from-sky-400 to-emerald-500 hover:brightness-110 shadow-lg'
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
                            : 'bg-gradient-to-r from-sky-400 to-emerald-500 hover:brightness-110 shadow-lg'
                    }`}
                >
                    다음
                </button>
            </div>
        </div>
    )
}
