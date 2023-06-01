import { useEffect } from "react"
import i18n from 'i18next'
import AppContext from "./app/AppContext"
import AppRouter from "./app/AppRouter"

const App = () => {

    useEffect(() => {
        document.documentElement.lang = i18n.language
    }, [])
    
    return (
        <AppContext>
            <AppRouter />
        </AppContext>
    )
}

export default App