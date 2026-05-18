import React from 'react';
import { motion } from 'motion/react';
import { PiggyBank, TrendingUp, Wallet, Coins } from 'lucide-react';

const FinancialImpact = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-slate-900/50 rounded-[60px] p-8 md:p-16 border border-white/5 backdrop-blur-3xl shadow-2xl">
          {/* Text Content */}
          <div className="flex-1 text-left relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h4 className="text-[#fdb913] font-black uppercase tracking-[0.4em] text-[12px] mb-8">
                Giá trị của sự thay đổi
              </h4>
              
              <div className="relative mb-12">
                {/* Background Box for "BỎ THUỐC" */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 'auto' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-[#fceef0] inline-block px-8 py-4 relative z-0 transform -rotate-1"
                >
                  <h2 className="text-[#80132b] text-7xl md:text-[140px] font-black italic uppercase tracking-tighter leading-none">
                    BỎ THUỐC
                  </h2>
                </motion.div>
                
                {/* Overlapping yellow text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-[-2rem] md:mt-[-4rem] relative z-20"
                >
                  <h2 className="text-[#fdb913] text-7xl md:text-[140px] font-black italic uppercase tracking-tighter leading-none drop-shadow-[0_10px_30px_rgba(253,185,19,0.3)]">
                    LÀ CÓ TIỀN
                  </h2>
                </motion.div>
              </div>

              <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-xl mb-12 italic border-l-4 border-[#fdb913] pl-6">
                Mỗi bao thuốc bạn không mua là một khoản đầu tư cho tương lai. Đừng để số tiền mồ hôi nước mắt của bạn "bay" theo làn khói thuốc vô ích.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-tighter text-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-3">
                  <Coins className="text-[#fdb913]" size={20} />
                  Tiết kiệm hàng triệu/tháng
                </button>
                <button className="px-10 py-5 bg-[#fdb913] text-slate-950 rounded-2xl font-black uppercase tracking-tighter text-sm hover:shadow-[0_20px_50px_rgba(253,185,19,0.4)] transition-all transform hover:-translate-y-1">
                  Làm giàu tương lai
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stat Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[450px] aspect-square bg-[#0c0f16] rounded-[50px] border border-white/10 p-12 flex flex-col items-center justify-center text-center relative group overflow-hidden shadow-2xl"
          >
            {/* Animated coins floating in background */}
            <div className="absolute inset-0 z-0">
               {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 0.6, 0],
                    x: Math.sin(i) * 50
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute bottom-0 left-1/2 text-amber-500/20"
                >
                  <Coins size={20} />
                </motion.div>
               ))}
            </div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mb-8 relative">
                 <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"
                 />
                 <PiggyBank size={48} className="text-amber-500 relative z-10" />
              </div>
              
              <div className="text-7xl font-black text-amber-400 italic tracking-tighter mb-4 shadow-sm">
                +15%
              </div>
              
              <h3 className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">
                Gia tăng túi tiền của bạn
              </h3>
            </div>

            {/* Glowing Border */}
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/30 rounded-[50px] transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialImpact;
