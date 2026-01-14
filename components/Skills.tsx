import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-end">
              TECHNICAL ARSENAL
              <span className="w-12 h-1 bg-neon-purple ml-4"></span>
            </h2>
            <p className="text-right text-gray-400 max-w-xl ml-auto">
                Tools and technologies I utilize to bring ideas to life.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill) => (
                <div key={skill.name} className="glass-panel p-6 rounded-sm hover:border-neon-blue/40 transition-colors duration-300">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-mono text-white">{skill.name}</h3>
                        <span className="text-xs text-neon-blue border border-neon-blue/30 px-2 py-1 rounded bg-neon-blue/10">
                            {skill.category}
                        </span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple" 
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                    <div className="mt-2 text-right">
                        <span className="text-xs text-gray-500 font-mono">{skill.level}% MASTERY</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;