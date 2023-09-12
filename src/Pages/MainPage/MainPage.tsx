import React, {FC, useEffect, useState} from "react";
import classes from "./MainPage.module.css"
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
import Carousel from "../../components/UI/Carousel/Carousel";
import SliderItem from "../../components/SliderItem/SliderItem";
import { cityAPI } from "../../services/CityService";
import { useAppDispatch, useAppSelector } from "../../hooks/reducerHooks";
import { fetchSlider } from "../../store/action-creators/fetchSlider";
import { ISlider } from "../../types/Slider";
import Modal from "../../components/UI/Modal/Modal";
import PizzaList from "../../components/PizzaList/PizzaList";
const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    const [sliderItemID, setSliderItemID] = useState<string>("1")
    const {data: sliderList, isLoading} = useAppSelector(state => state.sliderReducer)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

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
                <Carousel isLoading={isLoading} contentHeigth="310px" heightItem="250px" elementsToShow={6}>
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