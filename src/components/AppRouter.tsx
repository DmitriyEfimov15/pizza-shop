import React, { FC } from "react";
import {Routes, Route} from "react-router-dom"

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/main"/>
        </Routes>
    )
}

export default AppRouter;