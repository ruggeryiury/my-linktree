/// <reference types="react-scripts" />

export interface LocaleDocument {
    welcome_text: string;
    index_desc: string;
    profileimage_alt: string;
    my_socialnetworks: string;
    my_profnetworks: string;
    my_music: string;
    access_link: string;
    copy_user: string;
    ngl_link: string;
    my_projects: string;
    my_musicprojects: string;
    close_btn: string;
    my_other: string;
    askmeanon: string;
    poweredby: string;
    facebook_desc: string;
    twitter_desc: string;
    instagram_desc: string;
    twitch_desc: string;
    discord_desc: string;
    linkedin_desc: string;
    github_desc: string;
    soundcloud_desc: string;
    ngl_desc: string;
}


interface LinksDictOptions {
    link: string | null
    user: string | null
}
export interface LinksDictDocument {
    facebook: LinksDictOptions
    twitter: LinksDictOptions
    instagram: LinksDictOptions
    twitch: LinksDictOptions
    discord: LinksDictOptions
    linkedin: LinksDictOptions
    github: LinksDictOptions
    soundcloud: LinksDictOptions
    ngl: LinksDictOptions
}