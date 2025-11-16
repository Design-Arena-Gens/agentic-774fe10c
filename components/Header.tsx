"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/hero', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'header-blur' : ''}`}>
      <div className="container flex items-center justify-between h-16">
        <Link href="/hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-brand-500 grid place-items-center text-white font-bold">CT</div>
          <span className="font-semibold">Construction Tech & Management</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-2 rounded-md text-sm transition ${pathname === n.href ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="relative">
      <button aria-label="Menu" className="btn btn-ghost" onClick={() => setOpen((v) => !v)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 card p-2">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="block px-3 py-2 rounded hover:bg-white/5">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
