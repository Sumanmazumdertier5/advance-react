import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const Index = () => {
    if(true){
        throw new Error('Error');
    }
    return(
        <>
            
        </>
    )
}

const ErrorComponent = ()=>{
    return(
        <>
            <h1>Error Boundary</h1>
            <ErrorBoundary>
                <Index />
            </ErrorBoundary>
        </>
    )
}

export default ErrorComponent