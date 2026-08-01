import React, { useState } from 'react';
import './AboutPhoto.css';

/**
 * AboutPhoto Component
 *
 * A bordered, rounded-rectangle frame — not a circular avatar — with
 * the same duotone treatment (grayscale + Ink-to-Brass color blend)
 * used elsewhere in the system. Falls back to a monogram placeholder
 * if the photo is missing or fails to load, so dropping a new file at
 * the same path just works.
 *
 * @param {Object} props
 * @param {string} [props.src]
 * @param {string} props.alt
 * @param {string} props.initials
 */
function AboutPhoto({ src, alt, initials }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className={`about-photo${showPlaceholder ? '' : ' about-photo--has-image'}`}>
      {showPlaceholder ? (
        <div className="about-photo__placeholder" role="img" aria-label={alt}>
          <span className="about-photo__initials font-display">{initials}</span>
        </div>
      ) : (
        <img
          className="about-photo__image"
          src={src}
          alt={alt}
          width="220"
          height="220"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default AboutPhoto;
