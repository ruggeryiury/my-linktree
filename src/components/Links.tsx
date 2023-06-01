import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { ImSoundcloud2, ImTwitch } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../store/config/hooks'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import session from '../store/session.slice'

const Links = () => {
    const { t } = useTranslation()
    const type = useAppSelector(state => state.session.linksModalType)
    const isAnyLinkActivated = useAppSelector(state => state.session.isAnyLinkActivated)
    const Dispatch = useAppDispatch()

    const LinksModalBG = useRef<HTMLDivElement>(null)
    const LinksModalSelected = useRef<HTMLDivElement>(null)
    const copyUserText = useRef<HTMLSpanElement>(null)

    const CopyToClipboard = (copyText: 'default' | 'email' = 'default') => {
        navigator.clipboard.writeText(t(`${type}_username`))
            .then(() => {
                copyUserText.current!.classList.add('animate-copytext')
                setTimeout(() => {
                    copyUserText.current!.style.fontSize = "0.8rem"
                    copyUserText.current!.style.color = 'rgba(238, 238, 238, 0.8)'
                    if (copyText === 'default') {
                        copyUserText.current!.innerHTML = t('copy_successfully').toUpperCase()
                    } else if (copyText === 'email') {
                        copyUserText.current!.innerHTML = t('copy_email_successfully').toUpperCase()
                    }
                }, 100)
                setTimeout(() => {
                    copyUserText.current!.classList.remove('animate-copytext')
                }, 200)
                setTimeout(() => {
                    copyUserText.current!.classList.add('animate-copytext')
                }, 800)
                setTimeout(() => {
                    copyUserText.current!.style.fontSize = "1.125rem"
                    copyUserText.current!.style.color = 'rgba(238, 238, 238)'
                    if (copyText === 'default') {
                        copyUserText.current!.innerHTML = t(`copy_user`)
                    } else if (copyText === 'email') {
                        copyUserText.current!.innerHTML = t(`copy_email`)
                    }
                }, 900)
                setTimeout(() => {
                    copyUserText.current!.classList.remove('animate-copytext')
                }, 1000)
            })
            .catch((reason) => {
                console.log(reason)
            })
    }

    useEffect(() => {
        if (isAnyLinkActivated) {
            document.body.style.overflowY = "hidden"
            LinksModalBG.current!.style.display = 'flex'
            setTimeout(() => {
                LinksModalBG.current!.style.opacity = '1'
                LinksModalBG.current!.style.backgroundColor = 'rgba(0,0,0,0.9)'
                LinksModalSelected.current!.style.top = '0'
            }, 50)
        } else {
            document.body.style.overflowY = "auto"
            LinksModalBG.current!.style.opacity = '0'
            LinksModalSelected.current!.style.top = '100%'
            setTimeout(() => {
                LinksModalBG.current!.style.display = 'none'
            }, 200)
        }
    }, [isAnyLinkActivated])
    return (
        <div
            ref={LinksModalBG}
            className="fixed z-10 w-full h-screen text-main-white backdrop-blur-[2px] duration-200 items-center"
            style={{
                display: 'none',
                backgroundColor: 'rgba(0,0,0,0)',
                opacity: '0%'
            }}>
            <div
                ref={LinksModalSelected}
                className="fixed font-normal h-screen px-4 w-full duration-200 justify-center items-center"
                style={{
                    top: '100%'
                }}>
                <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-3 border-main-white/50 items-center">
                    {type === 'facebook' ? <FaFacebookSquare className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'twitter' ? <FaTwitterSquare className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'instagram' ? <FaInstagram className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'twitch' ? <ImTwitch className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'discord' ? <BsDiscord className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'linkedin' ? <FaLinkedin className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'github' ? <FaGithub className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'soundcloud' ? <ImSoundcloud2 className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'gmail' ? <SiGmail className='text-2xl laptop:text-4xl' /> : null}
                    {type === 'ngl' ? <RiQuestionnaireFill className='text-2xl laptop:text-4xl' /> : null}
                    <h1 className="w-full px-8 font-normal text-sm tablet:text-base text-main-white/75 mb-4 mt-2">{t(`${type}_desc`)}</h1>
                    <div className="bg-[#333] w-full h-[1px]" />
                    {
                        type === 'facebook' || type === 'twitter' || type === 'instagram' || type === 'twitch' || type === 'linkedin' || type === 'github' || type === 'soundcloud' ? (
                            <button className="font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => window.open(t(`${type}_link`)!, '_blank')} >{t('access_link')}</button>
                        ) : null
                    }
                    {
                        type === 'ngl' ? (
                            <button className="font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => window.open(t(`${type}_link`)!, '_blank')} >{t('ask_me')}</button>
                        ) : null
                    }
                    {
                        type === 'gmail' ? (
                            <button className="font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100" onClick={ev => window.open(t(`${type}_link`)!, '_blank')} >{t('send_email')}</button>
                        ) : null
                    }
                    {
                        type === 'twitter' || type === 'instagram' || type === 'twitch' || type === 'discord' || type === 'github' || type === 'soundcloud' ? (
                            <button className="flex font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 items-center bg-transparent hover:bg-[#ffffff0f] duration-100 justify-center" onClick={ev => CopyToClipboard()} >
                                <span ref={copyUserText} className="flex">{t('copy_user')}</span>
                            </button>
                        ) : null
                    }
                    {
                        type === 'gmail' ? (
                            <button className="flex font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 items-center bg-transparent hover:bg-[#ffffff0f] duration-100 justify-center px-6" onClick={ev => CopyToClipboard('email')} >
                                <span ref={copyUserText} className="flex">{t('copy_email')}</span>
                            </button>
                        ) : null
                    }
                </div>

                <button className="text-red-500 text-lg tablet:text-xl w-full tablet:w-[24rem] bg-[#00000088] h-12 tablet:h-14 rounded-md border border-red-500 hover:bg-[#000000dd] duration-100" onClick={ev => Dispatch(session.actions.update({ isAnyLinkActivated: false }))} >{t('close')}</button>
            </div>
        </div>
    )
}

export default Links