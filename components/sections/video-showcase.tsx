'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, ArrowRight, Film, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export type VideoItem = {
  id: string;
  title: string;
  category: 'Reels & Shorts' | 'YouTube & Longform' | 'Brand Ads' | 'Podcast Trailers';
  videoUrl: string;
  aspect?: 'portrait' | 'landscape';
  description?: string;
  gradient?: string;
};

export const sampleVideoEdits: VideoItem[] = [
  {
    id: '1',
    title: 'High-Retention Reel Edit #1',
    category: 'Reels & Shorts',
    videoUrl: 'https://drive.google.com/file/d/1Xk8BBj1oODuVtODq0P7a-lmi1aDDXzmg/preview',
    aspect: 'portrait',
    description: 'Dynamic captions, motion graphics & engaging hook edit for social growth.',
    gradient: 'from-amber-600/30 via-navy to-black',
  },
  {
    id: '2',
    title: 'Brand Ad & Performance Edit #2',
    category: 'Brand Ads',
    videoUrl: 'https://drive.google.com/file/d/1DuVbSCxJFcMy9ubBQClx-B1ZCk-ykHW8/preview',
    aspect: 'portrait',
    description: 'Cinematic ad edit engineered for high Meta & Instagram campaign conversions.',
    gradient: 'from-blue-600/30 via-navy to-black',
  },
  {
    id: '3',
    title: 'Viral Short Form Reel Edit #3',
    category: 'Reels & Shorts',
    videoUrl: 'https://drive.google.com/file/d/11fMqWHObtOI7Vj8VMQa5gs46hlfL6qQK/preview',
    aspect: 'portrait',
    description: 'Fast-paced storytelling edit with sound design and visual B-roll cuts.',
    gradient: 'from-purple-600/30 via-navy to-black',
  },
  {
    id: '4',
    title: 'Commercial & Product Edit #4',
    category: 'Brand Ads',
    videoUrl: 'https://drive.google.com/file/d/1nJ8FJ-w9a3e-vaxjju1wv556I4BgCZd4/preview',
    aspect: 'portrait',
    description: 'High-impact commercial video production with visual branding effects.',
    gradient: 'from-emerald-600/30 via-navy to-black',
  },
  {
    id: '5',
    title: 'Podcast Highlights & Trailer #5',
    category: 'Podcast Trailers',
    videoUrl: 'https://drive.google.com/file/d/1UU0jXecExI7W6rZRyA8OYinXC19JUIwS/preview',
    aspect: 'portrait',
    description: 'Engaging podcast trailer edit with dynamic subtitle animation & audio master.',
    gradient: 'from-rose-600/30 via-navy to-black',
  },
  {
    id: '6',
    title: 'YouTube Longform & Content Edit #6',
    category: 'YouTube & Longform',
    videoUrl: 'https://drive.google.com/file/d/1T6TR6_x0sb2qks8szOrXP37dQlD7INdi/preview',
    aspect: 'portrait',
    description: 'Narrative YouTube video editing with custom motion graphics & pacing.',
    gradient: 'from-cyan-600/30 via-navy to-black',
  },
];

export function VideoShowcase() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [selectedVideo, setSelectedVideo] = React.useState<VideoItem | null>(null);

  const categories = ['All', 'Reels & Shorts', 'YouTube & Longform', 'Brand Ads', 'Podcast Trailers'];

  const filteredVideos = activeCategory === 'All'
    ? sampleVideoEdits
    : sampleVideoEdits.filter((v) => v.category === activeCategory);

  return (
    <section id="video-edits" className="relative py-24 md:py-32 bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 navy-grid opacity-25 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Creative Studio & Video Edits"
          light
          title={
            <>
              World-Class Video Editing &{' '}
              <span className="text-highlight">Production</span>
            </>
          }
          subtitle="Click any edit below to watch in full-screen high definition."
        />

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300',
                activeCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105'
                  : 'bg-white/10 text-body-muted hover:bg-white/20 hover:text-navy-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* High Performance Video Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/15"
            >
              {/* Card Media Preview Container */}
              <div
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-[9/14] w-full cursor-pointer overflow-hidden bg-gradient-to-b from-navy-900 via-black/80 to-black"
              >
                {/* On-Demand Lazy Loaded iFrame or Poster */}
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  loading="lazy"
                  className="h-full w-full border-0 pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  allow="autoplay"
                />

                {/* Glass Hover Overlay with Play Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-center p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-navy-950 shadow-xl shadow-accent/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-7 w-7 fill-navy-950 ml-1" />
                  </div>

                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                    <Maximize2 className="h-3.5 w-3.5" /> Watch Full Edit
                  </span>
                </div>
              </div>

              {/* Details Info */}
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex w-max rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30">
                  {video.category}
                </span>

                <h3 className="mt-2.5 font-display text-lg font-bold text-navy-foreground group-hover:text-highlight transition-colors">
                  {video.title}
                </h3>

                {video.description && (
                  <p className="mt-1.5 text-xs text-body-muted leading-relaxed">
                    {video.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/15 via-white/5 to-accent/10 p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl text-navy-foreground">
              Want custom video edits for your brand?
            </h3>
            <p className="mt-2 text-sm text-body-muted">
              Send us your raw footage or video requirements — we handle scripting, hooks, editing, motion graphics & sound design.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
          >
            <Link href="/contact">
              Request Video Edit Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Lightbox Video Modal Popup */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-navy-950 shadow-2xl"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-accent hover:text-navy-950 transition-colors"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Fullscreen Video iFrame */}
              <div className="relative aspect-[9/16] max-h-[80vh] w-full bg-black sm:aspect-[16/9]">
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  title={selectedVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-6 bg-navy-900 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {selectedVideo.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    {selectedVideo.title}
                  </h3>
                </div>
                <Button
                  onClick={() => setSelectedVideo(null)}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Close Player
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
