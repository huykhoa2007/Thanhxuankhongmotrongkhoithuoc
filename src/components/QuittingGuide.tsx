import React from 'react';
import { motion } from 'motion/react';
import ScrollIndicator from './ScrollIndicator';
import { causes, steps, symptoms } from './guideData';

import hinhDieuThuoc from '../33.jpg';
import hinhBanCo from './4.jpg';

const animSpan = { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 } };
const animTitle = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } };
const animCard = { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 } };
const animImage = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } };
const animSymptom = { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } };

const spanClass = [
  "inline-block px-4 py-1.5 rounded-full bg-blue-50",
  "text-blue-600 text-[10px] font-black tracking-widest",
  "uppercase mb-6"
].join(" ");

const titleClass = [
  "text-5xl md:text-8xl font-black text-slate-900",
  "italic uppercase tracking-tighter leading-none"
].join(" ");

const cardClass = [
  "p-10 bg-slate-50 rounded-[50px] border border-slate-100",
  "group relative overflow-hidden"
].join(" ");

const symptomClass = [
  "mb-40 bg-slate-950 p-8 md:p-16 text-white",
  "relative overflow-hidden rounded-[40px]"
].join(" ");

const QuittingGuide = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Decoration */}
      <div 
        className={[
          "absolute top-0 right-0 rounded-full bg-slate-50",
          "w-96 h-96 md:w-[800px] md:h-[800px]",
          "-translate-y-1/2 translate-x-1/2 -z-0"
        ].join(" ")} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: The Why */}
        <div id="guide-why" className="mb-40">
          <div className="flex flex-col lg:flex-row items-end gap-12 mb-20">
            <div className="flex-1">
              <motion.span initial={animSpan.initial} whileInView={animSpan.whileInView} className={spanClass}>
                {"Phân tích tâm lý học học đường"}
              </motion.span>
              <motion.h2 initial={animTitle.initial} whileInView={animTitle.whileInView} className={titleClass}>
                {"Tại Sao"} <br/><span className="text-blue-500">{"Bạn Hút Thuốc?"}</span>
              </motion.h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-4 border-blue-500 pl-6">
                {"Để chiến thắng kẻ thù, trước hết phải hiểu rõ cách chúng xâm nhập vào tâm trí chúng ta."}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {causes.map((cause, i) => (
              <motion.div
                key={i}
                initial={animCard.initial}
                whileInView={animCard.whileInView}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1 }}
                className={cardClass}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${cause.color.replace('text', 'bg')}/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700`} />
                <div className="text-4xl mb-8">{cause.icon}</div>
                <h4 className="text-2xl font-black italic uppercase tracking-tight mb-4 text-slate-900">{cause.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">{cause.desc}</p>
                <div className={`w-12 h-1 bg-current ${cause.color}`} />
              </motion.div>
            ))}
          </div>

          {/* Ô HÌNH CHỮ NHẬT LỚN PHÍA DƯỚI */}
          <motion.div initial={animImage.initial} whileInView={animImage.whileInView} className="mt-16 rounded-[40px] overflow-hidden shadow-2xl h-[400px] relative group">
            <img 
              src={hinhDieuThuoc} 
              alt="Young people talking and peer pressure" 
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>
          
          <ScrollIndicator targetId="guide-symptoms" className="mt-12" />
        </div>

        {/* Section 2: Symptoms Dashboard */}
        <div id="guide-symptoms" className={symptomClass}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_70%)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-widest uppercase mb-8 border border-emerald-500/20">
                {"Phản ứng sinh học"}
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                {"Bạn Sẽ Thấy"} <br/> <span className="text-emerald-400">{"Gì Khi Bỏ Thuốc?"}</span>
              </h2>
              <p className="text-slate-400 mb-12 font-medium text-lg leading-relaxed max-w-lg">
                {"Trong 24 giờ đầu, cơ thể bạn sẽ \"đòi hỏi\" nicotine dữ dội. Nhưng hãy nhớ: "}
                <span className="text-white italic">{"Càng khó chịu, chứng tỏ bạn đang hồi phục càng nhanh."}</span>
              </p>
              <div className="p-6 bg-emerald-500/10 rounded-[30px] border border-emerald-500/20 backdrop-blur-xl">
                 <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black">!</div>
                  <h4 className="text-lg font-black italic uppercase tracking-tight">
                    {"Định nghĩa chiến thắng"}
                  </h4>
                 </div>
                <p className="text-emerald-50/60 text-sm leading-relaxed">
                  {"Cai thuốc thành công là khi bạn hoàn toàn tự do khỏi nicotine trong 12 tháng liên tục. Đừng bỏ cuộc ở tháng thứ 11!"}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {symptoms.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={animSymptom.initial} 
                  whileInView={animSymptom.whileInView}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 rounded-[30px] border border-white/10 group hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                        <s.icon size={24} />
                      </div>
                      <h4 className="text-base font-black uppercase tracking-widest text-white">{s.label}</h4>
                    </div>
                    <span className="text-emerald-500 font-mono text-[10px] font-bold tracking-widest">ALERT LEVEL</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium mb-4">{s.desc}</p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${s.severity}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <ScrollIndicator targetId="guide-journey" color="text-white" className="mt-12" />
        </div>

        {/* Section 3: The START Journey */}
        <div id="guide-journey" className="relative">
          <div className="text-center mb-24">
            <motion.span 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-500 text-[10px] font-black tracking-widest uppercase mb-6 italic"
            >
              {"Lộ trình hành động (Q-C-D-H-K)"}
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 italic uppercase tracking-tighter leading-none mb-6">
              {"Chiến lược"} <span className="text-rose-500">{"Q.C.D.H.K"}</span>
            </h2>
            <p className="text-slate-500 font-medium text-xl max-w-xl mx-auto mb-12">
              {"5 bước chuẩn bị sắt đá cho ngày giành lại tự do."}
            </p>

            <motion.div initial={animCard.initial} whileInView={animCard.whileInView} className="max-w-2xl mx-auto rounded-[40px] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={hinhBanCo} 
                alt="New beginning and motivation" 
                className="w-full h-[260px] object-cover"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className={[
                      "p-10 rounded-[40px] bg-white border-2 shadow-sm",
                      "transition-all duration-300 group relative overflow-hidden",
                      i % 2 === 0 ? "border-rose-100 hover:border-rose-500" : "border-slate-100 hover:border-slate-900"
                    ].join(" ")}
                  >
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-slate-50 rounded-full -z-0 group-hover:scale-150 transition-transform duration-700" />
                    <div className="flex items-baseline gap-4 mb-6 relative z-10">
                      <span className={`text-6xl font-black italic leading-none ${i % 2 === 0 ? 'text-rose-500' : 'text-slate-900'}`}>0{i + 1}</span>
                      <div className="h-1.5 w-16 bg-current opacity-20 rounded-full" />
                    </div>
                    <h4 className="text-2xl font-black uppercase italic tracking-tight mb-4 relative z-10">{step.title}</h4>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed relative z-10">{step.desc}</p>
                  </motion.div>
                </div>
                <div className={[
                  "hidden lg:flex w-28 h-28 rounded-full shrink-0 items-center justify-center text-4xl font-black italic shadow-xl relative z-10",
                  i % 2 === 0 ? "bg-rose-500 text-white" : "bg-slate-900 text-white"
                ].join(" ")}>
                  {step.num}
                </div>
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuittingGuide;