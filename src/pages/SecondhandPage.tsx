import React from 'react';
import { motion } from 'motion/react';
import PassiveSmoking from '../components/PassiveSmoking';
import ScrollIndicator from '../components/ScrollIndicator';

// Import bức ảnh điếu thuốc local vừa lưu
import SmokeImage from './2.jpg';

const SecondhandPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-emerald-50 py-24 px-4 md:px-8 text-center border-b border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase tracking-tighter mb-6 relative z-10"
        >
          Khói Thuốc <span className="text-emerald-600">Thụ Động</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 max-w-2xl mx-auto text-xl font-medium mb-12 relative z-10"
        >
          Đừng để người thân của bạn phải gánh chịu hậu quả từ những làn khói mà bạn tạo ra. Một thế giới không khói thuốc bắt đầu từ ý thức của chính bạn.
        </motion.p>

        {/* Ô hình chữ nhật hiển thị bức ảnh điếu thuốc */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="max-w-4xl mx-auto rounded-[50px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100"
        >
          <img 
            src={SmokeImage} 
            alt="Passive smoking impact" 
            className="w-full h-[450px] object-cover"
          />
        </motion.div>
        
        <ScrollIndicator targetId="passive-content" className="mt-12" />
      </div>

      <div id="passive-content" className="relative z-20 -mt-10">
        <PassiveSmoking />
      </div>
    </div>
  );
};

export default SecondhandPage;