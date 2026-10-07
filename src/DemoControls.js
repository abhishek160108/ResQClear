// resQClear Dedicated Simulation Demo Controls Bar
// Enterprise Control Room Actions: Playback, Hero Scenario, Speed, and Event Injections
const { useState } = React;

function DemoControls({ simState, onRunScenario, onStart, onPause, onReset, onTriggerA, onTriggerB, onTriggerBoth, onCreateJam, onClearJam, onSetSpeed, onToggleSound, soundEnabled }) {
  const { isRunning, speedMultiplier, scenarioRunning, scenarioStep } = simState || {};

  return (
    <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl flex flex-wrap items-center justify-between gap-3">
      {/* Left Group: HERO BUTTON (RUN EMERGENCY SCENARIO) */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onRunScenario}
          className={`relative px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm font-mono flex items-center space-x-2 transition-all shadow-xl ${
            scenarioRunning
              ? 'bg-gradient-to-r from-red-500 to-emerald-500 text-slate-950 ring-2 ring-emerald-400 animate-pulse'
              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30 hover:scale-105'
          }`}
        >
          <Icons.Zap className="w-4 h-4 text-slate-950" />
          <span>RUN EMERGENCY SCENARIO</span>
        </button>

        {/* Step Indicator when Scenario is Running */}
        {scenarioRunning && (
          <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-400">STEP:</span>
            <span className="text-emerald-400 font-bold">{scenarioStep || 1} / 16</span>
          </div>
        )}
      </div>

      {/* Middle Group: Standard Playback Controls */}
      <div className="flex items-center space-x-2">
        {isRunning ? (
          <button
            onClick={onPause}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 hover:border-slate-600 transition-all"
            title="Pause Simulation"
          >
            <Icons.Pause className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onStart}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 hover:border-slate-600 transition-all"
            title="Start Simulation"
          >
            <Icons.Play className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={onReset}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 transition-all"
          title="Reset Simulation"
        >
          <Icons.RotateCcw className="w-4 h-4" />
        </button>

        {/* Speed Multipliers */}
        <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px] font-mono">
          {[1.0, 1.5, 2.0, 4.0].map((spd) => (
            <button
              key={spd}
              onClick={() => onSetSpeed(spd)}
              className={`px-2 py-0.5 rounded-lg transition-all ${
                speedMultiplier === spd ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>

      {/* Right Group: Manual Event Injections */}
      <div className="flex flex-wrap items-center space-x-2 text-xs font-mono">
        <button
          onClick={onTriggerBoth}
          className="px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-all font-semibold flex items-center space-x-1"
        >
          <Icons.AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span>Both Emergencies</span>
        </button>

        <button
          onClick={onTriggerA}
          className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
        >
          Ambulance A
        </button>

        <button
          onClick={onTriggerB}
          className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
        >
          Ambulance B
        </button>

        <button
          onClick={onCreateJam}
          className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all"
          title="Inject Traffic Jam"
        >
          Traffic Jam
        </button>

        <button
          onClick={onClearJam}
          className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700 transition-all"
          title="Clear Traffic Jam"
        >
          Clear Jam
        </button>

        {/* Audio Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-1.5 rounded-lg border transition-all ${
            soundEnabled
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-slate-900 text-slate-500 border-slate-800'
          }`}
          title={soundEnabled ? 'Mute Radio Sound FX' : 'Enable Radio Sound FX'}
        >
          {soundEnabled ? <Icons.Volume2 className="w-4 h-4" /> : <Icons.VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

window.DemoControls = DemoControls;
