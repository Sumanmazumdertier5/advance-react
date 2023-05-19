import { useEffect, useState } from "react";
import NoticicationRouter from "../notification-group/notificationRouter";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HookRouter from "../Hook/Hook.Router";

const MainRouter = ()=>{
    return (
        <>
        {/* <Router> */}
            <Routes>
                <Route path="/notification-group" element={<NoticicationRouter/>} ></Route>
                <Route path="/hooks" element={<HookRouter />} ></Route>
            </Routes>
            
        {/* </Router> */}
        
        </>
    )
}
export default MainRouter;