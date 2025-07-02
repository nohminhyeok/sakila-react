import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CityOne() {
    const { cityId } = useParams();
    const [city, setCity] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/city/${cityId}`)
        .then((res) => {return res.json();})
        .then((data) => setCity(data));
    }, [cityId]);

    return (
        <div>
            <h1>도시 상세 정보</h1>
            <p><strong>ID:</strong> {city.cityId}</p>
            <p><strong>도시명:</strong> {city.city}</p>
            <p><strong>최종 수정일:</strong> {city.lastUpdate}</p>
        </div>
    );
}
