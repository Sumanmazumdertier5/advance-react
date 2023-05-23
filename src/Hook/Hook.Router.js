import {React} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseMemo from "./UseMemo";
import  UseReducer  from "./UseReducer";
import UseCallback from "./UseCallBack";
const HookRouter = ()=>{
    return(
        <>
            <UseMemo />
            <UseCallback />
            <UseReducer />
        </>
    )
}

export default HookRouter;