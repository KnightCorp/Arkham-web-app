import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Send, Brain, Clock, Feather, Scroll, BookOpen, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
}

export function TutorSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Greetings, seeker of knowledge. Which scholarly pursuit shall we explore in today\'s discourse?',
      timestamp: '12:00'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'A fascinating choice. Let us delve into the depths of this subject, uncovering its mysteries layer by layer.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Chat Interface */}
      <div className="lg:col-span-2 bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] p-4 shadow-xl relative overflow-hidden">
        {/* Ornate Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#4A4A4A] rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#4A4A4A] rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#4A4A4A] rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#4A4A4A] rounded-br-lg" />

        <div className="flex items-center gap-3 mb-6 p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
          <div className="p-2 bg-[#2A2A2A] rounded-full">
            <Scroll className="w-6 h-6 text-[#C0A080]" />
          </div>
          <div>
            <h3 className="font-serif text-[#E0D0C0] text-lg">Scholarly Guide</h3>
            <p className="text-[#8A8A8A] text-sm font-serif italic">Illuminating the path to wisdom</p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto space-y-4 mb-4 p-2 scrollbar-thin scrollbar-thumb-[#3A3A3A] scrollbar-track-[#1A1A1A]">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'flex gap-3',
                message.type === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.type === 'bot' && (
                <div className="w-10 h-10 rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center">
                  <Feather className="w-5 h-5 text-[#C0A080]" />
                </div>
              )}
              <div className={cn(
                'max-w-[80%]',
                message.type === 'user' ? 'items-end' : 'items-start'
              )}>
                <div className={cn(
                  'p-4 rounded-lg font-serif',
                  message.type === 'user'
                    ? 'bg-[#2A2A2A] text-[#E0D0C0] border border-[#3A3A3A]'
                    : 'bg-[#1A1A1A] text-[#E0D0C0] border border-[#3A3A3A]'
                )}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                <div className={cn(
                  'flex items-center gap-2 mt-2 text-xs text-[#8A8A8A]',
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                )}>
                  <Clock className="w-3 h-3" />
                  <span className="font-serif italic">{message.timestamp}</span>
                </div>
              </div>
              {message.type === 'user' && (
                <div className="w-10 h-10 rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center">
                  <User className="w-5 h-5 text-[#C0A080]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Inscribe your query..."
            className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-4 pr-12 py-3 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080] font-serif"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
          >
            <Send className="w-5 h-5 text-[#C0A080]" />
          </button>
        </div>
      </div>

      {/* Study Resources */}
      <div className="space-y-4">
        <div className="bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] p-4 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-[#C0A080]" />
            <h3 className="font-serif text-[#E0D0C0]">Ancient Tomes</h3>
          </div>
          <div className="space-y-2">
            {[
              'Philosophical Treatises',
              'Mathematical Manuscripts',
              'Scientific Compendium',
              'Historical Archives'
            ].map((resource) => (
              <button
                key={resource}
                className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg text-[#E0D0C0] text-sm text-left transition-colors font-serif"
              >
                {resource}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] p-4 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-[#C0A080]" />
            <h3 className="font-serif text-[#E0D0C0]">Scholar's Progress</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-serif">
              <span className="text-[#8A8A8A]">Hours of Study</span>
              <span className="text-[#E0D0C0]">2.5 hours</span>
            </div>
            <div className="flex justify-between items-center text-sm font-serif">
              <span className="text-[#8A8A8A]">Queries Resolved</span>
              <span className="text-[#E0D0C0]">24</span>
            </div>
            <div className="flex justify-between items-center text-sm font-serif">
              <span className="text-[#8A8A8A]">Subjects Mastered</span>
              <span className="text-[#E0D0C0]">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}