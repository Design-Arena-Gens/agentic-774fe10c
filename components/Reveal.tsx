"use client";
import { useEffect, useRef, useState } from 'react';

type Props = { children: React.ReactNode; className?: string };

export default function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className ?? ''} ${shown ? 'revealed' : 'reveal'}`}>{children}</div>
  );
}
