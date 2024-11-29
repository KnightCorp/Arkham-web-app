import { motion } from 'framer-motion';
import { Book, Search, Filter, Tag, Play, Clock, Users, ThumbsUp, MessageSquare, Bookmark, Share2, ChevronRight, History, TrendingUp, Star, Crown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Stream {
  id: string;
  title: string;
  thumbnail: string;
  instructor: string;
  views: number;
  duration: string;
  likes: number;
  category: string;
  live?: boolean;
}

const featuredStreams: Stream[] = [
  {
    id: '1',
    title: 'Advanced Quantum Mechanics: Wave Functions',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    instructor: 'Dr. Richard Feynman',
    views: 1200,
    duration: '1:45:30',
    likes: 450,
    category: 'Physics',
    live: true
  },
  {
    id: '2',
    title: 'Classical Literature Analysis: Victorian Era',
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    instructor: 'Prof. Emily Brontë',
    views: 890,
    duration: '1:20:00',
    likes: 320,
    category: 'Literature'
  },
  {
    id: '3',
    title: 'Neural Networks & Deep Learning',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    instructor: 'Dr. Ada Lovelace',
    views: 2100,
    duration: '2:15:45',
    likes: 780,
    category: 'Computer Science'
  }
];

const categories = [
  'All',
  'Physics',
  'Mathematics',
  'Literature',
  'Computer Science',
  'Chemistry',
  'Biology',
  'History'
];

export function ContentSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Book className="w-6 h-6 text-black/70 dark:text-white/70" />
          <h2 className="text-3xl font-serif text-black/90 dark:text-white/90">Library Content</h2>
        </div>
        <p className="text-black/60 dark:text-white/60 font-serif mb-8">
          Access our extensive collection of academic resources and learning materials.
        </p>

        {/* Search and Categories */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black/50 dark:text-white/50" />
            <input
              type="text"
              placeholder="Search streams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 dark:bg-black/5 border border-black/10 dark:border-white/10 rounded-lg pl-10 pr-4 py-3 text-black/90 dark:text-white/90 placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-black/20 dark:focus:border-white/20"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-black/10 dark:scrollbar-thumb-white/10 scrollbar-track-transparent">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors',
                  activeCategory === category
                    ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
                    : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stream */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-serif text-black/90 dark:text-white/90 mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-500" />
          Featured Stream
        </h3>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src={featuredStreams[0].thumbnail}
            alt={featuredStreams[0].title}
            className="w-full h-full object-cover"
          />
          {featuredStreams[0].live && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              LIVE
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button className="absolute inset-0 flex items-center justify-center group">
            <div className="w-16 h-16 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-white" />
            </div>
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-white text-lg font-serif mb-2">{featuredStreams[0].title}</h4>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{featuredStreams[0].instructor}</span>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{featuredStreams[0].views.toLocaleString()} watching</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Streams */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-serif text-black/90 dark:text-white/90">Recent Streams</h3>
          <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm flex items-center gap-1 transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStreams.map((stream) => (
            <div key={stream.id} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {stream.live && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    LIVE
                  </div>
                )}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 text-white text-xs rounded-full">
                  {stream.duration}
                </div>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </button>
              </div>
              <h4 className="text-black/90 dark:text-white/90 font-serif mb-1 line-clamp-2">
                {stream.title}
              </h4>
              <div className="flex items-center justify-between text-sm">
                <span className="text-black/60 dark:text-white/60">{stream.instructor}</span>
                <div className="flex items-center gap-3 text-black/60 dark:text-white/60">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{stream.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{stream.likes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <button className="p-4 glass-card rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <History className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-left">
            <h4 className="text-black/90 dark:text-white/90 font-serif">Watch History</h4>
            <p className="text-black/60 dark:text-white/60 text-sm">Resume learning</p>
          </div>
          <ChevronRight className="w-5 h-5 text-black/40 dark:text-white/40 ml-auto transition-transform group-hover:translate-x-1" />
        </button>

        <button className="p-4 glass-card rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-left">
            <h4 className="text-black/90 dark:text-white/90 font-serif">Trending</h4>
            <p className="text-black/60 dark:text-white/60 text-sm">Popular content</p>
          </div>
          <ChevronRight className="w-5 h-5 text-black/40 dark:text-white/40 ml-auto transition-transform group-hover:translate-x-1" />
        </button>

        <button className="p-4 glass-card rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-left">
            <h4 className="text-black/90 dark:text-white/90 font-serif">Favorites</h4>
            <p className="text-black/60 dark:text-white/60 text-sm">Saved content</p>
          </div>
          <ChevronRight className="w-5 h-5 text-black/40 dark:text-white/40 ml-auto transition-transform group-hover:translate-x-1" />
        </button>

        <button className="p-4 glass-card rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
            <Crown className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-left">
            <h4 className="text-black/90 dark:text-white/90 font-serif">Premium</h4>
            <p className="text-black/60 dark:text-white/60 text-sm">Exclusive content</p>
          </div>
          <ChevronRight className="w-5 h-5 text-black/40 dark:text-white/40 ml-auto transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}