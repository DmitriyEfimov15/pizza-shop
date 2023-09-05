import React, { FC, useEffect } from 'react'
import classes from "./Slider.module.css"
import { cityAPI } from '../../services/CityService'
import { ISlider } from '../../types/Slider'

interface SliderItemProps {
    sliderItem: ISlider
}

const SliderItem: FC<SliderItemProps> = ({sliderItem}) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <img src={sliderItem.img} />
            </div>
        </div>
    )
}

export default SliderItem; 