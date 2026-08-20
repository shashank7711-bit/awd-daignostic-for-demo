import { motion } from 'motion/react';
import { ArrowRight, Activity, Clock, HeartHandshake } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-slate-50 to-slate-50"></div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Advanced Diagnostic Care
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Clarity Begins With <br className="hidden sm:block" />
              <span className="text-teal-600">Accurate Diagnosis.</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Modern diagnostic services designed around accuracy, convenience, and a better patient experience. A premium concept showcasing digital healthcare solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
              >
                Book a Test
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 border-t border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-700 leading-snug">Modern<br/>Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-700 leading-snug">Convenient<br/>Appointments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-700 leading-snug">Patient-Focused<br/>Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Medical Visual */}
            <div className="relative w-full max-w-md aspect-square rounded-full border border-slate-200/50 flex items-center justify-center overflow-visible">
              <div className="absolute inset-4 rounded-full border border-teal-100 flex items-center justify-center">
                <div className="absolute inset-8 rounded-full border border-teal-50 bg-white/40 backdrop-blur-3xl shadow-2xl flex items-center justify-center">
                  <div className="relative w-32 h-32 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 overflow-hidden">
                    <Activity className="w-12 h-12 relative z-10" />
                    {/* Simulated scanning wave */}
                    <motion.div 
                      animate={{ y: ['-100%', '100%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-200/40 to-transparent"
                    ></motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating Data Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-12 -right-4 md:-right-12 bg-white/90 backdrop-blur shadow-xl rounded-xl p-4 border border-slate-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Scan Accuracy</div>
                  <div className="text-sm font-bold text-slate-900">99.8%</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 -left-4 md:-left-8 bg-white/90 backdrop-blur shadow-xl rounded-xl p-4 border border-slate-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Avg. Wait Time</div>
                  <div className="text-sm font-bold text-slate-900">&lt; 15 mins</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
