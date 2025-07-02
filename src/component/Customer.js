import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLast, setIsLast] = useState(false);

    useEffect(function(){
        fetch("http://localhost/customerList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(data) {setCustomerList(data.content); setIsLast(data.last);})
    }, [pageNumber]);

    return (
        <div>
            <h1>Customer (currentPage: {pageNumber})</h1>
            <table border="1">
                <tr>
                    <th>customer id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                </tr>
                {
                    customerList.map((c) => (
                        <tr key={c.customerId}>
                            <td> <Link to={`/customer/${c.customerId}`}>{c.customerId}</Link></td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.email}</td>
                        </tr>
                    ))
                }
            </table>
            <button onClick={() => {
                if (pageNumber > 1) setPageNumber(pageNumber - 1);
            }}disabled={pageNumber === 1}>이전</button>

            <button onClick={() => {
                if(!isLast) setPageNumber(pageNumber + 1);
            }}>다음</button>
        </div>
    )
}
