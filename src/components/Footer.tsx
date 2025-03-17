'use client';
import Link from 'next/link';

import BackToTop from '@/components/icons/BackToTop';

export default function Footer() {
  return (
    <footer className='relative'>
      <div className="absolute -top-8 left-0 w-full px-20 -translate-y-full">
        <div className="max-w-280 mx-auto flex justify-end">
          <a href="#" className="relative transition-transform ease-in-out duration-300 lg:hover:-translate-y-1">
            <BackToTop className='w-8' />
          </a>
        </div>
      </div>
      <div className='bg-pubtech-blue py-15'>
        <h2 className='text-40/[1.4] font-semibold text-white text-center'>
          自治体業務の効率化を、AIで一歩先へ。
        </h2>
        <p className='mt-4 text-14/[1.7] text-white text-center'>
          パブテクAI行政で、もっとスムーズで負担の少ない業務環境を実現しませんか？
          <br />
          まずはお気軽にお問い合わせください。
        </p>
        <div className='mt-8 flex justify-center'>
          <Link
            href='/'
            className='text-14/[1.7] font-semibold text-pubtech-blue tracking-[.02em] bg-white px-16 py-4 rounded-lg border border-white transition-colors duration-300 ease-in-out lg:hover:bg-pubtech-blue lg:hover:text-white'
          >
            お問い合わせ
          </Link>
        </div>
      </div>
      <div className='px-20 py-4'>
        <div className='max-w-280 mx-auto flex justify-end items-center gap-x-8 text-12/[1.7] text-[#4F4F4F] tracking-[.02em]'>
          <Link
            href='https://www.public-technologies.com'
            target='_blank'
            className='underline transition-colors duration-300 ease-in-out lg:hover:decoration-transparent'
          >
            プライバシーポリシー
          </Link>
          <small className='text-12/[1.7]'>©2025 PUBLIC Technologies, Inc.</small>
        </div>
      </div>
    </footer>
  );
}
