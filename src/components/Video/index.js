import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoList,
  VideoDetails,
  VideoThumbnail,
  ProfileTitle,
  ProfileDetails,
  ProfileImage,
  ViewsAndPublish,
  ProfilePara,
} from './styledComponent'

const Video = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoList>
            <Link to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ProfileDetails>
                  <ProfileTitle isDark={isDark}>{title}</ProfileTitle>
                  <ViewsAndPublish>
                    <ProfilePara>{name}</ProfilePara>
                    <ProfilePara>{viewCount} views</ProfilePara>
                    <ProfilePara>{publishedAt}</ProfilePara>
                  </ViewsAndPublish>
                </ProfileDetails>
              </VideoDetails>
            </Link>
          </VideoList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Video
