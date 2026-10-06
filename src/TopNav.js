// resQClear Operations Center Top Navigation Bar
const { useState, useEffect } = React;

function TopNav({ simState, onLaunchScenario, onTogglePresentation, onToggleSound, soundEnabled, onOpenLanding }) {
  const [timeStr, setTimeStr] = useState('');
  const { conflictState = {}, scenarioRunning = false } = simState || {};

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const getSystemStatus = () => {
    if (conflictState.stage === 'DETECTED' || conflictState.stage === 'RESOLVING') {
      return { text: 'AI CONFLICT ARBITRATION ACTIVE', color: 'text-red-400', bg: 'bg-red-500/15', border: 'border-red-500/40', dot: 'bg-red-500 animate-ping' };
    }
    if (conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'PRIORITY_B') {
      return { text: 'SIMULATED EMERGENCY CORRIDOR ENGAGED', color: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40', dot: 'bg-emerald-400 animate-pulse' };
    }
    return { text: 'GRID NORMAL • 6 SIGNALS ONLINE', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-400' };
  };

  const status = getSystemStatus();

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0">
      {/* Left: Logo & Persistent SIMULATION MODE Badge */}
      <div className="flex items-center space-x-4">
        <div onClick={onOpenLanding} className="cursor-pointer" title="Go to Landing Page">
          <ResQClearLogo size="default" />
        </div>

        <div className="hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white font-bold">SIMULATION MODE</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">CHENNAI METRO GRID</span>
        </div>
      </div>

      {/* Middle: Live System Status Pill */}
      <div className="hidden md:flex items-center space-x-3">
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${status.bg} ${status.border} ${status.color}`}>
          <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>
          <span>{status.text}</span>
        </div>
      </div>

      {/* Right: Clock, Presentation Mode, Audio, User Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Live Clock */}
        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
          <span className="text-slate-400">IST</span>
          <span className="text-emerald-400 font-bold">{timeStr || '18:42:00'}</span>
        </div>

        {/* Hero Scenario Trigger */}
        <button
          onClick={onLaunchScenario}
          className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-500/20 to-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-mono font-bold transition-all"
          title="Run Dual Ambulance Conflict Scenario"
        >
          <Icons.Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>Scenario Demo</span>
        </button>

        {/* Presentation Mode Toggle */}
        <button
          onClick={onTogglePresentation}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 text-xs font-mono font-bold transition-all"
          title="Startup Presentation Pitch Mode"
        >
          <Icons.Presentation className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden md:inline">Pitch Mode</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-xl border transition-all ${
            soundEnabled
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-slate-900 text-slate-500 border-slate-800'
          }`}
          title={soundEnabled ? 'Radio Audio On' : 'Radio Audio Muted'}
        >
          {soundEnabled ? <Icons.Volume2 className="w-4 h-4" /> : <Icons.VolumeX className="w-4 h-4" />}
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2.5 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-xs shadow-inner">
            SR
          </div>
          <div className="hidden xl:block text-left text-xs font-mono">
            <div className="text-white font-bold leading-tight">Cmdr. S. Ramanathan</div>
            <div className="text-[10px] text-slate-400">Emergency Ops Lead</div>
          </div>
        </div>
      </div>
    </header>
  );
}

window.TopNav = TopNav;
