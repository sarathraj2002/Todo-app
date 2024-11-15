import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>}>Home</Route>
      </Routes>
    </>
  )
}

export default App
