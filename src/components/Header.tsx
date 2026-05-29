import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// CHỈ THÊM DÒNG NÀY: Để nhận diện file ảnh logo
import logoNvt from './logo nvt.png';
import Clock from './Clock';
import SiteSearch from './SiteSearch';
import { Menu, X, Headset } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tác Hại', href: '/tac-hai' },
    { name: 'Thụ Động', href: '/thu-dong' },
    { name: 'Tuyên Truyền', href: '/tuyen-truyen' },
    { name: 'Hướng Dẫn', href: '/huong-dan' },
    { name: 'Luật Pháp', href: '/luat-phap' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2 border-b border-white/50' 
          : location.pathname !== '/'
            ? 'bg-white/80 backdrop-blur-md py-3 border-b border-white/20'
            : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link 
            to="/" 
            className="flex items-center gap-3 lg:gap-4 group"
          >
            <motion.div
              whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-full shadow-sm overflow-hidden p-0.5 flex items-center justify-center"
            >
              {/* CHỈ THAY ĐỔI: Chuyển đổi thành thẻ img để bọc trọn vẹn logo hình tròn */}
              <img 
                src={logoNvt} 
                alt="Logo THPT Nguyễn Văn Thoại" 
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain rounded-full"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.8] transition-all duration-300 group-hover:text-school-green">
                Hơi Thở <span className="text-school-green group-hover:text-slate-900">Sạch</span>
              </span>
              <span className="text-[8px] lg:text-[10px] font-black tracking-[0.3em] lg:tracking-[0.4em] uppercase text-slate-400 mt-1 transition-all duration-300 group-hover:tracking-[0.5em]">
                Nụ Cười Xanh
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav - Use hidden xl:flex instead of 2xl */}
        <nav className="hidden xl:flex items-center justify-center gap-1 mx-2">
          {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 py-2 group"
              >
                <span className={`relative z-10 text-[14px] lg:text-[15px] font-black uppercase tracking-[0.1em] transition-all duration-300 group-hover:scale-105 inline-block ${
                  location.pathname === link.href ? 'text-school-green' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {link.name}
                </span>
                
                {/* Hover Pill Background */}
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="header-hover"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-x-0 inset-y-0 bg-slate-100 rounded-xl -z-0"
                    />
                  )}
                </AnimatePresence>

                {/* Active Indicator Line */}
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-school-green rounded-full shadow-[0_0_15px_rgba(0,104,55,0.4)]"
                  />
                )}
              </Link>
          ))}
        </nav>

        {/* Right: Utilities */}
        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
          <div className="hidden 2xl:block">
            <Clock />
          </div>
          
          <div className="flex items-center gap-2 lg:gap-3">
            <SiteSearch />

            <Link to="/ho-tro">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#f8fafc",
                  borderColor: "#008a4a"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-3 lg:px-5 py-2 lg:py-3 bg-white border border-slate-100 rounded-xl lg:rounded-2xl text-slate-600 hover:text-school-green transition-all relative group flex items-center gap-2 shadow-sm hover:shadow-xl hover:shadow-school-green/10"
              >
                <div className="relative">
                  <Headset size={20} lg:size={22} strokeWidth={2.5} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <span className="text-[12px] lg:text-[13px] font-black uppercase tracking-widest hidden lg:block">
                  Hỗ Trợ
                </span>
              </motion.button>
            </Link>
            
            <Link to="/huong-dan">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px -5px rgba(0, 104, 55, 0.3)",
                  backgroundColor: "#008a4a" 
                }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block px-5 lg:px-8 py-2.5 lg:py-3 bg-school-green text-white text-[12px] lg:text-[13px] font-black rounded-xl lg:rounded-2xl uppercase tracking-[0.1em] lg:tracking-[0.15em] italic shadow-xl shadow-school-green/20 border border-white/10"
              >
                Cai thuốc ngay
              </motion.button>
            </Link>

            {/* Mobile menu toggle */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="xl:hidden p-2.5 bg-slate-100 rounded-xl text-slate-900 border border-slate-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl p-8 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-2xl font-black uppercase tracking-tight italic py-2 ${
                      location.pathname === link.href ? 'text-school-green' : 'text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* ĐÃ VÁ LỖI: Điền đầy đủ dấu ngoặc kép để đóng thuộc tính className ở dòng dưới */}
                <Link 
                  to="/huong-dan"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-5 bg-school-green text-white font-black text-center rounded-[20px] shadow-2xl shadow-school-green/30 uppercase tracking-widest italic mt-4"
                >
                  Cai thuốc ngay
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
