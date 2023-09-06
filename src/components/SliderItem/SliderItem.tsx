import React, { FC, useState } from 'react'
import classes from "./Slider.module.css"
import { cityAPI } from '../../services/CityService'
import { ISlider } from '../../types/Slider'
import Modal from '../UI/Modal/Modal'

interface SliderItemProps {
    sliderItem: ISlider,
    isModal: boolean
}

const SliderItem: FC<SliderItemProps> = ({sliderItem, isModal}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleImgClick = () => {
        setIsChecked(true)
    }

    return (
        <div className={isModal ? classes.container__modal :classes.container}>
            <div className={classes.content}>
                <img onClick={handleImgClick} className={isChecked ? classes.img : classes.border__img} src={sliderItem.img} />
            </div>
        </div>
    )
}

export default SliderItem; 