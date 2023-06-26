import { Provider } from 'react-redux'
import store from '../store/config/store'
import { I18nextProvider } from 'react-i18next'
import i18n from '../config/i18n.config'

const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>{children}</Provider>
    </I18nextProvider>
  )
}

export default AppProvider
