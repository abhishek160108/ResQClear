// resQClear Real-Time Traffic & Emergency Simulation Engine
// Enterprise Operations Center & Digital Twin Simulation Core

class SimulationEngine {
  constructor() {
    this.isRunning = true;
    this.speedMultiplier = 1.0;
    this.ambulances = JSON.parse(JSON.stringify(RESQCLEAR_DATA.initialAmbulances));
    this.intersections = JSON.parse(JSON.stringify(RESQCLEAR_DATA.intersections));
    this.congestionZones = JSON.parse(JSON.stringify(RESQCLEAR_DATA.congestionZones));
    this.hospitals = JSON.parse(JSON.stringify(RESQCLEAR_DATA.hospitals));
    
    // Civilian traffic
    this.civilianVehicles = this.initCivilianTraffic();

    // Event Log (Realistic operations chronology with exact clock timestamps)
    this.events = [
      { id: 1, time: '13:50:18', type: 'system', message: 'resQClear Simulation Grid Engine Initialized • 6 Signal Nodes Online' },
      { id: 2, time: '13:50:20', type: 'info', message: 'Emergency vehicle tracking initialized • Telemetry stream active' },
      { id: 3, time: '13:50:25', type: 'info', message: 'V2X Conflict Arbitration Engine Ready (Digital Twin Simulation)' }
    ];

    // Conflict State
    this.conflictState = {
      detected: false,
      stage: 'IDLE', // IDLE, DETECTING, PREDICTING, ANALYZING, GENERATING_SEQUENCE, PRIORITY_A, A_CLEARED, PRIORITY_B, B_CLEARED, BOTH_CLEARED
      ambA: null,
      ambB: null,
      decision: null,
      bannerText: '',
      bannerSubtext: '',
      bannerType: 'info', // alert, warning, success, info
      signalPhase: 'NORMAL CYCLE', // NORMAL CYCLE, EMERGENCY PRIORITY REQUESTED, SIGNAL PREPARING, GREEN CORRIDOR ACTIVE, AMBULANCE PASSING, CORRIDOR CLEARED, NORMAL CYCLE RESTORED
      corridorStatusA: 'INACTIVE', // INACTIVE, ACTIVE, CLEARED
      corridorStatusB: 'INACTIVE',
      whyModalOpen: false
    };

    // System Intelligence Status
    this.systemIntelligence = {
      trafficAnalysis: { label: 'TRAFFIC ANALYSIS', status: 'Congestion detected', active: true, done: true },
      routeAnalysis: { label: 'ROUTE ANALYSIS', status: 'Alternate route evaluated', active: false, done: false },
      conflictAnalysis: { label: 'CONFLICT ANALYSIS', status: 'Multi-ambulance conflict detected', active: false, done: false },
      sequence: { label: 'SEQUENCE', status: 'Priority order generated', active: false, done: false },
      corridor: { label: 'CORRIDOR', status: 'Emergency corridor simulated', active: false, done: false },
      hospitalEta: { label: 'HOSPITAL ETA', status: 'ETA synchronized with ER', active: true, done: true }
    };

    // Network Status Summary
    this.networkStatus = {
      intersectionsOnline: 6,
      ambulancesTracked: 3,
      hospitalsAvailable: 3,
      congestionZonesDetected: 4,
      activeConflicts: 1,
      systemHealth: 'NORMAL'
    };

    // Automated Demo Scenario orchestrator (16 Sequential Steps)
    this.scenarioStep = 0;
    this.scenarioRunning = false;
    this.scenarioTimer = 0;
    this.scenarioCompleteModal = false;

    // AI Insight state
    this.aiInsight = {
      visible: true,
      title: 'AI TRAFFIC INSIGHT',
      message: 'High traffic density detected on Anna Salai North Link.',
      predictedDelay: '+2.4 min',
      altRoute: 'Route B (EVR Periyar Express)',
      savings: '2m 18s',
      applied: false,
      badge: 'SIMULATION ESTIMATE'
    };

    // Metrics counter (Simulation Estimates)
    this.liveMetrics = {
      timeSavedSec: 138, // 2m 18s
      intersectionsCoordinated: 4,
      ambulancesCoordinated: 2,
      emergencyEventsSimulated: 12,
      decisionConfidence: '96%',
      avgSpeed: 42.4,
      activeCorridors: 2,
      delayAvoided: '2m 18s',
      baselineEta: '08:34',
      optimizedEta: '06:16'
    };

    this.listeners = [];
    this.lastTimestamp = performance.now();
    this.requestFrameId = null;

    this.loop = this.loop.bind(this);
    this.start();
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    const state = this.getState();
    this.listeners.forEach(cb => cb(state));
  }

