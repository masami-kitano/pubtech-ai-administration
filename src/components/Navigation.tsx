'use client';
import Link from 'next/link';
import { Arrow } from './icons/Arrow';

export default function Navigation() {
  const navigations = [
    { name: '紹介動画', href: '/', blank: false },
    { name: '独自機能', href: '/', blank: false },
    { name: '機能比較表', href: '/spot', blank: false },
  ];

  return (
    <nav className='flex items-center gap-x-8'>
      <ul className='flex items-center gap-x-8 font-semibold text-[#3d3d3d] leading-[1.7] text-[.75rem] tracking-[.02em]'>
        {navigations.map((navigation) => (
          <li key={navigation.name}>
            <Link href={navigation.href} className='transition-colors duration-300 lg:hover:text-[#2663e0]'>{navigation.name}</Link>
          </li>
        ))}
      </ul>
      <div className="font-semibold text-white leading-[1.7] text-[.875rem] tracking-[.02em]">
        <Link href='/' className="group flex items-center justify-center gap-x-1 w-[10.125rem] h-10 border border-pubtech-blue bg-pubtech-blue rounded-lg transition-colors duration-300 lg:hover:bg-white lg:hover:text-pubtech-blue">
          <span>お問い合わせ</span>
          <Arrow className='w-[1.10375rem] [&_path]:transition-colors duration-300 lg:group-hover:[&_path]:fill-pubtech-blue' />
        </Link>
      </div>
    </nav>
  );
}