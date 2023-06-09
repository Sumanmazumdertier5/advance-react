import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = ()=>{
    const location = useLocation();
    const param = useParams();
    console.log("Location and Param", location, param);
    return(
        <React.Fragment>

        </React.Fragment>
    )
}
export default Details