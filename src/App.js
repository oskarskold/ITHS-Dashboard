import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Clock from './components/Clock/Clock';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
