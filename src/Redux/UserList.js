import React, { useEffect } from "react";
import UserAction from "./Action/UserAction"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import "../Higher-Order-Component/style.css";

const UserList = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userList.userList.length ? state.userList.userList : "");
    console.log("User Data ======", userData);
    const fetchUserList = async () => {
        let users = await axios("https://jsonplaceholder.typicode.com/users");
        // let userJson = await users.json();
        console.log(users.data);
        if (users.data.length) {
            dispatch(UserAction(users.data))
        }
    }

    useEffect(() => {
        fetchUserList()
    }, [])
    return (
        <>
            <ul>
                {
                    userData.length && userData.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="info">
                                    <p>
                                        <strong>Name:</strong> {item.name}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {item.email}
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> {item.phone}
                                    </p>
                                    <p>
                                        <strong>Website:</strong> {item.website}
                                    </p>
                                </div>
                                <div className="companyInfo">
                                    <h4>Company info</h4>
                                    <p>{item.company.name}</p>
                                    <p>{item.company.catchPhrase}</p>
                                </div>
                                <div className="addressInfo">
                                    <h4>Address info</h4>
                                    <p>{item.address.suite}</p>
                                    <p>City: {item.address.city}</p>
                                    <p>Street: {item.company.street}</p>
                                    <p>Zip code: {item.company.zipcode}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default UserList