import React from 'react'
import { createRoot } from 'react-dom/client'
import { register as serviceWorkerRegister } from './serviceWorkerRegistration'
import App from './App'
import './assets/scss/index.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

serviceWorkerRegister()