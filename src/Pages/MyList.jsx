import React, { useEffect, useState } from 'react'
import './MyList.css'
import Movielist from '../Component/Movielist'

function MyList() {
   // State to store the user's watchlist retrieved from localStorage
    const[watchlist,setWatchlist]=useState([])
    /*useEffect to load the watchlist from localStorage when the component mounts. */
    useEffect(()=>{
      // Retrieve the saved watchlist from localStorage or default to an empty array if not found
        const savedWatchlist=JSON.parse(localStorage.getItem('watchlist')) || []
        // If a watchlist exists, update the state with its contents
        if(savedWatchlist){
            setWatchlist(savedWatchlist)
        }
    },[])// Empty dependency array ensures this runs only once when the component mounts
  return (
    <div className='mylist-page'>
        <h2>My Watchlist</h2>
        <Movielist movies={watchlist}/>   {/* Movielist component to display the movies in the user's watchlist */}

    </div>
  )
}

export default MyList