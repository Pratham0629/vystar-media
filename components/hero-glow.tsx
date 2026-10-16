'use client';

export function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-[0] h-[70vh] overflow-hidden">
      <div className="hero-green-light-core" />
      <div className="hero-green-light-haze" />
      <div className="hero-green-light-falloff" />
      <div className="hero-green-light-ambient" />
      <div className="hero-green-light-shine" />
    </div>
  );
}
