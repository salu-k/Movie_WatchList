import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {

  return (
    <div className='sidebar'>
      <h1>Watch Lists</h1>
       {/* NavLink for Home page, `isActive` is used to apply styles based on the current route */}
      <NavLink to='/' className={({isActive})=> (isActive ? "active" : "inactive")} /* Apply "active" class when the link is active*/
      >Home</NavLink><br/>
      <NavLink to='/MyList' className={({isActive})=> (isActive ? "active" : "inactive")}>MyList</NavLink>
      <div className='user'>{/* This can be expanded later to include user info or settings */}
        
      </div>
    </div>
  )
}

export default Sidebar