import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {

    const [ category, setCategory ] = useState("");
    let navigate = useNavigate();

    const getApiData = (param) => {
        //event.preventDefault();
        setCategory(param);
    };

    return (
        <div>
            <h2> Which execuse category you like:</h2>
            <button onClick={() => getApiData("family")}> Family </button>
            <button onClick={() => getApiData("party")}> Party </button>
            <button onClick={() => getApiData("office")}> Office </button>

            <button onClick={() => {
                navigate("/execuse/${category}");
            }}>
            Navigate to contact ${category}
            </button>
        </div>
        );
}