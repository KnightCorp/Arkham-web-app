import { useState } from "react";
import { GameHeader } from "./GameHeader";
import { MainContent } from "./MainContent";
import { Navigation } from "./Navigation";

// interface MatchProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }

export default function Match() {
  const [activeTab, setActiveTab] = useState("PVP");
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* <GameHeader /> */}
      <Navigation active={activeTab} onTabChange={setActiveTab} />
      <MainContent activeTab={activeTab} />
    </div>
  );
}
