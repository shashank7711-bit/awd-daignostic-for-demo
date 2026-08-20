import { motion } from 'motion/react';
import { galleryData } from '../../data';
import { Expand } from 'lucide-react';

export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Facilities.</h2>
            <p className="text-lg text-slate-600">
              Take a look inside our conceptual diagnostic centre designed for maximum patient comfort.
            </p>
          </div>
          <div className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1.5 rounded self-start md:self-auto">
            Demo Placeholder Imagery
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryData.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-slate-100 ${index === 0 || index === 3 ? 'md:aspect-[16/10]' : 'md:aspect-[4/3]'} aspect-[4/3]`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1 block">{img.category}</span>
                    <h3 className="text-white font-medium">{img.alt}</h3>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Expand className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
