import React, {forwardRef} from "react";

const Input = (props, ref)=>{

    return(
        <>
            <input ref={ref}/>
        </>
    )
}
export default forwardRef(Input)