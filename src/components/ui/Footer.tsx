"use client";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="mb-8">
              <span className="font-serif text-2xl font-light tracking-wide text-stone-100">
                SeaSoul<span className="text-stone-500 italic">Wellness</span>
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-[1.8] max-w-sm">
              Dedicated mental health and psychology support for yacht crew members worldwide.
              Because wellbeing at sea begins with care on shore.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-8 font-mono">Resources</h4>
            <ul className="space-y-5 text-stone-500 text-sm">
              <li><a href="#services" data-cursor-hover className="hover:text-stone-200 transition-colors duration-500">Therapy Sessions</a></li>
              <li><a href="#meditation" data-cursor-hover className="hover:text-stone-200 transition-colors duration-500">Guided Meditation</a></li>
              <li><a href="#crisis" data-cursor-hover className="hover:text-stone-200 transition-colors duration-500">Crisis Hotline</a></li>
              <li><a href="#" data-cursor-hover className="hover:text-stone-200 transition-colors duration-500">Self-Help Library</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-8 font-mono">Contact</h4>
            <ul className="space-y-5 text-stone-500 text-sm">
              <li>
                <a href="mailto:support@seasoulwellness.com" data-cursor-hover className="hover:text-stone-200 transition-colors duration-500">
                  support@seasoulwellness.com
                </a>
              </li>
              <li>
                <a href="tel:+18007324357" data-cursor-hover className="hover:text-stone-200 transition-colors duration-500">
                  +1 (800) SEA-HELP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-6 border-t border-stone-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-[10px] uppercase tracking-widest font-mono">
            &copy; 2026 SeaSoul Wellness
          </p>
          <p className="text-stone-700 text-[10px] uppercase tracking-widest font-mono">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
