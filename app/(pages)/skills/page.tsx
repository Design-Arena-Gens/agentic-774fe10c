import Reveal from '@/components/Reveal';

const skills = {
  'Construction Technology': ['BIM Coordination', '4D/5D Simulation', 'Digital Twins', 'CDE (ACDat)'],
  'Project Management': ['Scope & WBS', 'Primavera P6', 'Earned Value (EVM)', 'Risk Management'],
  'Data & Analytics': ['Power BI', 'SQL', 'Python (pandas)', 'Dashboards'],
  'Field Tech': ['Reality Capture', 'Drones', 'IoT Sensors', 'AR/VR'],
};

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="h2">Skills</h2>
          <p className="lead mt-3 max-w-3xl">Balanced technical and managerial capabilities enabling predictable, data-driven delivery.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {Object.entries(skills).map(([group, items]) => (
            <Reveal key={group}>
              <div className="card p-6">
                <p className="h3 text-lg mb-3">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
