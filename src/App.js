import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import ClockView from './views/ClockView';
import HomeView from './views/HomeView';

const App = () => {
  return (
    <div className="App">    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/clock" element={<ClockView />}></Route>
      </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
