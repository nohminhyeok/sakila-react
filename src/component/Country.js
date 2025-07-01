import { useEffect, useState } from "react"

export default function Country() {
    // const countryList = [];
    const [countryList, setCountryList] = useState([]);


    // API 통신 "[GET] http://localhost/country"
    useEffect(function(){
        fetch("http://localhost/country")
        .then(function(res){return res.json();})
        .then(function(data) {setCountryList(data)})
    }, []);
    
    
  return (
    <div>
        <h1>Country({countryList.length})</h1>
        <table border="1">
            <tr>
                <th>country id</th>
                <th>country</th>
            </tr>
            {
                countryList.map((c) => (
                    <tr key={c.countryId}>
                        <td>{c.countryId}</td>
                        <td>{c.country}</td>
                    </tr>
                ))
            }
        </table>
    </div>

  )
}
