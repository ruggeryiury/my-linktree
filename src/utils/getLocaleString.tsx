interface LocaleDocument {
    profileimage_alt: string
    welcome_text: string
    index_desc: string
    my_socialnetworks: string
    my_profnetworks: string
    my_music: string
    my_other: string
    ask_me: string
    ask_me_desc: string
    close: string
    facebook_desc: string
    twitter_desc: string
    instagram_desc: string
    twitch_desc: string
    discord_desc: string
    linkedin_desc: string
    github_desc: string
    soundcloud_desc: string
    gmail_desc: string
    ngl_desc: string
    access_link: string
    ngl_link: string
    send_email: string
    copy_user: string
    copy_successfully: string
    copy_email: string
    copy_email_successfully: string
}

const localePTBR: LocaleDocument = require('../locale/pt-BR.json')
const localeENUS: LocaleDocument = require('../locale/en-US.json')

/**
 * **Checks on locale files and returns a string based on the key.**
 * @param key {string} The key code of the string.
 * @param lang {string} The required language of the key.
 * @param uppercase {boolean} If ``true``, it'll automatically convert the given string to uppercase. *Default:* `false`
 * @returns {string} A string of the given locale code. If the key isn't registered on the locale files, it will return the given key code.
 */
const getLocaleString = (key: string, lang: string, uppercase: boolean = false): string => {
    if (lang.includes('pt-')) {
        const text = localePTBR[key as keyof LocaleDocument]

        if (text) {
            return uppercase ? localePTBR[key as keyof LocaleDocument].toUpperCase() : localePTBR[key as keyof LocaleDocument]
        } else {
            return key
        }
    } else if (lang.includes('en-')) {
        const text = localeENUS[key as keyof LocaleDocument]

        if (text) {
            return uppercase ? localeENUS[key as keyof LocaleDocument].toUpperCase() : localeENUS[key as keyof LocaleDocument]
        } else {
            return key
        }
    } else {
        const text = localeENUS[key as keyof LocaleDocument]

        if (text) {
            return uppercase ? localeENUS[key as keyof LocaleDocument].toUpperCase() : localeENUS[key as keyof LocaleDocument]
        } else {
            return key
        }
    }
}

export default getLocaleString