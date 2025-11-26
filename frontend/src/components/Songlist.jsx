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
      
    </div>
  )
}

export default Songlist