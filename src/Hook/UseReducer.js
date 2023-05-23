import React, {useReducer} from "react";


const UseRedicer = ()=>{
    const reducer = (state, action)=>{
        console.log(action, state);
        switch(action.type){
            case "Increment" :
                return {counts : state.counts + 1}
            case "Decrement" :
                return {counts : state.counts - 1}
            default :
            throw new Error()
        }
    }
    const [state, dispatch] = useReducer(reducer, {counts: 0})
    
    return(
        <React.Fragment>
            <h3>Use Reducer</h3>
            {/* {console.log(state)} */}
            <p>Count is: {state.counts}</p>
            <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
            <button onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>
        </React.Fragment>
    )
}

export default UseRedicer