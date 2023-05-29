import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import HigherOrderComponent from "";

const NotificationRouter = lazy(() => import('../notification-group/notificationRouter'))
const HookRouter = lazy(() => import('../Hook/Hook.Router'));
const Skeleton = lazy(() => import('../skeleton/SkeletonRouter'))
const ErrorComponent = lazy(()=> import('../Error-Boundary/ErrorComponent'));
const HigherOrderRouter = lazy(()=> import('../Higher-Order-Component/HigherOrderRouter'));
const MainRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback="Loading.......">
                    <Routes>
                        <Route path="/notification-group" element={<NotificationRouter />} ></Route>
                        <Route path="/hooks" element={<HookRouter />} ></Route>
                        <Route path="/skeleton" element={<Skeleton />} ></Route>
                        <Route path ="/higher-order" element={<HigherOrderRouter/>} ></Route>
                        <Route path="/error-boundary" element={<ErrorComponent />}> </Route>
                    </Routes>   
                </Suspense>
            </BrowserRouter>

        </>
    )
}
export default MainRouter;