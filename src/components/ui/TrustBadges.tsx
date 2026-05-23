"use client";

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-8 py-8 border-y border-stone-800/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-stone-700 flex items-center justify-center">
          <span className="text-stone-500 text-xs">🔒</span>
        </div>
        <div>
          <p className="text-stone-300 text-xs font-medium">100% Confidential</p>
          <p className="text-stone-600 text-[10px] uppercase tracking-wider">HIPAA Compliant</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-stone-700 flex items-center justify-center">
          <span className="text-stone-500 text-xs">⚓</span>
        </div>
        <div>
          <p className="text-stone-300 text-xs font-medium">Maritime Trained</p>
          <p className="text-stone-600 text-[10px] uppercase tracking-wider">Yacht Industry Experts</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-stone-700 flex items-center justify-center">
          <span className="text-stone-500 text-xs">🌍</span>
        </div>
        <div>
          <p className="text-stone-300 text-xs font-medium">Global Coverage</p>
          <p className="text-stone-600 text-[10px] uppercase tracking-wider">150+ Ports Worldwide</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-stone-700 flex items-center justify-center">
          <span className="text-stone-500 text-xs">🛡️</span>
        </div>
        <div>
          <p className="text-stone-300 text-xs font-medium">Insurance Accepted</p>
          <p className="text-stone-600 text-[10px] uppercase tracking-wider">Major Providers</p>
        </div>
      </div>
    </div>
  );
}
