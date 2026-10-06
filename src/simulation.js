// resQClear Real-Time Traffic & Emergency Simulation Engine

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

    // Event Log (Realistic operations chronology)
    this.events = [
      { id: 1, time: '18:42:00', type: 'system', message: 'resQClear Simulation Grid Engine Initialized • 6 Signal Nodes Online' },
      { id: 2, time: '18:42:05', type: 'info', message: 'V2X Conflict Arbitration Engine Ready (Simulation Mode)' }
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
      title: 'AI Traffic Insight',
      message: 'High traffic density detected on Anna Salai North Link. Predicted delay: +2.4 min. Alternative route may reduce simulated delay.',
      applied: false,
      savings: '2 min 18 sec'
    };

    // Metrics counter (Simulation Estimates)
    this.liveMetrics = {
      timeSavedSec: 138, // 2m 18s
      intersectionsCoordinated: 4,
      ambulancesCoordinated: 2,
      emergencyEventsSimulated: 12,
      decisionConfidence: '96%',
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
      bannerType: 'info'
    };
    this.scenarioRunning = false;
    this.scenarioStep = 0;
    this.scenarioTimer = 0;
    this.aiInsight.applied = false;
    this.logEvent('info', 'Simulation reset to default corridor parameters.');
    this.notify();
  }

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
          inter.modeLabel = 'NORMAL CYCLE';
        }
      }
    });

    // Update Ambulances
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');

    // Move ambulances along paths
    this.ambulances.forEach(amb => {
      let speedFactor = 0.035;

      // In conflict resolution stage, AMB-B holds/decelerates while AMB-A clears
      if (amb.id === 'AMB-208' && this.conflictState.stage === 'PRIORITY_A' && amb.progress > 0.45 && amb.progress < 0.52) {
        speedFactor = 0.006;
      } else if (amb.id === 'AMB-104' && this.conflictState.stage === 'PRIORITY_A') {
        speedFactor = 0.048; // Accelerated priority clearance
      } else if (amb.id === 'AMB-208' && this.conflictState.stage === 'PRIORITY_B') {
        speedFactor = 0.052; // Now B proceeds through
      }

      amb.progress += speedFactor * dt;
      if (amb.progress > 0.98) {
        amb.progress = 0.98;
      }

      // Update current position
      const pos = this.getPointOnPath(amb.path, amb.progress);
      amb.currentX = pos.x;
      amb.currentY = pos.y;
      amb.heading = pos.angle;

      // Distance and ETA to conflict junction (Intersection 4 is at x: 450, y: 350)
      const targetDist = Math.hypot(450 - pos.x, 350 - pos.y);
      amb.distanceToConflict = Math.round(targetDist * 1.5);
      
      // Calculate realistic ETA to intersection
      if (amb.id === 'AMB-104') {
        amb.currentIntersectionEta = Math.max(2, Math.round(43 * (1 - Math.min(1, amb.progress / 0.5))));
      } else if (amb.id === 'AMB-208') {
        amb.currentIntersectionEta = Math.max(4, Math.round(50 * (1 - Math.min(1, amb.progress / 0.5))));
      } else {
        amb.currentIntersectionEta = Math.max(5, Math.round(amb.distanceToConflict / (amb.speed / 3.6)));
      }
    });

    // Update Civilian Cars & Yielding Behavior
    this.civilianVehicles.forEach(car => {
      let isYielding = false;

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

    const aApproaching = ambA.progress >= 0.30 && ambA.progress < 0.58;
    const bApproaching = ambB.progress >= 0.28 && ambB.progress < 0.58;

    if (aApproaching && bApproaching && this.conflictState.stage === 'IDLE') {
      // 1. CONFLICT DETECTED
      this.conflictState.detected = true;
      this.conflictState.stage = 'DETECTED';
      this.conflictState.ambA = ambA;
      this.conflictState.ambB = ambB;
      this.conflictState.bannerText = 'MULTIPLE EMERGENCY CONFLICT DETECTED';
      this.conflictState.bannerSubtext = 'AMB-104 (North) & AMB-208 (South) converging on Intersection 4 simultaneously.';
      this.conflictState.bannerType = 'alert';

      int4.hasConflict = true;
      int4.state = 'EMERGENCY_REQUEST';
      int4.modeLabel = 'EMERGENCY PRIORITY REQUEST';
      int4.northSouth = 'YELLOW';
      int4.eastWest = 'RED';

      this.logEvent('alert', 'MULTI-AMBULANCE CONFLICT DETECTED: AMB-104 & AMB-208 approaching Intersection 4');
      if (window.soundEngine) window.soundEngine.playConflictAlert();

      // 2. AI RESOLUTION & DECISION MATRIX
      setTimeout(() => {
        if (this.conflictState.stage === 'DETECTED') {
          this.conflictState.stage = 'RESOLVING';
          this.conflictState.bannerText = 'AI-ASSISTED CONFLICT RESOLUTION';
          this.conflictState.bannerSubtext = 'Evaluating ETA, distance, and intersection occupancy. Resolving traffic coordination priority...';
          this.conflictState.bannerType = 'warning';
          this.logEvent('info', 'AI-ASSISTED SEQUENCE GENERATED: Transparent scoring model evaluated.');
          this.notify();

          // 3. PRIORITY 01 TO AMBULANCE A
          setTimeout(() => {
            if (this.conflictState.stage === 'RESOLVING') {
              this.conflictState.stage = 'PRIORITY_A';
              this.conflictState.bannerText = 'AMB-104 — PRIORITY 01';
              this.conflictState.bannerSubtext = 'Reason: AMB-104 reaches conflict zone earlier (43s vs 50s). Simulated emergency corridor active.';
              this.conflictState.bannerType = 'success';
              this.conflictState.decision = {
                primary: 'AMB-104',
                secondary: 'AMB-208',
                order: 'AMB-104 → AMB-208',
                confidence: '96%',
                reason: 'AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict.',
                factors: {
                  etaA: '43 sec',
                  etaB: '50 sec',
                  severityA: 'Critical (Verified)',
                  severityB: 'Critical (Verified)',
                  conflictProb: 'HIGH',
                  trafficDensity: 'High (North Sector)'
                }
              };

              int4.state = 'PRIORITY_A';
              int4.modeLabel = 'SIMULATED EMERGENCY CORRIDOR';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              int4.priorityVehicle = 'AMB-104';

              this.logEvent('priority', 'AMB-104 PRIORITY 01 ACTIVATED: Simulated green wave active for North corridor.');
              if (window.soundEngine) window.soundEngine.playPriorityChime();
              this.notify();
            }
          }, 2000);
        }
      }, 1500);
    }

    // 4. AMBULANCE A CLEARED INTERSECTION
    if (this.conflictState.stage === 'PRIORITY_A' && ambA.progress >= 0.54) {
      this.conflictState.stage = 'A_CLEARED';
      this.conflictState.bannerText = 'AMB-104 — INTERSECTION CLEARED';
      this.conflictState.bannerSubtext = 'AMB-104 safely cleared conflict junction. Engaging Priority 02 for AMB-208...';
      this.conflictState.bannerType = 'info';

      int4.modeLabel = 'CORRIDOR CLEARED';
      int4.northSouth = 'YELLOW';
      int4.eastWest = 'RED';

      this.logEvent('success', 'AMB-104 INTERSECTION CLEARED: Transitioning signal phase to secondary corridor.');
      if (window.soundEngine) window.soundEngine.playClearChime();
      this.notify();

      // 5. SWITCH TO PRIORITY 02 (AMB-208)
      setTimeout(() => {
        if (this.conflictState.stage === 'A_CLEARED') {
          this.conflictState.stage = 'PRIORITY_B';
          this.conflictState.bannerText = 'AMB-208 — PRIORITY 02';
          this.conflictState.bannerSubtext = 'South corridor green wave active. AMB-208 clearing intersection...';
          this.conflictState.bannerType = 'success';

          int4.state = 'PRIORITY_B';
          int4.modeLabel = 'SIMULATED EMERGENCY CORRIDOR';
          int4.northSouth = 'GREEN';
          int4.eastWest = 'RED';
          int4.priorityVehicle = 'AMB-208';

          this.logEvent('priority', 'AMB-208 PRIORITY 02 ACTIVATED: South corridor clearance engaged.');
          if (window.soundEngine) window.soundEngine.playPriorityChime();
          this.notify();
        }
      }, 1500);
    }

    // 6. AMBULANCE B CLEARED INTERSECTION
    if (this.conflictState.stage === 'PRIORITY_B' && ambB.progress >= 0.54) {
      this.conflictState.stage = 'BOTH_CLEARED';
      this.conflictState.bannerText = 'CONFLICT RESOLVED';
      this.conflictState.bannerSubtext = 'Both emergency routes coordinated successfully. Returning to normal traffic cycle.';
      this.conflictState.bannerType = 'success';

      int4.state = 'ALL_CLEAR';
      int4.modeLabel = 'RETURNING TO NORMAL CYCLE';
      int4.hasConflict = false;
      int4.priorityVehicle = null;

      this.logEvent('success', 'AMB-208 INTERSECTION CLEARED: Secondary emergency vehicle cleared without complete stop.');
      this.logEvent('success', 'CONFLICT RESOLVED: Both emergency routes coordinated successfully.');
      if (window.soundEngine) window.soundEngine.playClearChime();

      // Return traffic signal to normal cycle
      setTimeout(() => {
        if (this.conflictState.stage === 'BOTH_CLEARED') {
          int4.state = 'NORMAL_CYCLE';
          int4.modeLabel = 'NORMAL CYCLE';
          int4.northSouth = 'GREEN';
          int4.eastWest = 'RED';
          this.notify();
        }
      }, 2500);

      this.notify();
    }
  }

  // AI Route Application
  applyAiRoute() {
    this.aiInsight.applied = true;
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    if (ambA) {
      ambA.routeStatus = 'ALTERNATE ROUTE APPLIED';
      ambA.eta = '05:24'; // -1m 18s
      this.liveMetrics.timeSavedSec = 178; // Increased simulated savings
      this.logEvent('info', 'SIMULATION ESTIMATE: Alternate corridor applied for AMB-104. Estimated delay avoided: 2m 18s.');
      this.notify();
    }
  }

  // Trigger Individual Events
  triggerAmbulanceA() {
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    if (ambA) {
      ambA.progress = 0.1;
      this.logEvent('info', 'AMB-104 dispatched from Anna Nagar West (Simulated).');
      this.notify();
    }
  }

  triggerAmbulanceB() {
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambB) {
      ambB.progress = 0.1;
      this.logEvent('info', 'AMB-208 dispatched from T. Nagar Panagal Park (Simulated).');
      this.notify();
    }
  }

  triggerBothEmergencies() {
    this.reset();
    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');
    if (ambA && ambB) {
      ambA.progress = 0.25;
      ambB.progress = 0.22;
      this.logEvent('alert', 'CRITICAL MULTI-AMBULANCE EVENT: Simultaneous dispatch simulated.');
      this.notify();
    }
  }

  createTrafficJam() {
    this.congestionZones.forEach(z => z.active = true);
    this.logEvent('warning', 'SIMULATION: Peak congestion surge injected along Anna Salai link (+2.4 min delay).');
    this.notify();
  }

  clearTraffic() {
    this.congestionZones.forEach(z => z.active = false);
    this.logEvent('info', 'SIMULATION: Traffic congestion cleared. Free flow transit restored.');
    this.notify();
  }

  // AUTOMATED HERO SCENARIO (12 Sequential Steps)
  runEmergencyScenario() {
    this.reset();
    this.scenarioRunning = true;
    this.scenarioStep = 1;
    this.scenarioTimer = 0;
    this.speedMultiplier = 1.2;

    const ambA = this.ambulances.find(a => a.id === 'AMB-104');
    const ambB = this.ambulances.find(a => a.id === 'AMB-208');

    if (ambA && ambB) {
      ambA.progress = 0.15;
      ambB.progress = 0.12;
    }

    this.logEvent('alert', 'CRITICAL MULTI-AMBULANCE EVENT INITIALIZED: Scenario demo executing.');
    this.notify();
  }

  updateScenarioScript(dt) {
    this.scenarioTimer += dt;

    // Step 1: Initial Movement
    if (this.scenarioStep === 1 && this.scenarioTimer > 2.0) {
      this.scenarioStep = 2;
      this.logEvent('info', 'STEP 2: Traffic congestion predicted along primary arterial route.');
      this.notify();
    }
    // Step 3: Conflict Convergence Detected
    else if (this.scenarioStep === 2 && this.scenarioTimer > 4.5) {
      this.scenarioStep = 3;
      this.logEvent('alert', 'STEP 3: Multiple emergency vehicles converging on Intersection 4.');
      this.notify();
    }
    // Step 4: AI Decision Arbitration
    else if (this.scenarioStep === 3 && this.scenarioTimer > 7.0) {
      this.scenarioStep = 4;
      this.logEvent('info', 'STEP 4: AI-assisted conflict resolution matrix computed (AMB-104 → Priority 01).');
      this.notify();
    }
    // Step 5: Green Corridor Locked
    else if (this.scenarioStep === 4 && this.scenarioTimer > 9.5) {
      this.scenarioStep = 5;
      this.logEvent('priority', 'STEP 5: Simulated emergency corridor locked for AMB-104.');
      this.notify();
    }
    // Step 6: AMB-A Crossing
    else if (this.scenarioStep === 5 && this.scenarioTimer > 12.0) {
      this.scenarioStep = 6;
      this.notify();
    }
    // Step 7: AMB-A Cleared
    else if (this.scenarioStep === 6 && this.scenarioTimer > 14.5) {
      this.scenarioStep = 7;
      this.notify();
    }
    // Step 8: Priority Transfer to AMB-B
    else if (this.scenarioStep === 7 && this.scenarioTimer > 17.0) {
      this.scenarioStep = 8;
      this.notify();
    }
    // Step 9: AMB-B Crossing
    else if (this.scenarioStep === 8 && this.scenarioTimer > 19.5) {
      this.scenarioStep = 9;
      this.notify();
    }
    // Step 10: Both Cleared
    else if (this.scenarioStep === 9 && this.scenarioTimer > 22.0) {
      this.scenarioStep = 10;
      this.notify();
    }
    // Step 11: Normal Signal Resumed
    else if (this.scenarioStep === 10 && this.scenarioTimer > 24.5) {
      this.scenarioStep = 11;
      this.notify();
    }
    // Step 12: Scenario Complete
    else if (this.scenarioStep === 11 && this.scenarioTimer > 27.0) {
      this.scenarioStep = 12;
      this.scenarioRunning = false;
      this.logEvent('success', 'STEP 12: Scenario demonstration completed successfully (Simulation Estimate: 2m 18s avoided).');
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
