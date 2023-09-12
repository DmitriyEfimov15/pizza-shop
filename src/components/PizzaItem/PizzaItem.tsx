import React, { FC } from 'react'
import classes from "./PizzaItem.module.css"
import { IPizza } from '../../types/Pizza'
import Button from '../UI/Button/Button'

interface PizzaItemProps {
    pizzaItem: IPizza
}

const PizzaItem: FC<PizzaItemProps> = ({pizzaItem}) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.card__top}>
                    <div className={classes.img}>
                        <img src={pizzaItem.imageUrl} alt={pizzaItem.title} />
                    </div>
                    <div className={classes.title}>
                        <p>{pizzaItem.title}</p>
                    </div>
                    <div className={classes.discription}>
                        <p>{pizzaItem.discription}</p>
                    </div>
                </div>
                <div className={classes.card__bottom}>
                    <div className={classes.button}>
                        <p>от <span>{pizzaItem.price}</span>₽</p>
                        <Button color='orange'>Выбрать</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem;