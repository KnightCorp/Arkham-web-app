import { formatPoints } from "@/lib/utils";
import { Award, Medal, Trophy } from "lucide-react";

export const Leaderboard = () => {
  const leaders = [
    { rank: 1, name: "AlphaCode", points: 15000, wins: 142 },
    { rank: 2, name: "ByteMaster", points: 12400, wins: 118 },
    { rank: 3, name: "CodeNinja", points: 11800, wins: 98 },
    { rank: 4, name: "DevWarrior", points: 10500, wins: 89 },
    { rank: 5, name: "EliteHacker", points: 9800, wins: 82 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center">
            {rank}
          </span>
        );
    }
  };

  return (
    <div className="rounded-sm p-4">
      <h2 className="text-xl font-bold mb-4">Global Leaderboard</h2>
      <div className="space-y-2">
        {leaders.map((leader) => (
          <div
            key={leader.rank}
            className="stats-card flex items-center space-x-4"
          >
            <div className="w-8">{getRankIcon(leader.rank)}</div>
            <div className="flex-1">{leader.name}</div>
            <div className="text-red-400">
              {formatPoints(leader.points)} pts
            </div>
            <div className="text-sm text-gray-400">{leader.wins}W</div>
          </div>
        ))}
      </div>
    </div>
  );
};
