import React from "react";
import { Link, Outlet } from "react-router-dom";

const RouterMaramiter = ()=>{
    return(
        <>
            <Link to="/home">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Outlet />
        </>
    )
}

export default RouterMaramiter