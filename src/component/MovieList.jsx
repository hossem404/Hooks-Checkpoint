import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
    <div>
        {movie.map((movie,index)=>(<div key={index} > <MovieCard movie={movie} ></MovieCard> </div>))}
    </div>
  )
}

export default MovieList