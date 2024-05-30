import './App.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import React from 'react';
import Carousal from './components/Carousal';
import Events from './components/Events';
import AboutUs from './components/AboutUs'; 
import OfficeBearers from './components/OfficeBearers';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import AllEvents from './components/AllEvents';
import PageNotFound from './components/PageNotFound';
import FocusTrap from '@mui/material/Unstable_TrapFocus';
function App() {

 

  return (
    <>
      <Router>
        <Appbar/>
        <Routes>
            <Route path='/home' element={<><Carousal/><AllEvents/><Footer/></>}/>          
            <Route path='events/' element={<><Events/><Footer/></>}/>
            <Route path='aboutUs/'element={<><AboutUs/><Footer/></>}/>
            <Route path='officeBearers/'element={<><OfficeBearers/><Footer/></>}/>
            <Route path='*'element={<PageNotFound/>}></Route>
            <Route path='*/*'element={<PageNotFound/>}></Route>
        </Routes>   
      </Router>
    </>
  )
}

export default App;
