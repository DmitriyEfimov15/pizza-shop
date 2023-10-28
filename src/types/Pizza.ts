export interface IPizza {
    id: number,
    imageUrl: string,
    title: string,
    discription: string,
    price: string,
    sizes: string[],
    dough: string[]
}

export interface PizzaBacket {
    id: number,
    dough: string,
    size: string,
    title: string,
    price: number,
    imageUrl: string,
    discription: string,
    count: number
}