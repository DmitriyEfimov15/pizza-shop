import React, { FC } from 'react'
import classes from './PizzaMenuList.module.css'
import { pizzaAPI } from '../../services/PizzaBacketService'

const PizzaMenuList: FC = () => {
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)

    return (
        <div className={classes.container}>
            <h2>Состав заказа</h2>
            {pizzas?.length
                ? <div>
                    {pizzas.map(pizza => (
                        <div className={classes.pizza__item}>
                            <div className={classes.pizza__text}>
                                <p className={classes.title}>{pizza.title}</p>
                                <p>{pizza.size}см, {pizza.dough} тесто </p>
                            </div>
                            <div>{pizza.count === 1
                                ? <p>{pizza.price}₽</p> 
                                : <p>{pizza.count} × {Math.ceil(pizza.price / pizza.count)}₽</p>
                            }</div>
                        </div>
                    ))}
                </div>
                : <div>ошибка!</div>
            }

            <div></div>
        </div>
    )
} 

export default PizzaMenuList;