import { useEffect } from 'react'
import i18n from 'i18next'
import AppContext from './app/AppContext'
import AppRouter from './app/AppRouter'
import { useTranslation } from 'react-i18next'

const App: React.FC = () => {
  const { t } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.title = t('page_title')
  }, [t])

  return (
    <AppContext>
      <AppRouter />
    </AppContext>
  )
}

export default App
