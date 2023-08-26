import React, { FC } from 'react'
import classes from "./CityItem.module.css"

interface CityItemProps {
    name: string,
}

const CityItem: FC<CityItemProps> = ({name}) => {
    return (
        <div className={classes.container}>
            <a href="#">{name}</a>
        </div>
    )
}

export default CityItem;