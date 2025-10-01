import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
      strings: ["Welcome to my profile", "My Name is Saad Malik", "I'm Web Developer Full Stack Developer",
        "Androide Developer (React Native)"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="container home">
        <div className="left"
          data-aos='fade-up-right'
          data-aos-duration="1000">
          <h1 ref={typedRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
          <div className="img"
            data-aos='fade-up-left'
            data-aos-duration="1000"
            >
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;