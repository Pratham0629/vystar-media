'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

type PillarKey = 'earth' | 'venus' | 'mars';

interface PillarConfig {
  key: PillarKey;
  name: string;
  eyebrow: string;
  headline: string;
  cutoutUrl: string;
  videoUrl: string;
  stillUrl: string;
  lede: string;
  ctaText: string;
  ctaHref: string;
}

const PILLARS: Record<PillarKey, PillarConfig> = {
  earth: {
    key: 'earth',
    name: 'BRANDING',
    eyebrow: 'BRANDING & IDENTITY',
    headline: 'WE BUILD BRANDS',
    cutoutUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202005_3346cc4d-ec3b-44ab-825c-b18e49f5021a.png',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_3ffb4889-c520-432d-8458-038009eb40df.mp4',
    stillUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png',
    lede: 'We craft iconic brand identities, visual narratives, and packaging that command market equity and lasting credibility. Strategic brand partnership starts today.',
    ctaText: 'GET CONSULTATION',
    ctaHref: '/contact',
  },
  venus: {
    key: 'venus',
    name: 'MARKETING',
    eyebrow: 'PERFORMANCE & SEO',
    headline: 'DIGITAL MARKETING',
    cutoutUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202012_640b239a-d08a-4200-adb2-741bbe129ac8.png',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_b211cd74-013b-4dd3-bfd0-64491d8696fa.mp4',
    stillUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png',
    lede: 'High-ROI digital marketing, SEO, and Meta/Google ads engineered to turn attention into compounding revenue quarter over quarter.',
    ctaText: 'SCALE YOUR BRAND',
    ctaHref: '/services',
  },
  mars: {
    key: 'mars',
    name: 'AI & STRATEGY',
    eyebrow: 'AUTOMATION & GROWTH',
    headline: 'AI & AUTOMATION',
    cutoutUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202018_3d559490-f613-4ed7-a3bb-3b7e9fc90fb8.png',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_51eae59a-2459-4c84-907c-cc5edfe5fea7.mp4',
    stillUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png',
    lede: 'Futuristic AI-native marketing automation, lead scoring engines, and growth workflows built to automate sales and capture market dominance.',
    ctaText: 'GET AI AUDIT',
    ctaHref: '/ai-audit',
  },
};

const ORDER: PillarKey[] = ['earth', 'venus', 'mars'];

