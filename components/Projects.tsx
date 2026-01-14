import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
       {/* Background noise texture opacity */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="text-neon-blue font-mono text-xl block mb-2">001 // PORTFOLIO</span>
            FEATURED WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
                <div key={project.id} className="group relative">
                    {/* Card Container */}
                    <div className="relative overflow-hidden bg-gray-900 border border-white/10 aspect-video transition-transform duration-500 group-hover:-translate-y-2">
                        {/* Image */}
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-neon-blue transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-gray-300 bg-white/10 px-2 py-1">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:text-neon-blue transition-colors">
                                View Project 
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Decorative Corner Borders */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;