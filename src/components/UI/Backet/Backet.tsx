import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { useOut } from "../../../hooks/useOut";
import { pizzaAPI } from "../../../services/PizzaBacketService";
import classes from "./Backet.module.css";
import "./animation.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useResultLength, useResultPrice } from "../../../hooks/useResult";

interface BacketProps {
    children?: ReactNode;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isVisible: boolean;
}

const Backet: FC<BacketProps> = ({children, setIsVisible, isVisible}) => {
    const rootClasses = [classes.container]
    const modalRef = useOut(() => setIsVisible(false))
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)
    const id = 1
    const resultPrice = useResultPrice(pizzas)
    const resultLength = useResultLength(pizzas)
    

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
                                    {resultLength === 1 
                                    ? <h2>{resultLength} товар на {resultPrice}₽</h2>
                                    :<h2>{resultLength} товара на {resultPrice}₽</h2>
                                }
                                {resultPrice < 749 
                                ? <div className={classes.min__resultPrice}>До минимальной суммы на доставку — {749 - resultPrice} ₽</div>
                                : <div></div>
                            }
                                </div>
                                <div className={classes.children__box}> 
                                    {children}
                                </div>
                            </div>
                        }

                    {!pizzas?.length 
                        ? <div></div>
                        : <div className={classes.buy__window}>
                        <div className={classes.sum__booking}>
                            <p>Сумма заказа</p>
                            <p>{resultPrice}₽</p>
                        </div>
                        <div className={classes.buy__button}>
                            <Button color="orange"><Link to={`/buy-page/${id}`}>К оформлению заказа</Link></Button>
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