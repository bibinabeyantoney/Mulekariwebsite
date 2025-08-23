import React from 'react'
import Nav from './Nav'
import '../Css/About.css'
function About() {
  return (
    <>
    <Nav/>
    <div className='about-section'>
    <div className='about'>
      <h2>About Us</h2>
      <h4>Welcome to [Your Institute Name], your trusted partner in achieving OET success.
          We specialize in helping healthcare professionals — including nurses, doctors, pharmacists, and
          dentists — confidently clear the Occupational English Test (OET) and take the next step toward their international career.</h4>
    </div>
    <div className='mission'>
      <h2>Our Mission</h2>
      <h4>Our mission is simple: to provide result-oriented OET training that builds confidence, 
          improves communication skills, and ensures success in the first attempt.</h4>
    </div>
    <div className='why-choose-us'>
    <h2>Why Choose Us?</h2>
    <h4>
      <ul>
      <li> Expert Trainers – Experienced OET instructors with proven success records.</li>
      <li> Personalized Coaching – Individual attention and tailored study plans.</li>
      <li> Flexible Learning – Online and offline classes to fit your schedule.</li>
      <li> Comprehensive Materials – Mock tests, practice resources, and feedback sessions.</li>
      </ul>
    </h4>
    </div>
    </div>
    </>
  )
}

export default About