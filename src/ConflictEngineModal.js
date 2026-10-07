// resQClear Conflict Resolution Engine & Decision Factors Intelligence Panel
// Core Startup Intelligence: Decision Panel, Telemetry, Sequence, & Explainability
const { useState } = React;

function ConflictEnginePanel({ simState, onClose }) {
  const { conflictState = {}, ambulances = [], intersections = [] } = simState || {};
  const [showWhyModal, setShowWhyModal] = useState(false);

  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const stage = conflictState.stage || 'IDLE';
  const isDetected = stage === 'DETECTING' || stage === 'PREDICTING';
  const isAnalyzing = stage === 'ANALYZING' || stage === 'GENERATING_SEQUENCE';
  const isAActive = stage === 'PRIORITY_A' || stage === 'A_CLEARED';
  const isBActive = stage === 'PRIORITY_B';
  const isBothCleared = stage === 'BOTH_CLEARED';

  // Sequence Flow Stages for Visual Progress Tracker
  const sequenceStages = [
    { key: 'DETECTING', label: 'DETECTING' },
    { key: 'PREDICTING', label: 'PREDICTING' },
    { key: 'ANALYZING', label: 'ANALYZING CONFLICT' },
    { key: 'GENERATING', label: 'GENERATING SAFE SEQUENCE' },
    { key: 'PRIORITY_A', label: 'PRIORITY 01: AMB-104' },
    { key: 'A_CLEARED', label: 'INTERSECTION CLEARED' },
    { key: 'PRIORITY_B', label: 'PRIORITY 02: AMB-208' },
    { key: 'B_CLEARED', label: 'INTERSECTION CLEARED' },
    { key: 'BOTH_CLEARED', label: 'CONFLICT RESOLVED' }
  ];

  const getCurrentStepIndex = () => {
    switch (stage) {
      case 'DETECTING': return 0;
      case 'PREDICTING': return 1;
      case 'ANALYZING': return 2;
      case 'GENERATING_SEQUENCE': return 3;
      case 'PRIORITY_A': return 4;
      case 'A_CLEARED': return 5;
      case 'PRIORITY_B': return 6;
      case 'BOTH_CLEARED': return 8;
      default: return isBothCleared ? 8 : 4;
    }
  };

  const currentIdx = getCurrentStepIndex();

  return (
    <div className="glass-panel rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl bg-slate-950/95 space-y-5">
      {/* 1. Header & Junction Identifier */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Icons.ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-extrabold text-base sm:text-lg text-white">CONFLICT RESOLUTION ENGINE</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-bold uppercase">
                CORE AI MODEL
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              CONFLICT JUNCTION: <strong className="text-white">INT-04 (Central Conflict Junction)</strong> • Vector Collision Arbitration
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            CONFLICT RISK: <strong className="text-red-400">HIGH</strong>
          </span>
          <span className="px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
            CONFIDENCE: 96% (SIMULATION ESTIMATE)
          </span>
        </div>
      </div>

      {/* 2. Main High-Impact Dynamic Status Banner */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all ${
        isBothCleared
          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
          : isAActive || isBActive
          ? 'bg-cyan-950/30 border-cyan-500/50 text-cyan-300'
          : isAnalyzing
          ? 'bg-amber-950/30 border-amber-500/50 text-amber-300'
          : 'bg-red-950/40 border-red-500/50 text-red-300'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0">
            {isBothCleared ? (
              <Icons.CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <Icons.AlertTriangle className="w-5 h-5 text-amber-400 animate-pulse" />
            )}
          </div>
          <div>
            <div className="font-extrabold text-sm font-mono uppercase tracking-wide flex items-center space-x-2">
              <span>{conflictState.bannerText || '⚠ MULTIPLE EMERGENCY CONFLICT DETECTED'}</span>
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {conflictState.bannerSubtext || 'AMB-104 (North) & AMB-208 (South) converging on INT-04. AI-assisted sequence formulating.'}
            </div>
          </div>
        </div>

        {/* Explainability Button: WHY THIS DECISION? */}
        <button
          onClick={() => setShowWhyModal(true)}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-mono text-xs font-bold transition-all flex items-center space-x-1.5 flex-shrink-0"
        >
          <Icons.HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>WHY THIS DECISION?</span>
        </button>
      </div>

      {/* 3. Sequential Progress Timeline Bar */}
      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-2 flex justify-between">
          <span>AI ARBITRATION SEQUENCE PROGRESS</span>
          <span className="text-emerald-400">STAGE {currentIdx + 1} OF {sequenceStages.length}</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1 font-mono text-[9px] text-center">
          {sequenceStages.map((stg, i) => {
            const isPast = i < currentIdx;
            const isCurrent = i === currentIdx;
            return (
              <div
                key={stg.key}
                className={`p-1.5 rounded-lg border leading-tight transition-all ${
                  isCurrent
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md ring-1 ring-emerald-400'
                    : isPast
                    ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {stg.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Side-by-Side Dual Ambulance Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ambulance A Telemetry Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isAActive ? 'bg-emerald-950/30 border-emerald-500/70 shadow-lg shadow-emerald-950/50' : 'bg-slate-900/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping flex-shrink-0"></span>
              <span className="font-bold text-sm text-white whitespace-nowrap">{ambA.id || 'AMB-104'}</span>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">({ambA.name})</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/40 font-bold whitespace-nowrap">
              CRITICAL
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">ETA TO INT-04:</div>
              <div className="font-bold text-emerald-400 text-sm">{ambA.currentIntersectionEta || 43} sec</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">DISTANCE TO INT-04:</div>
              <div className="font-bold text-white text-sm">{ambA.distanceToConflict || 555} m</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">APPROACH VECTOR:</div>
              <div className="font-medium text-slate-200">North Link (Sector 1)</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">CURRENT SPEED:</div>
              <div className="font-bold text-slate-200">{ambA.speed || 42} km/h</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-xs font-mono">
            <span className="text-slate-400">RECOMMENDED SEQUENCE:</span>
            <span className="px-3 py-1 rounded bg-emerald-500 text-slate-950 font-bold">
              01 → PRIORITY 01
            </span>
          </div>
        </div>

        {/* Ambulance B Telemetry Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isBActive ? 'bg-emerald-950/30 border-emerald-500/70 shadow-lg shadow-emerald-950/50' : 'bg-slate-900/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0"></span>
              <span className="font-bold text-sm text-white whitespace-nowrap">{ambB.id || 'AMB-208'}</span>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">({ambB.name})</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/40 font-bold whitespace-nowrap">
              CRITICAL
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">ETA TO INT-04:</div>
              <div className="font-bold text-amber-400 text-sm">{ambB.currentIntersectionEta || 50} sec</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">DISTANCE TO INT-04:</div>
              <div className="font-bold text-white text-sm">{ambB.distanceToConflict || 555} m</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">APPROACH VECTOR:</div>
              <div className="font-medium text-slate-200">South Link (Sector 2)</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">CURRENT SPEED:</div>
              <div className="font-bold text-slate-200">{ambB.speed || 40} km/h</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-xs font-mono">
            <span className="text-slate-400">RECOMMENDED SEQUENCE:</span>
            <span className={`px-3 py-1 rounded font-bold ${
              isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              02 → PRIORITY 02
            </span>
          </div>
        </div>
      </div>

      {/* 5. DECISION FACTORS & ARBITRATION MATRIX */}
      <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">DECISION FACTORS & ARBITRATION MATRIX</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-slate-400">DECISION CONFIDENCE:</span>
            <span className="font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              96% (SIMULATION ESTIMATE)
            </span>
          </div>
        </div>

        {/* 6 Core Decision Factors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• ETA</div>
            <div className="font-bold text-emerald-400 mt-0.5">43s vs 50s</div>
            <div className="text-[9px] text-slate-500">7s Delta</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Distance</div>
            <div className="font-bold text-white mt-0.5">555m vs 555m</div>
            <div className="text-[9px] text-slate-500">Equal Radius</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Approach Vector</div>
            <div className="font-bold text-white mt-0.5">North vs South</div>
            <div className="text-[9px] text-slate-500">Cross-axis</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Occupancy</div>
            <div className="font-bold text-amber-400 mt-0.5">1 Vehicle/Slot</div>
            <div className="text-[9px] text-slate-500">Non-simultaneous</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Traffic Density</div>
            <div className="font-bold text-red-400 mt-0.5">High (+2.4m)</div>
            <div className="text-[9px] text-slate-500">Anna Salai Link</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Conflict Risk</div>
            <div className="font-bold text-red-400 mt-0.5">HIGH</div>
            <div className="text-[9px] text-slate-500">Simultaneous Demand</div>
          </div>
        </div>

        {/* Recommended Sequence & Reason */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase">RECOMMENDED SEQUENCE</div>
            <div className="font-mono font-extrabold text-emerald-400 text-sm mt-0.5">
              01 → AMB-104 &nbsp;|&nbsp; 02 → AMB-208
            </div>
            <div className="text-slate-300 mt-1">
              <strong>Reason:</strong> "Sequential clearance minimizes simultaneous intersection occupancy."
            </div>
          </div>

          <div className="text-right font-mono text-[11px] text-slate-400 flex-shrink-0">
            <div>SIMULATED SIGNAL CONTROL:</div>
            <strong className="text-emerald-400">{conflictState.signalPhase || 'NORMAL CYCLE'}</strong>
          </div>
        </div>
      </div>

      {/* 6. Emergency Corridor Visualization */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300 font-bold uppercase">EMERGENCY CORRIDOR VISUALIZATION</span>
          <span className="text-slate-400">
            CORRIDOR STATUS: <strong className={isBothCleared ? 'text-teal-300' : isAActive || isBActive ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}>
              {isBothCleared ? 'CLEARED' : isAActive || isBActive ? 'ACTIVE' : 'INACTIVE'}
            </strong>
          </span>
        </div>

        <div className="flex items-center justify-between overflow-x-auto py-2 px-1 text-xs font-mono text-center gap-2">
          <div className="p-2 rounded-lg bg-slate-950 border border-red-500/40 text-red-400 min-w-[100px]">
            <Icons.Ambulance className="w-4 h-4 mx-auto mb-1 text-red-400" />
            <span className="font-bold">AMBULANCE</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]">
            <span className="text-[10px] text-slate-500 block">NODE 1</span>
            <span className="font-bold text-white">INT-01</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]">
            <span className="text-[10px] text-slate-500 block">NODE 2</span>
            <span className="font-bold text-white">INT-02</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-emerald-500/50 text-emerald-400 min-w-[120px] ring-1 ring-emerald-500/30">
            <span className="text-[10px] text-emerald-500 block">CONFLICT JUNCTION</span>
            <span className="font-bold text-emerald-300">INT-04</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]">
            <span className="text-[10px] text-slate-500 block">NODE 3</span>
            <span className="font-bold text-white">INT-06</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-emerald-500/40 text-emerald-400 min-w-[110px]">
            <Icons.Hospital className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <span className="font-bold">HOSPITAL</span>
          </div>
        </div>
      </div>

      {/* 7. "WHY THIS DECISION?" Explainability Modal */}
      {showWhyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="max-w-xl w-full bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl space-y-4 font-sans">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Icons.HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">Why This Decision?</h3>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">TRANSPARENT AI EXPLAINABILITY</span>
                </div>
              </div>
              <button
                onClick={() => setShowWhyModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed">
              <strong className="text-white">Core Arbitration Summary:</strong><br />
              "AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy."
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="font-mono text-slate-400 font-bold uppercase text-[10px]">Key Factors Evaluated:</div>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>ETA Delta:</strong> AMB-104 predicted ETA is 43s vs AMB-208 ETA of 50s.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Momentum Preservation:</strong> Sequential green wave allows AMB-104 to clear INT-04 without deceleration, leaving the intersection open for AMB-208.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Deadlock Prevention:</strong> Eliminates cross-axis convergence where both vehicles arrive concurrently.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Simulated Signal Control:</strong> Phase transfer occurs automatically the moment AMB-104 passes the intersection boundary.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowWhyModal(false)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs transition-all"
              >
                Close Explanation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.ConflictEnginePanel = ConflictEnginePanel;
