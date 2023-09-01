import React, {FC, useContext} from "react";
import classes from "./MainPage.module.css"
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
import Loader from "../../components/UI/Loader/Loader";
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
            <Loader/>
        </div>
    )
}

export default MainPage;