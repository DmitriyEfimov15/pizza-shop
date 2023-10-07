import React, { FC, createRef, useEffect } from "react";
import classes from "./Navigation.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

interface NavigationProps {
    setVisibleBacket: React.Dispatch<React.SetStateAction<boolean>>
    isInteresting: boolean
}

const Navigation: FC<NavigationProps> = ({setVisibleBacket, isInteresting}) => {
    const rootClasses = [classes.container]
    if(!isInteresting) {
        rootClasses.push(classes.fixed)
    }
    return (
        <header className={rootClasses.join(' ')}>
            <div className={classes.content}>
                <div className={classes.nav}>
                    <a href="#pizza">Пицца</a>
                </div>
                <div className={classes.button__box}>
                    <Button onClick={() => setVisibleBacket(true)} color="orange">Корзина</Button>
                </div>
            </div>
        </header>
    )
}

export default Navigation;