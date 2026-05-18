import React from 'react';
import { motion } from 'motion/react';
import LegalSection from '../components/LegalSection';
import ScrollIndicator from '../components/ScrollIndicator';

const LegalPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="relative py-24 px-4 md:px-8 text-center overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),transparent_70%)]" />
        </div>
        
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase tracking-tighter mb-8 leading-none"
          >
            Luật Phòng Chống <br/><span className="text-slate-500 underline decoration-8 decoration-slate-200 underline-offset-8">Tác Hại</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-xl font-medium mb-12"
          >
            Tìm hiểu về quyền và nghĩa vụ của công dân trong việc xây dựng môi trường không khói thuốc bền vững.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop" 
              alt="Justice and Law" 
              className="w-full h-[350px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <ScrollIndicator targetId="legal-content" className="mt-12" />
        </div>
      </div>
      <div id="legal-content" className="relative z-20 -mt-10">
        <LegalSection />
      </div>
    </div>
  );
};

export default LegalPage;
