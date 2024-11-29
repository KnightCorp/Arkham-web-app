import { useGameStore } from "@/store/gameStore";
import { Code, Timer, User as UserIcon } from "lucide-react";

export const PvPArena = () => {
  const { tokens } = useGameStore();

  return (
    <div className="min-h-[calc(100vh-4rem)]  text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">PvP Arena</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  {tokens}
                </div>
                <span>Tokens Left</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["IIT-JEE", "GMAT", "GRE", "LSAT", "CAT", "GATE"].map((exam) => (
              <button
                key={exam}
                className="bg-gray-700 hover:bg-gray-600 transition p-6 rounded-lg flex flex-col items-center space-y-4"
              >
                <Code className="w-12 h-12 text-red-400" />
                <h3 className="text-xl font-semibold">{exam}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Timer className="w-4 h-4 mr-2" />
                    30 mins
                  </span>
                  <span className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-2" />
                    24 online
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
