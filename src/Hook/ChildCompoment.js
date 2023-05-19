import React, {memo} from "react";


const ChildComponent = ({decrement, fun})=>{
    console.log(`Child compoment call ${decrement}`)
    console.log(`Child compoment call ${fun()}`)
    return(
        <React.Fragment>

        </React.Fragment>
    )
}

export default memo(ChildComponent)