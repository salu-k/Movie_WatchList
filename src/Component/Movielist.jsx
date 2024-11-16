import React from 'react'
import Movieitem from './Movieitem'
import './Movielist.css'

function Movielist({movies,onAddToWatchlist}) {
  if(!movies || movies.length===0){
    <p>No movies to display,Try to explore something</p>
  }
  return (
    <div className='movie-list'>
      {movies.map((movie,index)=>(<Movieitem key={movie.imdbID || index} movie={movie} onAddToWatchlist={onAddToWatchlist}/>))}
    </div>
  )
}

export default Movielist