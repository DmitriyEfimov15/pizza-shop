import React, { FC, useState } from "react";
import classes from "./Header.module.css"
import pizzaImg from "../../assets/pizza.png"
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Header: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

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
                    <Button onClick={() => setIsVisible(true)} color="">Войти</Button>
                    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                                <div></div>
                    </Modal>
                </div>
            </div>
        </header>
    )
}

export default Header;