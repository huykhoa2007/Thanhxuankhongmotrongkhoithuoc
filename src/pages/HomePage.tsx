import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'motion/react';
import VideoSection from '../components/VideoSection';
import FinancialImpact from '../components/FinancialImpact';
import ScrollIndicator from '../components/ScrollIndicator';
import { Skull, FlaskConical, Globe, Info } from 'lucide-react';

import HinhTranhVẽ from './1.jpg';

const BG_STATS = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop"
];

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(handle);
  }, [end, duration]);
  return <>{count.toLocaleString()}</>;
};

const StatCard = ({ icon: Icon, stat, label, detail, color, bg, delay }: { icon: any, stat: string, label: string, detail: string, color: string, bg: string, delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isNumeric = !isNaN(Number(stat.replace(/,/g, '')));
  const numValue = isNumeric ? Number(stat.replace(/,/g, '')) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className={`relative group h-[400px] ${bg} rounded-[50px] p-8 flex flex-col items-center justify-center text-center overflow-hidden border border-white/5 shadow-2xl`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent)` }}
      />
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color === 'text-school-red' ? 'from-rose-500' : color === 'text-white' ? 'from-emerald-500' : 'from-amber-500'} to-transparent`} />
      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150">
        <Icon size={200} />
      </div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className={`mb-6 p-4 rounded-2xl bg-white/10 ${color} group-hover:scale-110 transition-all`}>
          <Icon size={40} />
        </div>
        <h3 className={`text-6xl font-black ${color} mb-3 italic tracking-tighter tabular-nums`}>
          {isNumeric && isHovered ? <CountUp end={numValue} /> : stat}
          {stat.includes('TRIỆU') && <span className="text-3xl ml-2">TRIỆU</span>}
        </h3>
        <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">{label}</p>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-2xl p-5 rounded-3xl border border-white/20 shadow-2xl"
            >
              <Info size={16} className="shrink-0 mt-0.5 text-white" />
              <p className="text-[12px] font-bold text-white text-left leading-relaxed">{detail}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const NatureGallery = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter">
          Thế giới tươi đẹp <br />
          <span className="text-emerald-600">Mà chúng ta đang bảo vệ</span>
        </h2>
      </div>
      <div className="flex gap-8 px-8 overflow-x-auto pb-12 no-scrollbar -mx-8 sm:mx-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 shrink-0"
        >
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
            <div key={i} className="w-[400px] h-[500px] rounded-[50px] overflow-hidden shadow-2xl relative group">
              <img src={src} alt="Nature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <p className="text-white font-black italic uppercase tracking-widest text-sm">Hơi thở trong lành</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <div id="hero" className="relative group">
        <Hero />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
           <ScrollIndicator targetId="stats" color="text-white" />
        </div>
      </div>
      
      <section id="stats" className="py-32 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={BG_STATS} alt="Dark mountains" className="w-full h-full object-cover opacity-20 mix-blend-multiply" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block px-6 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
              <h2 className="text-[12px] font-black text-school-green uppercase tracking-[0.5em]">Dữ liệu thực tế / 2026</h2>
            </div>
            <p className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
              Cái giá của sự <span className="text-school-red relative inline-block">chủ quan</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={Skull} stat="40,000" label="Tử vong tại Việt Nam" detail="Tương đương với việc có 1 chiếc máy bay rơi mỗi ngày. Hầu hết là do ung thư phổi và bệnh tim." bg="bg-slate-900" color="text-school-red" delay={0.1} />
            <StatCard icon={FlaskConical} stat="7,000" label="Hóa chất độc hại" detail="Trong đó có ít nhất 70 chất gây ung thư cực mạnh như Arsenic, Formaldehyde và Xyanua." bg="bg-school-green" color="text-white" delay={0.2} />
            <StatCard icon={Globe} stat="8" label="Tử vong toàn cầu" detail="Cứ 4 giây lại có 1 người chết vì các bệnh liên quan đến thuốc lá trên toàn thế giới." bg="bg-school-yellow" color="text-slate-900" delay={0.3} />
          </div>
          <ScrollIndicator targetId="commitment" />
        </div>
      </section>

      <section id="commitment" className="py-48 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 rounded-[80px] p-12 md:p-24 shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
            <div className="flex-1 relative z-10">
               <span className="inline-block px-4 py-1.5 rounded-full bg-school-green/10 text-school-green text-[10px] font-black tracking-[0.3em] uppercase mb-6">Cam kết từ học đường</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 italic uppercase tracking-tighter leading-none">
                Học sinh <span className="text-school-green">Nguyễn Văn Thoại</span> <br/> Nói không với thuốc lá
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Chúng tôi tự hào là những học sinh năng động, sáng tạo và có trách nhiệm với sức khỏe bản thân. Chiến dịch "Hơi Thở Sạch – Nụ Cười Xanh" là minh chứng cho sự quyết tâm của tập thể giáo viên và học sinh trường THPT Nguyễn Văn Thoại trong việc xây dựng một môi trường học đường lành mạnh, không khói thuốc.
              </p>
            </div>
            <div className="w-full lg:w-1/3 aspect-square bg-school-cream rounded-[40px] overflow-hidden relative group">
               <img src={HinhTranhVẽ} alt="Students commitment" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
            </div>
          </motion.div>
          <ScrollIndicator targetId="financial" />
        </div>
      </section>

      <NatureGallery />

      <div id="financial">
        <FinancialImpact />
        <div className="bg-slate-900 pb-16">
          <ScrollIndicator targetId="video" color="text-slate-500" />
        </div>
      </div>
      
      <div id="video">
        <VideoSection />
      </div>
    </>
  );
};

export default HomePage;