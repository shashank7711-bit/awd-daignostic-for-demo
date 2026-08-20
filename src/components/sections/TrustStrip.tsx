import { motion } from 'motion/react';
import { Microscope, Users, Clock, Smartphone } from 'lucide-react';

export function TrustStrip() {
  const items = [
    { num: '01', title: 'Modern Technology', icon: Microscope },
    { num: '02', title: 'Patient-Focused', icon: Users },
    { num: '03', title: 'Convenient Access', icon: Clock },
    { num: '04', title: 'Digital Enquiries', icon: Smartphone },
  ];

  return (
    <section className="py-8 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-slate-800">
          {items.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 px-4 md:justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-0.5">{item.num}</div>
                <div className="text-sm font-semibold tracking-wide">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
