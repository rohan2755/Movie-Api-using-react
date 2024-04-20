import { useState, useEffect } from "react"

export const useFetch = (url,options) => {
    const[data,setData] = useState([])

    useEffect((url,options) => {
        async function fetchMovies() {
          const response = await fetch(url, options);
          const json = await response.json();
          // console.log(data.d)
          setData(json.d)
        }
        fetchMovies();
      }, [url,options])
  return { data }
}
