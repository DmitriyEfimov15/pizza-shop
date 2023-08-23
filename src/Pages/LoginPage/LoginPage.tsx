import React, {FC, useContext} from "react";
import classes from "./LoginPage.module.css"
import { AuthContext } from "../../context/AuthContext";

const LoginPage: FC = () => {
    const {setIsAuth} = useContext(AuthContext)

    const log = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }
    return (
        <div>
            <button onClick={log}>зайти</button>
        </div>
    )
}

export default LoginPage;