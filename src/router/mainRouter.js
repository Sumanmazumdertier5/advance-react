import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

const NotificationRouter = lazy(() => import('../notification-group/notificationRouter'))
const HookRouter = lazy(() => import('../Hook/Hook.Router'));
const Skeleton = lazy(() => import('../skeleton/SkeletonRouter'))
const ErrorComponent = lazy(()=> import('../Error-Boundary/ErrorComponent'));

const MainRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback="Loading.......">
                    <Routes>
                        <Route path="/notification-group" element={<NotificationRouter />} ></Route>
                        <Route path="/hooks" element={<HookRouter />} ></Route>
                        <Route path="/skeleton" element={<Skeleton />} ></Route>
                        {/* <Skeleton /> */}
                        <Route path="/error-boundary" element={<ErrorComponent />}> </Route>
                    </Routes>   
                </Suspense>
            </BrowserRouter>

        </>
    )
}
export default MainRouter;