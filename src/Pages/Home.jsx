import React, { useState } from 'react'
import Searchbar from '../Component/Searchbar'
import Movielist from '../Component/Movielist'
import axios from 'axios'
import './Home.css'

function Home() {
    const[movies,setMovies]=useState([])
    const addToWatchlist=(movie)=>{
        const currentList=JSON.parse(localStorage.getItem('watchlist'))|| [];
        const updatedList=[...currentList,movie]
        localStorage.setItem('watchlist',JSON.stringify(updatedList))
    }
    const handleSearch=async(query)=>{
        try{
            const API_KEY=process.env.movie_watchlist_OMDB_API_KEY;
            const response=await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        setMovies(response.data.Search || [])
        }
        catch(error){
            console.error("Error in fetching data",error);
            setMovies([])
        }
        
    }
  return (
    <div className='home-page'>
        <h1>Welcome to watchlist</h1>
        <p>Browse Movies mnd Add them to Watchlist</p>
        <Searchbar onSearch={handleSearch}/>
        <Movielist movies={movies} onAddToWatchlist={addToWatchlist}/>
    </div>
  )
}

export default Home