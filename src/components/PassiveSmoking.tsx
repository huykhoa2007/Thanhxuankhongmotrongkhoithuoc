import React from 'react';
import { motion } from 'motion/react';
import { Cigarette, ShieldX, Baby, House } from 'lucide-react';

const PassiveSmoking = () => {
  return (
    <section id="thu-dong" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-school-red/5 text-school-red text-xs font-bold tracking-widest uppercase mb-6">
              Nguy cơ từ khói thuốc
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 italic uppercase tracking-tighter leading-none">
              Khói Thụ Động <br/> 
              <span className="text-school-red">Sát Thủ Thầm Lặng</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Bạn không cầm điếu thuốc, nhưng bạn đang hít phải hàng ngàn chất độc. Khói thuốc nhả ra từ đầu điếu thuốc chứa nồng độ chất độc cao gấp nhiều lần khói người hút hít vào qua đầu lọc.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-school-blue/10 rounded-2xl flex items-center justify-center text-school-blue shadow-sm">
                  <Baby size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Trẻ Em</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Hít phải khói thụ động làm trẻ dễ mắc các bệnh đường hô hấp cấp tính, viêm tai giữa, cản trở sự phát triển của phổi và tăng nguy cơ gây đột tử (SIDS).</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-school-red/10 rounded-2xl flex items-center justify-center text-school-red shadow-sm">
                  <ShieldX size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Thai Nhi</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Khói thuốc làm giảm lượng oxy đến thai nhi, làm tăng nguy cơ sinh non, nhẹ cân, dị tật bẩm sinh và ảnh hưởng đến sự phát triển trí tuệ của trẻ sau này.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200"
                alt="Children's health and future protection"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-[#b91c1c] text-white p-10 rounded-[32px] shadow-2xl max-w-xs border-4 border-white/10"
            >
              <p className="text-2xl font-black italic uppercase tracking-tighter leading-[1.1]">
                "Đừng để khói thuốc <span className="text-yellow-400 underline decoration-4 underline-offset-4">đánh cắp</span> tương lai con cái."
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-10 bg-slate-900 text-white rounded-[40px] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-school-red/10 rounded-full blur-2xl" />
            <h3 className="text-2xl font-black italic uppercase mb-6 text-school-red">Khói thuốc "Bận Ba"</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Ngay cả khi không có khói nhìn thấy, các hóa chất độc hại bám trên quần áo, tóc, salon và thảm vẫn tồn tại hàng tháng trời, gây hại cho trẻ em bò lết trên sàn.
            </p>
          </div>
          <div className="p-10 bg-school-cream border border-school-green/10 rounded-[40px]">
            <h3 className="text-2xl font-black italic uppercase mb-6 text-slate-900">Môi trường kín</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Hút thuốc trong xe hơi hoặc phòng máy lạnh làm nồng độ chất độc tích tụ gấp hàng chục lần so với không gian mở, cực kỳ nguy hiểm cho người ngồi cùng.
            </p>
          </div>
          <div className="p-10 bg-school-red/5 text-school-red rounded-[40px]">
            <h3 className="text-2xl font-black italic uppercase mb-6">Trách nhiệm</h3>
            <p className="font-bold leading-relaxed mb-6 text-slate-900">
              Bạn có quyền được hít thở không khí trong sạch. Hãy dũng cảm yêu cầu người khác không hút thuốc nơi công cộng.
            </p>
            <div className="w-12 h-1 bg-school-red rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassiveSmoking;
