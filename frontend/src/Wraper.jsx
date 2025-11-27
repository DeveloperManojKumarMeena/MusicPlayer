import { createContext, useEffect, useState } from "react"
import axios from './utils/axios'

export const dataContext = createContext(null)
const Wraper = (props) => {
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
  

  return (<dataContext.Provider value={[allsonglist ,setallsonglist]}>
    {props.children}
    </dataContext.Provider>
  )
}

export default Wraper