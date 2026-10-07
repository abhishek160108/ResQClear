// resQClear Operations Center Top Navigation Bar
// Enterprise Control Room Styling & Real-Time Telemetry Badges
const { useState, useEffect } = React;

function TopNav({ simState, onLaunchScenario, onTogglePresentation, onToggleSound, soundEnabled, onOpenLanding }) {
  const [timeStr, setTimeStr] = useState('');
  const { conflictState = {}, scenarioRunning = false, scenarioStep = 1, networkStatus = {} } = simState || {};

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0 flex-shrink-0">
      {/* Left: Logo & Core Status Indicators */}
      <div className="flex items-center space-x-4">
        <div onClick={onOpenLanding} className="cursor-pointer" title="Go to resQClear Landing Page">
          <ResQClearLogo size="default" />
        </div>

        {/* Status Indicators Pill Group */}
        <div className="hidden xl:flex items-center space-x-3 pl-3 border-l border-slate-800 text-[11px] font-mono">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SIMULATION ACTIVE</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>CHENNAI DIGITAL TWIN</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{networkStatus.intersectionsOnline || 6} INTERSECTIONS ONLINE</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>SYSTEM HEALTH: NORMAL</span>
          </div>
        </div>
      </div>

      {/* Middle: Compact Status Badge for Medium Screens */}
      <div className="hidden md:flex xl:hidden items-center space-x-2">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>SIMULATION ACTIVE • 6 SIGNALS ONLINE</span>
        </div>
      </div>

      {/* Right: Clock, Action Buttons, Audio, User Profile */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Live Clock */}
        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner">
          <span className="text-slate-400 text-[10px]">IST</span>
          <span className="text-emerald-400 font-bold tracking-wider">{timeStr || '13:55:32'}</span>
        </div>

        {/* SCENARIO DEMO Button */}
        <button
          onClick={onLaunchScenario}
          className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 transition-all border ${
            scenarioRunning
              ? 'bg-gradient-to-r from-red-500/30 to-emerald-500/30 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/40 animate-pulse'
              : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-950/40'
          }`}
          title="Run Automated Dual Ambulance Conflict Demo"
        >
          <Icons.Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">SCENARIO DEMO</span>
          <span className="sm:hidden">DEMO</span>
          {scenarioRunning && (
            <span className="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 text-[9px] font-extrabold">
              {scenarioStep}/16
            </span>
          )}
        </button>

        {/* PRESENTATION MODE Button */}
        <button
          onClick={onTogglePresentation}
          className="px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-400 text-xs font-mono font-bold transition-all flex items-center space-x-1.5"
          title="Startup Pitch Presentation Mode"
        >
          <Icons.Presentation className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden md:inline">PRESENTATION MODE</span>
          <span className="md:hidden">PITCH</span>
        </button>

        {/* Radio Audio Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-xl border transition-all ${
            soundEnabled
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
              : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
          }`}
          title={soundEnabled ? 'Radio SFX On' : 'Radio SFX Muted'}
        >
          {soundEnabled ? <Icons.Volume2 className="w-4 h-4" /> : <Icons.VolumeX className="w-4 h-4" />}
        </button>

        {/* User Operator Profile */}
        <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-inner">
            OP
          </div>
          <div className="hidden 2xl:block text-left text-xs font-mono leading-tight">
            <div className="text-white font-bold">Chennai Ops Desk</div>
            <div className="text-[10px] text-slate-400">Emergency Corridor Lead</div>
          </div>
        </div>
      </div>
    </header>
  );
}

window.TopNav = TopNav;
