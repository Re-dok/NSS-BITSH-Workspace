import './App.css'
import Appbar from './components/Appbar'
import Footer2 from './components/Footer2'
import Footer from './components/Footer'
import React from 'react';
import Carousal from './components/Carousal';

const RedBox = () => {
  return (
    <div style={{ backgroundColor: 'red', height: '200px' }}>
      {/* Content goes here */}
    </div>
  );
};


function App() {

  return (
    <>
      {/* <Appbar/> */}
      <Carousal/>
      {/* <Footer/> */}
    </>
  )
}

export default App
