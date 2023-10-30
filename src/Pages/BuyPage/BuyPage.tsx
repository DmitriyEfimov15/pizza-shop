import React, { FC, useState } from "react";
import classes from "./BuyPage.module.css";
import logo from '../../assets/pizza.png'
import Logo from "../../components/UI/Logo/Logo";
import {MdOutlineDone} from 'react-icons/md'
import {PiNumberThree, PiNumberTwo} from 'react-icons/pi'
import Input from "../../components/UI/Input/Input";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

interface BuyPageProps {

}

const BuyPage: FC<BuyPageProps> = ({}) => {
    const [nameInputValue, setNameInputValue] = useState<string>('')
    const [numberInputValue, setNumberInputValue] = useState<string>('')

    const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatedPhoneNumber:string = formatPhoneNumber(e.target.value)
        setNumberInputValue(formatedPhoneNumber) 
    }

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Logo/>
                <div className={classes.balls__box}>
                    <div className={classes.ball__backet}>
                        <div className={classes.ball__content}>
                            <MdOutlineDone/>
                        </div>
                        <span>Корзина</span>
                    </div>
                    <div className={classes.ball__buy}>
                        <div className={classes.ball__content}>
                            <PiNumberTwo/>
                        </div>
                        <span>Оформление заказа</span>
                    </div>
                    <div className={classes.ball__finished}>
                        <div className={classes.ball__content}>
                            <PiNumberThree/>
                        </div>
                        <span>Заказ принят</span>
                    </div>
                </div>
            </header>

            <main className={classes.main}>
                <header className={classes.main__head}>
                    <h2>Заказ на самовывоз</h2>
                </header>
                <div id={classes.input__box} className={classes.name}>
                    <p>Имя</p>
                    <Input value={nameInputValue} onChange={(e) => setNameInputValue(e.target.value)} type={"text"} text={'Имя'}/> // сделать ленгх максимальный
                </div>

                <div id={classes.input__box} className={classes.name}>
                    <p>Номер телефона</p>
                    <Input value={numberInputValue} onChange={handleNumberInput} type={"text"} text={'Ваш номер телефона'}/>
                </div>

                {/* <div id={classes.input__box} className={classes.name}>
                    <p>Адрес</p>
                    <Input value={nameInputValue} onChange={(e) => setNameInputValue(e.target.value)} type={"text"} text={'Имя'}/>
                </div> */}
            </main>
        </div>
    )
}

export default BuyPage;