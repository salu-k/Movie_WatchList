import React from 'react'
import Movieitem from './Movieitem'
import './Movielist.css'

function Movielist({movies,onAddToWatchlist}) {
  // Check if there are no movies to display
  if(!movies || movies.length===0){
    return <p>No movies to display,Try to explore something</p>// Message displayed when no movies are available
  }
  return (
    <div className='movie-list'>
      {movies.map((movie,index)=>(<Movieitem key={movie.omdbID || index} // Unique key for each movie item, fallback to index if omdbID is unavailable
      movie={movie} // Passing the movie object as a prop to Movieitem
      onAddToWatchlist={onAddToWatchlist}/>))}{/* Passing the add-to-watchlist function as a prop*/}
    </div>
  )
}

export default Movielist