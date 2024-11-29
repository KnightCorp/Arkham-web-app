import { motion } from 'framer-motion';
import { BookOpen, Users, Sparkles, Newspaper, Send, ArrowRight, Play, Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const videoPlaylist = [
  {
    id: 1,
    title: "Introduction to The Archives",
    duration: "5:30",
    thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    url: "https://example.com/video1.mp4"
  },
  {
    id: 2,
    title: "Student Success Stories",
    duration: "8:45",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    url: "https://example.com/video2.mp4"
  },
  {
    id: 3,
    title: "Campus Virtual Tour",
    duration: "6:15",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    url: "https://example.com/video3.mp4"
  }
];

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-6 bg-black/40 backdrop-blur-sm border border-[#3A3A3A] rounded-lg hover:bg-black/50 transition-colors group relative overflow-hidden">
      {/* Ornate Corner Decorations */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#C0A080]/20 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#C0A080]/20 rounded-br-lg" />
      
      <Icon className="w-6 h-6 text-[#C0A080] mb-4" />
      <h3 className="text-lg font-serif text-[#E0D0C0] mb-2">{title}</h3>
      <p className="text-[#8A8A8A] text-sm leading-relaxed font-serif">{description}</p>
    </div>
  );
}

export function MainContent() {
  const [activeVideo, setActiveVideo] = useState(videoPlaylist[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-12"
    >
      {/* Hero Section */}
      <div className="glass-card rounded-xl p-8 relative overflow-hidden">
        {/* Ornate Corner Decorations */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#C0A080]/20 rounded-tl-lg" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C0A080]/20 rounded-br-lg" />
        
        <h1 className="text-5xl font-serif text-[#E0D0C0] mb-6">The Archives</h1>
        <p className="text-[#8A8A8A] leading-relaxed text-lg max-w-2xl font-serif">
          Where knowledge meets noir. Explore our curated collection of learning paths,
          from cutting-edge technology to classical literature and academic excellence.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="glass-card rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C0A080]/20 rounded-tl-lg" />
        <h2 className="text-3xl font-serif text-[#E0D0C0] mb-6">Our Mission</h2>
        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-[#8A8A8A] leading-relaxed font-serif">
            In the shadowed halls of academia, we forge the minds of tomorrow. 
            The Archives stands as a beacon for those who seek knowledge in its purest form, 
            where classical wisdom meets cutting-edge innovation.
          </p>
        </div>
      </section>

      {/* Student Experience with Video Player */}
      <section className="glass-card rounded-xl p-8">
        <h2 className="text-3xl font-serif text-[#E0D0C0] mb-6">The Student Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="relative aspect-video bg-black/60 rounded-lg overflow-hidden border border-[#3A3A3A]">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#C0A080]/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-[#C0A080]/30 transition-colors">
                  <Play className="w-8 h-8 text-[#E0D0C0]" />
                </div>
              </div>
              <img 
                src={activeVideo.thumbnail} 
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-[#3A3A3A]">
              <div>
                <h3 className="text-[#E0D0C0] font-serif">{activeVideo.title}</h3>
                <div className="flex items-center gap-2 text-[#8A8A8A] text-sm mt-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-serif">{activeVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div>
            <h3 className="text-lg font-serif text-[#E0D0C0] mb-4">Featured Videos</h3>
            <div className="space-y-2">
              {videoPlaylist.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={cn(
                    "w-full p-3 rounded-lg flex items-start gap-3 transition-colors",
                    activeVideo.id === video.id
                      ? "bg-[#C0A080]/10 border border-[#C0A080]/20"
                      : "bg-black/40 border border-[#3A3A3A] hover:bg-[#C0A080]/5"
                  )}
                >
                  <div className="relative w-24 aspect-video rounded overflow-hidden flex-shrink-0 border border-[#3A3A3A]">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-4 h-4 text-[#E0D0C0]" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-sm font-serif text-[#E0D0C0] line-clamp-2">{video.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-[#8A8A8A]" />
                      <span className="text-xs text-[#8A8A8A] font-serif">{video.duration}</span>
                    </div>
                  </div>
                  {activeVideo.id === video.id && (
                    <ChevronRight className="w-4 h-4 text-[#C0A080] flex-shrink-0 mt-1" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="glass-card rounded-xl p-8">
        <h2 className="text-3xl font-serif text-[#E0D0C0] mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={BookOpen}
            title="Adaptive Learning"
            description="AI-powered pathways that evolve with your progress"
          />
          <FeatureCard
            icon={Users}
            title="Collaborative Projects"
            description="Join forces with fellow scholars on real-world challenges"
          />
          <FeatureCard
            icon={Sparkles}
            title="Gamified Progress"
            description="Earn rewards and unlock achievements as you learn"
          />
        </div>
      </section>

      {/* News Board */}
      <section className="glass-card rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif text-[#E0D0C0]">Latest News</h2>
          <Newspaper className="w-6 h-6 text-[#8A8A8A]" />
        </div>
        <div className="space-y-4">
          {[
            {
              date: 'March 15, 1970',
              title: 'New Quantum Computing Course',
              preview: 'Explore the mysteries of quantum mechanics...'
            },
            {
              date: 'March 14, 1970',
              title: 'AI Ethics Symposium',
              preview: 'Join leading experts in discussing the future...'
            },
            {
              date: 'March 13, 1970',
              title: 'Student Achievement Awards',
              preview: 'Celebrating excellence in academic pursuit...'
            }
          ].map((news) => (
            <div
              key={news.title}
              className="p-4 bg-black/40 rounded-lg border border-[#3A3A3A] hover:bg-[#C0A080]/5 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#8A8A8A] text-sm font-serif">{news.date}</span>
                <ArrowRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#C0A080] transition-colors" />
              </div>
              <h3 className="text-[#E0D0C0] font-serif mb-1">{news.title}</h3>
              <p className="text-[#8A8A8A] text-sm font-serif">{news.preview}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-[#C0A080]/10">
            <Send className="w-6 h-6 text-[#C0A080]" />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-[#E0D0C0]">Stay Informed</h2>
            <p className="text-[#8A8A8A] font-serif">Subscribe to our weekly digest of academic excellence.</p>
          </div>
        </div>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-black/40 border border-[#3A3A3A] rounded-lg text-[#E0D0C0] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C0A080] font-serif"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#C0A080]/10 hover:bg-[#C0A080]/20 border border-[#C0A080]/20 rounded-lg text-[#C0A080] font-medium transition-colors font-serif"
          >
            Subscribe
          </button>
        </form>
      </section>
    </motion.div>
  );
}