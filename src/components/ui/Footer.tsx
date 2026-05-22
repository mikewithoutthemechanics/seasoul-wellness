"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <span className="text-xl font-light tracking-wide text-white">
                SeaSoul<span className="font-normal text-slate-400">Wellness</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dedicated mental health and psychology support for yacht crew members worldwide. 
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Therapy Sessions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guided Meditation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crisis Hotline</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Self-Help Library</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="mailto:support@seasoulwellness.com" className="hover:text-white transition-colors">
                  support@seasoulwellness.com
                </a>
              </li>
              <li>
                <a href="tel:+18007324357" className="hover:text-white transition-colors">
                  +1 (800) SEA-HELP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; 2026 SeaSoul Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
