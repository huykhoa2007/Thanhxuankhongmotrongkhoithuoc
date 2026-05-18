import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const dayName = days[date.getDay()];
    const dateStr = date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return `${dayName}, ${dateStr}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="hidden lg:flex items-center gap-4 px-5 py-2.5 bg-white/40 backdrop-blur-md border border-white/60 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] select-none group transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(0,138,74,0.15)] hover:border-school-green/30"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 shadow-lg group-hover:bg-school-green transition-colors duration-500">
        <ClockIcon size={18} className="text-white animate-pulse" />
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black text-slate-900 tracking-tighter leading-none">
            {time.toLocaleTimeString('vi-VN', { hour12: false, hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="text-xs font-bold text-school-green animate-pulse">
            :{time.toLocaleTimeString('vi-VN', { second: '2-digit' })}
          </span>
        </div>
        <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mt-1 group-hover:text-slate-600 transition-colors">
          {formatDate(time)}
        </div>
      </div>
    </motion.div>
  );
};

export default Clock;
