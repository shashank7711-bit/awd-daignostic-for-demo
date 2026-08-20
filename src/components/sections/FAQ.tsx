import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data';
import { cn } from '../../lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions.</h2>
          <p className="text-lg text-slate-600">
            Find quick answers to common queries about our demo services and appointments.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={faq.id}
                className={cn(
                  "border rounded-2xl transition-colors duration-300 overflow-hidden",
                  isOpen ? "bg-white border-teal-100 shadow-md shadow-teal-900/5" : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-base md:text-lg font-bold pr-4 transition-colors",
                    isOpen ? "text-teal-700" : "text-slate-900"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                    isOpen ? "bg-teal-50 text-teal-600 rotate-180" : "bg-slate-50 text-slate-400"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
