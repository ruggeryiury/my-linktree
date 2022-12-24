import { useContext, useState } from "react"
import { AppContext } from "../app/AppProvider"
import ProfileImageFile from '../assets/images/profileimage.webp'
import getLocaleString from '../utils/getLocaleString'
import { IoIosSettings } from 'react-icons/io'
import ConfigModal from "./ConfigModal"

const IndexHeader = () => {
    const Context = useContext(AppContext)
    const [isConfigActivated, setConfigActivated] = useState(false)

    return (
        <>
            <ConfigModal />
            <header className="flex-row py-3 w-full tablet:w-[50%] backdrop-blur-[4px] fixed duration-[350ms] bg-gradient-to-br from-[#1bd05a]/90 to-[#27b0ad]/90 px-4 items-center border-b border-main-white/20" style={Context.AppearHeader ? { top: '0%' } : { top: '-100%' }}>
                <img src={ProfileImageFile} alt={getLocaleString('profileimage_alt', Context.lang)} className='rounded-full mr-2 w-[1.5rem]' />
                <h1 className="font-bold text-xl">{getLocaleString('header_title', Context.lang, true)}</h1>
                {/* <div className="ml-auto">
                    <button>
                        <IoIosSettings className="text-3xl bg-main-white text-main-black p-1 rounded-md border border-main-black/25" title={getLocaleString('settings_title', Context.lang)} />
                    </button>
                </div> */}
            </header>
        </>
    )
}

export default IndexHeader