export interface User {
  id: string;
  name: string;
  level: number;
  karmaPoints: number;
  tokens: number;
  stats: UserStats;
}

export interface UserStats {
  wins: number;
  losses: number;
  winRate: number;
  avgSpeed: number;
  avgAccuracy: number;
}

export interface Team {
  id: string;
  name: string;
  admins: string[];
  members: TeamMember[];
  karmaPoints: number;
  budget: number;
}

export interface TeamMember {
  id: string;
  name: string;
  stats: number;
  salary: number;
  lastSeen: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  timeLimit: number;
  points: number;
  type: "algorithm" | "debug" | "optimize" | "frontend" | "backend";
}
