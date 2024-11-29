import { Trophy, Star, Heart } from 'lucide-react';

const rewardsList = [
  {
    category: 'Daily Activities',
    rewards: [
      { action: 'Daily Login', xp: 50, karma: 10 },
      { action: 'Maintain Streak', xp: 100, karma: 25 },
      { action: 'Complete Daily Challenge', xp: 150, karma: 30 },
    ]
  },
  {
    category: 'Coding & Learning',
    rewards: [
      { action: 'Successfully Run Code', xp: 25, karma: 5 },
      { action: 'Complete Learning Path', xp: 500, karma: 100 },
      { action: 'Solve Coding Riddle', xp: 200, karma: 50 },
      { action: 'Debug Challenge', xp: 150, karma: 40 },
    ]
  },
  {
    category: 'Community & Competition',
    rewards: [
      { action: 'Win PvP Battle', xp: 300, karma: 75 },
      { action: 'Complete Group Project', xp: 400, karma: 150 },
      { action: 'Help Another User', xp: 100, karma: 50 },
      { action: 'Top 3 in Weekly Challenge', xp: 1000, karma: 250 },
    ]
  }
];

export function RewardsPanel() {
  return (
    <div className="bg-black/95 p-6 rounded-lg border border-emerald-900/20">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-emerald-500/70" />
        <h2 className="text-xl font-serif text-white">Rewards System</h2>
      </div>

      <div className="space-y-6">
        {rewardsList.map((category) => (
          <div key={category.category}>
            <h3 className="text-emerald-400 font-medium mb-3">{category.category}</h3>
            <div className="space-y-2">
              {category.rewards.map((reward) => (
                <div
                  key={reward.action}
                  className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-900/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">{reward.action}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-500/80" />
                        <span className="text-yellow-500/80 text-sm">
                          +{reward.xp} XP
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4 text-red-500/80" />
                        <span className="text-red-500/80 text-sm">
                          +{reward.karma} Karma
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-950/30 rounded-lg border border-emerald-900/20">
        <h4 className="text-emerald-400 font-medium mb-2">Level Up Bonuses</h4>
        <div className="space-y-2 text-sm text-white/70">
          <p>• Reach Level 5: Unlock Dark Theme Customization (+1000 XP, +200 Karma)</p>
          <p>• Reach Level 10: Unlock Custom Badge Creation (+2000 XP, +400 Karma)</p>
          <p>• Reach Level 25: Unlock Mentor Status (+5000 XP, +1000 Karma)</p>
        </div>
      </div>
    </div>
  );
}