import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clock from './components/Clock';

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
