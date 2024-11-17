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
        console.log('Searching for:', query);
        try{
            
            console.log("Searching for :",{query})
            const response=await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
            console.log('API Response:', response.data);
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