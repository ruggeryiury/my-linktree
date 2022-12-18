import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaLinkedin, FaDonate } from 'react-icons/fa'
import { ImTwitch, ImSoundcloud2 } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'
import { RiQuestionnaireFill } from 'react-icons/ri'

const SocialNetworkIcons: React.FC<{ type: string | false }> = ({ type }) => {
    if (type === 'facebook') {
        return <FaFacebookSquare className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'twitter') {
        return <FaTwitterSquare className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'instagram') {
        return <FaInstagram className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'twitch') {
        return <ImTwitch className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'discord') {
        return <BsDiscord className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'linkedin') {
        return <FaLinkedin className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'github') {
        return <FaGithub className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'soundcloud') {
        return <ImSoundcloud2 className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else if (type === 'ngl') {
        return <RiQuestionnaireFill className={`w-[1.8rem] h-[1.8rem] fill-main-white mb-2`} />
    } else {
        return null
    }
}

export default SocialNetworkIcons