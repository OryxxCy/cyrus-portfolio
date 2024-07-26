import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills/>
      <Projects />
      <Background/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
