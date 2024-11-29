import { motion } from 'framer-motion';
import { Heart, Lock, Crown, Sparkles, Shield, Zap, Scroll, Feather } from 'lucide-react';
import { cn } from '@/lib/utils';

const storeItems = [
  {
    id: 'premium-themes',
    name: 'Scholarly Aesthetics',
    description: 'Unlock exclusive dark academia and noir themes',
    price: 1000,
    icon: Crown,
    category: 'Ancient Arts'
  },
  {
    id: 'special-effects',
    name: 'Mystical Auras',
    description: 'Add dramatic particle effects to your profile',
    price: 750,
    icon: Sparkles,
    category: 'Enchantments'
  },
  {
    id: 'exclusive-titles',
    name: 'Noble Titles',
    description: 'Unique titles like "Shadow Scholar" or "Night Philosopher"',
    price: 500,
    icon: Shield,
    category: 'Honorifics'
  },
  {
    id: 'power-ups',
    name: 'Scholar\'s Blessing',
    description: '2x Knowledge gain for 24 hours',
    price: 300,
    icon: Zap,
    category: 'Enhancements'
  }
];

export function KarmaStore() {
  const userKarma = 1500;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6"
    >
      {/* Karma Balance */}
      <div className="flex items-center justify-between p-6 bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] relative overflow-hidden">
        {/* Ornate Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C0A080]/20 rounded-tl-lg" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C0A080]/20 rounded-br-lg" />
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-[#C0A080]/10">
            <Scroll className="w-6 h-6 text-[#C0A080]" />
          </div>
          <div>
            <span className="text-lg font-serif text-[#E0D0C0]">Ancient Knowledge</span>
            <p className="text-sm text-[#8A8A8A] font-serif italic">Accumulated Wisdom</p>
          </div>
        </div>
        <span className="text-xl font-serif text-[#C0A080]">{userKarma} scrolls</span>
      </div>

      {/* Store Items */}
      <div className="grid grid-cols-2 gap-4">
        {storeItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="relative p-6 bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] overflow-hidden group"
          >
            {/* Background Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C0A080]/0 via-[#C0A080]/5 to-[#C0A080]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            {/* Content */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#C0A080]/10">
                  <item.icon className="w-5 h-5 text-[#C0A080]" />
                </div>
                <div>
                  <h3 className="text-[#E0D0C0] font-serif">{item.name}</h3>
                  <span className="text-xs text-[#8A8A8A] font-serif italic">{item.category}</span>
                </div>
              </div>
              
              <p className="text-sm text-[#8A8A8A] mb-4 font-serif">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Feather className="w-4 h-4 text-[#C0A080]" />
                  <span className="text-[#C0A080] font-serif">{item.price}</span>
                </div>
                
                <button
                  disabled={userKarma < item.price}
                  className={cn(
                    'px-4 py-1.5 rounded-lg text-sm font-serif transition-colors',
                    userKarma >= item.price
                      ? 'bg-[#C0A080]/10 hover:bg-[#C0A080]/20 text-[#E0D0C0]'
                      : 'bg-[#1A1A1A] text-[#8A8A8A] cursor-not-allowed'
                  )}
                >
                  {userKarma >= item.price ? (
                    'Acquire'
                  ) : (
                    <div className="flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>Sealed</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}