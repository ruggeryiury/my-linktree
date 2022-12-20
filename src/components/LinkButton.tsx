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

const LinkButtonLayout: React.FC<React.PropsWithChildren<{ type: string }>> = ({ children, type }) => {
    const Context = useContext(AppContext)

    const ActivateLinkSelection = (type: string) => {
        Context.setLinkSelected(true)
        Context.setLinkSelection(type)
    }

    return (
        <button className='flex w-full tablet:w-[24rem] items-center bg-gradient-to-br from-[#f28e26] to-[#fd644f] rounded-md px-3 py-2 mb-2 hover:scale-[101%] duration-200 text-start' onClick={ev => ActivateLinkSelection(type)}>
            {children}
        </button>
    )
}

const LinkButton: React.FC<{ type: string }> = ({ type }) => {
    const Context = useContext(AppContext)

    return (
        <LinkButtonLayout type={type}>
            {type === 'facebook' ? <FaFacebookSquare className='text-2xl mr-2' /> : null}
            {type === 'twitter' ? <FaTwitterSquare className='text-2xl mr-2' /> : null}
            {type === 'instagram' ? <FaInstagram className='text-2xl mr-2' /> : null}
            {type === 'twitch' ? <ImTwitch className='text-2xl mr-2' /> : null}
            {type === 'discord' ? <BsDiscord className='text-2xl mr-2' /> : null}
            {type === 'linkedin' ? <FaLinkedin className='text-2xl mr-2' /> : null}
            {type === 'github' ? <FaGithub className='text-2xl mr-2' /> : null}
            {type === 'soundcloud' ? <ImSoundcloud2 className='text-2xl mr-2' /> : null}
            {type === 'gmail' ? <SiGmail className='text-2xl mr-2' /> : null}
            {type === 'ngl' ? <RiQuestionnaireFill className='text-2xl mr-2' /> : null}
            <h1 className="font-bold text-base">
                {type === 'ngl' ? getLocaleString('ask_me', Context.lang) : getSocialNetworks(type, 'name')}
            </h1>
            <div className="ml-auto flex flex-row items-center">
                <h2 className="font-normal text-[0.55rem] mr-1">
                    {type === 'ngl' ? getLocaleString('ask_me_desc', Context.lang) : getSocialNetworks(type, 'user')}
                </h2>
                <SlArrowRight className='text-sm' />
            </div>
        </LinkButtonLayout>
    )
}

export default LinkButton