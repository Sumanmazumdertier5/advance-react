import React from "react"
import * as emmunType from "../emmun";


const initialState = {
    iceCreamStore: 10,
}

const iceCreamReducer = (state = initialState, action)=>{
    console.log(action.area);
    switch(action.area){
        case emmunType.BUY_ICECREAM_CAKE:
            if(action.type == "DECREASE"){
                return {
                    ...state,
                    iceCreamStore: state.iceCreamStore - 1
                }
            }
            else if(action.type == "INCREASE"){
                return{
                    ...state,
                    iceCreamStore: state.iceCreamStore + 1
                }
            }
        break;

            
        default:
            break;
    }
    return state
}

export default iceCreamReducer