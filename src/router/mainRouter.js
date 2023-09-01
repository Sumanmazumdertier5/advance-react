import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../RouterParamiter/Home";
import Profile from "../RouterParamiter/Profile";
import Details from "../RouterParamiter/Details";
// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
// import Dashboard from "../Common/Dashboard";
// import HigherOrderComponent from "";
// import HookRouter from "../Hook/Hook.Router"
const Dashboard = lazy(() => import('../Common/Dashboard'))
const NotificationRouter = lazy(() => import('../notification-group/notificationRouter'))
const HookRouter = lazy(() => import('../Hook/Hook.Router'));
const Skeleton = lazy(() => import('../skeleton/SkeletonRouter'))
const ErrorComponent = lazy(()=> import('../Error-Boundary/ErrorComponent'));
const HigherOrderRouter = lazy(()=> import('../Higher-Order-Component/HigherOrderRouter'));
const ReduxRouter = lazy(()=> import('../Redux/ReduxRouter'));
const UserList = lazy(()=> import('../Higher-Order-Component/UserList'));
const TodoList = lazy(()=> import('../Higher-Order-Component/TodoList'));
const RouterParamiter = lazy(()=> import('../RouterParamiter/RouterParamiter'));
const CustomChiplist = lazy(()=> import('../Custom-Chiplist/CustomChiplist'));
const CustomHook = lazy(()=> import('../Hook/CustomHook/pagination/Page'))
const Todo = lazy(()=> import('../Hook/UseReducer/Todo'))

const MainRouter = () => {
    // const router = createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/" element={<Dashboard />} >
    //             <Route exact path="/hooks" element={<HookRouter />} ></Route>
    //             <Route path="/notification-group" element={<NotificationRouter />} ></Route>
    //             <Route path="/skeleton" element={<Skeleton />} ></Route>
    //             <Route path ="/hoc" element={<HigherOrderRouter/>} ></Route>
    //             <Route path="/error-boundary" element={<ErrorComponent />}> </Route>
    //         </Route>
    //     )
    // )
    return (
        <>
            {/* <h3>main router</h3> */}
            {/* <RouterProvider router={router}/> */}


            <BrowserRouter>
                <Suspense fallback="Loading.......">
                    <Routes>
                        <Route path="/" element={<Dashboard />} >
                            <Route index element={<HookRouter />} ></Route>
                            <Route path="/notification-group" element={<NotificationRouter />} ></Route>                            
                            <Route path ="/hoc" element={<HigherOrderRouter/>} >
                                <Route path="user-list" element={<UserList />}></Route>
                                <Route path="todo-list" element={<TodoList />}></Route>
                                <Route path="use-reducer" element={<Todo />}></Route>
                            </Route>
                            <Route path ="/router" element={<RouterParamiter/>} >
                                <Route path="home" element={<Home />}></Route>
                                <Route path="profile/:id" element={<Profile />}></Route>
                                <Route path="details/:id" element={<Details />}></Route>
                            </Route>
                            <Route path="/error-boundary" element={<ErrorComponent />}> </Route>
                            <Route path="/redux" element={<ReduxRouter />}></Route>
                            <Route path="/custom-chiplist" element={<CustomChiplist />}></Route>
                            <Route path="/custom-hook" element={<CustomHook />}></Route>
                        </Route>
                    </Routes>   
                </Suspense>
            </BrowserRouter>

        </>
    )
}
export default MainRouter;