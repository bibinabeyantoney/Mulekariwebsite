import React from 'react'
import Nav from './Nav'
import "../Css/Home.css"
import Whatsup from './Whatsup'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="home-content">
          <h1>Craving Future For the Young</h1>
          <p>With 10 Years of Excellence in PTE Training</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary">Explore Courses</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
      <Whatsup />
    </>
  )
}

export default Home
