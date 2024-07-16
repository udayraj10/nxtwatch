import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendList,
  TrendThumbnail,
  TrendDetailsSection,
  TrendDetails,
  TrendProfile,
  TrendTitle,
  TrendPara,
  Details,
  ViewPublish,
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
              <TrendDetailsSection>
                <TrendProfile src={profileImageUrl} alt="channel logo" />
                <TrendDetails>
                  <TrendTitle isDark={isDark}>{title}</TrendTitle>
                  <Details>
                    <TrendPara>{name}</TrendPara>
                    <ViewPublish>
                      <TrendPara>{viewCount} views</TrendPara>
                      <TrendPara>{publishedAt}</TrendPara>
                    </ViewPublish>
                  </Details>
                </TrendDetails>
              </TrendDetailsSection>
            </TrendList>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendVideo
