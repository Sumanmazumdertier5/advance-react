import React from "react";
import { Link, Outlet } from "react-router-dom";

const RouterMaramiter = ()=>{
    return(
        <>
            <Link to="/router/home">Home</Link>
            <Link to="/router/details">Details</Link>
            <Link to="/router/profile/123">Profile</Link>
            <Outlet />
        </>
    )
}

export default RouterMaramiter