import React, { FC, useEffect } from 'react'
import classes from "./PizzaList.module.css"
import { useAppDispatch, useAppSelector } from '../../hooks/reducerHooks'
import { fetchPizzaz } from '../../store/action-creators/fetchPizza'
import PizzaItem from '../PizzaItem/PizzaItem'

const PizzaList: FC = () => {
    const dispatch = useAppDispatch()
    const {pizzaz} = useAppSelector(state => state.pizzaReducer)

    useEffect(() => {
        dispatch(fetchPizzaz())
    }, [])

    return (
        <div className={classes.container}>
           <div className={classes.content}>
                <div className={classes.title}>
                    <h2>Пицца</h2>
                </div>
                <div className={classes.list}>
                    {pizzaz.map(pizza => (
                        <PizzaItem pizzaItem={pizza} key={pizza.id}/>
                    ))}
                </div>
           </div>
        </div>
    )
}

export default PizzaList;