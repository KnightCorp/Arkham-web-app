import { getTabs } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import { PlayerMarket } from "../exam/PlayerMarket";
import { ExamGrid } from "../exam/ExamGrid";
import { MatchMaking } from "../exam/MatchMaking";
import { BattleView } from "../exam/BattleView";
import { CodingTerminal } from "../exam/CodingTerminal";
import { TeamView } from "../exam/TeamView";

export default function CodingTab() {
  const tabs = getTabs("coding");
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-academia-gold w-full col-span-2"
    >
      <Tabs defaultValue={tabs[0].id} className="mt-2">
        <TabsList className="h-fit dark:bg-black bg-transparent flex gap-3 justify-start">
          {tabs.map((tab) => {
            return (
              <TabsTrigger
                value={tab.id}
                key={tab.id}
                className="py-3 px-2 flex gap-3  dark:hover:bg-white/5 dark:data-[state=active]:bg-white/10 hover:bg-white/5 data-[state=active]:bg-white/10"
              >
                <tab.icon className="w-6 h-6" /> {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-4 ">
              <TabsContent value="karma">
                <PlayerMarket />
              </TabsContent>
              <TabsContent value="practice">
                <ExamGrid clubType="coding" />
              </TabsContent>
              <TabsContent value="pvp">
                <MatchMaking />
                <BattleView clubType="coding" />
                <CodingTerminal examType="coding" />
              </TabsContent>
              <TabsContent value="team">
                <TeamView clubType="coding" />
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
