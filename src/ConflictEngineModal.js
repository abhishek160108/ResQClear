// resQClear Multi-Ambulance Conflict Engine & Decision Factors Panel
const { useState } = React;

function ConflictEnginePanel({ simState, onClose }) {
  const { conflictState = {}, ambulances = [], intersections = [] } = simState || {};
  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const isDetected = conflictState.stage === 'DETECTED';
  const isResolving = conflictState.stage === 'RESOLVING';
  const isAActive = conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'A_CLEARED';
  const isBActive = conflictState.stage === 'PRIORITY_B';
  const isBothCleared = conflictState.stage === 'BOTH_CLEARED';

  return (
    <div className="glass-panel rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl bg-slate-950/95 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Icons.ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-extrabold text-base sm:text-lg text-white">CRITICAL MULTI-AMBULANCE EVENT</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                SIMULATION
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Convergence Node: Central Conflict Junction (INT-04) • AMB-104 & AMB-208
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
            ENGINE: <strong className="text-emerald-400">AI-V2X ARBITRATION</strong>
          </span>
          {isBothCleared ? (
            <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center space-x-1.5">
              <Icons.CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONFLICT RESOLVED</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold animate-pulse">
              AI-ASSISTED DECISION IN PROGRESS
            </span>
          )}
        </div>
      </div>

      {/* Main Status Alert Banner */}
      <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
        isBothCleared
          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
          : isAActive || isBActive
          ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300'
          : isResolving
          ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
          : 'bg-red-950/40 border-red-500/50 text-red-300'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            {isBothCleared ? (
              <Icons.CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <Icons.AlertTriangle className="w-5 h-5 text-amber-400 animate-pulse" />
            )}
          </div>
          <div>
            <div className="font-extrabold text-sm font-mono uppercase tracking-wide">
              {conflictState.bannerText || 'MULTIPLE EMERGENCY CONFLICT DETECTED'}
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {conflictState.bannerSubtext || 'Two critical ALS units approaching the same intersection from opposing vectors.'}
            </div>
          </div>
        </div>

        <div className="hidden sm:block text-right font-mono text-xs">
          <div className="text-slate-400 text-[10px]">SEQUENCE STATUS</div>
          <div className="font-bold text-white">
            {isBothCleared ? 'SAFE CORRIDOR COMPLETED' : isBActive ? 'STAGE 02 / 02' : isAActive ? 'STAGE 01 / 02' : 'ARBITRATING'}
          </div>
        </div>
      </div>

      {/* Side-by-Side Telemetry & Approach Direction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ambulance A Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isAActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-sm text-white">AMB-104 (Ambulance A)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
              CRITICAL
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Target Node:</span>
              <span className="font-bold text-white">INT-04 (Central Conflict)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Approach Vector:</span>
              <span className="font-medium text-slate-200">North Corridors (Anna Nagar)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Destination:</span>
              <span className="font-medium text-emerald-400">Government Hospital</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Distance to INT-04:</span>
              <span className="font-bold text-white">{ambA.distanceToConflict || 180} m</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Intersection ETA:</span>
              <span className="font-bold text-emerald-400">{ambA.currentIntersectionEta || 43} sec</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Current Velocity:</span>
              <span>{ambA.speed || 46} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">COORDINATION PRIORITY:</span>
            <span className={`font-mono font-bold px-2.5 py-0.5 rounded ${
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
              <span className="font-bold text-sm text-white">AMB-208 (Ambulance B)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
              CRITICAL
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Target Node:</span>
              <span className="font-bold text-white">INT-04 (Central Conflict)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Approach Vector:</span>
              <span className="font-medium text-slate-200">South Link (T. Nagar)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Destination:</span>
              <span className="font-medium text-emerald-400">Apollo Hospital</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Distance to INT-04:</span>
              <span className="font-bold text-white">{ambB.distanceToConflict || 290} m</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Intersection ETA:</span>
              <span className="font-bold text-amber-400">{ambB.currentIntersectionEta || 50} sec</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Current Velocity:</span>
              <span>{ambB.speed || 40} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">COORDINATION PRIORITY:</span>
            <span className={`font-mono font-bold px-2.5 py-0.5 rounded ${
              isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              PRIORITY 02 (Secondary)
            </span>
          </div>
        </div>
      </div>

      {/* Transparent Decision Factors Scoring Model */}
      <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">DECISION FACTORS & ARBITRATION MATRIX</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-slate-400">Confidence:</span>
            <span className="font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              96% (SIMULATION ESTIMATE)
            </span>
          </div>
        </div>

        {/* Factors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">ETA to Intersection</div>
            <div className="font-bold text-white mt-0.5">AMB-104: 43s</div>
            <div className="text-slate-400">AMB-208: 50s</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Emergency Severity</div>
            <div className="font-bold text-red-400 mt-0.5">AMB-104: Critical</div>
            <div className="text-red-400">AMB-208: Critical</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Conflict Probability</div>
            <div className="font-bold text-red-400 mt-0.5">HIGH (Cross-Axis)</div>
            <div className="text-slate-400">Overlap: 6.2s window</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Recommended Sequence</div>
            <div className="font-extrabold text-emerald-400 mt-0.5">AMB-104 → AMB-208</div>
            <div className="text-slate-400">Sequential Clearance</div>
          </div>
        </div>

        {/* Reason Explanation */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <strong className="text-emerald-400 font-mono">Arbitration Reason:</strong> AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict and maintains continuous vehicle momentum.
        </div>

        {/* Sequence Progress Tracker */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-mono">
          <div className={`p-2.5 rounded-lg border flex items-center space-x-2 ${
            isAActive || isBActive || isBothCleared ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}>
            <span className="font-bold">1.</span>
            <span>AMB-104 PRIORITY 01</span>
            {isAActive && <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />}
          </div>

          <div className={`p-2.5 rounded-lg border flex items-center space-x-2 ${
            isBActive || isBothCleared ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}>
            <span className="font-bold">2.</span>
            <span>AMB-208 PRIORITY 02</span>
            {isBActive && <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />}
          </div>

          <div className={`p-2.5 rounded-lg border flex items-center space-x-2 ${
            isBothCleared ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}>
            <span className="font-bold">3.</span>
            <span>CONFLICT RESOLVED</span>
            {isBothCleared && <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />}
          </div>
        </div>
      </div>

      {/* Disclaimers & Regulatory Positioning */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center space-x-1.5">
          <Icons.Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>Traffic coordination priority • Emergency severity provided by authorized emergency personnel.</span>
        </div>
        <div className="flex items-center space-x-1.5 text-slate-400">
          <Icons.AlertTriangle className="w-3.5 h-3.5 text-amber-500/80" />
          <span>Simulation decision — not connected to real traffic infrastructure.</span>
        </div>
      </div>
    </div>
  );
}

window.ConflictEnginePanel = ConflictEnginePanel;
