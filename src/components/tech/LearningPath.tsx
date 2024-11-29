import { motion } from 'framer-motion';
import { Terminal, Database, Layout, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const paths = [
  {
    title: 'Full-Stack Developer',
    icon: Terminal,
    progress: 45,
    color: 'from-black to-black',
    borderColor: 'border-white/10',
    lessons: [
      { title: 'Backend Fundamentals', duration: '4 weeks', status: 'In Progress' },
      { title: 'API Development', duration: '3 weeks', status: 'Locked' },
      { title: 'Database Design', duration: '3 weeks', status: 'Locked' },
      { title: 'Frontend Integration', duration: '4 weeks', status: 'Locked' },
      { title: 'Authentication & Security', duration: '2 weeks', status: 'Locked' }
    ]
  },
  {
    title: 'Python Developer',
    icon: Database,
    progress: 25,
    color: 'from-black to-black',
    borderColor: 'border-white/10',
    lessons: [
      { title: 'Python Basics', duration: '2 weeks', status: 'Completed' },
      { title: 'Data Structures', duration: '3 weeks', status: 'In Progress' },
      { title: 'Algorithms', duration: '4 weeks', status: 'Locked' },
      { title: 'Machine Learning Basics', duration: '4 weeks', status: 'Locked' },
      { title: 'Advanced Python Concepts', duration: '3 weeks', status: 'Locked' }
    ]
  },
  {
    title: 'Front-end Developer',
    icon: Layout,
    progress: 50,
    color: 'from-black to-black',
    borderColor: 'border-white/10',
    lessons: [
      { title: 'HTML & CSS', duration: '2 weeks', status: 'Completed' },
      { title: 'JavaScript Fundamentals', duration: '3 weeks', status: 'Completed' },
      { title: 'React Basics', duration: '4 weeks', status: 'In Progress' },
      { title: 'State Management', duration: '2 weeks', status: 'Locked' },
      { title: 'Advanced React Patterns', duration: '3 weeks', status: 'Locked' }
    ]
  }
];

export function LearningPath() {
  const [expandedPath, setExpandedPath] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {paths.map((path, index) => (
        <motion.div
          key={path.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={cn(
            'bg-black/95 p-6 rounded-lg border',
            'bg-gradient-to-r',
            path.color,
            path.borderColor
          )}
        >
          <button 
            onClick={() => setExpandedPath(expandedPath === path.title ? null : path.title)}
            className="w-full"
          >
            <div className="flex items-center gap-4">
              <path.icon className="w-8 h-8 text-white/70" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{path.title}</h3>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-white/50 transition-transform",
                      expandedPath === path.title && "transform rotate-180"
                    )}
                  />
                </div>
                <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-white/30 to-white/20 rounded-full"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <p className="mt-1 text-sm text-white/50">{path.progress}% Complete</p>
              </div>
            </div>
          </button>

          {expandedPath === path.title && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3 pl-12"
            >
              {path.lessons.map((lesson, idx) => (
                <div 
                  key={lesson.title}
                  className="p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white/90 font-medium">{lesson.title}</h4>
                      <p className="text-sm text-white/50">{lesson.duration}</p>
                    </div>
                    <span className={cn(
                      "px-2 py-1 rounded text-xs font-medium",
                      lesson.status === 'Completed' && "bg-[#00FF00]/10 text-[#00FF00]",
                      lesson.status === 'In Progress' && "bg-[#00FF00]/10 text-[#00FF00]",
                      lesson.status === 'Locked' && "bg-white/10 text-white/50"
                    )}>
                      {lesson.status}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}