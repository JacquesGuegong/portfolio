import { useEffect, useRef, useState } from 'react';

/**
 * useHideOnScroll
 *
 * Returns false to hide (scrolling down past a threshold), true to
 * show (scrolling up, or near the top of the page).
 *
 * @param {number} [threshold=8] minimum delta before toggling, avoids jitter
 * @returns {boolean} visible
 */
function useHideOnScroll(threshold = 8) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 64) {
        setVisible(true);
      } else if (Math.abs(delta) > threshold) {
        setVisible(delta < 0);
        lastY.current = y;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return visible;
}

export default useHideOnScroll;
