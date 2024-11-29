import { getTabs } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import { TeamView } from "./TeamView";
import { PlayerMarket } from "./PlayerMarket";
import { ExamGrid } from "./ExamGrid";
import { MatchMaking } from "./MatchMaking";
import { BattleView } from "./BattleView";
import { CodingTerminal } from "./CodingTerminal";

export default function AcademiaSection() {
  const tabs = getTabs("academia");
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-academia-gold w-full"
    >
      <Tabs defaultValue={tabs[0].id} className="mt-2">
        <TabsList className="h-fit dark:bg-black bg-transparent flex gap-3 justify-start">
          {tabs.map((tab) => {
            return (
              <TabsTrigger
                value={tab.id}
                className="py-3 px-2 dark:hover:bg-white/5 dark:data-[state=active]:bg-white/10 hover:bg-white/5 data-[state=active]:bg-white/10"
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-4">
              <TabsContent value="karma">
                <PlayerMarket />
              </TabsContent>
              <TabsContent value="practice">
                <ExamGrid clubType="academia" />
              </TabsContent>
              <TabsContent value="pvp">
                <MatchMaking />
                <BattleView clubType="academia" />
                <CodingTerminal examType="Academic Duel" />
              </TabsContent>
              <TabsContent value="team">
                <TeamView clubType="academia" />
              </TabsContent>
            </div>
            <div className="space-y-4">
              {/* <StatsPanel clubType={clubType} />
              <Leaderboard clubType={clubType} /> */}
            </div>
          </div>
        </div>
      </Tabs>
    </motion.div>
  );
}
