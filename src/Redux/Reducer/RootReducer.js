import React from "react";
import { combineReducers } from "redux";
import cakeReducer from "./CakeReducer";
import iceCreamReducer from "./IceCreameReducer";
import UserListReducer from "./UserListReducer"

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreamReducer,
    userList: UserListReducer,
})

export default rootReducer;