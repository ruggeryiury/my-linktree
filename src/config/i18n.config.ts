import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { TranslationEN, TranslationPT } from '../locales/translations'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            backends: [
                LocalStorageBackend,
                HttpApi
            ],
            backendOptions: [
                {},
                { loadPath: '../locales/en-US.json' }
            ]
        },
        fallbackLng: 'en',
        detection: {
            order: ['navigator']
        },
        // debug: true,
        resources: {
            en: {
                translation: TranslationEN
            },
            pt: {
                translation: TranslationPT
            }
        }
    })

export default i18n