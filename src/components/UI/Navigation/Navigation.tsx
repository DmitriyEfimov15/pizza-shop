import React, { FC, createRef, useEffect } from "react";
import classes from "./Navigation.module.css";
import Button from "../Button/Button";
import { useResultLength } from "../../../hooks/useResult";
import { pizzaAPI } from "../../../services/PizzaBacketService";

interface NavigationProps {
    setVisibleBacket: React.Dispatch<React.SetStateAction<boolean>>
    isInteresting: boolean
}

const Navigation: FC<NavigationProps> = ({setVisibleBacket, isInteresting}) => {
    const rootClasses = [classes.container]
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)
    const lengthBacket = useResultLength(pizzas)

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
                    <Button onClick={() => setVisibleBacket(true)} color="orange">
                        {!lengthBacket 
                            ? <p>Корзина</p>
                            : <p>Корзина | {lengthBacket}</p>
                        }
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Navigation;