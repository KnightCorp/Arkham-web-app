import { motion } from 'framer-motion';
import { Code2, GitBranch, Star } from 'lucide-react';

const projects = [
  {
    title: 'Cryptography Tool',
    description: 'A tool for encoding and decoding secret messages',
    tech: ['Python', 'Cryptography'],
    stars: 42,
    forks: 12,
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive visualization of neural network architectures',
    tech: ['JavaScript', 'D3.js'],
    stars: 128,
    forks: 34,
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Basic quantum circuit simulation and visualization',
    tech: ['Python', 'Qiskit'],
    stars: 76,
    forks: 18,
  },
];

export function ProjectsGallery() {
  return (
    <div className="col-span-2 grid gap-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/95 p-6 rounded-lg border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-serif text-white">Featured Projects</h3>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/90 text-sm font-medium">
            New Project
          </button>
        </div>
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white/90 font-medium flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    {project.title}
                  </h4>
                  <p className="text-white/50 text-sm mt-1">{project.description}</p>
                  <div className="flex gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/50">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    <span className="text-sm">{project.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}