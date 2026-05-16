import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-[20%] w-[30vw] h-[30vw] bg-brand-sky/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
              Transforming businesses through intelligent IT solutions, proactive support, and enterprise-grade infrastructure.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue shadow-sm hover:shadow transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
            <ul className="space-y-3">
              {['IT Infrastructure', 'Cloud Migration', 'Cybersecurity', 'Managed Services', 'Enterprise Software'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Case Studies', 'News & Insights', 'Contact Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Stay Secure</h4>
            <p className="text-sm font-medium text-slate-600 mb-4">Subscribe to our newsletter for the latest in enterprise IT and cybersecurity.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border border-slate-200 rounded-l-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-brand-sky focus:ring-1 focus:ring-brand-sky w-full shadow-sm"
              />
              <button className="bg-brand-blue text-white font-bold px-5 py-2.5 rounded-r-lg hover:bg-blue-600 transition-colors shadow-sm text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Dicetek L.L.C. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
