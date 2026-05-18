import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
  color?: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId, color = "text-slate-400", className = "" }) => {
  const scrollToNextSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center py-8 ${className}`}>
      <motion.button
        onClick={scrollToNextSection}
        initial={{ y: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className={`flex flex-col items-center gap-2 group transition-all duration-300`}
      >
        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${color} opacity-40 group-hover:opacity-100 transition-opacity`}>
          Khám phá tiếp
        </span>
        <div className={`w-12 h-12 rounded-full border-2 border-current ${color} opacity-20 group-hover:opacity-100 group-hover:scale-110 flex items-center justify-center transition-all duration-300`}>
          <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
        </div>
      </motion.button>
    </div>
  );
};

export default ScrollIndicator;
