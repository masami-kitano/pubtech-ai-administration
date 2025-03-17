'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function OriginalFeatures() {
  const orignialFeatures = [
    {
      title: '推敲指示/回覧機能',
      lead: '成果物の修正は､コメントで簡単に｡<br />関係者への回覧や､指摘の受付もAIがサポート｡',
      description:
        '「パブテクAI行政」では、修正したい部分にコメントするだけで、AIが指摘を受けた推敲案を提示。関係者や上司と直接回覧でき、受け取った側もコメントや修正依頼が可能。AIが即座に修正案を示し、適用後の文書を確認できるため、スムーズに成果物を完成できます。',
    },
    {
      title: '自治体間共有機能',
      lead: '自治体の垣根を越える情報共有',
      description:
        '「パブテクAI行政」は、自治体の政策課題や対応事例をデータベース化。遠く離れた自治体の類似事例を参照したり、当時の担当者にコンタクトを取ることが可能に。AIに作業を依頼するだけで、過去の事例を活用し、迅速な意思決定を支援します。<br />また、情報共有は承認制で管理され、機密情報の保護や適切なアクセス制御が徹底されています。',
    },
    {
      title: 'データベース機能',
      lead: '庁内で誰が何に取り組んでいるのか<br />瞬時に把握できるAI秘書',
      description:
        '「パブテクAI行政」は、利用状況とアカウントを紐づけ、庁内の業務進捗や担当者情報を可視化。誰がどのプロジェクトを担当し、進捗状況がどうなっているかを即座に把握できます。幹部はこのデータを活用し、適切に指示を出し、リソースを最適配分。迅速な意思決定を支援します。',
    },
    {
      title: '問い合わせ対応の効率化機能',
      lead: '優先順位をつけながら、AI支援で問い合わせ対応工数を大幅削減',
      description:
        '市民向けサービス「パブテクAIチャット」で収集 した、返答が必要な市民からの問い合わせをAIが 取りまとめます。緊急度と重要度を判定したうえで回答案を事前に準備し、スピーディーに問い合わせ対応をこなせるようになります。',
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current) return;

    const panels = panelsRef.current;
    const container = document.querySelector('.js-features-container');
    
    panels.forEach((panel, index) => {
      if (index < panels.length - 1) {
        ScrollTrigger.create({
          trigger: panel,
          start: `top ${index * 8}px`,
          endTrigger: container,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(panel, {
              scale: 1 - progress * 0.1,
              duration: 0.1,
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id='original-features' className='relative mt-25 pt-25 px-20'>
      <div className='js-features-container max-w-320 mx-auto'>
        <div 
          ref={el => {
            if (el) panelsRef.current[0] = el;
          }}
          className='js-features-panel relative px-20 py-17.5 h-screen grid place-items-center overflow-hidden'
        >
          <div className='bg-black-base rounded-2xl grid place-items-center w-full h-full max-h-152.75 overflow-hidden'>
            <h2 className='text-64/[1.4] font-semibold text-white text-center'>
              パブテクAI行政だからできる
              <br />
              <span className='bg-gradient-to-r from-[#3A78F1] via-[#47D9E2] to-[#64ED80] inline-block text-transparent bg-clip-text'>
                独自機能
              </span>
              の紹介
            </h2>
          </div>
        </div>
        {orignialFeatures.map((feature, index) => (
          <div
            key={feature.title}
            ref={el => {
              if (el) panelsRef.current[index + 1] = el;
            }}
            className='js-features-panel group relative px-20 py-17.5 h-screen grid place-items-center overflow-hidden'
          >
            <div className='bg-black-base rounded-2xl grid place-items-center w-full h-full max-h-152.75 px-8'>
              <div className='flex gap-x-[1.8125rem] w-full group-odd:flex-row-reverse'>
                <div className='relative w-[calc(609/1052*100%)]'>
                  <Image
                    src={`/images/new-feature-${(index + 1)
                      .toString()
                      .padStart(2, '0')}.png`}
                    alt={feature.title}
                    width={609}
                    height={371}
                  />
                </div>
                <div className='relative flex flex-col justify-between flex-1'>
                  <div className='relative'>
                    <div className='text-12/[1.7] tracking-[.02em] capitalize font-semibold'>
                      <span className='bg-gradient-to-r from-[#3A78F1] via-[#47D9E2] to-[#64ED80] inline-block text-transparent bg-clip-text'>
                        new feature
                      </span>
                    </div>
                    <h3 className='mt-4 text-40/[1.4] font-semibold text-white'>
                      {feature.title}
                    </h3>
                    <h4
                      className='text-14/[1.4] leading-[1.7] mt-8 text-white font-semibold'
                      dangerouslySetInnerHTML={{ __html: feature.lead }}
                    />
                    <p className='text-12/[1.7] leading-[1.7] mt-2 text-[#B0B0B0]'>
                      {feature.description}
                    </p>
                  </div>
                  <div className='relative text-20/[1.4] text-pubtech-blue pl-7'>
                    <span className='absolute top-1/2 -translate-y-1/2 left-0 w-5 h-0.25 bg-pubtech-blue'></span>
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
