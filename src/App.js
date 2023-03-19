import './App.css';
import './pages.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import data from './components/Data.json'

function App() {
  
  if(!localStorage.getItem("data")){
    localStorage.setItem("data",JSON.stringify(data))
  }
  return (
    <div className="App">
      <Navbar />
      <div className='grid'>
        <Sidebar />
        <Routes>
          <Route path='/about/' element={<About />} >
            <Route path='/about/*' element={<About />} />
          </Route>
          <Route path='/dashboard'  element={<h1 className='about'>Dashboard</h1>} />
          <Route path='/'  element={<h1 className='about' >Home</h1>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
