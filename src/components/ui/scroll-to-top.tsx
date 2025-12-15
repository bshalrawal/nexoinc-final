'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-[16.5rem] right-6 z-40 pointer-events-none">
      <Button
        onClick={scrollToTop}
        className={cn(
          'pointer-events-auto flex items-center justify-center w-16 h-16 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300',
          'bg-black/40 backdrop-blur-md border border-white/20 text-white',
          'hover:bg-white hover:text-black hover:border-white hover:scale-110 hover:-translate-y-1',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-7 w-7" />
      </Button>
    </div>
  );
}
