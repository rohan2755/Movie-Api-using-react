import {useSearchParams} from "react-router-dom"
import { MovieList } from "./MovieList";
import { useEffect } from "react";

export const Search = () => {
  const[searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  console.log(queryTerm)

  useEffect(()=>{
    document.title = `Search result for ${queryTerm} / Movie Api`
  },[queryTerm])
  return (
    <main>
      <MovieList queryTerm = {queryTerm} />
    </main>
  )
}
