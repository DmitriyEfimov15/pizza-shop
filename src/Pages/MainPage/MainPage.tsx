import React, {FC, useContext} from "react";
import classes from "./MainPage.module.css"
import { AuthContext } from "../../context/AuthContext";

const MainPage: FC = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logOut = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <button onClick={logOut}>выйти</button>
    )
}

export default MainPage;