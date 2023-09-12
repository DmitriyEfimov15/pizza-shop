import React, {FC, ReactElement, Children, useEffect, useState, cloneElement, useMemo} from "react";
import classes from "./Carousel.module.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import Loader from "../Loader/Loader";
import { current } from "@reduxjs/toolkit";

interface CarouselProps {
    children: ReactElement[];
    elementsToShow: number,
    heightItem: string,
    contentHeigth: string,
    isLoading: boolean,
    isModal?: boolean,
    id?: string
}
const ITEM_MARGIN = 20


const Carousel: FC<CarouselProps> = ({children, elementsToShow, contentHeigth, isLoading, isModal, id}) => {
    const ITEM_WIDTH = isModal ? 558 : 210
    const [items, setItems] = useState<JSX.Element[]>([])
    const [offSet, setOffSet] = useState<number>(0)
    const [isRightArrowDisabled, setIsRightArrowDisabled] = useState<boolean>(false)
    const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState<boolean>(true)
    const windowWidth = elementsToShow * ITEM_WIDTH + (ITEM_MARGIN * 2 * elementsToShow)
    const maxOffSet = -(windowWidth * ((Math.ceil(items.length / elementsToShow)) - 1)) 

    useEffect(() => {
        setItems(
            Children.map(children, (child) => {
                return cloneElement(child)
            })
        )
    }, [isLoading])

    useEffect(() => {
        // setOffSet(0)
    }, [])

    useMemo(() => {
        if(offSet === maxOffSet) {
            setIsRightArrowDisabled(true)
        }

        else {
            setIsRightArrowDisabled(false)
        }

        if(offSet === 0) {
            setIsLeftArrowDisabled(true)
        }

        else {
            setIsLeftArrowDisabled(false)
        }
    }, [offSet])

    useEffect(() => {
        if(isModal && id) {
            setOffSet(() => {
                const newOffSet = 0 - (windowWidth * (parseInt(id) - 1))                
                return newOffSet;
            })
        }
            
    }, [id, isModal])

    const handleLeftArrowClick = () => {
        setOffSet((currentOffset) => {
            const newOffSet = currentOffset + windowWidth
            return Math.min(newOffSet, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffSet((currentOffset) => {
            const newOffSet = currentOffset - windowWidth
            
            return Math.max(newOffSet, maxOffSet);
        })
    }

    if(!items.length) {
        return <Loader/>
    }

    return (
        <div className={classes.container}>
            <div className={classes.content} style={{height: contentHeigth}}>
                <FaChevronLeft className={isLeftArrowDisabled ? classes.unactive : classes.arrow} onClick={handleLeftArrowClick}/>
                <div className={classes.window} style={{
                    maxWidth: `${windowWidth}px`,
                    minWidth: `${windowWidth}px`
                }}>
                    <div 
                    className={classes.all__items__container}
                    style={{
                        transform: `translateX(${offSet}px)`
                    }}
                    >{items}</div>
                </div>
                <FaChevronRight className={isRightArrowDisabled ? classes.unactive : classes.arrow} onClick={handleRightArrowClick}/>
            </div>
        </div>
    )
}

export default Carousel;
