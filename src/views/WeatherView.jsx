import React from 'react'
import Weather from '../components/Weather/Weather'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'


const WeatherView = () => {
  return (
      <div>
        <Header />
        <Nav />
        <Weather />
        <Footer />
      </div>
  )
}


export default WeatherView