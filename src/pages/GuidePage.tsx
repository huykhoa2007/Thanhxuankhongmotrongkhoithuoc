import React from 'react';
import { motion } from 'motion/react';
import QuittingGuide from '../components/QuittingGuide';
import ScrollIndicator from '../components/ScrollIndicator';

const GuidePage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0c10]">
      <div className="relative py-32 md:py-48 px-4 md:px-8 text-center overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-amber-400">
            <span className="w-2 h-2 bg-slate-950 rounded-full animate-ping" />
            Lộ trình tái sinh
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter mb-8 leading-[0.85]">
            Bản Đồ <br/><span className="text-amber-500 drop-shadow-[0_0_40px_rgba(245,158,11,0.4)]">Tự Do</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed mb-12">
            Hành trình cai nghiện không phải là cuộc chiến, <br className="hidden md:block" /> 
            mà là quá trình <span className="text-white italic underline decoration-amber-500/50 underline-offset-4">chinh phục lại chính mình</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0a0c10] bg-slate-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Success story" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-black text-lg">+1,200 Học sinh</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Đã tham gia cam kết</div>
            </div>
          </div>
          <ScrollIndicator targetId="guide-content" color="text-amber-500" className="mt-16" />
        </motion.div>
      </div>
      
      <div id="guide-content" className="bg-white rounded-t-[100px] relative z-20 overflow-hidden shadow-[0_-20px_100px_rgba(0,0,0,0.5)]">
        <QuittingGuide />
      </div>
    </div>
  );
};

export default GuidePage;
