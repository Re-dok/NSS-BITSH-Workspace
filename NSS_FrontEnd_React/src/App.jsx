import './App.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import React from 'react';
import Carousal from './components/Carousal';
import Events from './components/Events';
// import AboutUs from './components/AboutUs'; // Import AboutUs component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Appbar/>
        <div style={{marginBottom:'70px'}}></div>
        <Routes>
          <Route path='/home' element={<Carousal/>}/>
          <Route path='/events' element={<Events/>}/>
          {/* <Route path='/AboutUs' element={<AboutUs/>}/> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
