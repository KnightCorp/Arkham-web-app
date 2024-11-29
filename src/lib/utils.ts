import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AiOutlineTeam } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { SiContentstack } from "react-icons/si";
import { FaDev } from "react-icons/fa";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Theme = "dark" | "light";

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function formatPoints(points: number): string {
  if (points < 1000) {
    return points.toString();
  } else if (points >= 1000 && points < 1000000) {
    return (points / 1000).toFixed(1) + "k";
  } else if (points >= 1000000 && points < 1000000000) {
    return (points / 1000000).toFixed(1) + "M";
  } else {
    return (points / 1000000000).toFixed(1) + "B";
  }
}

export function getTabs(type: string) {
  switch (type) {
    case "coding":
      return [
        { id: "karma", label: "Player Exchange", icon: AiOutlineTeam },
        { id: "practice", label: "Code Lab", icon: FaCode },
        { id: "pvp", label: "Code Battles", icon: SiContentstack },
        { id: "team", label: "Dev Teams", icon: FaDev },
      ];
    case "exam":
      return [
        {
          id: "karma",
          label: "Question Bank",
          icon: AiOutlineTeam,
        },
        { id: "practice", label: "Mock Tests", icon: SiContentstack },
        { id: "pvp", label: "Test Arena", icon: FaDev },
        { id: "team", label: "Study Groups", icon: FaCode },
      ];
    case "playground":
      return [
        { id: "team", label: "Team Management", icon: AiOutlineTeam },
        { id: "pvp", label: "Players Battles", icon: FaDev },
      ];
    default:
      return [
        { id: "karma", label: "Scholar's Exchange", icon: AiOutlineTeam },
        { id: "practice", label: "Study Hall", icon: SiContentstack },
        { id: "pvp", label: "Academic Duels", icon: FaDev },
        { id: "team", label: "Study Groups", icon: FaCode },
      ];
  }
}

export const getTeamTitle = (type: string) => {
  switch (type) {
    case "coding":
      return "Dev Team";
    case "exam":
      return "Study Group";
    default:
      return "Academic Circle";
  }
};

export const getBattleTitle = (type: string) => {
  switch (type) {
    case "coding":
      return "Code Duel";
    case "exam":
      return "Knowledge Test";
    default:
      return "Academic Duel";
  }
};

export function createSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
