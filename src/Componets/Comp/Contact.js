import React from 'react'
import Nav from './Nav'
import "../Css/Contact.css"
function Contact() {
  return (
    <>
    <Nav/>
    <div className='background'>
       <section className="location-section">
          <h2>Our Location</h2>
          <p>Moolekari Edupoint</p>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1536085925845!2d76.52981291049902!3d9.667913478621102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d5a166df6fcd%3A0x8d0db43d99acba97!2sMoolekary%20Finserve!5e0!3m2!1sen!2sin!4v1756020913490!5m2!1sen!2sin"    
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
        
    </div>
    </>
  )
}

export default Contact