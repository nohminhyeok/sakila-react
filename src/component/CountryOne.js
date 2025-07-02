import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryOne() {
    const {countryId} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/country/${countryId}`)
        .then((res) => {return res.json();})
        .then((data) => setCountry(data));
    }, [countryId]);

    return (
        <div>
            <h1>나라 상세 정보</h1>
            <p><strong>countryId:</strong> {country.countryId}</p>
            <p><strong>country:</strong> {country.country}</p>
            <p><strong>lastUpdate:</strong> {country.lastUpdata}</p>
        </div>
    )
}