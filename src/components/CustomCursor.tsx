import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
      setIsTouch(true);
      return;
    }

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, input, textarea, [role="button"], .interactive-cursor');
      const projectEl = target.closest('[data-cursor-text]');

      if (projectEl) {
        setIsHovered(true);
        setCursorText(projectEl.getAttribute('data-cursor-text') || 'View');
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          isHovered
            ? cursorText
              ? 'h-16 w-16 bg-accent-blue/90 text-white text-xs font-semibold backdrop-blur-sm shadow-glow-blue scale-100'
              : 'h-10 w-10 bg-accent-blue/20 border border-accent-blue/60 backdrop-blur-[2px] scale-125'
            : 'h-3.5 w-3.5 bg-accent-blue/80 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
        }`}
      >
        {cursorText && <span className="tracking-wider uppercase text-[10px]">{cursorText}</span>}
      </div>
    </div>
  );
};
