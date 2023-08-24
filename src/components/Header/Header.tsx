import React, { FC } from "react";
import classes from "./Header.module.css"
import pizzaImg from "../../assets/pizza.png"
import Button from "../Button/Button";

const Header: FC = () => {
    return (
        <header className={classes.container}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <div className={classes.img}>
                        <img src={pizzaImg} alt="Logo" />
                        <div className={classes.img__text}>
                            <h2>Панчо Пицца</h2>
                            <p>Сеть пиццерий №2 в России</p>
                        </div>
                    </div>

                    <div className={classes.deliviry}>
                        <h2 className={classes.deliviry__text}>Доставка пиццы <span>Ростов-на-Дону</span></h2>
                        <div className={classes.deliviry__info}>
                            <p>35 минут</p>
                            <p>4.89</p>
                        </div>
                    </div>
                </div>

                <div className={classes.right}>
                    <Button color="">Войти</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;