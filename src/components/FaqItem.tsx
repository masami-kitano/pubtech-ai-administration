'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  onToggle: (index: number, isOpen: boolean) => void;
}

export default function FaqItem({ question, answer, index, onToggle }: FaqItemProps) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const summaryRef = useRef<HTMLElement | null>(null);
  const verticalLineRef = useRef<HTMLSpanElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    const verticalLine = verticalLineRef.current;
    if (!details || !summary || !verticalLine) return;

    const handler = (e: Event) => {
      e.preventDefault();
      
      if (isAnimating) return;
      
      if (details.open) {
        setIsAnimating(true);
        const content = details.querySelector('.js-faq-content') as HTMLElement;
        const startHeight = content.offsetHeight;
        content.style.height = startHeight + 'px';
        
        gsap.to(content, {
          height: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            details.open = false;
            onToggle(index, false);
            setIsAnimating(false);
          }
        });
        
        gsap.to(verticalLine, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });

      } else {
        setIsAnimating(true);
        details.open = true;
        onToggle(index, true);
        
        gsap.to(verticalLine, {
          rotation: 270,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            setIsAnimating(false);
          }
        });
      }
    };

    summary.addEventListener('click', handler);
    return () => summary.removeEventListener('click', handler);
  }, [index, onToggle, isAnimating]);

  return (
    <div className='relative' data-index={index}>
      <details
        ref={detailsRef}
        className='group border-b border-[#D1D1D1]'
      >
        <summary
          ref={summaryRef}
          className='flex items-center justify-between gap-x-7.5 cursor-pointer list-none pt-8 pb-6'
        >
          <div className='text-20/[1.4] font-semibold'>{question}</div>
          <div className='relative w-7 h-7'>
            <span className='absolute top-1/2 left-1/2 w-4.5 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-pubtech-blue'></span>
            <span 
              ref={verticalLineRef}
              className='absolute top-1/2 left-1/2 w-0.5 h-4.5 -translate-x-1/2 -translate-y-1/2 bg-pubtech-blue'
            ></span>
          </div>
        </summary>
        <div className='js-faq-content h-0 overflow-hidden'>
          <div
            className='pt-2 pb-8 text-14/[1.7]'
            dangerouslySetInnerHTML={{ __html: answer }}
          ></div>
        </div>
      </details>
    </div>
  );
} 