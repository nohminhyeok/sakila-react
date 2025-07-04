import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditCustomer() {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState([]);
    const navigate = useNavigate();

    function edit() {
        if (window.confirm('수정하시겠습니까?')) {
            fetch("http://localhost/customer", {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customerId: customerId,
                    storeId: customer.storeId,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    email: customer.email,
                    addressId: customer.addressId,
                    active: customer.active
                })
            })
                .then((res) => {
                    if (res.ok) {
                        alert('수정 성공')
                        navigate('/Customer')
                    } else {
                        alert('수정 실패')
                    }
                })
        } else {
            alert('수정을 취소했습니다.')
        }
    }

    useEffect(() => {
        fetch(`http://localhost/customer/${customerId}`)
            .then((res) => { return res.json() })
            .then((data) => { setCustomer(data) })
    }, [customerId])

    return (
        <div className="max-w-2xl mx-auto mt-20 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6">
                EditCustomer
            </h1>
            <div className="space-y-4 text-gray-800 text-lg">
                <label className="block font-semibold text-gray-600">firstName</label>
                <input type="text" value={customer.firstName} onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />

                <label className="block font-semibold text-gray-600">lastName</label>
                <input type="text" value={customer.lastName} onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />

                <label className="block font-semibold text-gray-600">email</label>
                <input type="text" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />

                <label className="block font-semibold text-gray-600">active</label>
                <input type="text" value={customer.active} onChange={(e) => setCustomer({ ...customer, active: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />

                <label className="block font-semibold text-gray-600">storeId</label>
                <input type="number" value={customer.storeId} onChange={(e) => setCustomer({ ...customer, storeId: Number(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />

                <label className="block font-semibold text-gray-600">addressId</label>
                <input type="number" value={customer.addressId} onChange={(e) => setCustomer({ ...customer, addressId: Number(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />

                <button onClick={edit} className="w-full py-2 mt-4 px-4 rounded-xl bg-gradient-to-r from-green-400 to-teal-600 text-white font-bold shadow hover:opacity-90 transition">
                    수정
                </button>
            </div>
        </div>
    )
}
