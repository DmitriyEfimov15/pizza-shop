import { PizzaBacket } from "../types/Pizza"
import {useState, useEffect} from 'react'

export const useResultPrice = (arr: any[] | undefined) => {
    const [arrPrice, setArrPrice] = useState<number[]>([])
    const resultPrice = arrPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    useEffect(() => {
        if (arr){setArrPrice([])
        arr.map(pizza => setArrPrice(oldArray => ([...oldArray, pizza.price])))}
    }, [arr])

    return resultPrice;
}

export const useResultLength = (arr: any[] | undefined) => {
    const [arrLength, setArrLength] = useState<number[]>([])
    const resultLength = arrLength.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    useEffect(() => {
        if (arr){setArrLength([])
        arr.map(pizza => setArrLength(oldArray => ([...oldArray, pizza.count])))}
    }, [arr])

    return resultLength;
}