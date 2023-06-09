import {React} from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UseMemo from "./UseMemo";
import  UseReducer  from "./UseReducer";
import UseCallback from "./UseCallBack";
import ContextApi from "./context-api/ContexApi";
import UseRef from "./UseRef";
import ForwordRef from "./ForwardRef";
import CustomHook from "./CustomHook/CustomHook";
const HookRouter = ()=>{
    return(
        <>
        <h3>All hooks</h3>
            <UseMemo />
            <UseCallback />
            <UseReducer />
            <ContextApi />
            <UseRef />
            <ForwordRef />
            <CustomHook />
        <Outlet />
        </>
    )
}

export default HookRouter;