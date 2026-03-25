import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 *
 * Returns a ref that, when attached to a DOM element, will add the
 * `is-visible` class once the element enters the viewport.
 * Pair with the `.reveal` CSS utility class for smooth entrance animations.
 *
 * @param {IntersectionObserverInit} [options]
 * @returns {React.RefObject}
 */
function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useScrollReveal;
