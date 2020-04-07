import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="allContainer">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
