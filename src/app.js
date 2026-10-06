// resQClear Root Application Component
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
          {/* Top Bar */}
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
              <div className="mt-auto pt-4 pb-2 border-t border-slate-900 text-center text-xs font-mono text-slate-400">
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
    </div>
  );
}

// Mount Root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
