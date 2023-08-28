import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import { initReactI18next } from 'react-i18next'
import { TranslationEN, TranslationES, TranslationPT } from '../locales/translations'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [LocalStorageBackend],
    },
    fallbackLng: 'en',
    detection: {
      order: ['navigator'],
    },
    debug: true,
    resources: {
      en: {
        translation: TranslationEN,
      },
      pt: {
        translation: TranslationPT,
      },
      es: {
        translation: TranslationES,
      },
    },
  })

export default i18n
