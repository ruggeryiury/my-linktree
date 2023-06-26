import { MyLinks, Presentation } from '../components/Root.components'
import Links from '../components/Links'
import RootHeader from '../components/RootHeader'

const Root = () => {
  return (
    <>
      <RootHeader />
      <Links />
      <Presentation />
      <MyLinks />
    </>
  )
}

export default Root
