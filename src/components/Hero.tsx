import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Cloud Architect',
    'IoT Platform Leader',
    'DevOps Engineer',
    'Product Strategist',
    'Infrastructure Innovator'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden bg-gray-50 dark:bg-[#0a0e27] transition-colors duration-300">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-fade-in">
          <span className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase font-light">
            Director IoT & Infrastructure
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 opacity-0 animate-fade-in-delay-1 text-gray-900 dark:text-white">
          Aniq ur Rahman
        </h1>

        <div className="h-20 mb-12 flex items-center justify-center opacity-0 animate-fade-in-delay-2">
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light">
            {roles[currentRole]}
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 opacity-0 animate-fade-in-delay-3">
          Building intelligent infrastructure at the intersection of firmware, cloud, and product.
          <br />
          Transforming complex systems into elegant solutions that scale.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 text-gray-900 dark:text-white rounded-full transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#journey"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-gray-400 dark:text-gray-500" size={32} />
      </a>
    </section>
  );
}
