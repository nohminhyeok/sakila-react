import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CustomerOne() {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState([]);
    const navigate = useNavigate();

    function remove(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch(`http://localhost/customer/${customerId}`, {
                method: 'DELETE'
            })
            .then((res) => {    
                if(res.ok){
                    alert('삭제 성공');
                    navigate('/Customer')
                } else {
                    alert('삭제 실패')
                }
            })
        } else {
            alert('삭제 취소')
        }
    }

    useEffect(() => {
        fetch(`http://localhost/customer/${customerId}`)
            .then((res) => { return res.json(); })
            .then((data) => setCustomer(data));
    }, [customerId]);

    return (
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500 mb-6">
                👤 고객 상세 정보 (ID: {customerId})
            </h1>

            <div className="space-y-4 text-lg text-gray-800">
                <p>
                    <span className="font-semibold text-gray-600">🆔 customerId:</span> {customer.customerId}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">👤 firstName:</span> {customer.firstName}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">👤 lastName:</span> {customer.lastName}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">📧 email:</span> {customer.email}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">✅ active:</span> {customer.active}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">📅 createDate:</span> {customer.createDate}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🕒 lastUpdate:</span> {customer.lastUpdate}
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
                    onClick={() => navigate(`/EditCustomer/${customerId}`)}
                    className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-400 to-emerald-500 shadow hover:opacity-90 transition"
                >
                    수정
                </button>
            </div>

        </div>
    )
}
