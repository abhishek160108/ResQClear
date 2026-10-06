// resQClear Interactive City Digital Twin Simulation & Future Infrastructure Modal
const { useState, useEffect, useRef } = React;

function LiveMap({ simState, onSelectAmbulance, onApplyRoute }) {
  const canvasRef = useRef(null);
  const [mapMode, setMapMode] = useState('TACTICAL'); // 'TACTICAL' (Digital Twin Simulation - Active)
  const [showRealWorldLockedModal, setShowRealWorldLockedModal] = useState(false);
  const [cctvExpanded, setCctvExpanded] = useState(false);
  const [showLegend, setShowLegend] = useState(true);

  const {
    ambulances = [],
    intersections = [],
    congestionZones = [],
    hospitals = [],
    civilianVehicles = [],
    conflictState = {},
    aiInsight = {}
  } = simState || {};

  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  // --- 1. TACTICAL CANVAS DIGITAL TWIN RENDERER (60 FPS) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Dark Urban Base Map Grid
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Sector Outlines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.07)';
    ctx.strokeRect(40, 40, 360, 240); // Sector A - Anna Nagar
    ctx.strokeRect(40, 420, 360, 220); // Sector B - T. Nagar
    ctx.strokeRect(520, 40, 380, 240); // Sector C - Central Medical District
    ctx.strokeRect(520, 420, 380, 220); // Sector D - Apollo Emergency Zone

    // Sector Labels
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
    ctx.fillText('SECTOR 01: ANNA NAGAR NORTH', 50, 60);
    ctx.fillText('SECTOR 02: T. NAGAR SOUTH', 50, 440);
    ctx.fillText('SECTOR 03: GOVT MEDICAL DISTRICT', 530, 60);
    ctx.fillText('SECTOR 04: GREAMS ROAD / APOLLO ZONE', 530, 440);

    // Road Network
    const roads = [
      { x1: 40, y1: 160, x2: 880, y2: 160, name: 'Poonamallee High Road', width: 36 },
      { x1: 40, y1: 350, x2: 880, y2: 350, name: 'Anna Salai Express Arterial', width: 44, primary: true },
      { x1: 40, y1: 540, x2: 880, y2: 540, name: 'Grand Southern Trunk (GST)', width: 36 },
      { x1: 280, y1: 40, x2: 280, y2: 660, name: '1st Avenue Cross Corridor', width: 34 },
      { x1: 450, y1: 40, x2: 450, y2: 660, name: 'EVR Periyar Central Spine', width: 42, primary: true },
      { x1: 620, y1: 40, x2: 620, y2: 660, name: 'Hospital Access Highway', width: 34 },
      { x1: 780, y1: 120, x2: 780, y2: 580, name: 'Medical Center Access Link', width: 30 }
    ];

    roads.forEach(r => {
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = r.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1);
      ctx.lineTo(r.x2, r.y2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1 - r.width/2);
      ctx.lineTo(r.x2, r.y2 - r.width/2);
      ctx.moveTo(r.x1, r.y1 + r.width/2);
      ctx.lineTo(r.x2, r.y2 + r.width/2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1);
      ctx.lineTo(r.x2, r.y2);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // Congestion Zones (RED: Critical, AMBER: Moderate)
    congestionZones.forEach(zone => {
      if (!zone.active) return;
      const grad = ctx.createRadialGradient(zone.x, zone.y, 5, zone.x, zone.y, zone.radius);
      grad.addColorStop(0, zone.severity === 'HIGH' ? 'rgba(239, 68, 68, 0.45)' : 'rgba(245, 158, 11, 0.35)');
      grad.addColorStop(0.7, zone.severity === 'HIGH' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.1)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = zone.severity === 'HIGH' ? '#ef4444' : '#f59e0b';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillText(`CONGESTION ${zone.delayImpact}`, zone.x - 30, zone.y - zone.radius - 4);
    });

    // Green Wave Emergency Corridors & Normal Routes
    ambulances.forEach(amb => {
      if (!amb.path || amb.path.length < 2) return;
      
      // Normal Route Path (Blue tint baseline)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 5;
      ctx.beginPath();
      amb.path.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Active Green Wave Simulated Emergency Corridor
      if (amb.currentX && amb.currentY) {
        const isPriorityA = amb.id === 'AMB-104' && conflictState.stage === 'PRIORITY_A';
        const isPriorityB = amb.id === 'AMB-208' && conflictState.stage === 'PRIORITY_B';
        const isGreenWave = isPriorityA || isPriorityB;

        ctx.strokeStyle = isGreenWave ? '#10b981' : 'rgba(16, 185, 129, 0.65)';
        ctx.lineWidth = isGreenWave ? 8 : 6;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = isGreenWave ? 14 : 6;
        ctx.beginPath();
        ctx.moveTo(amb.currentX, amb.currentY);
        const nextIdx = Math.min(amb.path.length - 1, (amb.progress > 0.5 ? 4 : 3));
        for (let i = nextIdx; i < Math.min(amb.path.length, nextIdx + 2); i++) {
          ctx.lineTo(amb.path[i].x, amb.path[i].y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Route Direction Arrows
        if (amb.heading !== undefined) {
          const arrowX = amb.currentX + Math.cos(amb.heading) * 20;
          const arrowY = amb.currentY + Math.sin(amb.heading) * 20;
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(arrowX, arrowY, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    // Civilian Vehicles
    civilianVehicles.forEach(car => {
      ctx.save();
      ctx.translate(car.x, car.y);
      ctx.fillStyle = car.yielding ? '#f59e0b' : car.color;
      ctx.fillRect(-5, -3, 10, 6);
      
      if (car.yielding) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1;
        ctx.strokeRect(-7, -5, 14, 10);
      }
      ctx.restore();
    });

    // Intersections with Clear IDs and Simulated Signals
    intersections.forEach(inter => {
      ctx.save();
      ctx.translate(inter.x, inter.y);

      // Junction ID Label
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(inter.code || inter.id.toUpperCase(), -18, -28);

      // Conflict Junction Special Highlight
      if (inter.id === 'int-4') {
        const isConflict = conflictState.stage && conflictState.stage !== 'IDLE' && conflictState.stage !== 'BOTH_CLEARED';
        ctx.strokeStyle = isConflict ? 'rgba(239, 68, 68, 0.7)' : 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.stroke();

        if (isConflict) {
          ctx.strokeStyle = '#ef4444';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.arc(0, 0, 42, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Mode Status Box
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(-65, 26, 130, 18);
        ctx.strokeStyle = isConflict ? '#ef4444' : '#10b981';
        ctx.lineWidth = 1;
        ctx.strokeRect(-65, 26, 130, 18);
        ctx.fillStyle = isConflict ? '#ef4444' : '#10b981';
        ctx.font = 'bold 8px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(inter.modeLabel || 'NORMAL CYCLE', 0, 38);
        ctx.textAlign = 'left';
      }

      // Signal Lamps Box
      ctx.fillStyle = '#020617';
      ctx.fillRect(-8, -20, 16, 40);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(-8, -20, 16, 40);

      // Red Lamp
      const isRed = inter.northSouth === 'RED';
      ctx.fillStyle = isRed ? '#ef4444' : '#450a0a';
      ctx.beginPath();
      ctx.arc(0, -12, 4, 0, Math.PI * 2);
      ctx.fill();

      // Yellow Lamp
      const isYellow = inter.northSouth === 'YELLOW';
      ctx.fillStyle = isYellow ? '#f59e0b' : '#451a03';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      // Green Lamp
      const isGreen = inter.northSouth === 'GREEN';
      ctx.fillStyle = isGreen ? '#10b981' : '#022c22';
      ctx.beginPath();
      ctx.arc(0, 12, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });

    // Destination Hospitals
    hospitals.forEach(hosp => {
      ctx.save();
      ctx.translate(hosp.x, hosp.y);

      // Outer glow
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.fill();

      // Hospital base
      ctx.fillStyle = '#064e3b';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Hospital Cross Icon
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-2, -8, 4, 16);
      ctx.fillRect(-8, -2, 16, 4);

      // Hospital Label
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillStyle = '#10b981';
      ctx.fillText(hosp.shortName, -20, -22);

      ctx.restore();
    });

    // Ambulances (ALS Vehicles)
    ambulances.forEach(amb => {
      if (!amb.currentX || !amb.currentY) return;

      ctx.save();
      ctx.translate(amb.currentX, amb.currentY);
      ctx.rotate(amb.heading || 0);

      // Beacon Pulse
      ctx.fillStyle = amb.id === 'AMB-104' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)';
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.fill();

      // Ambulance Body
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-10, -6, 20, 12);
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1;
      ctx.strokeRect(-10, -6, 20, 12);

      // Red Stripe
      ctx.fillStyle = amb.id === 'AMB-104' ? '#ef4444' : '#f59e0b';
      ctx.fillRect(-10, -2, 20, 4);

      // Flashing Siren
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Label above ambulance
      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${amb.id} (${amb.name})`, amb.currentX - 28, amb.currentY - 18);
    });

  }, [simState]);

  return (
    <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      {/* Top Map HUD Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between pointer-events-none gap-2">
        {/* Mode Switcher */}
        <div className="flex items-center space-x-2 pointer-events-auto bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-xl">
          <button
            onClick={() => setMapMode('TACTICAL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 transition-all ${
              mapMode === 'TACTICAL'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Icons.Layers className="w-3.5 h-3.5" />
            <span>DIGITAL TWIN SIMULATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-950 ml-1"></span>
          </button>

          <button
            onClick={() => setShowRealWorldLockedModal(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 text-slate-400 hover:text-slate-200 transition-all"
            title="Real-World Live Map Infrastructure Integration"
          >
            <Icons.Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>REAL-WORLD LIVE MAP</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[9px] text-amber-400 font-mono">FUTURE</span>
          </button>
        </div>

        {/* Legend Toggle & Live Status */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center space-x-1.5"
          >
            <Icons.Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showLegend ? 'Hide Legend' : 'Show Legend'}</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>60 FPS ENGINE ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Main Tactical Canvas */}
      <div className="relative w-full h-full flex-1">
        <canvas
          ref={canvasRef}
          width={920}
          height={680}
          className="w-full h-full object-contain cursor-crosshair"
        />

        {/* Simulated CCTV Stream Inset (CAM-04) */}
        <div className={`absolute bottom-4 right-4 z-20 transition-all ${
          cctvExpanded ? 'w-80 h-56 sm:w-96 sm:h-64' : 'w-48 h-32'
        } bg-slate-950/95 rounded-xl border border-slate-700 shadow-2xl overflow-hidden pointer-events-auto flex flex-col`}>
          <div className="h-6 bg-slate-900 border-b border-slate-800 px-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-white">CAM-04</span>
              <span className="text-slate-400">• INT-04</span>
            </div>
            <button
              onClick={() => setCctvExpanded(!cctvExpanded)}
              className="text-slate-400 hover:text-white text-[9px]"
            >
              {cctvExpanded ? 'Minimize' : 'Expand'}
            </button>
          </div>

          <div className="flex-1 relative bg-slate-900 overflow-hidden flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none"></div>
            <div className="text-center font-mono text-[10px] space-y-1">
              <div className="text-emerald-400 font-bold">LIVE CCTV STREAM (SIMULATED)</div>
              <div className="text-slate-400 text-[9px]">Intersection 4 • Central Corridor</div>
              <div className="text-slate-500 text-[8px]">{int4.modeLabel || 'NORMAL CYCLE'}</div>
            </div>
          </div>
        </div>

        {/* Clear Map Legend Overlay */}
        {showLegend && (
          <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5 shadow-xl pointer-events-auto max-w-xs">
            <div className="text-[10px] text-slate-400 uppercase font-bold border-b border-slate-800 pb-1">
              Map Legend
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3 h-1.5 rounded bg-emerald-400"></span>
              <span>GREEN: Emergency Corridor</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3 h-1.5 rounded bg-red-500"></span>
              <span>RED: Critical Congestion</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3 h-1.5 rounded bg-amber-500"></span>
              <span>AMBER: Moderate Congestion</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3 h-1.5 rounded bg-sky-400"></span>
              <span>BLUE: Normal Route</span>
            </div>
          </div>
        )}
      </div>

      {/* Requirement 17: Real-World Infrastructure Integration Modal */}
      {showRealWorldLockedModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Icons.Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Real-World Infrastructure Integration</h3>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">LOCKED / FUTURE PHASE</span>
                </div>
              </div>
              <button
                onClick={() => setShowRealWorldLockedModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-sans">
              <p className="font-semibold text-amber-300">
                Live infrastructure integration is not enabled in this prototype.
              </p>
              <p>
                Future versions may integrate authorized traffic, ambulance, and hospital systems subject to technical and regulatory approval.
              </p>
              
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] space-y-1.5">
                <div className="text-slate-400 uppercase font-bold">Planned Roadmap:</div>
                <div className="text-emerald-400">✓ Phase 1: Digital Twin Simulation (Current)</div>
                <div className="text-slate-300">○ Phase 2: Ambulance GPS MVP (Next)</div>
                <div className="text-slate-400">○ Phase 3: Real-Time Traffic Sensor Ingestion</div>
                <div className="text-slate-400">○ Phase 4: Authorized Municipal Pilot</div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowRealWorldLockedModal(false)}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-all"
              >
                Return to Digital Twin Simulation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.LiveMap = LiveMap;
