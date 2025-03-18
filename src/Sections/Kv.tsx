'use client';

import Image from 'next/image';

export default function Kv() {
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
        <div className='absolute top-0 left-1/2 h-full w-full -translate-x-1/2 xl:w-[94.5rem]'>
          <div className='absolute top-0 left-119.75 flex items-center h-full xl:left-auto xl:right-9.5'>
            <div className='relative w-[49.98875rem] aspect-[799.82/576]'>
              <Image
                src='/images/kv.png'
                alt='kv-bg'
                width={799.82}
                height={576}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
