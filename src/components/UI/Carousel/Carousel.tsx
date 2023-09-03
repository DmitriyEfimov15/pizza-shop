import React, {FC, ReactElement, Children, useEffect, useState, cloneElement} from "react";
import classes from "./Carousel.module.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

interface CarouselProps {
    children: ReactElement[];
}

const ITEM_WIDTH = 450

const Carousel: FC<CarouselProps> = ({children}) => {
    const [items, setItems] = useState<JSX.Element[]>([])
    const [offSet, setOffSet] = useState<number>(0)

    useEffect(() => {
        setItems(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        heigth: "100%",
                        minWidth: `${ITEM_WIDTH}px`,
                        maxWidth: `${ITEM_WIDTH}px`
                    }
                })
            })
        )

        console.log(items.length)
    }, [])


    const handleLeftArrowClick = () => {
        setOffSet((currentOffset) => {
            const newOffSet = currentOffset + ITEM_WIDTH
            return Math.min(newOffSet, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffSet((currentOffset) => {
            const newOffSet = currentOffset - ITEM_WIDTH
            const maxOffSet = -(ITEM_WIDTH * (items.length - 1))

            return Math.max(newOffSet, maxOffSet);
        })
    }

    return (
        <div className={classes.container}>
            <FaChevronLeft className={classes.arrow} onClick={handleLeftArrowClick}/>
            <div className={classes.window}>
                <div 
                className={classes.all__items__container}
                style={{
                    transform: `translateX(${offSet}px)`
                }}
                >{items}</div>
            </div>
            <FaChevronRight className={classes.arrow} onClick={handleRightArrowClick}/>
        </div>
    )
}

export default Carousel;
