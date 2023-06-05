import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="dashboard">
                <div className="dashboardLeft">
                    <h1>Dashboard</h1>
                    <Sidebar />
                </div>
                <section className="dashboardRight">
                    <Outlet />
                </section>
            </div>
        </React.Fragment>

    )
}

export default Dashboard