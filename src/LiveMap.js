// resQClear Interactive City Digital Twin Simulation Map (Hero Canvas Engine)
// 60 FPS Tactical Grid, Emergency Corridors, Intersections & Live Telemetry Overlay
const { useState, useEffect, useRef } = React;

function LiveMap({ simState, onSelectAmbulance, onApplyRoute }) {
  const canvasRef = useRef(null);
  const [mapMode, setMapMode] = useState('TACTICAL');
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

  // --- 60 FPS TACTICAL DIGITAL TWIN RENDERER ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Dark Operations Center Base Map Grid
    ctx.fillStyle = '#060a12';
    ctx.fillRect(0, 0, width, height);

    // Subtle Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 36) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 36) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Urban City Blocks / Zones
    ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.06)';
    ctx.lineWidth = 1;
    
    // Sector A - Anna Nagar North
    ctx.fillRect(40, 40, 360, 240);
    ctx.strokeRect(40, 40, 360, 240);

    // Sector B - T. Nagar South
    ctx.fillRect(40, 420, 360, 220);
    ctx.strokeRect(40, 420, 360, 220);

    // Sector C - Central Medical District
    ctx.fillRect(520, 40, 370, 240);
    ctx.strokeRect(520, 40, 370, 240);

    // Sector D - Apollo / Greams Zone
    ctx.fillRect(520, 420, 370, 220);
    ctx.strokeRect(520, 420, 370, 220);

    // Sector Identifier Labels
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.fillText('SECTOR 01: ANNA NAGAR NORTH', 50, 60);
    ctx.fillText('SECTOR 02: T. NAGAR SOUTH', 50, 440);
    ctx.fillText('SECTOR 03: GOVT MEDICAL ZONE', 530, 60);
    ctx.fillText('SECTOR 04: GREAMS ROAD / APOLLO ZONE', 530, 440);

    // Major Arterial Roads
    const roads = [
      { x1: 40, y1: 160, x2: 880, y2: 160, name: 'Poonamallee High Road', width: 34 },
      { x1: 40, y1: 350, x2: 880, y2: 350, name: 'Anna Salai Express Arterial', width: 44, primary: true },
      { x1: 40, y1: 540, x2: 880, y2: 540, name: 'Grand Southern Trunk (GST)', width: 34 },
      { x1: 280, y1: 40, x2: 280, y2: 650, name: '1st Avenue Cross Corridor', width: 32 },
      { x1: 450, y1: 40, x2: 450, y2: 650, name: 'EVR Periyar Central Spine', width: 42, primary: true },
      { x1: 620, y1: 40, x2: 620, y2: 650, name: 'Hospital Access Highway', width: 32 },
      { x1: 780, y1: 120, x2: 780, y2: 580, name: 'Medical Center Access Link', width: 28 }
    ];

    roads.forEach(r => {
      // Asphalt Base
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = r.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1);
      ctx.lineTo(r.x2, r.y2);
      ctx.stroke();

      // Road Borders
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1 - r.width/2);
      ctx.lineTo(r.x2, r.y2 - r.width/2);
      ctx.moveTo(r.x1, r.y1 + r.width/2);
      ctx.lineTo(r.x2, r.y2 + r.width/2);
      ctx.stroke();

      // Center Dotted Lane Markings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([7, 7]);
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1);
      ctx.lineTo(r.x2, r.y2);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // 4 Congestion Zones (RED: Critical, AMBER: Moderate)
    congestionZones.forEach(zone => {
      if (!zone.active) return;
      const isHigh = zone.severity === 'HIGH';
      const grad = ctx.createRadialGradient(zone.x, zone.y, 4, zone.x, zone.y, zone.radius);
      grad.addColorStop(0, isHigh ? 'rgba(239, 68, 68, 0.45)' : 'rgba(245, 158, 11, 0.35)');
      grad.addColorStop(0.7, isHigh ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.1)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
      ctx.fill();

      // Pulsing Ring for Critical Congestion
      ctx.strokeStyle = isHigh ? 'rgba(239, 68, 68, 0.6)' : 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(zone.x, zone.y, zone.radius * 0.85, 0, Math.PI * 2);
      ctx.stroke();

      // Label
      ctx.fillStyle = isHigh ? '#ef4444' : '#f59e0b';
      ctx.font = 'bold 8.5px "JetBrains Mono", monospace';
      ctx.fillText(`CONGESTION ${zone.delayImpact}`, zone.x - 32, zone.y - zone.radius - 3);
    });

    // Emergency Corridors & Normal Routes
    ambulances.forEach(amb => {
      if (!amb.path || amb.path.length < 2) return;
      
      // BLUE: Baseline / Normal Route
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 5;
      ctx.beginPath();
      amb.path.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // GREEN: Active Emergency Corridor (Forward Wave Animation)
      if (amb.currentX && amb.currentY) {
        const isPriorityA = amb.id === 'AMB-104' && (conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'A_CLEARED');
        const isPriorityB = amb.id === 'AMB-208' && (conflictState.stage === 'PRIORITY_B' || conflictState.stage === 'BOTH_CLEARED');
        const isCorridorActive = isPriorityA || isPriorityB || amb.id === 'AMB-312';

        ctx.strokeStyle = isCorridorActive ? '#10b981' : 'rgba(16, 185, 129, 0.5)';
        ctx.lineWidth = isCorridorActive ? 8 : 5;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = isCorridorActive ? 12 : 4;
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
          const arrowX = amb.currentX + Math.cos(amb.heading) * 22;
          const arrowY = amb.currentY + Math.sin(amb.heading) * 22;
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

    // 6 Intersections (INT-01 to INT-06) with Signals
    intersections.forEach(inter => {
      ctx.save();
      ctx.translate(inter.x, inter.y);

      // Intersection Code Label (e.g., INT-04)
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillStyle = inter.id === 'int-4' ? '#38bdf8' : '#94a3b8';
      ctx.fillText(inter.code || inter.id.toUpperCase(), -18, -26);

      // Central Conflict Junction INT-04 Special Box & Rings
      if (inter.id === 'int-4') {
        const isConflict = conflictState.stage && conflictState.stage !== 'IDLE' && conflictState.stage !== 'BOTH_CLEARED';
        ctx.strokeStyle = isConflict ? 'rgba(239, 68, 68, 0.8)' : 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.stroke();

        if (isConflict) {
          ctx.strokeStyle = '#ef4444';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.arc(0, 0, 44, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Simulated Signal Control Mode Banner
        ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
        ctx.fillRect(-70, 24, 140, 20);
        ctx.strokeStyle = isConflict ? '#ef4444' : '#10b981';
        ctx.lineWidth = 1;
        ctx.strokeRect(-70, 24, 140, 20);
        ctx.fillStyle = isConflict ? '#ef4444' : '#10b981';
        ctx.font = 'bold 8px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(inter.modeLabel || 'NORMAL CYCLE', 0, 37);
        ctx.textAlign = 'left';
      }

      // Signal Lamps Housing Box
      ctx.fillStyle = '#020617';
      ctx.fillRect(-8, -18, 16, 36);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(-8, -18, 16, 36);

      // Red Lamp
      const isRed = inter.northSouth === 'RED';
      ctx.fillStyle = isRed ? '#ef4444' : '#450a0a';
      ctx.beginPath();
      ctx.arc(0, -11, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Yellow Lamp
      const isYellow = inter.northSouth === 'YELLOW';
      ctx.fillStyle = isYellow ? '#f59e0b' : '#451a03';
      ctx.beginPath();
      ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Green Lamp
      const isGreen = inter.northSouth === 'GREEN';
      ctx.fillStyle = isGreen ? '#10b981' : '#022c22';
      ctx.beginPath();
      ctx.arc(0, 11, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });

    // 3 Destination Hospitals
    hospitals.forEach(hosp => {
      ctx.save();
      ctx.translate(hosp.x, hosp.y);

      // Outer Radar Glow
      ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.fill();

      // Base Circle
      ctx.fillStyle = '#064e3b';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Hospital White Cross
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-2, -8, 4, 16);
      ctx.fillRect(-8, -2, 16, 4);

      // Label
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillStyle = '#10b981';
      ctx.fillText(hosp.shortName, -24, -22);

      ctx.restore();
    });

    // Ambulances (AMB-104, AMB-208, AMB-312)
    ambulances.forEach(amb => {
      if (!amb.currentX || !amb.currentY) return;

      ctx.save();
      ctx.translate(amb.currentX, amb.currentY);
      ctx.rotate(amb.heading || 0);

      // Siren Pulse
      const isCritical = amb.status === 'CRITICAL';
      ctx.fillStyle = isCritical ? 'rgba(239, 68, 68, 0.35)' : 'rgba(245, 158, 11, 0.3)';
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.fill();

      // Ambulance Body
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-11, -7, 22, 14);
      ctx.strokeStyle = '#020617';
      ctx.lineWidth = 1;
      ctx.strokeRect(-11, -7, 22, 14);

      // Emergency Stripe
      ctx.fillStyle = isCritical ? '#ef4444' : '#f59e0b';
      ctx.fillRect(-11, -2.5, 22, 5);

      // Flashing Siren Beacon
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // ID and Speed Tag
      ctx.font = 'bold 9.5px "JetBrains Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${amb.id} (${amb.speed} ${amb.speedUnit})`, amb.currentX - 32, amb.currentY - 18);
    });

  }, [simState]);

  return (
    <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col shadow-2xl">
      {/* Top Map HUD Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex flex-wrap items-center justify-between pointer-events-none gap-2">
        {/* Digital Twin Mode Badge */}
        <div className="flex items-center space-x-2 pointer-events-auto bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-xl">
          <button
            onClick={() => setMapMode('TACTICAL')}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 bg-emerald-500 text-slate-950 shadow-md transition-all"
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

        {/* Legend Toggle & 60 FPS Badge */}
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
            <span>SIMULATED SIGNAL CONTROL ACTIVE</span>
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
        <div className={`absolute bottom-3.5 right-3.5 z-20 transition-all ${
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

          <div className="flex-1 relative bg-slate-900/90 overflow-hidden flex items-center justify-center p-2">
            <div className="text-center font-mono text-[10px] space-y-1">
              <div className="text-emerald-400 font-bold">LIVE CCTV STREAM (SIMULATED)</div>
              <div className="text-slate-300 text-[9px]">Intersection 4 • Central Corridor</div>
              <div className="text-slate-400 text-[8px]">{int4.modeLabel || 'NORMAL CYCLE'}</div>
            </div>
          </div>
        </div>

        {/* Clear Map Legend Overlay */}
        {showLegend && (
          <div className="absolute bottom-3.5 left-3.5 z-20 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5 shadow-xl pointer-events-auto max-w-xs">
            <div className="text-[10px] text-slate-400 uppercase font-bold border-b border-slate-800 pb-1">
              Map Legend
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3.5 h-1.5 rounded bg-emerald-400"></span>
              <span>GREEN: Emergency Corridor</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3.5 h-1.5 rounded bg-red-500"></span>
              <span>RED: Critical Congestion</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3.5 h-1.5 rounded bg-amber-500"></span>
              <span>AMBER: Congestion</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="w-3.5 h-1.5 rounded bg-sky-400"></span>
              <span>BLUE: Normal Route</span>
            </div>
            <div className="pt-1 text-[9px] text-slate-500 border-t border-slate-900">
              INT-01 to INT-06: Simulated Signals
            </div>
          </div>
        )}
      </div>

      {/* Real-World Infrastructure Integration Modal */}
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
                <div className="text-slate-400">○ Phase 4: Ambulance + Hospital Pilot</div>
                <div className="text-slate-400">○ Phase 5: Authorized Traffic Infrastructure Integration</div>
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
