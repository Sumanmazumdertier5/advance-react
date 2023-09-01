import React ,{useEffect, useReducer, useState} from "react";

const actionType = {
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
    RESET_TODO: "reset-todo"
}


const Todo = ()=>{
    const initialState = [];
    const reducer = (state, action)=>{
        console.log(state, action);
        switch(action.type){
            case actionType.ADD_TODO :
                return [
                    ...state,
                    {id: state.length + 1, name: action.payload}
                ]
            break;
            case actionType.DELETE_TODO :
                return state.filter((item)=> item.id !== action.payload)
            break;
            
            default : return state
        }
    }
    const initial = ()=>{
        let result = [{name: "Suman", id: 1}];
        return result;
    }
    const [todo, dispatch] = useReducer(reducer, initialState, initial);
    return(
        <>
            <h1>Reducer</h1>
            <input type="text" onBlur={(e)=> dispatch({type: actionType.ADD_TODO, payload: e.target.value})} />

            {console.log(todo)}
            <ul>
                {
                    todo && todo.length > 0 && 
                    todo.map((item)=>{
                        return(
                            <li key={item.id}>{item.name}
                                <span>
                                    <button onClick={()=> dispatch({type: actionType.DELETE_TODO, payload: item.id})}>Delete</button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Todo