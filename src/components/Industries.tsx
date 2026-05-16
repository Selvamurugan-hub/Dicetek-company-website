import React from 'react';
import { motion } from 'motion/react';
import { Landmark, HeartPulse, ShoppingBag, Truck, GraduationCap, Building, Signal } from 'lucide-react';

const INDUSTRIES = [
  { icon: Landmark, name: 'Banking & Finance' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: ShoppingBag, name: 'Retail & E-commerce' },
  { icon: Truck, name: 'Logistics' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Building, name: 'Government' },
  { icon: Signal, name: 'Telecom' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative z-10 bg-white border-t border-slate-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-sky/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-bold mb-4 text-slate-900"
            >
              Transforming <span className="text-gradient">Core Industries</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              We bring specialized technological workflows to the most demanding sectors.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
           {INDUSTRIES.map((ind, idx) => (
             <motion.div
               key={ind.name}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.05 }}
               className="bg-white shadow-sm px-6 py-4 rounded-full border border-slate-200 flex items-center gap-3 hover:bg-slate-50 hover:border-brand-sky/30 hover:shadow-md transition-all cursor-default"
             >
               <ind.icon className="w-5 h-5 text-brand-blue" />
               <span className="font-semibold text-sm text-slate-700">{ind.name}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
