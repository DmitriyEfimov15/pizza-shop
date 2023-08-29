import React, { FC } from 'react'
import classes from "./CityItem.module.css"

interface CityItemProps {
    name: string,
    callback: (e:  React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const CityItem: FC<CityItemProps> = ({name, callback}) => {
    return (
        <div className={classes.container}>
            <a onClick={callback} href="#">{name}</a>
        </div>
    )
}

export default CityItem;