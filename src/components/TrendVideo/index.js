import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendList,
  TrendThumbnail,
  TrendDetailsDesktop,
  TrendDetailsMobile,
  TrendDetails,
  TrendProfile,
  TrendTitle,
  TrendPara,
  ViewsAndPublish,
} from './styledComponent'

const TrendVideo = props => {
  const {trendDetails} = props
  const {id, title, thumbnailUrl, publishedAt, viewCount} = trendDetails
  const {name, profileImageUrl} = trendDetails.channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`}>
            <TrendList>
              <TrendThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendDetailsDesktop>
                <TrendTitle isDark={isDark}>{title}</TrendTitle>
                <TrendPara>{name}</TrendPara>
                <ViewsAndPublish>
                  <TrendPara>{viewCount} views</TrendPara>
                  <TrendPara>{publishedAt}</TrendPara>
                </ViewsAndPublish>
              </TrendDetailsDesktop>
              <TrendDetailsMobile>
                <TrendProfile src={profileImageUrl} alt="channel logo" />
                <TrendDetails>
                  <TrendTitle isDark={isDark}>{title}</TrendTitle>
                  <ViewsAndPublish>
                    <TrendPara>{name}</TrendPara>
                    <TrendPara>{viewCount} views</TrendPara>
                    <TrendPara>{publishedAt}</TrendPara>
                  </ViewsAndPublish>
                </TrendDetails>
              </TrendDetailsMobile>
            </TrendList>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendVideo
