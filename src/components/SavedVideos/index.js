import {FaFire} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import SaveVideo from '../SaveVideo'
import {
  SaveContainer,
  SavedSection,
  HeaderSection,
  SavedLogo,
  SavedHeadList,
  SavedHead,
  SavedList,
  NoSavedSection,
  NoSavedImage,
  NoSavedHead,
  NoSavedPara,
} from './styledComponent'

const SavedVideos = () => {
  const renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <NoSavedSection isDark={isDark} data-testid="savedVideos">
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHead isDark={isDark}>No saved videos found</NoSavedHead>
            <NoSavedPara>
              You can save your videos while watching them
            </NoSavedPara>
          </NoSavedSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderSavedView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value

        return (
          <SavedSection isDark={isDark} data-testid="savedVideos">
            <HeaderSection isDark={isDark} data-testid="banner">
              <SavedLogo isDark={isDark}>
                <FaFire size={30} color="#ff0000" />
              </SavedLogo>
              <SavedHeadList>
                <SavedHead isDark={isDark}>Saved Videos</SavedHead>
              </SavedHeadList>
            </HeaderSection>
            <SavedList>
              {savedVideos.map(each => (
                <SaveVideo key={each.id} savedDetails={each} />
              ))}
            </SavedList>
          </SavedSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideos} = value
        const isEmpty = savedVideos.length < 1

        return (
          <>
            <Header />
            <SaveContainer>
              <Sidebar />
              {isEmpty ? renderNoVideosView() : renderSavedView()}
            </SaveContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideos
