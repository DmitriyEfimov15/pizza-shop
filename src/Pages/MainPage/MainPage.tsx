import React, {FC, useEffect, useState, useRef, useLayoutEffect, useMemo} from "react";
import classes from "./MainPage.module.css"
import Navbar from "../../components/UI/Navbar/Navbar";
import Header from "../../components/UI/Header/Header";
import Carousel from "../../components/UI/Carousel/Carousel";
import SliderItem from "../../components/SliderItem/SliderItem";
import { useAppDispatch, useAppSelector } from "../../hooks/reducerHooks";
import { fetchSlider } from "../../store/action-creators/fetchSlider";
import Modal from "../../components/UI/Modal/Modal";
import PizzaList from "../../components/PizzaList/PizzaList";
import Navigation from "../../components/UI/Navigation/Navigation";
import Backet from "../../components/UI/Backet/Backet";
import { pizzaAPI } from "../../services/PizzaBacketService";
import PizzaBacketItem from "../../components/PizzaBacketItem/PizzaBacketItem";
import { useHeight } from "../../hooks/useHeight";
import Footer from "../../components/UI/Footer/Footer";

const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    const [sliderItemID, setSliderItemID] = useState<string>("1")
    const {data: sliderList, isLoading} = useAppSelector(state => state.sliderReducer)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [elementsToShow, setElementToShow] = useState<number>(Math.ceil((window.innerWidth - (window.innerWidth * 0.5)) / 230))
    const [isBacketVisible, setIsBacketVisible] = useState<boolean>(false)
    const el = useRef<HTMLDivElement>(null)
    const [isIntersectingNav, setIsIntersectingNav] = useState<boolean>(true)
    const {data: pizzas} = pizzaAPI.useFetchBacketPizzaQuery(1)
    const [contentHeigth, setContentHeigth] = useState<number>(600)

    // useMemo(() => {
    //     if (window.innerHeight < 900) {
    //         setContentHeigth('550')
    //     }
        
    //     if (window.innerHeight < 800) {
    //         setContentHeigth('480')
    //     }
    //     if (window.innerHeight < 700) {
    //         setContentHeigth('390')
    //     }
    // }, [window.innerHeight])
    

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

    useLayoutEffect(() => {
        const fixedTop = el.current?.offsetTop;
        const stickyEffect = () => {
           if(fixedTop){
                if(window.pageYOffset > fixedTop) {
                    setIsIntersectingNav(false)
                }
                else {
                    setIsIntersectingNav(true)
                }
           }
        }

        window.addEventListener('scroll', stickyEffect)
    }, [])
    
    
    return (
        <div className={classes.container}>
            <Navbar/>
            <Header/>
            <Backet isVisible={isBacketVisible} setIsVisible={setIsBacketVisible}>
                {pizzas?.map(pizza => (
                    <PizzaBacketItem pizzaItem={pizza} key={pizza.id}/>  // Сделать так, чтобы отоброжалась собачка, когда нет пицц
                ))}
            </Backet>
            <div ref={el}>
                <Navigation isInteresting={isIntersectingNav} setVisibleBacket={setIsBacketVisible}/>  
            </div>
            <div className={classes.slider__container}>
                <Carousel isLoading={isLoading} contentHeigth="310px" heightItem="250px" elementsToShow={elementsToShow}>
                    {sliderList.map(item => (
                        <SliderItem callback={handleImgClick} isModal={false} sliderItem={item} key={item.id}/>
                    ))}
                </Carousel>
                <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                    <div className={classes.modal__content}>
                        <Carousel id={sliderItemID} isModal={true} isLoading={isLoading} contentHeigth={`${Math.ceil(window.innerHeight/2) + 100}px`} heightItem="250px" elementsToShow={1}>
                            {sliderList.map(item => (
                                <SliderItem isModal={true} sliderItem={item} key={item.id}/>
                            ))}
                        </Carousel>
                    </div>
                </Modal>
            </div>
            <PizzaList idElement="pizza"/>
            <Footer/>
        </div>
    )
}

export default MainPage;