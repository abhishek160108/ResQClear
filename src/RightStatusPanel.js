// resQClear Right-Side Operations & Intelligence Panel
// System Intelligence, AI Traffic Insight, Before vs After & Live Chronology
const { useState } = React;

function RightStatusPanel({ simState, onApplyRoute }) {
  const {
    events = [],
    liveMetrics = {},
    ambulances = [],
    aiInsight = {},
    systemIntelligence = {},
    conflictState = {}
  } = simState || {};

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
      {/* 1. DEDICATED "SYSTEM INTELLIGENCE" PANEL */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">SYSTEM INTELLIGENCE</span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
            LIVE ENGINE
          </span>
        </div>

        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">TRAFFIC ANALYSIS</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Congestion detected</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">ROUTE ANALYSIS</span>
            <span className={`font-bold flex items-center space-x-1 ${aiInsight.applied ? 'text-emerald-400' : 'text-slate-300'}`}>
              <Icons.CheckCircle2 className={`w-3 h-3 ${aiInsight.applied ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{aiInsight.applied ? 'Alternate Route Applied' : 'Alternate route evaluated'}</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">CONFLICT ANALYSIS</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Multi-ambulance conflict detected</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">SEQUENCE</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Priority order generated</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">CORRIDOR</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Emergency corridor simulated</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">HOSPITAL ETA</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>ETA updated</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. AI TRAFFIC INSIGHT CARD */}
      <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wide">AI TRAFFIC INSIGHT</span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
            SIMULATION ESTIMATE
          </span>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-1 font-sans">
          <p className="font-semibold text-white">
            "High traffic density detected on Anna Salai North Link."
          </p>
          <div className="flex justify-between text-xs font-mono pt-1">
            <span className="text-slate-400">Predicted delay:</span>
            <span className="text-red-400 font-bold">+2.4 min</span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Alternative route:</span>
            <span className="text-cyan-300 font-bold">Route B</span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Estimated improvement:</span>
            <span className="text-emerald-400 font-bold">2m 18s</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400">
            SIMULATION ESTIMATE
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
                <span>Alternate Applied</span>
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

      {/* 3. "BEFORE vs AFTER" COMPARISON PANEL */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">BEFORE vs AFTER COMPARISON</span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
            SIMULATION RESULT
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          {/* WITHOUT resQClear */}
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-red-500/20 space-y-1.5">
            <div className="text-[10px] font-bold text-red-400 uppercase">WITHOUT resQClear</div>
            <div className="text-slate-400 text-[11px] font-sans">• Traffic congestion</div>
            <div className="text-slate-400 text-[11px] font-sans">• Intersection waiting</div>
            <div className="text-slate-400 text-[11px] font-sans">• Uncoordinated emergency movement</div>
            <div className="pt-1 border-t border-slate-800/80 flex justify-between text-[11px]">
              <span className="text-slate-500">Baseline ETA:</span>
              <strong className="text-red-400">08:34</strong>
            </div>
          </div>

          {/* WITH resQClear */}
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-1.5">
            <div className="text-[10px] font-bold text-emerald-400 uppercase">WITH resQClear</div>
            <div className="text-slate-200 text-[11px] font-sans">• Coordinated sequence</div>
            <div className="text-slate-200 text-[11px] font-sans">• Emergency corridor</div>
            <div className="text-slate-200 text-[11px] font-sans">• Reduced simulated delay</div>
            <div className="pt-1 border-t border-slate-800/80 flex justify-between text-[11px]">
              <span className="text-slate-500">Optimized ETA:</span>
              <strong className="text-emerald-400">06:16</strong>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300">ESTIMATED DIFFERENCE:</span>
          <strong className="text-emerald-400 text-sm">02:18 min saved</strong>
        </div>
      </div>

      {/* 4. LIVE EVENT TIMELINE */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex-1 flex flex-col min-h-[300px]">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <h3 className="font-bold text-sm text-white">Event Timeline</h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">LIVE CHRONOLOGY</span>
        </div>

        <div className="space-y-2.5 overflow-y-auto flex-1 max-h-[360px] pr-1 font-mono">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start space-x-2.5 text-xs"
            >
              <div className="mt-0.5">{getEventIcon(evt.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] text-slate-400 font-bold">{evt.time}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] border ${getEventBadge(evt.type)}`}>
                    {evt.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-slate-200 text-xs leading-snug font-sans">{evt.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.RightStatusPanel = RightStatusPanel;
