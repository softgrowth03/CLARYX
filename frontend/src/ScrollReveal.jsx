import { useEffect } from 'react';

const revealTargets = [
  '.intro-mark', '.intro-copy', '.section-intro', '.tech-card', '.material-card',
  '.compare-panel', '.design-image', '.design-item', '.progressive-row',
  '.coating-explorer', '.feature-content', '.process-step', '.manufacturing-notes',
  '.poly-flow-card', '.polymer-routes article', '.poly-panel', '.poly-lower > *',
  '.quality-copy', '.quality-check', '.special-card', '.retail-partner-grid > *',
  '.knowledge-feature', '.glossary', '.faq-grid > *'
].join(',');

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lastY = window.scrollY;
    let direction = 'down';
    const onScroll = () => {
      const nextY = window.scrollY;
      if (Math.abs(nextY - lastY) > 2) direction = nextY < lastY ? 'up' : 'down';
      lastY = nextY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting) {
          element.dataset.revealFrom = direction;
          element.classList.remove('is-revealed');
          requestAnimationFrame(() => element.classList.add('is-revealed'));
        } else {
          element.classList.remove('is-revealed');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    const targets = document.querySelectorAll(revealTargets);
    targets.forEach((element) => {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
