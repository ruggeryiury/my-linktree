import { useContext, useEffect, useState } from "react"
import { AppContext } from "../app/AppProvider"
import { IoIosSettings } from 'react-icons/io'
import { SlArrowRight } from 'react-icons/sl'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'
import getLocaleString from "../utils/getLocaleString"

const InitModal = () => {
    const Context = useContext(AppContext)

    const OpenLangScreen = () => {
        Context.setConfigScreen('lang')
    }
    const CloseConfigScreen = () => {
        Context.setConfigScreen('')
        Context.setConfigActivated(false)
    }

    return (
        <div id="ConfigSelection" className="fixed font-normal h-screen px-4 w-full duration-200 justify-center items-center" style={{ left: '0' }}>
            <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-3 border-main-white/50 items-center">
                <IoIosSettings className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
                <h1 className="w-full px-8 font-normal text-sm tablet:text-base text-main-white/75 mb-4">{getLocaleString('settings_title', Context.lang)}</h1>
                <div className="bg-[#333] w-full h-[1px]" />
                <button className="flex items-center px-4 tablet:px-6 text-start font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => OpenLangScreen()}>
                    <h1>{getLocaleString(`language_setting`, Context.lang)}</h1>
                    <div className="ml-auto flex-row items-center">
                        <h2 className="font-normal py-1 text-sm laptop:text-md mr-1 bg-gradient-to-br from-[#1bd05a] to-[#27b0ad] text-transparent bg-clip-text"> {getLocaleString(`${Context.lang}_lang`, Context.lang)} </h2>
                        <SlArrowRight className='text-sm tablet:text-base laptop:text-lg' />
                    </div>
                </button>
            </div>
            <button className="text-red-500 text-lg tablet:text-xl w-full tablet:w-[24rem] bg-[#00000088] h-12 tablet:h-14 rounded-md border border-red-500 hover:bg-[#000000dd] duration-100" onClick={ev => CloseConfigScreen()} >{getLocaleString('close', Context.lang)}</button>
        </div>
    )
}

const ChangeLangModal = () => {
    const Context = useContext(AppContext)

    const CloseLangScreen = () => {
        Context.setConfigScreen('init')
    }

    return (
        <div id="LangSelection" className="fixed font-normal h-screen px-4 w-full duration-200 justify-center items-center" style={{ left: '100%' }}>
            <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-3 border-main-white/50 items-center">
                <IoIosSettings className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
                <h1 className="w-full px-8 font-normal text-sm tablet:text-base text-main-white/75 mb-4">{`${getLocaleString('settings_title', Context.lang)}/${getLocaleString('language_setting', Context.lang)}`}</h1>
                <div className="bg-[#333] w-full h-[1px]" />
                <button className="flex items-center px-4 tablet:px-6 text-start font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => Context.setLang('EN')}>
                    {
                        Context.lang === 'EN' ? <BiCheckboxChecked className="mr-2" /> : <BiCheckbox className="mr-2" />
                    }
                    {getLocaleString('EN_lang', Context.lang)}
                </button>
                <button className="flex items-center px-4 tablet:px-6 text-start font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => Context.setLang('PT')}>
                    {
                        Context.lang === 'PT' ? <BiCheckboxChecked className="mr-2" /> : <BiCheckbox className="mr-2" />
                    }
                    {getLocaleString('PT_lang', Context.lang)}
                </button>
                <button className="flex items-center px-4 tablet:px-6 text-start font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => Context.setLang('ES')}>
                    {
                        Context.lang === 'ES' ? <BiCheckboxChecked className="mr-2" /> : <BiCheckbox className="mr-2" />
                    }
                    {getLocaleString('ES_lang', Context.lang)}
                </button>
            </div>
            <button className="text-red-500 text-lg tablet:text-xl w-full tablet:w-[24rem] bg-[#00000088] h-12 tablet:h-14 rounded-md border border-red-500 hover:bg-[#000000dd] duration-100" onClick={ev => CloseLangScreen()} >{getLocaleString('back', Context.lang)}</button>
        </div>
    )
}


const ConfigModal = () => {
    const Context = useContext(AppContext)

    const ManipulateConfigModals = () => {
        const ConfigBG = document.getElementById("ConfigBG") as HTMLDivElement
        const ConfigSelection = document.getElementById("ConfigSelection") as HTMLDivElement

        if (Context.isConfigActivated) {
            document.body.style.overflowY = "hidden"
            ConfigBG.style.display = 'flex'
            setTimeout(() => {
                ConfigBG.style.opacity = '1'
                ConfigBG.style.backgroundColor = 'rgba(0,0,0,0.9)'
                ConfigSelection.style.top = '0'
            }, 50)
        } else {
            document.body.style.overflowY = "auto"
            ConfigBG.style.opacity = '0'
            ConfigSelection.style.top = '100%'
            setTimeout(() => {
                ConfigBG.style.display = 'none'
            }, 200)
        }
    }

    const ManipulateInnerConfig = () => {
        const ConfigSelection = document.getElementById("ConfigSelection") as HTMLDivElement
        const LangSelection = document.getElementById("LangSelection") as HTMLDivElement

        if (Context.configScreen === 'init') {
            ConfigSelection.style.left = '0'
            LangSelection.style.left = '100%'
        } else if (Context.configScreen === 'lang') {
            ConfigSelection.style.left = '-100%'
            LangSelection.style.left = '0'
        } else {

        }
    }

    useEffect(() => {
        ManipulateConfigModals()
        console.log('config ac')
    }, [Context.isConfigActivated])

    useEffect(() => {
        ManipulateInnerConfig()
        console.log('inner config')
    }, [Context.configScreen])

    return (
        <div id="ConfigBG" className="fixed z-10 w-full h-screen text-main-white backdrop-blur-[2px] duration-200 items-center" style={{ display: 'none', backgroundColor: 'rgba(0,0,0,0)', opacity: '0%' }}>
            <InitModal />
            <ChangeLangModal />
        </div>
    )
}

export default ConfigModal