'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, ArrowRight, Maximize2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export type VideoItem = {
  id: string;
  driveId: string;
  title: string;
  category: 'Automobile' | 'Motion Graphics' | 'Local Business' | 'F&B' | 'Sports' | 'Cinematic';
  aspect?: 'portrait' | 'landscape';
  description?: string;
};

export const sampleVideoEdits: VideoItem[] = [
  {
    id: '1',
    driveId: '1Xk8BBj1oODuVtODq0P7a-lmi1aDDXzmg',
    title: 'Cinematic Brand Edit',
    category: 'Cinematic',
    aspect: 'portrait',
    description: 'Moody cinematic opener with brand identity, atmospheric motion and sound design.',
  },
  {
    id: '2',
    driveId: '1DuVbSCxJFcMy9ubBQClx-B1ZCk-ykHW8',
    title: 'Motion Graphics Edit',
    category: 'Motion Graphics',
    aspect: 'portrait',
    description: 'Clean grid-based motion design with 3D typography and kinetic transitions.',
  },
  {
    id: '3',
    driveId: '11fMqWHObtOI7Vj8VMQa5gs46hlfL6qQK',
    title: 'Automobile Edits',
    category: 'Automobile',
    aspect: 'portrait',
    description: 'Before-after car reel with dynamic speed ramps, cinematic grade and exhaust pacing.',
  },
  {
    id: '4',
    driveId: '1nJ8FJ-w9a3e-vaxjju1wv556I4BgCZd4',
    title: 'Local Store Reel',
    category: 'Local Business',
    aspect: 'portrait',
    description: 'Street-level shop showcase for retail storefronts, walk-throughs & customer hooks.',
  },
  {
    id: '5',
    driveId: '1UU0jXecExI7W6rZRyA8OYinXC19JUIwS',
    title: 'Cinematic Car Edits',
    category: 'Automobile',
    aspect: 'portrait',
    description: 'High-speed automobile footage with radial motion blur and aggressive color grading.',
  },
  {
    id: '6',
    driveId: '1T6TR6_x0sb2qks8szOrXP37dQlD7INdi',
    title: 'Restaurant Edits',
    category: 'F&B',
    aspect: 'portrait',
    description: 'Food & beverage motion reel with mouthwatering macro shots and upbeat rhythm.',
  },
  {
    id: '7',
    driveId: '1kpgAIGVYt1PX9ZaHxJb4OcNpqlSZzdUh',
    title: 'Sports Edits',
    category: 'Sports',
    aspect: 'portrait',
    description: 'High-energy cricket & athletic highlight reel with punchy cuts and crowd pacing.',
  },
  {
    id: '8',
    driveId: '1Q5WEiaRAC3LF_8tgMT03FsF0_-YhkM2N',
    title: 'F&B Before & After',
    category: 'F&B',
    aspect: 'portrait',
    description: 'Restaurant transformation reel with raw-to-final color grade and motion VFX.',
  },
];

