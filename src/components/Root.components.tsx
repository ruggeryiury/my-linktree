import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../store/config/hooks'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { ImSoundcloud2, ImTwitch } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { SlArrowRight } from 'react-icons/sl'
import ProfileImageFile from '../assets/images/profileimage.webp'
import session from '../store/session.slice'

export const Presentation = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className='justify-center items-center bg-gradient-to-br from-[#1aaeab] to-[#009575] rounded-full mt-6 mb-4 p-[0.25rem] mobile-lg:p-1 animate-bganimation'>
                <div className='justify-center items-center bg-[#eee] rounded-full p-1 mobile-lg:p-2'>
                    <img src={ProfileImageFile} alt={t('profileimage_alt')!} className='rounded-full w-[5rem] mobile-lg:w-[6rem] tablet:w-[8rem]' />
                </div>
            </div>
            <div className="bg-gradient-to-br from-[#1aaeab] to-[#009575] rounded-md px-4 py-2 mb-2 text-base mobile-md:text-base mobile-lg:text-lg border border-main-black/10">
                <h1>{t('welcome_text')}</h1>
            </div>
            <p className="w-full tablet:w-[24rem] laptop:w-[32rem] mb-6 text-[#111] drop-shadow-md text-xs mobile-md:text-sm mobile-lg:text-base z-0">{t('index_desc')}</p>
        </>
    )
}

export const MyLinks = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="items-center w-full mb-4">
                <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-[#111] drop-shadow-md mb-2">{t('my_socialnetworks').toUpperCase()}</h1>
                <LinkButton type='facebook' disabled />
                <LinkButton type='twitter' />
                <LinkButton type='instagram' />
                <LinkButton type='twitch' />
                <LinkButton type='discord' />
            </div>
            <div className="items-center w-full mb-4">
                <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-[#111] drop-shadow-md mb-2">{t('my_profnetworks').toUpperCase()}</h1>
                <LinkButton type="linkedin" />
                <LinkButton type="github" />
            </div>
            <div className="items-center w-full mb-4">
                <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-[#111] drop-shadow-md mb-2">{t('my_music').toUpperCase()}</h1>
                <LinkButton type="soundcloud" />
            </div>
            <div className="items-center w-full mb-4">
                <h1 className="font-bold text-xs tablet:text-sm laptop:text-base text-[#111] drop-shadow-md mb-2">{t('my_other').toUpperCase()}</h1>
                <LinkButton type="gmail" />
                <LinkButton type="ngl" />
            </div>
        </>
    )
}

interface LinkButtonProps {
    type: LinksModalTypes,
    disabled?: boolean
}

export const LinkButton = ({ type, disabled }: LinkButtonProps) => {
    const { t } = useTranslation()
    const Dispatch = useAppDispatch()

    return (
        <>
            {!disabled ? (
                <button
                    className='flex w-full tablet:w-[24rem] laptop:w-[32rem] items-center bg-gradient-to-br from-[#1aaeab] to-[#009575] rounded-md px-3 py-2 mb-2 hover:scale-[101%] duration-200 text-start border border-main-black/10'
                    onClick={ev => {
                        Dispatch(session.actions.update({ isAnyLinkActivated: true, linksModalType: type }))
                    }}>
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
                    <h1 className="font-medium text-base tablet:text-lg laptop:text-xl">{t(type)}</h1>
                    <div className="ml-auto flex flex-row items-center">
                        <h2 className="text-[0.55rem] mobile-lg:text-xs laptop:text-sm mr-1">
                            {t(`${type}_username`)}
                        </h2>
                        <SlArrowRight className='text-sm tablet:text-base laptop:text-lg' />
                    </div>
                </button>
            ) : null}
        </>
    )
}