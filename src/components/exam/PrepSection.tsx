import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  BookOpen,
  Trophy,
  CheckCircle2,
  Target,
  BarChart2,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSlug } from "@/lib/utils";

const upcomingExams = [
  {
    subject: "Advanced Mathematics",
    date: "March 20, 1970",
    time: "09:00 AM",
    duration: "3 hours",
    topics: ["Calculus", "Linear Algebra", "Statistics"],
    progress: 75,
  },
  {
    subject: "Quantum Physics",
    date: "March 25, 1970",
    time: "02:00 PM",
    duration: "2 hours",
    topics: ["Wave Functions", "Quantum States", "Measurement"],
    progress: 45,
  },
];

const exams = ["IIT JEE", "NEET", "UPSC", "GATE", "CAT", "GMAT", "CLAT"];

export function PrepSection() {
  const [selectedExam, setSelectedExam] = useState(exams[0]);
  const navigate = useNavigate();

  const handleExamChange = (exam: string) => {
    setSelectedExam(exam);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Upcoming Exams */}
      <div className="lg:col-span-2 space-y-4">
        <div className="md:flex md:justify-between">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <Target className="w-6 h-6 text-[#C0A080]" />
            <h3 className="text-xl font-serif text-[#E0D0C0]">
              Upcoming Exams
            </h3>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 bg-white/20 p-2 rounded-xl">
              {selectedExam} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Exams</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {exams.map((exam) => (
                <DropdownMenuItem
                  key={exam}
                  onClick={() => handleExamChange(exam)}
                >
                  {exam}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {upcomingExams.map((exam) => (
          <motion.div
            key={exam.subject}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] p-6 shadow-xl relative overflow-hidden cursor-pointer"
            onClick={() => {
              navigate(`/exam/${createSlug(exam.subject)}`);
            }}
          >
            {/* Ornate Corner */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#4A4A4A] rounded-tl-lg" />

            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-[#E0D0C0] font-serif text-lg">
                    {exam.subject}
                  </h4>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{exam.time}</span>
                    </div>
                  </div>
                </div>
                <span className="px-4 py-2 bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg text-[#C0A080] text-sm">
                  {exam.duration}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#8A8A8A] text-sm">Progress</span>
                    <span className="text-[#C0A080] text-sm">
                      {exam.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden border border-[#3A3A3A]">
                    <div
                      className="h-full bg-gradient-to-r from-[#8A7060] to-[#C0A080]"
                      style={{ width: `${exam.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exam.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg text-[#E0D0C0] text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="space-y-4">
        <div className="bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <BarChart2 className="w-6 h-6 text-[#C0A080]" />
            <h3 className="text-[#E0D0C0] text-lg">Progress Overview</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#C0A080]" />
              </div>
              <div>
                <div className="text-[#E0D0C0]">Topics Completed</div>
                <div className="text-[#8A8A8A] text-sm">12 of 15</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-[#C0A080]" />
              </div>
              <div>
                <div className="text-[#E0D0C0]">Practice Tests</div>
                <div className="text-[#8A8A8A] text-sm">8 completed</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] border border-[#3A3A3A] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#C0A080]" />
              </div>
              <div>
                <div className="text-[#E0D0C0]">Major Exams</div>
                <div className="text-[#8A8A8A] text-sm">2 of 4 completed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0D0D0D] rounded-lg border border-[#3A3A3A] p-6 shadow-xl">
          <h3 className="text-[#E0D0C0] text-lg mb-4">Quick Actions</h3>
          <div className="space-y-2">
            {[
              "Schedule Practice Test",
              "Review Study Materials",
              "Download Resources",
              "Set Study Timer",
            ].map((action) => (
              <button
                key={action}
                className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg text-[#E0D0C0] text-sm text-left transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
