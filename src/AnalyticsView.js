// resQClear Traffic Analytics & Performance Metrics Component
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
              SIMULATION DATA
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">Simulated Urban Flow Benchmarks & Response Time Reduction Analysis</p>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            TOTAL TRIPS ANALYZED: <strong className="text-white">{demoMetrics.totalSimulatedTrips || 1248}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            CONFIDENCE: {demoMetrics.routeConfidence || '98.4%'}
          </span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-slate-400">AVERAGE DELAY REDUCTION</span>
            <Icons.Zap className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">{demoMetrics.travelDelayReduction}</div>
          <div className="text-xs text-slate-400 mt-1 font-mono">vs Traditional Siren Dispatch</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-slate-400">SIMULATED TIME SAVED</span>
            <Icons.Activity className="w-4 h-4 text-teal-300" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-teal-300">{demoMetrics.simulatedTimeSaved}</div>
          <div className="text-xs text-slate-400 mt-1 font-mono">Average saved per critical trip</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-slate-400">INTERSECTIONS COORDINATED</span>
            <Icons.TrafficLight className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400">{demoMetrics.intersectionsCoordinated} Nodes</div>
          <div className="text-xs text-slate-400 mt-1 font-mono">Dynamic V2X Phase Control</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-slate-400">AVERAGE RESPONSE TIME</span>
            <Icons.Hospital className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">{demoMetrics.averageResponseTime}</div>
          <div className="text-xs text-slate-400 mt-1 font-mono">From Alert to ER Bay Handoff</div>
        </div>
      </div>

      {/* Main Interactive Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Travel Time Comparison SVG Chart */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Ambulance Transit Time: Traditional vs resQClear (Minutes)</h3>
              <p className="text-xs text-slate-400 font-mono">Simulated hourly response duration throughout 24-hour cycle</p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="text-slate-300">Baseline (Siren Only)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">resQClear AI V2X</span>
              </div>
            </div>
          </div>

          {/* SVG Bar / Area Chart */}
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

                const valResQ = item.resQClear || item.ambuClear || 10;
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
            <span>Peak Hour Savings: <strong>11.3 min saved during 18:00 rush hour</strong></span>
            <span className="text-emerald-400 font-bold">Average Corridor Efficiency: +33.8%</span>
          </div>
        </div>

        {/* Delay Source Distribution */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Delay Sources Avoidance</h3>
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

          <div className="mt-6 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
            * Red light signal hesitation reduced from <strong>42%</strong> of transit duration to only <strong>8%</strong>.
          </div>
        </div>
      </div>

      {/* Corridor Benchmark Table */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800">
        <h3 className="text-base font-bold text-white mb-4">Major Urban Corridors Performance Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">CORRIDOR NAME</th>
                <th className="pb-3 font-semibold">BASELINE DURATION</th>
                <th className="pb-3 font-semibold">RESQCLEAR DURATION</th>
                <th className="pb-3 font-semibold">TIME SAVED</th>
                <th className="pb-3 font-semibold text-right">EFFICIENCY GAIN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {analyticsData.corridorPerformance.map((row, idx) => {
                const resQDuration = row.resQClear || row.ambuClear || 12;
                return (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 font-bold text-white flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{row.name}</span>
                    </td>
                    <td className="py-3.5 text-slate-400">{row.baseline} min</td>
                    <td className="py-3.5 text-emerald-400 font-bold">{resQDuration} min</td>
                    <td className="py-3.5 text-slate-200">{(row.baseline - resQDuration).toFixed(1)} min</td>
                    <td className="py-3.5 text-right text-emerald-400 font-extrabold">{row.efficiency}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

window.AnalyticsView = AnalyticsView;