export function Hero() {
  const [activeKey, setActiveKey] = React.useState<PillarKey>('earth');
  const [videoSrcs, setVideoSrcs] = React.useState<Record<PillarKey, string>>({
    earth: PILLARS.earth.videoUrl,
    venus: '',
    mars: '',
  });
  const [animClass, setAnimClass] = React.useState('');
  const stageRef = React.useRef<HTMLDivElement>(null);
  const videoRefs = React.useRef<Record<PillarKey, HTMLVideoElement | null>>({
    earth: null,
    venus: null,
    mars: null,
  });

  // Entrance animation choreography
  React.useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    try {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduced) {
        setAnimClass('anim');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimClass('anim play');
          });
        });
        timer1 = setTimeout(() => {
          setAnimClass('');
        }, 2150);
      }
    } catch (e) {
      console.warn('Entrance animation notice:', e);
    }

    // Warm up remaining video clips on idle
    const warmAll = () => {
      ORDER.forEach((key) => warmPillar(key));
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(warmAll, { timeout: 4000 });
    } else {
      timer2 = setTimeout(warmAll, 2500);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const warmPillar = (key: PillarKey) => {
    setVideoSrcs((prev) => {
      if (!prev[key]) {
        return { ...prev, [key]: PILLARS[key].videoUrl };
      }
      return prev;
    });
  };

  const showPillar = (nextKey: PillarKey) => {
    if (nextKey === activeKey) return;

    // Ensure video src exists
    warmPillar(nextKey);

    // Play active video & pause others
    ORDER.forEach((k) => {
      const vid = videoRefs.current[k];
      if (vid) {
        if (k === nextKey) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });

    setActiveKey(nextKey);
  };

  // Determine left and right side slots
  const rest = ORDER.filter((k) => k !== activeKey);
  const leftKey = rest[0];
  const rightKey = rest[1];

  const currentPillar = PILLARS[activeKey];
  const leftPillar = PILLARS[leftKey];
  const rightPillar = PILLARS[rightKey];

  return (
    <section id="home" className={cn('relative w-full overflow-hidden bg-[#04101f] text-white', animClass)}>
      {/* Dynamic CSS Scaling Engine */}
      <style jsx global>{`
        :root {
          --font-serif: 'Prata', Georgia, serif;
          --font-body: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;
          --font-logo: 'Poppins', sans-serif;

          --dw: 1353;
          --dh: 1163;
          --gutter: 25;
          --u: max(min(0.72px, calc(100vh / 700)), min(calc(100vw / 1353), calc(100vh / 1163)));
          --dh-px: calc(1163 * var(--u));
          --vshift: calc(max(0px, (100vh - var(--dh-px))) * 0.42);
          --ink: #ffffff;
          --cyan: #79dce8;
          --cyan-logo: #5fd0e1;
          --rule: rgba(255, 255, 255, 0.23);
          --btn-ink: #071227;
        }

        @supports (height: 100dvh) {
          :root {
            --u: max(min(0.72px, calc(100dvh / 700)), min(calc(100vw / 1353), calc(100dvh / 1163)));
            --vshift: calc(max(0px, (100dvh - var(--dh-px))) * 0.42);
          }
        }

        .cinematic-stage {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: max(100vh, calc(720 * var(--u)));
          overflow: hidden;
          isolation: isolate;
          background: #04101f;
        }

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: background-image 0.3s ease;
        }

        .sky video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0;
          transition: opacity 0.22s linear;
        }

        .sky video.is-active {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .sky video {
            display: none;
          }
        }

        .sky-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: radial-gradient(circle at center, rgba(4, 16, 31, 0.35) 0%, rgba(4, 16, 31, 0.85) 100%);
          pointer-events: none;
        }

        .ui {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }

        .copy-col {
          position: absolute;
          inset: 0;
          transform: translateY(var(--vshift));
          pointer-events: none;
        }

        .col {
          position: absolute;
          left: 0;
          right: calc(var(--gutter) * var(--u));
          text-align: center;
        }

        /* Top Brand Emblem Badge Overlay */
        .vystar-hero-badge {
          position: absolute;
          top: calc(125 * var(--u));
          left: 50%;
          transform: translateX(calc(-50% - (var(--gutter) / 2) * var(--u)));
          z-index: 10;
          pointer-events: auto;
        }

        .eyebrow {
          top: calc(188.8 * var(--u));
          font-family: var(--font-body);
          font-size: calc(24 * var(--u));
          font-weight: 600;
          line-height: 1;
          letter-spacing: calc(4 * var(--u));
          text-indent: calc(4 * var(--u));
          color: #79dce8;
          text-transform: uppercase;
        }

        h1.title {
          top: calc(255 * var(--u));
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: calc(96 * var(--u));
          line-height: 1;
          letter-spacing: calc(2 * var(--u));
          text-indent: calc(2 * var(--u));
          color: #fff;
          white-space: nowrap;
        }

        .rule {
          top: calc(395 * var(--u));
          height: calc(5 * var(--u));
          font-size: 0;
          line-height: 0;
          padding-right: calc(2 * var(--u));
        }

        .rule span {
          display: inline-block;
          vertical-align: top;
          width: calc(120 * var(--u));
          height: 100%;
          border-radius: calc(2.5 * var(--u));
          background: var(--cyan);
        }

        p.lede {
          top: calc(425 * var(--u));
          font-size: calc(18.36 * var(--u));
          font-weight: 400;
          line-height: calc(30 * var(--u));
          color: rgba(255, 255, 255, 0.95);
          max-width: calc(780 * var(--u));
          margin-left: auto;
          margin-right: auto;
        }

        .cta {
          top: calc(585 * var(--u));
          height: calc(66 * var(--u));
          isolation: isolate;
        }

        .cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 calc(36 * var(--u));
          min-width: calc(240 * var(--u));
          height: calc(66 * var(--u));
          border-radius: calc(33 * var(--u));
          font-size: calc(16 * var(--u));
          font-weight: 700;
          letter-spacing: calc(0.5 * var(--u));
          line-height: 1;
          color: var(--btn-ink);
          text-decoration: none;
          background: linear-gradient(180deg, #ffffff 0%, #d6e8f8 4%, #d9ecfe 72%, #ffffff 100%);
          box-shadow: 0 calc(10 * var(--u)) calc(18 * var(--u)) calc(-8 * var(--u)) rgba(255, 255, 255, 0.5),
            0 0 calc(26 * var(--u)) rgba(255, 255, 255, 0.18),
            inset 0 0 0 calc(2 * var(--u)) rgba(255, 255, 255, 0.9);
          pointer-events: auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta a:hover {
          transform: scale(1.04);
          box-shadow: 0 calc(12 * var(--u)) calc(24 * var(--u)) calc(-6 * var(--u)) rgba(121, 220, 232, 0.6),
            0 0 calc(32 * var(--u)) rgba(121, 220, 232, 0.3);
        }

        /* Side Cutout Slots */
        .planet {
          position: absolute;
          z-index: 5;
          padding: 0;
          border: 0;
          background: none;
          line-height: 0;
          cursor: pointer;
          pointer-events: auto;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .planet img {
          display: none;
          width: 100%;
          height: auto;
          filter: drop-shadow(0 calc(10 * var(--u)) calc(20 * var(--u)) rgba(0, 0, 0, 0.6));
        }

        .planet img.is-shown {
          display: block;
        }

        .planet:hover {
          transform: scale(1.06);
        }

        .planet:active {
          transform: scale(0.98);
        }

        .planet-l {
          width: calc(143 * var(--u));
          left: calc(-69.5 * var(--u));
          top: calc(-38.3 * var(--u));
        }

        .planet-r {
          width: calc(143 * var(--u));
          right: calc(-64.7 * var(--u));
          top: calc(-40.6 * var(--u));
        }

        .label {
          position: absolute;
          top: calc(33 * var(--u));
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: calc(17.8 * var(--u));
          letter-spacing: calc(4.6 * var(--u));
          line-height: 1;
          color: #fff;
          white-space: nowrap;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          pointer-events: none;
        }

        .label.label-l {
          left: calc(111 * var(--u));
        }

        .label.label-r {
          right: calc(104 * var(--u));
        }

        /* Bottom Marquee Strip */
        .vystar-bottom-marquee {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          border-t: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(4, 16, 31, 0.7);
          backdrop-filter: blur(8px);
          padding: calc(14 * var(--u)) 0;
        }

        /* Keyframes & Entrance Sequence */
        @keyframes ent-reveal {
          from {
            transform: translateY(115%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes ent-rise {
          from {
            opacity: 0;
            transform: translateY(var(--rise, 10px));
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes ent-settle {
          from {
            opacity: 0;
            transform: translateY(var(--rise, 8px)) scale(0.965);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes ent-draw {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes ent-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .anim {
          --e-expo: cubic-bezier(0.16, 1, 0.3, 1);
          --e-quint: cubic-bezier(0.22, 1, 0.36, 1);
          --e-slow: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ent-mask,
        .ent-line {
          display: block;
        }

        .anim .ent-mask {
          overflow: hidden;
          padding-top: 0.18em;
          margin-top: -0.18em;
        }

        .anim .ent-line {
          transform: translateY(115%);
          will-change: transform;
        }

        .anim .rule span {
          transform: scaleX(0);
        }

        .anim .vystar-hero-badge,
        .anim .eyebrow,
        .anim p.lede,
        .anim .label,
        .anim .cta a,
        .anim .sky {
          opacity: 0;
        }

        .anim.play .sky {
          animation: ent-fade 1.6s var(--e-slow) 0.25s both;
        }
        .anim.play .vystar-hero-badge {
          animation: ent-rise 0.6s var(--e-quint) 0.2s both;
        }
        .anim.play .eyebrow .ent-line {
          animation: ent-reveal 0.75s var(--e-expo) 0.3s both;
        }
        .anim.play h1.title .ent-line {
          animation: ent-reveal 0.95s var(--e-expo) 0.44s both;
        }
        .anim.play .rule span {
          animation: ent-draw 0.65s var(--e-expo) 0.78s both;
        }
        .anim.play p.lede {
          animation: ent-rise 0.7s var(--e-quint) 0.86s both;
        }
        .anim.play .label.label-l {
          animation: ent-rise 0.6s var(--e-quint) 1.04s both;
        }
        .anim.play .label.label-r {
          animation: ent-rise 0.6s var(--e-quint) 1.1s both;
        }
        .anim.play .cta a {
          animation: ent-settle 0.7s var(--e-quint) 1.14s both;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1030px), (max-height: 620px) {
          .vystar-hero-badge {
            top: calc(96 * var(--u));
          }
        }

        @media (min-width: 580px) and (max-width: 1030px) and (min-height: 621px) {
          :root {
            --gutter: 0;
            --u: min(max(min(0.85px, calc(100vh / 780)), min(calc(100vw / 900), calc(100vh / 1163))), 1.15px);
            --dh-px: calc(1120 * var(--u));
            --vshift: calc(max(0px, (100vh - var(--dh-px))) * 0.38);
          }
          h1.title {
            font-size: calc(82 * var(--u));
          }
          p.lede {
            max-width: calc(640 * var(--u));
          }
          .label.label-r {
            right: calc(116 * var(--u));
          }
        }

        @media (max-width: 579px), (max-height: 620px) {
          :root {
            --gutter: 0;
            --u: max(min(0.92px, calc(100vh / 620)), min(calc(100vw / 430), calc(100vh / 880)));
            --dh-px: calc(880 * var(--u));
            --vshift: calc(max(0px, (100vh - var(--dh-px))) * 0.34);
          }
          .vystar-hero-badge {
            top: calc(85 * var(--u));
          }
          .eyebrow {
            font-size: calc(18 * var(--u));
            letter-spacing: calc(3 * var(--u));
          }
          h1.title {
            font-size: calc(64 * var(--u));
            top: calc(235 * var(--u));
            white-space: normal;
          }
          .rule {
            top: calc(365 * var(--u));
          }
          p.lede {
            top: calc(395 * var(--u));
            font-size: calc(15.5 * var(--u));
            line-height: calc(25 * var(--u));
            max-width: calc(380 * var(--u));
          }
          .cta {
            top: calc(565 * var(--u));
          }
          .label {
            font-size: calc(15 * var(--u));
            letter-spacing: calc(3 * var(--u));
          }
          .label.label-l {
            left: calc(56 * var(--u));
          }
          .label.label-r {
            right: calc(60 * var(--u));
          }
          .planet-l {
            width: calc(89 * var(--u));
            left: calc(-44.5 * var(--u));
            top: calc(-17 * var(--u));
          }
          .planet-r {
            width: calc(89 * var(--u));
            right: calc(-44.5 * var(--u));
            top: calc(-18.3 * var(--u));
          }
        }

        @media (max-width: 500px) {
          .label {
            top: calc(100% + 34 * var(--u));
            transform: none;
            font-size: calc(14 * var(--u));
          }
          .label.label-l {
            left: calc(6 * var(--u));
          }
          .label.label-r {
            right: calc(6 * var(--u));
          }
        }
      `}</style>

      <div ref={stageRef} className="cinematic-stage">
        {/* Backdrop Video Sky Layer */}
        <div
          className="sky"
          style={{ backgroundImage: `url(${currentPillar.stillUrl})` }}
        >
          {ORDER.map((k) => {
            const p = PILLARS[k];
            const isActive = k === activeKey;
            const src = videoSrcs[k];

            return (
              <video
                key={k}
                ref={(el) => {
                  videoRefs.current[k] = el;
                }}
                className={cn(isActive && 'is-active')}
                autoPlay={k === 'earth'}
                muted
                loop
                playsInline
                preload={isActive ? 'auto' : 'none'}
                poster={p.stillUrl}
                aria-hidden="true"
                src={src || undefined}
                data-src={p.videoUrl}
              />
            );
          })}
        </div>

        {/* Radial Dark Vignette Overlay */}
        <div className="sky-overlay" />

        {/* UI Overlay Container */}
        <div className="ui">
          {/* Top Vystar Media Emblem Badge */}
          <div className="vystar-hero-badge">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-navy-light/70 p-1.5 pr-5 text-xs font-medium text-amber-400 backdrop-blur-md transition-all hover:border-amber-500/50 shadow-xl shadow-amber-500/10">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-amber-500/20 ring-2 ring-amber-500/60">
                <Image
                  src="/images/vystar-emblem.png"
                  alt="Vystar Media Emblem"
                  width={64}
                  height={64}
                  className="h-7 w-7 object-contain"
                  priority
                />
              </div>
              <span className="flex items-center gap-1.5 font-medium text-white/90">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                Full-Service Marketing & Branding Agency in Mumbai
              </span>
            </div>
          </div>

          <div className="copy-col">
            {/* Eyebrow Category */}
            <div className="col eyebrow">
              <span className="ent-mask">
                <span className="ent-line">{currentPillar.eyebrow}</span>
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="col title">
              <span className="ent-mask">
                <span className="ent-line">{currentPillar.headline}</span>
              </span>
            </h1>

            {/* Cyan/Gold Divider Line */}
            <div className="col rule">
              <span />
            </div>

            {/* Lede Paragraph Description */}
            <p className="col lede">{currentPillar.lede}</p>

            {/* CTA & Flanking Side Cutout Row */}
            <div className="col cta">
              {/* Left Planet Cutout Button */}
              <button
                className="planet planet-l"
                type="button"
                data-slot="l"
                data-planet={leftKey}
                aria-label={`Switch to ${leftPillar.name}`}
                onClick={() => showPillar(leftKey)}
                onPointerEnter={() => warmPillar(leftKey)}
                onFocus={() => warmPillar(leftKey)}
              >
                {ORDER.map((k) => (
                  <img
                    key={k}
                    data-planet={k}
                    alt=""
                    src={PILLARS[k].cutoutUrl}
                    className={cn(k === leftKey && 'is-shown')}
                  />
                ))}
              </button>

              {/* Right Planet Cutout Button */}
              <button
                className="planet planet-r"
                type="button"
                data-slot="r"
                data-planet={rightKey}
                aria-label={`Switch to ${rightPillar.name}`}
                onClick={() => showPillar(rightKey)}
                onPointerEnter={() => warmPillar(rightKey)}
                onFocus={() => warmPillar(rightKey)}
              >
                {ORDER.map((k) => (
                  <img
                    key={k}
                    data-planet={k}
                    alt=""
                    src={PILLARS[k].cutoutUrl}
                    className={cn(k === rightKey && 'is-shown')}
                  />
                ))}
              </button>

              {/* Main Glossy Pill Action Link */}
              <Link href={currentPillar.ctaHref}>
                {currentPillar.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Flanking Side Labels */}
              <span className="label label-l">{leftPillar.name}</span>
              <span className="label label-r">{rightPillar.name}</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats & Services Marquee Bar */}
        <div className="vystar-bottom-marquee">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-white/60">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-amber-400" /> 10M+ Client Impressions Target
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-amber-400" /> 100+ Enterprise & SME Clients
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="h-3.5 w-3.5 text-amber-400" /> 95% ROI Satisfaction Score
              </span>
            </div>
            <div className="hidden text-right text-white/40 md:block">
              Interactive Pillar Navigator • Click side orbits to switch agency solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
