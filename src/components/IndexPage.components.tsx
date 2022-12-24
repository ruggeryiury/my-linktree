import { ReactComponentWithLang } from '../@types/components'
import ProfileImageFile from '../assets/images/profileimage.webp'
import getLocaleString from '../utils/getLocaleString'
import LinkButton from './LinkButton'

export const ProfileImage: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className='justify-center items-center bg-gradient-to-br from-[#1bd05a]/90 to-[#27b0ad]/90 rounded-full mt-6 mb-4 p-[0.25rem] mobile-lg:p-1'>
            <div className='justify-center items-center bg-main-white rounded-full p-1 mobile-lg:p-2'>
                <img src={ProfileImageFile} alt={getLocaleString('profileimage_alt', lang)} className='rounded-full w-[8rem] mobile-lg:w-[10rem] tablet:w-[14rem]' />
            </div>
        </div>
    )
}

export const WelcomeText: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="bg-gradient-to-br from-[#1bd05a]/90 to-[#27b0ad]/90 rounded-md px-4 py-2 mb-2 text-base mobile-md:text-lg mobile-lg:text-xl border border-main-black/10">
            <h1>{getLocaleString('welcome_text', lang)}</h1>
        </div>
    )
}

export const IndexDesc: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <p className="w-full tablet:w-[24rem] laptop:w-[32rem] font-normal mb-6 text-main-black text-sm mobile-md:text-base mobile-lg:text-lg">{getLocaleString('index_desc', lang)}</p>
    )
}

export const MySocialNetworks: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-main-black mb-2">{getLocaleString('my_socialnetworks', lang, true)}</h1>
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
            <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-main-black mb-2">{getLocaleString('my_profnetworks', lang, true)}</h1>
            <LinkButton type="linkedin" />
            <LinkButton type="github" />
        </div>
    )
}

export const MyMusics: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-main-black mb-2">{getLocaleString('my_music', lang, true)}</h1>
            <LinkButton type="soundcloud" />
        </div>
    )
}

export const MyOther: React.FC<ReactComponentWithLang> = ({ lang }) => {
    return (
        <div className="items-center w-full mb-4">
            <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-main-black mb-2">{getLocaleString('my_other', lang, true)}</h1>
            <LinkButton type="gmail" />
            {/* <LinkButton type="ngl" /> */}
        </div>
    )
}