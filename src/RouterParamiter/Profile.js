import React from "react";
import { useLocation, useParams } from "react-router-dom";


const Profile = (props)=>{
    const location = useLocation();
    const param = useParams();
    console.log("Location", location);
    console.log("Param", param);
    // console.log("Props", props?.location?.state)
    
return(
    <>
        <h3>Profile page {param.id}</h3>
        <div className="profileDetails">
            <p><strong>Name:</strong> {location?.state?.data.name}</p>
            <p><strong>Age:</strong> {location?.state?.data.age}</p>
        </div>
    </>
)
}

export default Profile