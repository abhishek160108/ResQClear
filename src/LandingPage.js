// resQClear Landing Page Component

function LandingPage({ onLaunchDemo, onLaunchScenario }) {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <ResQClearLogo />
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('problem')} className="hover:text-emerald-400 transition-colors">Problem</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-emerald-400 transition-colors">Solution</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-emerald-400 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('conflict-demo')} className="hover:text-emerald-400 transition-colors">Dual Conflict Demo</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-emerald-400 transition-colors">Simulated Impact</button>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onLaunchScenario()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
            >
              <Icons.Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Auto Scenario</span>
            </button>
            <button
              onClick={() => onLaunchDemo()}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              <span>Launch Live Demo</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-grid-pattern">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>SMART CITY EMERGENCY MOBILITY PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Clear the way. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Save lives.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              AI-powered emergency traffic coordination that helps ambulances navigate congestion, resolve intersection conflicts, and coordinate safer, faster emergency routes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onLaunchDemo()}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02]"
              >
                <Icons.Play className="w-5 h-5 text-slate-950" />
                <span>Launch Live Demo</span>
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-medium text-base bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
              >
                <span>See How It Works</span>
              </button>
            </div>

            <div className="mt-6 text-xs font-mono text-slate-400 flex items-center justify-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Interactive prototype • Zero paid API keys required • Simulated V2X grid</span>
            </div>
          </div>

          {/* Interactive Ops Center Preview Box */}
          <div className="mt-14 relative rounded-2xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-emerald-950/50">
            <div className="relative rounded-[14px] bg-slate-950 p-4 sm:p-6 overflow-hidden border border-slate-800">
              {/* Top simulation header */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>LIVE SIMULATION ACTIVE</span>
                  </span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300">SECTOR: CHENNAI CENTRAL GRID</span>
                </div>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-slate-400">
                  <span>ACTIVE ALS FLEET: <strong className="text-white">3</strong></span>
                  <span>SYNCED SIGNALS: <strong className="text-white">6</strong></span>
                  <button
                    onClick={() => onLaunchScenario()}
                    className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 font-bold transition-all"
                  >
                    TRIGGER CONFLICT DEMO
                  </button>
                </div>
              </div>

              {/* Preview Grid Grid Graphic */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Mini Simulation Visualizer */}
                <div className="lg:col-span-8 relative h-72 sm:h-80 bg-slate-900/80 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between p-4 bg-dot-pattern">
                  <div className="flex items-center justify-between z-10">
                    <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-xs">
                      <span className="text-slate-400 font-mono">PRIMARY ARTERY: </span>
                      <span className="text-emerald-400 font-bold">Anna Salai Express Corridor</span>
                    </div>
                    <div className="bg-red-500/10 text-red-400 border border-red-500/30 px-2.5 py-1 rounded text-xs font-mono animate-pulse">
                      ALERT: 2 VEHICLES CONVERGING
                    </div>
                  </div>

                  {/* SVG Map Illustration Preview */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-90">
                    <svg className="w-full h-full" viewBox="0 0 600 300">
                      {/* Roads */}
                      <line x1="50" y1="150" x2="550" y2="150" stroke="#334155" strokeWidth="28" strokeLinecap="round" />
                      <line x1="50" y1="150" x2="550" y2="150" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8,8" opacity="0.3" />
                      
                      <line x1="300" y1="30" x2="300" y2="270" stroke="#334155" strokeWidth="28" strokeLinecap="round" />
                      <line x1="300" y1="30" x2="300" y2="270" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8,8" opacity="0.3" />

                      {/* Green Wave Corridor */}
                      <line x1="300" y1="40" x2="300" y2="150" stroke="#10b981" strokeWidth="8" strokeLinecap="round" opacity="0.7" className="animate-corridor" />
                      
                      {/* Central Intersection */}
                      <circle cx="300" cy="150" r="24" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                      <circle cx="300" cy="150" r="36" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4,4" className="animate-spin" />

                      {/* Traffic Signals */}
                      <circle cx="280" cy="130" r="5" fill="#10b981" className="traffic-lamp active-green" />
                      <circle cx="320" cy="170" r="5" fill="#ef4444" className="traffic-lamp active-red" />

                      {/* Ambulance A (North heading down) */}
                      <g transform="translate(300, 95)">
                        <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2" className="animate-ping" />
                        <rect x="-8" y="-12" width="16" height="24" rx="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="14" y="4" fill="#f8fafc" fontSize="10" fontFamily="monospace" fontWeight="bold">AMB-104 (P1)</text>
                      </g>

                      {/* Ambulance B (South heading up) */}
                      <g transform="translate(300, 220)">
                        <rect x="-8" y="-12" width="16" height="24" rx="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                        <text x="14" y="4" fill="#f8fafc" fontSize="10" fontFamily="monospace" fontWeight="bold">AMB-208 (P2)</text>
                      </g>

                      {/* Destination Hospital */}
                      <g transform="translate(520, 150)">
                        <circle cx="0" cy="0" r="16" fill="#047857" stroke="#10b981" strokeWidth="2" />
                        <text x="0" y="4" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">H</text>
                      </g>
                    </svg>
                  </div>

                  <div className="z-10 flex items-center justify-between text-xs font-mono bg-slate-950/90 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-300">CONFLICT RESOLUTION:</span>
                    <span className="text-emerald-400 font-bold">AMBULANCE A → PRIORITY 01 (12s to Junction)</span>
                    <span className="text-slate-400">CONFIDENCE: 96.4%</span>
                  </div>
                </div>

                {/* Right Mini Telemetry Cards */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">SIMULATED TIME SAVED</span>
                      <span className="text-emerald-400 font-bold">-32% DELAY</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white">2.8 <span className="text-sm font-normal text-slate-400">min / trip</span></div>
                    <div className="mt-2 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-4/5 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-slate-400">DESTINATION HOSPITAL</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">ER READY</span>
                    </div>
                    <div className="font-semibold text-sm text-slate-100">Government General Hospital</div>
                    <div className="text-xs text-slate-400 mt-1">Cath Lab 02 Reserved • Team on Standby</div>
                  </div>

                  <button
                    onClick={() => onLaunchDemo()}
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-sm border border-emerald-500/30 flex items-center justify-center space-x-2 transition-all"
                  >
                    <Icons.Compass className="w-4 h-4" />
                    <span>Open Full Interactive Operations Center</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-red-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded bg-red-500/10 border border-red-500/20">
              The Critical Challenge
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
              Every 60 Seconds in Gridlock Decreases Survival by 7-10%
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Ambulances lose critical minutes because of congestion, blocked intersections, and unpredictable traffic.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl border border-red-500/20 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-4 border border-red-500/30">
                <Icons.TrafficLight className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Red-Light Intersection Bottlenecks</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Ambulances are forced to slow down or halt completely at red lights due to cross-traffic blind spots, creating severe hesitation and delay.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs font-mono text-red-400">
                42% of ambulance transit delays happen at intersections.
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-amber-500/20 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 border border-amber-500/30">
                <Icons.AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Ambulance Convergence Conflicts</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                When two emergency vehicles approach the same crossroads simultaneously, sirens create confusion, risking catastrophic intersection collisions.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs font-mono text-amber-400">
                Traditional sirens offer zero cross-vehicle coordination.
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-blue-500/20 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30">
                <Icons.Hospital className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Disconnected Hospital ER Handoffs</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Emergency rooms receive static or inaccurate arrival times, resulting in delayed cath lab preparations and surgical bay queue delays.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs font-mono text-blue-400">
                Live dynamic ETA coordination saves lives before arrival.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              The resQClear Platform
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
              An Intelligent Operating System for Emergency Mobility
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              resQClear seamlessly combines six core capabilities into a unified operational grid:
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Icons.Ambulance,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/30',
                title: 'Real-Time Ambulance Tracking',
                desc: 'Sub-meter precision GPS telemetry, speed monitoring, and dynamic route tracking across the urban network.'
              },
              {
                icon: Icons.Activity,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/30',
                title: 'Traffic Congestion Analysis',
                desc: 'Predictive density mapping identifies bottlenecks before ambulances encounter them and calculates instant rerouting.'
              },
              {
                icon: Icons.Navigation,
                color: 'text-teal-400',
                bg: 'bg-teal-500/10',
                border: 'border-teal-500/30',
                title: 'Emergency Route Optimization',
                desc: 'Continuous multi-variable pathfinding evaluating road width, turn friction, construction zones, and green waves.'
              },
              {
                icon: Icons.ShieldAlert,
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                border: 'border-red-500/30',
                title: 'Multi-Ambulance Conflict Resolution',
                desc: 'Patented AI arbitration engine resolves converging emergency trajectories and grants priority sequentially.'
              },
              {
                icon: Icons.Hospital,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/30',
                title: 'Hospital ETA Coordination',
                desc: 'Live telemetry synchronizes arrival countdowns directly with ER trauma bays, surgical teams, and cath labs.'
              },
              {
                icon: Icons.Cpu,
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/30',
                title: 'Traffic-Control Operations Center',
                desc: 'Unified mission-control dashboard giving traffic police and city dispatchers total visibility over green wave corridors.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all group">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4 border ${item.border} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Pipeline */}
      <section id="how-it-works" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
              End-to-End Coordination Pipeline
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
              How resQClear Operates in Real Time
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              From the instant emergency dispatch is triggered to patient delivery at the trauma bay:
            </p>
          </div>

          <div className="mt-14 relative">
            {/* Step Pipeline Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
              {[
                { step: '01', title: 'Ambulance', desc: 'ALS Vehicle GPS & patient telemetry broadcast.', icon: Icons.Ambulance },
                { step: '02', title: 'AI Engine', desc: 'Predictive trajectory and ETA calculation.', icon: Icons.Cpu },
                { step: '03', title: 'Traffic Analysis', desc: 'Real-time road density and choke-point scan.', icon: Icons.Activity },
                { step: '04', title: 'Route Optimize', desc: 'Dynamic bypass route selection.', icon: Icons.Navigation },
                { step: '05', title: 'Traffic Coord', desc: 'Simulated green wave & intersection priority.', icon: Icons.TrafficLight },
                { step: '06', title: 'Hospital ER', desc: 'Trauma team prepped with exact arrival sync.', icon: Icons.Hospital }
              ].map((step, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-800 text-center relative flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-mono text-emerald-400 mb-3">
                    {step.step}
                  </div>
                  <div className="text-emerald-400 mb-2">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">{step.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual-Ambulance Conflict Highlight Section */}
      <section id="conflict-demo" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-950/40 via-slate-900/90 to-emerald-950/40 rounded-3xl p-8 sm:p-12 border border-slate-800 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span>KEY DEMO SCENARIO</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Dual-Ambulance Intersection Conflict Resolution
                </h2>
                <p className="mt-4 text-slate-300 text-base leading-relaxed">
                  Experience what happens when two critical emergency vehicles approach the same central intersection from opposite directions. Watch resQClear's AI engine arbitrate priority in milliseconds:
                </p>

                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="text-slate-300">Ambulance A (Anna Nagar): <strong>ETA 12s • Distance 180m • STEMI Alert</strong></span>
                  </div>
                  <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="text-slate-300">Ambulance B (T. Nagar): <strong>ETA 19s • Distance 290m • Polytrauma</strong></span>
                  </div>
                  <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>AI Decision: <strong>Ambulance A cleared first (P01) → Ambulance B cleared second (P02)</strong></span>
                  </div>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <button
                    onClick={() => onLaunchScenario()}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-red-500 to-emerald-500 hover:from-red-400 hover:to-emerald-400 text-slate-950 transition-all shadow-xl shadow-red-950/50"
                  >
                    <Icons.Zap className="w-4 h-4" />
                    <span>Run Conflict Resolution Scenario</span>
                  </button>
                </div>
              </div>

              {/* Visual Conflict Diagram */}
              <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col items-center text-center font-mono">
                <div className="text-xs text-slate-400 mb-2 font-bold tracking-wider">INTERSECTION TOPOLOGY MAP</div>
                
                <div className="my-4 py-4 px-6 bg-slate-900/90 rounded-xl border border-slate-800 w-full flex flex-col items-center">
                  <div className="text-red-400 font-bold text-xs">🚑 AMBULANCE A (North)</div>
                  <div className="text-slate-500 text-xs my-1">↓ (12 sec)</div>
                  <div className="p-3 bg-slate-950 rounded-lg border border-emerald-500/50 text-emerald-400 text-sm font-bold flex items-center space-x-2">
                    <Icons.TrafficLight className="w-5 h-5" />
                    <span>CENTRAL JUNCTION (INT. 4)</span>
                  </div>
                  <div className="text-slate-500 text-xs my-1">↑ (19 sec)</div>
                  <div className="text-amber-400 font-bold text-xs">🚑 AMBULANCE B (South)</div>
                </div>

                <div className="text-[11px] text-slate-400">
                  Calculated Risk Index: <span className="text-red-400 font-bold">94.2%</span> Collision probability without resQClear AI sequence arbitration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              Simulated Performance
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
              Demonstrated Efficiency Gains
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Benchmark metrics derived from urban traffic corridor simulations:
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono">-32%</div>
              <div className="mt-2 text-sm font-semibold text-white">Travel Delay Reduction</div>
              <div className="mt-1 text-xs text-slate-400 font-mono">Demo / Simulated metric</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-teal-300 font-mono">2.8 min</div>
              <div className="mt-2 text-sm font-semibold text-white">Average Time Saved</div>
              <div className="mt-1 text-xs text-slate-400 font-mono">Per emergency transit</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-mono">14</div>
              <div className="mt-2 text-sm font-semibold text-white">Intersections Coordinated</div>
              <div className="mt-1 text-xs text-slate-400 font-mono">Simultaneous green corridors</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-mono">98.4%</div>
              <div className="mt-2 text-sm font-semibold text-white">Route Confidence</div>
              <div className="mt-1 text-xs text-slate-400 font-mono">Algorithmic precision</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-mono text-slate-400">
              * Note: Metrics reflect computer-simulated emergency corridors and traffic optimization modeling.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholders & Pitch Value Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-extrabold text-white">Built for City-Scale Stakeholders</h2>
            <p className="mt-3 text-slate-400">Seamless integration across emergency services, municipal governance, and hospital infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-emerald-400 font-mono text-xs font-bold mb-2">FOR TRAFFIC POLICE</div>
              <h4 className="text-base font-bold text-white mb-2">Automated Corridor Control</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eliminates manual manual radio coordination. Emergency signals automatically transition with fail-safe rollback to standard cycles.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-blue-400 font-mono text-xs font-bold mb-2">FOR HOSPITALS & ERs</div>
              <h4 className="text-base font-bold text-white mb-2">Triage & Bed Readiness</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive second-by-second incoming telemetry, patient acuity scores, and automated cath-lab / trauma bay preparation alerts.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-amber-400 font-mono text-xs font-bold mb-2">FOR FLEET OPERATORS</div>
              <h4 className="text-base font-bold text-white mb-2">Zero-Stop Navigation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Paramedics receive continuous speed advisory recommendations to hit every intersection on green waves without sudden braking.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-cyan-400 font-mono text-xs font-bold mb-2">FOR INVESTORS & JUDGES</div>
              <h4 className="text-base font-bold text-white mb-2">Scalable V2X Architecture</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Built on lightweight edge communication protocols capable of scaling to thousands of smart city intersections and fleets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-t from-emerald-950/50 to-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">Experience the Live Operations Center</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Explore real-time map tracking, traffic light priority transitions, fleet analytics, and the dual-ambulance conflict resolution engine.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button
              onClick={() => onLaunchDemo()}
              className="px-8 py-4 rounded-xl font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/30 transition-all text-base flex items-center space-x-2"
            >
              <span>Launch Live Operations Center</span>
              <Icons.ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ResQClearLogo size="sm" />
            <span className="text-slate-400">© 2026 resQClear Technologies. All rights reserved.</span>
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            resQClear is a simulation prototype. Traffic-signal control shown is simulated and not connected to live public infrastructure.
          </div>
        </div>
      </footer>
    </div>
  );
}

window.LandingPage = LandingPage;
