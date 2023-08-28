import { useEffect, useRef } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { IoIosSettings, IoIosCheckboxOutline, IoIosSquareOutline } from 'react-icons/io'
import { SlArrowRight } from 'react-icons/sl'
import { useAppDispatch, useAppSelector } from '../store/config/hooks'
import session from '../store/session.slice'

const Settings = () => {
  const { t } = useTranslation()
  const Context = useAppSelector((state) => state.session)
  const Dispatch = useAppDispatch()

  const ConfigBGDiv = useRef<HTMLDivElement>(null)
  const InitSelection = useRef<HTMLDivElement>(null)
  const LangSelection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (Context.isSettingsActivated) {
      document.body.style.overflowY = 'hidden'
      ConfigBGDiv.current!.style.display = 'flex'
      setTimeout(() => {
        ConfigBGDiv.current!.style.opacity = '1'
        ConfigBGDiv.current!.style.backgroundColor = 'rgba(0,0,0,0.9)'
        InitSelection.current!.style.top = '0'
      }, 50)
    } else {
      document.body.style.overflowY = 'auto'
      ConfigBGDiv.current!.style.opacity = '0'
      InitSelection.current!.style.top = '100%'
      setTimeout(() => {
        ConfigBGDiv.current!.style.display = 'none'
      }, 200)
    }
  }, [Context.isSettingsActivated])

  useEffect(() => {
    if (Context.settingsModalState === 'init') {
      InitSelection.current!.style.left = '0'
      LangSelection.current!.style.left = '100%'
    } else if (Context.settingsModalState === 'lang') {
      InitSelection.current!.style.left = '-100%'
      LangSelection.current!.style.left = '0'
    }
  }, [Context.settingsModalState])

  return (
    <div
      ref={ConfigBGDiv}
      className="fixed z-20 w-full h-screen text-[#EEE] backdrop-blur-[2px] duration-200 items-center"
      style={{
        display: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        opacity: '0%',
      }}
    >
      {/* Init Selection */}
      <div
        ref={InitSelection}
        className="fixed font-normal h-screen px-4 w-full duration-200 justify-center items-center"
        style={{
          left: '0',
        }}
      >
        <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-3 border-main-white/50 items-center">
          <IoIosSettings className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
          <h1 className="w-full px-8 font-normal text-sm tablet:text-base text-main-white/75 mb-4">{t('settings_title')}</h1>
          <div className="bg-[#333] w-full h-[1px]" />
          <button
            className="flex items-center px-4 tablet:px-6 text-start font-light text-lg tablet:text-xl w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100"
            onClick={(ev) =>
              Dispatch(
                session.actions.update({
                  settingsModalState: 'lang',
                })
              )
            }
          >
            <h1>{t(`language_setting`)}</h1>
            <div className="ml-auto flex-row items-center">
              <h2 className="font-medium py-1 text-sm laptop:text-md mr-1 bg-gradient-to-br from-[#1aaeab] to-[#009575] text-transparent bg-clip-text">{t(i18n.language.includes('-') ? i18n.language.slice(0, 2) : i18n.language)}</h2>
              <SlArrowRight className="text-sm tablet:text-base laptop:text-lg" />
            </div>
          </button>
        </div>
        <button
          className="text-red-500 text-lg tablet:text-xl w-full tablet:w-[24rem] bg-[#00000088] h-12 tablet:h-14 rounded-md border border-red-500 hover:bg-[#000000dd] duration-100"
          onClick={(ev) =>
            Dispatch(
              session.actions.update({
                isSettingsActivated: false,
                settingsModalState: 'closed',
              })
            )
          }
        >
          {t('close')}
        </button>
      </div>

      {/* Language Selection */}
      <div
        ref={LangSelection}
        className="fixed font-normal h-screen px-4 w-full duration-200 justify-center items-center"
        style={{
          left: '100%',
        }}
      >
        <div className="w-full tablet:w-[24rem] mb-2 border bg-[#00000088] rounded-md pt-3 border-main-white/50 items-center">
          <IoIosSettings className={`w-[1.8rem] h-[1.8rem] tablet:w-[2.2rem] tablet:h-[2.2rem] laptop:w-[2.8rem] laptop:h-[2.8rem] mb-2`} />
          <h1 className="w-full px-8 font-normal text-sm tablet:text-base text-main-white/75 mb-4">{`${t('settings_title')}/${t('language_setting')}`}</h1>
          <div className="bg-[#333] w-full h-[1px]" />

          <button
            className="flex items-center px-4 tablet:px-6 text-start font-light text-base w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100"
            onClick={(ev) => i18n.changeLanguage('en')}
          >
            {i18n.language.includes('en') ? <IoIosCheckboxOutline className="mr-2 text-xl" /> : <IoIosSquareOutline className="mr-2 text-xl" />}
            {t('en')}
          </button>

          <button
            className="flex items-center px-4 tablet:px-6 text-start font-light text-base w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100"
            onClick={(ev) => i18n.changeLanguage('pt')}
          >
            {i18n.language.includes('pt') ? <IoIosCheckboxOutline className="mr-2 text-xl" /> : <IoIosSquareOutline className="mr-2 text-xl" />}
            {t('pt')}
          </button>

          <button
            className="flex items-center px-4 tablet:px-6 text-start font-light text-base w-full h-12 tablet:h-14 bg-transparent hover:bg-[#ffffff0f] duration-100"
            onClick={(ev) => i18n.changeLanguage('es')}
          >
            {i18n.language.includes('es') ? <IoIosCheckboxOutline className="mr-2 text-xl" /> : <IoIosSquareOutline className="mr-2 text-xl" />}
            {t('es')}
          </button>
        </div>
        <button
          className="text-red-500 text-lg tablet:text-xl w-full tablet:w-[24rem] bg-[#00000088] h-12 tablet:h-14 rounded-md border border-red-500 hover:bg-[#000000dd] duration-100"
          onClick={(ev) =>
            Dispatch(
              session.actions.update({
                settingsModalState: 'init',
              })
            )
          }
        >
          {t('return')}
        </button>
      </div>
    </div>
  )
}

export default Settings
