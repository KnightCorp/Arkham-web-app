import { BattleView } from "./BattleView";
import { CodingTerminal } from "./CodingTerminal";
import { ExamGrid } from "./ExamGrid";
import { Leaderboard } from "./Leaderboard";
import { MatchMaking } from "./MatchMaking";
import { PlayerMarket } from "./PlayerMarket";
import { StatsPanel } from "./StatsPanel";
import { TeamView } from "./TeamView";

interface MainContentProps {
  activeTab: string;
}

export const MainContent = ({ activeTab }: MainContentProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 space-y-4">
          {activeTab === "Team" && <TeamView />}
          {activeTab === "PVP" && (
            <>
              <MatchMaking />
              <BattleView />
              <CodingTerminal examType="Algorithm" />
            </>
          )}
          {activeTab === "Practice" && <ExamGrid />}
          {activeTab === "Karma Store" && <PlayerMarket />}
        </div>
        <div className="space-y-4">
          <StatsPanel />
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};
