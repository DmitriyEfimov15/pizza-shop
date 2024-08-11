import React, { FC } from "react";
import classes from './Logo.module.css'
import pizzaImg from "../../../assets/pizza.png"

const Logo: FC = () => {
    return (
        <div className={classes.img}>
            <img src={pizzaImg} alt="Logo" />
            <div className={classes.img__text}>
                <h2>Панчо Пицца</h2>
                <p>Сеть пиццерий №01 в России</p>
            </div>
        </div>
    )
}

export default Logo;