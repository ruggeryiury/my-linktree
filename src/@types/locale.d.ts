export interface LocaleDocument {
    header_title: string
    settings_title: string
    language_setting: string
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
    back: string
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

    EN_lang: string
    PT_lang: string
    ES_lang: string
}

export interface LinksDocument {
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