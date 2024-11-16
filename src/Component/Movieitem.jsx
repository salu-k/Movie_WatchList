import React from 'react'
import './Movieitem.css'

function Movieitem({movie,onAddToWatchlist}) {
  const isInWatchlist=()=>{
    const currentList=JSON.parse(localStorage.getItem('watchlist')) || []
  return currentList.some((item)=>item.imdbID===movie.imdbID)
  }
  return (
    <div className='movie-item'>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title}/>
      <button onClick={(e)=>onAddToWatchlist(movie)}
       disabled={isInWatchlist(movie)}>
        {isInWatchlist(movie)? "Added":"Add to Watchlist"}
       </button>
    </div>
  )
}

export default Movieitem