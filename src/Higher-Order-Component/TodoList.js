import React, {useState, useEffect} from "react";
import HigherOrderComponent from "./HigherOrderComponent";
import HOC from "./HOC";

const TodoList = ()=>{
    const [userData, setUserData] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const userDataHandelar = async ()=>{
        let users = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        let todoJson = await users.json();
        if(todoJson.length){
            setUserData(todoJson);
        }
        // console.log(userData);
    }
    useEffect(()=>{
        userDataHandelar();
    }, [userData.length]);

    const searchHandeler = (event)=>{
        setSearchItem(event.target.value)
    }

    return( 
        <React.Fragment>
            <h3>Todo list</h3>
            <input type="text" onChange={(e)=>{searchHandeler(e)}}/>
            <SearchTodoList data={userData} searchItem={searchItem} entity="todos" />
        </React.Fragment>
    //   <WrappedComponent data={userData}  />
    )
}

const BaseTodoList = ({data})=>{
    console.log(data);
    return(
        <ul>
            {
                data.length && data.map((item, index)=>{
                    return(
                        <li key={index}>{item.title}</li>
                    )
                })
            }
        </ul>
    )
}

const SearchTodoList = HigherOrderComponent(BaseTodoList)
export default TodoList