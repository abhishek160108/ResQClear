// resQClear Settings & Simulation Parameters View
const { useState } = React;

function SettingsView({ simState, onReset }) {
  const [cityGrid, setCityGrid] = useState('chennai');
  const [v2xLatency, setV2xLatency] = useState(25);
  const [conflictHorizon, setConflictHorizon] = useState(300);
  const [greenWaveLead, setGreenWaveLead] = useState(15);
  const [autoReroute, setAutoReroute] = useState(true);

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-slate-800">
        <h2 className="text-2xl font-extrabold text-white">Simulation Engine & V2X Parameters</h2>
        <p className="text-sm text-slate-400">Configure simulated smart-city parameters, mesh latency, and algorithmic thresholds.</p>
      </div>

      <div className="space-y-6">
        {/* City Grid Selection */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Icons.Compass className="w-5 h-5 text-emerald-400" />
            <span>Target Urban Simulation Grid</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'chennai', name: 'Chennai Central Grid', desc: 'Anna Salai & Poonamallee corridors (Active)', active: true },
              { id: 'bengaluru', name: 'Bengaluru Silk Board Grid', desc: 'High-density Outer Ring Road test scenario', active: false },
              { id: 'mumbai', name: 'Mumbai Western Express Grid', desc: 'Flyover & coastal arterial mesh modeling', active: false }
            ].map((grid) => (
              <button
                key={grid.id}
                onClick={() => setCityGrid(grid.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  cityGrid === grid.id
                    ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-sm text-white">{grid.name}</div>
                <div className="text-xs text-slate-400 mt-1">{grid.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Algorithm Parameters */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Icons.Cpu className="w-5 h-5 text-cyan-400" />
            <span>AI Conflict Engine Thresholds</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Conflict Detection Radius (Horizon):</span>
                <strong className="text-emerald-400">{conflictHorizon} meters</strong>
              </div>
              <input
                type="range"
                min="100"
                max="600"
                step="50"
                value={conflictHorizon}
                onChange={(e) => setConflictHorizon(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Distance at which converging emergency trajectories trigger arbitration</span>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Green Wave Pre-emption Lead Time:</span>
                <strong className="text-emerald-400">{greenWaveLead} seconds</strong>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={greenWaveLead}
                onChange={(e) => setGreenWaveLead(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Seconds before ambulance arrival to transition signals through Yellow to Green</span>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Simulated V2X Mesh Latency:</span>
                <strong className="text-teal-300">{v2xLatency} ms</strong>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={v2xLatency}
                onChange={(e) => setV2xLatency(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Simulated latency for edge node packet transmission</span>
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-slate-300 mb-2">Dynamic Congestion Auto-Bypass:</span>
              <button
                onClick={() => setAutoReroute(!autoReroute)}
                className={`p-3 rounded-xl border font-bold flex items-center justify-between ${
                  autoReroute
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                <span>{autoReroute ? 'ENABLED (AUTOMATIC)' : 'MANUAL CONFIRMATION'}</span>
                <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Prototype Reset */}
        <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-white">Reset Simulation Database</h4>
            <p className="text-xs text-slate-400 mt-0.5">Restore all vehicle positions, traffic light cycles, and telemetry caches.</p>
          </div>
          <button
            onClick={onReset}
            className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-mono font-bold transition-all"
          >
            Reset All State
          </button>
        </div>
      </div>
    </div>
  );
}

window.SettingsView = SettingsView;
