import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PipelineRail from '../components/layout/PipelineRail';
import Hero from '../components/sections/Hero/Hero';
import Projects from '../components/sections/Projects/Projects';
import Skills from '../components/sections/Skills/Skills';
import About from '../components/sections/About/About';
import Education from '../components/sections/Education/Education';
import Contact from '../components/sections/Contact/Contact';

/**
 * Home Component
 *
 * Composes all portfolio sections in pipeline order: Hero → Projects →
 * Skills → About → Education → Contact.
 */
function Home() {
  return (
    <>
      <Header />
      <PipelineRail />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
