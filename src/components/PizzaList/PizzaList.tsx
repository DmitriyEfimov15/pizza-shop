import React, { FC, useEffect } from 'react'
import classes from "./PizzaList.module.css"
import { useAppDispatch, useAppSelector } from '../../hooks/reducerHooks'
import { fetchPizzaz } from '../../store/action-creators/fetchPizza'
import PizzaItem from '../PizzaItem/PizzaItem'
import { pizzaListAPI } from '../../services/PizzaService'

interface PizzaListProps { 
    idElement?: string
}

const PizzaList: FC<PizzaListProps> = ({idElement}) => {
    const dispatch = useAppDispatch()
    const {data: pizzas} = pizzaListAPI.useFetchAllPizzaListQuery(null)

    useEffect(() => {
        dispatch(fetchPizzaz())
    }, [])

    return (
        <div id={idElement} className={classes.container}>
           <div className={classes.content}>
                <div className={classes.title}>
                    <h2>Пицца</h2>
                </div>
                <div className={classes.list}>
                    {pizzas && pizzas.map(pizza => (
                        <PizzaItem pizzaItem={pizza} key={pizza.id}/>
                    ))}
                </div>
           </div>
        </div>
    )
}

export default PizzaList;