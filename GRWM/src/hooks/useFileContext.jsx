import { useContext } from 'react'
import { FileContext } from '../context/fileContext'


export const useFileContext = () => {
    const context = useContext(FileContext)

    if(!context){
        throw Error("yes")
    }

    return context
}