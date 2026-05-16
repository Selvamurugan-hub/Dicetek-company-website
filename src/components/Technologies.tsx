import React from 'react';

const TECHS = [
  'Microsoft',
  'Cisco',
  'AWS',
  'Azure',
  'Oracle',
  'VMware',
  'Google Cloud',
  'Linux',
];

export default function Technologies() {
  return (
    <section className="py-20 relative z-10 border-t border-slate-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <h2 className="font-display text-sm font-bold tracking-widest uppercase text-slate-400">
          Powered by Industry Leaders
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="py-4 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] flex min-w-full z-0 whitespace-nowrap">
          {[...TECHS, ...TECHS].map((tech, idx) => (
             <div 
               key={idx} 
               className="mx-8 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-300 hover:text-brand-blue hover:text-glow-blue transition-colors cursor-default"
             >
               {tech}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
