import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Technologies />
    </div>
  );
}

export default App;
