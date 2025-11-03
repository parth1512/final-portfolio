import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const isTouch = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
const prefersReduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (isTouch() || prefersReduced()) return; // keep native cursor on touch/reduced motion

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let rafId = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const tick = () => {
      rx += (x - rx) * 0.15; // smoothing
      ry += (y - ry) * 0.15;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    const onEnter = () => ring.classList.add('is-active');
    const onLeave = () => ring.classList.remove('is-active');

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [role="button"], .btn').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.body.classList.add('custom-cursor-enabled');

    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, [role="button"], .btn').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      document.body.classList.remove('custom-cursor-enabled');
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch() || prefersReduced()) return null;

  return (
    <div className="custom-cursor-layer" aria-hidden>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}


