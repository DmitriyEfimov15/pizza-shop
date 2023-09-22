import React, { FC, useEffect, useState } from 'react'
import classes from "./PizzaModalItem.module.css"
import Modal from '../UI/Modal/Modal';
import { IPizza } from '../../types/Pizza';

interface PizzaModalItemProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    pizzaItem: IPizza
}

const PizzaModalItem: FC<PizzaModalItemProps> = ({isVisible, pizzaItem, setIsVisible}) => {
    const [inputValue, setInputValue] = useState<string>(pizzaItem.sizes[0])
    const [offset, setOffset] = useState<number>(0)
    useEffect(() => {
        setOffset(100 * pizzaItem.sizes.indexOf(inputValue) )
    }, [inputValue])

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
                    <div className={classes.title}>
                        <p>{pizzaItem.title}</p>
                    </div>
                    <div className={classes.info__pizza}>
                        <p>{pizzaItem.sizes[1]} см, тут тесто</p>
                    </div>
                    <div className={classes.discription}>
                        <p>{pizzaItem.discription}</p>
                    </div>
                    <div className={classes.input__radio}>
                        <div className={classes.switch__slider} style={{
                            width: "33.3%",
                            transform: `translateX(${offset}%)`
                        }}/>
                        {pizzaItem.sizes && pizzaItem.sizes.map(size => (
                            <div key={size} className={classes.input__box}>
                                <label htmlFor={`${size}`} className={classes.label}>{size}см</label>
                                <input checked={size === inputValue ? true : false} type='radio' name='pizza' value={inputValue} onChange={(e) => setInputValue(size)} id={`${size}`} />
                            </div>
                        ))}
                    </div>
                </div>
           </div>
        </Modal>
    )
}

export default PizzaModalItem;