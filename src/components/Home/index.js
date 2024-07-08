import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Video from '../Video'
import {
  HomeContainer,
  HomeSection,
  BannerSection,
  CloseButton,
  NxtLogo,
  BannerHead,
  BannerButton,
  SearchVideoSection,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  HomeVideos,
  LoaderContainer,
  NoSearchContainer,
  NoSearchImage,
  NoSearchHead,
  NoSearchPara,
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

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    isBannerClicked: true,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedList,
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

  onRetry = () => this.getVideos()

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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchItem = () => {
    this.getVideos()
  }

  renderVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {videosList} = this.state
        const {isDark} = value
        const shouldShow = videosList.length > 0

        return shouldShow ? (
          <HomeVideos>
            {videosList.map(each => (
              <Video key={each} videoDetails={each} />
            ))}
          </HomeVideos>
        ) : (
          <NoSearchContainer isDark={isDark}>
            <NoSearchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchHead isDark={isDark}>No Search results found</NoSearchHead>
            <NoSearchPara>
              Try different key words or remove search filter
            </NoSearchPara>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </NoSearchContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onCloseBanner = () => {
    this.setState({isBannerClicked: false})
  }

  renderBannerSearch = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {searchInput, isBannerClicked} = this.state
        const {isDark} = value

        return (
          <HomeSection isDark={isDark} data-testid="home">
            {isBannerClicked && (
              <BannerSection data-testid="banner">
                <CloseButton
                  type="button"
                  onClick={this.onCloseBanner}
                  data-testid="close"
                >
                  <IoMdClose size={20} color="#1e293b" />
                </CloseButton>
                <>
                  <NxtLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <BannerHead>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </BannerHead>
                  <BannerButton type="button">GET IT NOW</BannerButton>
                </>
              </BannerSection>
            )}
            <SearchVideoSection>
              <SearchContainer isDark={isDark}>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                  isDark={isDark}
                />
                <SearchIconButton
                  isDark={isDark}
                  data-testid="searchButton"
                  onClick={this.onSearchItem}
                >
                  <FaSearch size={18} color="#313131" />
                </SearchIconButton>
              </SearchContainer>
              {this.renderVideoResultView()}
            </SearchVideoSection>
          </HomeSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoResultView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderVideosView()
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
        <HomeContainer>
          <Sidebar />
          {this.renderBannerSearch()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
