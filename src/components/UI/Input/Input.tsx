import React, { FC } from "react"
import classes from "./Input.module.css"

interface InputProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    type: React.HTMLInputTypeAttribute;
    text: string 
}

const Input: FC<InputProps> = ({ text,...props}) => {
    return (
        <input placeholder={text} className={classes.input} {...props} />
    )
}

export default Input;