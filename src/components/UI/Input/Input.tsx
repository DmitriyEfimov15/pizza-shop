import React, { FC } from "react"
import classes from "./Input.module.css"

interface InputProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type: React.HTMLInputTypeAttribute;
    text?: string,
    length?: number
}

const Input: FC<InputProps> = ({ text, length,...props}) => {
    return (
        <input maxLength={length} placeholder={text} className={classes.input} {...props} />
    )
}

export default Input;