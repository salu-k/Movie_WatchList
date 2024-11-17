import React from 'react'
import './Searchbar.css'
import { useState } from 'react'

function Searchbar({onSearch}) {
   // Local state to store the search query
  const[query,setQuery]=useState('')
  const handleclick=()=>{
    if(query.trim().length >0){
      onSearch(query)// Invoke the parent-provided search function
    }
    else{
      alert("Please enter a search term")// Alert for invalid input
    }
    
  }
  return (
    <div className='search-bar'>
      <input 
        type='text'
        placeholder='Search Movies'
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}/>
        <button  disabled={false} onClick={handleclick} /*Updates the state on user input*/
        >Search</button>
    </div>
  )
}

export default Searchbar