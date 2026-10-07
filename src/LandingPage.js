// resQClear Product Landing Page Component
// Enterprise Architecture, 6-Stage How It Works, Phased Roadmap, and Simulated Impact
const { useState } = React;

function LandingPage({ onLaunchDemo, onLaunchScenario }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ResQClearLogo />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold">
              DIGITAL TWIN SIMULATION
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono font-medium text-slate-300">
            <button onClick={() => scrollToSection('problem')} className="hover:text-emerald-400 transition-colors">Problem</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-emerald-400 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('conflict-demo')} className="hover:text-emerald-400 transition-colors">Conflict Engine</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-emerald-400 transition-colors">Roadmap</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-emerald-400 transition-colors">Simulated Impact</button>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onLaunchScenario()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
            >
              <Icons.Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Scenario Demo</span>
            </button>
            <button
              onClick={() => onLaunchDemo()}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              <span>Launch Live Dashboard</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>EMERGENCY TRAFFIC COORDINATION PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Clear the way. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Save lives.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              AI-assisted emergency traffic coordination for safer and more efficient ambulance movement through congested urban intersections.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onLaunchDemo()}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold font-mono text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02]"
              >
                <Icons.Play className="w-4 h-4 text-slate-950" />
                <span>Launch Live Dashboard</span>
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-medium font-mono text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
              >
                <span>How resQClear Works</span>
              </button>
            </div>

            <div className="mt-6 text-xs font-mono text-slate-400 flex items-center justify-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Digital Twin Simulation Prototype • Simulated Signal Control • Chennai Metro Grid</span>
            </div>
          </div>

          {/* Interactive Hero Scenario Visual Preview Box */}
          <div id="conflict-demo" className="mt-14 relative rounded-2xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-emerald-950/50">
            <div className="relative rounded-[14px] bg-slate-950 p-4 sm:p-6 overflow-hidden border border-slate-800">
              <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>SIMULATION MODE ACTIVE</span>
                  </span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300">CENTRAL CONFLICT JUNCTION (INT-04)</span>
                </div>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-slate-400">
                  <span>UNITS CONVERGING: <strong className="text-white">AMB-104 & AMB-208</strong></span>
                  <button
                    onClick={() => onLaunchScenario()}
                    className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 font-bold transition-all"
                  >
                    RUN HERO CONFLICT DEMO
                  </button>
                </div>
              </div>

              {/* Graphic Representation of Dual Conflict */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 h-64 bg-slate-900/90 rounded-xl border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10 text-xs font-mono">
                    <span className="text-slate-300">SCENARIO: DUAL CRITICAL CONVERGENCE</span>
                    <span className="text-red-400 font-bold animate-pulse">⚠ CONFLICT DETECTED</span>
                  </div>

                  <div className="relative flex items-center justify-center py-4">
                    <div className="text-center space-y-2 font-mono">
                      <div className="text-xs text-red-400 font-bold flex items-center justify-center space-x-1">
                        <span>🚑 AMB-104 (North)</span>
                        <span className="text-slate-500">↓ (ETA: 43s | Dist: 555m)</span>
                      </div>
                      <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs shadow-lg">
                        🚦 INT-04 • SEQUENTIAL CLEARANCE (01: AMB-104 → 02: AMB-208)
                      </div>
                      <div className="text-xs text-amber-400 font-bold flex items-center justify-center space-x-1">
                        <span>🚑 AMB-208 (South)</span>
                        <span className="text-slate-500">↑ (ETA: 50s | Dist: 555m)</span>
                      </div>
                    </div>
                  </div>

                  <div className="z-10 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 p-2 rounded-lg border border-slate-800 text-slate-400">
                    <span>RECOMMENDED SEQUENCE: <strong className="text-emerald-400">01 → AMB-104 | 02 → AMB-208</strong></span>
                    <span>CONFIDENCE: <strong className="text-white">96% (SIMULATION ESTIMATE)</strong></span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Decision Logic</div>
                    <div className="text-white font-bold mt-1">Sequential Corridor Clearance</div>
                    <p className="text-slate-400 text-[11px] mt-1 font-sans">
                      "AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-extrabold text-base">2m 18s</div>
                      <div className="text-[10px] text-slate-400">Est. Delay Avoided</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-cyan-400 font-extrabold text-base">4 Nodes</div>
                      <div className="text-[10px] text-slate-400">Signals Coordinated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20. PRODUCT EXPLANATION: HOW resQClear WORKS (6 Stages) */}
      <section id="how-it-works" className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              SYSTEM ARCHITECTURE
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              HOW resQClear WORKS
            </h3>
            <p className="text-sm text-slate-400 mt-2 font-sans">
              From detection to safe sequence coordination across congested urban grids.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 font-mono text-xs">
            {RESQCLEAR_DATA.howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      {step.step}
                    </span>
                    <span className="text-[9px] text-slate-500">STAGE 0{step.step}</span>
                  </div>
                  <h4 className="font-extrabold text-white text-sm tracking-wide mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. BEFORE vs AFTER COMPARISON SECTION */}
      <section id="problem" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              COMPARATIVE EVALUATION
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              BEFORE vs AFTER resQClear
            </h3>
            <p className="text-xs font-mono text-amber-400 mt-2">
              SIMULATION RESULT • Empirical comparison across urban corridors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch font-mono">
            {/* WITHOUT resQClear */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-red-500/25 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase mb-2">
                  <Icons.AlertTriangle className="w-4 h-4" />
                  <span>WITHOUT resQClear</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-snug font-sans">
                  Uncoordinated Emergency Transit
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs text-slate-300 font-sans">
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span><strong>Traffic congestion:</strong> Ambulances stuck behind dense vehicle queues.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span><strong>Intersection waiting:</strong> Complete stops at red-light phases and cross-traffic.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span><strong>Uncoordinated movement:</strong> Multi-ambulance deadlocks at common junctions.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Baseline Simulated ETA:</span>
                  <strong className="text-red-400 text-base">08:34 min</strong>
                </div>
              </div>
            </div>

            {/* WITH resQClear */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase mb-2">
                  <Icons.ShieldCheck className="w-4 h-4" />
                  <span>WITH resQClear</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-snug font-sans">
                  AI-Assisted Emergency Coordination
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs text-slate-300 font-sans">
                  <li className="flex items-center space-x-2 text-slate-300">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Coordinated sequence:</strong> Automated priority arbitration at conflict nodes.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Emergency corridor:</strong> Dynamic simulated green wave preserving momentum.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Reduced simulated delay:</strong> 2m 18s saved per critical route trip.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Optimized Simulated ETA:</span>
                  <strong className="text-emerald-400 text-base">06:16 min (-02:18)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21. FUTURE ROADMAP SECTION */}
      <section id="roadmap" className="py-16 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              PRODUCT ROADMAP
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              From Simulation to Infrastructure Integration
            </h3>
            <p className="text-sm text-slate-400 mt-2 font-sans">
              Phased evolution to ensure rigorous safety and regulatory alignment before civic deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
            {RESQCLEAR_DATA.productRoadmap.map((p) => (
              <div
                key={p.phase}
                className={`p-5 rounded-2xl border flex flex-col justify-between ${
                  p.isCurrent
                    ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40'
                    : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-slate-400">{p.phase}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      p.isCurrent ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-white text-sm mb-2">{p.title}</h4>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section id="impact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              BENCHMARK METRICS
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Simulated Performance Gains
            </h3>
            <p className="text-xs font-mono text-amber-400 mt-2">
              All metrics below are simulation demonstration estimates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-center">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">12</div>
              <div className="text-[11px] text-slate-300 mt-1">Emergency Events</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">DEMO DATA</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">4</div>
              <div className="text-[11px] text-slate-300 mt-1">Intersections Coordinated</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">DEMO DATA</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">2</div>
              <div className="text-[11px] text-slate-300 mt-1">Ambulances Coordinated</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">DEMO DATA</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">2m 18s</div>
              <div className="text-[11px] text-slate-300 mt-1">Est. Delay Avoided</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400">SIMULATION ESTIMATE</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">96%</div>
              <div className="text-[11px] text-slate-300 mt-1">Decision Confidence</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">SIMULATION ESTIMATE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Credibility Disclaimer Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <ResQClearLogo size="small" />
            <span>• “Clear the way. Save lives.”</span>
          </div>

          <div className="max-w-xl text-[11px] text-slate-400 leading-normal">
            resQClear is currently a digital twin simulation prototype. Signal actions and telemetry shown are simulated and not connected to real government traffic signals, live ambulances, or municipal infrastructure.
          </div>
        </div>
      </footer>
    </div>
  );
}

window.LandingPage = LandingPage;
