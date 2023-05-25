import React from "react";
import { Person } from "./ContexApi";
import { PersonHistory } from "./ContexApi";
const CComponent = ()=>{

    return(
        <>
            <h1>C Component</h1>
            <Person.Consumer >
                { (person)=>{
                    return(
                        <PersonHistory.Consumer>
                            {
                                (personHistory) =>{
                                    return(
                                        <>
                                            <p>Name: {person.name}</p>
                                            <p>History: {personHistory.madhamik}</p>
                                        </>
                                    )
                                }
                            }
                        </PersonHistory.Consumer>
                    )
                }

                }
            </Person.Consumer>
        </>
    )
}

export default CComponent