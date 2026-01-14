import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animation-delay-2000 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <p className="text-neon-blue font-mono mb-4 tracking-widest uppercase text-sm">
            &lt; System Online /&gt;
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            BUILDING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              DIGITAL FUTURE
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            I craft minimalist, high-performance web experiences using cutting-edge technologies. 
            Bridging the gap between design and engineering.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-wider hover:bg-neon-blue hover:text-white transition-all duration-300 w-full md:w-auto text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/20 text-white font-mono font-bold uppercase tracking-wider hover:border-neon-blue hover:text-neon-blue transition-all duration-300 w-full md:w-auto text-center backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-xs font-mono text-gray-500 mb-2">SCROLL</span>
        <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;