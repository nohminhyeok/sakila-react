import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddCity() {

    const [city, setCity] = useState("");
    const [countryId, setCountryId] = useState("");
    const navigate = useNavigate();
    function addCity() {
        fetch("http://localhost/city",{
            method: "POST"
            ,headers: {"Content-Type": "application/json"}
            ,body: JSON.stringify({
                city : city
                ,countryId : countryId
            })
        })
        .then((res) => {
            if(res.ok){
                alert("입력 성공");
                navigate("/City");
            } else {
                alert("입력 실패")
            }
        })
    }
    return (
        <div>
            <h1>AddCity</h1>
            <div>
                city : <input type="text" onChange={(e) => {
                    setCity(e.target.value)
                }} />
                <br />
                countryId : <input type="text" onChange={(e) => {
                    setCountryId(e.target.value)
                }}/>
                <br />
                <button onClick={addCity}>입력</button>
            </div>
        </div>
    )
}
