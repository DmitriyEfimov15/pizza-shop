import React, {FC, useEffect} from "react";
import classes from "./MainPage.module.css"
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
import Carousel from "../../components/UI/Carousel/Carousel";
import SliderItem from "../../components/SliderItem/SliderItem";
import { cityAPI } from "../../services/CityService";
const MainPage: FC = () => {
    const {data: sliderList} = cityAPI.useFetchAllSliderDataQuery(0)

    // Попробовать сделать через обынчый createSlice
    return (
        <div className={classes.container}>
            <Navbar/>
            <Header/>

            <div className={classes.slider__container}>
                <Carousel contentHeigth="250px" heightItem="230px" elementsToShow={4}>
                    <div className={classes.first}>item 1</div>
                    <div className={classes.second}>item 2</div>
                    <div className={classes.third}>item 3</div>
                    <div className={classes.four}>item 4</div>
                    <div className={classes.fif}>item 5</div>
                    <div className={classes.six}>item 6</div>
                    <div className={classes.seven}>item 7</div>
                    <div className={classes.eight}>item 8</div>
                    {/* {sliderList?.map(item => (
                        <SliderItem sliderItem={item} key={item.id}/>
                    ))} */}
                </Carousel>
            </div>
        </div>
    )
}

export default MainPage;