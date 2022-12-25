import { useContext, useState } from "react"
import { AppContext } from "../app/AppProvider"
import ProfileImageFile from '../assets/images/profileimage.webp'
import getLocaleString from '../utils/getLocaleString'
import { IoIosSettings } from 'react-icons/io'
import ConfigModal from "./ConfigModal"

const IndexHeader = () => {
    const Context = useContext(AppContext)

    const OpenConfigScreen = () => {
        Context.setConfigScreen('init')
        Context.setConfigActivated(true)
    }

    return (
        <>
            <ConfigModal />
            <header className="flex-row py-3 w-full laptop:w-[60rem] backdrop-blur-[2px] fixed duration-[350ms] bg-gradient-to-br from-[#1bd05a]/80 to-[#27b0ad]/80 px-4 items-center border-b border-main-white/20 rounded-none laptop:rounded-br-md laptop:rounded-bl-md" style={Context.AppearHeader ? { top: '0%' } : { top: '-100%' }}>
                <img src={ProfileImageFile} alt={getLocaleString('profileimage_alt', Context.lang)} className='rounded-full mr-2 w-[1.5rem]' />
                <h1 className="font-bold text-xl">{getLocaleString('header_title', Context.lang, true)}</h1>
                <div className="ml-auto">
                    <button onClick={ev => OpenConfigScreen()}>
                        <IoIosSettings className="text-3xl bg-main-white text-main-black p-1 rounded-md border border-main-black/25" title={getLocaleString('settings_title', Context.lang)} />
                    </button>
                </div>
            </header>
        </>
    )
}

export default IndexHeader