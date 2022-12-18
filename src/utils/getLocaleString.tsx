import { LocaleDocument } from "../@types/globals"

const localePTBR: LocaleDocument = require('../locale/pt-BR.json')

/**
 * **Checks on locale files and returns a string based on the key.**
 * @param key {string} The key code of the string.
 * @param lang {string} The required language of the key.
 * @param uppercase {boolean} If true, it automatically converts the given string to uppercase. *Default:* `false`
 * @returns {string} A string of the given locale code. If the key isn't registered on the locale files, it will return the given key.
 */
const getLocaleString = (key: string, lang: string, uppercase: boolean = false): string => {
    if (lang === 'pt-BR') {
        const text = localePTBR[key as keyof LocaleDocument]

        if (text) {
            return uppercase ? localePTBR[key as keyof LocaleDocument].toUpperCase() : localePTBR[key as keyof LocaleDocument]
        } else {
            return key
        }
    } else {
        return key
    }
}

export default getLocaleString