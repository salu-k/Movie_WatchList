import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {

  return (
    <div className='sidebar'>
      <h1>Watch Lists</h1>
      <NavLink to='/' className={({isActive})=> (isActive ? "active" : "inactive")}>Home</NavLink><br/>
      <NavLink to='/MyList' className={({isActive})=> (isActive ? "active" : "inactive")}>MyList</NavLink>
      <div className='user'>
        
      </div>
    </div>
  )
}

export default Sidebar