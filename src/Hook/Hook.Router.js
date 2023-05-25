import {React} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseMemo from "./UseMemo";
import  UseReducer  from "./UseReducer";
import UseCallback from "./UseCallBack";
import ContextApi from "./context-api/ContexApi";
import UseRef from "./UseRef";
import ForwordRef from "./ForwardRef";
const HookRouter = ()=>{
    return(
        <>
            <UseMemo />
            <UseCallback />
            <UseReducer />
            <ContextApi />
            <UseRef />
            <ForwordRef />
        </>
    )
}

export default HookRouter;