  getState() {
    return {
      isRunning: this.isRunning,
      speedMultiplier: this.speedMultiplier,
      ambulances: this.ambulances,
      intersections: this.intersections,
      congestionZones: this.congestionZones,
      hospitals: this.hospitals,
      civilianVehicles: this.civilianVehicles,
      events: this.events,
      conflictState: this.conflictState,
      systemIntelligence: this.systemIntelligence,
      networkStatus: this.networkStatus,
      scenarioRunning: this.scenarioRunning,
      scenarioStep: this.scenarioStep,
      scenarioCompleteModal: this.scenarioCompleteModal,
      aiInsight: this.aiInsight,
      liveMetrics: this.liveMetrics
    };
  }

  initCivilianTraffic() {
    const cars = [];
    const colors = ['#64748b', '#94a3b8', '#cbd5e1', '#475569', '#38bdf8', '#fbbf24'];
    const roads = [
      { start: { x: 50, y: 160 }, end: { x: 880, y: 160 }, dir: 'E' },
      { start: { x: 880, y: 160 }, end: { x: 50, y: 160 }, dir: 'W' },
      { start: { x: 50, y: 350 }, end: { x: 880, y: 350 }, dir: 'E' },
      { start: { x: 880, y: 350 }, end: { x: 50, y: 350 }, dir: 'W' },
      { start: { x: 50, y: 540 }, end: { x: 880, y: 540 }, dir: 'E' },
      { start: { x: 880, y: 540 }, end: { x: 50, y: 540 }, dir: 'W' },
      { start: { x: 280, y: 50 }, end: { x: 280, y: 650 }, dir: 'S' },
      { start: { x: 450, y: 50 }, end: { x: 450, y: 650 }, dir: 'S' },
      { start: { x: 620, y: 50 }, end: { x: 620, y: 650 }, dir: 'S' },
      { start: { x: 450, y: 650 }, end: { x: 450, y: 50 }, dir: 'N' }
    ];

    roads.forEach((road, idx) => {
      for (let i = 0; i < 3; i++) {
        const t = (i / 3) + Math.random() * 0.15;
        const x = road.start.x + (road.end.x - road.start.x) * t;
        const y = road.start.y + (road.end.y - road.start.y) * t;
        cars.push({
          id: `civ-${idx}-${i}`,
          x,
          y,
          road,
          t,
          speed: 0.0008 + Math.random() * 0.0006,
          color: colors[Math.floor(Math.random() * colors.length)],
          yielding: false
        });
      }
    });
    return cars;
  }

