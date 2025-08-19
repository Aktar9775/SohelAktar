import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Download } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';
import Sponsor from './Sponsor';
const sponsorsData = [
  { name: "Lian Softwares", logo: "/lian.png", },

];
const Hero: React.FC = () => {
  const { data } = useSiteData();
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const texts = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast',];

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
    <section id="home" className="min-h-screen relative flex  overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black  to-gray-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] "></div>
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
            <div className="w-2 h-2 bg-slate-400 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      <div className="relative text-center px-4 max-w-7xl mx-auto">


        <div className="flex items-center gap-x-4 h-16">
          <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
          <div className="flex-shrink-0">
            <button className="text-xl font-bold text-white hover:text-yellow-400 transition-colors">

              Portfolio
            </button>
          </div>
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">


          <div className="flex flex-col gap-4 ">
            <div className="text-white px-2 py-4">
              <span className="block text-left sm:text-base md:text-lg lg:text-xl xl:text-2xl ">Hi 👋 I'm</span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent block">
                {data.personal.name}
              </span>

              <p className="text-gray-400 text-center text-md">{currentText} |</p>
            </div>

            <div className="text-white px-4 py-5 rounded-2xl bg-gray-950 shadow-sm shadow-emerald-50 hover:scale-105 transition-transform duration-300 text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-3">
              <a href="https://github.com/Aktar9775" target="_blank" rel="noopener noreferrer">
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                />
              </a>
              <a href="https://www.linkedin.com/in/sohel-aktar-31552a27b/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/likin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                />
              </a>
              <a href="mailto:sohelaktar9775.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/gmail.png"
                  alt="Gmail"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                />
              </a>
            </div>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-3">Connect</p>
            </div>


            <div className="text-white px-1 p-2 rounded-2xl bg-black shadow-md hover:scale-105 transition-transform duration-300 text-center">
              <div className="flex items-center justify-center gap-2 mt-1">
                <img src="/world.png" alt="Location" className="w-8 h-8" />
                <span className="text-white text-lg">Delhi, India</span>
              </div>


            </div>
          </div>


          <div className="flex justify-center">
            <img
              src={data.personal.avatar}
              alt={data.personal.name}
              className="w-40 h-48 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-3xl border-2 shadow-lg hover:scale-105 transition-transform duration-300 shadow-yellow-50 object-cover"
            />

          </div>


          <div className="flex flex-col gap-2">


            <div className="text-white p-4 rounded-2xl bg-black shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <span className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent block text-center">
                  11+
                </span>
                <p className="text-gray-400 text-center sm:text-xl">Self Initiated Projects</p>
              </div>
              <div className="flex justify-center gap-5 mt-3">
                <img src="/github.png" alt="GitHub" className="w-10 h-10 rounded-full p-1" />
                <img src="/logo.png" alt="DevOps" className="w-10 h-10 rounded-full p-1" />
                <img src="/docker.png" alt="Kubernetes" className="w-10 h-10 rounded-full p-1" />
              </div>
            </div>


            <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
              <div className="text-white px-2 p-2 rounded-2xl bg-gray-950 text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">2+</span>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">Experience</p>
              </div>

              <div className="text-white px-2 p-3 rounded-2xl bg-black text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">1+</span>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">Sponsor</p>
              </div>

              <div className="text-white px-2 p-2 rounded-2xl bg-gray-950 text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">Coming..</span>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">Blogs</p>
              </div>

              <div className="text-white px-2 p-2 rounded-2xl bg-gray-950 text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">2+</span>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">Works</p>
              </div>
            </div>


          </div>



          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">

            <button
              onClick={() => alert("Subscribed!")} // Replace with subscribe logic
              className="inline-flex items-center  justify-center p-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔔 Subscribe
            </button>
            <div className="text-white rounded-2xl bg-gray-950 shadow-sm shadow-emerald-50 p-4 hover:scale-105 transition-transform duration-300">
              {/* Qualifications */}
              <p className="text-gray-400 text-center text-xl p-2">🎓 Qualifications</p>
              <hr />
              <span className="md:text-xl sm:text-sm  font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent block text-center mb-4">
                UGC Net Qualified<br />MCA<br />BCA<br />
              </span>


            </div>

            <div className="flex items-center justify-center gap-4">

              {/* Get in Touch */}
              <a
                href={`mailto:${data.personal.email}`}
                className=" flex-1 inline-flex items-center  justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>

              {/* Download Resume */}
              {/* <a
                href={data.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex-1 inline-flex items-center  justify-center p-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a> */}

              {/* Subscribe */}

            </div>
          </div>






        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-5">
          {/* <div className="text-white p-4 rounded-2xl bg-black opacity-60 ">
            <h2 className='text-4xl font-bold text-yellow-400'>ABOUT</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto  leading-relaxed">
              {data.personal.bio}
            </p>
          </div> */}
          <div className="text-white p-4 rounded-2xl bg-black text-center">
            <h2 className="text-4xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "/react.png",
                "/nodejs.png",
                "/C++.png",
                "/html.png",
                "/Javascr.png",
                "/css.png",
                "/tailwind.png",
                "/bootstap.png",
                "/mongo.png",
                "/mysql.png",
                "/fire.png",
                "/github.png",
                "/kafka.png",
                "/logo.png",
                "/docker.png",
                "/git.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Skill Logo"
                  className="w-12 h-12 rounded-full p-1 bg-gray-800 hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>


        </div>



        {/* Ideas */}
        <div className="grid grid-rows-1 mt-2 text-white  rounded-2xl ">
          <h2 className='text-2xl font-bold text-white mb-2'>Have an idea in your mind ?🤔Contact us</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto  leading-relaxed">

          </p>

        </div>


        <Sponsor sponsors={sponsorsData} />

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