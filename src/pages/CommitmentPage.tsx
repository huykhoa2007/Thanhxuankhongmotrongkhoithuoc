import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, PartyPopper, ArrowLeft, Leaf, Star, Smile, ShieldCheck, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingIcon = ({ icon: Icon, delay = 0, x, y, size = 24, color = "text-school-green" }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2], 
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 5 + Math.random() * 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className={`absolute z-0 pointer-events-none ${color} opacity-20`}
    style={{ left: x, top: y }}
  >
    <Icon size={size} />
  </motion.div>
);

const CommitmentPage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Launch confetti waterfall
    const interval: any = setInterval(() => {
      confetti({
        particleCount: 2,
        angle: 90,
        spread: 45,
        origin: { x: Math.random(), y: -0.1 },
        colors: ['#006837', '#10b981', '#3b82f6', '#ffffff', '#fbbf24'],
        startVelocity: 0,
        gravity: 0.5,
        drift: Math.random() - 0.5,
        ticks: 200,
        zIndex: 50
      });
    }, 100);

    // Play applause sound
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-start pt-32 pb-20 px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 opacity-50" />
        
        {/* Animated blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-school-green/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            x: [0, -50, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [-100, 100, -100],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-emerald-400/5 rounded-full blur-[80px]"
        />

        {/* Scattered Decorative Icons to fill the space */}
        <FloatingIcon icon={Leaf} x="5%" y="15%" size={40} delay={0} />
        <FloatingIcon icon={Star} x="12%" y="45%" size={32} delay={1} color="text-amber-400" />
        <FloatingIcon icon={Heart} x="8%" y="75%" size={36} delay={2} color="text-red-400" />
        <FloatingIcon icon={Smile} x="85%" y="20%" size={44} delay={0.5} color="text-blue-400" />
        <FloatingIcon icon={ShieldCheck} x="92%" y="55%" size={38} delay={1.5} />
        <FloatingIcon icon={Sun} x="88%" y="85%" size={40} delay={2.5} color="text-amber-500" />
        
        <FloatingIcon icon={Leaf} x="20%" y="80%" size={24} delay={3} />
        <FloatingIcon icon={Star} x="75%" y="10%" size={22} delay={4} color="text-emerald-400" />
        <FloatingIcon icon={Sparkles} x="40%" y="5%" size={28} delay={5} color="text-blue-500" />
      </div>

      <audio 
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3" 
        preload="auto"
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/70 backdrop-blur-3xl border-2 border-white rounded-[48px] p-8 md:p-16 shadow-[0_40px_150px_rgba(0,0,0,0.1)] text-center relative overflow-hidden"
        >
          {/* Top decoration */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-school-green via-emerald-400 to-school-green shadow-lg" />
          
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
            className="w-28 h-28 bg-gradient-to-br from-school-green to-emerald-600 rounded-[32px] mx-auto mb-10 flex items-center justify-center text-white shadow-2xl shadow-school-green/40 relative group"
          >
            <PartyPopper size={56} />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white rounded-[32px]"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.85] mb-10"
          >
            Lời Cam Kết <br/> <span className="text-school-green drop-shadow-sm">Thanh Xuân</span>
          </motion.h1>

          <div className="space-y-8 text-xl md:text-3xl font-medium text-slate-600 leading-[1.4] max-w-2xl mx-auto italic">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative px-6"
            >
              <span className="text-6xl text-school-green/20 font-serif absolute -left-2 -top-6">"</span>
              Cảm ơn bạn đã cam kết cùng chúng tôi xây dựng một thanh xuân không mờ trong khói thuốc.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              Mỗi lựa chọn hôm nay là một bước nhỏ để bảo vệ sức khỏe, gìn giữ những ước mơ và lan tỏa lối sống tích cực đến bạn bè, gia đình và cộng đồng.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              Hãy cùng nhau nói không với thuốc lá để những năm tháng tuổi trẻ luôn trọn vẹn tiếng cười, năng lượng và những ký ức đẹp nhất.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-school-green font-black uppercase tracking-[0.2em] text-2xl mt-16 relative inline-block py-2"
            >
              MỘT THANH XUÂN XANH — BẮT ĐẦU TỪ CHÍNH BẠN
              <span className="text-6xl text-school-green/20 font-serif absolute -right-8 bottom-0">"</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-school-green/30"
              />
            </motion.p>
          </div>

          <div className="mt-20 flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 px-10 py-5 bg-slate-100 text-slate-900 rounded-[20px] font-black uppercase tracking-widest text-sm hover:bg-slate-200 transition-all border border-slate-200"
              >
                <ArrowLeft size={20} />
                Quay lại trang chủ
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => {
                confetti({
                  particleCount: 200,
                  spread: 100,
                  origin: { y: 0.6 },
                  colors: ['#006837', '#10b981', '#3b82f6', '#fbbf24']
                });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 104, 55, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-school-green text-white rounded-[20px] font-black uppercase tracking-widest text-sm shadow-2xl shadow-school-green/30 flex items-center gap-4 justify-center"
            >
              <Sparkles size={20} />
              Tiếp tục lan tỏa
            </motion.button>
          </div>
        </motion.div>

        {/* Supporting cards with more style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Heart, label: "Sức khỏe", color: "text-red-500", bg: "bg-red-50", desc: "Phổi khỏe mạnh hơn" },
            { icon: Sparkles, label: "Năng lực", color: "text-amber-500", bg: "bg-amber-50", desc: "Tăng sự tập trung" },
            { icon: PartyPopper, label: "Tự hào", color: "text-blue-500", bg: "bg-blue-50", desc: "Làm chủ bản thân" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 1.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-[32px] border border-white shadow-lg flex flex-col items-center gap-4 group transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <item.icon size={32} />
              </div>
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 block mb-2">{item.label}</span>
                <span className="text-lg font-bold text-slate-900">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitmentPage;
