import React, { FC, useState } from "react"
import classes from './LocalPizzaList.module.css'
import Modal from "../UI/Modal/Modal";
import { localAPI } from "../../services/PizzaLocationService";
import Button from "../UI/Button/Button";
import {TfiLocationPin} from 'react-icons/tfi'

interface LocalPizzaListProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setValueInput: React.Dispatch<React.SetStateAction<string>>,
}


const LocalPizzaList: FC<LocalPizzaListProps> = ({isVisible, setIsVisible, setValueInput}) => {
    const {data: localAdresses} = localAPI.useFetchAllLocationQuery(0)
    const [localValueInput, setLocalValueInput] = useState<string>('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValueInput(e.target.value)   
    }

    const handleClick = () => {
        setValueInput(localValueInput)
        setIsVisible(false)
    }

    return (
        <Modal setIsVisible={setIsVisible} isVisible={isVisible}>
            <div className={classes.container}>
                {localAdresses?.length 
                    ?<div className={classes.content}>
                        <h2>Пиццерии</h2>
                        {localAdresses.map(adress => (
                            <label className={localValueInput === `${adress.area}, ${adress.adress}, ${adress.house}` ? classes.label : classes.unactive} key={adress.area} htmlFor={`${adress.house}`}>
                                <div className={classes.img}><TfiLocationPin/></div>
                                <div>
                                    <p className={classes.adress}>{adress.area}, {adress.adress}, {adress.house}</p>
                                    <p className={classes.time}>{adress.time}</p>
                                    <input value={`${adress.area}, ${adress.adress}, ${adress.house}`} onChange={handleInput} id={`${adress.house}`} type="radio" name="local" />
                                </div>
                            </label>
                        ))}
                        <Button onClick={handleClick} color="orange">Выбрать</Button>
                    </div>
                    :<div>Ошибка!</div>
                }
            </div>
        </Modal>
    )
}

export default LocalPizzaList;