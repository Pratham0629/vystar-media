'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Smooth 120fps lerp physics for cursor
      currentX += (mouseX - currentX) * 0.3;
      currentY += (mouseY - currentY) * 0.3;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB950] md:block will-change-transform shadow-[0_0_10px_rgba(255,185,80,0.6)]"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    />
  );
}

