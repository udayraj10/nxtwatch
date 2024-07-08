import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundSection,
  NotFoundImage,
  NotFoundHead,
  NotFoundPara,
} from './styledComponent'
import Header from '../Header'
import Sidebar from '../Sidebar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer>
            <Sidebar />
            <NotFoundSection isDark={isDark}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHead isDark={isDark}>Page Not Found</NotFoundHead>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundSection>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
