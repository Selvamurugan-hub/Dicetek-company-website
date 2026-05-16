import React from 'react';
import { motion } from 'motion/react';

const STATS = [
  { value: '200+', label: 'Clients Served' },
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years of Experience' },
  { value: '99%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Availability' },
];

export default function Stats() {
  return (
    <section className="py-20 relative z-10 border-y border-slate-200 bg-gradient-to-r from-brand-sky/5 via-transparent to-brand-blue/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-x divide-slate-200">
          {STATS.map((stat, idx) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className={`flex flex-col items-center justify-center text-center px-4 ${idx % 2 !== 0 ? 'border-none md:border-l' : 'border-none lg:border-l'}`}
             >
               <span className="font-display text-4xl sm:text-5xl font-bold text-brand-blue mb-2 tracking-tight">
                 {stat.value}
               </span>
               <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                 {stat.label}
               </span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
