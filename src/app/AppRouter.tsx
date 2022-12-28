import { useContext, useEffect } from "react"
import { AppContext } from "./AppProvider"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import IndexPage from "../pages/IndexPage"
import langParser from "../utils/langParser"
import getUserSession from "../utils/getUserSession"

const AppRouter = () => {
    const Context = useContext(AppContext)

    const ManipulateUserSession = () => {
        const session = getUserSession()

        if (session) {
            Context.setLang(session.lang)
        } else {
            Context.setLang(langParser(navigator.language))
        }
    }

    useEffect(() => {
        ManipulateUserSession()
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