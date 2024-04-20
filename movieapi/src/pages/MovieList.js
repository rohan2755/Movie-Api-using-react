import React from 'react'
import { Card } from '../components'
import { useEffect, useState } from 'react'

export const MovieList = (queryTerm) => {
  
  const [movies, setMovies] = useState([]);
  var obj = queryTerm;
  var ans = obj.queryTerm;
  if(obj.queryTerm === undefined){
    ans = 'game'
  }
  
  console.log(ans)

  useEffect(() => {
    const url = `http://www.omdbapi.com/?apikey=493a3c4f&s=${ans}`;
    console.log(url)
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '39cbae4d9fmsh587bfb59f67a9dap1e2911jsn5db1e270c326',
  //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  //   }
  // };
    async function fetchMovies() {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      setMovies(data.Search)
    }
    fetchMovies();
  }, [ans])

  // useEffect(()=>{
  //   document.title = `${title} / Movie Api`
  // },[title])

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for ${ans}` : ''}</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies.map((movie) => {
            // console.log(movie.i.imageUrl);
            return<Card key={movie.imdbId} movie={movie} />
          })}
        </div>
      </section>
    </main>
  )
}
