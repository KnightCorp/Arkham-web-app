import { useGameStore } from "@/store/gameStore";

export const StatsPanel = () => {
  const { karmaPoints, tokens } = useGameStore();

  return (
    <div className="space-y-4">
      <div className="stats-card">
        <span>Karma Points: {karmaPoints}</span>
      </div>
      <div className="stats-card">
        <span>Chances left: {tokens}</span>
      </div>
      <button className="action-button w-full">Buy</button>
      <div className="space-y-2">
        <button className="action-button w-full">Stats</button>
        <button className="action-button w-full">Insights</button>
        <button className="action-button w-full">Rewards</button>
      </div>
    </div>
  );
};
