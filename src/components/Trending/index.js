import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendVideo from '../TrendVideo'
import {
  TrendContainer,
  TrendSection,
  HeaderSection,
  TrendLogo,
  TrendHeadList,
  TrendHead,
  LoaderContainer,
  TrendsList,
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

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))

      this.setState({
        trendingList: updatedList,
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

  onRetry = () => this.getTrendingList()

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

  renderTrendView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {trendingList} = this.state
        const {isDark} = value

        return (
          <TrendSection isDark={isDark} data-testid="trending">
            <HeaderSection isDark={isDark} data-testid="banner">
              <TrendLogo isDark={isDark}>
                <FaFire size={30} color="#ff0000" />
              </TrendLogo>
              <TrendHeadList>
                <TrendHead isDark={isDark}>Trending</TrendHead>
              </TrendHeadList>
            </HeaderSection>
            <TrendsList>
              {trendingList.map(each => (
                <TrendVideo key={each.id} trendDetails={each} />
              ))}
            </TrendsList>
          </TrendSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendResultView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderTrendView()
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
        <TrendContainer>
          <Sidebar />
          {this.renderTrendResultView()}
        </TrendContainer>
      </>
    )
  }
}
export default Trending
