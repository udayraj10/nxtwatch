import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SaveList,
  SaveThumbnail,
  SaveDetailsDesktop,
  SaveDetailsMobile,
  SaveDetails,
  SaveProfile,
  SaveTitle,
  SavePara,
  ViewsAndPublish,
} from './styledComponent'

const SaveVideo = props => {
  const {savedDetails} = props
  const {id, title, thumbnailUrl, publishedAt, viewCount, channel} =
    savedDetails
  const {name, profileImageUrl} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`}>
            <SaveList>
              <SaveThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <SaveDetailsDesktop>
                <SaveTitle isDark={isDark}>{title}</SaveTitle>
                <SavePara>{name}</SavePara>
                <ViewsAndPublish>
                  <SavePara>{viewCount} views</SavePara>
                  <SavePara>{publishedAt}</SavePara>
                </ViewsAndPublish>
              </SaveDetailsDesktop>
              <SaveDetailsMobile>
                <SaveProfile src={profileImageUrl} alt="channel logo" />
                <SaveDetails>
                  <SaveTitle isDark={isDark}>{title}</SaveTitle>
                  <ViewsAndPublish>
                    <SavePara>{name}</SavePara>
                    <SavePara>{viewCount} views</SavePara>
                    <SavePara>{publishedAt}</SavePara>
                  </ViewsAndPublish>
                </SaveDetails>
              </SaveDetailsMobile>
            </SaveList>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SaveVideo
