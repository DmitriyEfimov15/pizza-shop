import React, { FC } from "react"
import classes from "./Input.module.css"

interface InputProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type: React.HTMLInputTypeAttribute
}

const Input: FC<InputProps> = ({...props}) => {
    return (
        <input className={classes.input} {...props} />
    )
}

export default Input;