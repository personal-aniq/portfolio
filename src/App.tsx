import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-[#0a0e27] text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300 min-h-screen flex flex-col">
        <div className="bg-noise"></div>
        <Navigation scrollY={scrollY} />
        <main className="flex-grow">
          <Hero />
          <Journey />
          <Projects />
          <Capabilities />
          <Impact />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
