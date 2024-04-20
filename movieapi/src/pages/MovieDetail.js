import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


export const MovieDetail = () => {
  const params = useParams();
  const[movie,setMovie] = useState();

  useEffect(()=>{
    async  function fetchMovie(){
      const response = await fetch(`http://www.omdbapi.com/?apikey=493a3c4f&i=${params.id}`);
      const json = await response.json();
      setMovie(json);
      
    }
    fetchMovie()
  },[params])

  useEffect(()=>{
    document.title = `${movie.title} / Movie Api`
  },[movie])
  // console.log(movie)
  return (
    <main>
      <section className='flex justify-around fexl-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded' src={movie.Poster} alt="" />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
          <p className='my-4'>{movie.plot}</p>
        </div>
      </section>
    </main>
  )
}
