import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat With Us
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
      </div>

      <a
        href="https://wa.me/919341025158"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-teal-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </motion.div>
  );
}
