'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, ArrowRight, Maximize2, ChevronLeft, ChevronRight, ExternalLink, MessageCircle } from 'lucide-react';
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
  {
    id: '9',
    driveId: '19DYw5M02BP0IB8rh4ab-5qb68eLPlVda',
    title: 'Usha Green E-Bikes Offer Reel',
    category: 'Local Business',
    aspect: 'portrait',
    description: 'Commercial promo reel for retail EV showroom with festive offers and customer hooks.',
  },
];

export function VideoShowcase() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [selectedVideo, setSelectedVideo] = React.useState<VideoItem | null>(null);

  const categories = ['All', 'Automobile', 'Motion Graphics', 'Local Business', 'F&B', 'Sports', 'Cinematic'];

  const filteredVideos = activeCategory === 'All'
    ? sampleVideoEdits
    : sampleVideoEdits.filter((v) => v.category === activeCategory);

  const currentIndex = selectedVideo 
    ? filteredVideos.findIndex((v) => v.id === selectedVideo.id)
    : -1;

  const handlePrev = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (filteredVideos.length === 0) return;
    const nextIdx = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
    setSelectedVideo(filteredVideos[nextIdx]);
  }, [currentIndex, filteredVideos]);

  const handleNext = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (filteredVideos.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredVideos.length;
    setSelectedVideo(filteredVideos[nextIdx]);
  }, [currentIndex, filteredVideos]);

  // Keyboard navigation for reel modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedVideo) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedVideo(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, handlePrev, handleNext]);

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
          subtitle="All video edits in 1080p Full HD & 9:16 vertical reel format. Optimized for Instagram, YouTube Shorts & TikTok with dedicated mobile controls."
        />

        {/* Category Tabs with smooth mobile horizontal scroll */}
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

        {/* 100% Mobile & Laptop Responsive 9:16 Reel Cards Grid */}
        <div className="mt-10 grid grid-cols-1 max-w-[340px] sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
          {filteredVideos.map((video, idx) => {
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                onClick={() => setSelectedVideo(video)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-navy-950/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
              >
                {/* 9:16 Vertical Reel Poster Frame */}
                <div className="group/poster relative aspect-[9/16] w-full overflow-hidden bg-black">
                  {/* Direct High-Resolution 1080p Google CDN Poster */}
                  <img
                    src={`https://lh3.googleusercontent.com/d/${video.driveId}=w1080`}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/poster:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('thumbnail')) {
                        target.src = `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w800`;
                      }
                    }}
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/50 opacity-80 group-hover/poster:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      1080p Full HD
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-accent border border-accent/30 shadow-md">
                      9:16 Reel
                    </span>
                  </div>

                  {/* Fullscreen Reel Button */}
                  <div className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all group-hover:bg-accent group-hover:text-navy-950 shadow-md">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Prominent Center Play Indicator */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl shadow-accent/40 transition-all duration-300 group-hover/poster:scale-115">
                      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
                      <Play className="h-7 w-7 fill-current ml-1" />
                    </div>
                    <span className="rounded-full bg-black/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-lg transition-colors group-hover/poster:border-accent group-hover/poster:text-highlight">
                      Watch Reel in 1080p
                    </span>
                  </div>
                </div>

                {/* Video Meta Info Card Footer */}
                <div className="flex flex-1 flex-col justify-between p-4 bg-navy-950/95 border-t border-white/10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/25">
                        {video.category}
                      </span>
                      <span className="text-[10px] text-body-muted font-mono">
                        Vystar Media
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
                    <span className="text-xs font-semibold text-accent group-hover:text-highlight transition-colors inline-flex items-center gap-1">
                      Play Fullscreen
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/contact?service=Video+Editing`;
                      }}
                      className="text-[11px] text-body-muted hover:text-white transition-colors cursor-pointer"
                    >
                      Book Edit →
                    </span>
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

      {/* 100% Smartphone-Optimized Fullscreen Reel Lightbox Modal with Native Next/Prev Controls */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-2 sm:p-4 md:p-6 backdrop-blur-xl"
          >
            {/* Desktop Previous Button (Outside Left) */}
            <button
              onClick={handlePrev}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-navy-900/90 text-white border border-white/20 hover:bg-accent hover:text-navy-950 transition-all shadow-2xl hover:scale-110 z-50"
              title="Previous Reel (Left Arrow)"
              aria-label="Previous Reel"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Desktop Next Button (Outside Right) */}
            <button
              onClick={handleNext}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-navy-900/90 text-white border border-white/20 hover:bg-accent hover:text-navy-950 transition-all shadow-2xl hover:scale-110 z-50"
              title="Next Reel (Right Arrow)"
              aria-label="Next Reel"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Smartphone Phone-Sized Reel Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-sm sm:max-w-md h-[94vh] max-h-[820px] overflow-hidden rounded-3xl border border-white/20 bg-navy-950 shadow-2xl"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-navy-900/95 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30 shrink-0">
                    {selectedVideo.category}
                  </span>
                  <span className="text-xs font-semibold text-white truncate">
                    {selectedVideo.title}
                  </span>
                </div>
                
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-navy-950 transition-colors shrink-0 ml-2"
                  aria-label="Close reel player"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 9:16 Video Frame with Google Drive 1080p HD Player */}
              <div className="relative flex-1 w-full bg-black overflow-hidden">
                <iframe
                  key={selectedVideo.id}
                  src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview?autoplay=1&mute=0&vq=hd1080`}
                  title={selectedVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Dedicated Mobile Next / Previous Navigation Bar */}
              <div className="p-3 bg-navy-900/95 border-t border-white/10 shrink-0 flex flex-col gap-2.5">
                {/* Big Thumb-Friendly Prev / Next Controls */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-accent hover:text-navy-950 active:scale-95 transition-all border border-white/10"
                    aria-label="Previous Video"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous Reel</span>
                  </button>

                  <div className="px-2 py-1 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-body-muted shrink-0">
                    {currentIndex + 1} / {filteredVideos.length}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-accent text-accent-foreground text-xs font-semibold hover:bg-accent/90 active:scale-95 transition-all shadow-md shadow-accent/20"
                    aria-label="Next Video"
                  >
                    <span>Next Reel</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile Quick Action Buttons: WhatsApp & Native Player */}
                <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                  <a
                    href={`https://api.whatsapp.com/send?phone=918468962914&text=${encodeURIComponent(`Hi Vystar Media, I am interested in creating a video edit like "${selectedVideo.title}"!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 text-[11px] font-semibold transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <a
                    href={`https://drive.google.com/file/d/${selectedVideo.driveId}/view?usp=drivesdk`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 text-white/90 hover:bg-white/15 border border-white/15 text-[11px] font-semibold transition-colors"
                    title="Open directly in phone's native video player for full 1080p quality"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Open in Native Player</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
