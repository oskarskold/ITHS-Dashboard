import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Weather.css'


const Weather = () => {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')  

  const key = 'd94ee145a892dcc47e3e0a052810565b'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

  const searchCity = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setCity('')
    }
  }
  
    return (
      <div className="weather-container">
        <h1 className="weather-title">Check the weather!</h1>
        <div className="weather-search">
          <input 
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={searchCity}
          placeholder='Enter city'/>
        </div>
        <div className="weather-city">
          <p>{data.name}</p>
        </div>
        <div className="weather-temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="weather-description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

      {data.name !== undefined &&
        <div className="weather-bottom">
          <div className="weather-feels">
            {data.main ? <p className='weather-bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="weather-humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="weather-wind">
            {data.wind ? <p className='weather-bold'>{data.wind.speed.toFixed()} m/s</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }
      </div>
  );
}

export default Weather