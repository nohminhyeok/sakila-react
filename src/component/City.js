import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function City() {
    const[cityList, setCityList] = useState([]);
    const[pageNumber, setPageNumber] = useState(1);
    const[isLast, setIsLast] = useState(false);

    useEffect(() => {
        fetch("http://localhost/cityList/"+pageNumber)
        .then((res) => {return res.json();})
        .then((data) => {setCityList(data.content); setIsLast(data.last);})
    }, [pageNumber]);

    return (
        <div>
            <h1>City</h1>
            <table border="1">
                <tr>
                    <th>city id</th>
                    <th>city</th>
                </tr>
                {
                    cityList.map((c) => (
                        <tr key={c.cityId}>
                            <td>{c.cityId}</td>
                            <td><Link to={`/city/${c.cityId}`}>{c.city}</Link></td>
                        </tr>
                    ))
                }
            </table>
            <button onClick={() => {
                if(pageNumber > 1) setPageNumber(pageNumber - 1);
            }} disabled={pageNumber === 1}>이전</button>
            <button onClick={() => {
                if(!isLast) setPageNumber(pageNumber + 1);
            }}>다음</button>
        </div>
    )
}
