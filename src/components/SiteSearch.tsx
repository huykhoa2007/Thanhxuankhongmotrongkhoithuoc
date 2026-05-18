import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const SiteSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ title: string; path: string; sectionId?: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Search mappings for the site
  const siteContent = [
    { keywords: ['tác hại', 'ung thư', 'bệnh', 'phổi', 'tim mạch', 'răng'], title: 'Tác hại của thuốc lá', path: '/tac-hai' },
    { keywords: ['thụ động', 'trẻ em', 'phụ nữ', 'khói thuốc', 'gia đình'], title: 'Hút thuốc thụ động', path: '/thu-dong' },
    { keywords: ['lợi ích', 'tiền', 'tài chính', 'sức khỏe', 'thời gian'], title: 'Lợi ích khi bỏ thuốc', path: '/loi-ich' },
    { keywords: ['hướng dẫn', 'cách bỏ', 'cai thuốc', 'mẹo', 'lộ trình'], title: 'Hướng dẫn cai thuốc', path: '/huong-dan' },
    { keywords: ['luật pháp', 'quy định', 'xử phạt', 'nghị định', 'nơi cấm'], title: 'Luật phòng chống thuốc lá', path: '/luat-phap' },
    { keywords: ['hỗ trợ', 'tổng đài', 'tư vấn', 'liên hệ', 'giúp đỡ'], title: 'Hỗ trợ & Tư vấn', path: '/ho-tro' },
    { keywords: ['tài chính', 'tiết kiệm', 'ví tiền'], title: 'Tác động tài chính', path: '/', sectionId: 'financial' },
    { keywords: ['video', 'clip', 'phim'], title: 'Video tuyên truyền', path: '/', sectionId: 'video' },
    { keywords: ['thống kê', 'con số', 'tử vong'], title: 'Thống kê thực trạng', path: '/', sectionId: 'stats' },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    setQuery(val);

    if (val.length > 1) {
      const filtered = siteContent.filter(item => 
        item.keywords.some(k => k.includes(val)) || 
        item.title.toLowerCase().includes(val)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (item: { path: string; sectionId?: string }) => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    
    navigate(item.path);
    
    if (item.sectionId) {
      setTimeout(() => {
        const el = document.getElementById(item.sectionId!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="p-3 bg-slate-100 rounded-2xl text-slate-600 hover:text-slate-900 transition-colors"
      >
        <SearchIcon size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-[32px] shadow-2xl z-[70] overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center gap-4">
                <SearchIcon size={24} className="text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Bạn đang tìm kiếm điều gì? (ví dụ: cai thuốc, tài chính...)"
                  className="flex-1 bg-transparent border-none outline-none text-xl font-bold text-slate-900 placeholder:text-slate-300"
                  value={query}
                  onChange={handleSearch}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-4">
                {results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((result, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleSelect(result)}
                        className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 text-left group transition-all"
                      >
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-school-green mb-1">Cần tìm</p>
                          <p className="text-lg font-bold text-slate-900">{result.title}</p>
                        </div>
                        <ArrowRight size={20} className="text-slate-300 group-hover:text-school-green group-hover:translate-x-1 transition-all" />
                      </motion.button>
                    ))}
                  </div>
                ) : query.length > 1 ? (
                  <div className="py-12 text-center">
                    <p className="text-slate-400 font-bold italic">Không tìm thấy kết quả nào cho "{query}"</p>
                  </div>
                ) : (
                  <div className="py-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 px-4">Gợi ý tìm kiếm</p>
                    <div className="grid grid-cols-2 gap-3 px-2">
                      {siteContent.slice(0, 4).map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(item)}
                          className="p-4 rounded-2xl bg-slate-50 text-left hover:bg-slate-100 transition-colors"
                        >
                          <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Hơi Thở Sạch Search v1.0</span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Phím ESC để đóng</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SiteSearch;
