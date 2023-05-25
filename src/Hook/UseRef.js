import React, { useRef } from "react";

const UseRef = ()=>{
    const inputRef = useRef(null);
    const inputHandeler = ()=>{
        inputRef.current.value = 1000;
        inputRef.current.style.color = "red"
        inputRef.current.focus();
    }
    return(
        <>
            <h1>Use ref hook</h1>
            <input type="text" ref={inputRef} />
            <button onClick={inputHandeler}>Click</button>
        </>
    )
}

export default UseRef