import { motion } from 'framer-motion';
import { Users, Clock, ArrowRight, Search, X } from 'lucide-react';
import { useState } from 'react';

const groupProjects = [
  {
    title: 'AI Research Group',
    description: 'Developing neural networks for pattern recognition',
    members: 5,
    maxMembers: 8,
    status: 'Active',
    deadline: '7 days',
    progress: 65,
    skills: ['Python', 'TensorFlow', 'Neural Networks']
  },
  {
    title: 'Blockchain Development',
    description: 'Building a decentralized application platform',
    members: 3,
    maxMembers: 6,
    status: 'Recruiting',
    deadline: '14 days',
    progress: 30,
    skills: ['Solidity', 'Web3.js', 'Smart Contracts']
  },
  {
    title: 'Cybersecurity Lab',
    description: 'Researching zero-day vulnerabilities',
    members: 4,
    maxMembers: 7,
    status: 'Active',
    deadline: '21 days',
    progress: 45,
    skills: ['Network Security', 'Penetration Testing', 'Python']
  },
  {
    title: 'Quantum Computing Research',
    description: 'Exploring quantum algorithms and simulation',
    members: 2,
    maxMembers: 5,
    status: 'Recruiting',
    deadline: '30 days',
    progress: 15,
    skills: ['Quantum Computing', 'Linear Algebra', 'Python']
  }
];

export function GroupProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filteredProjects = groupProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => project.skills.includes(skill));
    return matchesSearch && matchesSkills;
  });

  const allSkills = Array.from(new Set(groupProjects.flatMap(p => p.skills)));

  return (
    <div className="col-span-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/95 p-6 rounded-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-serif text-white">Collaborative Projects</h3>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/90 text-sm font-medium">
            Create Group
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white/90 placeholder:text-white/50 focus:outline-none focus:border-white/20"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => {
                  setSelectedSkills(prev => 
                    prev.includes(skill) 
                      ? prev.filter(s => s !== skill)
                      : [...prev, skill]
                  );
                }}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedSkills.includes(skill)
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {skill}
              </button>
            ))}
            {selectedSkills.length > 0 && (
              <button
                onClick={() => setSelectedSkills([])}
                className="px-3 py-1 rounded-full bg-red-900/20 text-red-400 text-sm hover:bg-red-900/30 flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear filters
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white/90 font-medium">{project.title}</h4>
                  <p className="text-white/50 text-sm mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-white/50">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{project.members}/{project.maxMembers} members</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/50">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{project.deadline}</span>
                    </div>
                  </div>
                </div>
                {project.status === 'Recruiting' && (
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/90 text-sm font-medium transition-colors">
                    Apply Now
                  </button>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/50 text-sm">Progress</span>
                  <span className="text-white/70 text-sm">{project.progress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-white/30 to-white/20"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}