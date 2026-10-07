// resQClear Root Application Component
// Master Controller for Digital Twin Simulation, Operations Dashboard, & Pitch Deck
const { useState, useEffect } = React;

function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'dashboard'
  const [currentTab, setTab] = useState('overview'); // 'overview' | 'conflict' | 'ambulances' | 'network' | 'hospitals' | 'analytics' | 'settings'
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [simState, setSimState] = useState(window.simulationEngine.getState());

  useEffect(() => {
    const unsubscribe = window.simulationEngine.subscribe((state) => {
      setSimState(state);
    });
    return () => unsubscribe();
  }, []);

  const handleLaunchDemo = () => {
    setView('dashboard');
    setTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchScenario = () => {
    setView('dashboard');
    setTab('overview');
    window.simulationEngine.runEmergencyScenario();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const newState = window.soundEngine ? window.soundEngine.toggle() : false;
    setSoundEnabled(newState);
  };

  const handleApplyRoute = () => {
    window.simulationEngine.applyAiRoute();
  };

  const handleTriggerAmbulance = (id) => {
    if (id === 'AMB-104') window.simulationEngine.triggerAmbulanceA();
    else if (id === 'AMB-208') window.simulationEngine.triggerAmbulanceB();
    setView('dashboard');
    setTab('overview');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* 1. Marketing / Product Landing Page */}
      {view === 'landing' ? (
        <LandingPage
          onLaunchDemo={handleLaunchDemo}
          onLaunchScenario={handleLaunchScenario}
        />
      ) : (
        /* 2. Operations Center Live Dashboard */
        <div className="min-h-screen flex flex-col bg-slate-950">
          {/* Top Navigation Bar */}
          <TopNav
            simState={simState}
            onLaunchScenario={() => window.simulationEngine.runEmergencyScenario()}
            onTogglePresentation={() => setIsPresentationMode(true)}
            onToggleSound={handleToggleSound}
            soundEnabled={soundEnabled}
            onOpenLanding={() => setView('landing')}
          />

          {/* Main Dashboard Layout */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar
              currentTab={currentTab}
              setTab={setTab}
              simState={simState}
              onTogglePresentation={() => setIsPresentationMode(true)}
              onOpenLanding={() => setView('landing')}
            />

            {/* Central Main Workspace Area */}
            <main className="flex-1 p-4 sm:p-6 overflow-y-auto flex flex-col space-y-4">
              {/* Dynamic Content Switching Based on Active Tab */}
              {currentTab === 'overview' && (
                <div className="flex-1 flex flex-col space-y-4">
                  {/* Top: Large Interactive Live Map (Centerpiece) */}
                  <div className="h-[480px] sm:h-[540px] w-full relative">
                    <LiveMap
                      simState={simState}
                      onSelectAmbulance={handleTriggerAmbulance}
                      onApplyRoute={handleApplyRoute}
                    />
                  </div>

                  {/* Middle: AI Multi-Ambulance Conflict Engine (when active or in conflict tab) */}
                  {(simState.conflictState?.stage && simState.conflictState?.stage !== 'IDLE') && (
                    <ConflictEnginePanel
                      simState={simState}
                    />
                  )}

                  {/* Bottom: Dedicated Demo Controls Bar */}
                  <DemoControls
                    simState={simState}
                    onRunScenario={() => window.simulationEngine.runEmergencyScenario()}
                    onStart={() => window.simulationEngine.start()}
                    onPause={() => window.simulationEngine.pause()}
                    onReset={() => window.simulationEngine.reset()}
                    onTriggerA={() => window.simulationEngine.triggerAmbulanceA()}
                    onTriggerB={() => window.simulationEngine.triggerAmbulanceB()}
                    onTriggerBoth={() => window.simulationEngine.triggerBothEmergencies()}
                    onCreateJam={() => window.simulationEngine.createTrafficJam()}
                    onClearJam={() => window.simulationEngine.clearTraffic()}
                    onSetSpeed={(s) => window.simulationEngine.setSpeed(s)}
                    onToggleSound={handleToggleSound}
                    soundEnabled={soundEnabled}
                  />
                </div>
              )}

              {currentTab === 'conflict' && (
                <div className="space-y-6">
                  <ConflictEnginePanel simState={simState} />
                  <div className="h-[420px] w-full">
                    <LiveMap simState={simState} />
                  </div>
                  <DemoControls
                    simState={simState}
                    onRunScenario={() => window.simulationEngine.runEmergencyScenario()}
                    onStart={() => window.simulationEngine.start()}
                    onPause={() => window.simulationEngine.pause()}
                    onReset={() => window.simulationEngine.reset()}
                    onTriggerA={() => window.simulationEngine.triggerAmbulanceA()}
                    onTriggerB={() => window.simulationEngine.triggerAmbulanceB()}
                    onTriggerBoth={() => window.simulationEngine.triggerBothEmergencies()}
                    onCreateJam={() => window.simulationEngine.createTrafficJam()}
                    onClearJam={() => window.simulationEngine.clearTraffic()}
                    onSetSpeed={(s) => window.simulationEngine.setSpeed(s)}
                    onToggleSound={handleToggleSound}
                    soundEnabled={soundEnabled}
                  />
                </div>
              )}

              {currentTab === 'ambulances' && (
                <AmbulanceFleetView
                  simState={simState}
                  onTriggerAmbulance={handleTriggerAmbulance}
                />
              )}

              {currentTab === 'network' && (
                <TrafficNetworkView simState={simState} />
              )}

              {currentTab === 'hospitals' && (
                <HospitalView simState={simState} />
              )}

              {currentTab === 'analytics' && (
                <AnalyticsView simState={simState} />
              )}

              {currentTab === 'settings' && (
                <SettingsView
                  simState={simState}
                  onReset={() => window.simulationEngine.reset()}
                />
              )}

              {/* Mandatory Simulation Disclaimer Footer */}
              <div className="mt-auto pt-4 pb-2 border-t border-slate-900 text-center text-xs font-mono text-slate-500">
                “resQClear is a simulation prototype. Traffic-signal actions shown in this demo are not connected to real-world traffic infrastructure.”
              </div>
            </main>

            {/* Right Side Live Status & Chronology Panel (Shown in Overview & Conflict views) */}
            {(currentTab === 'overview' || currentTab === 'conflict') && (
              <aside className="w-full lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-950/80 backdrop-blur-md p-4 flex-shrink-0">
                <RightStatusPanel
                  simState={simState}
                  onApplyRoute={handleApplyRoute}
                />
              </aside>
            )}
          </div>
        </div>
      )}

      {/* 3. Startup Presentation / Pitch Deck Overlay */}
      {isPresentationMode && (
        <PresentationMode
          simState={simState}
          onExit={() => setIsPresentationMode(false)}
          onRunScenario={() => window.simulationEngine.runEmergencyScenario()}
        />
      )}

      {/* 4. 18. SCENARIO DEMO COMPLETION MODAL */}
      {simState.scenarioCompleteModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="max-w-xl w-full bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center relative overflow-hidden font-sans">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"></div>

            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
              <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SIMULATION COMPLETE</span>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">RESQCLEAR</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                MULTI-AMBULANCE CONFLICT RESOLVED
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Coordinated 2 critical emergency vehicles sequentially through a single shared intersection without cross-axis deadlock.
              </p>
            </div>

            {/* Impact Metric Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-extrabold text-white">2</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Emergency Vehicles Coordinated</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-extrabold text-teal-300">1</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Conflict Junction (INT-04)</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-xl font-extrabold text-cyan-300">2</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Emergency Corridors</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-emerald-500/30">
                <div className="text-xl font-extrabold text-emerald-400">2m 18s</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Estimated Delay Avoided</div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800/80 pt-3">
              Simulation Estimate • Prototype demonstration data
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  window.simulationEngine.closeScenarioCompleteModal();
                  window.simulationEngine.runEmergencyScenario();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
              >
                Re-Run Scenario Demo
              </button>

              <button
                onClick={() => {
                  window.simulationEngine.closeScenarioCompleteModal();
                  setTab('analytics');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs border border-slate-700 transition-all"
              >
                Explore Analytics
              </button>

              <button
                onClick={() => window.simulationEngine.closeScenarioCompleteModal()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800 transition-all"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Mount Root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
