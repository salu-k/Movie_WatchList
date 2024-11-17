import React from 'react'
import './Movieitem.css'

function Movieitem({movie,onAddToWatchlist}) {
  const isInWatchlist=()=>{
    const currentList=JSON.parse(localStorage.getItem('watchlist')) || []
  return currentList.some((item)=>item.imdbID===movie.imdbID)
  }
  return (
    <div className='movie-item'>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title}/>
      <button onClick={(e)=>onAddToWatchlist(movie)}
       disabled={isInWatchlist()}>
        {isInWatchlist()? "Added":"Add to Watchlist"}
       </button>
    </div>
  )
}

export default Movieitem