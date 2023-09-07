import React, { FC, useState } from 'react'
import classes from "./Slider.module.css"
import { cityAPI } from '../../services/CityService'
import { ISlider } from '../../types/Slider'
import Modal from '../UI/Modal/Modal'

interface SliderItemProps {
    sliderItem: ISlider,
    isModal: boolean,
    callback?: (arg: string) => void;
}

const SliderItem: FC<SliderItemProps> = ({sliderItem, isModal, callback}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleImgClick = () => {
        setIsChecked(true)
    }
    // onClick={() => callback(sliderItem.id)}
    return (
        <div className={isModal ? classes.container__modal : classes.container}>
            <div onClick={handleImgClick} className={classes.content}>
                <img  className={isChecked || isModal ? classes.img : classes.border__img} src={sliderItem.img} />
            </div>
        </div>
    )
}

export default SliderItem; 