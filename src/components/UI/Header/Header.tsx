import React, { FC, useMemo, useState } from "react";
import classes from "./Header.module.css"
import pizzaImg from "../../../assets/pizza.png"
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import ModalButton from "../ModalButton/ModalButton";

const Header: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('8')

    useMemo(() => {
        if(inputValue.length > 17) {
            setInputValue(inputValue.substring(0, 17))
        }
    }, [inputValue])

    const formatPhoneNumber = (value: string) => {
        if(!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if(phoneNumberLength < 5) return phoneNumber;
        if(phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`
        }
        if(phoneNumberLength < 8) {
            return `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`
        }
        
        if (phoneNumberLength < 10) {
            return  `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}`
        }
    
        return `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatedPhoneNumber: string = formatPhoneNumber(e.target.value)
        setInputValue(formatedPhoneNumber)
    }

    return (
        <header className={classes.container}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <div className={classes.img}>
                        <img src={pizzaImg} alt="Logo" />
                        <div className={classes.img__text}>
                            <h2>Панчо Пицца</h2>
                            <p>Сеть пиццерий №2 в России</p>
                        </div>
                    </div>

                    <div className={classes.deliviry}>
                        <h2 className={classes.deliviry__text}>Доставка пиццы <span>Ростов-на-Дону</span></h2>
                        <div className={classes.deliviry__info}>
                            <p>35 минут</p>
                            <p>4.89</p>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <Button onClick={() => setIsVisible(true)} color="">Войти</Button>
                    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                        <form className={classes.form}>
                            <h2>Вход на сайт</h2>
                            <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
                            <p className={classes.number}>Номер телефона</p>
                            <Input text="8 (999) 999-99-99" type="text" onChange={handleInput    } value={inputValue} />
                            <ModalButton disabled={inputValue.length < 17}>Выслать код</ModalButton>
                            <p className={classes.agreement}>Продолжая, вы соглашаетесь <span>со сбором и обработкой персональных данных и пользовательским соглашением</span></p>
                        </form>
                    </Modal>
                </div>
            </div>
        </header>
    )
}

export default Header;