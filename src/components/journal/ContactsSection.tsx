import { motion } from 'framer-motion';
import { Users, Search, Plus, Filter, Tag, Clock, Eye, MessageSquare, Heart, Map, ArrowRight, AlertCircle, Network, Globe, Twitter, Linkedin, Instagram, Mail, Phone, Flag, Shield, Lock, UserPlus, History, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Contact {
  id: string;
  name: string;
  role: string;
  category: string;
  tags: string[];
  socialLinks: {
    type: string;
    url: string;
  }[];
  observations: {
    date: string;
    note: string;
    flags?: string[];
  }[];
  trustScore: number;
  influenceLevel: number;
  lastInteraction: string;
  behavioralNotes: string[];
  psychProfile: {
    traits: string[];
    patterns: string[];
    potentialMotives: string[];
  };
}

const sampleContacts: Contact[] = [
  {
    id: '1',
    name: 'Dr. Alan Turing',
    role: 'Research Mentor',
    category: 'Academic',
    tags: ['Cryptography', 'Mathematics', 'Computer Science'],
    socialLinks: [
      { type: 'twitter', url: '@aturing' },
      { type: 'linkedin', url: 'linkedin.com/aturing' }
    ],
    observations: [
      {
        date: 'March 15, 1970',
        note: 'Displayed unusual interest in quantum computing research',
        flags: ['Suspicious Activity']
      },
      {
        date: 'March 10, 1970',
        note: 'Shared groundbreaking insights on pattern recognition',
        flags: ['Key Information']
      }
    ],
    trustScore: 85,
    influenceLevel: 90,
    lastInteraction: 'March 15, 1970',
    behavioralNotes: [
      'Exhibits strong analytical thinking',
      'Tends to withhold certain information',
      'Shows signs of competitive behavior'
    ],
    psychProfile: {
      traits: ['Analytical', 'Reserved', 'Brilliant'],
      patterns: ['Information seeking', 'Strategic sharing'],
      potentialMotives: ['Academic recognition', 'Research dominance']
    }
  }
];

export function ContactsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const allTags = Array.from(new Set(sampleContacts.flatMap(contact => contact.tags)));

  const filteredContacts = sampleContacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
                       selectedTags.some(tag => contact.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-[#C0A080]" />
            <h3 className="text-xl font-serif text-[#E0D0C0]">Contact Network</h3>
          </div>
          <button className="px-4 py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            <span>Add Contact</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-10 pr-4 py-3 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
                className={cn(
                  'px-3 py-1 rounded-full text-sm transition-colors',
                  selectedTags.includes(tag)
                    ? 'bg-[#C0A080]/20 text-[#C0A080]'
                    : 'bg-[#1A1A1A] text-[#8A8A8A] hover:bg-[#2A2A2A]'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-xl p-6"
          >
            {/* Contact Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-[#E0D0C0] font-serif">{contact.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#8A8A8A] text-sm">{contact.role}</span>
                  <span className="text-[#8A8A8A]">•</span>
                  <span className="text-[#8A8A8A] text-sm">{contact.category}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                  <Eye className="w-4 h-4 text-[#8A8A8A]" />
                </button>
                <button className="p-1.5 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4 text-[#8A8A8A]" />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {contact.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[#1A1A1A] rounded-lg text-xs text-[#8A8A8A]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mb-4">
              {contact.socialLinks.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg transition-colors"
                >
                  {link.type === 'twitter' && <Twitter className="w-4 h-4 text-[#8A8A8A]" />}
                  {link.type === 'linkedin' && <Linkedin className="w-4 h-4 text-[#8A8A8A]" />}
                  {link.type === 'instagram' && <Instagram className="w-4 h-4 text-[#8A8A8A]" />}
                </a>
              ))}
            </div>

            {/* Recent Observations */}
            <div className="mb-4">
              <h5 className="text-[#E0D0C0] text-sm mb-2">Recent Observations</h5>
              <div className="space-y-2">
                {contact.observations.slice(0, 2).map((obs, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#1A1A1A] rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                        <Clock className="w-3 h-3" />
                        <span>{obs.date}</span>
                      </div>
                      {obs.flags && obs.flags.map((flag) => (
                        <span
                          key={flag}
                          className="px-2 py-1 bg-red-500/10 rounded-full text-xs text-red-400"
                        >
                          {flag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[#8A8A8A]">{obs.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-[#1A1A1A] rounded-lg">
                <div className="text-[#8A8A8A] text-xs mb-1">Trust Score</div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C0A080]" />
                  <span className="text-[#E0D0C0]">{contact.trustScore}%</span>
                </div>
              </div>
              <div className="p-3 bg-[#1A1A1A] rounded-lg">
                <div className="text-[#8A8A8A] text-xs mb-1">Influence</div>
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-[#C0A080]" />
                  <span className="text-[#E0D0C0]">{contact.influenceLevel}%</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[#8A8A8A]">
              <div className="flex items-center gap-2">
                <History className="w-3 h-3" />
                <span>Last interaction: {contact.lastInteraction}</span>
              </div>
              <button className="flex items-center gap-1 text-[#C0A080] hover:text-[#B09070] transition-colors">
                <span>Details</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}