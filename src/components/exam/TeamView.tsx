import { getTeamTitle } from "@/lib/utils";
import { motion } from "framer-motion";

interface TeamViewProps {
  clubType: string;
}

export const TeamView = ({ clubType }: TeamViewProps) => {
  const teamMembers = [
    {
      id: "1",
      name: "Scholar_01",
      stats: 67,
      contribution: "20pts",
      lastSeen: "30 mins",
    },
    {
      id: "2",
      name: "Scholar_02",
      stats: 72,
      contribution: "25pts",
      lastSeen: "30 mins",
    },
    {
      id: "3",
      name: "Scholar_03",
      stats: 72,
      contribution: "25pts",
      lastSeen: "30 mins",
    },
  ];

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="stats-card flex justify-between items-center">
        <span>{getTeamTitle(clubType)} Points: 10</span>
        <span>Team Resources: 100</span>
      </div>

      <div className="space-y-2">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="stats-card flex justify-between items-center"
          >
            <span>{member.name}</span>
            <div className="flex space-x-4">
              <span>{member.stats}%</span>
              <span>{member.contribution}</span>
              <span>{member.lastSeen}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <button className="action-button flex-1">
          Join/Leave {getTeamTitle(clubType)}
        </button>
        <button className="action-button red flex-1">
          Manage {getTeamTitle(clubType)}
        </button>
      </div>
    </motion.div>
  );
};
