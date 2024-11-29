import { Skull } from "lucide-react";

export const GameHeader = () => {
  return (
    <div className="menu-header h-16 relative">
      <div className="absolute inset-0 flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-wider">MENU</h1>
        <div className="relative z-10">
          <Skull className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
