import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildCompoment";


const UseCallback = ()=>{
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);

    // normal function
    // const fun = ()=>{
    //     return decrement
    // }

    const parentFun = ()=>{
        console.log("Parent function");
    }

    // Use call back function
    const fun = useCallback(()=>{
        // console.log("Hellow ajay");
        return decrement
    }, [decrement])
    return(
        <React.Fragment>
            <div>
                <h3>Use Call back</h3>
                <p>We are use for UseCallback()  because the increase the performance of application</p>
                <ul>
                    <li>Use call back is a <strong>pure function</strong></li>
                    <li>Use call back is always return function</li>
                </ul>
                <ChildComponent fun={fun} />
                <button onClick={() => {setIncrement(increment + 1)}}>Increment {increment}</button>
                <button onClick={() => {setDecrement(decrement - 1)}}>Decrement {decrement}</button>
            </div>
        </React.Fragment>
    )
}

export default UseCallback;