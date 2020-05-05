import { useState, useEffect } from 'react'

const useInitialState = API => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  })

  // const fetchData = async () => {
  //   const response = await fetch('http://localhost:3000/initialState')
  //   const data = await response.json()
  //   setVideos(data)
  // }

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))

    // fetchData()
  }, [])
  return videos
}

export default useInitialState
