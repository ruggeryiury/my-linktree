import { useContext, useEffect } from "react"
import { AppContext } from "./AppProvider"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import IndexPage from "../pages/IndexPage"

const AppRouter = () => {
    const Context = useContext(AppContext)

    useEffect(() => {
        Context.setLang(navigator.language)
    }, [])

    useEffect(() => { }, [Context.lang])
    return (
        <Router>
            <Routes>
                <Route index element={<IndexPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter