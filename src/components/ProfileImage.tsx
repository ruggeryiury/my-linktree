import ProfileImageFile from '../assets/images/profileimage.webp'
import getLocaleString from '../utils/getLocaleString'

const ProfileImage: React.FC<{ lang: string }> = ({ lang }) => {
    return (
        <div className='flex justify-center items-center bg-gradient-to-br from-[#f28e26] to-[#68d8d6] w-[8.2rem] h-[8.2rem] rounded-full mt-6 mb-4'>
            <div className='flex justify-center items-center bg-main-white w-[7.8rem] h-[7.8rem] rounded-full'>
                <img src={ProfileImageFile} alt={getLocaleString('profileimage_alt', lang)} className='w-[7.5rem] rounded-full' />
            </div>
        </div>
    )
}

export default ProfileImage