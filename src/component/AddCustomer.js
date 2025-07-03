import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
    const [storeId, setStoreId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [addressId, setAddressId] = useState("");
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    function addCustomer() {
        fetch("http://localhost/customer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                storeId: storeId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                addressId: addressId,
                active: active
            })
        })
        .then((res) => {
            if (res.ok) {
                alert("입력 성공");
                navigate("/customer");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-400">
                🧍 고객 추가
            </h1>

            <div className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Store ID</label>
                    <input type="text" value={storeId} onChange={(e) => setStoreId(e.target.value)} className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastname(e.target.value)} className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Address ID</label>
                    <input type="text" value={addressId} onChange={(e) => setAddressId(e.target.value)} className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">Active</label>
                    <input type="text" value={active} onChange={(e) => setActive(e.target.value)} className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400" />
                </div>

                <button
                    onClick={addCustomer}
                    className="w-full mt-4 py-2 font-semibold text-white rounded-xl bg-gradient-to-r from-pink-500 to-red-400 hover:brightness-110 shadow-md transition-all duration-200"
                >
                    입력
                </button>
            </div>
        </div>
    );
}
