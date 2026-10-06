// resQClear Traffic Network & Intersections Control View
const { useState } = React;

function TrafficNetworkView({ simState }) {
  const { intersections = [], conflictState = {} } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Smart Traffic Signal Network</h2>
          <p className="text-sm text-slate-400">Adaptive Signal Timing & Emergency Green Wave Phasing</p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            TOTAL NODES: <strong className="text-white">{intersections.length}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            100% V2X TELEMETRY SYNC
          </span>
        </div>
      </div>

      {/* Intersections Grid */}
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
                    <p className="text-xs text-slate-400 font-mono">ID: {inter.id.toUpperCase()} • Grid Point: ({inter.x}, {inter.y})</p>
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
                  <span className="text-slate-400">V2X Mesh Status:</span>
                  <span className="text-teal-300 font-medium">99.8% Packet Delivery</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>FAILSAFE: <strong className="text-emerald-400">Auto-Rollback OK</strong></span>
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
