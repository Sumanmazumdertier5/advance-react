import { useEffect, useState} from "react";

const NoticicationGroup = (props)=>{
    useEffect(()=>{
        console.log("Notification Group", props);
    })
    return(
        <>
            <h3>Notification group</h3>
        </>
    )
}
export default NoticicationGroup;