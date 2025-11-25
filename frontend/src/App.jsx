import React from 'react'
import Nav from './components/Nav'
import Songlist from './components/Songlist'
import MusicPlayer from './components/MusicPlayer'
const App = () => {
  return (
    <div>
      <Nav />
      <Songlist />
      <MusicPlayer />
    </div>
  )
}

export default App