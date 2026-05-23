"use client";

import { useState } from "react";

const ports = [
  { name: "Monaco", region: "Mediterranean", therapists: 2 },
  { name: "Barcelona", region: "Mediterranean", therapists: 3 },
  { name: "Fort Lauderdale", region: "Caribbean", therapists: 4 },
  { name: "Antibes", region: "Mediterranean", therapists: 2 },
  { name: "Palma de Mallorca", region: "Mediterranean", therapists: 3 },
  { name: "St. Maarten", region: "Caribbean", therapists: 2 },
  { name: "Dubai", region: "Middle East", therapists: 3 },
  { name: "Singapore", region: "Asia Pacific", therapists: 2 },
];

export default function LocationFinder() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof ports[0] | null>(null);

  const filtered = ports.filter(
    (port) =>
      port.name.toLowerCase().includes(search.toLowerCase()) ||
      port.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative py-32 md:py-40 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-6 font-mono">
              Global Network
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-stone-100 mb-8 leading-[0.95]">
              Find Support
              <span className="italic text-stone-400 block mt-2">Near Port</span>
            </h2>
            <p className="text-stone-500 text-sm leading-[1.8] mb-12">
              Access in-person therapy at major yachting hubs worldwide. Our network of
              maritime-trained counselors is available when you dock.
            </p>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-600 mb-3 block font-mono">
                  Search Port or Region
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="e.g., Monaco, Mediterranean"
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 text-stone-200 text-sm focus:border-stone-600 focus:outline-none transition-colors"
                />
              </div>

              {selected && (
                <div className="p-6 border border-stone-800 bg-stone-900/30">
                  <h3 className="font-serif text-xl text-stone-200 mb-2">{selected.name}</h3>
                  <p className="text-stone-500 text-sm mb-4">{selected.region}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-stone-400 text-xs">
                      {selected.therapists} therapist{selected.therapists > 1 ? "s" : ""} available
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-3">
              {filtered.map((port) => (
                <button
                  key={port.name}
                  data-cursor-hover
                  onClick={() => setSelected(port)}
                  className={`w-full p-6 border text-left transition-all duration-500 ${
                    selected?.name === port.name
                      ? "border-stone-600 bg-stone-900/50"
                      : "border-stone-800 hover:border-stone-700"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-lg text-stone-200">{port.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600 font-mono">
                      {port.region}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-stone-500 text-xs">
                      {port.therapists} available
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
