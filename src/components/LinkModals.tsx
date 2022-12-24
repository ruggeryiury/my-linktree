import { useContext, useEffect } from "react"
import { BsDiscord } from "react-icons/bs"
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { ImTwitch, ImSoundcloud2 } from "react-icons/im"
import { RiQuestionnaireFill } from "react-icons/ri"
import { SiGmail } from "react-icons/si"
import { ReactComponentWithType, ReactComponentWithLangAndType, ReactComponentWithLangAndBooleanAction } from "../@types/components"
import { AppContext } from "../app/AppProvider"
import getLocaleString from "../utils/getLocaleString"
import getSocialNetworks from "../utils/getSocialNetworks"

const LinkModalBG: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div id="LinkButtonSelectedBG" className="fixed z-10 w-full h-screen backdrop-blur-[2px] duration-200 items-center" style={{ display: 'none', backgroundColor: 'rgba(0,0,0,0)', opacity: '0%' }}>
            {children}
        </div>
    )
}

const LinkModalIcons: React.FC<ReactComponentWithType> = ({ type }) => {
    if (type === 'facebook') {
        return <FaFacebookSquare className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'twitter') {
        return <FaTwitterSquare className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'instagram') {
        return <FaInstagram className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'twitch') {
        return <ImTwitch className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'discord') {
        return <BsDiscord className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'linkedin') {
        return <FaLinkedin className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'github') {
        return <FaGithub className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'soundcloud') {
        return <ImSoundcloud2 className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'gmail') {
        return <SiGmail className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else if (type === 'ngl') {
        return <RiQuestionnaireFill className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
    } else {
        return null
    }
}

const LinkModalDesc: React.FC<ReactComponentWithLangAndType> = ({ type, lang }) => {
    return type ? <h1 className="w-full px-8 font-normal text-sm tablet:text-base text-main-white/75 mb-4">{getLocaleString(`${type}_desc`, lang)}</h1> : null
}

const LinkModalOptions: React.FC<ReactComponentWithLangAndType> = ({ type, lang }) => {
    const OpenTab = () => {
        window.open(getSocialNetworks(type, 'link'), "_blank")
    }
    const CopyToClipboard = async (copyText: 'default' | 'email' = 'default') => {
        const copyUserText = document.getElementById("copyUserText") as HTMLSpanElement
        navigator.clipboard.writeText(getSocialNetworks(type, 'user'))
            .then(() => {
                copyUserText.classList.add('animate-copytext')
                setTimeout(() => {
                    copyUserText.style.fontSize = "0.8rem"
                    copyUserText.style.color = 'rgba(238, 238, 238, 0.8)'
                    if (copyText === 'default') {
                        copyUserText.innerHTML = getLocaleString('copy_successfully', lang, true)
                    } else if (copyText === 'email') {
                        copyUserText.innerHTML = getLocaleString('copy_email_successfully', lang, true)
                    }
                }, 100)
                setTimeout(() => {
                    copyUserText.classList.remove('animate-copytext')
                }, 200)
                setTimeout(() => {
                    copyUserText.classList.add('animate-copytext')
                }, 800)
                setTimeout(() => {
                    copyUserText.style.fontSize = "1.125rem"
                    copyUserText.style.color = 'rgba(238, 238, 238)'
                    if (copyText === 'default') {
                        copyUserText.innerHTML = getLocaleString(`copy_user`, lang)
                    } else if (copyText === 'email') {
                        copyUserText.innerHTML = getLocaleString(`copy_email`, lang)
                    }
                }, 900)
                setTimeout(() => {
                    copyUserText.classList.remove('animate-copytext')
                }, 1000)
            })
            .catch((reason) => {
                console.log(reason)
            })
    }

    if (type) {
        return (
            <>
                {
                    type === 'facebook' || type === 'twitter' || type === 'instagram' || type === 'twitch' || type === 'linkedin' || type === 'github' || type === 'soundcloud' ? (
                        <button className="font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => OpenTab()} >{getLocaleString(`access_link`, lang)}</button>
                    ) : null
                }
                {
                    type === 'ngl' ? (
                        <button className="font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => OpenTab()} >{getLocaleString(`ngl_link`, lang)}</button>
                    ) : null
                }
                {
                    type === 'gmail' ? (
                        <button className="font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => OpenTab()} >{getLocaleString(`send_email`, lang)}</button>
                    ) : null
                }
                {
                    type === 'twitter' || type === 'instagram' || type === 'twitch' || type === 'discord' || type === 'github' || type === 'soundcloud' ? (
                        <button className="flex font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 items-center bg-transparent hover:bg-[#ffffff0f] duration-100 justify-center" onClick={ev => CopyToClipboard()} >
                            <span id='copyUserText' className="flex">{getLocaleString(`copy_user`, lang)}</span>
                        </button>
                    ) : null
                }
                {
                    type === 'gmail' ? (
                        <button className="flex font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 items-center bg-transparent hover:bg-[#ffffff0f] duration-100 justify-center px-6" onClick={ev => CopyToClipboard('email')} >
                            <span id='copyUserText' className="flex">{getLocaleString(`copy_email`, lang)}</span>
                        </button>
                    ) : null
                }
            </>
        )
    } else {
        return null
    }
}

const LinkModalClose: React.FC<ReactComponentWithLangAndBooleanAction> = ({ action, lang }) => {

    return (
        <button className="text-red-500 text-lg tablet:text-xl w-full tablet:w-[24rem] bg-[#00000088] h-12 tablet:h-14 rounded-md border border-red-500 hover:bg-[#000000dd] duration-100" onClick={ev => action(false)} >{getLocaleString('close', lang)}</button>
    )
}

const LinkModals = () => {
    const Context = useContext(AppContext)

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
            <div id="LinkButtonSelected" className="fixed font-normal h-screen px-4 w-full duration-200 justify-center items-center" style={{ top: '100%' }}>
                <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-3 border-main-white/50 items-center">
                    <LinkModalIcons type={Context.linkSelection} />
                    <LinkModalDesc type={Context.linkSelection} lang={Context.lang} />
                    <div className="bg-[#333] w-full h-[1px]" />
                    <LinkModalOptions type={Context.linkSelection} lang={Context.lang} />
                </div>
                <LinkModalClose action={Context.setLinkSelected} lang={Context.lang} />
            </div>
        </LinkModalBG>
    )
}

export default LinkModals