// resQClear Traffic Analytics & Performance Metrics Component
// Enterprise Visualization with Response Times, Wait Times, Delay Reductions & Corridor Stats
const { useState } = React;

function AnalyticsView({ simState }) {
  const { analyticsData = RESQCLEAR_DATA.analyticsData, demoMetrics = RESQCLEAR_DATA.demoMetrics } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Emergency Traffic Analytics & Corridors</h2>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Simulated demonstration analytics • Empirical corridor performance modeling
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            TOTAL SIMULATED RUNS: <strong className="text-white">{demoMetrics.totalSimulatedTrips || 1248}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            CONFIDENCE: {demoMetrics.decisionConfidence || '96%'}
          </span>
        </div>
      </div>

      {/* 6 Core Analytical Performance Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Emergency Response Time</div>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">06:14 min</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Avg per critical route</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Intersection Waiting Time</div>
          <div className="text-xl font-extrabold text-cyan-400 mt-1">4.2 sec</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Reduced from 48s baseline</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Traffic Congestion Delay</div>
          <div className="text-xl font-extrabold text-teal-300 mt-1">-32.4%</div>
          <div className="text-[9px] text-slate-500 mt-0.5">2m 18s avoided</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Route Efficiency</div>
          <div className="text-xl font-extrabold text-purple-400 mt-1">+33.8%</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Corridor flow boost</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Corridor Activations</div>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">14 Nodes</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Dynamic phase overrides</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Multi-Ambulance Conflicts</div>
          <div className="text-xl font-extrabold text-amber-400 mt-1">12 Events</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Zero cross-axis deadlock</div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Travel Time Comparison SVG Chart */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Emergency Response Time Comparison (Minutes)</h3>
              <p className="text-xs text-slate-400 font-mono">Hourly transit duration: Traditional siren baseline vs resQClear AI corridor</p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="text-slate-300">Traditional Siren Baseline</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">resQClear AI Corridor</span>
              </div>
            </div>
          </div>

          {/* SVG Bar Chart */}
          <div className="h-64 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 700 220" preserveAspectRatio="none">
              {/* Horizontal Grid lines */}
              {[0, 50, 100, 150, 200].map((y, i) => (
                <g key={i}>
                  <line x1="40" y1={y} x2="680" y2={y} stroke="#1e293b" strokeWidth="1" />
                  <text x="15" y={y + 4} fill="#64748b" fontSize="10" fontFamily="monospace">{30 - (i * 6)}m</text>
                </g>
              ))}

              {/* Data Bars */}
              {analyticsData.hourlyData.map((item, idx) => {
                const x = 70 + idx * 65;
                const hBase = (item.traditional / 30) * 180;
                const yBase = 200 - hBase;

                const valResQ = item.resQClear || 10;
                const hResQ = (valResQ / 30) * 180;
                const yResQ = 200 - hResQ;

                return (
                  <g key={idx}>
                    {/* Baseline Bar (Red) */}
                    <rect x={x - 14} y={yBase} width="12" height={hBase} rx="2" fill="#ef4444" opacity="0.45" />
                    {/* resQClear Bar (Emerald) */}
                    <rect x={x} y={yResQ} width="12" height={hResQ} rx="2" fill="#10b981" />
                    {/* Time Label */}
                    <text x={x - 2} y="215" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">{item.time}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Peak Hour Avoidance: <strong>11.3 min delay avoided during 18:00 rush hour</strong></span>
            <span className="text-emerald-400 font-bold">Corridor Efficiency Boost: +33.8%</span>
          </div>
        </div>

        {/* Delay Source Distribution */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Delay Source Distribution</h3>
            <p className="text-xs text-slate-400 font-mono mb-6">Before vs After AI Corridor Activation</p>

            <div className="space-y-4">
              {analyticsData.delaySources.map((source, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">{source.category}</span>
                    <span className="text-slate-400">{source.before} → <strong className="text-emerald-400">{source.after}</strong></span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden flex border border-slate-800">
                    <div className="bg-red-500/50 h-full" style={{ width: source.before }}></div>
                    <div className="bg-emerald-400 h-full" style={{ width: source.after }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
            All analytics shown are simulated demonstration data.
          </div>
        </div>
      </div>
    </div>
  );
}

window.AnalyticsView = AnalyticsView;
