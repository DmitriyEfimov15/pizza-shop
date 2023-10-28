import React, { FC, useState, useEffect } from 'react'
import classes from "./Counter.module.css"
import {FaMinus} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import { PizzaBacket } from '../../../types/Pizza'
import { pizzaAPI } from '../../../services/PizzaBacketService'
import { count } from 'console'

interface CounterProps {
    pizzaItem: PizzaBacket
}

const Counter: FC<CounterProps> = ({pizzaItem}) => {
    const [countPizza, setCount] = useState<number>(1)
    const [pizzaPrice] = useState<number>(pizzaItem.price)
    const [deletePizza, {}] = pizzaAPI.useDeletePizzaMutation()
    const [updatePizza, {}] = pizzaAPI.useUpdatePizzaMutation()

    useEffect(() => {
        if(countPizza < 1) {
            deletePizza(pizzaItem)
        }

        const updatedPizza = {
            dough: pizzaItem.dough,
            discription: pizzaItem.discription,
            id: pizzaItem.id,
            imageUrl: pizzaItem.imageUrl,
            price: pizzaPrice * countPizza,
            size: pizzaItem.size,
            title: pizzaItem.title,
            count: countPizza
        }
        
        updatePizza(updatedPizza)
    }, [countPizza])

    const handleMinus = () => {
        setCount(countPizza - 1)
    }

    const handlePlus = () => {
        setCount(countPizza + 1)
    }

    return (
        <div className={classes.container}>
            <button onClick={handleMinus} className={classes.minus}>
                <FaMinus/>
            </button>
            <div className={classes.countPizzaer}>{countPizza}</div>
            <button onClick={handlePlus} className={classes.plus}>
                <FaPlus/>
            </button>
        </div>
    )
}

export default Counter;