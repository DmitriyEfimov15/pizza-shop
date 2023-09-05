import React, {FC, ReactElement, Children, useEffect, useState, cloneElement, useMemo} from "react";
import classes from "./Carousel.module.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

interface CarouselProps {
    children: ReactElement[];
    elementsToShow: number,
    heightItem: string,
    contentHeigth: string,
}

const ITEM_WIDTH = 200
const ITEM_MARGIN = 20


const Carousel: FC<CarouselProps> = ({children, elementsToShow, heightItem, contentHeigth}) => {
    const [items, setItems] = useState<JSX.Element[]>([])
    const [offSet, setOffSet] = useState<number>(0)
    const [isRightArrowDisabled, setIsRightArrowDisabled] = useState<boolean>(false)
    const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState<boolean>(true)
    const windowWidth = elementsToShow * ITEM_WIDTH + (ITEM_MARGIN * 2 * elementsToShow)
    const maxOffSet = -(windowWidth * ((Math.ceil(items.length / elementsToShow)) - 1))

    useEffect(() => {
        setItems(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        heigth: "100%",
                        minWidth: `${ITEM_WIDTH}px`,
                        maxWidth: `${ITEM_WIDTH}px`,
                        height: heightItem,
                        margin: `0 ${ITEM_MARGIN}px 0 ${ITEM_MARGIN}px`
                    }
                })
            })
        )
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
        return <div></div>
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
