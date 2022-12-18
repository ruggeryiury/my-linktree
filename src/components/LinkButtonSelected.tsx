import { useContext, useEffect } from "react"
import { LinksDictDocument } from "../@types/globals"
import { AppContext } from "../app/AppProvider"
import getLocaleString from "../utils/getLocaleString"
import SocialNetworkIcons from "./SocialNetworkIcons"
const LinksDict: LinksDictDocument = require('../locale/links.json')

const LinkButtonSelected = () => {
    const Context = useContext(AppContext)

    const DeactivateLinkSelection = () => {
        Context.setIsSelected(false)
    }

    const OpenTab = () => {
        if (!Context.isSelected) { } else {
            window.open(LinksDict[Context.selectionType as keyof LinksDictDocument].link as string, "_blank")
        }
    }

    useEffect(() => {
        const LinkButtonSelectedBG = document.getElementById("LinkButtonSelectedBG") as HTMLDivElement
        const LinkButtonSelected = document.getElementById("LinkButtonSelected") as HTMLDivElement

        if (Context.isSelected) {
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
    }, [Context.isSelected])
    return (
        <div
            id="LinkButtonSelectedBG"
            className="flex-col fixed z-10 w-full h-screen backdrop-blur-[2px] text-main-white duration-[400ms]"
            style={{
                display: 'none',
                backgroundColor: 'rgba(0,0,0,0)',
                opacity: '0%'
            }}
        >
            <div
                id="LinkButtonSelected"
                className="flex flex-col fixed items-center mt-auto font-normal pb-6 px-4 w-full h-screen duration-200"
                style={{
                    top: '100%'
                }}
            >
                <div className="flex flex-col w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-4 border-main-white/50 mt-auto items-center">
                    <SocialNetworkIcons type={Context.selectionType} />
                    {
                        Context.selectionType && LinksDict[Context.selectionType as keyof LinksDictDocument] ? (
                            <h1 className="w-full px-8 font-normal text-sm text-main-white/75 mb-4">{getLocaleString(`${Context.selectionType}_desc`, Context.lang)}</h1>
                        ) : null
                    }
                    <div className="bg-[#333] w-full h-[1px]" />
                    {
                        Context.selectionType != 'ngl' && LinksDict[Context.selectionType as keyof LinksDictDocument].link ? (
                            <button
                                className="font-light text-lg w-full py-3"
                                onClick={ev => OpenTab()}
                            >{getLocaleString(`access_link`, Context.lang)}</button>
                        ) : null
                    }
                    {
                        Context.selectionType === 'ngl' && LinksDict[Context.selectionType as keyof LinksDictDocument].link ? (
                            <button className="font-light text-lg w-full py-3" onClick={ev => OpenTab()}>{getLocaleString(`ngl_link`, Context.lang)}</button>
                        ) : null
                    }
                    {
                        Context.selectionType && LinksDict[Context.selectionType as keyof LinksDictDocument].user ? (
                            <button className="font-light text-lg w-full py-3">{getLocaleString(`copy_user`, Context.lang)}</button>
                        ) : null
                    }
                </div>
                <button
                    className="text-red-500 text-lg w-full tablet:w-[24rem] bg-[#00000088] py-2 rounded-md border border-red-500"
                    onClick={ev => DeactivateLinkSelection()}
                >{getLocaleString('close_btn', Context.lang)}</button>
            </div>
        </div>
    )
}

export default LinkButtonSelected