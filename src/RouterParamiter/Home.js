import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { data02 } from "./data02";
const Home = ()=>{
    const navigate = useNavigate();
    const data = {
        name: "suman",
        age: "32"
    }
    const goToAbout = ()=>{
        navigate("../profile/123", {state: {data: data}});
    }
    console.log(data02);
    // const dashboardData = {
    //     component: "Dashboard page",
    //     content: "Data is sent from profile component",
    //     timestamp: Date.now(),
    //   }
    return(
        <>
            <h3>Home page</h3>
            <button onClick={goToAbout}>Profile</button>
            <ul>
                {data02.length && data02.map((item)=>{
                    return(
                        <React.Fragment>
                            <li>
                            {/* <Link to={{
                                    pathname: `../details/${item.NUMBER}`,
                                    state:{id: "01", expense: []}
                                }}>{item?.WHO}</Link> */}
                                <Link to={{ pathname: `../details/${item.NUMBER}`}} state={{id: item.NUMBER, expense: item?.EXPENSE}}>{item?.WHO}</Link>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    )
}

export default Home