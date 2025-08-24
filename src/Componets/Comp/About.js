import React from "react";
import "../Css/About.css"; // import css file
import Nav from "./Nav";
function About() {
  return (
    <>
    <Nav/>
    <section className="about-section">
      
      <div className="about-container">
        
        {/* Left Content */}
        <div className="about-content">
          <h2 className="about-heading">Founder</h2>
          <p className="about-text">
            "Education is not just about knowledge, it is about building confidence, values, 
            and a vision for the future. At our academy, we are committed to guiding young minds 
            and preparing them for tomorrow’s challenges with care and dedication."
          </p>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={require("../Images/founder.jpeg")} alt="About us" />
        </div>
      </div>

      <div className="about-container">
        {/* left Image */}
        <div className="about-image1">
          <img src={require("../Images/mobile1.png")} alt="About us" />
        </div>
        {/* right Content */}
        <div className="about-content">
          <h2 className="about-heading">About us</h2>
          <p className="about-text">
            We are passionate about delivering high-quality courses and learning 
            experiences. Our mission is to empower learners by providing accessible 
            and practical knowledge for real-world applications.
          </p>
        </div>
        <div className="about-image2">
          <img src={require("../Images/mobile1.png")} alt="About us" />
          </div>
        </div>
      <div className="about-container">
        
        {/* Left Content */}
        <div className="about-content">
          <h2 className="about-heading">Why us?</h2>
          <p className="about-text">
            We are passionate about delivering high-quality courses and learning 
            experiences. Our mission is to empower learners by providing accessible 
            and practical knowledge for real-world applications.
          </p>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={require("../Images/home.png")} alt="About us" />
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
