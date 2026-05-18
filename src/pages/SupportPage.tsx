import React, { useState } from 'react';
import { Phone, MessageCircle, Heart, ShieldCheck, Users, HelpCircle, ArrowRight, Zap, Headphones, Mail, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollIndicator from '../components/ScrollIndicator';
import AIChatBox from '../components/AIChatBox';

const SupportCard = ({ icon: Icon, title, desc, value, action, link, onClick, color, bg }: any) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full relative group transition-all"
  >
    <div className={`w-16 h-16 ${bg} ${color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-slate-900">{title}</h3>
    <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">{desc}</p>
    
    {value && (
      <div className={`text-4xl md:text-5xl font-black ${color} tabular-nums italic mb-8 drop-shadow-sm`}>
        {value}
      </div>
    )}

    {action && link ? (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 ${bg} ${color} rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:shadow-lg transition-all`}
      >
        {action} <ArrowRight size={16} />
      </motion.a>
    ) : action ? (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 ${bg} ${color} rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:shadow-lg transition-all`}
      >
        {action} <ArrowRight size={16} />
      </motion.button>
    ) : (
      <motion.a
        href={`tel:${value?.replace(/\s/g, '')}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-5 bg-school-green text-white rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-school-green/20"
      >
        Gọi ngay <Phone size={18} />
      </motion.a>
    )}
  </motion.div>
);

const ConcernItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-100 last:border-0 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h4 className="text-xl font-bold text-slate-900 group-hover:text-school-green transition-colors leading-tight">
          {question}
        </h4>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-school-green/10 group-hover:text-school-green transition-all`}
        >
          <HelpCircle size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-2 text-slate-600 font-medium leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SupportPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop" 
            alt="Support community" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-school-green rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 s-20 bg-school-green/20 text-school-green rounded-3xl mx-auto mb-10 flex items-center justify-center backdrop-blur-xl border border-school-green/30"
          >
            <Headphones size={40} className="p-2" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-black text-white mb-10 italic uppercase tracking-tighter leading-[0.85]"
          >
            Bạn Không Cô Đơn <br/> Trong <span className="text-school-green">Hành Trình</span> Này
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed italic"
          >
            Chúng tôi luôn ở đây để lắng nghe, thấu hiểu và đồng hành cùng bạn trên con đường tìm lại hơi thở sạch và nụ cười xanh trọn vẹn.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="tel:18006606"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0, 104, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-school-green text-white rounded-3xl font-black text-2xl transition-all flex items-center justify-center gap-4 group italic tracking-tighter tabular-nums"
            >
              <Phone size={32} className="group-hover:rotate-12 transition-transform" /> 1800 6606
            </motion.a>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsChatOpen(true)}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white/5 backdrop-blur-md text-white border-2 border-white/20 rounded-3xl font-black text-xl hover:border-white transition-all flex items-center justify-center gap-4 uppercase tracking-widest italic"
            >
              <MessageCircle size={28} /> Nhắn tin hỗ trợ
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            {[
              { icon: ShieldCheck, label: "Bảo mật tuyệt đối" },
              { icon: Zap, label: "Hỗ trợ 24/7" },
              { icon: Heart, label: "Hoàn toàn miễn phí" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                <item.icon size={16} className="text-school-green" />
                {item.label}
              </div>
            ))}
          </motion.div>

          <ScrollIndicator targetId="support-cards" className="mt-20" />
        </div>
      </section>

      {/* Support Cards Grid */}
      <section id="support-cards" className="py-24 px-6 relative -mt-24 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <SupportCard 
              icon={Phone}
              title="Tổng đài quốc gia"
              desc="Tư vấn cai nghiện miễn phí và hỗ trợ lộ trình bỏ thuốc khoa học 24/7 với sự tham gia của các bác sĩ chuyên khoa."
              value="1800 6606"
              color="text-school-green"
              bg="bg-school-green/10"
            />
            
            <SupportCard 
              icon={MessageCircle}
              title="Hỗ trợ cộng đồng"
              desc="Tham gia các nhóm Zalo/Facebook cộng đồng hỗ trợ cai thuốc để nhận bí quyết và sự khích lệ từ những người đi trước."
              action="Tham gia nhóm"
              link="https://www.facebook.com/groups/hoibothuocla/?locale=vi_VN"
              color="text-blue-600"
              bg="bg-blue-50"
            />

            <SupportCard 
              icon={Users}
              title="Tại Trường Học"
              desc="Liên hệ Phòng Y tế hoặc Đoàn thanh niên để nhận được sự hỗ trợ kín đáo, chân thành và các tài liệu cai thuốc trực quan."
              action="Tìm phòng y tế"
              color="text-amber-600"
              bg="bg-amber-50"
            />
          </div>
        </div>
      </section>

      {/* Concerns & FAQ */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.9]">
              Bạn Đang <br/> <span className="text-school-green">Lo Lắng</span> Điều Gì?
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 italic">
              Chúng tôi hiểu rằng việc từ bỏ một thói quen không bao giờ là dễ dàng. Hãy xem các câu hỏi thường gặp hoặc chia sẻ trực tiếp với chúng tôi.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden mb-10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                alt="Living healthy" 
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold italic">Bắt đầu một lối sống tích cực từ hôm nay</p>
              </div>
            </motion.div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-school-green/30 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-school-green shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-black uppercase tracking-widest text-xs text-slate-400 mb-1">Email chuyên gia</h5>
                  <p className="font-bold text-slate-900">tuvan@hoithosach.vn</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[48px] border border-slate-100 shadow-sm"
          >
            <ConcernItem 
              question="Tôi có bị 'nghiện' nặng quá không?"
              answer="Dù bạn hút nhiều hay ít, thói quen đều có thể thay đổi. Quan trọng là bạn đã bắt đầu nghĩ về việc dừng lại. Chúng tôi sẽ giúp bạn đánh giá mức độ phụ thuộc để có giải pháp phù hợp."
            />
            <ConcernItem 
              question="Việc bảo mật thông tin như thế nào?"
              answer="Mọi thông tin cá nhân của bạn đều được bảo mật tuyệt đối 100%. Các chuyên gia tư vấn cam kết không chia sẻ dữ liệu với bên thứ ba trừ khi có sự đồng ý của bạn."
            />
            <ConcernItem 
              question="Tôi nên bắt đầu từ đâu?"
              answer="Hãy bắt đầu bằng một cuộc gọi đến 1800 6606. Đó là nơi bạn được lắng nghe và nhận những bước đầu tiên cực kỳ đơn giản để bắt đầu hành trình mới."
            />
            <ConcernItem 
              question="Có tốn phí gì không?"
              answer="Toàn bộ các dịch vụ tư vấn qua tổng đài và tài liệu hỗ trợ đều hoàn toàn miễn phí. Đây là nỗ lực của cộng đồng nhằm giúp giới trẻ Việt Nam thoát khỏi khói thuốc."
            />
          </motion.div>
        </div>
      </section>

      {/* Motivation Banner */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-slate-900 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group min-h-[500px] flex flex-col justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1441750695175-8627582d968c?q=80&w=1600&auto=format&fit=crop" 
            alt="Success path" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-school-green/20 group-hover:bg-school-green/30 transition-colors pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-school-green/40 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8 relative z-10 leading-[0.85]">
            Mọi Hành Trình Vạn Dặm <br/> Đều Bắt Đầu Bằng <br/> <span className="text-school-green drop-shadow-[0_0_20px_rgba(0,104,55,0.5)]">Một Bước Chân</span>
          </h2>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  alt="User avatar" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-slate-900"
                />
              ))}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-slate-900 bg-school-green flex items-center justify-center text-white text-xs font-black">
                +2k
              </div>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] italic">
              Đã có hơn 2,400 bạn trẻ nhận được hỗ trợ trong tháng này
            </p>
          </div>
        </motion.div>
      </section>

      <AIChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default SupportPage;

