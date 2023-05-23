import React, { useMemo, useState } from "react";


const UseMemo = ()=>{
    // style
    const oneExp = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }


    const [increment, SetIncrement] = useState(0)
    const [decrement, SetDecrement] = useState(0)

    const incrementFn= ()=>{
        SetIncrement(increment + 1);
    }
    const decrementFn = ()=>{
        SetDecrement(decrement - 1);
    }
    
    // use memo function
    // let isEvent = useMemo(()=>{
    //     console.log("Event call");
    //     let i = 0;
    //     while(i < 20000000) i++;
    //     return increment % 2 === 0;
    // },[increment]);

    // normal function
    const isEvent = ()=>{
        console.log("Event call");
        let i = 0;
        while(i < 20000000) i++;
        return increment % 2 === 0;
    }
    

    return(
        <React.Fragment>
            <div className="oneExp" style={oneExp}>
                <h3>Use Memo</h3>
                <p>We are use for useMemo() or React.memo(function) because the increase the performance of application</p>
                <ul>
                    <li>Use memo is a <strong>pure function</strong></li>
                    <li>Use memo is always return value</li>
                </ul>
                <span>{isEvent() ? "Event" : "Odd"}</span>
                <br></br>
                <button onClick={incrementFn}>Increnment + {increment}</button>
                <button onClick={decrementFn}>Decrenment - {decrement}</button>
            </div>
        </React.Fragment>
    )
}

export default React.memo(UseMemo);