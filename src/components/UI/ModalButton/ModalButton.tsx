import React, { FC } from 'react'
import classes from "./ModalButton.module.css"

interface ModalButtonProps {
    children: React.ReactNode;
    ref?: React.LegacyRef<HTMLButtonElement>;
    disabled?: boolean;
}

const ModalButton: FC<ModalButtonProps> = ({children, disabled,...props}) => {
    const rootClasses = [classes.button]
    if (disabled) {
        rootClasses.push(classes.disabled)
    }

    return (
        <button disabled={disabled} {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    )
}

export default ModalButton;