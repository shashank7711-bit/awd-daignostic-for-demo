import { motion } from 'motion/react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-32 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold tracking-wide uppercase mb-6">
              About AWD Diagnostic
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Technology With a <br className="hidden sm:block" /> Human Approach.
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
              <p>
                AWD Diagnostic is a conceptual example demonstrating how a modern diagnostic centre can communicate its services digitally. 
              </p>
              <p>
                This project focuses on creating a premium, frictionless experience—blending modern interface design with clear patient communication and digital convenience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-white mb-2">Modern</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Interface Design</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">Digital</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Patient Workflow</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Accuracy</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Precision-driven design mimicking high-end diagnostic workflows.</p>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Speed</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Optimized performance for rapid information retrieval.</p>
                </div>
              </div>
              <div className="space-y-4 sm:mt-12">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Clean, professional aesthetics to build instant credibility.</p>
                </div>
                
                {/* Developer Badge */}
                <div className="bg-gradient-to-br from-teal-900 to-slate-900 p-8 rounded-2xl border border-teal-800/50 shadow-2xl shadow-teal-900/20">
                  <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-2">Concept By</div>
                  <div className="text-xl font-bold text-white">AWD SHASHANK</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
