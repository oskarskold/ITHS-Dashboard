import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Clock from './components/Clock/Clock';
import Weather from './components/Weather/Weather';
import Traffic from './components/Traffic/Traffic';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper-app">    
      <div className='top-app'>
      <Weather/>
      <Clock/>
      </div>
      <div className='bot-app'>
      <Traffic/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
