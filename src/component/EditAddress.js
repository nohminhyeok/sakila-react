import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAddress() {
    const { addressId } = useParams();
    const [address, setAddress] = useState({});
    const navigate = useNavigate();

    function edit() {
        if (window.confirm('수정하시겠습니까?')) {
            fetch('http://localhost/address', {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    addressId: address.addressId,
                    address: address.address,
                    address2: address.address2,
                    district: address.district,
                    cityId: address.cityId,
                    postalCode: address.postalCode,
                    phone: address.phone
                })
            })
            .then((res) => {
                if (res.ok) {
                    alert('수정 성공');
                    navigate('/Address');
                } else {
                    alert('수정 실패');
                    navigate(`/AddressOne/${addressId}`);
                }
            });
        } else {
            alert('수정을 취소했습니다.');
        }
    }

    useEffect(() => {
        fetch(`http://localhost/address/${addressId}`)
            .then(res => res.json())
            .then(data => setAddress(data));
    }, [addressId]);

    return (
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500 mb-6">
                🏠 주소 수정 (ID: {addressId})
            </h1>

            <div className="space-y-4">
                <label className="block text-gray-700 font-semibold">
                    📍 Address
                    <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-emerald-300"
                        value={address.address || ''}
                        onChange={(e) => setAddress({ ...address, address: e.target.value })}
                    />
                </label>

                <label className="block text-gray-700 font-semibold">
                    🏢 Address2
                    <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-emerald-300"
                        value={address.address2 || ''}
                        onChange={(e) => setAddress({ ...address, address2: e.target.value })}
                    />
                </label>

                <label className="block text-gray-700 font-semibold">
                    🗺️ District
                    <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-emerald-300"
                        value={address.district || ''}
                        onChange={(e) => setAddress({ ...address, district: e.target.value })}
                    />
                </label>

                <label className="block text-gray-700 font-semibold">
                    🏣 Postal Code
                    <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-emerald-300"
                        value={address.postalCode || ''}
                        onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                    />
                </label>

                <label className="block text-gray-700 font-semibold">
                    ☎️ Phone
                    <input
                        type="text"
                        className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-emerald-300"
                        value={address.phone || ''}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    />
                </label>
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={edit}
                    className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-teal-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform duration-200"
                >
                    ✏️ 수정
                </button>
            </div>
        </div>
    );
}
