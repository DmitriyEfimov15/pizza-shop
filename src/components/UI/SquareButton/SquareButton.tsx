import React, { FC, ReactNode } from 'react'
import classes from './SquareButton.module.css'

interface SquareButtonProps{
    children: ReactNode;
}

const SquareButton: FC<SquareButtonProps> = ({children}) => {
    return(
        <button className={classes.container}>
            {children}
        </button>
    )
}

export default SquareButton;