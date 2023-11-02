import React, { FC } from "react"
import classes from './LocalPizzaList.module.css'
import Modal from "../UI/Modal/Modal";
import { localAPI } from "../../services/PizzaLocationService";
import Item from "antd/es/list/Item";

interface LocalPizzaListProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    valueInput: string,
    setValueInput: React.Dispatch<React.SetStateAction<string>>
}


const LocalPizzaList: FC<LocalPizzaListProps> = ({isVisible, setIsVisible, valueInput, setValueInput}) => {
    const {data: localAdresses} = localAPI.useFetchAllLocationQuery(0)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)   
        setIsVisible(false)
    }

    return (
        <Modal setIsVisible={setIsVisible} isVisible={isVisible}>
            <div className={classes.container}>
                {localAdresses?.length 
                    ?<div className={classes.content}>
                        {localAdresses.map(adress => (
                            <label key={adress.area} htmlFor={`${adress.house}`}>
                                <p className={classes.adress}>{adress.area}, {adress.adress}, {adress.house}</p>
                                <p className={classes.time}>{adress.time}</p>
                                <input value={`${adress.area}, ${adress.adress}, ${adress.house}`} onChange={handleInput} id={`${adress.house}`} type="radio" name="local" />
                            </label>
                        ))}
                    </div>
                    :<div>Ошибка!</div>
                }
            </div>
        </Modal>
    )
}

export default LocalPizzaList;