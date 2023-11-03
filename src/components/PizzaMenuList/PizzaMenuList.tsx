import React, { FC } from 'react'
import classes from './PizzaMenuList.module.css'
import { pizzaAPI } from '../../services/PizzaBacketService'
import { useResultLength, useResultPrice } from '../../hooks/useResult'

const PizzaMenuList: FC = () => {
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)
    const resultPrice = useResultPrice(pizzas)
    const resultLength = useResultLength(pizzas)

    return (
        <div className={classes.container}>
            <h2>Состав заказа</h2>
            {pizzas?.length
                ? <div>
                    {pizzas.map(pizza => (
                        <div key={pizza.id} className={classes.pizza__item}>
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

            <div className={classes.result}>
                {resultLength === 1
                    ? <div className={classes.one__length}>
                        <p className={classes.font__weight}>{resultLength} товар</p>
                        <p>{resultPrice}₽</p>
                     </div>
                    : <div className={classes.more__length}>
                        <p className={classes.font__weight}>{resultLength} товара</p>
                        <p>{resultPrice}₽</p>
                     </div>  
                }
            </div>

            <div className={classes.summ}>
                <p className={classes.font__weight}>Сумма заказа</p>
                <p>{resultPrice}₽</p>
            </div>
        </div>
    )
} 

export default PizzaMenuList;