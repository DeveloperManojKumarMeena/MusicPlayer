import React from 'react'
import Nav from './components/Nav'
import Songlist from './components/Songlist'
import MusicPlayer from './components/MusicPlayer'
import './style/MusicPlayer.css'
const App = () => {
  return (
    <div>
      <Nav />
      <Songlist />
      <MusicPlayer className="playersticky" />
    </div>
  )
}

export default App