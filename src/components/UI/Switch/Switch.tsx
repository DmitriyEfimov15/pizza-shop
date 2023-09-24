import React, { FC, useEffect, useState } from "react";
import classes from "./Switch.module.css"
import { IPizza } from "../../../types/Pizza";

interface SwitchProps {
    stirng: string,
    setStateValue: React.Dispatch<React.SetStateAction<string>>,
    stateValue: string,
    array: string[],
    labelText?: string
}

const Switch: FC<SwitchProps> = ({stirng, stateValue, setStateValue, array, labelText}) => {
    const [offset, setOffset] = useState<number>(0)
    useEffect(() => {
        setOffset(100 * array.indexOf(stateValue))
    }, [stateValue])

    const switchWidth = 100 / array.length

    return (
        <div className={classes.container}>
            <div className={array.length === 1 ? classes.unactive : classes.switch__slider} style={{
                width: `${switchWidth}%`,
                transform: `translateX(${offset}%)`}}
                />
            <div className={classes.content}>
                <label htmlFor={`${stirng}`} className={classes.label}>{stirng}{labelText}</label>
                <input checked={stirng === stateValue ? true : false} type='radio' name='pizza' value={stateValue} onChange={(e) => setStateValue(stirng)} id={`${stirng}`} />
            </div>
        </div>
    )
}

export default Switch;