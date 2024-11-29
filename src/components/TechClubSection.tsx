import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Trophy,
  Brain,
  Swords,
  Folder,
  Medal,
  Users,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeEditor } from "./tech/CodeEditor";
import { LearningPath } from "./tech/LearningPath";
import { CodeOutput } from "./tech/CodeOutput";
import { PvPArena } from "./tech/PvPArena";
import { ProjectsGallery } from "./tech/ProjectsGallery";
import { Leaderboards } from "./tech/Leaderboards";
import { GroupProjects } from "./tech/GroupProjects";
import { PrepSection } from "./exam/PrepSection";
import CodingTab from "./tech/CodingTab";

const tabs = [
  { id: "paths", label: "Learning Paths", icon: Brain },
  { id: "playground", label: "Code Playground", icon: Code2 },
  { id: "challenges", label: "Riddles & Challenges", icon: Trophy },
  { id: "pvp", label: "PvP Arena", icon: Swords },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "leaderboards", label: "Leaderboards", icon: Medal },
  { id: "group-projects", label: "Group Projects", icon: Users },
  { id: "coding", label: "Code Masters", icon: Code },
];

export function TechClubSection() {
  const [activeTab, setActiveTab] = useState("paths");
  const [code, setCode] = useState(
    '// Riddle me this, detective...\nconsole.log("?");'
  );
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput("Something went wrong...");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="bg-black/95 p-6 rounded-lg border border-emerald-900/20">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-emerald-500/70" />
          <h2 className="text-2xl font-serif text-white">Tech Club</h2>
        </div>
        <p className="mt-2 text-emerald-500/80 font-mono">
          "Riddle me this: What has keys but no locks, space but no room, and
          you can enter but not go in?"
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "group relative px-4 py-2 rounded-lg transition-all duration-300",
              "overflow-hidden bg-black border",
              activeTab === tab.id
                ? "border-emerald-500/30 text-emerald-400"
                : "border-emerald-900/20 text-emerald-500/60 hover:text-emerald-400/80 hover:border-emerald-500/20"
            )}
          >
            <div className="relative flex items-center gap-2">
              <tab.icon className="w-4 h-4" />
              <span className="font-medium text-sm">{tab.label}</span>
            </div>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeTab === "paths" && <LearningPath />}
        {activeTab === "playground" && (
          <>
            <CodeEditor value={code} onChange={setCode} onRun={handleRunCode} />
            <CodeOutput output={output} />
          </>
        )}
        {activeTab === "challenges" && (
          <div className="bg-black/95 p-6 rounded-lg border border-emerald-900/20">
            <h3 className="text-xl font-serif text-emerald-400 mb-4">
              Daily Riddles
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-900/20">
                <p className="text-emerald-500/70 font-mono text-sm">
                  Decode the pattern...
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "pvp" && <PvPArena />}
        {activeTab === "projects" && <ProjectsGallery />}
        {activeTab === "leaderboards" && <Leaderboards />}
        {activeTab === "group-projects" && <GroupProjects />}
        {activeTab === "coding" && <CodingTab />}
      </div>
    </motion.div>
  );
}
