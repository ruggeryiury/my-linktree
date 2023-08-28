import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SettingsModalStateTypes = 'closed' | 'init' | 'lang'
type LinksModalTypes = 'facebook' | 'twitter' | 'instagram' | 'twitch' | 'discord' | 'linkedin' | 'github' | 'soundcloud' | 'gmail' | 'ngl'

interface SessionInitStateProps {
  isSettingsActivated: boolean
  settingsModalState: SettingsModalStateTypes
  isAnyLinkActivated: boolean
  linksModalType: LinksModalTypes
}

const initialState: SessionInitStateProps = {
  isSettingsActivated: false,
  settingsModalState: 'closed',
  isAnyLinkActivated: false,
  linksModalType: 'twitter',
}

const session = createSlice({
  name: 'session',
  initialState,
  reducers: {
    update(state, action: PayloadAction<Partial<SessionInitStateProps>>) {
      return { ...state, ...action.payload }
    },
  },
})

export default session
