import React, { createContext, useState } from "react"

export interface AppContextDocument {
    lang: string
    setLang: React.Dispatch<React.SetStateAction<string>>
    isSelected: boolean
    setIsSelected: React.Dispatch<React.SetStateAction<boolean>>
    selectionType: string
    setSelectionType: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext({} as AppContextDocument)

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [lang, setLang] = useState('pt-BR')
    const [isSelected, setIsSelected] = useState(false)
    const [selectionType, setSelectionType] = useState('facebook')

    return (
        <AppContext.Provider value={{
            lang, setLang,
            isSelected, setIsSelected,
            selectionType, setSelectionType
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider