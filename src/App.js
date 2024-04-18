import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes>    
      </BrowserRouter>
    </div>
  );
};

export default App;
