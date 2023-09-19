import React, { FC, useState } from 'react'
import classes from "./PizzaModalItem.module.css"
import Modal from '../UI/Modal/Modal';
import { IPizza } from '../../types/Pizza';

interface PizzaModalItemProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    pizzaItem: IPizza
}

const PizzaModalItem: FC<PizzaModalItemProps> = ({isVisible, pizzaItem, setIsVisible}) => {
    const [inputValue, setInputValue] = useState<string>('')
    console.log(inputValue);
    

    return (
        <Modal setIsVisible={setIsVisible} isVisible={isVisible}>
           <div className={classes.container}>
            <div className={classes.left}>
                    <div className={classes.imageurl}>
                        <img style={{width: `80%`}} src={pizzaItem.imageUrl} alt={pizzaItem.title} />
                        <div className={classes.big}></div>
                        <div className={classes.middle}></div>
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
                    <div className={classes.input__checkboxes}>
                        {pizzaItem.sizes && pizzaItem.sizes.map(size => (
                            <label key={size} className={classes.label}>
                                {size}
                                <input type='radio' className={classes.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                            </label>
                        ))}
                    </div>
                </div>
           </div>
        </Modal>
    )
}

export default PizzaModalItem;