import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo(0, 0);
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
