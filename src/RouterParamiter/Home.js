import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();
    const goToAbout = ()=>{
        navigate("");
    }

    return(
        <><h3>Home page</h3>
        <button onClick={goToAbout}></button>
        </>
    )
}

export default Home