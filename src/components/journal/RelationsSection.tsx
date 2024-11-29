import { motion } from 'framer-motion';
import { Heart, Users, Network, Search, Filter, Brain, Target, Eye, Lock, Flag, MessageSquare, Link2, ExternalLink, BarChart2, Scale, Workflow, GitBranch, Share2, Zap, AlertTriangle, UserPlus, ChevronRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SocialCircle {
  id: string;
  name: string;
  type: 'personal' | 'professional' | 'academic';
  members: string[];
  dynamics: {
    cohesion: number;
    trust: number;
    influence: number;
  };
  relationships: {
    from: string;
    to: string;
    nature: string;
    strength: number;
    notes: string[];
  }[];
  observations: {
    date: string;
    note: string;
    significance: 'low' | 'medium' | 'high';
  }[];
}

const sampleCircles: SocialCircle[] = [
  {
    id: '1',
    name: 'Research Lab Alpha',
    type: 'academic',
    members: ['Dr. Alan Turing', 'Dr. Marie Curie', 'Dr. Richard Feynman'],
    dynamics: {
      cohesion: 85,
      trust: 75,
      influence: 90
    },
    relationships: [
      {
        from: 'Dr. Alan Turing',
        to: 'Dr. Marie Curie',
        nature: 'Research Collaboration',
        strength: 80,
        notes: [
          'Regular collaboration on quantum computing projects',
          'Some tension over research direction',
          'Strong mutual respect despite differences'
        ]
      }
    ],
    observations: [
      {
        date: 'March 15, 1970',
        note: 'Increasing competition for research funding affecting group dynamics',
        significance: 'high'
      },
      {
        date: 'March 10, 1970',
        note: 'Formation of unofficial subgroups based on research interests',
        significance: 'medium'
      }
    ]
  }
];

export function RelationsSection() {
  const [activeView, setActiveView] = useState<'circles' | 'dynamics' | 'analysis'>('circles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-[#C0A080]" />
            <h2 className="text-2xl font-serif text-[#E0D0C0]">Social Relations</h2>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'circles', label: 'Social Circles', icon: Users },
              { id: 'dynamics', label: 'Group Dynamics', icon: Network },
              { id: 'analysis', label: 'Analysis', icon: Brain }
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

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8A8A]" />
          <input
            type="text"
            placeholder="Search social circles and relationships..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-10 pr-4 py-3 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080]"
          />
        </div>

        {/* Main Content */}
        {activeView === 'circles' && (
          <div className="grid grid-cols-3 gap-6">
            {/* Social Circles List */}
            <div className="col-span-1 space-y-4">
              <button className="w-full p-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg transition-colors group">
                <div className="flex items-center justify-center gap-2 text-[#C0A080]">
                  <UserPlus className="w-4 h-4" />
                  <span>Create New Circle</span>
                </div>
              </button>

              {sampleCircles.map((circle) => (
                <button
                  key={circle.id}
                  onClick={() => setSelectedCircle(circle.id)}
                  className={cn(
                    'w-full p-4 rounded-lg border transition-colors text-left',
                    selectedCircle === circle.id
                      ? 'bg-[#C0A080]/10 border-[#C0A080]/20'
                      : 'bg-[#1A1A1A] border-[#3A3A3A] hover:bg-[#2A2A2A]'
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#E0D0C0] font-serif">{circle.name}</h3>
                    <span className="px-2 py-1 bg-[#2A2A2A] rounded-full text-xs text-[#8A8A8A] capitalize">
                      {circle.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#8A8A8A]">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{circle.members.length} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{circle.dynamics.cohesion}% cohesion</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Circle Details */}
            <div className="col-span-2 space-y-6">
              {selectedCircle && (
                <>
                  {/* Members Grid */}
                  <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                    <h3 className="text-[#E0D0C0] font-serif mb-4">Members</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {sampleCircles[0].members.map((member) => (
                        <div
                          key={member}
                          className="p-4 bg-[#2A2A2A] rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[#E0D0C0]">{member}</span>
                            <button className="p-1.5 hover:bg-[#3A3A3A] rounded-lg transition-colors">
                              <Eye className="w-4 h-4 text-[#8A8A8A]" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                            <Network className="w-3 h-3" />
                            <span>3 connections in circle</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Relationships */}
                  <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                    <h3 className="text-[#E0D0C0] font-serif mb-4">Relationships</h3>
                    <div className="space-y-4">
                      {sampleCircles[0].relationships.map((rel, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-[#2A2A2A] rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[#E0D0C0]">{rel.from}</span>
                              <ChevronRight className="w-4 h-4 text-[#8A8A8A]" />
                              <span className="text-[#E0D0C0]">{rel.to}</span>
                            </div>
                            <span className="text-[#C0A080]">{rel.strength}% strength</span>
                          </div>
                          <p className="text-[#8A8A8A] text-sm mb-2">{rel.nature}</p>
                          <div className="space-y-1">
                            {rel.notes.map((note, noteIdx) => (
                              <p key={noteIdx} className="text-xs text-[#8A8A8A]">
                                • {note}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Observations */}
                  <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                    <h3 className="text-[#E0D0C0] font-serif mb-4">Recent Observations</h3>
                    <div className="space-y-3">
                      {sampleCircles[0].observations.map((obs, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-[#2A2A2A] rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{obs.date}</span>
                            </div>
                            <span className={cn(
                              'px-2 py-1 rounded-full text-xs',
                              obs.significance === 'high' ? 'bg-red-500/10 text-red-400' :
                              obs.significance === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                              'bg-green-500/10 text-green-400'
                            )}>
                              {obs.significance} significance
                            </span>
                          </div>
                          <p className="text-[#E0D0C0] text-sm">{obs.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {activeView === 'dynamics' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Group Dynamics Visualization */}
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <h3 className="text-[#E0D0C0] font-serif mb-4">Group Dynamics Map</h3>
              <div className="h-96 flex items-center justify-center text-[#8A8A8A]">
                [Interactive Group Dynamics Visualization]
              </div>
            </div>

            {/* Metrics and Analysis */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Group Cohesion', value: '85%' },
                    { label: 'Power Distribution', value: '70%' },
                    { label: 'Communication Flow', value: '92%' },
                    { label: 'Conflict Level', value: 'Low' }
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex justify-between items-center"
                    >
                      <span className="text-[#8A8A8A]">{metric.label}</span>
                      <span className="text-[#E0D0C0]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Dynamic Patterns</h3>
                <div className="space-y-3">
                  {[
                    'Strong hierarchical structure in academic circles',
                    'Informal leadership emerging in research groups',
                    'Cross-circle collaboration increasing'
                  ].map((pattern, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#8A8A8A] text-sm"
                    >
                      {pattern}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'analysis' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Relationship Analysis */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Power Dynamics</h3>
                <div className="space-y-3">
                  {[
                    'Centralization of influence in research leadership',
                    'Emerging competitive dynamics between subgroups',
                    'Balanced power distribution in collaborative projects'
                  ].map((dynamic, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm"
                    >
                      {dynamic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Trust Network</h3>
                <div className="h-64 flex items-center justify-center text-[#8A8A8A]">
                  [Trust Network Visualization]
                </div>
              </div>
            </div>

            {/* Behavioral Analysis */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Behavioral Patterns</h3>
                <div className="space-y-3">
                  {[
                    {
                      pattern: 'Information Sharing',
                      observation: 'Selective disclosure patterns among senior members',
                      significance: 'high'
                    },
                    {
                      pattern: 'Collaboration Style',
                      observation: 'Preference for small group interactions',
                      significance: 'medium'
                    },
                    {
                      pattern: 'Decision Making',
                      observation: 'Consensus-driven in public, hierarchical in private',
                      significance: 'high'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#2A2A2A] rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#E0D0C0]">{item.pattern}</span>
                        <span className={cn(
                          'px-2 py-1 rounded-full text-xs',
                          item.significance === 'high' ? 'bg-red-500/10 text-red-400' :
                          'bg-yellow-500/10 text-yellow-400'
                        )}>
                          {item.significance} significance
                        </span>
                      </div>
                      <p className="text-[#8A8A8A] text-sm">{item.observation}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Relationship Evolution</h3>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Relationship Evolution Timeline]
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}