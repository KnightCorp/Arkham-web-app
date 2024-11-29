import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Bot, User, Clock, Phone, Mail, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
}

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<'chat' | 'ticket'>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: '1',
    type: 'bot',
    content: 'Hello! How can I assist you today?',
    timestamp: new Date().toLocaleTimeString()
  }]);
  const [input, setInput] = useState('');
  const [ticketSubmitting, setTicketSubmitting] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Thank you for your message. Let me help you with that.',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitting(true);

    // Simulate ticket submission
    setTimeout(() => {
      setTicketSubmitting(false);
      setTicketSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="bg-[#0D0D0D] rounded-xl border border-[#3A3A3A] p-8">
        <h2 className="text-3xl font-serif text-[#E0D0C0] mb-4">Contact Us</h2>
        <p className="text-[#8A8A8A] font-serif">We're here to help. Reach out through our chatbot or raise a support ticket.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('chat')}
          className={cn(
            'px-6 py-3 rounded-lg font-serif transition-colors',
            activeTab === 'chat'
              ? 'bg-[#C0A080]/10 text-[#E0D0C0] border border-[#C0A080]/20'
              : 'bg-[#1A1A1A] text-[#8A8A8A] border border-[#3A3A3A] hover:bg-[#2A2A2A]'
          )}
        >
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4" />
            <span>Chat with Bot</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('ticket')}
          className={cn(
            'px-6 py-3 rounded-lg font-serif transition-colors',
            activeTab === 'ticket'
              ? 'bg-[#C0A080]/10 text-[#E0D0C0] border border-[#C0A080]/20'
              : 'bg-[#1A1A1A] text-[#8A8A8A] border border-[#3A3A3A] hover:bg-[#2A2A2A]'
          )}
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Raise Ticket</span>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="bg-[#0D0D0D] rounded-xl border border-[#3A3A3A] overflow-hidden">
        {activeTab === 'chat' ? (
          <div className="h-[600px] flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
                    <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
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
                      <p className="text-sm font-serif">{message.content}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs text-[#8A8A8A]">
                      <Clock className="w-3 h-3" />
                      <span>{message.timestamp}</span>
                    </div>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                      <User className="w-4 h-4 text-[#C0A080]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#1A1A1A] border-t border-[#3A3A3A]">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080] font-serif"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {ticketSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#C0A080]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#C0A080]" />
                </div>
                <h3 className="text-xl font-serif text-[#E0D0C0] mb-2">Ticket Submitted Successfully</h3>
                <p className="text-[#8A8A8A] font-serif">
                  Our team will get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setTicketSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors font-serif"
                >
                  Submit Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E0D0C0] font-serif mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-[#E0D0C0] focus:outline-none focus:border-[#C0A080] font-serif"
                    />
                  </div>
                  <div>
                    <label className="block text-[#E0D0C0] font-serif mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-[#E0D0C0] focus:outline-none focus:border-[#C0A080] font-serif"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#E0D0C0] font-serif mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-[#E0D0C0] focus:outline-none focus:border-[#C0A080] font-serif"
                  />
                </div>

                <div>
                  <label className="block text-[#E0D0C0] font-serif mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-[#E0D0C0] focus:outline-none focus:border-[#C0A080] font-serif resize-none"
                  ></textarea>
                </div>

                <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#3A3A3A]">
                  <p className="text-[#8A8A8A] font-serif text-sm">
                    Our support team will respond to your inquiry within 24-48 hours. For immediate assistance, please use the chatbot.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={ticketSubmitting}
                  className="w-full py-3 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors font-serif flex items-center justify-center gap-2"
                >
                  {ticketSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Ticket</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0D0D0D] rounded-xl border border-[#3A3A3A] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-5 h-5 text-[#C0A080]" />
            <h3 className="text-[#E0D0C0] font-serif">Phone Support</h3>
          </div>
          <p className="text-[#8A8A8A] font-serif">Monday - Friday</p>
          <p className="text-[#E0D0C0] font-serif">9:00 AM - 6:00 PM EST</p>
          <p className="text-[#C0A080] font-serif mt-2">+1 (555) 123-4567</p>
        </div>

        <div className="bg-[#0D0D0D] rounded-xl border border-[#3A3A3A] p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#C0A080]" />
            <h3 className="text-[#E0D0C0] font-serif">Email Support</h3>
          </div>
          <p className="text-[#8A8A8A] font-serif">24/7 Email Support</p>
          <p className="text-[#E0D0C0] font-serif">Response within 24 hours</p>
          <p className="text-[#C0A080] font-serif mt-2">support@archives.edu</p>
        </div>
      </div>
    </motion.div>
  );
}