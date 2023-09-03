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
                <Carousel>
                    <div className={classes.first}>item 1</div>
                    <div className={classes.second}>item 2</div>
                    <div className={classes.third}>item 3</div>
                </Carousel>
            </div>
        </div>
    )
}

export default MainPage;