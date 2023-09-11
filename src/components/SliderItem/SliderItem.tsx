import React, { FC, useState } from 'react'
import classes from "./Slider.module.css"
import { ISlider } from '../../types/Slider'

interface SliderItemProps {
    sliderItem: ISlider,
    isModal: boolean,
    callback?: (arg: string) => void;
}

const SliderItem: FC<SliderItemProps> = ({sliderItem, isModal, callback}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleImgClick: React.MouseEventHandler<HTMLDivElement> = () => {
        if (callback) {
            callback(sliderItem.id)
        }
        setIsChecked(true)
    }
    
    return (
        <div onClick={handleImgClick} className={isModal ? classes.container__modal : classes.container}>
            <div className={classes.content}>
                <img className={isChecked || isModal ? classes.img : classes.border__img} src={sliderItem.img} />
            </div>
        </div>
    )
}

export default SliderItem; 