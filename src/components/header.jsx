import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({ repeat: -1 });

    const ctx = gsap.context(() => {
      // Select only the SVG inside the Header
      const headerSVG = headerRef.current.querySelector("svg");

      if (!headerSVG) return;

      tl.to(headerSVG, {
        rotation: 360,
        transformOrigin: "center",
        duration: 2,
        ease: "power2.inOut",
      });

      // Step 2: Zoom In (Change viewBox)
      tl.to(headerSVG, {
        attr: { viewBox: "193 -744 530 616" },
        duration: 2,
        ease: "power2.inOut",
      });

      // Step 3: Zoom Out (Return to original viewBox)
      tl.to(headerSVG, {
        attr: { viewBox: "0 -960 960 960" },
        duration: 2,
        ease: "power2.inOut",
      });

      // Animate Gradient Colors
      gsap.to("#gradientStop1", {
        stopColor: "green",
        duration: 2,
        repeat: -1,
        yoyo: true,
      });

      gsap.to("#gradientStop2", {
        stopColor: "yellow",
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
    }, headerRef);

    return () => ctx.revert(); // Cleans up GSAP on unmount
  }, []);

  return (
    <header ref={headerRef} className="fixed w-full top-0 z-50 bg-stone-950 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" width="28px" viewBox="0 -960 960 960">
              <defs>
                <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                  <stop id="gradientStop1" offset="0%" stopColor="blue" />
                  <stop id="gradientStop2" offset="100%" stopColor="lightblue" />
                </radialGradient>
              </defs>
              <path
                d="M256-240h84l44-122h192l44 122h84L522-720h-84L256-240Zm152-192 70-198h4l70 198H408ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0-640v640-640Z"
                fill="url(#radialGradient)"
              />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-indigo-600 font-medium transition-colors">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-indigo-600 font-medium transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-indigo-600 font-medium transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-600 font-medium transition-colors">Contact</a>
          </nav>

            {/* Mobile Menu */}
            <button 
            className={`md:hidden relative top-2 right-2  ${!isMobileMenuOpen ? 'text-gray-300' : 'text-red-300'} ${
              isMobileMenuOpen ? 'z-40' : 'z-[60]'
            }`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white mt-4 rounded-lg shadow-lg p-4 absolute top-4 left-4 right-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#projects" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#skills" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                <a href="#contact" className="text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;