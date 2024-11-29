import { motion } from 'framer-motion';
import { Network, Search, Users, Brain, Target, Eye, Lock, Flag, MessageSquare, Link2, ExternalLink, BarChart2, Scale, Workflow, GitBranch, Share2, Zap, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NetworkNode {
  id: string;
  name: string;
  type: 'primary' | 'secondary' | 'tertiary';
  influence: number;
  connections: string[];
  groups: string[];
  riskLevel: 'low' | 'medium' | 'high';
  lastActivity: string;
}

interface NetworkGroup {
  id: string;
  name: string;
  members: string[];
  dynamics: {
    powerCenter: string;
    cohesion: number;
    stability: number;
  };
  influence: number;
  activities: {
    date: string;
    description: string;
    significance: 'low' | 'medium' | 'high';
  }[];
}

const sampleNodes: NetworkNode[] = [
  {
    id: '1',
    name: 'Quantum Research Group',
    type: 'primary',
    influence: 85,
    connections: ['2', '3'],
    groups: ['research', 'academic'],
    riskLevel: 'medium',
    lastActivity: 'March 15, 1970'
  }
];

const sampleGroups: NetworkGroup[] = [
  {
    id: '1',
    name: 'Research Division',
    members: ['1', '2', '3'],
    dynamics: {
      powerCenter: 'Dr. Marcus Wells',
      cohesion: 75,
      stability: 60
    },
    influence: 80,
    activities: [
      {
        date: 'March 15, 1970',
        description: 'Unusual pattern of late-night lab access',
        significance: 'high'
      }
    ]
  }
];

export function NetworkSection() {
  const [activeView, setActiveView] = useState<'map' | 'analysis' | 'risks'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-[#C0A080]" />
            <h2 className="text-2xl font-serif text-[#E0D0C0]">Network Analysis</h2>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'map', label: 'Network Map', icon: GitBranch },
              { id: 'analysis', label: 'Analysis', icon: Brain },
              { id: 'risks', label: 'Risk Assessment', icon: AlertTriangle }
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
            { label: 'Active Nodes', value: '24', icon: Users },
            { label: 'Network Density', value: '68%', icon: Share2 },
            { label: 'Risk Factors', value: '7', icon: AlertTriangle },
            { label: 'Power Centers', value: '3', icon: Zap }
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

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8A8A]" />
          <input
            type="text"
            placeholder="Search network..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg pl-10 pr-4 py-3 text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080]"
          />
        </div>

        {/* Main Content */}
        {activeView === 'map' && (
          <div className="grid grid-cols-3 gap-6">
            {/* Network Visualization */}
            <div className="col-span-2 p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] min-h-[600px]">
              <h3 className="text-[#E0D0C0] font-serif mb-4">Network Map</h3>
              <div className="h-full flex items-center justify-center text-[#8A8A8A]">
                [Interactive Network Visualization]
              </div>
            </div>

            {/* Network Details */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Network Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Centrality', value: '0.75' },
                    { label: 'Clustering', value: '0.62' },
                    { label: 'Path Length', value: '2.3' }
                  ].map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center">
                      <span className="text-[#8A8A8A]">{metric.label}</span>
                      <span className="text-[#E0D0C0]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Key Nodes</h3>
                <div className="space-y-2">
                  {sampleNodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className="w-full p-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg text-left transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#E0D0C0]">{node.name}</span>
                        <span className={cn(
                          'px-2 py-1 rounded-full text-xs',
                          node.riskLevel === 'high' ? 'bg-red-500/10 text-red-400' :
                          node.riskLevel === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-green-500/10 text-green-400'
                        )}>
                          {node.riskLevel} risk
                        </span>
                      </div>
                      <div className="text-[#8A8A8A] text-sm mt-1">
                        Influence: {node.influence}%
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'analysis' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Group Analysis */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Group Dynamics</h3>
                <div className="space-y-4">
                  {sampleGroups.map((group) => (
                    <div
                      key={group.id}
                      className="p-4 bg-[#2A2A2A] rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#E0D0C0]">{group.name}</span>
                        <span className="text-[#C0A080]">
                          Influence: {group.influence}%
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#8A8A8A]">Power Center</span>
                          <span className="text-[#E0D0C0]">{group.dynamics.powerCenter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8A8A8A]">Cohesion</span>
                          <span className="text-[#E0D0C0]">{group.dynamics.cohesion}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8A8A8A]">Stability</span>
                          <span className="text-[#E0D0C0]">{group.dynamics.stability}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Recent Activities</h3>
                <div className="space-y-3">
                  {sampleGroups[0].activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#2A2A2A] rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#8A8A8A] text-sm">{activity.date}</span>
                        <span className={cn(
                          'px-2 py-1 rounded-full text-xs',
                          activity.significance === 'high' ? 'bg-red-500/10 text-red-400' :
                          activity.significance === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-green-500/10 text-green-400'
                        )}>
                          {activity.significance} significance
                        </span>
                      </div>
                      <p className="text-[#E0D0C0] text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pattern Analysis */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Network Patterns</h3>
                <div className="space-y-3">
                  {[
                    'Increasing centralization around key nodes',
                    'Formation of isolated subgroups',
                    'Periodic communication bursts'
                  ].map((pattern, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm"
                    >
                      {pattern}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Influence Flow</h3>
                <div className="h-64 flex items-center justify-center text-[#8A8A8A]">
                  [Influence Flow Visualization]
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Network Evolution</h3>
                <div className="h-48 flex items-center justify-center text-[#8A8A8A]">
                  [Network Evolution Timeline]
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'risks' && (
          <div className="grid grid-cols-2 gap-6">
            {/* Risk Matrix */}
            <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
              <h3 className="text-[#E0D0C0] font-serif mb-4">Risk Matrix</h3>
              <div className="h-96 flex items-center justify-center text-[#8A8A8A]">
                [Risk Matrix Visualization]
              </div>
            </div>

            {/* Risk Factors */}
            <div className="space-y-6">
              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Critical Risk Factors</h3>
                <div className="space-y-3">
                  {[
                    { factor: 'Information Flow Control', level: 'high' },
                    { factor: 'Power Concentration', level: 'medium' },
                    { factor: 'Network Vulnerability', level: 'low' }
                  ].map((risk) => (
                    <div
                      key={risk.factor}
                      className="p-4 bg-[#2A2A2A] rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#E0D0C0]">{risk.factor}</span>
                        <span className={cn(
                          'px-2 py-1 rounded-full text-xs',
                          risk.level === 'high' ? 'bg-red-500/10 text-red-400' :
                          risk.level === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-green-500/10 text-green-400'
                        )}>
                          {risk.level} risk
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A]">
                <h3 className="text-[#E0D0C0] font-serif mb-4">Mitigation Strategies</h3>
                <div className="space-y-3">
                  {[
                    'Diversify information channels',
                    'Monitor power dynamics',
                    'Strengthen network resilience'
                  ].map((strategy, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#2A2A2A] rounded-lg text-[#E0D0C0] text-sm"
                    >
                      {strategy}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}