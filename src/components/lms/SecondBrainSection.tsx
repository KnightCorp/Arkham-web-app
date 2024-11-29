import { motion } from 'framer-motion';
import { Mic, StopCircle, Play, Pause, Brain, Sparkles, History, Settings, Wand2, MessageSquare, Bot, User, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'assistant' | 'user';
  content: string;
  timestamp: string;
  isAudio?: boolean;
}

export function SecondBrainSection() {
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'I am your Second Brain, an AI-powered voice assistant. How can I help you with your studies today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I understand your query. Let me help you analyze that concept and break it down into manageable parts.',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        const voiceMessage: Message = {
          id: Date.now().toString(),
          type: 'user',
          content: 'Can you explain the concept of quantum entanglement?',
          timestamp: new Date().toLocaleTimeString(),
          isAudio: true
        };
        setMessages(prev => [...prev, voiceMessage]);
        setIsRecording(false);
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Interface */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-[#C0A080]" />
            <h3 className="text-xl font-serif text-[#E0D0C0]">Second Brain Assistant</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
              <History className="w-5 h-5 text-[#8A8A8A]" />
            </button>
            <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-[#8A8A8A]" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: Wand2, label: 'Explain Concept' },
            { icon: MessageSquare, label: 'Discuss Topic' },
            { icon: Sparkles, label: 'Generate Quiz' }
          ].map((action) => (
            <button
              key={action.label}
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm transition-colors flex items-center gap-2"
            >
              <action.icon className="w-4 h-4" />
              {action.label}
            </button>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
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
              {message.type === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#C0A080]/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#C0A080]" />
                </div>
              )}
              <div className={cn(
                'max-w-[80%]',
                message.type === 'user' ? 'items-end' : 'items-start'
              )}>
                <div className={cn(
                  'p-4 rounded-lg',
                  message.type === 'user'
                    ? 'bg-[#C0A080]/10 text-[#E0D0C0]'
                    : 'bg-[#1A1A1A] text-[#E0D0C0]'
                )}>
                  <div className="flex items-center gap-2">
                    {message.isAudio && <Mic className="w-4 h-4 text-[#C0A080]" />}
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#8A8A8A]">
                  <Clock className="w-3 h-3" />
                  <span>{message.timestamp}</span>
                </div>
              </div>
              {message.type === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#C0A080]/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-[#C0A080]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleRecording}
            className={cn(
              'p-3 rounded-lg transition-colors flex items-center justify-center',
              isRecording
                ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                : 'bg-[#C0A080]/10 text-[#C0A080] hover:bg-[#C0A080]/20'
            )}
          >
            {isRecording ? (
              <StopCircle className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message or use voice input..."
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-4 pr-12 py-3 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080]"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
            >
              <Send className="w-5 h-5 text-[#C0A080]" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-xl p-6">
          <h4 className="text-lg font-serif text-[#E0D0C0] mb-4">Voice Commands</h4>
          <div className="space-y-2">
            {[
              'Explain [concept]',
              'Summarize [topic]',
              'Create quiz about [subject]',
              'Find related topics to [theme]'
            ].map((command) => (
              <div
                key={command}
                className="p-3 bg-[#1A1A1A] rounded-lg text-[#8A8A8A] text-sm"
              >
                {command}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h4 className="text-lg font-serif text-[#E0D0C0] mb-4">Learning Insights</h4>
          <div className="space-y-3">
            <div className="p-3 bg-[#1A1A1A] rounded-lg">
              <div className="text-[#E0D0C0] text-sm mb-1">Most Discussed Topics</div>
              <div className="text-[#8A8A8A] text-sm">Quantum Physics, Neural Networks</div>
            </div>
            <div className="p-3 bg-[#1A1A1A] rounded-lg">
              <div className="text-[#E0D0C0] text-sm mb-1">Learning Style</div>
              <div className="text-[#8A8A8A] text-sm">Visual-Auditory Learner</div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h4 className="text-lg font-serif text-[#E0D0C0] mb-4">Recent Activities</h4>
          <div className="space-y-3">
            {[
              { action: 'Concept Explanation', topic: 'Wave Functions' },
              { action: 'Quiz Generation', topic: 'Classical Mechanics' },
              { action: 'Topic Discussion', topic: 'Neural Networks' }
            ].map((activity) => (
              <div
                key={activity.action}
                className="p-3 bg-[#1A1A1A] rounded-lg"
              >
                <div className="text-[#E0D0C0] text-sm">{activity.action}</div>
                <div className="text-[#8A8A8A] text-sm">{activity.topic}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}