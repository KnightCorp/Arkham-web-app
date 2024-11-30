import React from "react";
import { RewardsPanel } from "./RewardsPanel";

type Props = {
  activeTab: string;
};

const TechClubSection: React.FC<Props> = ({ activeTab }) => {
  return (
    <>
      {activeTab === "challenges" && (
        <>
          <div className="bg-black/95 p-6 rounded-lg border border-emerald-900/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif text-emerald-400">
                Daily Riddles
              </h3>
              <div className="px-3 py-1 bg-emerald-500/10 rounded-full">
                <span className="text-emerald-400 text-sm">
                  +50 XP per solve
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-900/20">
                <p className="text-emerald-500/70 font-mono text-sm">
                  Decode the pattern...
                </p>
              </div>
            </div>
          </div>
          <RewardsPanel />
        </>
      )}
    </>
  );
};

export default TechClubSection;
