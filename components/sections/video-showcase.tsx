'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, ArrowRight, Film, Maximize2, Volume2 } from 'lucide-react';
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
};

export const sampleVideoEdits: VideoItem[] = [
  {
    id: '1',
    title: 'Creative Instagram Reel & Motion FX',
    category: 'Reels & Shorts',
    videoUrl: 'https://drive.google.com/file/d/1Xk8BBj1oODuVtODq0P7a-lmi1aDDXzmg/preview',
    aspect: 'portrait',
    description: 'High-retention short form reel with animated captions & dynamic visual hooks.',
  },
  {
    id: '2',
    title: 'High-ROAS Meta Paid Ad Commercial',
    category: 'Brand Ads',
    videoUrl: 'https://drive.google.com/file/d/1DuVbSCxJFcMy9ubBQClx-B1ZCk-ykHW8/preview',
    aspect: 'portrait',
    description: 'Cinematic ad edit engineered for maximum CTR and campaign conversions.',
  },
  {
    id: '3',
    title: 'Viral Social Campaign & B-Roll Edit',
    category: 'Reels & Shorts',
    videoUrl: 'https://drive.google.com/file/d/11fMqWHObtOI7Vj8VMQa5gs46hlfL6qQK/preview',
    aspect: 'portrait',
    description: 'Fast-paced viral editing with custom sound design & seamless transitions.',
  },
  {
    id: '4',
    title: 'Product Showcase & Brand Film',
    category: 'Brand Ads',
    videoUrl: 'https://drive.google.com/file/d/1nJ8FJ-w9a3e-vaxjju1wv556I4BgCZd4/preview',
    aspect: 'portrait',
    description: 'High-impact commercial video production with visual branding overlays.',
  },
  {
    id: '5',
    title: 'Podcast Highlights & Master Edit',
    category: 'Podcast Trailers',
    videoUrl: 'https://drive.google.com/file/d/1UU0jXecExI7W6rZRyA8OYinXC19JUIwS/preview',
    aspect: 'portrait',
    description: 'Engaging podcast trailer edit with animated captions & audio mastering.',
  },
  {
    id: '6',
    title: 'YouTube Longform & Narrative Production',
    category: 'YouTube & Longform',
    videoUrl: 'https://drive.google.com/file/d/1T6TR6_x0sb2qks8szOrXP37dQlD7INdi/preview',
    aspect: 'portrait',
    description: 'Storytelling YouTube video editing with custom motion graphics & pacing.',
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
          subtitle="Playing live in 1080p Full HD. Click any edit for full-screen expanded view."
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

        {/* Continuous Autoplay Video Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/15"
            >
              {/* Autoplay Video Player Container (Continuous 1080p) */}
              <div className="relative aspect-[9/14] w-full overflow-hidden bg-black">
                <iframe
                  src={`${video.videoUrl}?autoplay=1&mute=1&vq=hd1080&loop=1`}
                  title={video.title}
                  loading="lazy"
                  className="h-full w-full border-0 group-hover:scale-[1.02] transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Expand to Fullscreen Lightbox Button Overlay */}
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:text-navy-950"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Details Info */}
              <div className="flex flex-1 flex-col p-5 bg-navy-950/40">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30">
                    {video.category}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    ⚡ 1080p HD
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-base font-bold text-navy-foreground group-hover:text-highlight transition-colors">
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
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
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
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-accent hover:text-navy-950 transition-colors"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Fullscreen Video iFrame */}
              <div className="relative aspect-[9/16] max-h-[80vh] w-full bg-black sm:aspect-[16/9]">
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1&vq=hd1080`}
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
