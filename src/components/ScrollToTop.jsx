import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  // On initial page load, force scroll to top after lazy content renders
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Immediate scroll
      window.scrollTo(0, 0);
      // After Suspense resolves and content paints, scroll again
      const timers = [
        setTimeout(() => window.scrollTo(0, 0), 0),
        setTimeout(() => window.scrollTo(0, 0), 50),
        setTimeout(() => window.scrollTo(0, 0), 150),
        setTimeout(() => window.scrollTo(0, 0), 300),
        setTimeout(() => window.scrollTo(0, 0), 500),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, []);

  return null;
}
