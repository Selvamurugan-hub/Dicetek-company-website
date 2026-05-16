import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, Cloud, ShieldAlert, MonitorPlay, 
  Code2, Network, DatabaseBackup, Headphones, 
  Lightbulb, Building2
} from 'lucide-react';

const SERVICES = [
  { icon: Server, title: 'IT Infrastructure', desc: 'Robust server architecture, cabling, and hardware deployment tailored for enterprise workloads.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Secure cloud migrations and management across AWS, Azure, and Google Cloud environments.' },
  { icon: ShieldAlert, title: 'Cybersecurity', desc: 'Advanced threat protection, security audits, and robust endpoint security solutions.' },
  { icon: MonitorPlay, title: 'Managed IT Services', desc: 'Proactive 24/7 monitoring, maintenance, and comprehensive system administration.' },
  { icon: Code2, title: 'Software Solutions', desc: 'Custom enterprise application development and complex system integrations.' },
  { icon: Network, title: 'Network Administration', desc: 'Design and deployment of secure, high-availability routing and switching networks.' },
  { icon: DatabaseBackup, title: 'Data Backup', desc: 'Enterprise data protection, disaster recovery, and automated backup strategies.' },
  { icon: Headphones, title: 'Technical Support', desc: 'Responsive L1-L3 remote and on-site helpdesk resolving issues seamlessly.' }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/10 border border-brand-sky/20 text-xs font-semibold text-brand-sky uppercase tracking-wider mb-6 shadow-sm"
          >
            Core Competencies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold mb-4 text-slate-900"
          >
            Capabilities & <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            We provide a comprehensive suite of enterprise-grade IT services designed 
            to secure your digital assets, streamline operations, and accelerate growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-sky/50 transition-all cursor-default relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mb-6 shadow-sm">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="relative z-10 font-display text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="relative z-10 text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
