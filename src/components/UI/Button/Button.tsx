import React, { FC, ReactNode } from "react"
import classes from "./Button.module.css"

interface ButtonProps{
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color: string;
}

const Button: FC<ButtonProps> = ({children, color,...props}) => {
    return (
        <button {...props} className={color === 'orange' ? classes.button__orange : classes.button__gray}>
            {children}
        </button>
    )
}

export default Button;