import React, { createContext } from "react";
import AComponent from "./AComponent";
const Person = createContext();
const PersonHistory = createContext();
let personDetails = {
    name: "Suman",
    age : 32,
    designation: "UI developer"
}
let personHistory = {
    madhamik : 2011,
    gradutation: 2014
}
const ContextApi = ()=>{
    
    return(
        <>
            <h1>Context API</h1>
            <Person.Provider value={personDetails}>
                <PersonHistory.Provider value={personHistory}>
                    <AComponent />
                </PersonHistory.Provider>
            </Person.Provider>
        </>
    )
}
export default ContextApi;
export {Person, PersonHistory}