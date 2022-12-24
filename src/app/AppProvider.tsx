import React, { createContext, useState } from "react"

export interface AppContextDocument {
    lang: string
    setLang: React.Dispatch<React.SetStateAction<string>>
    isLinkSelected: boolean
    setLinkSelected: React.Dispatch<React.SetStateAction<boolean>>
    linkSelection: string
    setLinkSelection: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext({} as AppContextDocument)

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    // This controls the language of the whole web app.
    const [lang, setLang] = useState('pt-BR')

    // This controls everything related to the link buttons.
    const [isLinkSelected, setLinkSelected] = useState(false)
    const [linkSelection, setLinkSelection] = useState('')

    return (
        <AppContext.Provider value={{
            lang, setLang,
            isLinkSelected, setLinkSelected,
            linkSelection, setLinkSelection
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider