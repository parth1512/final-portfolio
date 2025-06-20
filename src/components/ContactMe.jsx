import React from 'react'
import './ContactMe.css'
import Gradient from '../assets/imgs/Gradient.png'

const ContactMe = () => {
  return (
    <div>
      <div className="Banner">
        <h1>GET IN TOUCH</h1>
        <p><span>I'd love to hear from you!</span> Whether you have a project in mind, want to collaborate, or just<br></br> want to say hi, feel free to reach out.</p>
        </div>
        <div className="footer">
        <h2>CONTACT</h2>
        <ul className="footer-list">
            <li className="footer-item">
                <a href="mailto:parthjadhav1512@gmail.com?subject=Your Subject&body=Your Message" >Mail</a>
            </li>
            <li>
                <a href="https://linkedin.com/in/parthjadhav2004" target="_blank">Linkedin</a>
            </li>
            <li>
                <a href="https://github.com/parth1512" target="_blank" >Github</a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1mo9VIKRnIMWIb6G-yQLHN_MiG6hHmTfW/view?usp=sharing"target="_blank">Resume</a>
            </li>
        </ul>

        <div className="gradeient">
            <img src={Gradient} alt="Gradient" />
        </div>
        
       

      </div>
      <div className="review-text">
        <h2 className="review">Thanks for review</h2>
        <p className="text">@2025 Parth's Portfolio All Rights Reserved</p>
        </div>
    </div>
  )
}

export default ContactMe
