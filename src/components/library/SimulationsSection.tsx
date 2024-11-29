import { motion } from 'framer-motion';
import { Gamepad2, Search, Filter, Tag } from 'lucide-react';

export function SimulationsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Gamepad2 className="w-6 h-6 text-black/70 dark:text-white/70" />
          <h2 className="text-3xl font-serif text-black/90 dark:text-white/90">Simulations</h2>
        </div>
        <p className="text-black/60 dark:text-white/60 font-serif mb-8">
          Interactive learning environments for hands-on experience and experimentation.
        </p>
      </div>
    </motion.div>
  );
}