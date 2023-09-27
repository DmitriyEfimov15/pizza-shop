import React, { FC } from "react";
import classes from "./Navigation.module.css";
import Button from "../Button/Button";

interface NavigationProps {
    setVisibleBacket: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation: FC<NavigationProps> = ({setVisibleBacket}) => {
    return (
        <div className={classes.container}>
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