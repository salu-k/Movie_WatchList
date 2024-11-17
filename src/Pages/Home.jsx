import React, { useState } from 'react'
import Searchbar from '../Component/Searchbar'
import Movielist from '../Component/Movielist'
import axios from 'axios'//import axios for api calls
import './Home.css'//importing styles

function Home() {
    //State to store list of movies fetched from OMDb API
    const[movies,setMovies]=useState([])


    const addToWatchlist=(movie)=>{
        // Retrieve the current watchlist from localStorage, or initialize an empty array if it doesn't exist
        const currentList=JSON.parse(localStorage.getItem('watchlist'))|| []; 
        // Add the new movie to the existing watchlist
        const updatedList=[...currentList,movie]
        //Save the updated watchlist to localStorage
        localStorage.setItem('watchlist',JSON.stringify(updatedList))
    }
    const handleSearch=async(query)=>{
        console.log('Searching for:', query); //Log the search term for debugging
        try{
            
            console.log("Searching for :",{query})
            //Make an api call to fetch movies based on the search query
            const response=await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
            console.log('API Response:', response.data);

        setMovies(response.data.Search || []) // Update the movies state with the fetched data, or set it to an empty array if no movies are found
        }
        catch(error){
            console.error("Error in fetching data",error);
            setMovies([]) // Reset the movies state to an empty array if an error occurs
        }
        
    }
  return (
    <div className='home-page'>
        <h1>Welcome to watchlist</h1>
        <p>Browse Movies and Add them to Watchlist</p>
         {/* Searchbar component for inputting the search term */}
        <Searchbar onSearch={handleSearch}/>
         {/* Movielist component to display movies and allow adding them to the watchlist */}
        <Movielist movies={movies} onAddToWatchlist={addToWatchlist}/>
    </div>
  )
}

export default Home