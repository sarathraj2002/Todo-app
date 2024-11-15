import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}>Home</Route>
      </Routes>
    </>
  )
}

export default App
