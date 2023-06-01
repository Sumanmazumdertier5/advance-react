import React from "react";
import { combineReducers } from "redux";
import cakeReducer from "./Reducer/CakeReducer";
import iceCreamReducer from "./Reducer/IceCreameReducer";
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreamReducer,
})

export default rootReducer;