import { useEffect } from "react"
import setPageTitle from "../utils/setPageTitle"
import AppProvider from "./AppProvider"
import AppRouter from "./AppRouter"
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
    useEffect(() => {
        setPageTitle('Ruggery Iury Corrêa')
        AOS.init()
    })
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}

export default App