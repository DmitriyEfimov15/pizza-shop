import React, { FC, useEffect, useState } from 'react'
import classes from "./PizzaModalItem.module.css"
import Modal from '../UI/Modal/Modal';
import { IPizza, PizzaBacket } from '../../types/Pizza';
import Switch from '../UI/Switch/Switch';
import Button from '../UI/Button/Button';
import { pizzaAPI } from '../../services/PizzaBacketService';
import { CSSTransition } from "react-transition-group";
import './animation.css'


interface PizzaModalItemProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    pizzaItem: IPizza
}

const PizzaModalItem: FC<PizzaModalItemProps> = ({isVisible, pizzaItem, setIsVisible}) => {
    const [currentSize, setCurrentSize] = useState<string>(pizzaItem.sizes[0])
    const [currentDough, setCurrentDough] = useState<string>("традиционное")
    const [currentPrice, setCurrentPrice] = useState<number>(parseInt(pizzaItem.price))
    const [createPizza, {isError}] = pizzaAPI.usePostNewPizzaMutation()
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)
    const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false)

    useEffect(() => {
        if(currentSize !== pizzaItem.sizes[0]) {
            setCurrentPrice(Math.ceil(parseInt(pizzaItem.price) + (pizzaItem.sizes.indexOf(currentSize) * 154)))
        } else {
            setCurrentPrice(parseInt(pizzaItem.price))
        }
    }, [currentSize, currentDough])

    const handleClick = () => {
        const pizzaToBacket: PizzaBacket = {
            dough: currentDough,
            size: currentSize,
            id: pizzaItem.id + currentPrice + pizzaItem.dough.indexOf(currentDough),
            title: pizzaItem.title,
            price: currentPrice,
            imageUrl: pizzaItem.imageUrl,
            discription: pizzaItem.discription,
        }
        if(pizzas?.length) {
            for (let i = 0; i < pizzas?.length; i++) {
                if (pizzas[i].id === pizzaToBacket.id) {
                    
                    setIsErrorVisible(true)
                    setTimeout(() => {
                        setIsErrorVisible(false)
                    }, 3000 )
                    break
                }
                else {
                    
                    createPizza([pizzaToBacket, 1])
                    break
                }
            }
        }

        else {
            createPizza([pizzaToBacket, 1])
        }
    }

    return (
        <Modal setIsVisible={setIsVisible} isVisible={isVisible}>
           <div className={classes.container}>
            <div className={classes.left}>
                    <div className={classes.imageurl}>
                        <img style={{width: `${parseInt(currentSize) * 2.5}%`}} src={pizzaItem.imageUrl} alt={pizzaItem.title} />
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
                            <p>{currentSize} см, {currentDough} тесто</p>
                        </div>
                        <div className={classes.discription}>
                            <p>{pizzaItem.discription}</p>
                        </div>
                        <div className={classes.input__radio}>
                            {pizzaItem.sizes && pizzaItem.sizes.map(size => (
                                <Switch key={size} array={pizzaItem.sizes} labelText='см' stirng={size} stateValue={currentSize} setStateValue={setCurrentSize}/>
                            ))}
                        </div>
                        <div className={classes.input__radio}>
                            {pizzaItem.dough.length !== 1 && pizzaItem.dough.map(dough => (
                                <Switch key={dough} array={pizzaItem.dough} stirng={dough} stateValue={currentDough} setStateValue={setCurrentDough}/>
                            ))}
                        </div>
                    </div>

                    <div className={classes.button__box}>
                        <Button onClick={handleClick} color='orange'>Добавить в корзину {currentPrice}₽</Button>
                    </div>
                </div>
           </div>
            <CSSTransition
                in={isErrorVisible}
                timeout={300}
                classNames={'error'}
            >
            <div className={isErrorVisible ? classes.error__table : classes.unactive}>
                <div className={classes.error__content}>
                    <div className={classes.error__img}>
                        <p>X</p>
                    </div>

                    <div className={classes.error__text}>
                        <h2>Ошибочка!</h2>
                        <p>Вы уже добавили этот продукт в корзину!</p>
                    </div>
                </div>
            </div>
            </CSSTransition>
        </Modal>
        
    )
}

export default PizzaModalItem;