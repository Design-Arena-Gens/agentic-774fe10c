"use client";
import { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(Object.fromEntries(data.entries())) });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="h2">Contact</h2>
          <p className="lead mt-3">Tell me about your project. I typically reply within one business day.</p>
        </Reveal>
        <form onSubmit={onSubmit} className="card p-6 mt-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" required className="input mt-1" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input name="email" type="email" required className="input mt-1" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300">Company</label>
            <input name="company" className="input mt-1" placeholder="Acme Construction" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea name="message" required className="textarea mt-1" placeholder="Share goals, timeline, budget range..." />
          </div>
          <div className="flex items-center gap-3">
            <button disabled={status==='loading'} className="btn btn-primary">{status==='loading' ? 'Sending?' : 'Send Message'}</button>
            {status==='success' && <p className="text-green-400 text-sm">Thanks! Ill get back to you shortly.</p>}
            {status==='error' && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
