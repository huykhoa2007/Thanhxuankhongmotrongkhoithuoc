import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingShapes from './FloatingShapes';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-100 selection:text-rose-900 flex flex-col relative overflow-hidden">
      {/* Page Load Progress Bar */}
      <motion.div 
        key={pathname}
        initial={{ width: 0, opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-1 bg-school-green z-[100] pointer-events-none"
      />

      <FloatingShapes />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
