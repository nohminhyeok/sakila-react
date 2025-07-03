import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddressOne() {
    const { addressId } = useParams();
    const [address, setAddress] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/address/${addressId}`)
            .then((res) => { return res.json(); })
            .then((data) => setAddress(data));
    }, [addressId]);

    return (
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
                🧾 주소 상세
            </h1>

            <div className="space-y-4 text-lg text-gray-800">
                <p>
                    <span className="font-semibold text-gray-600">🆔 addressId:</span> {address.addressId}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🏠 address:</span> {address.address}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🏢 address2:</span> {address.address2}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🌐 district:</span> {address.district}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">📮 postalCode:</span> {address.postalCode}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">📞 phone:</span> {address.phone}
                </p>
                <p>
                    <span className="font-semibold text-gray-600">🕒 lastUpdate:</span> {address.lastUpdate}
                </p>
            </div>
        </div>
    );
}
