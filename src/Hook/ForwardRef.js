import React, { useRef } from "react";
import Input from "./Input";
const ForwordRef = ()=>{
    const inputRef = useRef(null)
    const inputHandeler = ()=>{
        inputRef.current.value = 1000;
    }
    return(
        <>
            <h1>Forword ref</h1>
            <Input ref={inputRef} />
            <button onClick={inputHandeler}>Click</button>
        </>
    )
}
export default ForwordRef