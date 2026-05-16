import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users2, Zap, Shield, Maximize, BadgeCheck, Globe } from 'lucide-react';

const REASONS = [
  { icon: Clock, title: '24/7 Support', desc: 'Always online, always monitoring.' },
  { icon: Users2, title: 'Experienced Engineers', desc: 'Top tier talent.' },
  { icon: Zap, title: 'Fast Response Time', desc: 'SLA guarantees you can rely on.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Military-grade encryption.' },
  { icon: Maximize, title: 'Scalable Solutions', desc: 'Grows with your business.' },
  { icon: BadgeCheck, title: 'Certified', desc: 'Industry leading certifications.' },
  { icon: Globe, title: 'Global Standards', desc: 'Following ISO & ITIL.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {REASONS.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center aspect-square hover:bg-brand-sky/5 hover:border-brand-sky/30 hover:shadow-md transition-all ${idx === 6 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <reason.icon className="w-8 h-8 text-brand-blue mb-3" />
                <h4 className="font-display text-sm font-bold text-slate-800 mb-1">{reason.title}</h4>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
              The <span className="text-gradient">Dicetek</span> Advantage
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              We do not just solve IT problems; we engineer environments where they rarely occur. Our commitment to excellence, rapid response, and enterprise-grade security sets us apart in the competitive Dubai technology landscape.
            </p>
            <ul className="space-y-4">
              {['Zero-downtime architecture', 'Proactive threat hunting', 'Dedicated account managers', 'Transparent reporting'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-brand-sky/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-sky" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
