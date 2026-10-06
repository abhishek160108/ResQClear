// resQClear Real-Time Traffic & Emergency Simulation Engine

class SimulationEngine {
  constructor() {
    this.isRunning = true;
    this.speedMultiplier = 1.0;
    this.ambulances = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.initialAmbulances));
    this.intersections = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.intersections));
    this.congestionZones = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.congestionZones));
    this.hospitals = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.hospitals));
    
    // Civilian traffic
    this.civilianVehicles = this.initCivilianTraffic();

    // Event Log
    this.events = [
      { id: 1, time: '18:42:00', type: 'system', message: 'resQClear Central Grid Engine Initialized' },
      { id: 2, time: '18:42:05', type: 'info', message: 'Traffic Signal Network Synced — 6 Intersections Online' }
    ];

    // Conflict State
    this.conflictState = {
      detected: false,
      stage: 'IDLE', // IDLE, DETECTED, RESOLVING, PRIORITY_A, A_CLEARED, PRIORITY_B, BOTH_CLEARED
      ambA: null,
      ambB: null,
      decision: null,
      bannerText: '',
      bannerSubtext: '',
      bannerType: 'info' // alert, success, warning, info
    };

    // Automated Demo Scenario orchestrator
    this.scenarioStep = 0;
    this.scenarioRunning = false;
    this.scenarioTimer = 0;

    // AI Insight state
    this.aiInsight = {
      visible: true,
      title: 'AI Traffic Congestion Insight',
      message: 'High traffic density detected on Anna Salai North link (+2.4 min delay). Adaptive corridor switch active for AMB-104.',
      applied: false,
      savings: '2 min 18 sec'
    };

    // Metrics counter
    this.liveMetrics = {
      timeSavedSec: 168, // 2.8 min
      intersectionsCoordinated: 14,
      avgSpeed: 44.2,
      activeCorridors: 2
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
      scenarioRunning: this.scenarioRunning,
      scenarioStep: this.scenarioStep,
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
    this.events = [newEvent, ...this.events.slice(0, 40)];
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
    this.ambulances = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.initialAmbulances));
    this.intersections = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.intersections));
    this.congestionZones = JSON.parse(JSON.stringify(AMBUCLEAR_DATA.congestionZones));
    this.civilianVehicles = this.initCivilianTraffic();
    this.conflictState = {
      detected: false,
      stage: 'IDLE',
      ambA: null,
      ambB: null,
      decision: null,
      bannerText: '',
      bannerSubtext: '',
      bannerType: 'info'
    };
    this.scenarioRunning = false;
    this.scenarioStep = 0;
    this.scenarioTimer = 0;
    this.logEvent('info', 'Simulation reset to default corridor parameters.');
    this.notify();
  }

  // Calculate coordinates along polyline given progress [0, 1]
  getPointOnPath(path, progress) {
    if (!path || path.length < 2) return path[0] || { x: 0, y: 0 };
    const totalSegments = path.length - 1;
    const scaled = progress * totalSegments;
    const segIndex = Math.min(Math.floor(scaled), totalSegments - 1);
    const segProgress = scaled - segIndex;

    const p1 = path[segIndex];
    const p2 = path[segIndex + 1];

    const x = p1.x + (p2.x - p1.x) * segProgress;
    const y = p1.y + (p2.y - p1.y) * segProgress;

    // Angle calculation
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    return { x, y, angle, currentSegment: segIndex };
  }

  update(deltaTime) {
    if (!this.isRunning) return;

    const dt = (deltaTime / 1000) * this.speedMultiplier;

    // Update normal traffic lights timers
    this.intersections.forEach(inter => {
      if (inter.id !== 'int-4' || this.conflictState.stage === 'IDLE' || this.conflictState.stage === 'BOTH_CLEARED') {
        inter.timer -= dt;
        if (inter.timer <= 0) {
          inter.timer = 12 + Math.random() * 8;
          inter.northSouth = inter.northSouth === 'GREEN' ? 'RED' : 'GREEN';
          inter.eastWest = inter.northSouth === 'GREEN' ? 'RED' : 'GREEN';
        }
      }
    });

    // Update Ambulances
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');

    // Move ambulances along paths
    this.ambulances.forEach(amb => {
      // Base speed factor
      let speedFactor = 0.035;

      // In conflict resolution stage, AMB-B holds/decelerates while AMB-A clears!
      if (amb.id === 'AMB-208' && this.conflictState.stage === 'PRIORITY_A' && amb.progress > 0.45 && amb.progress < 0.52) {
        // Slow down before intersection while A crosses
        speedFactor = 0.006;
      } else if (amb.id === 'AMB-104' && this.conflictState.stage === 'PRIORITY_A') {
        speedFactor = 0.048; // Accelerated priority clearance
      } else if (amb.id === 'AMB-208' && this.conflictState.stage === 'PRIORITY_B') {
        speedFactor = 0.052; // Now B rushes through
      }

      amb.progress += speedFactor * dt;
      if (amb.progress > 0.98) {
        amb.progress = 0.98; // Arrived at hospital
      }

      // Update current position
      const pos = this.getPointOnPath(amb.path, amb.progress);
      amb.currentX = pos.x;
      amb.currentY = pos.y;
      amb.heading = pos.angle;

      // Distance and ETA to conflict junction (Intersection 4 is at x: 450, y: 350)
      const targetDist = Math.hypot(450 - pos.x, 350 - pos.y);
      amb.distanceToConflict = Math.round(targetDist * 1.5); // scaled meters
      amb.currentIntersectionEta = Math.max(1, Math.round(amb.distanceToConflict / (amb.speed / 3.6)));
    });

    // Update Civilian Cars & Yielding Behavior
    this.civilianVehicles.forEach(car => {
      let isYielding = false;

      // Check distance to any active ambulance
      this.ambulances.forEach(amb => {
        if (amb.currentX && amb.currentY) {
          const dist = Math.hypot(car.x - amb.currentX, car.y - amb.currentY);
          if (dist < 60) {
            isYielding = true;
          }
        }
      });

      car.yielding = isYielding;
      const currentSpeed = isYielding ? car.speed * 0.2 : car.speed;

      car.t += currentSpeed * dt * 60;
      if (car.t > 1) car.t = 0;

      car.x = car.road.start.x + (car.road.end.x - car.road.start.x) * car.t;
      car.y = car.road.start.y + (car.road.end.y - car.road.start.y) * car.t;
    });

    // MAIN CONFLICT ENGINE CHECK
    this.evaluateIntersectionConflict(ambA, ambB, dt);

    // Update Scenario Script if running
    if (this.scenarioRunning) {
      this.updateScenarioScript(dt);
    }
  }

  evaluateIntersectionConflict(ambA, ambB, dt) {
    if (!ambA || !ambB) return;

    const int4 = this.intersections.find(i => i.id === 'int-4');

    // Both are approaching intersection 4 (progress between 0.35 and 0.65)
    const aApproaching = ambA.progress >= 0.32 && ambA.progress < 0.58;
    const bApproaching = ambB.progress >= 0.30 && ambB.progress < 0.58;

    const aCleared = ambA.progress >= 0.58;
    const bCleared = ambB.progress >= 0.58;

    if (aApproaching && bApproaching && this.conflictState.stage === 'IDLE') {
      // TRIGGER CONFLICT DETECTED
      this.conflictState.detected = true;
      this.conflictState.stage = 'DETECTED';
      this.conflictState.ambA = ambA;
      this.conflictState.ambB = ambB;
      this.conflictState.bannerText = 'MULTIPLE EMERGENCY CONFLICT DETECTED';
      this.conflictState.bannerSubtext = 'Two Critical ALS Ambulances approaching Central Conflict Junction simultaneously.';
      this.conflictState.bannerType = 'alert';

      int4.hasConflict = true;
      int4.state = 'EMERGENCY_REQUESTED';
      int4.northSouth = 'YELLOW';
      int4.eastWest = 'RED';

      this.logEvent('alert', 'CONFLICT DETECTED: AMB-104 (North) & AMB-208 (South) converging at Int. 4');
      window.soundEngine.playConflictAlert();

      // Transition to AI resolving after 1.5s
      setTimeout(() => {
        if (this.conflictState.stage === 'DETECTED') {
          this.conflictState.stage = 'RESOLVING';
          this.conflictState.bannerText = 'AI ROUTE COORDINATION';
          this.conflictState.bannerSubtext = 'Resolving intersection priority based on telemetry, distance, & patient acuity...';
          this.conflictState.bannerType = 'warning';
          this.notify();

          setTimeout(() => {
            if (this.conflictState.stage === 'RESOLVING') {
              // Priority Decision: AMB-A first, then AMB-B
              this.conflictState.stage = 'PRIORITY_A';
              this.conflictState.bannerText = 'AMBULANCE A — PRIORITY 01';
              this.conflictState.bannerSubtext = 'Reason: 12 seconds to intersection (ETA advantage) • Green corridor locked.';
              this.conflictState.bannerType = 'success';
              this.conflictState.decision = {
                primary: 'AMBULANCE A (AMB-104)',
                secondary: 'AMBULANCE B (AMB-208)',
                order: 'A → B',
                confidence: '96.4%',
                reason: 'Safest sequential clearance based on predicted arrival time (12s vs 19s) and cross-axis conflict.',
                clearanceWindowA: '4.8 sec',
                clearanceWindowB: '5.2 sec'
              };

              int4.state = 'PRIORITY_A';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              int4.priorityVehicle = 'AMB-104';

              this.logEvent('priority', 'AI DECISION: AMB-104 granted Priority 01. Green wave locked on North corridor.');
              this.logEvent('info', 'AMB-208 assigned Priority 02 — speed regulated for zero-stop secondary clearance.');
              window.soundEngine.playPriorityChime();
              this.notify();
            }
          }, 2000);
        }
      }, 1500);
    }

    // Check if Ambulance A cleared intersection
    if (this.conflictState.stage === 'PRIORITY_A' && ambA.progress >= 0.54) {
      this.conflictState.stage = 'A_CLEARED';
      this.conflictState.bannerText = 'AMBULANCE A — INTERSECTION CLEARED';
      this.conflictState.bannerSubtext = 'Ambulance A safely exited junction. Transferring priority to Ambulance B...';
      this.conflictState.bannerType = 'info';

      int4.northSouth = 'YELLOW';
      int4.eastWest = 'RED';

      this.logEvent('success', 'AMB-104 safely cleared Central Junction. Signal phase shifting.');
      window.soundEngine.playClearChime();
      this.notify();

      // Switch to Ambulance B priority
      setTimeout(() => {
        if (this.conflictState.stage === 'A_CLEARED') {
          this.conflictState.stage = 'PRIORITY_B';
          this.conflictState.bannerText = 'AMBULANCE B — PRIORITY 02';
          this.conflictState.bannerSubtext = 'South corridor green wave engaged. AMB-208 accelerating through junction.';
          this.conflictState.bannerType = 'success';

          int4.state = 'PRIORITY_B';
          int4.northSouth = 'GREEN';
          int4.eastWest = 'RED';
          int4.priorityVehicle = 'AMB-208';

          this.logEvent('priority', 'AMB-208 Priority 02 Activated. Green corridor open.');
          window.soundEngine.playPriorityChime();
          this.notify();
        }
      }, 1200);
    }

    // Check if Ambulance B cleared
    if (this.conflictState.stage === 'PRIORITY_B' && ambB.progress >= 0.54) {
      this.conflictState.stage = 'BOTH_CLEARED';
      this.conflictState.bannerText = 'BOTH EMERGENCY ROUTES CLEARED';
      this.conflictState.bannerSubtext = 'Multi-ambulance conflict resolved with 0 delays and 100% safety clearance.';
      this.conflictState.bannerType = 'success';

      int4.hasConflict = false;
      int4.state = 'NORMAL_CYCLE';
      int4.priorityVehicle = null;
      int4.timer = 10;
      int4.northSouth = 'RED';
      int4.eastWest = 'GREEN';

      this.liveMetrics.timeSavedSec += 42;
      this.liveMetrics.intersectionsCoordinated += 2;

      this.logEvent('success', 'BOTH EMERGENCY CORRIDORS CLEARED. Returning to standard adaptive traffic cycling.');
      window.soundEngine.playClearChime();
      this.notify();
    }
  }

  // One-click Automated Scenario Execution (12-step script)
  runEmergencyScenario() {
    this.reset();
    this.scenarioRunning = true;
    this.scenarioStep = 1;
    this.scenarioTimer = 0;
    this.speedMultiplier = 1.2;

    // Position ambulances at starts
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambA) ambA.progress = 0.15;
    if (ambB) ambB.progress = 0.12;

    this.logEvent('info', 'DEMO SCENARIO INITIALIZED: Dual ALS Emergency Dispatch');
    window.soundEngine.playBeep(660, 0.15);
    this.notify();
  }

  updateScenarioScript(dt) {
    this.scenarioTimer += dt;

    // Step 1: Ambulances moving
    if (this.scenarioStep === 1 && this.scenarioTimer > 2.0) {
      this.scenarioStep = 2;
      this.logEvent('info', 'Step 2: Predictive traffic radar scanning North & South corridors');
      this.notify();
    }
    // Step 2: Traffic congestion highlighted
    else if (this.scenarioStep === 2 && this.scenarioTimer > 4.5) {
      this.scenarioStep = 3;
      this.congestionZones[0].active = true;
      this.logEvent('alert', 'Step 3: Congestion detected on primary arterial. Alternate corridor pre-cleared.');
      window.soundEngine.playBeep(440, 0.1);
      this.notify();
    }
    // Step 3: Approaching intersection & conflict detection
    else if (this.scenarioStep === 3 && this.scenarioTimer > 7.0) {
      this.scenarioStep = 4;
      this.notify();
    }
    // Step 4: System detects conflict (handled by engine)
    else if (this.conflictState.stage === 'PRIORITY_A' && this.scenarioStep < 6) {
      this.scenarioStep = 6;
      this.notify();
    }
    else if (this.conflictState.stage === 'A_CLEARED' && this.scenarioStep < 8) {
      this.scenarioStep = 8;
      this.notify();
    }
    else if (this.conflictState.stage === 'PRIORITY_B' && this.scenarioStep < 9) {
      this.scenarioStep = 9;
      this.notify();
    }
    else if (this.conflictState.stage === 'BOTH_CLEARED' && this.scenarioStep < 11) {
      this.scenarioStep = 11;
      this.notify();
    }
    // Step 12: Arrived at hospitals
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambA && ambB && ambA.progress >= 0.95 && ambB.progress >= 0.95 && this.scenarioStep === 11) {
      this.scenarioStep = 12;
      this.logEvent('success', 'Step 12: Both ambulances successfully delivered patients to ER Bays.');
      this.notify();
    }
  }

  triggerAmbulanceA() {
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    if (ambA) {
      ambA.progress = 0.2;
      this.logEvent('priority', 'MANUAL TRIGGER: Ambulance A (AMB-104) dispatch initiated.');
      window.soundEngine.playSirenBlip();
      this.notify();
    }
  }

  triggerAmbulanceB() {
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambB) {
      ambB.progress = 0.18;
      this.logEvent('priority', 'MANUAL TRIGGER: Ambulance B (AMB-208) dispatch initiated.');
      window.soundEngine.playSirenBlip();
      this.notify();
    }
  }

  triggerBothEmergencies() {
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambA) ambA.progress = 0.28;
    if (ambB) ambB.progress = 0.25;
    this.logEvent('alert', 'MANUAL TRIGGER: Dual Emergency Convergence initiated at Int. 4');
    window.soundEngine.playConflictAlert();
    this.notify();
  }

  createTrafficJam() {
    this.congestionZones.forEach(z => z.active = true);
    this.logEvent('alert', 'TRAFFIC INJECTION: High-density congestion generated across central corridors.');
    this.notify();
  }

  clearTraffic() {
    this.congestionZones.forEach(z => z.active = false);
    this.logEvent('success', 'TRAFFIC CLEARANCE: Artificial bottlenecks removed.');
    this.notify();
  }

  applyAiRoute() {
    this.aiInsight.applied = true;
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    if (ambA) {
      ambA.speed = 52;
      ambA.routeStatus = 'AI DYNAMIC BYPASS';
    }
    this.liveMetrics.timeSavedSec += 138;
    this.logEvent('success', 'AI INSIGHT APPLIED: High-congestion bypass corridor locked. Delay reduced by 2m 18s.');
    window.soundEngine.playPriorityChime();
    this.notify();
  }

  loop(currentTime) {
    const deltaTime = Math.min(currentTime - this.lastTimestamp, 100);
    this.lastTimestamp = currentTime;

    this.update(deltaTime);
    this.notify();

    this.requestFrameId = requestAnimationFrame(this.loop);
  }

  destroy() {
    if (this.requestFrameId) {
      cancelAnimationFrame(this.requestFrameId);
    }
  }
}

window.simulationEngine = new SimulationEngine();
