import { motion } from 'framer-motion';
import { Search as SearchIcon, Bot, Globe, Send, MessageSquare, BarChart2, Compass } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchResult {
  id: string;
  type: 'article' | 'social' | 'image' | 'video';
  title: string;
  source: string;
  date: string;
  preview: string;
  url: string;
}

export function PrepTimeSection() {
  const [activeView, setActiveView] = useState<'alfred' | 'browser' | 'research'>('alfred');
  const [activeSearchTab, setActiveSearchTab] = useState<'primary' | 'secondary' | 'analysis'>('primary');
  const [searchQuery, setSearchQuery] = useState('');

  const searchTabs = [
    { id: 'primary', label: 'Primary Sources', description: 'Articles, News, Websites and Blogs' },
    { id: 'secondary', label: 'Secondary Sources', description: 'Social media, Forums, Darknet, Public records' },
    { id: 'analysis', label: 'Analysis & Insights', description: 'Data Analysis & Pattern Recognition' }
  ];

  const sampleResults: SearchResult[] = [
    {
      id: '1',
      type: 'article',
      title: 'Recent Criminal Activities in Gotham\'s East End',
      source: 'Gotham Gazette',
      date: 'March 15, 1970',
      preview: 'Analysis of recent crime patterns suggests...',
      url: '#'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      <div className="border-b border-white/20 mb-6">
        <div className="flex -mb-px">
          {[
            { id: 'alfred', label: 'Alfred', icon: Bot },
            { id: 'browser', label: 'Browser', icon: Globe },
            { id: 'research', label: 'Research', icon: SearchIcon }
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id as any)}
              className={cn(
                'px-6 py-4 flex items-center gap-2 transition-all duration-300',
                'border-b-2 font-detective',
                activeView === view.id
                  ? 'border-white text-white'
                  : 'border-transparent text-white/60 hover:text-white/80 hover:border-white/30'
              )}
            >
              <view.icon className="w-4 h-4" />
              <span>{view.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-black/60 rounded-lg border border-white/20 p-6">
        {activeView === 'research' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-detective text-white mb-2">SEARCH ENGINE</h2>
              <p className="text-white/60 font-evidence">Advanced Intelligence Gathering System</p>
            </div>

            <div className="relative max-w-3xl mx-auto mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter search parameters..."
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 font-evidence"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="border-b border-white/20">
              <div className="flex -mb-px">
                {searchTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSearchTab(tab.id as any)}
                    className={cn(
                      'px-6 py-4 flex-1',
                      'border-b-2 font-detective transition-all duration-300',
                      activeSearchTab === tab.id
                        ? 'border-white text-white'
                        : 'border-transparent text-white/60 hover:text-white/80'
                    )}
                  >
                    <div className="text-left">
                      <div className="font-detective">{tab.label}</div>
                      <div className="text-xs text-white/40 font-evidence mt-1">{tab.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 mt-6">
              {sampleResults.map((result) => (
                <div
                  key={result.id}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-detective mb-1">{result.title}</h4>
                      <div className="flex items-center gap-2 text-white/40 text-sm">
                        <span>{result.source}</span>
                        <span>•</span>
                        <span>{result.date}</span>
                      </div>
                      <p className="text-white/60 mt-2 font-evidence">{result.preview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'alfred' && (
          <div className="space-y-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Bot className="w-16 h-16 text-white/60" />
                <h2 className="text-2xl font-detective text-white">How can I assist you today?</h2>
                <p className="text-white/60 font-evidence text-center">
                  I'm your personal AI assistant. Ask me anything about your cases, research, or analysis needs.
                </p>
              </div>
              <div className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-4 pr-12 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 font-evidence"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'browser' && (
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter URL or search..."
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 font-evidence"
              />
              <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            </div>
            <div className="h-[600px] bg-white/5 rounded-lg border border-white/20">
              <div className="flex items-center justify-center h-full text-white/40 font-evidence">
                Enter a URL to begin browsing
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}