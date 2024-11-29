import { motion } from 'framer-motion';
import { Swords, Clock, Trophy } from 'lucide-react';

export function PvPArena() {
  return (
    <div className="col-span-2 grid gap-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/95 p-6 rounded-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-serif text-white">Active Battles</h3>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/90 text-sm font-medium">
            Join Battle
          </button>
        </div>
        <div className="space-y-4">
          {['Python Challenge', 'Algorithm Duel', 'Debug Race'].map((battle) => (
            <div
              key={battle}
              className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Swords className="w-5 h-5 text-white/70" />
                <div>
                  <h4 className="text-white/90 font-medium">{battle}</h4>
                  <p className="text-white/50 text-sm">2 Players</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/50" />
                  <span className="text-white/50 text-sm">5:00</span>
                </div>
                <Trophy className="w-5 h-5 text-white/30" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}