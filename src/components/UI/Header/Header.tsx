import React, { FC, useMemo,useEffect, useState } from "react";
import classes from "./Header.module.css"
import pizzaImg from "../../../assets/pizza.png"
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import ModalButton from "../ModalButton/ModalButton";
import { CSSTransition } from "react-transition-group"
import "./animation.css"
import { cityAPI } from "../../../services/CityService";
import CityItem from "../../CityItem/CityItem";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

const Header: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('8')
    const [cityModal, setCityModal] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const [currentCity, setCurrentCity] = useState<string>('Ростов-на-Дону')
    const {data: cities} = cityAPI.useFetchAllCitiesQuery(0)
    const [countCities, setCountCities] = useState<number>()
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".toUpperCase().split('')

    useMemo(() => {
        if(inputValue.length > 17) {
            setInputValue(inputValue.substring(0, 17))
        }
    }, [inputValue])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatedPhoneNumber: string = formatPhoneNumber(e.target.value)
        setInputValue(formatedPhoneNumber)
    }

    const setCityFunc = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setCurrentCity(event.currentTarget.innerHTML)
        setCityModal(false)
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
                        <h2 className={classes.deliviry__text}>Доставка пиццы <span onClick={() => setCityModal(true)}>{currentCity}</span></h2>
                        <Modal isVisible={cityModal} setIsVisible={setCityModal}>
                            <div className={classes.modal__content}>
                                <div className={classes.modal__header}>
                                    <img src={pizzaImg} alt="Logo" />
                                    <p>{countCities} пиццерий в России</p>
                                </div>

                                <div className={classes.modal__input}>
                                    <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} text="Поиск..." type="text"/>
                                </div>

                                <div className={classes.popular__cities}>
                                    <a onClick={setCityFunc}>Москва</a>
                                    <a onClick={setCityFunc}>Санкт-Петербург</a>
                                </div>

                                <div className={classes.modal__cities}>
                                    {cities && cities.map(city => (
                                        <CityItem key={city.name} callback={setCityFunc} name={city.name}/>
                                    ))}
                                </div>
                            </div>
                        </Modal>
                        <div className={classes.deliviry__info}>
                            <p onMouseEnter={() => setIsInfoVisible(true)} onMouseLeave={() => setIsInfoVisible(false)} className={classes.time}>35 минут</p>
                            <p onMouseEnter={() => setIsInfoVisible(true)} onMouseLeave={() => setIsInfoVisible(false)}>4.89</p>
                            <CSSTransition
                                in={isInfoVisible}
                                timeout={300}
                                classNames={'info'}
                            >
                                <div className={isInfoVisible ? classes.info__window : classes.unactive}>
                                    <div className={classes.window__content}>
                                        <div className={classes.header__window}>
                                            <h2>Всегда бесплатная, всегда быстрая</h2>
                                            <p>Условия доставки не меняются в течении дня.Но если вы ждали заказ больше часа, мы подарим сертификат на пиццу</p>
                                        </div>

                                        <div className={classes.main__window}>
                                            <div className={classes.window__left}>
                                                <h2>35 минут</h2>
                                                <p className={classes.white}>Среднее время доставки</p>
                                                <p className={classes.gray}>Если мы не успеваем, то вы получите сертификат на большую пиццу</p>
                                            </div>

                                            <div className={classes.window__right}>
                                                <div className={classes.window__stars}>
                                                    <p>4.9</p>
                                                </div>
                                                <p className={classes.white}>2310 оценок</p>
                                                <p className={classes.gray}>Оценить можно в мобильном приложении</p>
                                            </div>
                                        </div>

                                        <div className={classes.footer__window}>
                                            <p className={classes.gray}>Данные за последние 7 дней в вашем городе</p>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
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
                            <Input text="8 (999) 999-99-99" type="text" onChange={handleInput} value={inputValue} />
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