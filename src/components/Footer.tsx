import { Activity } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-white tracking-tight">AWD</span>
                <span className="text-[0.65rem] font-semibold tracking-widest text-teal-400 uppercase">Diagnostic</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Modern diagnostic services designed around accuracy, convenience, and a better patient experience. A conceptual demo project.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              Built by AWD SHASHANK
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Legal & Demo Info</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="text-slate-500">Privacy Policy (Demo)</li>
              <li className="text-slate-500">Terms of Service (Demo)</li>
              <li className="text-slate-400 mt-4 leading-relaxed">
                This is a concept website designed to demonstrate web development capabilities. Not a real medical centre.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} AWD SHASHANK — Concept Demo.</p>
          <p>Designed & Developed with Precision.</p>
        </div>
      </div>
    </footer>
  );
}
