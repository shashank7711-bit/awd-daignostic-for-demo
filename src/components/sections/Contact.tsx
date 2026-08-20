import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Get in Touch.</h2>
          <p className="text-lg text-slate-600">
            We're here to help you with your diagnostic needs.
            <span className="block mt-2 text-xs font-medium text-amber-600 bg-amber-50 inline-block px-2 py-1 rounded">Note: This is demo contact information.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Demo Contact Details</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Phone</div>
                    <div className="text-slate-900 font-semibold">+91 93410 25158</div>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Email</div>
                    <div className="text-slate-900 font-semibold break-all">hello@awddiagnostic.demo</div>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">Address</div>
                    <div className="text-slate-900 font-semibold leading-relaxed">
                      Demo Healthcare Avenue,<br />
                      Kolkata, West Bengal
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-teal-900 p-8 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-800 rounded-bl-full -z-0"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Fastest Way to Connect</h3>
                <p className="text-teal-100 text-sm mb-6 leading-relaxed">
                  Message us on WhatsApp for quick appointments and immediate report delivery.
                </p>
                <a 
                  href="https://wa.me/919341025158" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 relative"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium">Google Maps Integration (Demo Placeholder)</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
