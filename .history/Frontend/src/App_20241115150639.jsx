import { useState } from 'react'
// import Routes from 
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
