import { motion } from 'framer-motion';
import { Calendar, CheckSquare, BarChart2, GraduationCap, Clock, Plus, ArrowRight, Target, Brain, Lightbulb, Award, ChevronRight, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  category: string;
}

interface Goal {
  id: string;
  title: string;
  progress: number;
  deadline: string;
  category: string;
}

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Quantum Physics Assignment',
    status: 'todo',
    priority: 'high',
    dueDate: 'March 20, 1970',
    category: 'Physics'
  },
  {
    id: '2',
    title: 'Review Classical Literature Notes',
    status: 'in-progress',
    priority: 'medium',
    dueDate: 'March 21, 1970',
    category: 'Literature'
  },
  {
    id: '3',
    title: 'Prepare Math Study Guide',
    status: 'done',
    priority: 'high',
    dueDate: 'March 19, 1970',
    category: 'Mathematics'
  }
];

const sampleGoals: Goal[] = [
  {
    id: '1',
    title: 'Master Quantum Mechanics',
    progress: 65,
    deadline: 'April 1, 1970',
    category: 'Physics'
  },
  {
    id: '2',
    title: 'Complete Victorian Literature Analysis',
    progress: 40,
    deadline: 'March 25, 1970',
    category: 'Literature'
  }
];

const productivityStats = [
  { label: 'Study Hours', value: '32.5', change: '+2.5', trend: 'up' },
  { label: 'Tasks Completed', value: '24', change: '+5', trend: 'up' },
  { label: 'Focus Score', value: '85%', change: '+3%', trend: 'up' },
  { label: 'Productivity Index', value: '92', change: '-1', trend: 'down' }
];

export function ProductivitySection() {
  const [activeView, setActiveView] = useState<'kanban' | 'insights' | 'goals' | 'grades'>('kanban');

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-[#C0A080]" />
            <h3 className="text-xl font-serif text-[#E0D0C0]">Productivity Dashboard</h3>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'kanban', label: 'Kan-ban', icon: CheckSquare },
              { id: 'insights', label: 'Insights', icon: Brain },
              { id: 'goals', label: 'Goals', icon: Target },
              { id: 'grades', label: 'Grades', icon: GraduationCap }
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id as any)}
                className={cn(
                  'px-4 py-2 rounded-lg flex items-center gap-2 transition-colors',
                  activeView === view.id
                    ? 'bg-[#C0A080]/10 text-[#C0A080] border border-[#C0A080]/20'
                    : 'text-[#8A8A8A] hover:bg-[#1A1A1A]'
                )}
              >
                <view.icon className="w-4 h-4" />
                <span>{view.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {productivityStats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]"
            >
              <div className="text-[#8A8A8A] text-sm mb-1">{stat.label}</div>
              <div className="flex items-end justify-between">
                <div className="text-[#E0D0C0] text-2xl font-serif">{stat.value}</div>
                <div className={cn(
                  'text-sm flex items-center gap-1',
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                )}>
                  {stat.change}
                  <ArrowRight className={cn(
                    'w-3 h-3',
                    stat.trend === 'up' ? 'rotate-[-45deg]' : 'rotate-45deg'
                  )} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        {activeView === 'kanban' && (
          <div className="grid grid-cols-3 gap-4">
            {['todo', 'in-progress', 'done'].map((column) => (
              <div key={column} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-[#E0D0C0] font-serif capitalize">{column.replace('-', ' ')}</h4>
                  <span className="text-[#8A8A8A] text-sm">
                    {sampleTasks.filter(task => task.status === column).length}
                  </span>
                </div>
                <div className="space-y-3">
                  {sampleTasks
                    .filter(task => task.status === column)
                    .map((task) => (
                      <div
                        key={task.id}
                        className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="text-[#E0D0C0] text-sm">{task.title}</h5>
                          <span className={cn(
                            'px-2 py-1 rounded-full text-xs',
                            task.priority === 'high' ? 'bg-red-500/10 text-red-400' :
                            task.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-green-500/10 text-green-400'
                          )}>
                            {task.priority}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#8A8A8A]">{task.category}</span>
                          <div className="flex items-center gap-1 text-[#8A8A8A]">
                            <Clock className="w-3 h-3" />
                            <span>{task.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  <button className="w-full p-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm flex items-center justify-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Add Task</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'insights' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h4 className="text-[#E0D0C0] font-serif mb-4">Study Patterns</h4>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Study Time Distribution Chart]
                </div>
              </div>
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h4 className="text-[#E0D0C0] font-serif mb-4">Focus Analysis</h4>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Focus Metrics Chart]
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-[#C0A080]" />
                <h4 className="text-[#E0D0C0] font-serif">Productivity Insights</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm">
                  Peak productivity hours: 9 AM - 11 AM
                </div>
                <div className="p-3 bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm">
                  Most productive subject: Quantum Physics
                </div>
                <div className="p-3 bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm">
                  Suggested break interval: Every 45 minutes
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'goals' && (
          <div className="space-y-6">
            {sampleGoals.map((goal) => (
              <div
                key={goal.id}
                className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-[#E0D0C0] font-serif">{goal.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#8A8A8A] text-sm">{goal.category}</span>
                      <span className="text-[#8A8A8A] text-sm">•</span>
                      <div className="flex items-center gap-1 text-[#8A8A8A] text-sm">
                        <Clock className="w-3 h-3" />
                        <span>{goal.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#C0A080]">{goal.progress}%</span>
                </div>
                <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C0A080] to-[#8A6040]"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
            <button className="w-full p-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-[#8A8A8A] flex items-center justify-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add New Goal</span>
            </button>
          </div>
        )}

        {activeView === 'grades' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h4 className="text-[#E0D0C0] font-serif mb-4">Grade Distribution</h4>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Grade Distribution Chart]
                </div>
              </div>
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h4 className="text-[#E0D0C0] font-serif mb-4">Performance Trends</h4>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Performance Trend Chart]
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[#E0D0C0] font-serif">Recent Assessments</h4>
                <button className="text-[#C0A080] text-sm hover:text-[#B09070] transition-colors">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { subject: 'Quantum Physics', type: 'Quiz', score: 92, date: 'March 15, 1970' },
                  { subject: 'Classical Literature', type: 'Essay', score: 88, date: 'March 14, 1970' },
                  { subject: 'Advanced Mathematics', type: 'Test', score: 95, date: 'March 13, 1970' }
                ].map((assessment) => (
                  <div
                    key={`${assessment.subject}-${assessment.date}`}
                    className="p-4 bg-[#2A2A2A] rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[#E0D0C0]">{assessment.subject}</div>
                      <div className="text-[#8A8A8A] text-sm">{assessment.type} • {assessment.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#C0A080] text-lg">{assessment.score}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}