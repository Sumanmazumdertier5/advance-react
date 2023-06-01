import React, {useEffect} from "react";
import * as emmunType from "./emmun";
import { useSelector, useDispatch } from 'react-redux';
import {increaseCake, decreaseCake} from "./Action/CakeAction"
import {increaseIceCreame, decreaseIceCreame} from "./Action/IceCreame"

const ReduxModule = () =>{
    const dispatch = useDispatch();
    const state = useSelector((state)=> state);
    console.log("Current state", state);
    
    
    
    return(
        <>
            <h2>Redux</h2>
                <h3>Cake</h3>
                <button onClick={()=> dispatch(increaseCake())}>Increase cake</button>
                <button onClick={()=> dispatch(decreaseCake())}>Decrease cake</button>
                <p>Cake: {state.cake.cakeStore}</p>
            <br></br>
                <h3>Ice creame</h3>
                <button onClick={()=> dispatch(increaseIceCreame())}>Decrease Ice Creame</button>
                <button onClick={()=> dispatch(decreaseIceCreame())}>Decrease Ice Creame</button>
                <p>Ice creame: {state.iceCreame.iceCreamStore}</p>
        </>
    )

    // const store = createStore(rootReducer);
    // console.log("Redux store", store.getStore());
    // store.dispatch(buyCake())
    // store.dispatch(buyCake())
    
    


    
}
export default ReduxModule;