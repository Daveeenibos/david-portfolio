import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
              <span className="w-12 h-1 bg-neon-blue mr-4"></span>
              ABOUT ME
            </h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Hello! I'm David Jehuda. I'm an AI Engineer and IT specialist who combines the power of machine learning with an intuitive UI/UX approach. I build systems that are not only logically intelligent, but also user-friendly and visually aesthetic.
              </p>
              <p>
                As an AI Engineer and Information Technology expert, I am dedicated to transforming raw data into intelligent solutions that deliver real impact. With deep specializations in Data Analytics, Machine Learning, and Deep Learning, I build systems that are not only efficient but also adaptive. I believe that the power of technology lies in its ability to solve complex problems and optimize strategic decision-making processes.
              </p>
              <p>
                I continually explore the latest technologies to deliver efficient, solution-oriented intelligent systems. By combining the logic of Machine Learning with the creativity of UI/UX Design and Photography, I bridge the gap between technical functionality and visual experience, producing products that are both sophisticated and user-friendly.              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 font-mono text-sm">
              <div>
                <span className="block text-gray-500 mb-1">LOCATION</span>
                <span className="text-white">Ambon, Indonesia</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">EXPERIENCE</span>
                <span className="text-white">5+ Years</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">AVAILABLE FOR</span>
                <span className="text-white">Freelance & Full-time</span>
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-neon-purple/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-4 border border-neon-blue/30 rounded-full"></div>
                
                {/* Image Placeholder */}
                <div className="absolute inset-8 rounded-full overflow-hidden bg-gray-800 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                        src="profil_david.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
                
                {/* Orbiting Element */}
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_15px_#00f3ff] -translate-x-1/2 -translate-y-2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;