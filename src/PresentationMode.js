// resQClear Startup Presentation & Pitch Mode Component
// Cinematic, High-Density Operations Deck for Investors & Municipal Stakeholders
const { useState, useEffect } = React;

function PresentationMode({ simState, onExit, onRunScenario }) {
  const { conflictState = {}, liveMetrics = {}, ambulances = [], events = [], intersections = [] } = simState || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const narrativeSteps = [
    {
      id: 1,
      tag: 'STEP 01',
      title: 'NORMAL TRAFFIC ACTIVE',
      desc: 'Urban grid operates under standard cyclic signal phasing across all 6 intersections.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 2,
      tag: 'STEP 02',
      title: 'AMBULANCE A DISPATCHED (CARDIAC)',
      desc: 'AMB-104 dispatched from Anna Nagar heading toward Government Hospital under Critical STEMI triage.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 3,
      tag: 'STEP 03',
      title: 'AMBULANCE B DISPATCHED (POLYTRAUMA)',
      desc: 'AMB-208 dispatched simultaneously from T. Nagar heading toward Apollo Hospital.',
      icon: Icons.Ambulance,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 4,
      tag: 'STEP 04',
      title: 'CROSS-AXIS CONFLICT DETECTED',
      desc: 'resQClear detects both critical ALS units converging on INT-04 simultaneously (43s vs 50s ETA).',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 5,
      tag: 'STEP 05',
      title: 'AI-ASSISTED SEQUENCE GENERATED',
      desc: 'Scoring model evaluates ETA, approach vectors, and occupancy: Priority 01 granted to AMB-104 (7s earlier).',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    },
    {
      id: 6,
      tag: 'STEP 06',
      title: 'SIMULATED GREEN CORRIDOR: AMB-104',
      desc: 'Emergency green wave locked for North link. AMB-104 proceeds through INT-04 with zero deceleration.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 7,
      tag: 'STEP 07',
      title: 'AMB-104 INTERSECTION CLEARED',
      desc: 'AMB-104 clears conflict zone. System immediately transitions signal phase to secondary corridor.',
      icon: Icons.CheckCircle2,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    },
    {
      id: 8,
      tag: 'STEP 08',
      title: 'SIMULATED GREEN CORRIDOR: AMB-208',
      desc: 'South corridor green wave active. AMB-208 proceeds through INT-04 smoothly without complete stop.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 9,
      tag: 'STEP 09',
      title: 'AMB-208 INTERSECTION CLEARED',
      desc: 'Secondary critical vehicle safely cleared without cross-axis deadlock or emergency braking.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 10,
      tag: 'STEP 10',
      title: 'CONFLICT RESOLVED & CYCLES RESTORED',
      desc: 'Both emergency routes coordinated successfully. Simulated delay avoided: 2m 18s.',
      icon: Icons.ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }
  ];

  // Map simulation state to active narrative slide
  useEffect(() => {
    if (conflictState.stage === 'DETECTING') setCurrentSlide(3);
    else if (conflictState.stage === 'ANALYZING') setCurrentSlide(4);
    else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(5);
    else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(6);
    else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(7);
    else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(9);
  }, [conflictState.stage]);

  const activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-300 overflow-y-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <ResQClearLogo />
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold">
            PRESENTATION MODE • PITCH DECK
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setCurrentSlide(0);
              onRunScenario();
            }}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center space-x-2 transition-all shadow-lg shadow-emerald-500/20"
          >
            <Icons.Zap className="w-4 h-4" />
            <span>Launch Automated Scenario</span>
          </button>

          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-all"
          >
            Exit Presentation
          </button>
        </div>
      </div>

      {/* Main Presentation Grid: MAP, AMBULANCES, CONFLICT ENGINE, SIGNAL, TIMELINE, METRICS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-4">
        {/* Left Side (7 Cols): MAP HERO */}
        <div className="lg:col-span-7 h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
          <LiveMap simState={simState} />
        </div>

        {/* Right Side (5 Cols): CONFLICT ENGINE + TELEMETRY + TIMELINE + NARRATIVE */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Narrative Slide */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${activeStep.border} ${activeStep.color} bg-slate-950`}>
                {activeStep.tag} • STEP {currentSlide + 1} OF 10
              </span>
              <span className="text-xs font-mono text-slate-400">PITCH STORY</span>
            </div>

            <div className="flex items-start space-x-3.5 my-2">
              <div className={`p-3 rounded-2xl bg-slate-950 border ${activeStep.border} ${activeStep.color} flex-shrink-0`}>
                <activeStep.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                  {activeStep.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeStep.desc}
                </p>
              </div>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center space-x-1.5 pt-4 border-t border-slate-800/80 overflow-x-auto">
              {narrativeSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          {/* Key Ambulances & Conflict State Snapshot */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white">AMB-104</span>
                <span className="text-[10px] text-red-400 font-bold">CRITICAL</span>
              </div>
              <div className="text-slate-400 text-[11px]">ETA: <strong className="text-emerald-400">{ambA.currentIntersectionEta || 43}s</strong></div>
              <div className="text-slate-400 text-[11px]">Distance: <strong className="text-white">{ambA.distanceToConflict || 555}m</strong></div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1">PRIORITY 01</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white">AMB-208</span>
                <span className="text-[10px] text-red-400 font-bold">CRITICAL</span>
              </div>
              <div className="text-slate-400 text-[11px]">ETA: <strong className="text-amber-400">{ambB.currentIntersectionEta || 50}s</strong></div>
              <div className="text-slate-400 text-[11px]">Distance: <strong className="text-white">{ambB.distanceToConflict || 555}m</strong></div>
              <div className="text-[10px] text-slate-300 font-bold mt-1">PRIORITY 02</div>
            </div>
          </div>

          {/* Traffic Signal Simulation Indicator */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-2">
              <Icons.TrafficLight className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400">INT-04 SIGNAL PHASE:</span>
            </div>
            <strong className="text-emerald-400">{conflictState.signalPhase || 'NORMAL CYCLE'}</strong>
          </div>

          {/* Metrics Summary */}
          <div className="grid grid-cols-3 gap-2 font-mono text-center">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-base font-extrabold text-white">2</div>
              <div className="text-[9px] text-slate-400">Ambulances Coordinated</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-base font-extrabold text-teal-300">1</div>
              <div className="text-[9px] text-slate-400">Conflict Junction</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-base font-extrabold text-emerald-400">2m 18s</div>
              <div className="text-[9px] text-slate-400">Est. Delay Avoided</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Navigation */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-white font-bold transition-all"
        >
          ← Previous
        </button>

        <span className="hidden sm:inline">resQClear: “Clear the way. Save lives.” • Simulation Prototype</span>

        <button
          onClick={() => setCurrentSlide(Math.min(narrativeSteps.length - 1, currentSlide + 1))}
          disabled={currentSlide === narrativeSteps.length - 1}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

window.PresentationMode = PresentationMode;
