import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { useOut } from "../../../hooks/useOut";
import { pizzaAPI } from "../../../services/PizzaBacketService";
import classes from "./Backet.module.css";
import "./animation.css";

interface BacketProps {
    children?: ReactNode;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isVisible: boolean;
}

const Backet: FC<BacketProps> = ({children, setIsVisible, isVisible}) => {
    const rootClasses = [classes.container]
    const modalRef = useOut(() => setIsVisible(false))
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)
    const [arrPrice, setArrPrice] = useState<number[]>([])
    const result = arrPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    useEffect(() => {
        setArrPrice([])
        pizzas?.map(pizza => setArrPrice(oldArray => ([...oldArray, pizza.price])))
    }, [pizzas])
    

    if (isVisible) {
        rootClasses.push(classes.active)
    }

    useEffect(() => {
        if(isVisible) {
            document.body.style.overflowY = 'hidden'
        }

        else {
            document.body.style.overflowY = 'scroll'
        }
    }, [isVisible])

    return (
        <div className={rootClasses.join(' ')}>
            <CSSTransition
                in={isVisible}
                timeout={500}
                classNames={"backet"}
                mountOnEnter
                unmountOnExit
            >
                <div className={classes.content__container}>
                    <div ref={modalRef} className={classes.content}>
                        {!pizzas?.length
                            ? <div className={classes.no__children}>
                                <div className={classes.img}>
                                    <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="Корзина пуста!" />
                                </div>
                                <div className={classes.text}>
                                    <h2>Ой, пусто!</h2>
                                    <p>Ваша корзина пуста, откройте «Меню»и выберите понравившийся товар. Мы доставим ваш заказ от 749 ₽</p>
                                </div>
                            </div>
                            : <div className={classes.children}>
                                <div className={classes.children__info}>
                                    {pizzas.length === 1 
                                    ? <h2>{pizzas.length} товар на {result}₽</h2>
                                    :<h2>{pizzas.length} товара на {result}₽</h2>
                                }
                                {result < 749 
                                ? <div className={classes.min__result}>До минимальной суммы на доставку — {749 - result} ₽</div>
                                : <div></div>
                            }
                                </div>
                                <div className={classes.chuldren__box}> 
                                {children}
                                </div>
                            </div>
                        }
                    </div>

                    <div className={classes.close__button} onClick={() => setIsVisible(false)}><AiOutlineClose/></div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Backet