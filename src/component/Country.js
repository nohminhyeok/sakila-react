import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Country() {
    // const countryList = [];
    const [countryList, setCountryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLast, setIsLast] = useState(false);

    // API 통신 "[GET] http://localhost/country"
    useEffect(function(){
        fetch("http://localhost/countryList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(data) {setCountryList(data.content); setIsLast(data.last);}) // date{} Page타입이고, date.content 가 배열
    }, [pageNumber]); // 두번째 인자가 [빈 배열] 이면 처음 화면이 랜더링될때 한 번만 useEffect() 실행
    
    
  return (
    <div>
        <h1>Country (currentPage: {pageNumber})</h1>
        <table border="1">
            <tr>
                <th>country id</th>
                <th>country</th>
            </tr>
            {
                countryList.map((c) => (
                    <tr key={c.countryId}>
                        <td>{c.countryId}</td>
                        <td><Link to={`/country/${c.countryId}`}>{c.country}</Link></td>
                    </tr>
                ))
            }
        </table>
        <button onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1);
        }}disabled={pageNumber === 1}>이전</button>
        <button onClick={() => {
            if(!isLast) setPageNumber(pageNumber+1);
        }}>다음</button>
    </div>

  )
}
