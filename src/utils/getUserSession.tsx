import { UserSessionObject } from "../@types/session"

const getUserSession = (): UserSessionObject | null => {
    const lang = localStorage.getItem('lang')

    if (lang) {
        const userSession: UserSessionObject = {
            lang
        }
        return userSession
    } else {
        return null
    }
}

export default getUserSession