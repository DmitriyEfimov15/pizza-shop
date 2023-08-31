import React, {FC, useContext} from "react";
import classes from "./MainPage.module.css"
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
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
            <div className={classes.test}>
                <span>1</span>
                <span className={classes.two}>2</span>
                <span>3</span>
                <span>4</span>
            </div>
        </div>
    )
}

export default MainPage;