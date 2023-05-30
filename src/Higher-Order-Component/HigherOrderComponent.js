import React, { useEffect, useState } from "react";




// const higherOrderComponent = function( WrappedComponent, entity  ) {
//     const [userData, setUserData] = useState([]);
//     const [searchItem, setSearchItem] = useState("");
//     const userDataHandelar = async ()=>{
//         let users = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
//         let userJson = await users.json();
//         setUserData(userJson);
//         console.log(userData);
//     }
//     const searchHandeler = (e)=>{
//         setSearchItem(String(e.target.value))
//         console.log(searchItem);
//     }
//     useEffect(()=>{
//         userDataHandelar();
//     }, [userData.length])
//     let searchFilter = userData.filter(post => {
//         if (searchItem === "") {
//           return post;
//         } 
//         if(entity === "users"){
//             if(post.name.toLowerCase().includes(searchItem.toLowerCase())){
//                 return post;
//             }
//         }
//         if(entity === "todos"){
//             if(post.title.toLowerCase().includes(searchItem.toLowerCase())){
//                 return post;
//             }
//         }
//       });
//     console.log(searchFilter);
//     return function( WrappedComponent ) {
        
//         return(
//             <>
//                 <h1>Higher order</h1>
//                 <input type="text" onChange={(e)=>{searchHandeler(e)}}/>
//                 {/* <WrappedComponent data={searchFilter} /> */}
//             </>
//         )
//     }
// }

const HigherOrderComponent = (Component) => (...props)=> {
    // const [userData, setUserData] = useState([]);
    // const [searchItem, setSearchItem] = useState("");
    console.log(props);
    // let searchFilter = userData.filter(post => {
    //     if (searchItem === "") {
    //         return post;
    //     } 
    //     if(entity === "users"){
    //         if(post.name.toLowerCase().includes(searchItem.toLowerCase())){
    //             return post;
    //         }
    //     }
    //     if(entity === "todos"){
    //         if(post.title.toLowerCase().includes(searchItem.toLowerCase())){
    //             return post;
    //         }
    //     }
    // });
    return( <Component data={props} />)
}

export default HigherOrderComponent