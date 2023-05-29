import React from "react";
// import HigherOrderComponent from "./HigherOrderComponent";
import HOC from "./HOC";

const TodoList = (props)=>{
    console.log(props)
    return(
        <React.Fragment>
            <ul>
                {
                    props.data && props.data.map((item, index)=>{
                        return(
                            <li key={index}>
                                <p>{item.title}</p>
                                <span>{item.completed}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}



const SearchTodoList = HOC(TodoList, "todos")
export default SearchTodoList