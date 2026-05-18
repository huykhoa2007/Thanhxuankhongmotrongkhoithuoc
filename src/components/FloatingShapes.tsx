import React from 'react';
import { motion } from 'motion/react';
import { CigaretteOff } from 'lucide-react';

const FloatingShapes = () => {
  const shapes = [
    { size: 'w-12 h-12', color: 'bg-school-green/20', initial: { x: '10%', y: '20%' }, duration: 15, rotate: 45 },
    { size: 'w-48 h-48', color: 'bg-school-red/10', initial: { x: '80%', y: '15%' }, duration: 30, rotate: -20 },
    { size: 'w-16 h-16', color: 'bg-school-yellow/20', initial: { x: '50%', y: '60%' }, duration: 18, rotate: 10 },
    { size: 'w-32 h-32', color: 'bg-school-blue/10', initial: { x: '15%', y: '75%' }, duration: 25, rotate: 90 },
    { size: 'w-24 h-24', color: 'bg-emerald-400/10', initial: { x: '70%', y: '85%' }, duration: 22, rotate: -45 },
    { size: 'w-6 h-6', color: 'bg-rose-400/20', initial: { x: '30%', y: '40%' }, duration: 12, rotate: 180 },
    { size: 'w-40 h-40', color: 'bg-indigo-400/5', initial: { x: '40%', y: '10%' }, duration: 40, rotate: 15 },
    // Floating Icons
    { isIcon: true, size: 24, color: 'text-school-red/30', initial: { x: '25%', y: '30%' }, duration: 14, rotate: 0 },
    { isIcon: true, size: 40, color: 'text-slate-400/20', initial: { x: '65%', y: '45%' }, duration: 19, rotate: 15 },
    { isIcon: true, size: 32, color: 'text-school-green/30', initial: { x: '85%', y: '70%' }, duration: 16, rotate: -10 },
    { isIcon: true, size: 48, color: 'text-school-red/10', initial: { x: '45%', y: '80%' }, duration: 24, rotate: 25 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 mesh-gradient opacity-10" />
      
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${!shape.isIcon ? `${shape.size} ${shape.color} backdrop-blur-3xl rounded-[2rem] border border-white/10` : `${shape.color}`} flex items-center justify-center cursor-pointer`}
          initial={{ 
            left: shape.initial.x, 
            top: shape.initial.y,
            rotate: shape.rotate,
            opacity: 0
          }}
          whileHover={{ 
            scale: 1.5, 
            rotate: shape.rotate + 45,
            zIndex: 50,
            backgroundColor: !shape.isIcon ? (i % 2 === 0 ? "rgba(0, 104, 55, 0.3)" : "rgba(190, 30, 45, 0.2)") : undefined,
            color: shape.isIcon ? "rgba(190, 30, 45, 1)" : undefined
          }}
          animate={{
            left: [shape.initial.x, `${parseFloat(shape.initial.x) + (i % 2 === 0 ? 5 : -5)}%`, shape.initial.x],
            top: [shape.initial.y, `${parseFloat(shape.initial.y) + (i % 3 === 0 ? 5 : -5)}%`, shape.initial.y],
            rotate: [shape.rotate, shape.rotate + 180, shape.rotate + 360],
            scale: [1, 1.1, 1],
            opacity: shape.isIcon ? [0.1, 0.3, 0.1] : [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {shape.isIcon && <CigaretteOff size={shape.size} />}
        </motion.div>
      ))}
      
      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default FloatingShapes;
