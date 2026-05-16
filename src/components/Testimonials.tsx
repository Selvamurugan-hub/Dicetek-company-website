import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Dicetek completely overhauled our legacy systems. Their cloud migration strategy was flawless, and their 24/7 support gives us absolute peace of mind.",
    name: "Ahmed Al Mansoori",
    role: "CTO, Gulf Logistics",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
  },
  {
    text: "Their cybersecurity implementation stopped several high-level threats entirely. Reliable, highly skilled, and professional.",
    name: "Sarah Williams",
    role: "Director of Operations, Future Bank Dubai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
  },
  {
    text: "We consider Dicetek not just a vendor, but a strategic IT partner. Their managed services allow us to focus wholly on our core retail business.",
    name: "Khalid Rahman",
    role: "CEO, Desert Retail Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold mb-4 text-slate-900"
          >
            Client <span className="text-gradient">Endorsements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Trusted by the leading enterprises in the UAE and beyond.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-brand-sky font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
