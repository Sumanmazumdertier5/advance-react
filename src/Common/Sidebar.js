import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";


const Sidebar = ()=>{

    return(
        <>
            <Link to="/">Hook</Link>
            <Link >HOC
                <Link to="/user-list">User list</Link>
                <Link to="/todo-list">Todo List</Link>
            </Link>
            <Link to="/notification-group">Notification Group</Link>
            <Link to="/error-boundary">Error Boundary</Link>
            <Link to="/redux">Redux</Link>
            <Link >Router
                <Link to="/router/home">Home</Link>
                <Link to="/router/profile/123">Profile</Link>
            </Link>
        </>
    )
}
export default Sidebar;