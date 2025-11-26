import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import '../style/Playlist.css'
const Songlist = () => {

  const [allsonglist, setallsonglist] = useState([])

  const playlist = async()=>{
    try {
      const {data} =await axios.get('/songs')
      setallsonglist(data.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    playlist()
  },[])
  console.log(allsonglist)
  return (

    <div className="Songlist">
      <div className="leftcard">
        <h3>Now Playing</h3>
        <img src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" />
        <div><span>Title :</span><span>Saiyaara</span></div>
        <div><span>Mood :</span><span>Happy</span></div>
      </div>
      <div className="rightcard">
      <div className='songlist'>  <div className='banner'><img   src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" className='image' /><span>Saiyaara</span></div><img   src="./public/circle-play-solid-full.svg" alt="" className='image' /> </div>
      <div className='songlist'>  <div className='banner'><img   src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" className='image' /><span>Saiyaara</span></div><img   src="./public/circle-play-solid-full.svg" alt="" className='image' /> </div>
      <div className='songlist'>  <div className='banner'><img   src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" className='image' /><span>Saiyaara</span></div><img   src="./public/circle-play-solid-full.svg" alt="" className='image' /> </div>
      <div className='songlist'>  <div className='banner'><img   src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" className='image' /><span>Saiyaara</span></div><img   src="./public/circle-play-solid-full.svg" alt="" className='image' /> </div>
      <div className='songlist'>  <div className='banner'><img   src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" className='image' /><span>Saiyaara</span></div><img   src="./public/circle-play-solid-full.svg" alt="" className='image' /> </div>
      <div className='songlist'>  <div className='banner'><img   src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg" alt="" className='image' /><span>Saiyaara</span></div><img   src="./public/circle-play-solid-full.svg" alt="" className='image' /> </div>
      
      </div>

    </div>
  )
}

export default Songlist