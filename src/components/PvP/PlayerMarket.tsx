import { DollarSign, Search, TrendingUp } from "lucide-react";
import { useState } from "react";

export const PlayerMarket = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const players = [
    {
      id: 1,
      name: "CodeMaster",
      rating: 2100,
      askingPrice: "50k",
      team: "ByteForce",
      winRate: "68%",
    },
    {
      id: 2,
      name: "AlgoQueen",
      rating: 1950,
      askingPrice: "45k",
      team: "DataDragons",
      winRate: "72%",
    },
    {
      id: 3,
      name: "BugSlayer",
      rating: 1850,
      askingPrice: "35k",
      team: "ErrorElites",
      winRate: "65%",
    },
  ];

  return (
    <div className="p-6 rounded-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Player Market</h2>
        <div className="flex items-center space-x-2 bg-gray-800 rounded-sm px-3 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search players..."
            className="bg-transparent border-none focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="stats-card flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                {player.name[0]}
              </div>
              <div>
                <h3 className="font-semibold">{player.name}</h3>
                <p className="text-sm text-gray-400">{player.team}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>{player.winRate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-yellow-400" />
                <span>{player.askingPrice}</span>
              </div>
              <button className="action-button red">Make Bid</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
