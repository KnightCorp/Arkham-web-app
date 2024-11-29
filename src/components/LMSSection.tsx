import { motion } from 'framer-motion';
import { BookMarked, Clock, Calendar, Award, BookOpen, CheckCircle, Play, Download, FileText, Search, Plus, Network, Brain, Link2, Filter, Book, Mic, Archive, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { NoteTakingSection } from './lms/NoteTakingSection';
import { SecondBrainSection } from './lms/SecondBrainSection';
import { ZettelkastenSection } from './lms/ZettelkastenSection';
import { ProductivitySection } from './lms/ProductivitySection';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BookMarked },
  { id: 'notes', label: 'Note Taking', icon: FileText },
  { id: 'second-brain', label: 'Second Brain', icon: Brain },
  { id: 'zettelkasten', label: 'Zettelkasten', icon: Archive },
  { id: 'productivity', label: 'Productivity', icon: BarChart2 }
];

const courses = [
  {
    id: 1,
    title: 'Advanced Mathematics',
    progress: 75,
    nextLesson: 'Complex Analysis',
    duration: '2h 30m remaining',
    dueDate: 'March 20, 1970'
  },
  {
    id: 2,
    title: 'Quantum Physics',
    progress: 45,
    nextLesson: 'Wave Functions',
    duration: '4h remaining',
    dueDate: 'March 25, 1970'
  },
  {
    id: 3,
    title: 'Classical Literature',
    progress: 60,
    nextLesson: 'Victorian Era',
    duration: '3h remaining',
    dueDate: 'March 22, 1970'
  }
];

export function LMSSection() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookMarked className="w-6 h-6 text-[#C0A080]" />
          <h2 className="text-3xl font-serif text-[#E0D0C0]">Learning Management</h2>
        </div>
        <p className="text-[#8A8A8A] font-serif mb-8">
          Track your academic progress and manage your coursework efficiently.
        </p>

        {/* Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-6 py-3 rounded-lg font-serif transition-colors flex items-center gap-2',
                activeTab === tab.id
                  ? 'bg-[#C0A080]/10 text-[#E0D0C0] border border-[#C0A080]/20'
                  : 'bg-[#1A1A1A] text-[#8A8A8A] border border-[#3A3A3A] hover:bg-[#2A2A2A]'
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <>
          {/* Course Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="glass-card rounded-xl p-6 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif text-[#E0D0C0]">{course.title}</h3>
                  <span className="text-[#C0A080] text-sm">{course.progress}%</span>
                </div>

                <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C0A080] to-[#8A6040]"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-[#8A8A8A]" />
                    <span className="text-[#E0D0C0]">Next: {course.nextLesson}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#8A8A8A]" />
                    <span className="text-[#8A8A8A]">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-[#8A8A8A]" />
                    <span className="text-[#8A8A8A]">Due: {course.dueDate}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#3A3A3A]">
                  <button className="w-full py-2 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 rounded-lg text-[#C0A080] transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    <span>Continue Learning</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-serif text-[#E0D0C0] mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Completed Quiz', subject: 'Advanced Mathematics', score: '85%', time: '2 hours ago' },
                { action: 'Watched Lecture', subject: 'Quantum Physics', duration: '45 minutes', time: '4 hours ago' },
                { action: 'Submitted Assignment', subject: 'Classical Literature', grade: 'A', time: 'Yesterday' }
              ].map((activity, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-[#E0D0C0] font-medium">{activity.action}</h4>
                    <p className="text-[#8A8A8A] text-sm">{activity.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#C0A080]">
                      {activity.score || activity.duration || activity.grade}
                    </p>
                    <p className="text-[#8A8A8A] text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'notes' && <NoteTakingSection />}
      {activeTab === 'second-brain' && <SecondBrainSection />}
      {activeTab === 'zettelkasten' && <ZettelkastenSection />}
      {activeTab === 'productivity' && <ProductivitySection />}
    </motion.div>
  );
}