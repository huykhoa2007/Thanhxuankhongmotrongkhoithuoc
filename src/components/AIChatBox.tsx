import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatBox = ({ isOpen, onClose }: AIChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Chào bạn, tôi là Bác sĩ Xanh. Tôi có thể giúp gì cho bạn trong hành trình tìm lại hơi thở sạch hôm nay?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Don't include the initial welcome message in history if it's the only one
      // Filter out messages to ensure it starts with 'user'
      const historyItems = messages.slice(1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: historyItems })
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setMessages(prev => [...prev, { role: 'model', text: data.text }]);
      } else {
        throw new Error(data.error || 'Có lỗi xảy ra');
      }
    } catch (error: any) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: `Rất tiếc, tôi đang gặp sự cố: ${error.message}. Bạn vui lòng kiểm tra lại kết nối hoặc thử lại sau nhé!` }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          height: isMinimized ? '80px' : '600px'
        }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        className="fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-48px)] bg-white rounded-[32px] shadow-2xl border border-slate-100 z-[1000] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 bg-school-green text-white flex items-center justify-between cursor-pointer" onClick={() => isMinimized && setIsMinimized(false)}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot size={24} />
            </div>
            <div>
              <h4 className="font-black italic uppercase text-sm tracking-tight">Bác sĩ Xanh</h4>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest text-emerald-100">Đang trực tuyến</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <>
            <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-school-green/10 text-school-green'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-school-green/10 text-school-green flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-school-green" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">BS Xanh đang soạn...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn cho bác sĩ..."
                  className="w-full pl-4 pr-12 py-4 bg-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-school-green/30 border-none transition-shadow"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-school-green text-white rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="mt-3 text-[10px] text-center text-slate-400 font-bold uppercase tracking-[0.2em]">Bảo mật tuyệt đối • Tư vấn hoàn toàn miễn phí</p>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AIChatBox;
