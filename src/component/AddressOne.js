import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddressOne() {
    const { addressId } = useParams();
    const [address, setAddress] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/address/${addressId}`)
        .then((res) => {return res.json();})
        .then((data) => setAddress(data));
    }, [addressId]);

    return(
        <div>
            <h1>주소 상세</h1>
            <p><strong>addressId:</strong>{address.addressId}</p>
            <p><strong>address:</strong>{address.address}</p>
            <p><strong>address2:</strong>{address.adress2}</p>
            <p><strong>district:</strong>{address.district}</p>
            <p><strong>postalCode:</strong>{address.postalCode}</p>
            <p><strong>phone:</strong>{address.phone}</p>
            <p><strong>lastUpdate:</strong>{address.lastUpdate}</p>
        </div>
    )
}