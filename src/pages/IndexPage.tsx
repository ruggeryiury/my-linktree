import { useContext, useEffect } from "react"
import { AppContext } from "../app/AppProvider"
import { IndexDesc, MyMusics, MyOther, MyProfessionalNetworks, MySocialNetworks, ProfileImage, WelcomeText } from "../components/IndexPage.components"
import LinkModals from "../components/LinkModals"
import setPageTitle from "../utils/setPageTitle"

const IndexPage = () => {
    const Context = useContext(AppContext)

    useEffect(()=>{
        setPageTitle('Ruggery Iury: My Linktree')
    }, [])
    return (
        <>
            <LinkModals />

            <ProfileImage lang={Context.lang} />
            <WelcomeText lang={Context.lang} />
            <IndexDesc lang={Context.lang} />
            <MySocialNetworks lang={Context.lang} />
            <MyProfessionalNetworks lang={Context.lang} />
            <MyMusics lang={Context.lang} />
            <MyOther lang={Context.lang} />
        </>
    )
}

export default IndexPage