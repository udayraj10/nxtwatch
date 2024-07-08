import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  VideoItemContainer,
  VideoContainer,
  VideoDetails,
  VideoTitle,
  ViewLikeSection,
  ViewSection,
  LikeButton,
  DislikeButton,
  SaveButton,
  VideoPara,
  ProfileSection,
  ProfileImage,
  ProfileDetails,
  ProfileName,
  SubscriberCount,
  Description,
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

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: {
      channel: {},
    },
    apiStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details
      const updatedList = {
        id: videoDetails.id,
        title: videoDetails.title,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }

      this.setState({
        videoItemDetails: updatedList,
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

  onRetry = () => this.getVideoDetails()

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
              again.
            </FailurePara>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FailureSection>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDislike: false,
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLike: false,
    }))
  }

  onSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderVideoItemView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, saveVideo, savedVideos} = value
        const {videoItemDetails, isDislike, isLike} = this.state

        const {
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          channel,
        } = videoItemDetails

        const isPresentIndex = savedVideos.findIndex(
          video => video.id === videoItemDetails.id,
        )

        const isPresent = isPresentIndex !== -1

        const onClickSave = () => {
          if (!isPresent) {
            saveVideo({...videoItemDetails})
            this.onSave()
          } else {
            savedVideos.splice(isPresentIndex, 1)
            this.onSave()
          }
        }

        return (
          <VideoContainer isDark={isDark} data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoDetails>
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <ViewLikeSection>
                <ViewSection>
                  <VideoPara>{viewCount} views</VideoPara>
                  <VideoPara>{publishedAt}</VideoPara>
                </ViewSection>
                <ViewSection>
                  <LikeButton
                    type="button"
                    onClick={this.onLike}
                    isLike={isLike}
                  >
                    <AiOutlineLike
                      size={20}
                      color={isLike ? '#2563eb' : '#64748b'}
                    />
                    Like
                  </LikeButton>
                  <DislikeButton
                    type="button"
                    onClick={this.onDislike}
                    isDislike={isDislike}
                  >
                    <AiOutlineDislike
                      size={20}
                      color={isDislike ? '#2563eb' : '#64748b'}
                    />
                    Dislike
                  </DislikeButton>
                  <SaveButton
                    type="button"
                    onClick={onClickSave}
                    isSaved={isPresent}
                  >
                    <CgPlayListAdd
                      size={20}
                      color={isPresent ? '#2563eb' : '#64748b'}
                    />
                    {isPresent ? 'Saved' : 'Save'}
                  </SaveButton>
                </ViewSection>
              </ViewLikeSection>
              <hr />
              <ProfileSection>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ProfileDetails>
                  <ProfileName isDark={isDark}>{channel.name}</ProfileName>
                  <SubscriberCount>
                    {channel.subscriberCount} subscribers
                  </SubscriberCount>
                  <Description isDark={isDark}>{description}</Description>
                </ProfileDetails>
              </ProfileSection>
            </VideoDetails>
          </VideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideo = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderVideoItemView()
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
        <VideoItemContainer>
          <Sidebar />
          {this.renderVideo()}
        </VideoItemContainer>
      </>
    )
  }
}

export default VideoItemDetails
