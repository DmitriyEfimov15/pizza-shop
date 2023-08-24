import React, {FC, useContext} from "react";
import classes from "./MainPage.module.css"
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
const MainPage: FC = () => {
    // const {setIsAuth} = useContext(AuthContext)

    // const logOut = (e: React.MouseEvent) => {
    //     e.preventDefault()
    //     setIsAuth(false)
    //     localStorage.removeItem('auth')
    // }
    return (
        <div className={classes.container}>
            <Navbar/>
            <Header/>
        </div>
    )
}

export default MainPage;