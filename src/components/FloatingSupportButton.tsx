import React from 'react';
import { motion } from 'motion/react';
import { Headset } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingSupportButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Không hiển thị nếu đang ở trang hỗ trợ (hoặc tùy chọn hiển thị luôn)
  if (location.pathname === '/ho-tro') return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotate: [0, -10, 10, -10, 10, 0], // Rung lắc nhẹ
      }}
      transition={{
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 },
        rotate: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 2
        }
      }}
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <button
        onClick={() => navigate('/ho-tro')}
        className="relative group flex items-center justify-center w-16 h-16 bg-school-green text-white rounded-full shadow-2xl shadow-school-green/40 border-2 border-white/20 transition-all"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-school-green animate-ping opacity-20 group-hover:hidden" />
        
        <Headset size={30} strokeWidth={2.5} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none italic">
          Cần giúp đỡ?
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-8 border-transparent border-l-slate-900" />
        </div>
      </button>
    </motion.div>
  );
};

export default FloatingSupportButton;
