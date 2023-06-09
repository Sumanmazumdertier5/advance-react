import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromError(){
        return {error: true}
    }
    render(){
        return(
            <>
                {
                    this.state.error ? <h1>Custom Page Error Handeleling</h1> : this.props.children
                }
            </>
        )
    }
}
export default ErrorBoundary