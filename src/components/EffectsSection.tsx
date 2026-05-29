
import React from 'react';
import { motion } from 'motion/react';
import { Wind, Heart, Brain, Activity } from 'lucide-react';
import ImpactCard from './ImpactCard';

const EffectsSection = () => {
  const effects = [
    {
      icon: Wind,
      title: "Hệ Hô Hấp",
      description: "Khói thuốc phá hủy các nhung mao bảo vệ phổi, gây ung thư phổi (chiếm 90%). Đặc biệt, thuốc lá điện tử chứa hạt siêu mịn gây tổn thương phổi cấp tính (EVALI) và suy hô hấp nghiêm trọng ở giới trẻ.",
      delay: 0.1,
      colorClass: "bg-school-blue/10 text-school-blue",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Heart,
      title: "Tim Mạch",
      description: "Nicotine làm co thắt mạch máu, tăng nhịp tim và huyết áp. Hút thuốc dẫn đến xơ vữa động mạch sớm và đột quỵ. Người trẻ hút thuốc có nguy cơ nhồi máu cơ tim cao gấp nhiều lần người bình thường.",
      delay: 0.2,
      colorClass: "bg-school-red/10 text-school-red",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Brain,
      title: "Não Bộ & Nhận Thức",
      description: "Nicotine là chất gây nghiện cực mạnh, làm biến đổi sự phát triển của não bộ thanh thiếu niên. Gây xáo trộn sự tập trung, suy giảm trí nhớ, ảnh hưởng đến kết quả học tập và dễ dẫn đến trầm cảm, lo âu.",
      delay: 0.3,
      colorClass: "bg-indigo-100 text-indigo-600",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Activity,
      title: "Nguy Cơ Tiềm Ẩn",
      description: "Thuốc lá thế hệ mới (điện tử, nung nóng) chứa hơn 7.000 hóa chất cực độc, trong đó có formaldehyde và kim loại nặng. Nguy cơ cháy nổ pin và ngộ độc hóa học là những mối đe dọa trực tiếp đến học đường.",
      delay: 0.4,
      colorClass: "bg-school-yellow/10 text-school-yellow/90",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="tac-hai" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern text-slate-900/5 " />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter"
          >
            Tác Hại Khôn Lường
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-500 max-w-3xl mx-auto font-medium"
          >
            Mỗi điếu thuốc bạn hút đang rút ngắn cuộc đời của chính mình và những người xung quanh. Thuốc lá giết chết hơn <span className="text-school-red font-bold">8 triệu người</span> mỗi năm.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {effects.map((effect, index) => (
            <ImpactCard
              key={index}
              icon={effect.icon}
              title={effect.title}
              description={effect.description}
              delay={effect.delay}
              colorClass={effect.colorClass}
              image={effect.image}
            />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-12 bg-white rounded-[40px] shadow-sm border border-slate-100"
          >
            <h3 className="text-3xl font-black italic uppercase tracking-tight mb-8">Con số báo động tại Việt Nam</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-school-red text-white flex items-center justify-center shrink-0 shadow-lg shadow-school-red/20">
                    <span className="font-black italic">!</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl mb-1">40,000 ca tử vong</p>
                    <p className="text-slate-500 text-sm font-medium">Trung bình số ca tử vong mỗi năm liên quan đến các bệnh do thuốc lá tại Việt Nam.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
                    <span className="font-black italic">!</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl mb-1">11% người chết sớm</p>
                    <p className="text-slate-500 text-sm font-medium">Số ca tử vong sớm do thuốc lá chiếm tỷ trọng lớn trong tổng số tử vong của nam giới.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-school-yellow text-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-school-yellow/20">
                    <span className="font-black italic">!</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl mb-1">25 loại bệnh</p>
                    <p className="text-slate-500 text-sm font-medium">Thuốc lá là nguyên nhân trực tiếp gây ra hơn 25 nhóm bệnh lý khác nhau trong cơ thể.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-school-green text-white flex items-center justify-center shrink-0 shadow-lg shadow-school-green/20">
                    <span className="font-black italic">!</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl mb-1">90% ung thư phổi</p>
                    <p className="text-slate-500 text-sm font-medium">Đa số các ca ung thư phổi tại các bệnh viện Việt Nam đều có tiền sử hút thuốc lâu năm.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="bg-slate-900 p-12 rounded-[40px] text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-school-green/10 rounded-full blur-2xl" />
            <blockquote className="relative z-10">
              <p className="text-2xl italic font-black text-slate-300 leading-tight mb-8">
                "Việc hút thuốc giống như việc bạn đang trả tiền để mua lấy bệnh tật và sự đau đớn cho chính người thân của mình."
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-1 bg-school-green rounded-full"></div>
                <span className="uppercase tracking-widest text-[10px] font-black text-school-green">Thông điệp chiến dịch</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectsSection;
