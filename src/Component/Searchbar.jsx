import React from 'react'
import './Searchbar.css'
import { useState } from 'react'

function Searchbar({onSearch}) {
  const[query,setQuery]=useState('')
  const handleclick=()=>{
    if(query.trim().length >0){
      onSearch(query)
    }
    else{
      alert("Please enter a search term")
    }
    
  }
  return (
    <div className='search-bar'>
      <input 
        type='text'
        placeholder='Search Movies'
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}/>
        <button  disabled={false} onClick={handleclick}>Search</button>
    </div>
  )
}

export default Searchbar