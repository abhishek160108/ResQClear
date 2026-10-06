// resQClear Interactive City Road Simulation & Real-World Live Traffic Map Component
const { useState, useEffect, useRef } = React;

function LiveMap({ simState, onSelectAmbulance, onApplyRoute }) {
  const canvasRef = useRef(null);
  const leafletContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const polylineLayerRef = useRef(null);

  const [mapMode, setMapMode] = useState('TACTICAL'); // 'TACTICAL' (Digital Twin) | 'REAL_WORLD' (Leaflet OpenStreetMap)
  const [activeCam, setActiveCam] = useState('ALL'); // ALL, AMB_A, AMB_B, INT_4
  const [cctvExpanded, setCctvExpanded] = useState(false);
  const [trafficLayerActive, setTrafficLayerActive] = useState(true);

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
    if (mapMode !== 'TACTICAL') return;
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

    // Congestion Zones
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
      ctx.fillText(`SLOW ${zone.delayImpact}`, zone.x - 24, zone.y - zone.radius - 4);
    });

    // Green Wave Routes
    ambulances.forEach(amb => {
      if (!amb.path || amb.path.length < 2) return;
      
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = 6;
      ctx.beginPath();
      amb.path.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      if (amb.currentX && amb.currentY) {
        ctx.strokeStyle = amb.id === 'AMB-104' && conflictState.stage === 'PRIORITY_A' ? '#10b981' : 
                          amb.id === 'AMB-208' && conflictState.stage === 'PRIORITY_B' ? '#10b981' : 
                          'rgba(16, 185, 129, 0.7)';
        ctx.lineWidth = 8;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(amb.currentX, amb.currentY);
        const nextIdx = Math.min(amb.path.length - 1, (amb.progress > 0.5 ? 4 : 3));
        for (let i = nextIdx; i < Math.min(amb.path.length, nextIdx + 2); i++) {
          ctx.lineTo(amb.path[i].x, amb.path[i].y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    });

    // Intersections & Signals
    intersections.forEach(inter => {
      const isCentral = inter.id === 'int-4';
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = isCentral && inter.hasConflict ? '#ef4444' : isCentral ? '#10b981' : '#334155';
      ctx.lineWidth = isCentral ? 2.5 : 1.5;
      ctx.fillRect(inter.x - 22, inter.y - 22, 44, 44);
      ctx.strokeRect(inter.x - 22, inter.y - 22, 44, 44);

      if (isCentral && (conflictState.stage === 'DETECTED' || conflictState.stage === 'RESOLVING')) {
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(inter.x, inter.y, 48 + (Math.sin(Date.now() / 200) * 8), 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (isCentral && (conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'PRIORITY_B')) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(inter.x, inter.y, 44, 0, Math.PI * 2);
        ctx.stroke();
      }

      let nsColor = '#ef4444';
      if (inter.northSouth === 'GREEN') nsColor = '#10b981';
      else if (inter.northSouth === 'YELLOW') nsColor = '#f59e0b';

      let ewColor = '#ef4444';
      if (inter.eastWest === 'GREEN') ewColor = '#10b981';
      else if (inter.eastWest === 'YELLOW') ewColor = '#f59e0b';

      ctx.fillStyle = '#020617';
      ctx.fillRect(inter.x - 6, inter.y - 34, 12, 10);
      ctx.fillStyle = nsColor;
      ctx.beginPath();
      ctx.arc(inter.x, inter.y - 29, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#020617';
      ctx.fillRect(inter.x + 24, inter.y - 6, 10, 12);
      ctx.fillStyle = ewColor;
      ctx.beginPath();
      ctx.arc(inter.x + 29, inter.y, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(inter.id.toUpperCase(), inter.x - 12, inter.y + 4);

      if (isCentral && inter.priorityVehicle) {
        ctx.font = 'bold 8px "JetBrains Mono", monospace';
        ctx.fillStyle = '#10b981';
        ctx.fillText(`PRIORITY: ${inter.priorityVehicle}`, inter.x - 30, inter.y + 32);
      }
    });

    // Civilian Cars
    civilianVehicles.forEach(car => {
      ctx.save();
      ctx.translate(car.x, car.y);
      ctx.fillStyle = car.yielding ? '#f59e0b' : car.color;
      ctx.fillRect(-4, -2.5, 8, 5);
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(3, -2, 1.5, 1.5);
      ctx.fillRect(3, 0.5, 1.5, 1.5);
      ctx.restore();
    });

    // Hospitals
    hospitals.forEach(hosp => {
      ctx.save();
      ctx.translate(hosp.x, hosp.y);
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.fillRect(-28, -28, 56, 56);
      ctx.strokeRect(-28, -28, 56, 56);

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 16px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('H', 0, 0);

      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(hosp.shortName, 0, 38);

      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = hosp.erStatus === 'READY' ? '#10b981' : '#f59e0b';
      ctx.fillText(`ER: ${hosp.erStatus}`, 0, 48);
      ctx.restore();
    });

    // Ambulances
    ambulances.forEach(amb => {
      if (!amb.currentX || !amb.currentY) return;

      ctx.save();
      ctx.translate(amb.currentX, amb.currentY);
      ctx.rotate(amb.heading || 0);

      const pulseRadius = 24 + Math.sin(Date.now() / 150) * 8;
      ctx.strokeStyle = amb.color === '#ef4444' ? 'rgba(239, 68, 68, 0.4)' : 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      const lightGrad = ctx.createRadialGradient(0, 0, 10, 40, 0, 50);
      lightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      lightGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = lightGrad;
      ctx.beginPath();
      ctx.moveTo(10, -8);
      ctx.lineTo(55, -25);
      ctx.lineTo(55, 25);
      ctx.lineTo(10, 8);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1;
      ctx.fillRect(-14, -8, 28, 16);
      ctx.strokeRect(-14, -8, 28, 16);

      ctx.fillStyle = '#0284c7';
      ctx.fillRect(4, -6, 6, 12);
      ctx.fillRect(-10, -7, 10, 2);
      ctx.fillRect(-10, 5, 10, 2);

      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-4, -2, 8, 4);
      ctx.fillRect(-2, -4, 4, 8);

      const isRedPhase = Math.floor(Date.now() / 120) % 2 === 0;
      ctx.fillStyle = isRedPhase ? '#ef4444' : '#3b82f6';
      ctx.fillRect(1, -7, 3, 4);
      ctx.fillStyle = isRedPhase ? '#3b82f6' : '#ef4444';
      ctx.fillRect(1, 3, 3, 4);
      ctx.restore();

      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${amb.id} (${amb.name})`, amb.currentX - 30, amb.currentY - 24);

      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = amb.status === 'CRITICAL' ? '#ef4444' : '#f59e0b';
      ctx.fillText(`${amb.status} • ${amb.speed} km/h`, amb.currentX - 30, amb.currentY - 14);
    });

  }, [simState, mapMode]);

  // --- 2. REAL-WORLD LIVE TRAFFIC LEAFLET MAP INITIALIZER & UPDATER ---
  useEffect(() => {
    if (mapMode !== 'REAL_WORLD') return;
    if (!leafletContainerRef.current) return;
    if (typeof L === 'undefined') return;

    // Initialize map once
    if (!mapInstanceRef.current) {
      const map = L.map(leafletContainerRef.current, {
        center: [13.0650, 80.2450],
        zoom: 13,
        zoomControl: false,
        attributionControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // CartoDB Dark Matter base layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      // Add Hospital Markers
      hospitals.forEach(hosp => {
        if (!hosp.lat || !hosp.lng) return;
        const iconHtml = `
          <div class="relative flex items-center justify-center w-8 h-8 rounded-xl bg-slate-950 border-2 border-emerald-500 shadow-lg shadow-emerald-500/50 text-emerald-400 font-bold text-xs">
            H
            <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
        `;
        const icon = L.divIcon({ html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16] });
        L.marker([hosp.lat, hosp.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong style="color:#0f172a;">${hosp.name}</strong><br/><span style="color:#059669; font-weight:bold;">ER Status: ${hosp.erStatus}</span>`);
      });

      // Add Real Congestion Heat Polylines (Anna Salai, Poonamallee Rd)
      const congestionPolylines = [
        // Heavy bottleneck on Anna Salai North
        {
          coords: [[13.0720, 80.2520], [13.0680, 80.2550], [13.0620, 80.2500]],
          color: '#ef4444',
          label: 'Anna Salai Heavy Delay (+2.4 min)'
        },
        // Moderate traffic on Usman Road
        {
          coords: [[13.0418, 80.2341], [13.0480, 80.2390], [13.0550, 80.2440]],
          color: '#f59e0b',
          label: 'Usman Flyover Moderate Congestion'
        },
        // Flowing green corridor
        {
          coords: [[13.0780, 80.2420], [13.0750, 80.2580], [13.0790, 80.2680], [13.0827, 80.2785]],
          color: '#10b981',
          label: 'resQClear Green Wave Corridor'
        }
      ];

      congestionPolylines.forEach(c => {
        L.polyline(c.coords, {
          color: c.color,
          weight: 6,
          opacity: 0.85,
          lineCap: 'round'
        }).addTo(map).bindPopup(`<strong>${c.label}</strong>`);
      });

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    if (!map) return;

    // Update Live Ambulance GPS Markers
    ambulances.forEach(amb => {
      if (!amb.geoPath || amb.geoPath.length < 2) return;
      
      // Calculate current geo lat/lng from progress
      const totalSeg = amb.geoPath.length - 1;
      const scaled = amb.progress * totalSeg;
      const idx = Math.min(Math.floor(scaled), totalSeg - 1);
      const segT = scaled - idx;

      const p1 = amb.geoPath[idx];
      const p2 = amb.geoPath[idx + 1];

      const curLat = p1[0] + (p2[0] - p1[0]) * segT;
      const curLng = p1[1] + (p2[1] - p1[1]) * segT;

      const markerKey = amb.id;
      const isCritical = amb.status === 'CRITICAL';

      const ambulanceIconHtml = `
        <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 ${
          amb.id === 'AMB-104' ? 'border-red-500 shadow-red-500/80' : 'border-amber-500 shadow-amber-500/80'
        } shadow-xl">
          <span class="text-white text-xs font-bold font-mono">${amb.id === 'AMB-104' ? 'A' : 'B'}</span>
          <span class="absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            amb.id === 'AMB-104' ? 'bg-red-500 animate-ping' : 'bg-amber-400 animate-pulse'
          }"></span>
        </div>
      `;

      const icon = L.divIcon({ html: ambulanceIconHtml, className: '', iconSize: [40, 40], iconAnchor: [20, 20] });

      if (markersRef.current[markerKey]) {
        markersRef.current[markerKey].setLatLng([curLat, curLng]);
      } else {
        const m = L.marker([curLat, curLng], { icon }).addTo(map);
        m.bindPopup(`<strong>${amb.id} (${amb.name})</strong><br/>Destination: ${amb.destination}<br/>ETA: ${amb.eta}`);
        markersRef.current[markerKey] = m;
      }
    });

  }, [simState, mapMode]);

  return (
    <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      {/* Top Map HUD & Mode Switcher Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between pointer-events-none gap-2">
        {/* Left Status & Real-World Toggle */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          {/* MAP MODE SWITCHER */}
          <div className="glass-panel p-1 rounded-xl flex items-center space-x-1 border border-slate-700/80 shadow-xl bg-slate-950/90">
            <button
              onClick={() => setMapMode('TACTICAL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                mapMode === 'TACTICAL'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Cpu className="w-3.5 h-3.5" />
              <span>Digital Twin Simulation</span>
            </button>
            <button
              onClick={() => setMapMode('REAL_WORLD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                mapMode === 'REAL_WORLD'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Compass className="w-3.5 h-3.5" />
              <span>Real-World Live Map</span>
            </button>
          </div>

          <div className="hidden sm:flex glass-panel px-3 py-1.5 rounded-xl items-center space-x-2 text-xs font-mono border border-slate-700/80 text-slate-300">
            <Icons.Navigation className="w-3.5 h-3.5 text-cyan-400" />
            <span>CHENNAI METRO (13.0827° N, 80.2707° E)</span>
          </div>
        </div>

        {/* Camera View Selector */}
        <div className="flex items-center space-x-1.5 glass-panel p-1 rounded-xl pointer-events-auto border border-slate-700/80">
          <button
            onClick={() => setActiveCam('ALL')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeCam === 'ALL' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveCam('INT_4')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeCam === 'INT_4' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Central Int. 4
          </button>
          <button
            onClick={() => setActiveCam('AMB_A')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeCam === 'AMB_A' ? 'bg-red-500 text-white font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            AMB-104 (A)
          </button>
          <button
            onClick={() => setActiveCam('AMB_B')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeCam === 'AMB_B' ? 'bg-red-500 text-white font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            AMB-208 (B)
          </button>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
        {mapMode === 'TACTICAL' ? (
          <canvas
            ref={canvasRef}
            width={920}
            height={680}
            className="w-full h-full object-contain"
          />
        ) : (
          <div
            ref={leafletContainerRef}
            className="w-full h-full z-10"
            style={{ minHeight: '480px' }}
          />
        )}
      </div>

      {/* DYNAMIC CONFLICT RESOLUTION BANNER OVERLAY */}
      {conflictState.stage && conflictState.stage !== 'IDLE' && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-4 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
          <div className={`rounded-2xl p-4 shadow-2xl backdrop-blur-xl border ${
            conflictState.bannerType === 'alert' ? 'glass-alert border-red-500/80 bg-red-950/85' :
            conflictState.bannerType === 'warning' ? 'glass-warning border-amber-500/80 bg-amber-950/85' :
            'glass-success border-emerald-500/80 bg-emerald-950/85'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full animate-ping ${
                  conflictState.bannerType === 'alert' ? 'bg-red-400' :
                  conflictState.bannerType === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'
                }`}></span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                  {conflictState.bannerText}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700 text-slate-300">
                INT. 4 CONFLICT ARBITRATION
              </span>
            </div>

            <p className="text-sm font-medium text-slate-100">
              {conflictState.bannerSubtext}
            </p>

            {conflictState.stage !== 'BOTH_CLEARED' && (
              <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-red-500/30">
                  <span className="text-red-400 font-bold">🚑 AMB-104 (A)</span>
                  <span className="text-slate-300">{ambA.currentIntersectionEta || 12}s to Int • 180m</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-amber-500/30">
                  <span className="text-amber-400 font-bold">🚑 AMB-208 (B)</span>
                  <span className="text-slate-300">{ambB.currentIntersectionEta || 19}s to Int • 290m</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Picture-in-Picture CCTV Camera Feed (Bottom Left) */}
      <div className={`absolute bottom-4 left-4 z-20 transition-all duration-300 ${cctvExpanded ? 'w-80 sm:w-96' : 'w-56 sm:w-64'}`}>
        <div className="glass-panel rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl">
          <div className="bg-slate-950/90 px-3 py-1.5 flex items-center justify-between border-b border-slate-800 text-[11px] font-mono">
            <div className="flex items-center space-x-1.5 text-red-400">
              <Icons.Camera className="w-3.5 h-3.5" />
              <span>CCTV CAM-04: CENTRAL JUNCTION</span>
            </div>
            <button
              onClick={() => setCctvExpanded(!cctvExpanded)}
              className="text-slate-400 hover:text-white"
            >
              {cctvExpanded ? 'Minimize' : 'Expand'}
            </button>
          </div>

          <div className="relative h-32 bg-slate-900 flex items-center justify-center overflow-hidden">
            <div className="absolute top-2 left-2 flex items-center space-x-1 text-[10px] font-mono text-red-500 bg-black/60 px-1.5 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <span>LIVE REC</span>
            </div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-300 bg-black/60 px-1.5 py-0.5 rounded">
              CAM-04 / 30FPS
            </div>

            <svg className="w-full h-full bg-slate-950" viewBox="0 0 200 100">
              <rect x="0" y="0" width="200" height="100" fill="#090d16" />
              <polygon points="70,100 130,100 110,40 90,40" fill="#1e293b" />
              <polygon points="0,60 200,60 200,80 0,80" fill="#1e293b" />
              <line x1="100" y1="40" x2="100" y2="100" stroke="#f8fafc" strokeDasharray="4,4" opacity="0.4" />

              <rect x="135" y="25" width="4" height="40" fill="#475569" />
              <rect x="131" y="20" width="12" height="24" rx="2" fill="#020617" />
              <circle cx="137" cy="24" r="2.5" fill={int4.northSouth === 'GREEN' ? '#10b981' : int4.northSouth === 'YELLOW' ? '#f59e0b' : '#ef4444'} className="animate-pulse" />

              {ambA.progress > 0.3 && ambA.progress < 0.65 && (
                <g transform={`translate(95, ${35 + (ambA.progress - 0.3) * 180})`}>
                  <rect x="-8" y="-12" width="16" height="24" rx="2" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="0" cy="0" r="10" fill="#ef4444" opacity="0.3" className="animate-ping" />
                </g>
              )}
            </svg>

            <div className="absolute bottom-1 right-2 text-[9px] font-mono text-slate-400">
              SIGNAL: <strong className={int4.northSouth === 'GREEN' ? 'text-emerald-400' : 'text-red-400'}>{int4.northSouth || 'RED'}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Map Legend */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2">
        <div className="glass-panel px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 flex items-center space-x-4 border border-slate-700/80">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>Emergency Corridor</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span>Critical ALS</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>Congestion</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.LiveMap = LiveMap;
