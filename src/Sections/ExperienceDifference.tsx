'use client';

import { PlayMovie } from '@/components/icons/PlayMovie';
import { useState } from 'react';
import Link from 'next/link';

export default function ExperienceDifference() {
  const [isPlaying, setIsPlaying] = useState(false);

  const patternItems = [
    {
      title: '仮)業務パターン',
      description:
        'ここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入ります',
    },
    {
      title: '仮)業務パターン',
      description:
        'ここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入ります',
    },
    {
      title: '仮)業務パターン',
      description:
        'ここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入りますここに業務パターンが入ります',
    },
  ];

  return (
    <section
      id='experience-difference'
      className='relative mt-25 pt-25 px-20 pb-25'
    >
      <div className='bg-pubtech-blue absolute bottom-0 left-0 w-full h-[69.7%]'></div>
      <div className='relative max-w-280 mx-auto'>
        <div className='relative aspect-video overflow-hidden rounded-2xl bg-white shadow-[0_1.5625rem_1.5625rem_0_rgba(0,0,0,0.15)]'>
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className='group absolute inset-0 grid place-items-center bg-[#5D5D5D]/50 cursor-pointer'
            >
              <PlayMovie className='w-16.75 [&_path]:transition-colors [&_path]:duration-300 [&_path]:ease-in-out group-hover:[&_path]:fill-[#3a78f1]' />
            </button>
          ) : (
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/bkReiI4XnDU?autoplay=1'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          )}
        </div>
        <ul className='mt-6 grid grid-cols-3 gap-x-8'>
          {patternItems.map((item, index) => (
            <li key={index} className='flex flex-col gap-y-2'>
              <div className='aspect-video bg-white rounded-2xl'></div>
              <div className='mt-4 text-white'>
                <h3 className='text-18/[1.4] font-semibold'>{item.title}</h3>
                <p className='mt-2 text-14/[1.7]'>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-25'>
          <h2 className='text-64/[1.4] font-semibold text-white text-center'>
            この違い、体験してみませんか
          </h2>
          <div className='mt-6 flex justify-center'>
            <Link
              href='/'
              className='text-14/[1.7] font-semibold text-pubtech-blue tracking-[.02em] bg-white px-16 py-4 rounded-lg border border-white transition-colors duration-300 ease-in-out lg:hover:bg-pubtech-blue lg:hover:text-white'
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
