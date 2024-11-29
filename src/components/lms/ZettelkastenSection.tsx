import { motion } from 'framer-motion';
import { Archive, Search, Plus, Network, Brain, Link2, Filter, Book, Tag, Clock, Eye, MessageSquare, Lightbulb, Map, FolderOpen, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ClueCard {
  id: string;
  title: string;
  content: string;
  tags: string[];
  connections: string[];
  lastModified: string;
  caseFile?: string;
}

const sampleClueCards: ClueCard[] = [
  {
    id: '1',
    title: 'Quantum Superposition',
    content: 'A quantum system can exist in multiple states simultaneously until measured.',
    tags: ['Physics', 'Quantum Mechanics'],
    connections: ['2', '3'],
    lastModified: 'March 15, 1970',
    caseFile: 'Quantum Physics'
  },
  {
    id: '2',
    title: 'Wave-Particle Duality',
    content: 'Light exhibits properties of both waves and particles depending on observation.',
    tags: ['Physics', 'Optics'],
    connections: ['1'],
    lastModified: 'March 14, 1970',
    caseFile: 'Quantum Physics'
  },
  {
    id: '3',
    title: 'Schrödinger\'s Cat',
    content: 'Thought experiment illustrating quantum superposition in macroscopic systems.',
    tags: ['Physics', 'Thought Experiments'],
    connections: ['1'],
    lastModified: 'March 13, 1970',
    caseFile: 'Quantum Physics'
  }
];

export function ZettelkastenSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'cards' | 'map'>('cards');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const allTags = Array.from(new Set(sampleClueCards.flatMap(card => card.tags)));

  const filteredCards = sampleClueCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
                       selectedTags.some(tag => card.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Archive className="w-6 h-6 text-[#C0A080]" />
            <h3 className="text-xl font-serif text-[#E0D0C0]">Clue Cards Archive</h3>
          </div>
          <button className="px-4 py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>New Clue Card</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search clue cards..."
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

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('cards')}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm flex items-center gap-2',
                  viewMode === 'cards'
                    ? 'bg-[#C0A080]/10 text-[#C0A080]'
                    : 'text-[#8A8A8A] hover:bg-[#1A1A1A]'
                )}
              >
                <Archive className="w-4 h-4" />
                Cards
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm flex items-center gap-2',
                  viewMode === 'map'
                    ? 'bg-[#C0A080]/10 text-[#C0A080]'
                    : 'text-[#8A8A8A] hover:bg-[#1A1A1A]'
                )}
              >
                <Map className="w-4 h-4" />
                Connection Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-xl p-6 relative group"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-[#E0D0C0] font-serif">{card.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-sm text-[#8A8A8A]">
                    <FolderOpen className="w-4 h-4" />
                    <span>{card.caseFile}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                    <Link2 className="w-4 h-4 text-[#8A8A8A]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-[#8A8A8A]" />
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <p className="text-[#8A8A8A] text-sm mb-4">{card.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[#1A1A1A] rounded-lg text-xs text-[#8A8A8A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-[#8A8A8A]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>{card.lastModified}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Network className="w-3 h-3" />
                  <span>{card.connections.length} connections</span>
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="absolute -bottom-2 left-0 right-0 p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-4 transition-all">
                <div className="flex items-center gap-2 text-[#C0A080] text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Suggestions</span>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg text-xs text-[#E0D0C0] transition-colors">
                    Connect with "Wave Function Collapse"
                  </button>
                  <button className="w-full text-left px-3 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg text-xs text-[#E0D0C0] transition-colors">
                    Add to "Quantum Foundations" case file
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-xl p-6 h-[600px]">
          {/* Connection Map Visualization would go here */}
          <div className="flex items-center justify-center h-full text-[#8A8A8A]">
            <p>Connection Map Visualization</p>
          </div>
        </div>
      )}

      {/* Quick Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-5 h-5 text-[#C0A080]" />
            <h4 className="text-lg font-serif text-[#E0D0C0]">AI Analysis</h4>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors">
              Generate Connections
            </button>
            <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors">
              Find Knowledge Gaps
            </button>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-[#C0A080]" />
            <h4 className="text-lg font-serif text-[#E0D0C0]">Reflections</h4>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors">
              Add Journal Entry
            </button>
            <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors">
              View Insights
            </button>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-[#C0A080]" />
            <h4 className="text-lg font-serif text-[#E0D0C0]">Quick Actions</h4>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors">
              Create Case File
            </button>
            <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors">
              Export Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}