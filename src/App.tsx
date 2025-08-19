import React, { useState } from 'react';
import { SiteProvider } from './context/SiteContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Sponsor from './components/Sponsor';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  // Toggle admin panel with Ctrl+Shift+A
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'Z') {
        setShowAdmin(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SiteProvider>
      <div className="min-h-screen">
        {showAdmin ? (
          <>
            <div className="fixed top-4 right-4 z-50">
              <button
                onClick={() => setShowAdmin(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Exit Admin
              </button>
            </div>
            <Admin />
          </>
        ) : (
          <>
            {/* <Navigation /> */}
            <main>
              <Hero />
              {/* <Sponsor sponsors={sponsorsData}/> */}
              <Work />
              <Blog />
              <About />
              <Contact />
            </main>
            
            {/* Footer */}
            <footer className="bg-gray-900 text-center py-8">
              <div className="max-w-7xl mx-auto px-4">
                <p className="text-gray-400">
                  © 2025 Sohel Aktar. Portfolio
                </p>
                {/* <p className="text-gray-500 text-sm mt-2">
                  Press Ctrl+Shift+A to access admin panel
                </p> */}
              </div>
            </footer>
          </>
        )}
      </div>
    </SiteProvider>
  );
}

export default App;