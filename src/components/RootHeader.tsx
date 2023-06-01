import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Settings from './Settings'
import { BiArrowToTop } from 'react-icons/bi'
import { IoIosSettings } from 'react-icons/io'
import ProfileImageFile from '../assets/images/profileimage.webp'
import { useAppDispatch } from '../store/config/hooks'
import session from '../store/session.slice'

const RootHeader = () => {
    const { t } = useTranslation()
    const Dispatch = useAppDispatch()

    const [shouldHeaderAppear, setHeaderAppearance] = useState(false)

    const activateHeader = (scrollY: number) => {
        scrollY > 60 ? setHeaderAppearance(true) : setHeaderAppearance(false)
    }

    const headerClasses = clsx("flex-row py-3 w-full laptop:w-[60rem] backdrop-blur-[2px] fixed duration-[350ms] bg-gradient-to-br from-[#1aaeab]/80 to-[#009575]/80 px-4 items-center border-b border-main-white/20 rounded-none laptop:rounded-br-md laptop:rounded-bl-md z-10", shouldHeaderAppear ? "top-0" : "-top-full")

    useEffect(() => {
        window.addEventListener('scroll', ev => activateHeader((ev.currentTarget as Window).scrollY))
        return window.removeEventListener('scroll', ev => activateHeader((ev.currentTarget as Window).scrollY))
    }, [])

    return (
        <>
            <Settings />
            <header className={headerClasses}>
                <img src={ProfileImageFile} alt={t('profileimage_alt')!} className='rounded-full mr-2 w-[1.5rem]' />
                <h1 className="font-bold text-xl">{t('header_title').toUpperCase()}</h1>
                <div className="ml-auto flex-row">
                    <button onClick={ev => window.scrollTo({ top: 0, behavior: 'smooth' })} title={t('scrolltotop_title')!} className='mr-2'>
                        <BiArrowToTop className="text-3xl bg-main-white text-main-black p-1 rounded-md border border-main-black/25" />
                    </button>
                    <button onClick={ev => Dispatch(session.actions.update({ isSettingsActivated: true, settingsModalState: 'init' }))} title={t('settings_title')!}>
                        <IoIosSettings className="text-3xl bg-main-white text-main-black p-1 rounded-md border border-main-black/25" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default RootHeader