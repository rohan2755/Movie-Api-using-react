import { Routes, Route } from "react-router-dom";
import { MovieDetail,MovieList,PageNotFound,Search } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
        <Route path="/" element={<MovieList title="Home" />}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/popular" element={<MovieList title="Popular" queryTerm = {'popular'}/>}/>
        <Route path="movies/upcoming" element={<MovieList title="Upcoming" queryTerm = {'upcoming'}/>}/>
        <Route path="movies/top" element={<MovieList title="Top" queryTerm = {'top'}/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound />}/>
    </Routes>
    </div>
  )
}
