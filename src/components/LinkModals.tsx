import { type } from "@testing-library/user-event/dist/type"
import { useContext, useEffect } from "react"
import { BsDiscord } from "react-icons/bs"
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { ImTwitch, ImSoundcloud2 } from "react-icons/im"
import { RiQuestionnaireFill } from "react-icons/ri"
import { AppContext } from "../app/AppProvider"
import getLocaleString from "../utils/getLocaleString"

const LinkModalBG: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div id="LinkButtonSelectedBG" className="fixed z-10 w-full h-screen backdrop-blur-[2px] duration-200" style={{ display: 'none', backgroundColor: 'rgba(0,0,0,0)', opacity: '0%' }}>
            {children}
        </div>
    )
}

const LinkModalIcons: React.FC<{ type: string }> = ({ type }) => {
    if (type === 'facebook') {
        return <FaFacebookSquare className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'twitter') {
        return <FaTwitterSquare className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'instagram') {
        return <FaInstagram className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'twitch') {
        return <ImTwitch className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'discord') {
        return <BsDiscord className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'linkedin') {
        return <FaLinkedin className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'github') {
        return <FaGithub className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'soundcloud') {
        return <ImSoundcloud2 className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'ngl') {
        return <RiQuestionnaireFill className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else {
        return null
    }
}
const LinkModalOptions = () => {

}
const LinkModals = () => {
    const Context = useContext(AppContext)

    const DeactivateLinkSelection = () => {
        Context.setLinkSelected(false)
    }

    const ManipulateLinkModals = () => {
        const LinkButtonSelectedBG = document.getElementById("LinkButtonSelectedBG") as HTMLDivElement
        const LinkButtonSelected = document.getElementById("LinkButtonSelected") as HTMLDivElement

        if (Context.isLinkSelected) {
            document.body.style.overflowY = "hidden"
            LinkButtonSelectedBG.style.display = 'flex'
            setTimeout(() => {
                LinkButtonSelectedBG.style.opacity = '1'
                LinkButtonSelectedBG.style.backgroundColor = 'rgba(0,0,0,0.9)'
                LinkButtonSelected.style.top = '0'
            }, 50)
        } else {
            document.body.style.overflowY = "auto"
            LinkButtonSelectedBG.style.opacity = '0'
            LinkButtonSelected.style.top = '100%'
            setTimeout(() => {
                LinkButtonSelectedBG.style.display = 'none'
            }, 200)
        }
    }

    useEffect(() => {
        ManipulateLinkModals()
    }, [Context.isLinkSelected])

    return (
        <LinkModalBG>
            <div id="LinkButtonSelected" className="fixed items-center mt-auto font-normal pb-6 px-4 w-full h-screen duration-200" style={{ top: '100%' }} >
                <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md px-2 py-3 border-main-white/50 mt-auto items-center">
                    <LinkModalIcons type={Context.linkSelection} />
                    {
                        Context.linkSelection ? (
                            <h1 className="w-full px-8 font-normal text-sm text-main-white/75 mb-4">{getLocaleString(`${Context.linkSelection}_desc`, Context.lang)}</h1>
                        ) : null
                    }
                    <button className="text-red-500 text-lg w-full bg-[#00000088] py-2 rounded-md border border-red-500 hover:bg-[#ffffff22]" onClick={ev => DeactivateLinkSelection()} >{getLocaleString('close', Context.lang)}</button>
                </div>
            </div>
        </LinkModalBG>
    )
}

export default LinkModals