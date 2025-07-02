import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CustomerOne() {
    const { customerId } = useParams();
    const [ customer, setCustomer] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/customer/${customerId}`)
        .then((res) => {return res.json();})
        .then((data) => setCustomer(data));
    }, [customerId]);

    return(
        <div>
            <h1>주소 상세</h1>
            <p><strong>customerId:</strong>{customer.customerId}</p>
            <p><strong>firstName:</strong>{customer.firstName}</p>
            <p><strong>lastName:</strong>{customer.lastName}</p>
            <p><strong>email:</strong>{customer.email}</p>
            <p><strong>active:</strong>{customer.active}</p>
            <p><strong>createDate:</strong>{customer.createDate}</p>
            <p><strong>lastUpdate:</strong>{customer.lastUpdate}</p>
        </div>
    )
}