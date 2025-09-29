import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
const Home = () => {
  console.log('saad',hero)
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />          
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;