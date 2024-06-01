import { createContext, useReducer } from "react";

export const FileContext = createContext()

export const fileReducer = (state, action) => {
    switch (action.type) {
        case 'SET_IMAGE':
            return {
                image: action.payload
            }
        case 'DELETE_IMAGE':
            return {
                image: null
            }
    }
}

export const FileContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(fileReducer, {
        image: null
    })
    return (
        <FileContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FileContext.Provider>
    )
}