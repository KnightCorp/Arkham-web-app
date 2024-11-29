import { getBattleTitle } from "@/lib/utils";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

interface BattleViewProps {
  clubType: string;
}

export const BattleView = ({ clubType }: BattleViewProps) => {
  return (
    <motion.div
      className="p-4 space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-title text-academia-gold mb-6">
        {getBattleTitle(clubType)}
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-academia-leather border-2 border-academia-gold flex items-center justify-center">
            <Shield className="w-8 h-8 text-academia-gold" />
          </div>
          <div>
            <div className="progress-bar w-32">
              <div className="fill" style={{ width: "75%" }}></div>
            </div>
            <p className="mt-1 text-academia-gold">Level: 1</p>
          </div>
        </div>

        <div className="text-2xl font-title text-academia-crimson">VS</div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="progress-bar w-32">
              <div className="fill" style={{ width: "60%" }}></div>
            </div>
            <p className="mt-1 text-academia-gold">Level: 3</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-academia-leather border-2 border-academia-gold flex items-center justify-center">
            <Shield className="w-8 h-8 text-academia-gold" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
