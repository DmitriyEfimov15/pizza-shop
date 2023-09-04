import React, {FC} from "react";
import classes from "./MainPage.module.css"
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
import Carousel from "../../components/UI/Carousel/Carousel";
const MainPage: FC = () => {
    return (
        <div className={classes.container}>
            <Navbar/>
            <Header/>

            <div className={classes.slider__container}>
                <Carousel elementsToShow={4}>
                    <div className={classes.first}>item 1</div>
                    <div className={classes.second}>item 2</div>
                    <div className={classes.third}>item 3</div>
                    <div className={classes.four}>item 4</div>
                    <div className={classes.fif}>item 5</div>
                    <div className={classes.six}>item 6</div>
                    <div className={classes.seven}>item 7</div>
                    <div className={classes.eight}>item 8</div>
                </Carousel>
            </div>
        </div>
    )
}

export default MainPage;