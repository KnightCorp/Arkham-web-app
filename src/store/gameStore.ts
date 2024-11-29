import { create } from "zustand";
import type { User, Team, Challenge } from "../types";

interface GameState {
  user: User | null;
  currentTeam: Team | null;
  availableChallenges: Challenge[];
  tokens: number;
  karmaPoints: number;
  setUser: (user: User) => void;
  setTeam: (team: Team) => void;
  updateTokens: (amount: number) => void;
  updateKarmaPoints: (amount: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  user: null,
  currentTeam: null,
  availableChallenges: [],
  tokens: 3,
  karmaPoints: 1000,
  setUser: (user) => set({ user }),
  setTeam: (team) => set({ currentTeam: team }),
  updateTokens: (amount) => set((state) => ({ tokens: state.tokens + amount })),
  updateKarmaPoints: (amount) =>
    set((state) => ({ karmaPoints: state.karmaPoints + amount })),
}));
