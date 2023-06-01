import React from "react";
import * as emmunType from "../emmun";
const initialState ={
    userList: []
}
const UserListReducer = (state = initialState, action)=>{
    console.log(action);
    switch(action.type){
        case emmunType.USER_LIST :
            return{...state, userList: action.payload}
        default :
            return state
    }
}

export default UserListReducer