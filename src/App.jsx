import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/ui/LoadingScreen';
import ParticleBackground from './components/ui/ParticleBackground';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Experience from './components/sections/Experience';
import Activities from './components/sections/Activities';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <ThemeProvider>
        <LoadingScreen onComplete={() => setLoading(false)} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300">
        <ParticleBackground />

        <Navbar />

        <main className="flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Activities />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
