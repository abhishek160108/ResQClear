// resQClear Startup Pitch Presentation Mode Component
const { useState, useEffect } = React;

function PresentationMode({ simState, onExit, onRunScenario }) {
  const { conflictState = {}, liveMetrics = {} } = simState || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const narrativeSteps = [
    {
      id: 1,
      tag: 'STEP 01',
      title: 'EMERGENCY DETECTED',
      desc: 'High-priority cardiac alert dispatched from Anna Nagar. resQClear vehicle telemetry immediately acquires emergency unit location.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 2,
      tag: 'STEP 02',
      title: 'TRAFFIC CONGESTION PREDICTED',
      desc: 'Predictive neural model detects severe bottleneck (+2.4 min delay) along primary arterial corridor.',
      icon: Icons.Activity,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 3,
      tag: 'STEP 03',
      title: 'MULTIPLE EMERGENCY VEHICLES DETECTED',
      desc: 'Secondary critical ALS unit dispatched simultaneously from T. Nagar heading toward Apollo Hospital.',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 4,
      tag: 'STEP 04',
      title: 'CONFLICT INTERSECTION IDENTIFIED',
      desc: 'Convergence analysis identifies impending simultaneous arrival at Intersection 4 (Central Conflict Junction).',
      icon: Icons.Crosshair,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 5,
      tag: 'STEP 05',
      title: 'AI-ASSISTED CONFLICT RESOLUTION',
      desc: 'Transparent scoring model evaluates ETA (43s vs 50s), distance, and turning movements to formulate sequential priority.',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    },
    {
      id: 6,
      tag: 'STEP 06',
      title: 'AMB-104 — PRIORITY 01',
      desc: 'Simulated emergency corridor locked on North-South axis. Traffic signal turns green for AMB-104.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 7,
      tag: 'STEP 07',
      title: 'INTERSECTION CLEARED',
      desc: 'AMB-104 safely clears intersection without deceleration. System immediately initiates phase transfer.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 8,
      tag: 'STEP 08',
      title: 'AMB-208 — PRIORITY 02',
      desc: 'South corridor emergency green wave activated for AMB-208. Secondary clearance proceeds smoothly.',
      icon: Icons.TrafficLight,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    },
    {
      id: 9,
      tag: 'STEP 09',
      title: 'INTERSECTION CLEARED',
      desc: 'AMB-208 clears intersection safely without coming to a complete stop.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 10,
      tag: 'STEP 10',
      title: 'EMERGENCY ROUTES COORDINATED',
      desc: 'Both emergency routes coordinated successfully. Traffic signal returns to normal municipal cycle.',
      icon: Icons.ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }
  ];

  // Map simulation state to active narrative slide
  useEffect(() => {
    if (conflictState.stage === 'DETECTED') setCurrentSlide(2);
    else if (conflictState.stage === 'RESOLVING') setCurrentSlide(4);
    else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(5);
    else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(6);
    else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(7);
    else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(9);
  }, [conflictState.stage]);

  const activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];
  const isFinalSlide = currentSlide === narrativeSteps.length - 1;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <ResQClearLogo />
          <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold">
            PRESENTATION MODE • INVESTOR / HACKATHON DEMO
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
            <span>Re-Run Live Scenario</span>
          </button>

          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-all"
          >
            Exit Presentation Mode
          </button>
        </div>
      </div>

      {/* Main Presentation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        {/* Left Side: Live Simulation Map View */}
        <div className="lg:col-span-7 h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
          <LiveMap simState={simState} />
        </div>

        {/* Right Side: High-Impact Narrative Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Top Indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${activeStep.border} ${activeStep.color} bg-slate-950`}>
                {activeStep.tag} • STEP {currentSlide + 1} OF 10
              </span>
              <span className="text-xs font-mono text-slate-400">SIMULATION DEMO</span>
            </div>

            <div className="flex items-start space-x-4 my-4">
              <div className={`p-3.5 rounded-2xl bg-slate-950 border ${activeStep.border} ${activeStep.color}`}>
                <activeStep.icon className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {activeStep.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>
            </div>

            {/* Step Navigation Dots */}
            <div className="flex items-center space-x-1.5 pt-6 border-t border-slate-800/80 overflow-x-auto pb-1">
              {narrativeSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          {/* Impact Summary Metrics / Final Slide Summary */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
              SIMULATED DEMO IMPACT
            </div>

            <div className="grid grid-cols-3 gap-3 font-mono">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-emerald-400">2</div>
                <div className="text-[10px] text-slate-400 leading-tight">Ambulances Coordinated</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-teal-300">1</div>
                <div className="text-[10px] text-slate-400 leading-tight">Conflict Node Resolved</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-cyan-400">2m 18s</div>
                <div className="text-[10px] text-slate-400 leading-tight">Est. Delay Avoided</div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-400 text-center pt-1">
              resQClear: “Clear the way. Save lives.” • Simulation Prototype
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-white font-bold transition-all"
        >
          ← Previous Step
        </button>

        <span className="hidden sm:inline">Use controls or run scenario to observe dynamic progression</span>

        <button
          onClick={() => setCurrentSlide(Math.min(narrativeSteps.length - 1, currentSlide + 1))}
          disabled={currentSlide === narrativeSteps.length - 1}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-all"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}

window.PresentationMode = PresentationMode;
