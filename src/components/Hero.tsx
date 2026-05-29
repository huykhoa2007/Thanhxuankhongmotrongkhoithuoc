import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cigarette, ArrowRight } from 'lucide-react';

// Import ảnh nền cục bộ nằm cùng thư mục src/components
import heroBgImg from './thuoooc.jpg'; 

const SmokeEffect = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-20 pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [-20, -100],
            x: [0, (i % 2 === 0 ? 15 : -15), (i % 2 === 0 ? -15 : 15)],
            scale: [0.5, 2, 4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
          className="absolute bottom-0 left-0 w-8 h-8 bg-white/20 blur-xl rounded-full"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-slate-50 z-0" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.05] z-0" />
      
      {/* Dynamic Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-100/50 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-blue-100/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 bg-slate-900 rounded-[50px] p-8 md:p-16 text-white relative overflow-hidden flex flex-col justify-center min-h-[650px] group shadow-[0_40px_100px_-20px_rgba(0,104,55,0.4)] transition-all duration-700 hover:-translate-y-2"
        >
          {/* Advanced Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBgImg} 
              alt="Nature Freshness"
              className="w-full h-full object-cover opacity-30 mix-blend-screen transition-all duration-1000 scale-110 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.6)_100%)] contrast-125" />
            
            {/* Animated Light Streaks */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: ["-100%", "200%"],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 3,
                  ease: "linear"
                }}
                className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -skew-x-12"
                style={{ top: `${i * 30}%`, height: '20%' }}
              />
            ))}
            
            {/* Animated Particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  y: [-20, -120],
                  x: (i * 20) - 150,
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-500 rounded-full blur-[1px]"
              />
            ))}
          </div>

          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: ["0 0 0px #006837", "0 0 20px #006837", "0 0 0px #006837"]
              }}
              transition={{ 
                opacity: { delay: 0.3 },
                boxShadow: { repeat: Infinity, duration: 2 }
              }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-amber-400 text-xs font-black tracking-[0.3em] uppercase mb-8 self-start backdrop-blur-md border border-white/10"
            >
              Hơi Thở Sạch – Nụ Cười Xanh
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 italic uppercase tracking-[0.05em] text-white"
            >
              Đừng để <br/>
              khói <motion.span 
                animate={{ 
                  color: ["#fff", "#f43f5e", "#fff"],
                  x: [-0.5, 0.5, -0.5],
                  y: [0.5, -0.5, 0.5]
                }}
                transition={{ 
                  color: { repeat: Infinity, duration: 3 },
                  x: { repeat: Infinity, duration: 0.1, ease: "linear" },
                  y: { repeat: Infinity, duration: 0.1, ease: "linear" }
                }}
                className="text-rose-500 inline-block"
              >thuốc</motion.span> <br/>
               DẬP TẮT <br/>
               <motion.span 
                animate={{ 
                  textShadow: ["0 0 0px #006837", "0 0 20px #006837", "0 0 0px #006837"],
                  scale: [1, 1.02, 1],
                  rotate: [-0.3, 0.3, -0.3]
                }}
                transition={{ 
                  textShadow: { repeat: Infinity, duration: 4 },
                  scale: { repeat: Infinity, duration: 4 },
                  rotate: { repeat: Infinity, duration: 0.2, ease: "linear" }
                }}
                className="text-emerald-500 block mt-2"
               >TƯƠNG LAI</motion.span>.
            </motion.h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium">
              Chúng tôi bảo vệ sức khỏe của bạn và thế hệ trẻ trường <span className="text-white font-bold italic">Nguyễn Văn Thoại</span>. Hành trình vì một Việt Nam xanh bắt đầu từ chính bạn.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/tac-hai"
                  className="px-10 py-5 bg-emerald-600 text-white rounded-full font-black uppercase tracking-widest shadow-2xl shadow-emerald-600/40 hover:bg-emerald-600/90 hover:shadow-emerald-600/60 transition-all flex items-center gap-3 group relative overflow-hidden"
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-y-0 w-32 bg-white/20 skew-x-12"
                  />
                  <span className="relative z-10">Hành động ngay</span> <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
              
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.2, zIndex: 20, rotate: 10 }}
                    className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-white/20"
                  >
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </motion.div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-emerald-600 flex items-center justify-center text-[10px] font-black shadow-lg">+1k</div>
              </div>
            </div>
          </div>

          {/* Floating Cigarette with Smoke */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 right-10 z-20 hidden md:block"
          >
            <div className="relative">
              <SmokeEffect />
              <div className="w-32 h-6 bg-gradient-to-r from-[#ddd] via-[#fff] to-[#f5f5f5] rounded-full border-b-4 border-black/20 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-orange-600 rounded-r-full" />
                <div className="absolute right-12 top-0 bottom-0 w-1 bg-black/10" />
                <div className="absolute -left-1 top-0 bottom-0 w-4 bg-gradient-to-r from-orange-500 to-transparent animate-pulse" />
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-red-600/30 blur-md rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Side Banner / Image */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-emerald-700 rounded-[40px] p-8 text-white relative overflow-hidden group shadow-2xl shadow-emerald-700/10"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight italic leading-none">Khi bạn <br/> bỏ thuốc...</h2>
            <ul className="space-y-5">
              {[
                { label: "20 phút", desc: "Nhịp tim giảm về mức bình thường." },
                { label: "48 giờ", desc: "Khứu giác phục hồi mạnh mẽ." },
                { label: "1 năm", desc: "Nguy cơ bệnh mạch vành giảm 50%." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</div>
                  <div>
                    <p className="font-bold text-sm tracking-tight">{item.label}</p>
                    <p className="text-xs text-stone-200/80">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 bg-amber-400 rounded-[40px] p-8 text-amber-950 flex flex-col justify-between shadow-2xl shadow-amber-400/10 relative overflow-hidden group"
          >
            {/* FIX LỖI DÒNG 270: Đóng chuỗi className và thẻ Cigarette đầy đủ */}
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cigarette size={180} className="rotate-[15deg] group-hover:rotate-0 transition-transform duration-700" />
            </div>

            <div className="relative z-10">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Số liệu đáng báo động</h4>
              <div className="text-5xl font-black tracking-tighter italic">40,000+</div>
              <p className="font-bold leading-tight mt-2 text-sm">Người Việt tử vong mỗi năm vì các bệnh liên quan đến thuốc lá.</p>
            </div>
            
            <div className="flex items-center justify-between relative z-10 mt-6">
              <span className="text-[10px] font-bold bg-amber-950/20 px-3 py-1 rounded-full uppercase tracking-widest">Dự báo kcb 2026</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-950" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-950/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-950/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
