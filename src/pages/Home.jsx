import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero/Hero';
import About from '../components/sections/About/About';
import Projects from '../components/sections/Projects/Projects';
import Skills from '../components/sections/Skills/Skills';
import Education from '../components/sections/Education/Education';
import Contact from '../components/sections/Contact/Contact';

/**
 * Home Component
 * 
 * Main page component that composes all portfolio sections.
 * Uses semantic HTML structure with proper landmark elements.
 * 
 * @returns {JSX.Element} The complete portfolio page structure
 */
function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
