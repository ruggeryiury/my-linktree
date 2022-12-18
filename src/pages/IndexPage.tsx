import { useContext } from "react"
import { AppContext } from "../app/AppProvider"
import LinkButton from "../components/LinkButton"
import LinkButtonSelected from "../components/LinkButtonSelected"
import ProfileImage from "../components/ProfileImage"
import getLocaleString from "../utils/getLocaleString"
import { SlArrowRight } from 'react-icons/sl'
import { Link } from "react-router-dom"

const IndexPage = () => {
    const Context = useContext(AppContext)
    return (
        <>
            <LinkButtonSelected />
            <ProfileImage lang={Context.lang} />
            <div className="bg-gradient-to-br from-[#f28e26] to-[#fd644f] rounded-md px-4 py-2 mb-2">
                <h1 className="text-main-white">{getLocaleString('welcome_text', Context.lang)}</h1>
            </div>
            <p className="font-normal text-sm mb-6 text-main-black">{getLocaleString('index_desc', Context.lang)}</p>
            <div className="flex flex-col items-center w-full mb-4">
                <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_socialnetworks', Context.lang, true)}</h1>
                <LinkButton type="facebook" />
                <LinkButton type="twitter" />
                <LinkButton type="instagram" />
                <LinkButton type="twitch" />
                <LinkButton type="discord" />
            </div>
            <div className="flex flex-col items-center w-full mb-4">
                <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_profnetworks', Context.lang, true)}</h1>
                <LinkButton type="linkedin" />
                <LinkButton type="github" />
            </div>
            <div className="flex flex-col items-center w-full mb-4">
                <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_music', Context.lang, true)}</h1>
                <LinkButton type="soundcloud" />
                {/* <Link to='' className='flex w-full tablet:w-[24rem] items-center bg-gradient-to-br from-[#f28e26] to-[#fd644f] rounded-md px-3 py-2 mb-2 text-main-white hover:scale-[101%] duration-200 text-start font-bold text-base'>{getLocaleString('my_musicprojects', Context.lang)}<SlArrowRight className='ml-auto text-sm fill-main-white' /></Link> */}
            </div>
            <div className="flex flex-col items-center w-full mb-4">
                <h1 className="font-bold text-xs text-main-black mb-2">{getLocaleString('my_other', Context.lang, true)}</h1>
                <LinkButton type="ngl" />
                {/* <LinkButton type="donate" /> */}
            </div>
        </>
    )
}

export default IndexPage