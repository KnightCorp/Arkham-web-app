import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Shadow Coder', points: 15420, badge: Trophy },
  { rank: 2, name: 'Quantum Mind', points: 14280, badge: Medal },
  { rank: 3, name: 'Binary Ghost', points: 13950, badge: Award },
  { rank: 4, name: 'Cyber Phantom', points: 12800, badge: Award },
  { rank: 5, name: 'Neural Knight', points: 12100, badge: Award },
];

export function Leaderboards() {
  return (
    <div className="col-span-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/95 p-6 rounded-lg border border-white/10"
      >
        <h3 className="text-xl font-serif text-white mb-6">Top Performers</h3>
        <div className="space-y-4">
          {leaderboardData.map((entry) => (
            <div
              key={entry.name}
              className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/90 font-medium">#{entry.rank}</span>
                </div>
                <div>
                  <h4 className="text-white/90 font-medium flex items-center gap-2">
                    {entry.name}
                    <entry.badge className="w-4 h-4 text-white/50" />
                  </h4>
                  <p className="text-white/50 text-sm">{entry.points.toLocaleString()} points</p>
                </div>
              </div>
              <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-white/30 to-white/20"
                  style={{ width: `${(entry.points / 16000) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}