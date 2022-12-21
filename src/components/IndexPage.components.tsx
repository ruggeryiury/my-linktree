import ProfileImageFile from '../assets/images/profileimage.webp'
import getLocaleString from '../utils/getLocaleString'
import LinkButton from './LinkButton'

interface ReactComponentWithLang {
    lang: string
}

export const ProfileImage: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className='justify-center items-center bg-gradient-to-br from-[#f28e26] to-[#68d8d6] w-[8.2rem] h-[8.2rem] tablet:w-[10.2rem] tablet:h-[10.2rem] rounded-full mt-6 mb-4'>
            <div className='justify-center items-center bg-main-white w-[7.8rem] h-[7.8rem] tablet:w-[9.8rem] tablet:h-[9.8rem] rounded-full'>
                <img src={ProfileImageFile} alt={getLocaleString('profileimage_alt', lang)} className='w-[7.5rem] tablet:w-[9rem] rounded-full' />
            </div>
        </div>
    )
}

export const WelcomeText: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="bg-gradient-to-br from-[#f28e26] to-[#fd644f] rounded-md px-4 py-2 mb-2">
            <h1 className="">{getLocaleString('welcome_text', lang)}</h1>
        </div>
    )
}

export const IndexDesc: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <p className="font-normal text-sm mb-6 text-main-black">{getLocaleString('index_desc', lang)}</p>
    )
}

export const MySocialNetworks: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_socialnetworks', lang, true)}</h1>
            <LinkButton type="facebook" />
            <LinkButton type="twitter" />
            <LinkButton type="instagram" />
            <LinkButton type="twitch" />
            <LinkButton type="discord" />
        </div>
    )
}

export const MyProfessionalNetworks: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_profnetworks', lang, true)}</h1>
            <LinkButton type="linkedin" />
            <LinkButton type="github" />
        </div>
    )
}

export const MyMusics: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_music', lang, true)}</h1>
            <LinkButton type="soundcloud" />
        </div>
    )
}

export const MyOther: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_other', lang, true)}</h1>
            <LinkButton type="gmail" />
            {/* <LinkButton type="ngl" /> */}
        </div>
    )
}