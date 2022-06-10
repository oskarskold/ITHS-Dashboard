import React from 'react'
import './Header.css'
import logo from '../../assets/ITHS_logo.png'

const Header = () => {
  return (
    <div className='header-bg'>
      <img src={logo} alt="logo" height="80%"/>
       <h1 className='header-text'>ITHS-Dashboard</h1>
    </div>
  )
}

export default Header