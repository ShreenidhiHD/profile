'use client';

import { useEffect, useRef } from 'react';

interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';

    const timeout = setTimeout(() => {
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

export function ScaleOnHover({ 
  children, 
  className = '' 
}: AnimatedProps) {
  return (
    <div className={`transition-transform duration-200 hover:scale-105 ${className}`}>
      {children}
    </div>
  );
}

export function StaggeredFade({ 
  children, 
  className = '' 
}: AnimatedProps) {
  return (
    <div className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <FadeIn key={index} delay={index * 150}>
              {child}
            </FadeIn>
          ))
        : children
      }
    </div>
  );
}
