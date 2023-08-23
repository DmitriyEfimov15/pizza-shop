import React, { SetStateAction, createContext } from "react";


interface AuthContextState {
    isAuth: boolean,
    isLoading: boolean,
    setIsAuth: React.Dispatch<SetStateAction<boolean>>
}

const initialState = {
    isAuth: false,
    isLoading: false,
    setIsAuth: () => false
}

export const AuthContext = createContext<AuthContextState>(initialState)