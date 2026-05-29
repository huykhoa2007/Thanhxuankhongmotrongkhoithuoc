import React from 'react';
import { motion } from 'motion/react';
import QuitBenefits from '../components/QuitBenefits';
import ScrollIndicator from '../components/ScrollIndicator';

const BenefitsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <div className="relative py-32 px-4 md:px-8 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 shadow-xl shadow-blue-500/20">
            Hồi sinh cơ thể
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter mb-6">
            Tuyên Truyền <br/><span className="text-blue-500 underline decoration-8 decoration-blue-500/30 underline-offset-8">Sức Khỏe</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed mb-12">
            Mỗi phút không có khói thuốc là một phút <span className="text-white italic">sự sống đang quay trở lại</span>. Cơ thể bạn có khả năng tự chữa lành kỳ diệu.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" 
              alt="Healthy lifestyle and recovery" 
              className="w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <ScrollIndicator targetId="benefits-content" color="text-slate-500" className="mt-12" />
        </div>
      </div>
      
      <div id="benefits-content" className="bg-white rounded-t-[80px] relative z-20 shadow-2xl">
        <QuitBenefits />
      </div>
    </div>
  );
};

export default BenefitsPage;
