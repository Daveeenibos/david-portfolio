import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Pattimura",
      location: "Ambon, Indonesia",
      period: "2022 - 2026",
      description: "Focused on AI Engineering and Web Development. Graduated with honors.",
      achievements: [
        "GPA: 3.74/4.0",
        "Best Final Project Award",
        "Active member of Programming Club"
      ]
    },
    {
      degree: "Full Stack Web Development",
      institution: "Online Bootcamp",
      location: "Remote",
      period: "2019",
      description: "Intensive program covering modern web technologies and frameworks.",
      achievements: [
        "Built 10+ production-ready projects",
        "Specialized in React & Node.js ecosystem"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-dark-card relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center justify-center">
          <span className="w-12 h-1 bg-neon-purple mr-4"></span>
          EDUCATION
          <span className="w-12 h-1 bg-neon-purple ml-4"></span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="relative border border-gray-800 rounded-lg p-8 hover:border-neon-purple/50 transition-all duration-300 group bg-dark-bg/50"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-neon-purple rounded-full border-4 border-dark-card group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-neon-blue font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-mono border border-neon-purple/30">
                    {edu.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start text-gray-400 text-sm">
                    <span className="text-neon-blue mr-2 mt-1">▹</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;