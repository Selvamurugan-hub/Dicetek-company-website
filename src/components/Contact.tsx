import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Ready to <br />
              <span className="text-gradient">Automate Your Future?</span>
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-md text-lg">
              Connect with our leading systems engineers. We design robust IT frameworks specifically for the demands of the modern enterprise.
            </p>
            
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[21/9]">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.665798950587!2d55.3305417!3d25.2481745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1bd3ca1383%3A0xe67db5cfb11dd0c3!2sNew%20Century%20City%20Tower!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade" 
               />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center shrink-0 border border-brand-sky/20">
                  <MapPin className="w-5 h-5 text-brand-sky" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Headquarters</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    307 – 3rd Floor, New Century City Tower<br/>
                    Port Saeed Road, Opp. Deira City Centre<br/>
                    Dubai - United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <a href="mailto:info@dicetek.com" className="text-sm text-slate-600 hover:text-brand-blue transition-colors font-medium">info@dicetek.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center shrink-0 border border-brand-sky/20">
                  <Phone className="w-5 h-5 text-brand-sky" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <a href="tel:+971000000000" className="text-sm text-slate-600 hover:text-brand-sky transition-colors font-medium">+971 00 000 0000</a>
                </div>
              </div>
            </div>

            <a 
               href="https://wa.me/971000000000" 
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 mt-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all font-bold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative"
          >
             <h3 className="font-display text-2xl font-bold text-slate-900 mb-8">Request a Consultation</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-1.5">
                   <label className="text-xs uppercase tracking-wider text-slate-500 font-bold ml-1">Full Name</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all shadow-sm" placeholder="John Doe" />
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-xs uppercase tracking-wider text-slate-500 font-bold ml-1">Email</label>
                   <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all shadow-sm" placeholder="john@company.com" />
                 </div>
               </div>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-1.5">
                   <label className="text-xs uppercase tracking-wider text-slate-500 font-bold ml-1">Company</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all shadow-sm" placeholder="Company Ltd." />
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-xs uppercase tracking-wider text-slate-500 font-bold ml-1">Phone</label>
                   <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all shadow-sm" placeholder="+971..." />
                 </div>
               </div>
               <div className="space-y-1.5">
                 <label className="text-xs uppercase tracking-wider text-slate-500 font-bold ml-1">Service Interested In</label>
                 <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all shadow-sm appearance-none">
                   <option>IT Infrastructure Support</option>
                   <option>Cloud Solutions</option>
                   <option>Cybersecurity</option>
                   <option>Managed IT Services</option>
                   <option>Other</option>
                 </select>
               </div>
               <div className="space-y-1.5">
                 <label className="text-xs uppercase tracking-wider text-slate-500 font-bold ml-1">Message</label>
                 <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky transition-all shadow-sm resize-none" placeholder="Tell us about your IT requirements..." />
               </div>
               <button className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold tracking-wide hover:bg-blue-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase mt-4">
                 Send Request
               </button>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
