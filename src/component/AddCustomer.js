import { useState } from "react";
import { useNavigate} from "react-router-dom"

export default function AddCustomer() {
    const [storeId, setStoreId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [addressId, setAddressId] = useState("");
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    function addCustomer(){
        fetch("http://localhost/customer", {
            method: "POST"
            ,headers: {"Content-Type": "application/json"}
            ,body: JSON.stringify({
                storeId : storeId
                ,firstName : firstName
                ,lastName : lastName
                ,email : email
                ,addressId : addressId
                ,active : active
            })
        })
        .then((res) =>{
            if(res.ok){
                alert("입력 성공");
                navigate("/customer");
            } else {
                alert("입력 실패");
            }
        })
    }

    return (
        <div>
            <h1>
                AddCustomer
            </h1>
            <div>
                storeId : <input type="text" onChange={(e) => {
                    setStoreId(e.target.value)
                }} />
                <br />
                firstName : <input type="text" onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <br />
                lastName : <input type="text" onChange={(e) => {
                    setLastname(e.target.value)
                }} />
                <br />
                email : <input type="text" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <br />
                addressId : <input type="text" onChange={(e) => {
                    setAddressId(e.target.value)
                }} />
                <br />
                active : <input type="text" onChange={(e) => {
                    setActive(e.target.value)
                }} />
                <br />
            </div>
            <button onClick={addCustomer}>입력</button>
        </div>
    )
}
