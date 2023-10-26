import React, { FC } from "react"
import { PizzaBacket } from "../../types/Pizza";
import classes from "./PizzaBacketItem.module.css"
import Button from "../UI/Button/Button";

interface PizzaBacketItemProps {
    pizzaItem: PizzaBacket
}

const PizzaBacketItem: FC<PizzaBacketItemProps> = ({pizzaItem}) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.pizza__img}>
                    <img src={pizzaItem.imageUrl} alt={pizzaItem.title} />
                </div>

                <div className={classes.pizza__info}>
                    <h2 className={classes.pizza__title}>{pizzaItem.title}</h2>
                    <p className={classes.pizza__details}>{pizzaItem.size}см, {pizzaItem.dough} тесто</p>
                </div>
            </div>

            <div className={classes.count__box}>
                <div className={classes.count}>
                    <div className={classes.price}>
                        <p>{pizzaItem.price}₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaBacketItem;