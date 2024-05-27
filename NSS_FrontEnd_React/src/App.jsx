import './App.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import React from 'react';
import Carousal from './components/Carousal';
import Events from './components/Events';
import AboutUs from './components/AboutUs'; 
import OfficeBearers from './components/OfficeBearers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllEvents from './components/AllEvents';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <>
      <Router>
        <Appbar/>
        <div style={{marginBottom:'70px'}}></div>
        <Routes>
          <Route path='/home' element={<><Carousal/>,<AllEvents/></>}/>            
          <Route path='events/' element={<Events/>}/>
          <Route path='aboutUs/'element={<AboutUs/>}/>
          <Route path='officeBearers/'element={<OfficeBearers/>}/>
          <Route path='*'element={<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
