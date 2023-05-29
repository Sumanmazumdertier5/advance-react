import React from "react";
import SearchTodoList from "./TodoList";
import SearchUserList from "./UserList";
const HigherOrderRouter = ()=>{

    return(
        <>
            <SearchTodoList />
            <SearchUserList />
        </>
    )
}
export default HigherOrderRouter;