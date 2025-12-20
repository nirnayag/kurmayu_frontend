
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Send, Leaf, Sparkles, User, AlertCircle, RefreshCcw, MessageCircle, X, Minus } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

const TypingDots: React.FC = () => (
  <div className="flex gap-1.5 items-center h-5 px-1">
    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></div>
  </div>
);

/**
 * FormattedMessage parses basic markdown (bold and lists) into React elements
 */
const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const processLineText = (line: string) => {
    // Handle bold text **bold**
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-emerald-900 underline-offset-2">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const listKey = `list-${elements.length}`;
      if (listType === 'ul') {
        elements.push(
          <ul key={listKey} className="list-disc ml-5 my-2 space-y-1.5 text-gray-700">
            {currentList}
          </ul>
        );
      } else {
        elements.push(
          <ol key={listKey} className="list-decimal ml-5 my-2 space-y-1.5 text-gray-700">
            {currentList}
          </ol>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ');
    const isNumbered = /^\d+\.\s/.test(trimmed);

    if (isBullet) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(
        <li key={i} className="pl-1">
          {processLineText(trimmed.replace(/^(\*|-)\s/, ''))}
        </li>
      );
    } else if (isNumbered) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(
        <li key={i} className="pl-1">
          {processLineText(trimmed.replace(/^\d+\.\s/, ''))}
        </li>
      );
    } else {
      flushList();
      if (trimmed) {
        elements.push(
          <p key={i} className="mb-3 last:mb-0 leading-relaxed text-gray-700">
            {processLineText(line)}
          </p>
        );
      }
    }
  });

  flushList();

  return <div className="formatted-ai-response">{elements}</div>;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! I am your **Kurmayu AI** Wellness Assistant. How can I help you understand your health or constitution today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are an expert Ayurvedic Doctor (Vaidya) named 'Kurmayu AI'. 
        Your goal is to help users understand their constitution (Prakriti), identify potential imbalances (Vikriti), and suggest lifestyle, dietary, and herbal remedies based on ancient wisdom.
        
        Rules:
        1. Be empathetic, wise, and professional.
        2. Use Ayurvedic terminology (Dosha, Agni, Ama, Guna) but explain them simply.
        3. If symptoms sound serious, suggest consulting Dr. Ravi Shinde for a Nadi Pariksha (Pulse Diagnosis).
        4. Always end with a subtle disclaimer that this is educational guidance.
        5. Structure your response clearly. Use **bold text** for important terms.
        6. Use bulleted lists (*) for recommendations and items.`,
      },
    });
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, loading, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [
      ...prev, 
      { role: 'user', text: userMessage },
      { role: 'model', text: '' }
    ]);
    setLoading(true);

    try {
      const responseStream = await chatRef.current.sendMessageStream({ message: userMessage });
      
      let fullText = '';
      for await (const chunk of responseStream) {
        const chunkResponse = chunk as GenerateContentResponse;
        const textChunk = chunkResponse.text;
        if (textChunk) {
          fullText += textChunk;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: 'model', text: "I apologize, my connection to the cosmic wisdom was briefly interrupted. Could you please repeat that?" };
        return newMessages;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window Overlay */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[420px] h-[650px] bg-white rounded-[32px] shadow-2xl border border-emerald-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-300 ease-out origin-bottom-right">
          {/* Header */}
          <div className="bg-[#064E3B] p-5 text-white flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`bg-emerald-500/20 p-2 rounded-xl border border-emerald-400/30 transition-all duration-500 ${loading ? 'scale-110' : ''}`}>
                <Leaf size={20} className={`${loading ? 'animate-pulse text-emerald-400' : 'text-emerald-300'}`} />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-2">
                  Kurmayu AI Vaidya
                  {loading && <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>}
                </h3>
                <span className="text-[9px] text-emerald-300 uppercase tracking-widest font-bold">Online & Wisdom-Ready</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setMessages([{ role: 'model', text: "Namaste! How can I help you today?" }])} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors" title="Clear Chat">
                <RefreshCcw size={14} />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                <Minus size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 no-scrollbar bg-[#FDFCF7]/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-1 duration-200`}>
                <div className={`flex gap-3 max-w-[92%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-emerald-100 text-emerald-700' : 'bg-[#064E3B] text-white shadow-sm'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Leaf size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm transition-all duration-300 ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-gray-800 border border-emerald-50 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text ? (
                      <FormattedMessage text={msg.text} />
                    ) : (
                      <div className="flex flex-col gap-1">
                        <TypingDots />
                      </div>
                    )}
                    
                    {msg.role === 'model' && loading && idx === messages.length - 1 && msg.text && (
                      <div className="mt-4 opacity-50">
                        <TypingDots />
                      </div>
                    )}

                    {msg.role === 'model' && idx === messages.length - 1 && !loading && (
                      <div className="mt-4 pt-3 border-t border-emerald-50 flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase italic tracking-tight">
                        <AlertCircle size={10} /> Educational Guidance Only
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-emerald-50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe symptoms or ask about diet..."
              className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 text-sm font-medium transition-all"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#064E3B] text-white p-3 rounded-xl hover:bg-emerald-800 disabled:opacity-50 transition-all shadow-md flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-white text-emerald-900 border border-emerald-100 rotate-90' : 'bg-[#064E3B] text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : (
          <div className="relative">
            <MessageCircle size={28} className="animate-in fade-in zoom-in duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-[#064E3B] rounded-full animate-ping"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
