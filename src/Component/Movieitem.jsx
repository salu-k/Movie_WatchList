import React from 'react'
import './Movieitem.css'

//Function to check if the current movie is already in the watchlist.
function Movieitem({movie,onAddToWatchlist}) {
  const isInWatchlist=()=>{
    // Retrieve the current watchlist from localStorage, defaulting to an empty array if not found
    const currentList=JSON.parse(localStorage.getItem('watchlist')) || []
    //  Check if any movie in the watchlist matches the current movie's imdbID
  return currentList.some((item)=>item.imdbID===movie.imdbID)
  }
  return (
    <div className='movie-item'>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title}/> {/* Display the movie's poster, using its Title as alt text for accessibility */}
      <button onClick={(e)=>onAddToWatchlist(movie)}// Call onAddToWatchlist with the current movie when clicked
       disabled={isInWatchlist()}>{/* Disable the button if the movie is already in the watchlist*/}
       {/* Change button text based on whether the movie is already in the watchlist */}
        {isInWatchlist()? "Added":"Add to Watchlist"}
       </button>
    </div>
  )
}

export default Movieitem