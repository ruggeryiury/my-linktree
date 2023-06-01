import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import session from '../session.slice'

const store = configureStore({
    reducer: {
        session: session.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default store