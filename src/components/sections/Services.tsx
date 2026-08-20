import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Diagnostics, Simplified.</h2>
          <p className="text-lg text-slate-600">
            Explore a range of diagnostic services through a simple, patient-friendly experience. 
            <span className="block mt-2 text-xs font-medium text-amber-600 bg-amber-50 inline-block px-2 py-1 rounded">Note: These are demo placeholder services.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-teal-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 group-hover:bg-teal-50 group-hover:border-teal-100 transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <a href="#appointment" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors mt-auto">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
