import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
