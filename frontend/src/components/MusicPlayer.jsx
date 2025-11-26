import React from 'react'
import '../style/MusicPlayer.css'
const MusicPlayer = () => {
  return (
    <div className="MusicPlayer">
      <center>
      <div className="seekbar">
     
      <input type="range" value={1} />
      <span>00:00:00</span>
      
      </div>
       </center>
      <div className="controls">
        <img src="./public/backward-step-solid-full.svg" alt="" />
          <img src="./public/backward-solid-full.svg" alt="" />
        <img src="./public/circle-play-solid-full.svg" alt="" />
        <img src="./public/forward-solid-full.svg" alt="" />
        <img src="./public/forward-step-solid-full.svg" alt="" />
      
      </div>
     
    </div>
  )
}

export default MusicPlayer