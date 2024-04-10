import { useState } from 'react'
import './App.css'
import Appbar from './components/Appbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Appbar/>
    </>
  )
}

export default App
