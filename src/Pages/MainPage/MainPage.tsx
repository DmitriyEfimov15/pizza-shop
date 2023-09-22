import React, {FC, useEffect, useState, useRef, useMemo} from "react";
import classes from "./MainPage.module.css"
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
import Carousel from "../../components/UI/Carousel/Carousel";
import SliderItem from "../../components/SliderItem/SliderItem";
import { useAppDispatch, useAppSelector } from "../../hooks/reducerHooks";
import { fetchSlider } from "../../store/action-creators/fetchSlider";
import Modal from "../../components/UI/Modal/Modal";
import PizzaList from "../../components/PizzaList/PizzaList";
import PizzaModalItem from "../../components/PizzaModalItem/PizzaModalItem";

const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    const [sliderItemID, setSliderItemID] = useState<string>("1")
    const {data: sliderList, isLoading} = useAppSelector(state => state.sliderReducer)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [elementsToShow, setElementToShow] = useState<number>(Math.ceil((window.innerWidth - (window.innerWidth * 0.5)) / 230))
    
    useEffect(() => {
        const handleResize= () => {
            setElementToShow(Math.ceil((window.innerWidth - (window.innerWidth * 0.5)) / 230))
        }
        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    useEffect(() => {
        dispatch(fetchSlider())
    }, [])

    const handleImgClick = (id: string) => {
        setSliderItemID(id)
        setIsModalVisible(true) 
    }
    return (
        <div className={classes.container}>
            <Navbar/>
            <Header/>

            <div className={classes.slider__container}>
                <Carousel isLoading={isLoading} contentHeigth="310px" heightItem="250px" elementsToShow={elementsToShow}>
                    {sliderList.map(item => (
                        <SliderItem callback={handleImgClick} isModal={false} sliderItem={item} key={item.id}/>
                    ))}
                </Carousel>
                <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                    <div className={classes.modal__content}>
                        <Carousel id={sliderItemID} isModal={true} isLoading={isLoading} contentHeigth="730px" heightItem="250px" elementsToShow={1}>
                            {sliderList.map(item => (
                                <SliderItem isModal={true} sliderItem={item} key={item.id}/>
                            ))}
                        </Carousel>
                    </div>
                </Modal>
            </div>
            <PizzaList/>
        </div>
    )
}

export default MainPage;