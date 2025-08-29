import React from 'react'
import "../Css/Nav.css";
import {NavLink} from 'react-router-dom'
import { FaHome, FaInfoCircle, FaBook, FaPhone } from "react-icons/fa";
function Nav() {

  return (
    <>
    <nav className='top-nav'>
            <div className='logo'>Moolekary Edupoint</div>
                <ul className='nav-links'>
                    <li><NavLink to='/' end>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>    
    </nav>
    <div className='logo-mobile'><h4>Moolekary Edupoint</h4></div>
    <div className="bottom-nav">
      <ul>
        <li><NavLink to='/' end><FaHome /></NavLink></li>
        <li><NavLink to='/about'><FaInfoCircle/></NavLink></li>
        <li><NavLink to='/courses'><FaBook/></NavLink></li>
        <li><NavLink to='/contact'><FaPhone/></NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default Nav