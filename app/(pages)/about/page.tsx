import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="h2">About Me</h2>
          <p className="lead mt-3 max-w-3xl">I'm a Construction Technology & Management engineer specializing in integrating digital technologies across the project lifecycle ? from planning and design to site execution and handover. I help teams reduce risk, improve productivity, and deliver predictable outcomes.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { title: 'Methods', text: 'Lean construction, Last Planner, risk-based planning' },
            { title: 'Technology', text: 'BIM/VDC, 4D/5D, CDE, analytics, digital twins' },
            { title: 'Leadership', text: 'Cross-functional alignment, QA/QC, stakeholder engagement' },
          ].map((i) => (
            <Reveal key={i.title}>
              <div className="card p-6 h-full">
                <p className="h3 text-lg">{i.title}</p>
                <p className="text-slate-300 mt-2">{i.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="card p-6 mt-10">
          <p className="text-sm text-slate-300">Certifications: PMP, CM-BIM, LEED GA ? Tools: Navisworks, Revit, Synchro, Primavera P6, Power BI</p>
        </div>
      </div>
    </section>
  );
}
