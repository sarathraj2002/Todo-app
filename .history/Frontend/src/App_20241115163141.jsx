import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/Home' element={<H/>}></Route>
      </Routes>
    </>
  )
}

export default App
