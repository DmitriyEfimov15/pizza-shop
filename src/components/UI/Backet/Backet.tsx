import React, { FC, ReactNode } from "react";
import classes from "./Backet.module.css";
import { useOut } from "../../../hooks/useOut";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group"
import "./animation.css";

interface BacketProps {
    children?: ReactNode;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isVisible: boolean;
}

const Backet: FC<BacketProps> = ({children, setIsVisible, isVisible}) => {
    const rootClasses = [classes.container]
    const modalRef = useOut(() => setIsVisible(false))

    if (isVisible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <CSSTransition
                in={isVisible}
                timeout={500}
                classNames={"backet"}
                mountOnEnter
                unmountOnExit
            >
                <div ref={modalRef} className={classes.content}>
                    {!children
                        ? <div className={classes.no__children}>
                            <div className={classes.img}>
                                <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="Корзина пуста!" />
                            </div>
                            <div className={classes.text}>
                                <h2>Ой, пусто!</h2>
                                <p>Ваша корзина пуста, откройте «Меню»и выберите понравившийся товар. Мы доставим ваш заказ от 749 ₽</p>
                            </div>
                        </div>
                        : <div>{children}</div>
                    }
                    <div className={classes.close__button} onClick={() => setIsVisible(false)}><AiOutlineClose/></div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Backet