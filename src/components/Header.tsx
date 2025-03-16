'use client';
import Link from 'next/link';
import { Logo } from './icons/Logo';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      setIsScrolled(scrollPosition > viewportHeight);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 px-4 transition-colors duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[70rem] h-[4.375rem] mx-auto flex items-center justify-between">
        <h1>
          <Link href='/' className='relative'>
            <Logo
              className='w-[7.125rem]'
            />
          </Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
}
