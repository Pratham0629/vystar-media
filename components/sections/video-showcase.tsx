'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, Video, Clapperboard, Film, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export type VideoItem = {
  id: string;
  title: string;
  category: 'Reels & Shorts' | 'YouTube & Longform' | 'Brand Ads' | 'Podcast Trailers';
  videoUrl: string; // YouTube Embed / MP4 URL / iframe
  thumbnail?: string;
  description?: string;
  aspect?: 'portrait' | 'landscape';
};

export const sampleVideoEdits: VideoItem[] = [
  {
    id: '1',
    title: 'High-Retention Reel Edit #1',
    category: 'Reels & Shorts',
    videoUrl: 'https://drive.google.com/file/d/1Xk8BBj1oODuVtODq0P7a-lmi1aDDXzmg/preview',
    aspect: 'portrait',
    description: 'Dynamic captions, motion graphics & engaging hook edit for social growth.',
  },
  {
    id: '2',
    title: 'Brand Ad & Performance Edit #2',
    category: 'Brand Ads',
    videoUrl: 'https://drive.google.com/file/d/1DuVbSCxJFcMy9ubBQClx-B1ZCk-ykHW8/preview',
    aspect: 'portrait',
    description: 'Cinematic ad edit engineered for high Meta & Instagram campaign conversions.',
  },
  {
    id: '3',
    title: 'Viral Short Form Reel Edit #3',
    category: 'Reels & Shorts',
    videoUrl: 'https://drive.google.com/file/d/11fMqWHObtOI7Vj8VMQa5gs46hlfL6qQK/preview',
    aspect: 'portrait',
    description: 'Fast-paced storytelling edit with sound design and visual B-roll cuts.',
  },
  {
    id: '4',
    title: 'Commercial & Product Edit #4',
    category: 'Brand Ads',
    videoUrl: 'https://drive.google.com/file/d/1nJ8FJ-w9a3e-vaxjju1wv556I4BgCZd4/preview',
    aspect: 'portrait',
    description: 'High-impact commercial video production with visual branding effects.',
  },
  {
    id: '5',
    title: 'Podcast Highlights & Trailer #5',
    category: 'Podcast Trailers',
    videoUrl: 'https://drive.google.com/file/d/1UU0jXecExI7W6rZRyA8OYinXC19JUIwS/preview',
    aspect: 'portrait',
    description: 'Engaging podcast trailer edit with dynamic subtitle animation & audio master.',
  },
  {
    id: '6',
    title: 'YouTube Longform & Content Edit #6',
    category: 'YouTube & Longform',
    videoUrl: 'https://drive.google.com/file/d/1T6TR6_x0sb2qks8szOrXP37dQlD7INdi/preview',
    aspect: 'portrait',
    description: 'Narrative YouTube video editing with custom motion graphics & pacing.',
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
          subtitle="From high-retention Instagram Reels & YouTube Shorts to cinematic Brand Films and Podcast Trailers — explore our video edits below."
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

        {/* Video Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div
                className={cn(
                  'relative w-full overflow-hidden bg-black/40',
                  video.aspect === 'portrait' ? 'aspect-[9/16]' : 'aspect-[16/9]'
                )}
              >
                {/* Embedded Video Player */}
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  loading="lazy"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

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
    </section>
  );
}
