import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [district, setDistrict] = useState("");
    const [cityId, setCityId] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    function addAddress() {
        fetch("http://localhost/address", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                address: address,
                address2: address2,
                district: district,
                cityId: cityId,
                postalCode: postalCode,
                phone: phone
            })
        })
        .then((res) => {
            if (res.ok) {
                alert("입력 성공");
                navigate("/Address");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                📮 주소 등록
            </h1>
            <div className="space-y-4">
                <InputField label="Address" value={address} onChange={setAddress} />
                <InputField label="Address2" value={address2} onChange={setAddress2} />
                <InputField label="District" value={district} onChange={setDistrict} />
                <InputField label="City ID" value={cityId} onChange={setCityId} />
                <InputField label="Postal Code" value={postalCode} onChange={setPostalCode} />
                <InputField label="Phone" value={phone} onChange={setPhone} />

                <button
                    onClick={addAddress}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:brightness-110 text-white font-semibold py-2 rounded-xl transition-all duration-200 shadow-lg"
                >
                    입력
                </button>
            </div>
        </div>
    );
}

// 서브 컴포넌트: 입력 필드
function InputField({ label, value, onChange }) {
    return (
        <div>
            <label className="block mb-1 font-semibold text-gray-700">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
        </div>
    );
}
