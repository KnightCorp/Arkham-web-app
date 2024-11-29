import { Swords, Timer } from "lucide-react";

export const MatchMaking = () => {
  return (
    <div className="p-8 rounded-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Finding Opponent</h2>
        <div className="flex items-center justify-center space-x-2">
          <Timer className="w-5 h-5 text-red-400 animate-pulse" />
          <span className="text-gray-400">Estimated wait: 30s</span>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <div className="text-center space-y-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop"
            alt="You"
            className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500"
          />
          <div>
            <h3 className="font-bold">You</h3>
            <p className="text-sm text-gray-400">Level 15 • 1200 Rating</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Swords className="w-12 h-12 text-red-400 animate-pulse" />
          <span className="text-sm text-gray-400 mt-2">VS</span>
        </div>

        <div className="text-center space-y-4">
          <div className="w-24 h-24 rounded-full mx-auto border-2 border-red-500 animate-pulse bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">?</span>
          </div>
          <div>
            <h3 className="font-bold">Searching...</h3>
            <p className="text-sm text-gray-400">Similar Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};
