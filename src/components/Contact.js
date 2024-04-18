import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div>
      <Navbar/>
        <div className="contact-box">
          <form>
            <input type="text" className="input-field" placeholder="Your Name" />
            <input type="email" className="input-field" placeholder="Your Email" />
            <input type="text" className="input-field" placeholder="Subject" />
            <p style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", paddingTop: '15px', paddingBottom: '0px', color: 'rgb(0, 50, 54)', fontWeight: 'bold' }}>What do you think about me?</p>
            <textarea className="input-field textarea-field" placeholder="Your Message" />
            <button type="button" className="btn">Send Message</button>
          </form>
        </div>
        <div className="contact_info">
          <h1 style={{ fontSize: '60px', fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>Let's get in<span> touch</span></h1>
          <p style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>Feel free to get in touch with me through Instagram, Twitter, or LinkedIn</p>
        </div>
        <div className="logo2">
          <ul>
            <li><Link to="https://www.instagram.com/keerthan.sundar/" target="_blank"><img src="images/insta.svg" alt="instagram.svg" style={{ position: 'absolute', width: '50px', bottom: '85px', left: '200px' }} /></Link></li>
            <li><Link to="https://twitter.com/home?lang=en" target="_blank"><img src="images/twitter.svg" alt="twitter.svg" style={{ position: 'absolute', width: '50px', bottom: '85px', left: '270px' }} /></Link></li>
            <li><Link to="https://www.linkedin.com/in/keerthan-sundar-08560a258/" target="_blank"><img src="images/linked in.svg" alt="linked_in.svg" style={{ position: 'absolute', width: '50px', bottom: '85px', left: '340px' }} /></Link></li>
          </ul>
        </div>
        <div className="person_1">
          <img src="images/person1.svg" alt="person_1.svg" style={{ width: '200px', position: 'absolute', top: '550px', right: '90px', transform: 'rotateY(180deg)' }} />
        </div>
    </div>
  );
}

export default ContactPage;
