import React from 'react';
import { motion } from 'motion/react';
import { Heart, Wind, ShieldAlert, Users } from 'lucide-react';

const ImpactCard = ({ icon: Icon, title, description, delay, colorClass, image }: { icon: React.ElementType, title: string, description: string, delay: number, colorClass: string, key?: React.Key, image?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
  >
    {image && (
      <div className="w-full h-40 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      </div>
    )}
    <div className="p-8 pt-4 flex flex-col items-center">
      <div className={`w-14 h-14 ${colorClass} rounded-full flex items-center justify-center mb-6 shadow-inner -mt-10 relative z-10 bg-white`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default ImpactCard;
