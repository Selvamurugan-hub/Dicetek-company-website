import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Cloud, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-brand-sky/10" />
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-sky/20 blur-[100px] mix-blend-multiply opacity-50 animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-blue/20 blur-[120px] mix-blend-multiply opacity-50" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col items-start pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            Enterprise IT Solutions in Dubai
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900"
          >
            Transforming <br className="hidden sm:block" />
            Businesses Through <br className="hidden lg:block"/>
            <span className="text-gradient">Intelligent IT </span>
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
          >
            Dicetek L.L.C delivers secure, scalable, and futuristic enterprise IT 
            support and digital transformation services for global organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-bold text-sm tracking-wide hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-sm tracking-wide hover:bg-slate-50 transition-all border border-slate-200 shadow-sm hover:shadow"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* 3D-ish Floating illustration / Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
        >
           {/* Decorative elements */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-sky/10 to-brand-blue/5 rounded-full blur-3xl -z-10" />
           
           <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
             className="relative z-10 w-full max-w-lg aspect-[4/3] rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-3xl shadow-2xl flex flex-col overflow-hidden"
           >
              {/* Fake dashboard header */}
              <div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="font-mono text-[10px] text-slate-400 font-medium tracking-wider bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">DICETEK OS v2.0</div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 flex-1 flex gap-6">
                <div className="w-1/3 flex flex-col gap-4">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-brand-blue/5 to-brand-sky/10 border border-brand-blue/10 flex flex-col items-center justify-center gap-2">
                    <Cloud className="w-6 h-6 text-brand-blue" />
                    <span className="text-[10px] font-bold text-slate-600">Cloud Sync</span>
                  </div>
                  <div className="h-24 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-brand-sky" />
                    <span className="text-[10px] font-bold text-slate-600">Security Active</span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-slate-700">Network Traffic</span>
                      <LineChart className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="flex-1 flex items-end gap-2">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-brand-blue/20 to-brand-sky/40 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center px-4 gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-medium">System Status</span>
                      <span className="text-sm font-bold text-slate-800">Perfect Condition</span>
                    </div>
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Floating elements attached to dashboard */}
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
             className="absolute -right-8 top-1/4 glass p-4 rounded-xl shadow-xl border border-white flex items-center gap-3 bg-white/80"
           >
             <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky">
               <ShieldCheck className="w-5 h-5" />
             </div>
             <div className="flex flex-col">
               <span className="text-xs text-slate-500 font-medium">Cybersecurity</span>
               <span className="text-sm font-bold text-slate-800">100% Protected</span>
             </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
