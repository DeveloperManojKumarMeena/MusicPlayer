import React from 'react'
import '../style/Nav.css'
const Nav = () => {
  return (
    <nav>
        <div className='logo'><img src="./public/Logo.png" alt="Logo" />MAIPLAER</div>
        <ul>
        <li>Home</li>
        <li>My Playlist</li>
        <li>Mood_Music</li>
        <li>Detected_Mood</li>
        </ul>
    </nav>
  
  )}

export default Nav