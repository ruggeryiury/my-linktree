import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaLinkedin, FaDonate } from 'react-icons/fa'
import { SlArrowRight } from 'react-icons/sl'
import { ImTwitch, ImSoundcloud2 } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { useContext } from 'react'
import { AppContext } from '../app/AppProvider'
import getLocaleString from '../utils/getLocaleString'

const LinkButtonLayout: React.FC<React.PropsWithChildren<{ type: string }>> = ({ children, type }) => {
    const Context = useContext(AppContext)

    const ActivateLinkSelection = (type: string) => {
        Context.setIsSelected(true)
        Context.setSelectionType(type)
    }

    return (
        <button className='flex w-full tablet:w-[24rem] items-center bg-gradient-to-br from-[#f28e26] to-[#fd644f] rounded-md px-3 py-2 mb-2 text-main-white hover:scale-[101%] duration-200 text-start' onClick={ev => ActivateLinkSelection(type)}>
            {children}
        </button>
    )
}
const LinkButton: React.FC<{ type: string }> = ({ type }) => {
    const Context = useContext(AppContext)

    return (
        <LinkButtonLayout type={type}>
            {
                type === 'facebook' ? (
                    <>
                        <FaFacebookSquare className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">Facebook</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">Ruggery Iury Corrêa</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'twitter' ? (
                    <>
                        <FaTwitterSquare className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">Twitter</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">@therogerland</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'instagram' ? (
                    <>
                        <FaInstagram className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">Instagram</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">@ruggeryiury</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'twitch' ? (
                    <>
                        <ImTwitch className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">Twitch</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">@therogerland</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'discord' ? (
                    <>
                        <BsDiscord className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">Discord</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">Roger@2981</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'linkedin' ? (
                    <>
                        <FaLinkedin className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">LinkedIn</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">Ruggery Iury Corrêa</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'github' ? (
                    <>
                        <FaGithub className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">GitHub</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">@ruggeryiury</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'soundcloud' ? (
                    <>
                        <ImSoundcloud2 className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">SoundCloud</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal text-[0.55rem] mr-1">@ruggeryiury</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'ngl' ? (
                    <>
                        <RiQuestionnaireFill className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">{getLocaleString('askmeanon', Context.lang)}</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal flex-nowrap text-[0.55rem] mr-1">{`${getLocaleString('poweredby', Context.lang)} NGL`}</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
            {
                type === 'donate' ? (
                    <>
                        <FaDonate className='text-2xl fill-main-white mr-2' />
                        <h1 className="font-bold text-base">{getLocaleString('askmeanon', Context.lang)}</h1>
                        <div className="ml-auto flex flex-row items-center">
                            <h2 className="font-normal flex-nowrap text-[0.55rem] mr-1">{`${getLocaleString('poweredby', Context.lang)} NGL`}</h2>
                            <SlArrowRight className='text-sm fill-main-white' />
                        </div>
                    </>
                ) : null
            }
        </LinkButtonLayout>
    )
}

export default LinkButton