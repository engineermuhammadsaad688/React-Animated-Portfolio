import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>

    </>
  )
}

export default App