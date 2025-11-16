import Reveal from '@/components/Reveal';

const projects = [
  {
    title: 'Hospital Expansion ? 4D/5D VDC',
    tags: ['BIM', '4D', 'Cost'],
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    desc: 'Coordinated complex phasing and logistics with 4D simulation and cost linkage.'
  },
  {
    title: 'Rail Corridor ? Digital Twin',
    tags: ['Twin', 'IoT', 'Analytics'],
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    desc: 'Unified asset data, telemetry, and maintenance planning into an operational twin.'
  },
  {
    title: 'High-Rise ? Model QA/QC',
    tags: ['BIM', 'QA/QC'],
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop',
    desc: 'Automated checks for model health and code compliance reducing rework.'
  }
];

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="h2">Portfolio</h2>
          <p className="lead mt-3 max-w-3xl">Selected work demonstrating practical impact across schedule, cost, and safety.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <div className="card overflow-hidden group h-full flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} className="h-40 w-full object-cover group-hover:scale-[1.02] transition" loading="lazy" />
                <div className="p-5 flex-1 flex flex-col">
                  <p className="h3 text-lg">{p.title}</p>
                  <p className="text-slate-300 mt-2 flex-1">{p.desc}</p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {p.tags.map((t) => (<span key={t} className="badge">{t}</span>))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
