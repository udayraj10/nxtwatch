import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {List, GameImage, GameTitle, GameView} from './styledComponent'

const Game = props => {
  const {gameDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <List>
            <Link to={`/videos/${id}`}>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle isDark={isDark}>{title}</GameTitle>
              <GameView>{viewCount} Watching Worldwide</GameView>
            </Link>
          </List>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Game
