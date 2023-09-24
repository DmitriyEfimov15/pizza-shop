import React, { FC, useEffect, useState } from 'react'
import classes from "./PizzaModalItem.module.css"
import Modal from '../UI/Modal/Modal';
import { IPizza } from '../../types/Pizza';
import Switch from '../UI/Switch/Switch';
import Button from '../UI/Button/Button';

interface PizzaModalItemProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    pizzaItem: IPizza
}

const PizzaModalItem: FC<PizzaModalItemProps> = ({isVisible, pizzaItem, setIsVisible}) => {
    const [inputValue, setInputValue] = useState<string>(pizzaItem.sizes[0])
    const [currentDough, setCurrentDough] = useState<string>("традиционное")

    return (
        <Modal setIsVisible={setIsVisible} isVisible={isVisible}>
           <div className={classes.container}>
            <div className={classes.left}>
                    <div className={classes.imageurl}>
                        <img style={{width: `${parseInt(inputValue) * 2.5}%`}} src={pizzaItem.imageUrl} alt={pizzaItem.title} />
                        <div className={classes.circles}>
                            <div className={classes.big}></div>
                            <div className={classes.middle}></div>  
                        </div>
                    </div>
                </div>

                <div className={classes.right}>
                    <div className={classes.right__top}>
                        <div className={classes.title}>
                            <p>{pizzaItem.title}</p>
                        </div>
                        <div className={classes.info__pizza}>
                            <p>{inputValue} см, {currentDough} тесто</p>
                        </div>
                        <div className={classes.discription}>
                            <p>{pizzaItem.discription}</p>
                        </div>
                        <div className={classes.input__radio}>
                            {pizzaItem.sizes && pizzaItem.sizes.map(size => (
                                <Switch key={size} array={pizzaItem.sizes} labelText='см' stirng={size} stateValue={inputValue} setStateValue={setInputValue}/>
                            ))}
                        </div>
                        <div className={classes.input__radio}>
                            {pizzaItem.dough.length !== 1 && pizzaItem.dough.map(dough => (
                                <Switch key={dough} array={pizzaItem.dough} stirng={dough} stateValue={currentDough} setStateValue={setCurrentDough}/>
                            ))}
                        </div>
                    </div>

                    <div className={classes.button__box}>
                        <Button color='orange'>Добавить в корзину {pizzaItem.price}₽</Button>
                    </div>
                </div>
           </div>
        </Modal>
    )
}

export default PizzaModalItem;