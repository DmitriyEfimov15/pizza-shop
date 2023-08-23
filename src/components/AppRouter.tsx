import React, { FC, useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import MainPage from "../Pages/MainPage/MainPage";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "../Pages/LoginPage/LoginPage";

const AppRouter: FC = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
        ?
        <Routes>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/*" element={<Navigate to={'/main'}/>}/>
        </Routes>
        :
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/*" element={<Navigate to={'/login'}/>}/>
        </Routes>
    )
}

export default AppRouter;