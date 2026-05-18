import React from 'react';
import { motion } from 'motion/react';
import { Gavel, ShieldAlert, Ban, UserX } from 'lucide-react';

const LegalSection = () => {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              Luật phòng chống tác hại thuốc lá
            </span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-[0.9]">
              Hành lang <br/>
              <span className="text-rose-500">Pháp lý</span> <br/>
              Bảo vệ sức khỏe.
            </h2>
            <p className="text-slate-400 text-xl font-medium mb-10 leading-relaxed">
              Luật số 09/2012/QH13 quy định về các biện pháp giảm nhu cầu sử dụng thuốc lá, biện pháp kiểm soát nguồn cung cấp thuốc lá và điều kiện bảo đảm để phòng, chống tác hại của thuốc lá.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Ban, label: "Luật PCTH Thuốc Lá", desc: "Nghị định 117/2020/NĐ-CP quy định: Phạt tiền từ 200.000đ đến 500.000đ đối với hành vi hút thuốc lá tại địa điểm có quy định cấm." },
                { icon: ShieldAlert, label: "Trường học không khói thuốc", desc: "Cấm hút thuốc lá hoàn toàn trong nhà và trong phạm vi khuôn viên cơ sở giáo dục. Thầy cô và học sinh có trách nhiệm tuân thủ tuyệt đối." },
                { icon: Gavel, label: "Quy định xử phạt bài bản", desc: "Cơ quan có thẩm quyền và nhà trường có quyền lập biên bản và xử phạt theo quy định pháp luật hoặc nội quy nhà trường." },
                { icon: UserX, label: "Trách nhiệm người đứng đầu", desc: "Hiệu trưởng và Ban giám hiệu có trách nhiệm tổ chức, đôn đốc, kiểm tra và xử lý vi phạm trong phạm vi trường Nguyễn Văn Thoại." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm group hover:border-rose-500/50 transition-colors">
                  <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center mb-6">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-black italic uppercase tracking-tight mb-4 text-sm text-rose-500">{item.label}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-amber-400 p-12 rounded-[60px] text-amber-950 shadow-2xl relative"
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                ⚖️
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tight mb-10 leading-none">Quyền & Nghĩa vụ</h3>
              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 border-2 border-amber-950 rounded-full flex shrink-0 items-center justify-center font-black text-xs">01</div>
                  <p className="font-bold text-sm leading-snug italic uppercase tracking-tight">Quyền được sống, làm việc trong môi trường không có khói thuốc lá.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 border-2 border-amber-950 rounded-full flex shrink-0 items-center justify-center font-black text-xs">02</div>
                  <p className="font-bold text-sm leading-snug italic uppercase tracking-tight">Quyền yêu cầu người hút thuốc lá không hút tại địa điểm cấm.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 border-2 border-amber-950 rounded-full flex shrink-0 items-center justify-center font-black text-xs">03</div>
                  <p className="font-bold text-sm leading-snug italic uppercase tracking-tight">Nghĩa vụ không hút thuốc lá tại địa điểm có quy định cấm hút thuốc.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 border-2 border-amber-950 rounded-full flex shrink-0 items-center justify-center font-black text-xs">04</div>
                  <p className="font-bold text-sm leading-snug italic uppercase tracking-tight">Nghĩa vụ vận động, tuyên truyền người khác không hút thuốc lá.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
