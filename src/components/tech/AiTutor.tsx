import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Send, Award, Bot, User, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
  isQuestion?: boolean;
  points?: number;
}

export function AiTutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Welcome to your Python fundamentals lesson. I'll be your guide through data types and their applications. Ready to begin?",
      options: ['Yes, let\'s start', 'Tell me more about the course']
    }
  ]);
  const [input, setInput] = useState('');
  const [earnedPoints, setEarnedPoints] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "That's a great observation. Let's dive deeper into Python's data types. Here's a question for you:",
        isQuestion: true,
        options: [
          'int - Integer numbers',
          'float - Decimal numbers',
          'str - Text strings',
          'bool - True/False values'
        ],
        points: 50
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleOptionClick = (option: string, points?: number) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: option
    };

    setMessages(prev => [...prev, userMessage]);

    if (points) {
      setEarnedPoints(prev => prev + points);
    }

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "Excellent choice! You've correctly identified a fundamental data type. Let's explore how it's used in practice.",
        options: ['Show me an example', 'What about other data types?']
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="col-span-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/95 p-6 rounded-lg border border-white/10 h-[600px] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-emerald-500/70" />
            <h2 className="text-xl font-serif text-white">Python Mentor</h2>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500/80" />
            <span className="text-yellow-500/80">{earnedPoints} XP</span>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn(
                  'flex gap-3',
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-emerald-500/70" />
                  </div>
                )}
                <div className={cn(
                  'max-w-[80%] space-y-2',
                  message.type === 'user' ? 'items-end' : 'items-start'
                )}>
                  <div className={cn(
                    'p-3 rounded-lg',
                    message.type === 'user'
                      ? 'bg-emerald-500/10 text-emerald-100'
                      : 'bg-white/5 text-white/90'
                  )}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.options && (
                    <div className="space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option, message.points)}
                          className="w-full p-2 text-left text-sm bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-emerald-500/70" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-white/90 placeholder:text-white/50 focus:outline-none focus:border-emerald-500/50"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5 text-emerald-500/70" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}