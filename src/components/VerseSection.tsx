import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { User, BarChart2, GitBranch, ShoppingBag } from 'lucide-react';
import { KarmaStore } from './verse/KarmaStore';

const tabs = [
  { id: 'avatar', label: 'Avatar', icon: User },
  { id: 'stats', label: 'Stats', icon: BarChart2 },
  { id: 'skill-tree', label: 'Skill Tree', icon: GitBranch },
  { id: 'karma-store', label: 'Karma Store', icon: ShoppingBag },
];

export function VerseSection() {
  const [activeTab, setActiveTab] = useState('avatar');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 p-8">
        <h2 className="text-2xl font-serif text-white/90 mb-6">The Verse</h2>
        
        <div className="relative">
          {/* Tabs Container */}
          <div className="flex space-x-2 relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'group relative px-6 py-3 rounded-lg transition-all duration-300',
                  'overflow-hidden bg-gradient-to-r',
                  activeTab === tab.id
                    ? 'from-white/10 via-white/5 to-transparent text-white'
                    : 'from-transparent to-transparent text-white/60 hover:text-white/80'
                )}
              >
                {/* Shine Effect */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent',
                    'translate-x-[-100%] group-hover:translate-x-[100%]',
                    'transition-transform duration-1000',
                    activeTab === tab.id ? 'opacity-100' : 'opacity-0'
                  )}
                />
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </div>

                {/* Active Indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'avatar' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 gap-8"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white/90">Character Customization</h3>
                  <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                    {/* Avatar customization content */}
                  </div>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                  {/* Avatar preview */}
                </div>
              </motion.div>
            )}

            {activeTab === 'stats' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                  {/* Stats content */}
                </div>
              </motion.div>
            )}

            {activeTab === 'skill-tree' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/20 rounded-lg p-4 border border-white/5"
              >
                {/* Skill tree content */}
              </motion.div>
            )}

            {activeTab === 'karma-store' && <KarmaStore />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}