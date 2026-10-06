// resQClear Right-Side Live Status & Emergency Event Stream Panel
const { useState } = React;

function RightStatusPanel({ simState, onApplyRoute }) {
  const { events = [], liveMetrics = {}, ambulances = [], aiInsight = {} } = simState || {};

  const getEventBadge = (type) => {
    switch (type) {
      case 'alert':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'priority':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'success':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      case 'warning':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'alert':
        return <Icons.AlertTriangle className="w-3.5 h-3.5 text-red-400" />;
      case 'priority':
      case 'success':
        return <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Icons.Radio className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4 overflow-y-auto pr-1">
      {/* AI Traffic Insight Card */}
      <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wide">AI TRAFFIC INSIGHT</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            SIMULATION ESTIMATE
          </span>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-1 font-sans">
          <p className="font-semibold text-white">
            High traffic density detected on Anna Salai North Link.
          </p>
          <p className="text-amber-400 font-mono text-[11px]">
            Predicted delay: +2.4 min
          </p>
          <p className="text-slate-400 text-[11px]">
            Alternative route may reduce simulated delay.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            ESTIMATED SAVINGS: 2 min 18 sec
          </span>
          <button
            onClick={() => onApplyRoute()}
            disabled={aiInsight.applied}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center space-x-1.5 ${
              aiInsight.applied
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
            }`}
          >
            {aiInsight.applied ? (
              <>
                <Icons.CheckCircle2 className="w-3.5 h-3.5" />
                <span>Route Applied</span>
              </>
            ) : (
              <>
                <Icons.Navigation className="w-3.5 h-3.5" />
                <span>SIMULATE ALTERNATE ROUTE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Live Emergency Events Stream */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex-1 flex flex-col min-h-[320px]">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <h3 className="font-bold text-sm text-white">Emergency Events</h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">OPERATIONS LOG</span>
        </div>

        <div className="space-y-2.5 overflow-y-auto flex-1 max-h-[380px] pr-1">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start space-x-2.5 text-xs"
            >
              <div className="mt-0.5">{getEventIcon(evt.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-[10px] text-slate-400">{evt.time}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono border ${getEventBadge(evt.type)}`}>
                    {evt.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-slate-200 text-xs leading-snug">{evt.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corridor Telemetry Snapshot */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">CORRIDOR CLEARANCE SPEED</span>
          <span className="text-emerald-400 font-bold">{liveMetrics.avgSpeed || 44.2} km/h</span>
        </div>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, (liveMetrics.avgSpeed / 60) * 100)}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
          <div>
            <span className="text-slate-400 block text-[10px]">EST. DELAY AVOIDED:</span>
            <strong className="text-white text-xs">2m 18s (Simulated)</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">SIGNALS SYNCED:</span>
            <strong className="text-emerald-400 text-xs">4 Intersections</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

window.RightStatusPanel = RightStatusPanel;
