import { useContext } from "react"
import { AppContext } from "../app/AppProvider"
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaLinkedin, FaDonate } from 'react-icons/fa'
import { SlArrowRight } from 'react-icons/sl'
import { SiGmail } from 'react-icons/si'
import { ImTwitch, ImSoundcloud2 } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'
import { RiQuestionnaireFill } from 'react-icons/ri'
import getSocialNetworks from "../utils/getSocialNetworks"
import getLocaleString from "../utils/getLocaleString"
import { ReactComponentWithType } from "../@types/components"

const LinkButtonLayout: React.FC<React.PropsWithChildren<ReactComponentWithType>> = ({ children, type }) => {
    const Context = useContext(AppContext)

    const ActivateLinkSelection = (type: string) => {
        Context.setLinkSelected(true)
        Context.setLinkSelection(type)
    }

    return (
        <button className='flex w-full tablet:w-[24rem] laptop:w-[32rem] items-center bg-gradient-to-br from-[#1bd05a]/90 to-[#27b0ad]/90 rounded-md px-3 py-2 mb-2 hover:scale-[101%] duration-200 text-start border border-main-black/10' onClick={ev => ActivateLinkSelection(type)}>
            {children}
        </button>
    )
}

const LinkButton: React.FC<ReactComponentWithType> = ({ type }) => {
    const Context = useContext(AppContext)

    return (
        <LinkButtonLayout type={type}>
            {type === 'facebook' ? <FaFacebookSquare className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'twitter' ? <FaTwitterSquare className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'instagram' ? <FaInstagram className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'twitch' ? <ImTwitch className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'discord' ? <BsDiscord className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'linkedin' ? <FaLinkedin className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'github' ? <FaGithub className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'soundcloud' ? <ImSoundcloud2 className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'gmail' ? <SiGmail className='text-2xl laptop:text-4xl mr-2' /> : null}
            {type === 'ngl' ? <RiQuestionnaireFill className='text-2xl laptop:text-4xl mr-2' /> : null}
            <h1 className="font-bold text-base tablet:text-lg laptop:text-xl">
                {type === 'ngl' ? getLocaleString('ask_me', Context.lang) : getSocialNetworks(type, 'name')}
            </h1>
            <div className="ml-auto flex flex-row items-center">
                <h2 className="font-normal text-[0.55rem] mobile-lg:text-xs laptop:text-sm mr-1">
                    {type === 'ngl' ? getLocaleString('ask_me_desc', Context.lang) : getSocialNetworks(type, 'user')}
                </h2>
                <SlArrowRight className='text-sm tablet:text-base laptop:text-lg' />
            </div>
        </LinkButtonLayout>
    )
}

export default LinkButton