import React, { useEffect, useState } from 'react'
import './MyList.css'
import Movielist from '../Component/Movielist'

function MyList() {
    const[watchlist,setWatchlist]=useState([])
    useEffect(()=>{
        const savedWatchlist=JSON.parse(localStorage.getItem('watchlist')) || []
        if(savedWatchlist){
            setWatchlist(savedWatchlist)
        }
    },[])
  return (
    <div className='mylist-page'>
        <h2>My Watchlist</h2>
        <Movielist movies={watchlist}/>

    </div>
  )
}

export default MyList