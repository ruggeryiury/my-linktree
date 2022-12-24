import { useContext, useEffect } from "react"
import { AppContext } from "../app/AppProvider"
import IndexHeader from "../components/IndexHeader"
import { IndexDesc, MyMusics, MyOther, MyProfessionalNetworks, MySocialNetworks, ProfileImage, WelcomeText } from "../components/IndexPage.components"
import LinkModals from "../components/LinkModals"
import setPageTitle from "../utils/setPageTitle"

function IndexPage() {
    const Context = useContext(AppContext)

    const HandleScroll = (scrollY: number) => {
        scrollY > 120 ? Context.setAppearHeader(true) : Context.setAppearHeader(false)
    }

    useEffect(() => {
        setPageTitle('Ruggery Iury: My Linktree')
        window.addEventListener('scroll', ev => HandleScroll((ev.currentTarget as Window).scrollY))

        return window.removeEventListener('scroll', ev => HandleScroll((ev.currentTarget as Window).scrollY))
    }, [])
    return (
        <>
            <IndexHeader />
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