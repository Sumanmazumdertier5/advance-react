import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return(
    <React.Fragment>
            <h1>Dashboard</h1>
        <Sidebar />
        <section>
            <Outlet />
        </section>
    </React.Fragment>

    )
}

export default Dashboard