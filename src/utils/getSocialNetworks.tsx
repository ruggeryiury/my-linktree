const Links: LinksDocument = require("../locale/links.json")

interface LinksDocument {
    facebook: LinksOptionsDocument
    twitter: LinksOptionsDocument
    instagram: LinksOptionsDocument
    twitch: LinksOptionsDocument
    discord: LinksOptionsDocument
    linkedin: LinksOptionsDocument
    github: LinksOptionsDocument
    soundcloud: LinksOptionsDocument
    gmail: LinksOptionsDocument
}
interface LinksOptionsDocument {
    name: string
    user: string
    link: string
}

/**
 * **Returns information about my social networks.**
 * @param type {string} The social network. *Ex.: Facebook*
 * @param value {string} The type of value you want from the specified social network.
 * @param uppercase {boolean} If ``true``, it'll automatically convert the given string to uppercase. *Default:* `false`
 * @returns {string} The required social network information.
 */
const getSocialNetworks = (type: string, value: string): string => {
    return Links[type as keyof LinksDocument][value as keyof LinksOptionsDocument]
}

export default getSocialNetworks