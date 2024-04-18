import Navbar from "./Navbar";
import React from 'react';
import '../App.css'; 
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
    <Navbar/>
    <div className="my_project">
      <h1>My Projects</h1>
    </div>
      <div className="div_1">
        <Link
          to="https://keerthansundar.github.io/Drum-kit-game/"
          style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}
          target="_blank"
        >
          Drum-kit-game
        </Link>
      </div>

      <div className="div_2">
        <Link
          to="https://keerthansundar.github.io/Simon-game/"
          style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}
          target="_blank"
        >
          Simon-game
        </Link>
      </div>

      <div className="div_3">
        <Link
          to="https://keerthansundar.github.io/Dice-game/"
          style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}
          target="_blank"
        >
          Dice-game
        </Link>
      </div>

      <div className="img_1">
        <Link to="https://keerthansundar.github.io/Drum-kit-game/" target="_blank">
          <img src="images/drum 1 1.svg" style={{ width: '200px', position: 'absolute', top: '390px', left: '320px' }} />
        </Link>
      </div>

      <div className="img_2">
        <Link to="https://keerthansundar.github.io/Simon-game/" target="_blank">
          <img src="images/Mask group.svg" style={{ width: '150px', position: 'absolute', top: '410px', left: '700px' }} />
        </Link>
      </div>

      <div className="img_3">
        <Link to="https://keerthansundar.github.io/Dice-game/" target="_blank">
          <img src="images/dice 1 1.svg" style={{ width: '130px', position: 'absolute', top: '400px', right: '230px' }} />
        </Link>
      </div>

      <button className="visit_1">
        <Link to="https://keerthansundar.github.io/Drum-kit-game/" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }} target="_blank">
          Visit
        </Link>
      </button>

      <button className="visit_2">
        <Link to="https://keerthansundar.github.io/Simon-game/" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }} target="_blank">
          Visit
        </Link>
      </button>

      <button className="visit_3">
        <Link to="https://keerthansundar.github.io/Dice-game/" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }} target="_blank">
          Visit
        </Link>
      </button>
    </>
  );
}

export default Project;
