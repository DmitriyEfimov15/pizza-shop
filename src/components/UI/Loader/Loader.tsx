import React, { FC } from "react"
import classes from "./Loader.module.css"

const Loader: FC = () => {
    return (
        <svg className={classes.spinner} width="105px" height="105px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className={classes.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"/>
        </svg>
    )
}

export default Loader;