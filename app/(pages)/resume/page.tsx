import Reveal from '@/components/Reveal';

export default function ResumePage() {
  const roles = [
    { title: 'Construction Technology Lead', org: 'InnovateBuild', time: '2022 ? Present', points: ['Implemented 4D planning reducing delays by 18%', 'Led model coordination across 12 disciplines', 'Established CDE governance and QA/QC'] },
    { title: 'Project Controls Engineer', org: 'MetroWorks', time: '2019 ? 2022', points: ['Developed EVM dashboards improving cost predictability', 'Risk register and Monte Carlo analysis', 'Integrated schedule-cost for executive reporting'] },
  ];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="h2">Resume</h2>
          <p className="lead mt-3 max-w-3xl">Experience and education tailored to complex capital projects and high-precision delivery.</p>
        </Reveal>
        <div className="mt-10 space-y-6">
          {roles.map((r) => (
            <Reveal key={r.title}>
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <p className="h3 text-lg">{r.title} ? <span className="text-slate-300">{r.org}</span></p>
                  </div>
                  <p className="text-slate-400">{r.time}</p>
                </div>
                <ul className="list-disc list-inside mt-3 text-slate-300">
                  {r.points.map((p) => (<li key={p}>{p}</li>))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="card p-6 mt-8">
            <p className="h3 text-lg">Education</p>
            <p className="text-slate-300 mt-2">B.E. in Civil Engineering ? Specialization in Construction Technology & Management</p>
          </div>
        </Reveal>
        <div className="mt-8 flex gap-3">
          <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.print(); }}>Download PDF</a>
          <a href="/contact" className="btn btn-outline">Contact</a>
        </div>
      </div>
    </section>
  );
}
