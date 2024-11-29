// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Terminal as TerminalIcon,
//   Play,
//   X,
//   Maximize2,
//   Minimize2,
//   Copy,
//   CheckCircle2,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface Command {
//   id: string;
//   input: string;
//   output: string;
//   timestamp: string;
// }

// export function PlaygroundSection() {
//   const [commands, setCommands] = useState<Command[]>([
//     {
//       id: "1",
//       input: "",
//       output:
//         'Welcome to The Archives Unreal Engine Cloud Terminal\nInitializing secure connection...\nConnection established.\n\nType "help" for available commands.',
//       timestamp: new Date().toLocaleTimeString(),
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const handleCommand = () => {
//     if (!input.trim()) return;

//     const newCommand: Command = {
//       id: Date.now().toString(),
//       input: input,
//       output: processCommand(input),
//       timestamp: new Date().toLocaleTimeString(),
//     };

//     setCommands((prev) => [...prev, newCommand]);
//     setInput("");
//   };

//   const processCommand = (cmd: string): string => {
//     const command = cmd.toLowerCase().trim();

//     switch (command) {
//       case "help":
//         return `Available commands:
//   - connect: Initialize connection to Unreal Engine cloud instance
//   - status: Check cloud instance status
//   - deploy: Deploy current project to cloud
//   - build: Build current project
//   - clear: Clear terminal
//   - help: Show this help message`;

//       case "connect":
//         return `Establishing connection to Unreal Engine cloud instance...
// Connection successful.
// Instance ID: ARC-UE5-${Math.random().toString(36).substring(7)}
// Region: EUR-CENTRAL
// Status: READY`;

//       case "status":
//         return `Cloud Instance Status:
// - CPU Usage: 45%
// - Memory: 12.4GB/32GB
// - Storage: 156GB/500GB
// - Network: 125Mbps
// - Active Users: 3
// - Build Queue: Empty
// All systems operational.`;

//       case "deploy":
//         return `Initiating deployment sequence...
// - Validating project structure... ✓
// - Compressing assets... ✓
// - Uploading to cloud (2.3GB)... ✓
// - Configuring cloud instance... ✓
// - Starting deployment... ✓
// Deployment successful!
// Access your instance at: https://archives-ue-${Math.random()
//           .toString(36)
//           .substring(7)}.cloud.archives`;

//       case "build":
//         return `Starting build process...
// [UE5] Compiling shaders...
// [UE5] Building game modules...
// [UE5] Packaging content...
// [UE5] Finalizing build...
// Build completed successfully.
// Output location: /builds/Archives-Build-${
//           new Date().toISOString().split("T")[0]
//         }`;

//       case "clear":
//         setTimeout(() => setCommands([]), 100);
//         return "";

//       default:
//         return `Command not recognized: ${command}\nType "help" for available commands.`;
//     }
//   };

//   const copyToClipboard = async () => {
//     const text = commands
//       .map(
//         (cmd) =>
//           `${cmd.timestamp} ${cmd.input ? `> ${cmd.input}` : ""}\n${cmd.output}`
//       )
//       .join("\n\n");

//     await navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={cn(
//         "bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] shadow-xl overflow-hidden",
//         isFullscreen && "fixed inset-4 z-50"
//       )}
//     >
//       {/* Terminal Header */}
//       <div className="flex items-center justify-between p-4 bg-[#1A1A1A] border-b border-[#3A3A3A]">
//         <div className="flex items-center gap-3">
//           <TerminalIcon className="w-5 h-5 text-[#C0A080]" />
//           <h3 className="font-serif text-[#E0D0C0]">
//             Unreal Engine Cloud Terminal
//           </h3>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={copyToClipboard}
//             className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
//             title="Copy terminal content"
//           >
//             {copied ? (
//               <CheckCircle2 className="w-4 h-4 text-green-500" />
//             ) : (
//               <Copy className="w-4 h-4 text-[#8A8A8A]" />
//             )}
//           </button>
//           <button
//             onClick={() => setIsFullscreen(!isFullscreen)}
//             className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
//           >
//             {isFullscreen ? (
//               <Minimize2 className="w-4 h-4 text-[#8A8A8A]" />
//             ) : (
//               <Maximize2 className="w-4 h-4 text-[#8A8A8A]" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Terminal Content */}
//       <div className="p-4 h-[500px] overflow-y-auto font-mono text-sm space-y-4 bg-[#0D0D0D]">
//         {commands.map((command) => (
//           <div key={command.id} className="space-y-2">
//             {command.input && (
//               <div className="flex items-center gap-2 text-[#8A8A8A]">
//                 <span className="text-[#C0A080]">❯</span>
//                 <span>{command.input}</span>
//               </div>
//             )}
//             <div className="text-[#E0D0C0] whitespace-pre-line">
//               {command.output}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Input Area */}
//       <div className="p-4 bg-[#1A1A1A] border-t border-[#3A3A3A]">
//         <div className="flex items-center gap-2">
//           <span className="text-[#C0A080]">❯</span>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={(e) => e.key === "Enter" && handleCommand()}
//             placeholder="Enter command..."
//             className="flex-1 bg-transparent border-none outline-none text-[#E0D0C0] font-mono placeholder:text-[#8A8A8A]"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }
import { getTabs } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import { TeamView } from "./TeamView";
import { PlayerMarket } from "./PlayerMarket";
import { ExamGrid } from "./ExamGrid";
import { MatchMaking } from "./MatchMaking";
import { BattleView } from "./BattleView";
import { CodingTerminal } from "./CodingTerminal";
import { AiOutlineTeam } from "react-icons/ai";
import { GoPerson } from "react-icons/go";

export function PlaygroundSection() {
  const tabs = getTabs("playground");
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-academia-gold w-full"
    >
      <Tabs defaultValue={tabs[0].id} className="mt-2">
        <TabsList className="h-fit dark:bg-black bg-transparent flex gap-3 justify-start w-full">
          <TabsTrigger
            value="team"
            className="py-3 px-2 flex gap-3 text-[#C0A080] data-[state=active]:text-[#E0D0C0] dark:hover:bg-white/5  dark:data-[state=active]:bg-white/10 hover:bg-white/5 data-[state=active]:bg-white/10"
          >
            <AiOutlineTeam className="w-6 h-6" /> Team Management
          </TabsTrigger>
          <TabsTrigger
            value="pvp"
            className="py-3 px-2 flex gap-3 text-[#C0A080] data-[state=active]:text-[#E0D0C0] dark:hover:bg-white/5  dark:data-[state=active]:bg-white/10 hover:bg-white/5 data-[state=active]:bg-white/10"
          >
            <GoPerson className="w-5 h-5" /> Player Battles
          </TabsTrigger>
        </TabsList>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-4 text-[#E0D0C0]">
              <TabsContent value="pvp">
                <MatchMaking />
                <BattleView clubType="player" />
                <CodingTerminal examType="Player Duel" />
              </TabsContent>
              <TabsContent value="team">
                <TeamView clubType="team" />
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
