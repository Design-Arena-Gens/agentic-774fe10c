export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">? {new Date().getFullYear()} Construction Technology & Management ? All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <a href="mailto:hello@example.com" className="hover:underline">hello@example.com</a>
          <span className="text-slate-500">|</span>
          <a href="https://www.linkedin.com" target="_blank" className="hover:underline" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="hover:underline" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
