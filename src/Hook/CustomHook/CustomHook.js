import React from "react";
import { useEnterEscButtonsHook } from "./useEnterEscButtonsHook";

const CustomHook = ()=>{
    const handleCancel =()=>{
        console.log("Handle Cancel")
    }
    const handleConfirm = ()=>{
        console.log("Handle Confirmation")
    }
    useEnterEscButtonsHook({ handleCancel, handleConfirm })
    return(
        <><h3>Custom Hook</h3></>
    )
}

export default CustomHook