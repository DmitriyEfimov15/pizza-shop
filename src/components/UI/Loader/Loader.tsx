import React, { FC } from "react"
import classes from "./Loader.module.css"

const Loader: FC = () => {
    return (
        <svg className={classes.spinner}>
            <circle className={classes.path} fill="none" stroke-width="6" strokeLinecap="round" cx="33" cy="33" r="30"/>
        </svg>
    )
}

export default Loader;