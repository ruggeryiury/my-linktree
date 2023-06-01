type SettingsModalStateTypes = 'closed' | 'init' | 'lang'
type LinksModalTypes = 'facebook' | 'twitter' | 'instagram' | 'twitch' | 'discord' | 'linkedin' | 'github' | 'soundcloud' | 'gmail' | 'ngl'

interface SessionInitStateProps {
    isSettingsActivated: boolean
    settingsModalState: SettingsModalStateTypes
    isAnyLinkActivated: boolean
    linksModalType: LinksModalTypes
}