  logEvent(type, message) {
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];
    const newEvent = {
      id: Date.now() + Math.random(),
      time,
      type,
      message
    };
    this.events = [newEvent, ...this.events.slice(0, 35)];
  }

  start() {
    this.isRunning = true;
    this.lastTimestamp = performance.now();
    if (!this.requestFrameId) {
      this.requestFrameId = requestAnimationFrame(this.loop);
    }
    this.notify();
  }

  pause() {
    this.isRunning = false;
    this.notify();
  }

  setSpeed(multiplier) {
    this.speedMultiplier = multiplier;
    this.notify();
  }

  reset() {
    this.ambulances = JSON.parse(JSON.stringify(RESQCLEAR_DATA.initialAmbulances));
    this.intersections = JSON.parse(JSON.stringify(RESQCLEAR_DATA.intersections));
    this.congestionZones = JSON.parse(JSON.stringify(RESQCLEAR_DATA.congestionZones));
    this.civilianVehicles = this.initCivilianTraffic();
    this.conflictState = {
      detected: false,
      stage: 'IDLE',
      ambA: null,
      ambB: null,
      decision: null,
      bannerText: '',
      bannerSubtext: '',
      bannerType: 'info',
      signalPhase: 'NORMAL CYCLE',
      corridorStatusA: 'INACTIVE',
      corridorStatusB: 'INACTIVE',
      whyModalOpen: false
    };
    this.systemIntelligence = {
      trafficAnalysis: { label: 'TRAFFIC ANALYSIS', status: 'Congestion detected', active: true, done: true },
      routeAnalysis: { label: 'ROUTE ANALYSIS', status: 'Alternate route evaluated', active: false, done: false },
      conflictAnalysis: { label: 'CONFLICT ANALYSIS', status: 'Multi-ambulance conflict detected', active: false, done: false },
      sequence: { label: 'SEQUENCE', status: 'Priority order generated', active: false, done: false },
      corridor: { label: 'CORRIDOR', status: 'Emergency corridor simulated', active: false, done: false },
      hospitalEta: { label: 'HOSPITAL ETA', status: 'ETA synchronized with ER', active: true, done: true }
    };
    this.networkStatus.activeConflicts = 0;
    this.scenarioRunning = false;
    this.scenarioStep = 0;
    this.scenarioTimer = 0;
    this.scenarioCompleteModal = false;
    this.aiInsight.applied = false;
    this.logEvent('info', 'Simulation reset: Grid and telemetry restored to default parameters.');
    this.notify();
  }

  toggleWhyModal(isOpen) {
    this.conflictState.whyModalOpen = isOpen !== undefined ? isOpen : !this.conflictState.whyModalOpen;
    this.notify();
  }

  closeScenarioCompleteModal() {
    this.scenarioCompleteModal = false;
    this.notify();
  }

  getPointOnPath(path, progress) {
    if (!path || path.length < 2) return path[0] || { x: 0, y: 0 };
    const totalSegments = path.length - 1;
    const scaled = Math.max(0, Math.min(progress, 0.9999)) * totalSegments;
    const segIndex = Math.min(Math.floor(scaled), totalSegments - 1);
    const segProgress = scaled - segIndex;

    const p1 = path[segIndex];
    const p2 = path[segIndex + 1];

    const x = p1.x + (p2.x - p1.x) * segProgress;
    const y = p1.y + (p2.y - p1.y) * segProgress;
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    return { x, y, angle, currentSegment: segIndex };
  }

  update(deltaTime) {
    if (!this.isRunning) return;

    const dt = (deltaTime / 1000) * this.speedMultiplier;

    // 1. Update normal traffic light cycles for standard intersections
    this.intersections.forEach(inter => {
      if (inter.id !== 'int-4' || this.conflictState.stage === 'IDLE' || this.conflictState.stage === 'BOTH_CLEARED') {
        inter.timer -= dt;
        if (inter.timer <= 0) {
          inter.timer = 14 + Math.random() * 6;
          inter.northSouth = inter.northSouth === 'GREEN' ? 'RED' : 'GREEN';
          inter.eastWest = inter.northSouth === 'GREEN' ? 'RED' : 'GREEN';
          inter.modeLabel = 'NORMAL CYCLE';
          inter.simulatedPhase = 'NORMAL CYCLE';
        }
      }
    });

    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    const ambC = this.ambulances.find(a => a.id === 'AMB-312');

    // 2. Animate Ambulances & Live Telemetry
    this.ambulances.forEach(amb => {
      let speedFactor = 0.034;

      // In conflict priority phase, adjust speeds realistically
      if (amb.id === 'AMB-208' && this.conflictState.stage === 'PRIORITY_A' && amb.progress > 0.44 && amb.progress < 0.52) {
        speedFactor = 0.008; // Holding / decelerating
        amb.currentState = 'HOLDING FOR PRIORITY 01';
      } else if (amb.id === 'AMB-104' && this.conflictState.stage === 'PRIORITY_A') {
        speedFactor = 0.048; // Accelerating through green corridor
        amb.currentState = 'CLEARING INTERSECTION (PRIORITY 01)';
      } else if (amb.id === 'AMB-208' && this.conflictState.stage === 'PRIORITY_B') {
        speedFactor = 0.052; // Secondary clearance proceeds
        amb.currentState = 'CLEARING INTERSECTION (PRIORITY 02)';
      } else if (amb.progress >= 0.54 && amb.progress < 0.85) {
        amb.currentState = 'IN TRANSIT (CORRIDOR ACTIVE)';
      } else if (amb.progress >= 0.85) {
        amb.currentState = 'APPROACHING ER BAY';
      } else {
        amb.currentState = 'APPROACHING INTERSECTION';
      }

      amb.progress += speedFactor * dt;
      if (amb.progress > 0.98) {
        amb.progress = 0.98;
      }

      // Position along route
      const pos = this.getPointOnPath(amb.path, amb.progress);
      amb.currentX = pos.x;
      amb.currentY = pos.y;
      amb.heading = pos.angle;

      // Dynamic Live Telemetry updates (Speed 41 -> 42 -> 43 km/h with subtle micro-fluctuation)
      const baseSpeed = amb.id === 'AMB-104' ? 42 : amb.id === 'AMB-208' ? 40 : 48;
      const speedJitter = Math.sin(performance.now() / 800 + (amb.id === 'AMB-104' ? 0 : 2)) * 1.8;
      amb.speed = Math.round((baseSpeed + speedJitter) * 10) / 10;

      // Distance to conflict junction INT-04 (x: 450, y: 350)
      const distPx = Math.hypot(450 - pos.x, 350 - pos.y);
      if (amb.progress < 0.50) {
        // Counting down from 555m -> 510m -> 462m -> ...
        const remainingFraction = Math.max(0, (0.50 - amb.progress) / 0.38);
        amb.distanceToConflict = Math.max(0, Math.round(555 * remainingFraction));
      } else {
        amb.distanceToConflict = 0;
      }

      // Intersection ETA countdown (43s -> 39s -> 34s -> ...)
      if (amb.id === 'AMB-104') {
        if (amb.progress < 0.50) {
          const etaFrac = Math.max(0, (0.50 - amb.progress) / 0.38);
          amb.currentIntersectionEta = Math.max(1, Math.round(43 * etaFrac));
        } else {
          amb.currentIntersectionEta = 0;
        }
      } else if (amb.id === 'AMB-208') {
        if (amb.progress < 0.50) {
          const etaFrac = Math.max(0, (0.50 - amb.progress) / 0.40);
          amb.currentIntersectionEta = Math.max(2, Math.round(50 * etaFrac));
        } else {
          amb.currentIntersectionEta = 0;
        }
      } else {
        amb.currentIntersectionEta = Math.max(5, Math.round(amb.distanceToConflict / (amb.speed / 3.6)));
      }
    });

    // 3. Civilian cars yielding behavior
    this.civilianVehicles.forEach(car => {
      let isYielding = false;
      this.ambulances.forEach(amb => {
        if (amb.currentX && amb.currentY) {
          const dist = Math.hypot(car.x - amb.currentX, car.y - amb.currentY);
          if (dist < 65) {
            isYielding = true;
          }
        }
      });

      car.yielding = isYielding;
      const currentSpeed = isYielding ? car.speed * 0.15 : car.speed;
      car.t += currentSpeed * dt * 60;
      if (car.t > 1) car.t = 0;

      car.x = car.road.start.x + (car.road.end.x - car.road.start.x) * car.t;
      car.y = car.road.start.y + (car.road.end.y - car.road.start.y) * car.t;
    });

    // 4. MAIN CONFLICT ENGINE EVALUATION
    this.evaluateIntersectionConflict(ambA, ambB, dt);

    // 5. Automated Scenario Script if active
    if (this.scenarioRunning) {
      this.updateScenarioScript(dt);
    }
  }

  evaluateIntersectionConflict(ambA, ambB, dt) {
    if (!ambA || !ambB) return;
    const int4 = this.intersections.find(i => i.id === 'int-4');

    const aApproaching = ambA.progress >= 0.28 && ambA.progress < 0.56;
    const bApproaching = ambB.progress >= 0.25 && ambB.progress < 0.56;

    // STEP 1: CONFLICT DETECTED
    if (aApproaching && bApproaching && this.conflictState.stage === 'IDLE') {
      this.conflictState.detected = true;
      this.conflictState.stage = 'DETECTING';
      this.conflictState.ambA = ambA;
      this.conflictState.ambB = ambB;
      this.conflictState.bannerText = 'MULTIPLE EMERGENCY CONFLICT DETECTED';
      this.conflictState.bannerSubtext = 'AMB-104 (North) & AMB-208 (South) converging on Intersection 4 simultaneously.';
      this.conflictState.bannerType = 'alert';
      this.conflictState.signalPhase = 'EMERGENCY PRIORITY REQUESTED';

      this.systemIntelligence.conflictAnalysis.active = true;
      this.systemIntelligence.conflictAnalysis.done = true;
      this.networkStatus.activeConflicts = 1;

      int4.hasConflict = true;
      int4.state = 'EMERGENCY_REQUEST';
      int4.modeLabel = 'EMERGENCY PRIORITY REQUESTED';
      int4.simulatedPhase = 'EMERGENCY PRIORITY REQUESTED';
      int4.northSouth = 'YELLOW';
      int4.eastWest = 'RED';

      this.logEvent('alert', '13:51:23 Intersection conflict detected: AMB-104 & AMB-208 converging on INT-04');
      if (window.soundEngine) window.soundEngine.playConflictAlert();

      // STEP 2: PREDICTING & ANALYZING CONFLICT
      setTimeout(() => {
        if (this.conflictState.stage === 'DETECTING') {
          this.conflictState.stage = 'ANALYZING';
          this.conflictState.bannerText = 'ANALYZING CONFLICT & ETAS';
          this.conflictState.bannerSubtext = 'Evaluating ETA (43s vs 50s), distance (555m), approach vectors, and intersection occupancy...';
          this.conflictState.bannerType = 'warning';
          this.conflictState.signalPhase = 'SIGNAL PREPARING';
          int4.modeLabel = 'SIGNAL PREPARING';
          int4.simulatedPhase = 'SIGNAL PREPARING';

          this.logEvent('info', '13:51:24 AI-assisted sequence generated: ETA differential 7 sec evaluated.');
          this.notify();

          // STEP 3: GENERATING SAFE SEQUENCE & PRIORITY 01 TO AMB-104
          setTimeout(() => {
            if (this.conflictState.stage === 'ANALYZING') {
              this.conflictState.stage = 'PRIORITY_A';
              this.conflictState.bannerText = 'PRIORITY 01: AMB-104';
              this.conflictState.bannerSubtext = 'Reason: AMB-104 reaches conflict zone 7s earlier. Simulated emergency corridor active for North link.';
              this.conflictState.bannerType = 'success';
              this.conflictState.signalPhase = 'GREEN CORRIDOR ACTIVE';
              this.conflictState.corridorStatusA = 'ACTIVE';

              this.systemIntelligence.sequence.active = true;
              this.systemIntelligence.sequence.done = true;
              this.systemIntelligence.corridor.active = true;
              this.systemIntelligence.corridor.done = true;

              this.conflictState.decision = {
                primary: 'AMB-104',
                secondary: 'AMB-208',
                order: '01 → AMB-104 | 02 → AMB-208',
                confidence: '96%',
                confidenceLabel: 'SIMULATION ESTIMATE',
                reason: 'Sequential clearance minimizes simultaneous intersection occupancy and eliminates deadlock risk.',
                factors: {
                  etaA: '43 sec',
                  etaB: '50 sec',
                  severityA: 'Critical (Acute STEMI)',
                  severityB: 'Critical (Polytrauma)',
                  conflictRisk: 'HIGH',
                  trafficDensity: 'High on Anna Salai link'
                }
              };

              int4.state = 'PRIORITY_A';
              int4.modeLabel = 'GREEN CORRIDOR ACTIVE (AMB-104)';
              int4.simulatedPhase = 'GREEN CORRIDOR ACTIVE';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              int4.priorityVehicle = 'AMB-104';

              this.logEvent('priority', '13:51:25 AMB-104 priority activated: Simulated green wave active for North corridor.');
              this.logEvent('info', '13:51:29 Emergency corridor active: North-South green wave locked.');
              if (window.soundEngine) window.soundEngine.playPriorityChime();
              this.notify();
            }
          }, 1800);
        }
      }, 1400);
    }

    // STEP 4: AMB-104 INTERSECTION CLEARED
    if (this.conflictState.stage === 'PRIORITY_A' && ambA.progress >= 0.53) {
      this.conflictState.stage = 'A_CLEARED';
      this.conflictState.bannerText = 'INTERSECTION CLEARED — AMB-104';
      this.conflictState.bannerSubtext = 'AMB-104 safely passed conflict junction. Engaging Priority 02 for AMB-208...';
      this.conflictState.bannerType = 'info';
      this.conflictState.signalPhase = 'CORRIDOR CLEARED (PHASE TRANSITION)';
      this.conflictState.corridorStatusA = 'CLEARED';

      int4.modeLabel = 'CORRIDOR CLEARED';
      int4.simulatedPhase = 'CORRIDOR CLEARED';
      int4.northSouth = 'YELLOW';
      int4.eastWest = 'RED';

      this.logEvent('success', '13:51:34 AMB-104 intersection cleared: Phase transition initiated.');
      if (window.soundEngine) window.soundEngine.playClearChime();
      this.notify();

      // STEP 5: SWITCH TO PRIORITY 02 (AMB-208)
      setTimeout(() => {
        if (this.conflictState.stage === 'A_CLEARED') {
          this.conflictState.stage = 'PRIORITY_B';
          this.conflictState.bannerText = 'PRIORITY 02: AMB-208';
          this.conflictState.bannerSubtext = 'South corridor emergency green wave active. AMB-208 clearing intersection...';
          this.conflictState.bannerType = 'success';
          this.conflictState.signalPhase = 'GREEN CORRIDOR ACTIVE';
          this.conflictState.corridorStatusB = 'ACTIVE';

          int4.state = 'PRIORITY_B';
          int4.modeLabel = 'GREEN CORRIDOR ACTIVE (AMB-208)';
          int4.simulatedPhase = 'GREEN CORRIDOR ACTIVE';
          int4.northSouth = 'GREEN';
          int4.eastWest = 'RED';
          int4.priorityVehicle = 'AMB-208';

          this.logEvent('priority', '13:51:35 AMB-208 priority activated: South corridor clearance engaged.');
          if (window.soundEngine) window.soundEngine.playPriorityChime();
          this.notify();
        }
      }, 1400);
    }

    // STEP 6: AMB-208 INTERSECTION CLEARED & CONFLICT RESOLVED
    if (this.conflictState.stage === 'PRIORITY_B' && ambB.progress >= 0.53) {
      this.conflictState.stage = 'BOTH_CLEARED';
      this.conflictState.bannerText = 'CONFLICT RESOLVED';
      this.conflictState.bannerSubtext = 'Both emergency vehicles coordinated sequentially without deadlock. Returning to normal municipal cycle.';
      this.conflictState.bannerType = 'success';
      this.conflictState.signalPhase = 'NORMAL CYCLE RESTORED';
      this.conflictState.corridorStatusB = 'CLEARED';

      this.networkStatus.activeConflicts = 0;

      int4.state = 'ALL_CLEAR';
      int4.modeLabel = 'NORMAL CYCLE RESTORED';
      int4.simulatedPhase = 'NORMAL CYCLE RESTORED';
      int4.hasConflict = false;
      int4.priorityVehicle = null;

      this.logEvent('success', '13:51:41 AMB-208 intersection cleared: Secondary emergency vehicle cleared without complete stop.');
      this.logEvent('success', '13:51:43 Conflict resolved: Sequential clearance completed (Simulated delay avoided: 2m 18s).');
      if (window.soundEngine) window.soundEngine.playClearChime();

      // Return traffic signal to normal cycle
      setTimeout(() => {
        if (this.conflictState.stage === 'BOTH_CLEARED') {
          int4.state = 'NORMAL_CYCLE';
          int4.modeLabel = 'NORMAL CYCLE';
          int4.simulatedPhase = 'NORMAL CYCLE';
          int4.northSouth = 'GREEN';
          int4.eastWest = 'RED';
          this.conflictState.signalPhase = 'NORMAL CYCLE';
          this.notify();
        }
      }, 2500);

      this.notify();
    }
  }

  // AI Alternate Route Application
  applyAiRoute() {
    this.aiInsight.applied = true;
    this.systemIntelligence.routeAnalysis.active = true;
    this.systemIntelligence.routeAnalysis.done = true;

    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    if (ambA) {
      ambA.routeStatus = 'ALTERNATE ROUTE B APPLIED';
      ambA.eta = '05:24';
      ambA.distance = '3.5 km';
      this.liveMetrics.timeSavedSec = 178;
      this.liveMetrics.delayAvoided = '2m 18s';
      this.liveMetrics.optimizedEta = '05:24';
      this.logEvent('info', '13:52:05 SIMULATION ESTIMATE: Alternate Route B applied for AMB-104. Estimated delay avoided: 2m 18s.');
      this.notify();
    }
  }

  // Trigger Individual Events
  triggerAmbulanceA() {
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    if (ambA) {
      ambA.progress = 0.12;
      this.logEvent('info', '13:50:40 AMB-104 dispatched from Anna Nagar West (Simulated Emergency).');
      this.notify();
    }
  }

  triggerAmbulanceB() {
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambB) {
      ambB.progress = 0.10;
      this.logEvent('info', '13:50:42 AMB-208 dispatched from T. Nagar Panagal Park (Simulated Emergency).');
      this.notify();
    }
  }

  triggerBothEmergencies() {
    this.reset();
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambA && ambB) {
      ambA.progress = 0.22;
      ambB.progress = 0.19;
      this.logEvent('alert', '13:51:10 CRITICAL MULTI-AMBULANCE EVENT: Simultaneous dispatches active.');
      this.notify();
    }
  }

  createTrafficJam() {
    this.congestionZones.forEach(z => z.active = true);
    this.logEvent('warning', '13:50:50 SIMULATION: Peak congestion surge injected along Anna Salai link (+2.4 min delay).');
    this.notify();
  }

  clearTraffic() {
    this.congestionZones.forEach(z => z.active = false);
    this.logEvent('info', '13:50:55 SIMULATION: Traffic congestion cleared. Free-flow transit active.');
    this.notify();
  }

  // AUTOMATED HERO SCENARIO DEMO (16 Sequential Steps)
  runEmergencyScenario() {
    this.reset();
    this.scenarioRunning = true;
    this.scenarioStep = 1;
    this.scenarioTimer = 0;
    this.scenarioCompleteModal = false;
    this.speedMultiplier = 1.25;

    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');

    if (ambA && ambB) {
      ambA.progress = 0.14;
      ambB.progress = 0.11;
    }

    this.logEvent('system', '13:51:18 Step 1: Start normal traffic grid simulation.');
    this.notify();
  }

  updateScenarioScript(dt) {
    this.scenarioTimer += dt;

    // Step 1 -> 2: Ambulance A Emergency Appears
    if (this.scenarioStep === 1 && this.scenarioTimer > 1.8) {
      this.scenarioStep = 2;
      this.logEvent('alert', '13:51:20 Step 2: Ambulance A (AMB-104) emergency appears — Cardiac Critical.');
      this.notify();
    }
    // Step 2 -> 3: Ambulance B Emergency Appears
    else if (this.scenarioStep === 2 && this.scenarioTimer > 3.6) {
      this.scenarioStep = 3;
      this.logEvent('alert', '13:51:21 Step 3: Ambulance B (AMB-208) emergency appears — Severe Polytrauma.');
      this.notify();
    }
    // Step 3 -> 4: Congestion Appears
    else if (this.scenarioStep === 3 && this.scenarioTimer > 5.4) {
      this.scenarioStep = 4;
      this.congestionZones.forEach(z => z.active = true);
      this.logEvent('warning', '13:51:22 Step 4: Congestion appears along primary arterial links (+2.4 min).');
      this.notify();
    }
    // Step 4 -> 5: Both Ambulances Approach Same Intersection
    else if (this.scenarioStep === 4 && this.scenarioTimer > 7.2) {
      this.scenarioStep = 5;
      this.logEvent('alert', '13:51:23 Step 5: Both ambulances approach Intersection 4 simultaneously.');
      this.notify();
    }
    // Step 5 -> 6: Conflict Warning Appears
    else if (this.scenarioStep === 5 && this.scenarioTimer > 9.0) {
      this.scenarioStep = 6;
      this.logEvent('alert', '13:51:23 Step 6: ⚠ MULTIPLE EMERGENCY CONFLICT DETECTED at INT-04.');
      this.notify();
    }
    // Step 6 -> 7: Conflict Engine Analyzes Both
    else if (this.scenarioStep === 6 && this.scenarioTimer > 10.8) {
      this.scenarioStep = 7;
      this.logEvent('info', '13:51:24 Step 7: Conflict Engine analyzes ETA, approach vectors, and occupancy.');
      this.notify();
    }
    // Step 7 -> 8: Priority Sequence is Generated
    else if (this.scenarioStep === 7 && this.scenarioTimer > 12.6) {
      this.scenarioStep = 8;
      this.logEvent('info', '13:51:24 Step 8: Priority sequence generated: 01 → AMB-104 | 02 → AMB-208.');
      this.notify();
    }
    // Step 8 -> 9: Signal Simulation Changes
    else if (this.scenarioStep === 8 && this.scenarioTimer > 14.4) {
      this.scenarioStep = 9;
      this.logEvent('priority', '13:51:25 Step 9: Signal simulation changes — Simulated emergency corridor active.');
      this.notify();
    }
    // Step 9 -> 10: Ambulance A Passes
    else if (this.scenarioStep === 9 && this.scenarioTimer > 16.5) {
      this.scenarioStep = 10;
      this.logEvent('success', '13:51:34 Step 10: Ambulance A (AMB-104) passes INT-04 without stopping.');
      this.notify();
    }
    // Step 10 -> 11: Ambulance B Receives Priority
    else if (this.scenarioStep === 10 && this.scenarioTimer > 18.5) {
      this.scenarioStep = 11;
      this.logEvent('priority', '13:51:35 Step 11: Ambulance B (AMB-208) receives secondary green wave priority.');
      this.notify();
    }
    // Step 11 -> 12: Ambulance B Passes
    else if (this.scenarioStep === 11 && this.scenarioTimer > 20.8) {
      this.scenarioStep = 12;
      this.logEvent('success', '13:51:41 Step 12: Ambulance B (AMB-208) passes INT-04 safely.');
      this.notify();
    }
    // Step 12 -> 13: Both Routes Clear
    else if (this.scenarioStep === 12 && this.scenarioTimer > 22.8) {
      this.scenarioStep = 13;
      this.logEvent('success', '13:51:43 Step 13: Both emergency routes clear conflict junction.');
      this.notify();
    }
    // Step 13 -> 14: Hospital ETAs Update
    else if (this.scenarioStep === 13 && this.scenarioTimer > 24.6) {
      this.scenarioStep = 14;
      this.logEvent('info', '13:51:45 Step 14: Hospital ETAs updated — Trauma bays prepped.');
      this.notify();
    }
    // Step 14 -> 15: Analytics Update
    else if (this.scenarioStep === 14 && this.scenarioTimer > 26.2) {
      this.scenarioStep = 15;
      this.logEvent('info', '13:51:48 Step 15: Analytics and corridor performance metrics updated.');
      this.notify();
    }
    // Step 15 -> 16: Final Result Modal Appears
    else if (this.scenarioStep === 15 && this.scenarioTimer > 28.0) {
      this.scenarioStep = 16;
      this.scenarioRunning = false;
      this.scenarioCompleteModal = true;
      this.logEvent('success', '13:51:50 Step 16: SIMULATION COMPLETE — Multi-ambulance conflict resolved successfully.');
      this.notify();
    }
  }

  loop(timestamp) {
    const deltaTime = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    this.update(deltaTime);
    this.notify();

    this.requestFrameId = requestAnimationFrame(this.loop);
  }
}

// Instantiate global simulation engine
window.simulationEngine = new SimulationEngine();
