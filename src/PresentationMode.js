// resQClear Startup Pitch Presentation Mode Component
const { useState, useEffect } = React;

function PresentationMode({ simState, onExit, onRunScenario }) {
  const { conflictState = {}, scenarioStep = 1, liveMetrics = {} } = simState || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const narrativeSteps = [
    {
      id: 1,
      tag: 'PHASE 01',
      title: 'AMBULANCE EMERGENCY DETECTED',
      desc: 'High-priority cardiac alert dispatched from Anna Nagar. resQClear telemetry engine immediately acquires ALS vehicle location.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 2,
      tag: 'PHASE 02',
      title: 'TRAFFIC CONGESTION PREDICTED',
      desc: 'Predictive neural mesh identifies heavy bottleneck along primary arterial (+2.4 min delay). Dynamic alternate corridor pre-calculated.',
      icon: Icons.Activity,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 3,
      tag: 'PHASE 03',
      title: 'MULTIPLE EMERGENCY VEHICLES DETECTED',
      desc: 'Simultaneous ALS dispatch from T. Nagar converging on Central Junction 4. Collision risk probability reaches 94.2%.',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 4,
      tag: 'PHASE 04',
      title: 'AI CONFLICT RESOLUTION',
      desc: 'AI Decision Engine evaluates arrival ETA (12s vs 19s) and patient acuity. Grants Priority 01 to Ambulance A; buffers Ambulance B.',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    },
    {
      id: 5,
      tag: 'PHASE 05',
      title: 'EMERGENCY CORRIDOR CREATED',
      desc: 'North-South traffic signals dynamically transition to green wave. Civilian traffic guided to yield safely.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 6,
      tag: 'PHASE 06',
      title: 'AMBULANCE A CLEARED',
      desc: 'Ambulance A safely crosses Central Junction at full speed with zero deceleration.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 7,
      tag: 'PHASE 07',
      title: 'AMBULANCE B CLEARED',
      desc: 'Signal phase shifts seamlessly to secondary corridor. Ambulance B clears intersection without coming to a complete stop.',
      icon: Icons.CheckCircle2,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    },
    {
      id: 8,
      tag: 'PHASE 08',
      title: 'ROUTE COMPLETE & IMPACT ACHIEVED',
      desc: 'Both patients successfully delivered to ER trauma teams with verified arrival synchronization.',
      icon: Icons.Hospital,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }
  ];

  // Map simulation state to active narrative slide
  useEffect(() => {
    if (conflictState.stage === 'DETECTED') setCurrentSlide(2);
    else if (conflictState.stage === 'RESOLVING') setCurrentSlide(3);
    else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(4);
    else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(5);
    else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(6);
    else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(7);
  }, [conflictState.stage]);

  const activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <ResQClearLogo />
          <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold">
            STARTUP PITCH & DEMO MODE
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onRunScenario()}
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
                {activeStep.tag} • STEP {currentSlide + 1} OF 8
              </span>
              <span className="text-xs font-mono text-slate-400">RESQCLEAR AI V2X</span>
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
            <div className="flex items-center space-x-2 pt-6 border-t border-slate-800/80">
              {narrativeSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Impact Results Box (Shown when near or at final step) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-3 flex items-center space-x-2">
              <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Demonstrated Outcome Summary</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center font-mono">
              <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xl sm:text-2xl font-extrabold text-white">2</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Vehicles Coordinated</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400">4</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Intersections Cleared</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">3.6 min</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Simulated Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="text-center text-xs font-mono text-slate-400 pt-3 border-t border-slate-900">
        resQClear is a simulation prototype. Traffic-signal control shown in this demo is not connected to real-world infrastructure.
      </div>
    </div>
  );
}

window.PresentationMode = PresentationMode;
