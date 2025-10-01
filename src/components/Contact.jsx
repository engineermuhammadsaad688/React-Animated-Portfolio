import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>CONTACT</h1>
        <div className="contact-icon"
                         data-aos="zoom-in-up" 
              data-aos-duration="1000">
          <a href='https://Instagram.com'target="_blank" className="items"><FaInstagram className="icons"/></a>
          <a href='https://facebook.com' className="items"><CiFacebook className="icons"/></a>
          <a href='https://linkedin.com'target="_blank" className="items"><CiLinkedin className="icons"/></a>
          <a href='https://Twitter.com'target="_blank" className="items"><FaSquareXTwitter className="icons"/></a>
          <a href='https://GitHub.com'target="_blank" className="items"><FaGithubSquare className="icons"/></a>
          <a href="https://gmail.com" target="_blank" className="items"><SiGmail className="icons"/></a>

        </div>
      </div>
    </>
  )
}

export default Contact