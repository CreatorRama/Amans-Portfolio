import React, { useEffect } from 'react';
// Import the image properly - this is the React way to import assets
import profileImage from '../assets/pf-1.jpg';

const HeroSection = () => {
  // Function to create snowflakes and animate them
  useEffect(() => {
    const createSnowflakes = () => {
      const snowflakesContainer = document.getElementById('snowflakes-container');
      if (!snowflakesContainer) return;
      
      // Clear existing snowflakes
      snowflakesContainer.innerHTML = '';
      
      // Create 100 snowflakes
      const snowflakeCount = 1000;
      
      for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        
        // Randomize snowflake properties
        const size = Math.random() * 4 + 2; // Size between 2-6px
        const startPositionX = Math.random() * 100; // Random horizontal position
        const fallDuration = Math.random() * 10 + 5; // Fall duration between 5-15s
        const fallDelay = Math.random() * 5; // Delay start between 0-5s
        const opacity = Math.random() * 0.5 + 0.2; // Opacity between 0.2-0.7
        
        // Apply styles to snowflake
        snowflake.className = 'snowflake';
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startPositionX}%`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDuration = `${fallDuration}s`;
        snowflake.style.animationDelay = `${fallDelay}s`;
        
        // Add snowflake to container
        snowflakesContainer.appendChild(snowflake);
      }
    };
    
    // Initial creation of snowflakes
    createSnowflakes();
    
    // Recreate snowflakes on window resize
    window.addEventListener('resize', ()=>{
      createSnowflakes()

    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', createSnowflakes);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 10% 20%, rgb(238, 240, 255) 0%, rgb(250, 245, 255) 44.7%, rgb(244, 255, 251) 100.7%)',
      }}
    >
      {/* Snowflakes Container */}
      <div 
        id="snowflakes-container" 
        className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      ></div>
      
      {/* Snowflake and Gradient Animation CSS */}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        .snowflake {
          position: absolute;
          top: -10px;
          border-radius: 50%;
          background-color: blue;
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
          animation: snowfall linear infinite;
          animation-fill-mode: forwards;
          --opacity: 0.1;
        }
        
        @keyframes gradientRotation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes borderRotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .profile-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .animated-border {
          position: absolute;
          inset: -10px;
          background: linear-gradient(45deg, #4f46e5, #8b5cf6, #ec4899, #4f46e5);
          background-size: 300% 300%;
          border-radius: 50%;
          animation: gradientRotation 3s ease infinite, borderRotation 6s linear infinite;
          z-index: -1;
        }
      `}</style>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply opacity-40 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-100 rounded-full mix-blend-multiply opacity-50 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content - Text */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm backdrop-blur-sm bg-opacity-80">
              Full-Stack Developer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                Aman Pandey
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              I build exceptional and accessible digital experiences for the web. Focused on creating products that are both functional and beautiful.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md font-medium hover:shadow-lg hover:translate-y-px"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-gray-300 bg-white bg-opacity-50 backdrop-blur-sm text-gray-700 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors font-medium hover:shadow-md"
              >
                Contact Me
              </a>
            </div>
            
            <div className="pt-6 flex items-center gap-6">
              {/* Social Icons */}
              <a href="https://github.com/CreatorRama" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="www.linkedin.com/in/aman-pandey-237728259" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/AmanPandey_1Ram" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="relative order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            {/* Available for work badge - moved outside the image container and positioned at the top */}
            <div className="absolute -right-4 -top-10 bg-white shadow-lg rounded-lg px-3 py-2 flex items-center gap-2 backdrop-blur-sm bg-opacity-90 border border-gray-100 z-20">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-300 rounded-full opacity-40 blur-2xl"></div>
            
            {/* Profile image with enhanced styling and animated gradient */}
            <div className=" z-10">
              <div className="w-64 h-64 md:w-80 md:h-80  rounded-full shadow-2xl relative">
                {/* Animated gradient border */}
                <div className="animated-border"></div>
                
                {/* Image container */}
                <div className="profile-image-container p-0.5">
                  <div className="bg-white rounded-full h-full w-full overflow-hidden">
                    {/* Using the imported image variable */}
                    <img 
                      src={profileImage} 
                      alt="Aman Pandey"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x400?text=Aman+Pandey";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;