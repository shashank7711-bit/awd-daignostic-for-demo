import { motion } from 'motion/react';
import { journeyData } from '../../data';

export function PatientJourney() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Patient Journey.</h2>
          <p className="text-lg text-slate-600">
            A simple, transparent process from booking to receiving your results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-0.5 bg-slate-200 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
            {journeyData.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center flex flex-col items-center lg:items-start lg:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-xl shadow-slate-900/20 mb-6 lg:mx-0 ring-8 ring-slate-50">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
