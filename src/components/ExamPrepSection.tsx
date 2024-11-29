import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Terminal } from "lucide-react";
import { useState } from "react";
import AcademiaSection from "./exam/AcademiaSection";
import { PlaygroundSection } from "./exam/PlaygroundSection";
import { PrepSection } from "./exam/PrepSection";
import { TutorSection } from "./exam/TutorSection";

const tabs = [
  { id: "tutor", label: "AI Tutor", icon: GraduationCap },
  { id: "prep", label: "Exam Prep", icon: BookOpen },
  { id: "playground", label: "Playground", icon: Terminal },
];

export function ExamPrepSection() {
  const [activeTab, setActiveTab] = useState("tutor");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 p-8">
        <h2 className="text-3xl font-serif text-white/90 mb-4">
          Exam Preparation
        </h2>
        <p className="text-white/70">
          Master your academic journey with personalized guidance and structured
          preparation.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 p-6">
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
                activeTab === tab.id
                  ? "bg-white/10 text-white shadow-lg"
                  : "text-white/60 hover:text-white/90 hover:bg-white/5"
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-4">
          {activeTab === "tutor" && <TutorSection />}
          {activeTab === "prep" && <PrepSection />}
          {activeTab === "playground" && <PlaygroundSection />}
        </div>
      </div>
    </motion.div>
  );
}
