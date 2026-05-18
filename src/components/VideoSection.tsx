import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: "QQDlMrR0m3o",
      title: "Thuốc lá tàn phá cơ thể bạn như thế nào",
      provider: "YouTube"
    },
    {
      id: "g5JeHgAnMRs",
      title: "Cách Thuốc Lá tàn phá cơ thể bạn",
      provider: "YouTube"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-school-red/5 text-school-red text-xs font-bold tracking-widest uppercase mb-6">
            Thư viện truyền thông
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">
            Video <span className="text-school-red">Minh Họa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-[40px] overflow-hidden bg-slate-900 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-8 flex justify-between items-center px-4">
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight mb-1">{v.title}</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{v.provider}</p>
                </div>
                <div className="w-12 h-12 bg-school-red rounded-full flex items-center justify-center text-white">
                  <Play size={20} fill="#fff" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
