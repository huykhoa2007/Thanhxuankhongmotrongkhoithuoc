import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Clock, CheckCircle2 } from 'lucide-react';

const QuitBenefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const glowTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timeline = [
    { time: "20 Phút", benefit: "Nhịp tim và huyết áp ổn định. Tuần hoàn máu tại bàn tay, bàn chân bắt đầu được cải thiện rõ rệt.", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-50" },
    { time: "12 Giờ", benefit: "Nồng độ khí CO (Carbon Monoxide) độc hại trong máu giảm về mức bình thường. Nồng độ Oxy tăng lên giúp bạn tỉnh táo hơn.", icon: Clock, color: "text-blue-500", bg: "bg-blue-50" },
    { time: "2 Tuần - 3 Tháng", benefit: "Chức năng phổi bắt đầu hồi phục, khả năng hít thở sâu và vận động thể lực tăng cao. Nguy cơ đau tim giảm mạnh.", icon: Clock, color: "text-cyan-500", bg: "bg-cyan-50" },
    { time: "1 - 9 Tháng", benefit: "Các triệu chứng ho, khó thở gần như biến mất hoàn toàn. Phổi lấy lại khả năng tự làm sạch, giảm nguy cơ nhiễm trùng.", icon: Clock, color: "text-indigo-500", bg: "bg-indigo-50" },
    { time: "1 Năm", benefit: "Cơ thể đã đào thải phần lớn độc tố. Nguy cơ mắc các bệnh mạch vành giảm đi một nửa so với người vẫn đang hút thuốc.", icon: CheckCircle2, color: "text-school-green", bg: "bg-green-50" },
    { time: "5 Năm", benefit: "Nguy cơ ung thư miệng, họng, thực quản và bàng quang giảm một nửa. Khả năng bị đột quỵ giảm xuống mức tối thiểu.", icon: CheckCircle2, color: "text-amber-500", bg: "bg-amber-50" },
    { time: "10 Năm", benefit: "Nguy cơ tử vong do ung thư phổi giảm một nửa. Các tế bào tiền ung thư được thay thế bằng các tế bào khỏe mạnh.", icon: CheckCircle2, color: "text-rose-500", bg: "bg-rose-50" },
    { time: "15 Năm", benefit: "Hệ thống tim mạch của bạn giờ đây đã tương đương với người chưa bao giờ hút thuốc. Bạn đã thực sự 'tái sinh'.", icon: CheckCircle2, color: "text-school-green", bg: "bg-emerald-50" }
  ];

  return (
    <section ref={sectionRef} id="loi-ich" className="pb-32 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20 relative overflow-hidden">
          {/* Animated Background Particles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  y: [-20, -100],
                  x: Math.random() * 200 - 100
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="absolute left-1/2 bottom-0 w-2 h-2 bg-school-green/20 rounded-full blur-sm"
              />
            ))}
          </div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none text-slate-900 relative z-10"
          >
            Hồi phục <span className="text-school-green">Thần Kỳ</span>
          </motion.h2>
          <div className="w-24 h-2 bg-school-green mx-auto mb-8 rounded-full" />
        </div>

        <div ref={timelineRef} className="relative pb-20">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden lg:block overflow-hidden">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full bg-gradient-to-b from-school-green via-blue-500 to-rose-500 origin-top"
            />
            {/* Moving Glow Point */}
            <motion.div 
              style={{ 
                top: glowTop,
                translateY: "-50%"
              }}
              className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_30px_rgba(255,255,255,1)] z-10"
            />
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
                    className={`p-10 rounded-[50px] ${item.bg} border border-slate-100 hover:border-school-green transition-all group hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden`}
                  >
                    {/* Floating Icon in background */}
                    <div className={`absolute -right-8 -top-8 ${item.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}>
                      <item.icon size={200} />
                    </div>

                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white shadow-xl ${item.color} mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10`}>
                      <item.icon size={32} />
                    </div>
                    
                    <h3 className={`text-3xl font-black italic uppercase tracking-tight mb-4 ${item.color} group-hover:tracking-widest transition-all`}>
                      Sau {item.time}
                    </h3>
                    <p className="text-slate-600 text-xl leading-relaxed font-medium relative z-10">
                      {item.benefit}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-20 h-20 rounded-full bg-white border-8 border-slate-50 shadow-2xl items-center justify-center relative z-20 group">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className={`w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-school-green' : 'bg-blue-500'} group-hover:scale-150 transition-transform`}
                  />
                  <div className="absolute -inset-2 bg-school-green/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Economic Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-slate-950 rounded-[80px] text-white flex flex-col md:flex-row items-center gap-16 overflow-hidden relative group shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1579621909533-550974395646?q=80&w=2070&auto=format&fit=crop" 
              alt="Economic benefits" 
              className="w-full h-full object-cover opacity-20 contrast-125 grayscale group-hover:scale-110 transition-transform duration-2000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            
            {/* Energy Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,104,55,0.1),transparent_70%)]" />
          </div>

          <div className="flex-1 relative z-10">
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[11px] font-black uppercase tracking-[0.5em] text-school-yellow mb-6 block"
            >
              Phép màu từ sự kỷ luật
            </motion.span>
            <h3 className="text-5xl md:text-7xl font-black italic uppercase mb-10 leading-none tracking-tighter">
              Bình minh <br/><span className="text-school-yellow">Tài Chính</span>
            </h3>
            <p className="text-slate-400 text-2xl font-medium leading-relaxed mb-12 max-w-xl">
              "Số tiền bạn tiết kiệm được khi bỏ thuốc là khoản lương hưu thứ hai mà bạn tự tặng cho chính mình."
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-10 py-5 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl"
              >
                Tiết kiệm tỷ đồng mỗi năm
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="px-10 py-5 bg-school-yellow text-slate-950 rounded-3xl font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-school-yellow/20"
              >
                Tự do tài chính
              </motion.div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-96 h-96 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl rounded-[60px] border border-white/10 flex flex-col items-center justify-center relative z-10 group-hover:border-school-yellow/50 transition-all duration-500 shadow-2xl"
          >
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-8xl mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              💰
            </motion.div>
            <span className="text-6xl font-black italic text-school-yellow tracking-tighter tabular-nums mb-2">
              +15%
            </span>
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400">
              Tổng thu nhập gia đình
            </span>
            
            {/* Sparkles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, (i % 2 === 0 ? 50 : -50)],
                  y: [0, (i % 3 === 0 ? -50 : 50)]
                }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="absolute w-1 h-1 bg-school-yellow rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuitBenefits;
