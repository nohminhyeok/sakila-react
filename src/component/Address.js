import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Address() {
    const [addressList, setAddressList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLast, setIsLast] = useState(false);

    useEffect(() => {
        fetch("http://localhost/addressList/"+pageNumber)
        .then((res) => {return res.json();})
        .then((data) => {setAddressList(data.content); setIsLast(data.last);})
    }, [pageNumber]);

    return (
        <div>
            <h1>Address</h1>
            <table border="1">
                <tr>
                    <th>addressId</th>
                    <th>address</th>
                    <th>district</th>
                    <th>phone</th>
                    <th>postalCode</th>
                </tr>
                {
                    addressList.map((c) => (
                        <tr key={c.addressId}>
                            <td>{c.addressId}</td>
                            <td><Link to={`/address/${c.addressId}`}>{c.address}</Link></td>
                            <td>{c.district}</td>
                            <td>{c.phone}</td>
                            <td>{c.postalCode}</td>
                        </tr>
                    ))
                }
            </table>
            <button onClick={() => {
                if(pageNumber > 1) setPageNumber(pageNumber - 1);
            }} disabled={pageNumber === 1}>이전</button>
            <button onClick={() => {
                if(!isLast) setPageNumber(pageNumber +1);
            }}>다음</button>
        </div>
    )
}
