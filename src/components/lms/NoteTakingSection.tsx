import { motion } from 'framer-motion';
import { FileText, Search, Plus, Network, Brain, Link2, Filter, Book, Lightbulb, ArrowRight, Tag, Clock, HelpCircle, MessageSquare, FileUp, Youtube, Globe, Copy, List, Sparkles, Compass, Lightbulb as LightbulbIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ... existing interfaces and sample data ...

export function NoteTakingSection() {
  const [view, setView] = useState<'cards' | 'map'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeSource, setActiveSource] = useState<'drive' | 'link' | 'paste' | null>(null);

  // ... existing filtering logic ...

  const aiActions = [
    { id: 'understand', label: 'Help me understand', icon: HelpCircle },
    { id: 'critique', label: 'Critique', icon: MessageSquare },
    { id: 'suggest', label: 'Suggest related ideas', icon: Sparkles },
    { id: 'outline', label: 'Create outline', icon: List }
  ];

  const sourceOptions = [
    {
      type: 'drive',
      label: 'Google Drive',
      options: ['Google Docs', 'Google Slides']
    },
    {
      type: 'link',
      label: 'Link',
      options: ['Website', 'YouTube']
    },
    {
      type: 'paste',
      label: 'Paste text',
      options: ['Copied text']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Existing Controls */}
      <div className="glass-card rounded-xl p-6">
        {/* ... existing header ... */}

        {/* AI Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          {aiActions.map((action) => (
            <button
              key={action.id}
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm transition-colors flex items-center gap-2"
            >
              <action.icon className="w-4 h-4" />
              {action.label}
            </button>
          ))}
        </div>

        {/* Source Input */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Upload a source to get started..."
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-4 pr-12 py-3 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080]"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <ArrowRight className="w-5 h-5 text-[#C0A080]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {sourceOptions.map((source) => (
              <div
                key={source.type}
                className={cn(
                  "p-4 bg-[#1A1A1A] rounded-lg border transition-colors cursor-pointer",
                  activeSource === source.type
                    ? "border-[#C0A080] bg-[#C0A080]/5"
                    : "border-[#3A3A3A] hover:border-[#C0A080]/50"
                )}
                onClick={() => setActiveSource(source.type as any)}
              >
                <div className="font-serif text-[#E0D0C0] mb-3">{source.label}</div>
                <div className="space-y-2">
                  {source.options.map((option) => (
                    <div
                      key={option}
                      className="px-3 py-1.5 bg-[#2A2A2A] rounded text-[#8A8A8A] text-sm"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Search and View Controls */}
        <div className="flex flex-wrap gap-4">
          {/* ... existing search input ... */}
          {/* ... existing view toggles ... */}
        </div>

        {/* Existing Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {/* ... existing tag buttons ... */}
        </div>
      </div>

      {/* Project Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-5 h-5 text-[#C0A080]" />
            <h3 className="text-lg font-serif text-[#E0D0C0]">Project Interests</h3>
          </div>
          <div className="space-y-2">
            {['Tech & Science', 'Finance', 'Arts & Culture', 'Sports', 'Entertainment'].map((interest) => (
              <button
                key={interest}
                className="w-full px-4 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm text-left transition-colors"
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <LightbulbIcon className="w-5 h-5 text-[#C0A080]" />
            <h3 className="text-lg font-serif text-[#E0D0C0]">Project Idea Generator</h3>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter a topic..."
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg px-4 py-2 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080]"
            />
            <button className="w-full py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors">
              Generate Ideas
            </button>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-5 h-5 text-[#C0A080]" />
            <h3 className="text-lg font-serif text-[#E0D0C0]">Research Compass</h3>
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <div className="text-[#E0D0C0] text-sm mb-1">Current Direction</div>
              <div className="text-[#8A8A8A] text-sm">Exploring quantum mechanics fundamentals</div>
            </div>
            <div className="p-3 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <div className="text-[#E0D0C0] text-sm mb-1">Suggested Path</div>
              <div className="text-[#8A8A8A] text-sm">→ Wave function collapse theories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ... existing note cards ... */}
      </div>

      {/* Existing AI Suggestions */}
      <div className="glass-card rounded-xl p-6">
        {/* ... existing AI suggestions content ... */}
      </div>
    </div>
  );
}