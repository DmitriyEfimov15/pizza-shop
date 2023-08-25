import React, { FC } from "react"
import classes from "./Navbar.module.css"
import {Link} from "react-router-dom"

const Navbar: FC = () => {
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <Link className={classes.a} to={"/main"}>Прямой эфир</Link>
                <Link className={classes.a} to={"/rabota"}>Работа</Link>
                <Link className={classes.a} to={"/aboutus"}>О нас</Link>
                <Link className={classes.a} to={"/contacts"}>Контакты</Link>
            </div>
        </div>
    )
}

export default Navbar;