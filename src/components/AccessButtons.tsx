import { useContext } from "react"
import { LinksDictDocument } from "../@types/globals"
import { AppContext } from "../app/AppProvider"
const LinksDict: LinksDictDocument = require('../locale/links.json')

const AccessButtons: React.FC = () => {
    const Context = useContext(AppContext)
    const link = LinksDict[Context.selectionType as keyof LinksDictDocument].link
    return (
        <>
            {
                link ? (null) : null
            }
        </>
    )

}

export default AccessButtons