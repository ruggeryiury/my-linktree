import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: SessionInitStateProps = {
    isSettingsActivated: false,
    settingsModalState: 'closed',
    isAnyLinkActivated: false,
    linksModalType: 'twitter'
}

const session = createSlice({
    name: 'session',
    initialState,
    reducers: {
        update(state, action: PayloadAction<Partial<typeof initialState>>) {
            return { ...state, ...action.payload }
        }
    }
})

export default session