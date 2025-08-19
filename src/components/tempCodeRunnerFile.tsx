import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, MapPin, Download } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

const Hero: React.FC = () => {
  const { data } = useSiteData();
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const texts = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, textIndex, isDeleting, texts]);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //  useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > 50);
  //     };
  
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);
  
  //   const scrollToSection = (sectionId: string) => {
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //       setIsOpen(false);
  //     }
  //   };
  

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900  to-gray-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-slate-600 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>
        
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center gap-x-4 h-16">
            <div className="w-10 h-10 bg-yellow-400 rounded-full">
            
           </div>
           <div className="flex-shrink-0">
            <button
              // onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-white hover:text-yellow-400 transition-colors"
            >
              {data.personal.name}
            </button>
          </div>
           </div>
        <div className="mb-8">
          <img
            src={data.personal.avatar}
            alt={data.personal.name}
            className="w-70 h-80 rounded-md mt-10 border-2 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          
        </div>
         <h5 className="text-4xl gap-x-6 text-white mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {data.personal.name}
          </span>
        </h5>
        

       

        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-8 h-12">
          <span>{currentText}</span>
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {data.personal.bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href={`mailto:${data.personal.email}`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
          
          <a
            href={data.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{data.personal.location}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToWork}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;