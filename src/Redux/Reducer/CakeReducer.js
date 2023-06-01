import React from "react";
import * as emmunType from "../emmun"

const initialState = {
    cakeStore: 10,
}

const cakeReducer = (state = initialState, action)=>{
    // console.log(action);
    const newState = {...state};
    switch(action.area){
        case emmunType.BUY_SHOP_CAKE :
            // newState.cakeStore = state.cakeStore - 1
            if(action.type == "INCREASE"){
                return {
                    ...state,
                    cakeStore: state.cakeStore + 1,
                }
            }
            else if(action.type == "DECREASE"){
                return {
                    ...state,
                    cakeStore: state.cakeStore - 1,
                }
            }
            break;
        
        default:
            break;    
    }
    // console.log(state);
    return state
    
}

export default cakeReducer