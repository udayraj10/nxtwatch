import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Game from '../Game'
import {
  GameContainer,
  GameSection,
  HeaderSection,
  GameLogo,
  GameHeadList,
  GameHead,
  GamesList,
  LoaderContainer,
  FailureSection,
  FailureImage,
  FailureHead,
  FailurePara,
  RetryButton,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const updatedList = videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      this.setState({
        gamingList: updatedList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer data-testid="loader" isDark={isDark}>
            <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onRetry = () => this.getGamingList()

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureSection isDark={isDark}>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHead isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHead>
            <FailurePara>
              We are having some trouble to complete your request. Please try
              agian.
            </FailurePara>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FailureSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGameView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {gamingList} = this.state
        const {isDark} = value

        return (
          <GameSection isDark={isDark} data-testid="gaming">
            <HeaderSection isDark={isDark} data-testid="banner">
              <GameLogo isDark={isDark}>
                <FaGamepad size={30} color="#ff0000" />
              </GameLogo>
              <GameHeadList>
                <GameHead isDark={isDark}>Gaming</GameHead>
              </GameHeadList>
            </HeaderSection>
            <GamesList>
              {gamingList.map(each => (
                <Game key={each.id} gameDetails={each} />
              ))}
            </GamesList>
          </GameSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGameResultView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderGameView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GameContainer>
          <Sidebar />
          {this.renderGameResultView()}
        </GameContainer>
      </>
    )
  }
}
export default Gaming
