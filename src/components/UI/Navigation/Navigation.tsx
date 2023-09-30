import React, { FC, createRef, useEffect } from "react";
import classes from "./Navigation.module.css";
import Button from "../Button/Button";

interface NavigationProps {
    setVisibleBacket: React.Dispatch<React.SetStateAction<boolean>>
    isInteresting: boolean
}

const Navigation: FC<NavigationProps> = ({setVisibleBacket, isInteresting}) => {
    const rootClasses = [classes.container]
    if(!isInteresting) {
        console.log('sadsad');
        
        rootClasses.push(classes.fixed)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.nav}>
                <a href="#pizza">Пицца</a>
            </div>
            <div className={classes.button__box}>
                <Button onClick={() => setVisibleBacket(true)} color="orange">Корзина</Button>
            </div>
        </div>
    )
}

export default Navigation;