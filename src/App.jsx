import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience/>
      </div>

    </>
  )
}

export default App