import React from 'react'
import './Searchbar.css'
import { useState } from 'react'

function Searchbar({onSearch}) {
  const[query,setQuery]=useState('')
  const handleclick=()=>{
    onSearch(query)
  }
  return (
    <div className='search-bar'>
      <input 
        type='text'
        placeholder='Search Movies'
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}/>
        <button onClick={handleclick}>Search</button>
    </div>
  )
}

export default Searchbar