export function VideoShowcase() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = React.useState<VideoItem | null>(null);

  const categories = ['All', 'Automobile', 'Motion Graphics', 'Local Business', 'F&B', 'Sports', 'Cinematic'];

  const filteredVideos = activeCategory === 'All'
    ? sampleVideoEdits
    : sampleVideoEdits.filter((v) => v.category === activeCategory);

  return (
    <section id="video-edits" className="relative py-16 md:py-28 bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 navy-grid opacity-20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Creative Studio & Reel Production"
          light
          title={
            <>
              High-Converting Video Edits &{' '}
              <span className="text-highlight">Reels</span>
            </>
          }
          subtitle="Engineered in 9:16 vertical reel format for maximum engagement across Instagram, YouTube Shorts & TikTok. Phone & laptop responsive."
        />

        {/* Category Tabs with mobile horizontal scroll */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:justify-center md:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300',
                activeCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105'
                  : 'bg-white/10 text-body-muted hover:bg-white/20 hover:text-navy-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 100% Mobile & Laptop Friendly Responsive 9:16 Reel Grid */}
        <div className="mt-10 grid grid-cols-1 max-w-[340px] sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 mx-auto">
          {filteredVideos.map((video, idx) => {
            const isPlayingInline = playingId === video.id;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-navy-950/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20"
              >
                {/* 9:16 Vertical Reel Media Frame */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  {isPlayingInline ? (
                    /* Inline High-Performance Player */
                    <div className="relative h-full w-full">
                      <iframe
                        src={`https://drive.google.com/file/d/${video.driveId}/preview?autoplay=1&mute=0`}
                        title={video.title}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      
                      {/* Top Action Controls when playing */}
                      <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedVideo(video)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/85 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-accent hover:text-navy-950 shadow-md"
                          title="Open Fullscreen Reel Player"
                          aria-label="Open Fullscreen Reel Player"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setPlayingId(null)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/85 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-rose-500 hover:text-white shadow-md"
                          title="Close Player"
                          aria-label="Close Player"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* High-Resolution HD Poster with Animated Play CTA */
                    <div 
                      onClick={() => setPlayingId(video.id)}
                      className="group/poster relative h-full w-full cursor-pointer overflow-hidden"
                    >
                      {/* Direct High-Speed Google CDN Thumbnail */}
                      <img
                        src={`https://lh3.googleusercontent.com/d/${video.driveId}=w800`}
                        alt={video.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/poster:scale-105"
                        onError={(e) => {
                          // Fallback to drive thumbnail endpoint if needed
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('thumbnail')) {
                            target.src = `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w800`;
                          }
                        }}
                      />

                      {/* Smooth Dark Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/40 opacity-80 group-hover/poster:opacity-60 transition-opacity" />

                      {/* Quality & Format Badges */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          1080p HD
                        </span>
                        <span className="inline-flex items-center rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-accent border border-accent/30 shadow-md">
                          9:16 Reel
                        </span>
                      </div>

                      {/* Fullscreen Modal Opener Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video);
                        }}
                        className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-accent hover:text-navy-950 shadow-md hover:scale-110"
                        title="Watch in Fullscreen Lightbox"
                        aria-label="Watch in Fullscreen Lightbox"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>

                      {/* Prominent Glowing Center Play Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl shadow-accent/40 transition-all duration-300 group-hover/poster:scale-115">
                          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
                          <Play className="h-7 w-7 fill-current ml-1" />
                        </div>
                        <span className="rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/15 transition-colors group-hover/poster:border-accent group-hover/poster:text-highlight">
                          Tap to Play Video
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Meta Info Card Footer */}
                <div className="flex flex-1 flex-col justify-between p-4 bg-navy-950/95 border-t border-white/10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/25">
                        {video.category}
                      </span>
                      <span className="text-[10px] text-body-muted font-mono">
                        Vystar Studios
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-display text-base font-bold text-navy-foreground line-clamp-1 group-hover:text-highlight transition-colors">
                      {video.title}
                    </h3>

                    {video.description && (
                      <p className="mt-1 text-xs text-body-muted line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    )}
                  </div>

                  {/* Card Action Row */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="text-xs font-semibold text-accent hover:text-highlight transition-colors inline-flex items-center gap-1"
                    >
                      Full Experience
                      <ArrowRight className="h-3 w-3" />
                    </button>
                    <Link
                      href={`/contact?service=Video+Editing`}
                      className="text-[11px] text-body-muted hover:text-white transition-colors"
                    >
                      Book Edit →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/15 via-white/5 to-accent/10 p-6 text-center md:p-8 md:flex-row md:text-left shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-bold md:text-2xl lg:text-3xl text-navy-foreground">
              Ready to turn raw footage into viral, high-converting reels?
            </h3>
            <p className="mt-2 text-xs md:text-sm text-body-muted leading-relaxed">
              We handle end-to-end video production: hook scripting, 4K color grading, sound design, motion graphics & fast 24-48 hour turnaround.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 text-xs md:text-sm px-6 py-5 font-semibold"
          >
            <Link href="/contact">
              Request Video Edit Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* 9:16 Vertical Smartphone-Optimized Lightbox Reel Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-3 sm:p-4 md:p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-sm sm:max-w-md h-[90vh] max-h-[760px] overflow-hidden rounded-3xl border border-white/20 bg-navy-950 shadow-2xl"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-navy-900/90 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30">
                    {selectedVideo.category}
                  </span>
                  <span className="text-xs font-semibold text-white line-clamp-1">
                    {selectedVideo.title}
                  </span>
                </div>
                
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-navy-950 transition-colors"
                  aria-label="Close reel player"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 9:16 Smartphone Ratio Reel Container */}
              <div className="relative flex-1 w-full bg-black overflow-hidden">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview?autoplay=1&mute=0`}
                  title={selectedVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Bar */}
              <div className="p-4 bg-navy-900 border-t border-white/10 shrink-0 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] text-body-muted line-clamp-1">
                    {selectedVideo.description || 'High-performance video editing by Vystar Media'}
                  </p>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="shrink-0 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:bg-accent/90"
                >
                  <Link href={`/contact?service=Video+Editing`}>
                    Get This Style
                    <ArrowRight className="ml-1.5 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
