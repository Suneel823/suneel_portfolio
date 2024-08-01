import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="foot-er">
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">My Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
       <a href="https://www.linkedin.com/in/suneel-kumar-vulavala-1b8a382a8/"><FaLinkedin /></a>
       <a href="mailto:vulavalasuneelkumar823@gmail.com"><MdOutlineEmail/></a>
       <a href="https://github.com/Suneel823" target="_blank"><FaGithub />
      </a>
       
      </div>

      <div className="footer__copyright">
        <small>Copyright © 2024 Suneel kumar vulavala. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer