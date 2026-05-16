import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Crosshair, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-6 shadow-sm">
              About Dicetek L.L.C
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Engineering the Future of <br/>
              <span className="text-gradient">Enterprise IT</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Dicetek L.L.C is a premier computer support and IT services provider based in the bustling commercial hub of Deira, Dubai. We bridge the gap between complex technological demands and seamless business operations.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our holistic approach integrates cybersecurity, cloud architecture, and proactive managed services to create environments where businesses can thrive without technological friction.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0" />
                <span className="text-sm font-semibold text-slate-800">15+ Years IT Experience</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0" />
                <span className="text-sm font-semibold text-slate-800">ISO/ITIL Standards</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0" />
                <span className="text-sm font-semibold text-slate-800">200+ Enterprise Clients</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-sky shrink-0" />
                <span className="text-sm font-semibold text-slate-800">Certified Engineers</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-brand-blue mb-1">99.9%</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Uptime Guarantee</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-brand-blue mb-1">24/7</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Proactive Support</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative rounded-2xl overflow-hidden shadow-2xl z-10"
             >
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Data Center / Tech Office" 
                  className="w-full h-auto aspect-square object-cover"
                />
             </motion.div>
             
             {/* Floating cards */}
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="absolute -left-8 top-12 glass p-4 rounded-xl shadow-lg z-20 flex items-center gap-4 bg-white/90 backdrop-blur"
             >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dubai Based</div>
                  <div className="text-xs text-slate-500 font-medium">Global Standards</div>
                </div>
             </motion.div>

             <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
               className="absolute -right-8 bottom-12 glass p-4 rounded-xl shadow-lg z-20 flex items-center gap-4 bg-white/90 backdrop-blur"
             >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Premium Support</div>
                  <div className="text-xs text-slate-500 font-medium">Certified Experts</div>
                </div>
             </motion.div>

             {/* Background decoration */}
             <div className="absolute top-10 -right-10 w-full h-full border-2 border-brand-sky/20 rounded-2xl -z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
