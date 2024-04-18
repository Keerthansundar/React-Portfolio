import React from 'react';
import '../App.css'; 
import Navbar from './Navbar';

function AboutMe() {
  return (
    <>
        <Navbar/>
      
      <div className="about_me">
        <h1>About Me</h1>
      </div>

      <div className="about_me_info">
        <div className="wrapper" style={{ paddingTop: '5px', fontSize: '25px' }}>
          <div className="static-txt" style={{ paddingTop: '5px', fontSize: '25px' }} >I'm Keerthan and I'm a</div>
          <ul className="dynamic-txts2">
            <li><span>Student</span></li>
            <li><span>Front-End-Developer</span></li>
            <li><span>Designer</span></li>
          </ul>
        </div>
      </div>

      <div className="about_me_text">
        <p>
          Hello, I'm an 18-year-old computer science engineering student from India.
          I have pursued my BTech in CSE at Vellore Institute Of Technology, Vellore.
          I have been programming since 2022 and I absolutely love it. I have very good knowledge about
          coding and programming, and I have also participated in a few hackathons. I have learned Figma and have
          designed a few web pages, posters, and many more for my college clubs and also for my own projects.
          I am also into development. In addition to being completely aligned towards programming, I head on to
          challenge myself to learn and improve my skills every day.
        </p>
      </div>

      <div className="programming_img">
        <img src="/images/keerthan3.png" style={{ width: '300px', position: 'absolute', bottom: '70px', right: '300px',top:'100px' }} alt="Keerthan" />
      </div>
    </>
  );
}

export default AboutMe;
