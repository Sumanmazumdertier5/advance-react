import React from "react";
import UserList from "./UserList";
import TodoList from "./TodoList";
import { Outlet } from "react-router-dom";
const HigherOrderRouter = ()=>{

    return(
        <>
            <Outlet />
            {/* <TodoList /> */}
            {/* <UserList /> */}
        </>
    )
}
export default HigherOrderRouter;