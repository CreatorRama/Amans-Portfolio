import React from 'react';

const SkillsSection = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 88 },
        { name: "React", proficiency: 85 },
        { name: "NextJs", proficiency: 75 },
        { name: "Tailwind CSS", proficiency: 80 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", proficiency: 82 },
        { name: "Express", proficiency: 78 },
        { name: "MongoDB", proficiency: 75 },
        { name: "Flask", proficiency: 75 },
        { name: "SQL", proficiency: 70 },
        { name: "Firebase", proficiency: 72 }
      ]
    },
    {
      name: "Other",
      skills: [
        { name: "Git", proficiency: 88 },
        { name: "java", proficiency: 60 },
        { name: "c++", proficiency: 70 },
        { name: "DSA", proficiency: 70 }
      ]
    }
  ];

  // Function to render stars based on proficiency
  const renderSkillLevel = (proficiency) => {
    const fullStars = Math.floor(proficiency / 20);
    const hasHalfStar = proficiency % 20 >= 10;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Skill card component
  const SkillCard = ({ skill }) => (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
        {renderSkillLevel(skill.proficiency)}
      </div>
      <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-purple-600 h-2.5 rounded-full" 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id='skills' className="py-16 relative"
      style={{
        background: 'radial-gradient(circle at center, #7e22ce, #a855f7, #6b21a8)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-white text-center max-w-2xl mx-auto opacity-90">
            I've developed expertise in various technologies and tools.
            Here's an overview of my technical skillset.
          </p>
        </div>
        
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-white mb-6 relative pl-4 border-l-4 border-white">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Working Tools & Environment</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["VS Code", "GitHub", "NPM", "Vite", "ESLint", "Chrome DevTools","Debuggers"].map((tool, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              >
                <span className="text-gray-800 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;