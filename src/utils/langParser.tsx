/**
 * **A simple language parser.**
 * @param nav_lang {string} The code of the language (ISO 639-1).
 * @returns {string} A string that contains parsed data for the `Multi-Language support` system, based on {@link https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes ISO 639-1 codes}.
 */
const langParser = (nav_lang: string): string => {
    if (nav_lang.includes('pt-') || nav_lang === 'pt') {
        return 'PT'
    } else if (nav_lang.includes('en-') || nav_lang === 'en') {
        return 'EN'
    } else if (nav_lang.includes('es-') || nav_lang === 'es') {
        return 'ES'
    } else {
        return 'EN'
    }
}
 
export default langParser