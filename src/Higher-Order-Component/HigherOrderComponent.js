import React, { useEffect, useState } from "react";

const HigherOrderComponent = (Component) => (props)=> {

    console.log(props);
    let searchFilter = props.data.filter(post => {
        if (props.searchItem === "") {
            return post;
        }
        if(props.entity === "users"){
            if(post.name.toLowerCase().includes(props.searchItem.toLowerCase())){
                return post;
            }
        }
        if(props.entity === "todos"){
            if(post.title.toLowerCase().includes(props.searchItem.toLowerCase())){
                return post;
            }
        }
        
    });
    return( <Component data={searchFilter} />)
}

export default HigherOrderComponent