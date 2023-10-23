import React, { FC, ReactNode, useEffect } from "react";
import classes from "./Modal.module.css"
import { useOut } from "../../../hooks/useOut";
import { CSSTransition } from "react-transition-group"
import "./animation.css"
import {AiOutlineClose} from "react-icons/ai"

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

    useEffect(() => {
        if(isVisible) {
            document.body.style.overflowY = 'hidden'
        }

        else {
            document.body.style.overflowY = 'scroll'
        }
    }, [isVisible])

    return (
        <div className={rootClasses.join(' ')} onClick={() => setIsVisible(false)}>
            <CSSTransition
                in={isVisible}
                classNames={'modal'}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                <div ref={modalRef} className={classes.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                    <div className={classes.close__button} onClick={() => setIsVisible(false)}><AiOutlineClose/></div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Modal;