import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top:'5rem' ,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: '#f0f0f0',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: '100%',
          width: scrollProgress,
          background:'linear-gradient(to right, #0099ff 0%, #ff3399 100%)',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;