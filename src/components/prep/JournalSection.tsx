import { motion } from 'framer-motion';
import { Book, Brain, Target, FileText, PenTool, Sparkles, ChevronRight, AlertCircle, Lightbulb, Compass, Heart, Activity, Lock, Plus, Scale, Glasses, Zap, Workflow } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
  biases: {
    type: string;
    description: string;
    impact: 'low' | 'medium' | 'high';
  }[];
  insights: {
    category: 'cognitive' | 'emotional' | 'behavioral';
    content: string;
  }[];
  tags: string[];
}

const sampleEntries: JournalEntry[] = [
  {
    id: '1',
    title: 'Quantum Mechanics Study Session',
    content: 'Today\'s deep dive into wave functions revealed interesting parallels with classical mechanics. Found myself resistant to some newer interpretations.',
    date: 'March 15, 1970',
    mood: 'Contemplative',
    biases: [
      {
        type: 'Confirmation Bias',
        description: 'Noticed tendency to favor evidence supporting classical interpretations',
        impact: 'high'
      },
      {
        type: 'Anchoring Bias',
        description: 'Initial understanding of particle physics affecting new quantum concepts',
        impact: 'medium'
      }
    ],
    insights: [
      {
        category: 'cognitive',
        content: 'Strong pattern recognition in mathematical formulations'
      },
      {
        category: 'emotional',
        content: 'Anxiety when confronting counterintuitive concepts'
      },
      {
        category: 'behavioral',
        content: 'Tendency to over-analyze rather than intuitive understanding'
      }
    ],
    tags: ['Physics', 'Quantum Mechanics', 'Self-Analysis']
  }
];

const cognitivePatterns = {
  strengths: ['Abstract Reasoning', 'Pattern Recognition', 'Analytical Thinking'],
  biases: ['Confirmation Bias', 'Anchoring', 'Availability Heuristic'],
  challenges: ['Information Overload', 'Analysis Paralysis', 'Cognitive Dissonance']
};

export function JournalSection() {
  const [activeView, setActiveView] = useState<'entries' | 'analysis' | 'patterns'>('entries');
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Book className="w-6 h-6 text-[#C0A080]" />
            <h2 className="text-2xl font-serif text-[#E0D0C0]">Detective's Journal</h2>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'entries', label: 'Entries', icon: FileText },
              { id: 'analysis', label: 'Analysis', icon: Brain },
              { id: 'patterns', label: 'Patterns', icon: Workflow }
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

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Cognitive Patterns', value: '12', icon: Brain },
            { label: 'Emotional Insights', value: '8', icon: Heart },
            { label: 'Behavioral Trends', value: '15', icon: Activity },
            { label: 'Bias Awareness', value: '85%', icon: Scale }
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className="w-4 h-4 text-[#C0A080]" />
                <span className="text-[#8A8A8A] text-sm">{stat.label}</span>
              </div>
              <div className="text-[#E0D0C0] text-2xl font-serif">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        {activeView === 'entries' && (
          <div className="space-y-6">
            {/* New Entry Button */}
            <button className="w-full p-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg transition-colors group">
              <div className="flex items-center justify-center gap-2 text-[#C0A080]">
                <PenTool className="w-4 h-4" />
                <span>New Journal Entry</span>
              </div>
            </button>

            {/* Entries */}
            {sampleEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-[#E0D0C0]">{entry.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-[#8A8A8A]">
                      <span>{entry.date}</span>
                      <span>•</span>
                      <span>{entry.mood}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                      <Lock className="w-4 h-4 text-[#8A8A8A]" />
                    </button>
                    <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                      <Sparkles className="w-4 h-4 text-[#8A8A8A]" />
                    </button>
                  </div>
                </div>

                <p className="text-[#8A8A8A] font-serif">{entry.content}</p>

                {/* Biases */}
                <div className="space-y-2">
                  <h4 className="text-[#E0D0C0] font-serif flex items-center gap-2">
                    <Glasses className="w-4 h-4" />
                    Cognitive Biases
                  </h4>
                  <div className="space-y-2">
                    {entry.biases.map((bias, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#2A2A2A] rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[#E0D0C0] text-sm">{bias.type}</span>
                          <span className={cn(
                            'px-2 py-1 rounded-full text-xs',
                            bias.impact === 'high' ? 'bg-red-500/10 text-red-400' :
                            bias.impact === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-green-500/10 text-green-400'
                          )}>
                            {bias.impact} impact
                          </span>
                        </div>
                        <p className="text-[#8A8A8A] text-sm">{bias.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insights */}
                <div className="space-y-2">
                  <h4 className="text-[#E0D0C0] font-serif flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Insights
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {entry.insights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#2A2A2A] rounded-lg"
                      >
                        <div className="text-[#C0A080] text-sm mb-1 capitalize">
                          {insight.category} Pattern
                        </div>
                        <p className="text-[#8A8A8A] text-sm">{insight.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#2A2A2A] rounded-lg text-xs text-[#8A8A8A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === 'analysis' && (
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <h3 className="text-[#E0D0C0] font-serif mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Cognitive Patterns
              </h3>
              <div className="space-y-4">
                {Object.entries(cognitivePatterns).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-[#C0A080] text-sm mb-2 capitalize">{category}</h4>
                    <div className="space-y-2">
                      {items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Trend Analysis
                </h3>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Trend Visualization]
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Key Insights
                </h3>
                <div className="space-y-2">
                  {[
                    'Strong correlation between mood and learning efficiency',
                    'Peak cognitive performance during morning hours',
                    'Improved retention with visual learning methods'
                  ].map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm"
                    >
                      {insight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'patterns' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Learning Patterns</h3>
                <div className="space-y-2">
                  {[
                    'Visual-Spatial Learning',
                    'Abstract Reasoning',
                    'Sequential Processing'
                  ].map((pattern) => (
                    <div
                      key={pattern}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm"
                    >
                      {pattern}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Decision Making</h3>
                <div className="space-y-2">
                  {[
                    'Analytical Approach',
                    'Evidence-Based',
                    'Risk-Aware'
                  ].map((pattern) => (
                    <div
                      key={pattern}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm"
                    >
                      {pattern}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Problem Solving</h3>
                <div className="space-y-2">
                  {[
                    'Systematic Approach',
                    'Pattern Recognition',
                    'Creative Solutions'
                  ].map((pattern) => (
                    <div
                      key={pattern}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm"
                    >
                      {pattern}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <h3 className="text-[#E0D0C0] font-serif mb-4">Pattern Evolution</h3>
              <div className="h-64 flex items-center justify-center text-[#8A8A8A]">
                [Pattern Evolution Timeline]
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}