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
const MainPage: FC = () => {
    // const {data: sliderList} = cityAPI.useFetchAllSliderDataQuery(0)
    const dispatch = useAppDispatch()
    const {data: sliderList, isLoading} = useAppSelector(state => state.sliderReducer)

    useEffect(() => {
        dispatch(fetchSlider())
    }, [])
    return (
        <div className={classes.container}>
            <Navbar/>
            <Header/>

            <div className={classes.slider__container}>
                <Carousel isLoading={isLoading} contentHeigth="310px" heightItem="250px" elementsToShow={4}>
                    {sliderList.map(item => (
                        <SliderItem isModal={false} sliderItem={item} key={item.id}/>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default MainPage;