import React from 'react';
import { motion } from 'motion/react';
import EffectsSection from '../components/EffectsSection';
import TobaccoTypes from '../components/TobaccoTypes';
import ScrollIndicator from '../components/ScrollIndicator';

const EffectsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <div className="relative py-32 px-4 md:px-8 text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter mb-6">
            Sự Thật <br/><span className="text-rose-500 underline decoration-8 decoration-rose-500/30 underline-offset-8">Kinh Hoàng</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium tracking-tight mb-12">
            Thuốc lá không chỉ là khói, nó là một tổ hợp của <span className="text-white font-bold italic">7,000+ hóa chất</span> đang hủy hoại bạn từng giây.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/5 h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop" 
                alt="Lung health impact" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/5 h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop" 
                alt="Heart health impact" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <ScrollIndicator targetId="effects-content" color="text-slate-500" className="mt-12" />
        </div>
      </div>
      <div id="effects-content" className="bg-white rounded-t-[60px] shadow-2xl relative z-20">
        <EffectsSection />
        <div className="flex justify-center bg-white pb-16">
          <ScrollIndicator targetId="tobacco-types" color="text-slate-400" />
        </div>
        <div id="tobacco-types" className="bg-slate-50 py-32 rounded-t-[60px]">
          <TobaccoTypes />
        </div>
      </div>
    </div>
  );
};

export default EffectsPage;
