import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HeroPage() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div>
            <span className="badge mb-4">Construction Technology & Management</span>
            <h1 className="h1">Building the future with <span className="gradient-text">data-driven delivery</span></h1>
            <p className="lead mt-4 max-w-xl">I integrate BIM, digital twins, and rigorous project controls to deliver safer, faster, and more sustainable construction outcomes.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn btn-primary">Hire Me</Link>
              <Link href="/portfolio" className="btn btn-ghost">See Portfolio</Link>
            </div>
            <div className="divider" />
            <ul className="grid sm:grid-cols-3 gap-4 text-sm">
              {[
                ['BIM & VDC', 'Model coordination, 4D/5D, QA/QC'],
                ['Project Controls', 'Schedule, cost, risk'],
                ['Site Tech', 'Drones, IoT, AR/VR']
              ].map(([title, text]) => (
                <li key={title} className="card p-4">
                  <p className="font-semibold">{title}</p>
                  <p className="text-slate-400 mt-1">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1581091224900-7ef25f2f73d8?q=80&w=1600&auto=format&fit=crop" alt="Construction technology" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {['photo-1520607162513-77705c0f0d4a','photo-1581092795360-fd1cc3d1a78b','photo-1469474968028-56623f02e42e'].map((id) => (
                <div key={id} className="rounded-xl overflow-hidden card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`} alt="Gallery" className="w-full h-28 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
