import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ()=>{

    return(
        <>
            <Link to="/">Hook</Link>
            <Link to="/hoc">Higer Order Component</Link>
            <Link to="/notification-group">Notification Group</Link>
        </>
    )
}
export default Sidebar;