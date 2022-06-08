import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav-bg'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clock">Clock</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/traffic">Traffic</Link></li>
      </ul>
    </div>
  )
}

export default Nav