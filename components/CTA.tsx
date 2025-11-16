import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section section-accent">
      <div className="container">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="h3">Ready to build smarter, faster, safer?</h3>
            <p className="lead mt-2">Let's transform your project with data-driven construction technology and rigorous management.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
            <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
