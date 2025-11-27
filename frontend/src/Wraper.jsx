import { createContext, useEffect, useState } from "react"
import axios from './utils/axios'

export const dataContext = createContext(null)
const Wraper = (props) => {
const [allsonglist, setallsonglist] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
const currentSong = allsonglist[currentIndex] || null;
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
  

  return (<dataContext.Provider value={{
        allsonglist,
        setallsonglist,
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        currentSong,
      }}>
    {props.children}
    </dataContext.Provider>
  )
}

export default Wraper