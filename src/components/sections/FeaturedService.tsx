import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function FeaturedService() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-slate-800/80 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                alt="Digital X-Ray Demo" 
                className="w-full h-full object-cover opacity-80"
              />
              {/* Abstract medical overlay overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-32 h-32 border border-teal-400/30 rounded-full animate-ping opacity-20"></div>
                <div className="absolute w-48 h-48 border border-teal-400/20 rounded-full animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 max-w-xs z-30 hidden md:block">
              <div className="text-sm font-bold text-slate-900 mb-1">Fast Processing</div>
              <div className="text-xs text-slate-500">Digital workflow ensures minimal waiting times for patients.</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold tracking-wide uppercase mb-6">
              Featured Demo Service
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Digital X-Ray
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              High-quality imaging presented through a streamlined diagnostic experience. We combine advanced technology with a patient-first approach.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Digital workflow', 'Convenient scheduling', 'Easy enquiry', 'Patient-friendly process'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 text-white font-medium hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
            >
              Enquire About This Test
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
