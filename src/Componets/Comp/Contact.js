import React from 'react'
import Nav from './Nav'
import "../Css/Contact.css"
import Whatsup from './Whatsup'
function Contact() {
  return (
    <>
    <Nav/>
    <div className='background'>
       <section className="location-section">
          <h2>Our Location</h2>
          <p className='address'>Moolekary Edupoint</p>
          <div className="map-container">
            <iframe 
            title='Moolekary Edupoint location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1536085925845!2d76.52981291049902!3d9.667913478621102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d5a166df6fcd%3A0x8d0db43d99acba97!2sMoolekary%20Finserve!5e0!3m2!1sen!2sin!4v1756020913490!5m2!1sen!2sin"    
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            allowFullScreen
            >
            </iframe>
          </div>
        </section>
      <aside className='contact-info'>
        <div className='contact-details'>
        <p>Email :</p><a href='mailto:moolekaryedupoint@gmail.com'> moolekaryedupoint@gmail.com</a>
        <p>Phone :</p><a href='tel:+916956843633'>+91 6956843633</a>
        </div>
      </aside>
    </div> 
    <Whatsup/>
    </>
  )
}

export default Contact