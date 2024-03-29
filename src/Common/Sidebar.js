import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";


const Sidebar = ()=>{

    return(
        <>
            <Link to="/">Hook</Link>
            <Link to="/custom-hook">Custom Hook</Link>
            <Link >HOC
                <Link to="hoc/user-list">User list</Link>
                <Link to="hoc/todo-list">Todo List</Link>
                <Link to="hoc/use-reducer">Reducer</Link>
            </Link>
            <Link to="/notification-group">Notification Group</Link>
            <Link to="/error-boundary">Error Boundary</Link>
            <Link to="/redux">Redux</Link>
            <Link >Router
                <Link to="/router/home">Home</Link>
                <Link to="/router/profile/123">Profile</Link>
            </Link>
            <Link to="/custom-chiplist">Custom chiplist</Link>
        </>
    )
}
export default Sidebar;