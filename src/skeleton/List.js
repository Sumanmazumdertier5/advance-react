import React, { useEffect } from "react";
import { Suspense } from "react";
// import Fetch from 'react-fetch'

const List =()=>{
    let Posts = () =>{
        const endpoint = "https://jsonplaceholder.typicode.com/posts";
        const posts = fetch(endpoint).json();
        console.log(posts);
    }
    useEffect(()=>{
        Posts();
    })
    return(
        <>
        </>
    )
}

export default List;