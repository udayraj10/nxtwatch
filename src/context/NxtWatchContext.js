import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  savedVideos: [],
  changeTheme: () => {},
  saveVideo: () => {},
})

export default NxtWatchContext
