import React from 'react';
import '../App.css'; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar/>
      <div className="intro">
        <p className="line0" style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Bonjour, I'm </p>
        <p className="line1" style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Keerthan</p>
        <div className="animation_body">
          <div className="wrapper" style={{ paddingTop: '10px'}}>
            <div className="static-txt">And I'm a</div>
            <ul className="dynamic-txts">
              <li><span>Student</span></li>
              <li><span>Front-End Developer</span></li>
              <li><span>Designer</span></li>
            </ul>
          </div>
        </div>
      </div>

      <button className="button1"><Link to="/projects" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}>View Work</Link></button>
      <button className="button2"><Link to="/contact" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}>Hire Me</Link></button>

      <div className="logo">
        <ul>
          <li><a href="https://www.instagram.com/keerthan.sundar/" target="_blank" rel="noopener noreferrer"><img src="images/insta.svg" alt="instagram.svg" style={{ position: 'absolute', width: '50px', bottom: '120px', right: '340px' }} /></a></li>
          <li><a href="https://twitter.com/home?lang=en" target="_blank" rel="noopener noreferrer"><img src="images/twitter.svg" alt="twitter.svg" style={{ position: 'absolute', width: '50px', bottom: '120px', right: '270px' }} /></a></li>
          <li><a href="https://www.linkedin.com/in/keerthan-sundar-08560a258/" target="_blank" rel="noopener noreferrer"><img src="images/linked in.svg" alt="linked_in.svg" style={{ position: 'absolute', width: '50px', bottom: '120px', right: '200px' }} /></a></li>
        </ul>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/keerthan-sundar-08560a258/" target="_blank" rel="noopener noreferrer"><img src="images/photo-1.png" alt="keerthan.png" style={{ borderRadius: '50%', width: '400px', position: 'absolute', top: '200px', left: '80px', boxShadow: '0 0 50px #0ef' }} /></a>
      </div>
    </>
  );
}

export default Home;
