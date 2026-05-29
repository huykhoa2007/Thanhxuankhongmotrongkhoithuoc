import React from 'react';
import { Link } from 'react-router-dom';
import logoNvt from './logo nvt.png';
import { HeartPulse, Github, Facebook, Mail, Award, School } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 pt-32 pb-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-school-green/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-20 h-20 bg-white rounded-full p-0.5 shadow-lg flex items-center justify-center overflow-hidden shrink-0 group-hover:rotate-[360deg] transition-transform duration-1000">
                <img 
                  src={logoNvt} 
                  alt="Logo THPT Nguyễn Văn Thoại" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none mb-2">
                  Hơi Thở Sạch
                </h2>
                <span className="text-xs tracking-[0.4em] uppercase text-school-green font-black">Nụ Cười Xanh</span>
              </div>
            </Link>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl mb-12">
              Chúng tôi không chỉ truyền thông, chúng tôi xây dựng một văn hóa sống khỏe. 
              Góp phần kiến tạo một Việt Nam không khói thuốc, bảo vệ nụ cười của hàng triệu bạn trẻ.
            </p>
            <div className="flex gap-6">
              {[Facebook, Github, Mail].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ scale: 1.2, rotate: 12, backgroundColor: "#006837" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all backdrop-blur-md"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Bento */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10 pl-4 border-l-2 border-school-green">
              Khám phá chiến dịch
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { name: 'Tác Hại', href: '/tac-hai' },
                { name: 'Thụ Động', href: '/thu-dong' },
                { name: 'Tuyên Truyền', href: '/tuyen-truyen' },
                { name: 'Hướng Dẫn', href: '/huong-dan' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                >
                  <span className="text-sm font-black text-slate-400 group-hover:text-white uppercase tracking-widest transition-colors">
                    {link.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-school-green transition-colors">
                    <span className="text-white text-xs font-black">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Project & Authors Bento */}
          <div className="lg:col-span-4">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-10 relative overflow-hidden group hover:border-school-green/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <Award size={80} className="text-school-green" />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-school-green text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-xl shadow-school-green/20">
                  Dự án đạt giải 2026
                </span>
                <h5 className="text-2xl font-black text-white uppercase italic leading-tight mb-10 tracking-tight">
                  Cuộc thi thiết kế bài giảng <br/> phòng, chống tác hại thuốc lá
                </h5>

                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Nhóm tác giả đại diện</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 group/author">
                        <div className="w-12 h-12 rounded-full bg-school-green/20 flex items-center justify-center font-black text-school-green border border-school-green/30 group-hover/author:bg-school-green group-hover/author:text-white transition-colors">TT</div>
                        <span className="text-lg font-black text-white uppercase tracking-tight group-hover/author:translate-x-2 transition-transform">Phạm Thị Thanh Thủy</span>
                      </div>
                      <div className="flex items-center gap-4 group/author">
                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-black text-slate-400 border border-white/5 group-hover/author:bg-school-green group-hover/author:text-white transition-colors">HP</div>
                        <span className="text-lg font-black text-white uppercase tracking-tight group-hover/author:translate-x-2 transition-transform">Phạm Thị Hoài Phương</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-school-green">
                        <School size={20} />
                      </div>
                      <span className="text-xs font-black text-slate-300 uppercase tracking-widest leading-none">
                        Trường THPT <br/> Nguyễn Văn Thoại
                      </span>
                    </div>
                    <div className="flex items-center gap-4 pl-14">
                      <div className="w-2 h-2 rounded-full bg-school-red animate-pulse" />
                      <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Đà Nẵng, Việt Nam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-school-red to-orange-600 rounded-[32px] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-school-red/20"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">Bạn cần sự giúp đỡ?</h3>
            <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Tổng đài tư vấn cai nghiện miễn phí 24/7</p>
          </div>
          <a 
            href="tel:18006606"
            className="group px-12 py-6 bg-white text-school-red rounded-full flex items-center gap-4 hover:scale-105 transition-transform shadow-xl"
          >
            <span className="text-4xl font-black tabular-nums tracking-tighter italic">1800 6606</span>
            <div className="w-12 h-12 rounded-full bg-school-red text-white flex items-center justify-center group-hover:rotate-12 transition-transform">
              <HeartPulse size={24} />
            </div>
          </a>
        </motion.div>

        {/* Commitment CTA */}
        <div className="mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-8 md:p-16 text-center relative overflow-hidden group hover:border-school-green/40 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-school-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-slate-800 rounded-3xl mx-auto mb-8 flex items-center justify-center text-school-green group-hover:bg-school-green group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-12 shadow-xl"
            >
              <Award size={40} />
            </motion.div>

            <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Bạn Đã Sẵn Sàng <span className="text-school-green">Thay Đổi?</span>
            </h4>
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              Hành động nhỏ, ý nghĩa lớn. Hãy cùng hàng ngàn bạn trẻ khác ký tên vào bảng cam kết xây dựng một tương lai không khói thuốc.
            </p>

            <Link to="/cam-ket">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 104, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-school-green text-white rounded-2xl text-xl font-black uppercase tracking-[0.2em] italic shadow-2xl shadow-school-green/20 relative overflow-hidden"
              >
                <span className="relative z-10">Cam Kết Cai Thuốc Ngay</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px] font-black uppercase tracking-widest">
            <span className="text-slate-600">© 2026</span>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-white group-hover:text-school-green transition-colors duration-300">Hơi Thở Sạch Campaign</span>
            </div>
            <span className="hidden md:inline text-slate-800">|</span>
            <div className="flex items-center gap-3">
              <span className="text-slate-500">Thiết kế bởi</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-school-green border border-white/5">
                NVT HS TEAM
              </span>
            </div>
          </div>
          
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="/luat-phap" className="hover:text-white transition-all duration-300">Luật pháp</Link>
            <Link to="/ho-tro" className="hover:text-white transition-all duration-300">Hỗ trợ</Link>
            <Link to="/" className="hover:text-white transition-all duration-300">Trang chủ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
