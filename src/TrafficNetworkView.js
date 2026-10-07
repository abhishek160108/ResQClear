// resQClear Traffic Network & Intersections Control View
// Network Status, 6 Intersections, Simulated Signals, and Congestion Overview
const { useState } = React;

function TrafficNetworkView({ simState }) {
  const { intersections = [], conflictState = {}, networkStatus = {}, congestionZones = [], ambulances = [] } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Smart Traffic Signal Network (Simulated)</h2>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
              SIMULATED SIGNAL CONTROL
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Simulated signal phase timing & emergency green-wave corridor transitions
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            TOTAL NODES: <strong className="text-white">{intersections.length}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            60 FPS DIGITAL TWIN
          </span>
        </div>
      </div>

      {/* 17. NETWORK STATUS OVERVIEW VIEW */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono">
        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-white">{networkStatus.intersectionsOnline || 6}</div>
          <div className="text-[11px] text-emerald-400 font-bold mt-0.5">INTERSECTIONS ONLINE</div>
          <div className="text-[9px] text-slate-500 mt-1">V2X Grid Connected</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-white">{networkStatus.ambulancesTracked || 3}</div>
          <div className="text-[11px] text-cyan-400 font-bold mt-0.5">AMBULANCES TRACKED</div>
          <div className="text-[9px] text-slate-500 mt-1">2 Critical ALS + 1 Urgent</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-white">{networkStatus.hospitalsAvailable || 3}</div>
          <div className="text-[11px] text-teal-300 font-bold mt-0.5">HOSPITALS AVAILABLE</div>
          <div className="text-[9px] text-slate-500 mt-1">Trauma Bays Prepared</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-amber-400">{congestionZones.filter(z => z.active).length}</div>
          <div className="text-[11px] text-amber-400 font-bold mt-0.5">CONGESTION ZONES DETECTED</div>
          <div className="text-[9px] text-slate-500 mt-1">Anna Salai & Usman Bottlenecks</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className={`text-2xl font-extrabold ${networkStatus.activeConflicts > 0 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
            {networkStatus.activeConflicts || 0}
          </div>
          <div className="text-[11px] text-red-400 font-bold mt-0.5">ACTIVE CONFLICT</div>
          <div className="text-[9px] text-slate-500 mt-1">{networkStatus.activeConflicts > 0 ? 'INT-04 Arbitration Active' : 'All Clear'}</div>
        </div>
      </div>

      {/* 6 Intersections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {intersections.map((inter) => {
          const isConflictNode = inter.id === 'int-4';
          const hasEmergencyPriority = inter.priorityVehicle !== null || (isConflictNode && conflictState.stage && conflictState.stage !== 'IDLE');

          return (
            <div
              key={inter.id}
              className={`glass-panel rounded-2xl p-6 border transition-all ${
                isConflictNode && hasEmergencyPriority
                  ? 'border-red-500/80 bg-red-950/20 shadow-xl shadow-red-950/40'
                  : 'border-slate-800 bg-slate-950/80'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isConflictNode ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    <Icons.TrafficLight className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-white">{inter.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">{inter.code || inter.id.toUpperCase()} • Simulated Coordinates: ({inter.x}, {inter.y})</p>
                  </div>
                </div>
              </div>

              {/* Phasing Lamps Status */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] mb-1">NORTH-SOUTH AXIS:</span>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${
                      inter.northSouth === 'GREEN' ? 'traffic-lamp active-green' :
                      inter.northSouth === 'YELLOW' ? 'traffic-lamp active-yellow' : 'traffic-lamp active-red'
                    }`}></span>
                    <strong className="text-white">{inter.northSouth}</strong>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] mb-1">EAST-WEST AXIS:</span>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${
                      inter.eastWest === 'GREEN' ? 'traffic-lamp active-green' :
                      inter.eastWest === 'YELLOW' ? 'traffic-lamp active-yellow' : 'traffic-lamp active-red'
                    }`}></span>
                    <strong className="text-white">{inter.eastWest}</strong>
                  </div>
                </div>
              </div>

              {/* Priority State */}
              <div className="space-y-2 text-xs font-mono mb-4 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Phase Timer:</span>
                  <span className="text-emerald-400 font-bold">{Math.max(1, Math.round(inter.timer || 12))} sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Emergency Override:</span>
                  <span className={hasEmergencyPriority ? 'text-red-400 font-bold animate-pulse' : 'text-slate-400'}>
                    {hasEmergencyPriority ? `ACTIVE (${inter.priorityVehicle || 'CONFLICT ARBITRATION'})` : 'STANDBY'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Simulated Signal Mode:</span>
                  <span className="text-teal-300 font-medium">{inter.modeLabel || 'NORMAL CYCLE'}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SIMULATED SIGNAL CONTROL: <strong className="text-emerald-400">OK</strong></span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  LATENCY: 18ms
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.TrafficNetworkView = TrafficNetworkView;
