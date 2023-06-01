import React, {useEffect} from "react";
import UserAction from "./Action/UserAction"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const UserList = ()=>{
    const dispatch = useDispatch();
    const fetchUserList = async()=>{
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(response);
        if(response){
            dispatch(UserAction(response.data))
        }
    }

    useEffect(()=>{
        fetchUserList()
    })
    return(
        <>
        
        </>
    )
}

export default UserList