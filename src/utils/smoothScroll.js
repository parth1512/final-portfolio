export function enableSmoothScroll() {
  if (typeof window === 'undefined') return;

  // Respect reduced motion and skip on touch devices
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  if (prefersReduced || isTouch) return;

  let isEnabled = true;
  let current = window.scrollY || window.pageYOffset;
  let target = current;
  let rafId = 0;

  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const onWheel = (e) => {
    if (!isEnabled) return;
    // We need to prevent the native scroll to control it ourselves
    e.preventDefault();
    // Lower sensitivity to soften the response (no bounce)
    target += e.deltaY * 0.7;
    target = clamp(target, 0, maxScroll());
    if (!rafId) rafId = requestAnimationFrame(tick);
  };

  const tick = () => {
    const diff = target - current;
    // Exponential ease toward target (no inertia -> no bounce)
    current += diff * 0.12;
    if (Math.abs(diff) < 0.2) {
      current = target;
    }
    window.scrollTo(0, current);
    if (current !== target) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = 0;
    }
  };

  // Non-passive to be able to preventDefault
  window.addEventListener('wheel', onWheel, { passive: false });

  // Clean up on navigation (dev hot reload safe)
  const cleanup = () => {
    isEnabled = false;
    window.removeEventListener('wheel', onWheel);
    if (rafId) cancelAnimationFrame(rafId);
  };

  // Expose cleanup for callers if needed
  return cleanup;
}
