import React from 'react';
import { motion } from 'motion/react';
import { Cigarette, Laptop, Wind, Flame } from 'lucide-react';


import thuocLaDieuImg from './thuốc lá điếu.jpg';
import thuocLaDienTuImg from './thuốc lá điện tử.jpg';
import thuocLaoImg from './thuốc lào.jpg';
import thuocLaNungNongImg from './thuốc lá nung nóng.jpg';

const TobaccoTypes = () => {
  const types = [
    {
      icon: Cigarette,
      title: "Thuốc Lá Điếu",
      desc: "Chứa hơn 7,000 hóa chất, trong đó có 69 chất gây ung thư. Khói thuốc tạo ra hắc ín (tar) bám chặt vào phổi.",
      color: "bg-slate-100 text-slate-700",
      image: thuocLaDieuImg 
    },
    {
      icon: Laptop,
      title: "Thuốc Lá Điện Tử",
      desc: "Nung nóng dung dịch chứa nicotin và hương liệu tạo khí dung. Chứa kim loại nặng và diacetyl cực nguy hại.",
      color: "bg-blue-100 text-blue-600",
      image: thuocLaDienTuImg 
    },
    {
      icon: Wind,
      title: "Thuốc Lào / Shisha",
      desc: "Mỗi lần hút Shisha tương đương với việc hít phải lượng khói của hơn 100 điếu thuốc lá. Nồng độ CO cực cao.",
      color: "bg-indigo-100 text-indigo-600",
      image: thuocLaoImg 
    },
    {
      icon: Flame,
      title: "Thuốc Lá Nung Nóng",
      desc: "Nung nóng điếu thuốc ở nhiệt độ thấp hơn. Vẫn chứa nicotine gây nghiện và các chất độc hại tương tự.",
      color: "bg-amber-100 text-amber-700",
      image: thuocLaNungNongImg 
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern text-slate-900/5 " />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-school-cream/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Kiến thức căn bản
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">
            Mọi loại thuốc lá <br/> <span className="text-school-red">Đều có độc</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            Đừng để những lời quảng cáo "giảm hại" hay "thay thế an toàn" đánh lừa. Nicotine luôn là chất gây nghiện và các chất phụ gia luôn tàn phá cơ thể.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {types.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={type.image} alt={type.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 group-hover:from-white to-transparent" />
              </div>
              <div className="p-8 pt-4 relative">
                <div className={`w-14 h-14 ${type.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform -mt-12 relative z-10 bg-white ring-8 ring-slate-50 group-hover:ring-white transition-all`}>
                  <type.icon size={28} />
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-4">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{type.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[50px] p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black italic uppercase text-rose-500 mb-8">Sự thật về thuốc lá điện tử (Vape)</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex shrink-0 items-center justify-center font-black text-[10px]">!</div>
                  <p className="text-slate-300 font-medium tracking-tight">Dầu hương liệu khi đun nóng tạo ra các hợp chất Carbonyl (như formaldehyde) gây ung thư.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex shrink-0 items-center justify-center font-black text-[10px]">!</div>
                  <p className="text-slate-300 font-medium tracking-tight">Nguy cơ gây chấn thương nghiêm trọng do cháy nổ pin thiết bị điện tử.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex shrink-0 items-center justify-center font-black text-[10px]">!</div>
                  <p className="text-slate-300 font-medium tracking-tight">Hội chứng EVALI (tổn thương phổi cấp tính) liên quan trực tiếp đến việc sử dụng thuốc lá điện tử.</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-center p-10">
                <p className="text-center italic text-slate-400 font-medium">
                  "Thuốc lá điện tử không phải là công cụ cai thuốc lá. Nó là một hình thức nghiện mới, nhắm thẳng vào giới trẻ thông qua thiết kế bắt mắt và hương vị đa dạng."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TobaccoTypes;
