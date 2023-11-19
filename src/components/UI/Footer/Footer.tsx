import React, { FC } from "react";
import classes from "./Footer.module.css"
import apple from '../../../assets/apple.png'
import google from '../../../assets/rugh.png'
import SquareButton from "../SquareButton/SquareButton";

const Footer: FC = () => {
    return (
        <footer className={classes.container}>
            <div className={classes.content}>

                <div className={classes.navigation}>

                    <div className={classes.links}>
                        <div className={classes.links__section}>
                            <h2>Панчо Пицца</h2>
                            <div className={classes.links__box}>
                                <a href="#">О нас</a>
                                <a href="#">Панчо-книга</a>
                                <a href="#">Блог "Сила ума"</a>
                                <a href="#">Додо ИС</a>
                            </div>
                        </div>

                        <div className={classes.links__section}>
                            <h2>Работа</h2>
                            <div className={classes.links__box}>
                                <a href="#">В пиццерии</a>
                            </div>
                        </div>

                        <div className={classes.links__section}>
                            <h2>Партнерам</h2>
                            <div className={classes.links__box}>
                                <a href="#">Франшиза</a>
                                <a href="#">Инвестиции</a>
                                <a href="#">Поставщикам</a>
                                <a href="#">Предложить помещение</a>
                            </div>
                        </div>

                        <div className={classes.links__section}>
                            <h2>Это интересно</h2>
                            <div className={classes.links__box}>
                                <a href="#">Почему мы готовим без перчаток?</a>
                                <a href="#">Экскурсии и мастер-классы</a>
                                <a href="#">Корпоративные заказы</a>
                            </div>
                        </div>

                    </div>
                    <div className={classes.download}>
                        <div className={classes.download__img}>
                            <div className={classes.download__button}>
                                <img src={apple} alt="apple" />
                            </div>

                            <div className={classes.download__button}>
                                <img src={google} alt="google" />
                            </div>
                        </div>

                        <div className={classes.email}>
                            <a>feedback@pancho.com</a>
                        </div>

                    </div>
                </div>

                <div className={classes.copyright}>
                    <div className={classes.copyright__content}>
                        <header className={classes.copyright__header}>
                            <div className={classes.header__links}>
                                <p>Панчо пицца</p>
                                <a href="#">Правовая ифнормация</a>
                                <a href="#">Калорийность и состав</a>
                                <a href="#">Помощь</a>
                            </div>
                            <div className={classes.links__buttons}>
                                <SquareButton>
                                    <a href=""><i className="fa fa-telegram"></i></a>
                                </SquareButton>

                                <SquareButton>
                                    <a href=""><i className="fa fa-instagram"></i></a>
                                </SquareButton>

                                <SquareButton>
                                    <a href=""><i className="fa fa-vk"></i></a>
                                </SquareButton>
                            </div>
                        </header>
                        <div className={classes.footer__text}>
                            <p>© 2023 ООО “Панчо Франчайзинг”</p>
                            <p>ОГРН 113110100546465476, ИНН 110114044234</p>
                            <p>1670021, г. Ростов, улица Пушкинская, д. 3852</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;