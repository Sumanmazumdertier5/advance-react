import React, {useState, useEffect} from "react";
import HigherOrderComponent from "./HigherOrderComponent";
import HOC from "./HOC";

const TodoList = ()=>{
    const [userData, setUserData] = useState([]);
    const userDataHandelar = async ()=>{
        let users = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        let userJson = await users.json();
        setUserData(userJson);
        console.log(userData);
    }
    useEffect(()=>{
        userDataHandelar();
    }, [userData.length]);

    return( <SearchTodoList data={userData} />)
}

const BaseTodoList = ({data})=>{
    console.log(data);
    return(
        <ul>
            <li></li>
        </ul>
    )
}

const SearchTodoList = HigherOrderComponent(BaseTodoList)
export default TodoList