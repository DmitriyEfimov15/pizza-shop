import React, {FC, useContext} from "react";
import classes from "./MainPage.module.css"
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const MainPage: FC = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logOut = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div>
            <Navbar/>
            <button onClick={logOut}>выйти</button>
        </div>
    )
}

export default MainPage;