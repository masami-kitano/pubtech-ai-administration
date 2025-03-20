'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Kv() {
  const containerRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const boxes = [
      { ref: box1Ref, speed: 0.3 },
      { ref: box2Ref, speed: 0.5 },
      { ref: box3Ref, speed: 0.7 },
    ];

    boxes.forEach(({ ref, speed }) => {
      gsap.fromTo(ref.current,
        {
          y: 0
        },
        {
          y: `${speed * 300}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className='relative overflow-hidden px-20'>
      <div className='relative'>
        <div className='relative max-w-[70rem] mx-auto min-h-screen flex items-center'>
          <div className='absolute top-0 left-58.75 w-screen h-full bg-gradient-to-r from-white to-[#9EBEFF]'></div>
          <div className='relative'>
            <h2 className='text-[2rem] font-semibold leading-[1.4]'>
              無駄な作業を減らし
              <br />
              <span className='bg-gradient-to-r from-[#3A78F1] via-[#47D9E2] to-[#64ED80] inline-block text-transparent bg-clip-text'>
                意思決定に集中できる
              </span>
              AI
            </h2>
            <p className='max-w-[28.125rem] mt-8 text-[.875rem] leading-[1.7]'>
              「パブテクAI行政」は、自治体業務に特化した対話型AIサービスです。情報収集から行政文書の執筆、問い合わせ対応まで、日々の業務を圧倒的に効率化します。
            </p>
          </div>
        </div>
        <div className='absolute top-0 left-1/2 h-full w-full -translate-x-1/2 xl:w-[94.5rem] pointer-events-none'>
          <div ref={containerRef} className='absolute top-0 left-119.75 flex items-center h-full xl:left-auto xl:right-9.5'>
            <div className='relative w-[49.98875rem] aspect-[799.82/576]'>
              <div ref={box1Ref} className="absolute top-[calc(47/576*100%)] left-0 w-[calc(510.08/799.82*100%)] aspect-[510.08/363.52] shadow-[0_1.5625rem_1.5625rem_0_rgba(0,0,0,0.15)] rounded-2xl bg-white"></div>
              <div ref={box2Ref} className="absolute bottom-0 left-[calc(70.2/799.82*100%)] w-[calc(527.6/799.82*100%)] aspect-[527.6/376] shadow-[0_1.5625rem_1.5625rem_0_rgba(0,0,0,0.15)] rounded-2xl bg-white"></div>
              <div ref={box3Ref} className="absolute top-0 right-0 w-[calc(635.64/799.82*100%)] aspect-[635.64/453] shadow-[0_1.5625rem_1.5625rem_0_rgba(0,0,0,0.15)] rounded-2xl bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
