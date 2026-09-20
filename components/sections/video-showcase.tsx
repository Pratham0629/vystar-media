'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, ArrowRight, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export type VideoItem = {
  id: string;
  driveId: string;
  title: string;
  category: 'Reels & Shorts' | 'YouTube & Longform' | 'Brand Ads' | 'Podcast Trailers';
  aspect?: 'portrait' | 'landscape';
  description?: string;
};

export const sampleVideoEdits: VideoItem[] = [
  {
    id: '1',
    driveId: '1Xk8BBj1oODuVtODq0P7a-lmi1aDDXzmg',
    title: 'Creative Instagram Reel & Motion FX',
    category: 'Reels & Shorts',
    aspect: 'portrait',
    description: 'High-retention short form reel with animated captions & dynamic visual hooks.',
  },
  {
    id: '2',
    driveId: '1DuVbSCxJFcMy9ubBQClx-B1ZCk-ykHW8',
    title: 'High-ROAS Meta Paid Ad Commercial',
    category: 'Brand Ads',
    aspect: 'portrait',
    description: 'Cinematic ad edit engineered for maximum CTR and campaign conversions.',
  },
  {
    id: '3',
    driveId: '11fMqWHObtOI7Vj8VMQa5gs46hlfL6qQK',
    title: 'Viral Social Campaign & B-Roll Edit',
    category: 'Reels & Shorts',
    aspect: 'portrait',
    description: 'Fast-paced viral editing with custom sound design & seamless transitions.',
  },
  {
    id: '4',
    driveId: '1nJ8FJ-w9a3e-vaxjju1wv556I4BgCZd4',
    title: 'Product Showcase & Brand Film',
    category: 'Brand Ads',
    aspect: 'portrait',
    description: 'High-impact commercial video production with visual branding overlays.',
  },
  {
    id: '5',
    driveId: '1UU0jXecExI7W6rZRyA8OYinXC19JUIwS',
    title: 'Podcast Highlights & Master Edit',
    category: 'Podcast Trailers',
    aspect: 'portrait',
    description: 'Engaging podcast trailer edit with animated captions & audio mastering.',
  },
  {
    id: '6',
    driveId: '1T6TR6_x0sb2qks8szOrXP37dQlD7INdi',
    title: 'YouTube Longform & Narrative Production',
    category: 'YouTube & Longform',
    aspect: 'portrait',
    description: 'Storytelling YouTube video editing with custom motion graphics & pacing.',
  },
  {
    id: '7',
    driveId: '1kpgAIGVYt1PX9ZaHxJb4OcNpqlSZzdUh',
    title: 'Creative Brand & Motion Edit #7',
    category: 'Reels & Shorts',
    aspect: 'portrait',
    description: 'Dynamic motion typography, visual effects & storytelling reel.',
  },
  {
    id: '8',
    driveId: '1Q5WEiaRAC3LF_8tgMT03FsF0_-YhkM2N',
    title: 'High-Impact Social Ad Commercial #8',
    category: 'Brand Ads',
    aspect: 'portrait',
    description: 'High-converting Meta ad creative with custom sound mastering & pacing.',
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
    <section id="video-edits" className="relative py-20 md:py-32 bg-navy text-navy-foreground overflow-hidden">
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
          subtitle="All video edits autoplaying live in 1080p HD. Mobile & desktop optimized."
        />

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300',
                activeCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105'
                  : 'bg-white/10 text-body-muted hover:bg-white/20 hover:text-navy-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 100% Mobile Optimized & Continuous Autoplay Grid */}
        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {filteredVideos.map((video, idx) => {
            const embedPreviewUrl = `https://drive.google.com/file/d/${video.driveId}/preview?autoplay=1&mute=1&loop=1`;
            const directStreamUrl = `https://lh3.googleusercontent.com/d/${video.driveId}`;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-white/15 bg-navy-950/80 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/15"
              >
                {/* 100% Autoplay Media Frame */}
                <div className="relative aspect-[9/15] w-full overflow-hidden bg-black">
                  {/* HTML5 Direct Video Stream (100% Instant Mobile Autoplay) */}
                  <video
                    src={directStreamUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to Google Drive iframe if direct stream is restricted
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const iframe = target.nextElementSibling as HTMLIFrameElement;
                      if (iframe) iframe.style.display = 'block';
                    }}
                  />

                  {/* Fallback iFrame Preview Player */}
                  <iframe
                    src={embedPreviewUrl}
                    title={video.title}
                    loading="lazy"
                    style={{ display: 'none' }}
                    className="h-full w-full border-0 group-hover:scale-[1.03] transition-transform duration-500"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Top Quality Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      1080p HD
                    </span>
                  </div>

                  {/* Expand Fullscreen Button */}
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="absolute top-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-accent hover:text-navy-950"
                    title="Watch Fullscreen"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Video Info Footer */}
                <div className="flex flex-1 flex-col p-3 md:p-4 bg-navy-950/90">
                  <span className="inline-flex w-max rounded-full bg-accent/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent border border-accent/30">
                    {video.category}
                  </span>

                  <h3 className="mt-2 font-display text-xs md:text-sm font-bold text-navy-foreground line-clamp-1 group-hover:text-highlight transition-colors">
                    {video.title}
                  </h3>

                  {video.description && (
                    <p className="mt-1 text-[11px] text-body-muted line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/15 via-white/5 to-accent/10 p-6 text-center md:p-8 md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-xl font-bold md:text-3xl text-navy-foreground">
              Want custom video edits for your brand?
            </h3>
            <p className="mt-1.5 text-xs md:text-sm text-body-muted">
              Send us your raw footage or video requirements — we handle scripting, hooks, editing, motion graphics & sound design.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 text-xs md:text-sm"
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
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-navy-950 shadow-2xl"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-accent hover:text-navy-950 transition-colors"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Fullscreen Video iFrame */}
              <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-black sm:aspect-[16/9]">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview?autoplay=1&vq=hd1080`}
                  title={selectedVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 md:p-6 bg-navy-900 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {selectedVideo.category}
                  </span>
                  <h3 className="mt-1 font-display text-base md:text-xl font-bold text-white">
                    {selectedVideo.title}
                  </h3>
                </div>
                <Button
                  onClick={() => setSelectedVideo(null)}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-white/20 text-xs text-white hover:bg-white/10"
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
