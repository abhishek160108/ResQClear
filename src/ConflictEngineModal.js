// resQClear Multi-Ambulance Conflict Engine Panel Component

function ConflictEnginePanel({ simState, onClose }) {
  const { conflictState = {}, ambulances = [], intersections = [] } = simState || {};
  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const isResolving = conflictState.stage === 'RESOLVING' || conflictState.stage === 'DETECTED';
  const isAActive = conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'A_CLEARED';
  const isBActive = conflictState.stage === 'PRIORITY_B';
  const isBothCleared = conflictState.stage === 'BOTH_CLEARED';

  return (
    <div className="glass-panel rounded-2xl border border-slate-700/80 p-5 shadow-2xl bg-slate-950/95">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Icons.ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white">Emergency Conflict Resolution Engine</h3>
            <p className="text-xs text-slate-400 font-mono">Central Conflict Junction (Int. 4) • Convergence Horizon</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
            ENGINE: <strong className="text-emerald-400">V2X-OPT-v4</strong>
          </span>
          {isBothCleared ? (
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              RESOLVED (100% CLEAR)
            </span>
          ) : (
            <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold animate-pulse">
              LIVE ARBITRATION
            </span>
          )}
        </div>
      </div>

      {/* Side-by-Side Telemetry Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        {/* Ambulance A Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isAActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-sm text-white">Ambulance A (AMB-104)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
              CRITICAL
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">ETA to Intersection:</span>
              <span className="font-bold text-emerald-400">{ambA.currentIntersectionEta || 12} sec</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Distance to Junction:</span>
              <span className="font-bold text-white">{ambA.distanceToConflict || 180} m</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Acuity / Condition:</span>
              <span className="text-red-300 font-bold">STEMI (Acute Cardiac)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Current Velocity:</span>
              <span>{ambA.speed || 46} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">PRIORITY STATUS:</span>
            <span className={`font-mono font-bold px-2 py-0.5 rounded ${
              isAActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              PRIORITY 01
            </span>
          </div>
        </div>

        {/* Ambulance B Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isBActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="font-bold text-sm text-white">Ambulance B (AMB-208)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
              CRITICAL
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">ETA to Intersection:</span>
              <span className="font-bold text-amber-400">{ambB.currentIntersectionEta || 19} sec</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Distance to Junction:</span>
              <span className="font-bold text-white">{ambB.distanceToConflict || 290} m</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Acuity / Condition:</span>
              <span className="text-amber-300 font-bold">Polytrauma (Level 1)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Current Velocity:</span>
              <span>{ambB.speed || 40} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">PRIORITY STATUS:</span>
            <span className={`font-mono font-bold px-2 py-0.5 rounded ${
              isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              PRIORITY 02 (Secondary)
            </span>
          </div>
        </div>
      </div>

      {/* AI Decision Box */}
      <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase">System Decision & Arbitration</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-400">Confidence:</span>
            <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              96% (High Fidelity)
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 my-2">
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            A → B
          </div>
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong>Reason:</strong> Safest sequential clearance based on predicted arrival time (12s vs 19s) and cross-axis intersection conflict.
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Sequential Stage: <strong className="text-white">{conflictState.stage || 'IDLE'}</strong></span>
          <span>Collision Probability: <strong className="text-emerald-400">0.00% (Locked Green Wave)</strong></span>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="mt-4 text-center text-[10px] font-mono text-slate-400 flex items-center justify-center space-x-1.5">
        <Icons.AlertTriangle className="w-3.5 h-3.5 text-amber-500/80" />
        <span>Simulation decision — not connected to real traffic infrastructure.</span>
      </div>
    </div>
  );
}

window.ConflictEnginePanel = ConflictEnginePanel;
