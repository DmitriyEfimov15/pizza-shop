import React, { FC, ReactNode } from "react";
import classes from "./Modal.module.css"
import { useOut } from "../../../hooks/useOut";

interface ModalProps {
    children: ReactNode;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({children, isVisible, setIsVisible}) => {
    const modalRef = useOut(() => setIsVisible(false))
    const rootClasses = [classes.container]

    if(isVisible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setIsVisible(false)}>
            <div ref={modalRef} className={classes.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;