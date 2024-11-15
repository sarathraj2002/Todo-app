import { useState } from 'react'

import './App.css'
import Home from './components/Home'

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
