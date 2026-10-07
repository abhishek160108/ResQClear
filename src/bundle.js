
// resQClear Master Bundle
(function() {
  'use strict';
  const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ===== START FILE: sound.js ===== */
// AmbuClear Procedural Sound FX Engine (Web Audio API)
// Provides realistic emergency dispatch radio chimes, conflict alert pulses, and priority clear confirmation sounds

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Subtle radio squelch / notification beep
  playBeep(freq = 880, duration = 0.08, type = 'sine') {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Conflict Alert Sound: Two-tone urgent pulse
  playConflictAlert() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      
      const osc1 = this.audioCtx.createOscillator();
      const osc2 = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sine';

      osc1.frequency.setValueAtTime(540, now);
      osc1.frequency.exponentialRampToValueAtTime(780, now + 0.15);
      osc1.frequency.setValueAtTime(540, now + 0.18);
      osc1.frequency.exponentialRampToValueAtTime(780, now + 0.33);

      osc2.frequency.setValueAtTime(270, now);
      osc2.frequency.exponentialRampToValueAtTime(390, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch (e) {}
  }

  // Priority Granted / Green Wave Locked Chime
  playPriorityChime() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.04, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.3);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.35);
      });
    } catch (e) {}
  }

  // Intersection Cleared Sound
  playClearChime() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      [880, 1174.66].forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.05, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.28);
      });
    } catch (e) {}
  }

  // Siren pulse blip
  playSirenBlip() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.linearRampToValueAtTime(1300, now + 0.2);
      osc.frequency.linearRampToValueAtTime(900, now + 0.4);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();

/* ===== END FILE: sound.js ===== */

/* ===== START FILE: data.js ===== */
// resQClear City Map, Fleet, Hospital, and Network Simulation Data
// Enterprise Operations Center & Digital Twin Prototype

const RESQCLEAR_DATA = {
  system: {
    name: 'resQClear',
    subtitle: 'EMERGENCY TRAFFIC COORDINATION',
    tagline: 'Clear the way. Save lives.',
    corePositioning: 'AI-assisted emergency traffic coordination for safer and more efficient ambulance movement through congested urban intersections.',
    mode: 'DIGITAL TWIN SIMULATION',
    city: 'CHENNAI DIGITAL TWIN',
    version: '2.0.0-PROTOTYPE',
    disclaimer: 'resQClear is currently a digital twin simulation prototype. Signal actions and telemetry shown are simulated and not connected to real government traffic signals, live ambulances, or municipal infrastructure.'
  },

  networkSummary: {
    intersectionsOnline: 6,
    ambulancesTracked: 3,
    hospitalsAvailable: 3,
    congestionZonesDetected: 4,
    activeConflicts: 1,
    systemHealth: 'NORMAL'
  },

  hospitals: [
    {
      id: 'hosp-1',
      name: 'Government General Hospital',
      shortName: 'Govt Hospital',
      location: 'Park Town / Central',
      lat: 13.0827,
      lng: 80.2785,
      x: 780,
      y: 160,
      erStatus: 'READY',
      assignedAmbulance: 'AMB-104',
      eta: '06:42',
      traumaLevel: 'Level 1 Trauma Center',
      bedsAvailable: 14,
      icuFree: 4,
      specialty: 'Cardiac / Trauma Resuscitation',
      leadDoctor: 'Dr. K. Senthil Nathan',
      integrationNote: 'Simulated arrival notification generated (Not connected to hospital ER systems)',
      notificationSent: true,
      notificationText: 'Simulated Notification: AMB-104 ETA 06:42 min — Cardiac Bay Reserved',
      readiness: [
        { item: 'Cath Lab 02 Pre-warmed & Staffed', done: true },
        { item: 'Cardiology Triage Team Alerted', done: true },
        { item: 'Rapid ER Bay 1 Reserved', done: true },
        { item: 'Direct Telemetry Feed Initialized (Simulated)', done: true }
      ]
    },
    {
      id: 'hosp-2',
      name: 'Apollo Emergency Center',
      shortName: 'Apollo Hospital',
      location: 'Greams Road',
      lat: 13.0604,
      lng: 80.2520,
      x: 780,
      y: 540,
      erStatus: 'READY',
      assignedAmbulance: 'AMB-208',
      eta: '08:15',
      traumaLevel: 'Comprehensive Trauma & Stroke Center',
      bedsAvailable: 8,
      icuFree: 2,
      specialty: 'Polytrauma & Neurosurgery',
      leadDoctor: 'Dr. Priya Ramakrishnan',
      integrationNote: 'Simulated arrival notification generated (Not connected to hospital ER systems)',
      notificationSent: true,
      notificationText: 'Simulated Notification: AMB-208 ETA 08:15 min — Trauma Suite 04 Prepped',
      readiness: [
        { item: 'Surgical Suite 04 Prepped', done: true },
        { item: 'Blood Bank Cross-match 4 Units O- on Standby', done: true },
        { item: 'CT Neuro-Scan on Priority Standby', done: true },
        { item: 'Code Red Resuscitation Team Stationed', done: true }
      ]
    },
    {
      id: 'hosp-3',
      name: 'Kauvery Emergency Hub',
      shortName: 'Kauvery Hub',
      location: 'Alwarpet',
      lat: 13.0338,
      lng: 80.2505,
      x: 180,
      y: 560,
      erStatus: 'STANDBY',
      assignedAmbulance: 'AMB-312',
      eta: '12:40',
      traumaLevel: 'Multi-Specialty Emergency Hub',
      bedsAvailable: 19,
      icuFree: 7,
      specialty: 'Acute Medical Care',
      leadDoctor: 'Dr. Anand Kumar',
      integrationNote: 'Simulated arrival notification generated (Not connected to hospital ER systems)',
      notificationSent: false,
      notificationText: 'Simulated Notification: AMB-312 ETA 12:40 min — Urgent Transit Protocol',
      readiness: [
        { item: 'ER Bay 03 Ready', done: true },
        { item: 'Triage Nurse Assigned', done: true }
      ]
    }
  ],

  initialAmbulances: [
    {
      id: 'AMB-104',
      name: 'Ambulance A',
      status: 'CRITICAL',
      subStatus: 'ACUTE CARDIAC',
      origin: 'Anna Nagar West',
      destination: 'Government Hospital',
      destinationId: 'hosp-1',
      speed: 42,
      speedUnit: 'km/h',
      eta: '06:42',
      distance: '3.8 km',
      routeStatus: 'OPTIMIZED',
      currentState: 'APPROACHING INTERSECTION',
      driver: 'S. Murugan (Paramedic Lead)',
      vehicleModel: 'Force Traveller Advance ALS',
      oxygenLevel: '98%',
      batteryCharge: '94%',
      triageSource: 'Emergency severity provided by authorized emergency personnel',
      patient: {
        condition: 'Acute STEMI (Heart Attack)',
        age: '54 M',
        vitals: { hr: 122, bp: '160/95', spo2: 94, rhythm: 'ST-Elevation' },
        severityNote: 'Critical Emergency Dispatched'
      },
      color: '#ef4444',
      trailColor: 'rgba(239, 68, 68, 0.4)',
      corridorColor: '#10b981',
      path: [
        { x: 120, y: 160, name: 'Anna Nagar West Terminal' },
        { x: 280, y: 160, name: 'INT-01: Anna Nagar Roundabout' },
        { x: 450, y: 160, name: 'INT-02: Kilpauk Medical Signal' },
        { x: 450, y: 350, name: 'INT-04: Central Conflict Junction' },
        { x: 620, y: 350, name: 'INT-05: Poonamallee Arterial' },
        { x: 780, y: 350, name: 'INT-06: Hospital Access Boulevard' },
        { x: 780, y: 160, name: 'Government Hospital ER Bay' }
      ],
      progress: 0.12,
      currentIntersectionEta: 43,
      distanceToConflict: 555,
      priorityRank: 1,
      approachDirection: 'North Approach (Sector 1)'
    },
    {
      id: 'AMB-208',
      name: 'Ambulance B',
      status: 'CRITICAL',
      subStatus: 'SEVERE POLYTRAUMA',
      origin: 'T. Nagar Panagal Park',
      destination: 'Apollo Hospital',
      destinationId: 'hosp-2',
      speed: 40,
      speedUnit: 'km/h',
      eta: '08:15',
      distance: '4.2 km',
      routeStatus: 'OPTIMIZED',
      currentState: 'APPROACHING INTERSECTION',
      driver: 'R. Vijay (Critical Care Paramedic)',
      vehicleModel: 'Tata Winger Type-D ICU',
      oxygenLevel: '95%',
      batteryCharge: '89%',
      triageSource: 'Emergency severity provided by authorized emergency personnel',
      patient: {
        condition: 'Severe Polytrauma (MVA Collision)',
        age: '29 F',
        vitals: { hr: 135, bp: '90/60', spo2: 91, rhythm: 'Sinus Tachycardia' },
        severityNote: 'Critical Emergency Dispatched'
      },
      color: '#ef4444',
      trailColor: 'rgba(239, 68, 68, 0.4)',
      corridorColor: '#10b981',
      path: [
        { x: 120, y: 540, name: 'T. Nagar Panagal Park' },
        { x: 280, y: 540, name: 'INT-03: Usman Road Flyover Base' },
        { x: 450, y: 540, name: 'Anna Salai South Link' },
        { x: 450, y: 350, name: 'INT-04: Central Conflict Junction' },
        { x: 620, y: 350, name: 'INT-05: Poonamallee Arterial' },
        { x: 780, y: 350, name: 'INT-06: Hospital Access Boulevard' },
        { x: 780, y: 540, name: 'Apollo Emergency Bay' }
      ],
      progress: 0.10,
      currentIntersectionEta: 50,
      distanceToConflict: 555,
      priorityRank: 2,
      approachDirection: 'South Approach (Sector 2)'
    },
    {
      id: 'AMB-312',
      name: 'Ambulance C',
      status: 'URGENT',
      subStatus: 'ACUTE RESPIRATORY',
      origin: 'Guindy Industrial',
      destination: 'Kauvery Hub',
      destinationId: 'hosp-3',
      speed: 48,
      speedUnit: 'km/h',
      eta: '12:40',
      distance: '5.1 km',
      routeStatus: 'CORRIDOR ACTIVE',
      currentState: 'IN TRANSIT',
      driver: 'M. Anand (EMS Team)',
      vehicleModel: 'Mahindra Supro Ambulance',
      oxygenLevel: '99%',
      batteryCharge: '96%',
      triageSource: 'Emergency severity provided by authorized emergency personnel',
      patient: {
        condition: 'Acute Respiratory Distress',
        age: '68 M',
        vitals: { hr: 98, bp: '135/85', spo2: 88, rhythm: 'Regular' },
        severityNote: 'Urgent Transit Protocol'
      },
      color: '#f59e0b',
      trailColor: 'rgba(245, 158, 11, 0.3)',
      corridorColor: '#10b981',
      path: [
        { x: 120, y: 350, name: 'Guindy Base' },
        { x: 280, y: 350, name: 'Mount Road Sector' },
        { x: 280, y: 540, name: 'INT-03: Usman Road Flyover Base' },
        { x: 180, y: 560, name: 'Kauvery Hub ER Bay' }
      ],
      progress: 0.35,
      currentIntersectionEta: 75,
      distanceToConflict: 720,
      priorityRank: 3,
      approachDirection: 'Southwest Link'
    }
  ],

  intersections: [
    {
      id: 'int-1',
      code: 'INT-01',
      name: 'Anna Nagar Roundabout',
      x: 280,
      y: 160,
      state: 'NORMAL_CYCLE',
      timer: 18,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE',
      simulatedPhase: 'NORMAL CYCLE'
    },
    {
      id: 'int-2',
      code: 'INT-02',
      name: 'Kilpauk Medical Signal',
      x: 450,
      y: 160,
      state: 'NORMAL_CYCLE',
      timer: 14,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE',
      simulatedPhase: 'NORMAL CYCLE'
    },
    {
      id: 'int-3',
      code: 'INT-03',
      name: 'T. Nagar Usman Road Cross',
      x: 280,
      y: 540,
      state: 'NORMAL_CYCLE',
      timer: 22,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE',
      simulatedPhase: 'NORMAL CYCLE'
    },
    {
      id: 'int-4',
      code: 'INT-04',
      name: 'Central Conflict Junction',
      x: 450,
      y: 350,
      state: 'NORMAL_CYCLE',
      timer: 8,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      subState: 'NORMAL',
      hasConflict: false,
      conflictDetails: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE',
      simulatedPhase: 'NORMAL CYCLE'
    },
    {
      id: 'int-5',
      code: 'INT-05',
      name: 'Poonamallee Arterial Crossing',
      x: 620,
      y: 350,
      state: 'NORMAL_CYCLE',
      timer: 20,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE',
      simulatedPhase: 'NORMAL CYCLE'
    },
    {
      id: 'int-6',
      code: 'INT-06',
      name: 'Govt Hospital North Gate',
      x: 780,
      y: 350,
      state: 'NORMAL_CYCLE',
      timer: 15,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE',
      simulatedPhase: 'NORMAL CYCLE'
    }
  ],

  congestionZones: [
    {
      id: 'cong-1',
      name: 'Anna Salai Sector 4 Congestion',
      x: 450,
      y: 260,
      radius: 45,
      severity: 'HIGH',
      delayImpact: '+2.4 min',
      color: 'rgba(239, 68, 68, 0.35)',
      active: true,
      label: 'CRITICAL CONGESTION'
    },
    {
      id: 'cong-2',
      name: 'Usman Flyover Peak Bottleneck',
      x: 360,
      y: 540,
      radius: 35,
      severity: 'MODERATE',
      delayImpact: '+1.8 min',
      color: 'rgba(245, 158, 11, 0.3)',
      active: true,
      label: 'MODERATE CONGESTION'
    },
    {
      id: 'cong-3',
      name: 'Kilpauk North Arterial Dense Queue',
      x: 350,
      y: 160,
      radius: 32,
      severity: 'MODERATE',
      delayImpact: '+1.2 min',
      color: 'rgba(245, 158, 11, 0.25)',
      active: true,
      label: 'MODERATE CONGESTION'
    },
    {
      id: 'cong-4',
      name: 'Poonamallee East Approach',
      x: 540,
      y: 350,
      radius: 30,
      severity: 'HIGH',
      delayImpact: '+1.9 min',
      color: 'rgba(239, 68, 68, 0.3)',
      active: true,
      label: 'CRITICAL CONGESTION'
    }
  ],

  beforeAfterComparison: {
    withoutResQClear: {
      title: 'WITHOUT resQClear',
      trafficCondition: 'Traffic congestion',
      intersectionStatus: 'Intersection waiting (Red light queues)',
      coordination: 'Uncoordinated emergency movement',
      baselineEta: '08:34',
      avgDelay: '+2.4 min',
      riskFactor: 'High probability of intersection deadlock'
    },
    withResQClear: {
      title: 'WITH resQClear',
      trafficCondition: 'Coordinated sequence',
      intersectionStatus: 'Simulated emergency corridor',
      coordination: 'Sequential priority clearance',
      optimizedEta: '06:16',
      estimatedDifference: '02:18',
      riskFactor: 'Conflict resolved via AI-assisted sequence'
    },
    metricsSummary: {
      baselineEta: '08:34',
      optimizedEta: '06:16',
      estimatedDifference: '02:18',
      confidence: '96%',
      badge: 'SIMULATION RESULT'
    }
  },

  decisionFactors: {
    junction: 'INT-04',
    ambA: {
      id: 'AMB-104',
      eta: '43 sec',
      distance: '555 m',
      severity: 'CRITICAL',
      direction: 'North Approach (Anna Nagar)'
    },
    ambB: {
      id: 'AMB-208',
      eta: '50 sec',
      distance: '555 m',
      severity: 'CRITICAL',
      direction: 'South Approach (T. Nagar)'
    },
    conflictRisk: 'HIGH',
    factorsList: [
      { label: 'ETA to Junction', val: 'AMB-104: 43s | AMB-208: 50s (7s difference)' },
      { label: 'Distance', val: '555m vs 555m (Equal convergence distance)' },
      { label: 'Approach Direction', val: 'Opposing perpendicular vectors on INT-04' },
      { label: 'Intersection Occupancy', val: 'Single vehicle capacity per clearance window' },
      { label: 'Traffic Density', val: 'Anna Salai link: High (+2.4 min density)' },
      { label: 'Route Conflict Probability', val: 'HIGH (Simultaneous intersection demand)' }
    ],
    recommendedSequence: [
      { rank: '01', vehicle: 'AMB-104', action: 'Immediate Emergency Corridor', reason: 'Reaches junction 7s earlier' },
      { rank: '02', vehicle: 'AMB-208', action: 'Hold/Controlled Deceleration', reason: 'Clear second sequentially' }
    ],
    reasoning: 'Sequential clearance minimizes simultaneous intersection occupancy and preserves momentum without stopping both emergency vehicles.',
    confidence: '96%',
    confidenceLabel: 'SIMULATION ESTIMATE'
  },

  whyExplanation: {
    title: 'Why This Decision?',
    summary: 'AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy.',
    detailedPoints: [
      'ETA Delta: AMB-104 arrives in 43 seconds compared to AMB-208 arriving in 50 seconds.',
      'Momentum Preservation: Granting Priority 01 to AMB-104 allows it to pass through INT-04 without deceleration, clearing the intersection just before AMB-208 arrives.',
      'Zero Deadlock Guarantee (Simulated): Eliminates the scenario where both ambulances attempt to cross simultaneously, requiring abrupt emergency braking in the intersection.',
      'Secondary Green Wave: Once AMB-104 clears, INT-04 immediately switches green for AMB-208 (Priority 02).'
    ],
    disclaimer: 'This explanation is generated by the resQClear simulation decision model for transparent, explainable emergency coordination.'
  },

  productRoadmap: [
    {
      phase: 'PHASE 1',
      title: 'Digital Twin Simulation',
      status: 'CURRENT',
      isCurrent: true,
      desc: '60 FPS multi-ambulance conflict engine, corridor simulation, and operations center UI.'
    },
    {
      phase: 'PHASE 2',
      title: 'Ambulance GPS MVP',
      status: 'NEXT',
      isCurrent: false,
      desc: 'Dedicated telemetry mobile/in-vehicle client with high-precision GPS tracking for paramedics.'
    },
    {
      phase: 'PHASE 3',
      title: 'Real-Time Traffic Data',
      status: 'PLANNED',
      isCurrent: false,
      desc: 'City-wide traffic sensor mesh and mapping API ingestion for live congestion heatmaps.'
    },
    {
      phase: 'PHASE 4',
      title: 'Ambulance + Hospital Pilot',
      status: 'PLANNED',
      isCurrent: false,
      desc: 'Controlled trial with participating ambulance fleet operators and receiving trauma centers.'
    },
    {
      phase: 'PHASE 5',
      title: 'Authorized Traffic Infrastructure Integration',
      status: 'FUTURE',
      isCurrent: false,
      desc: 'Municipal traffic command center API integration subject to regulatory & civic authorization.'
    }
  ],

  howItWorksSteps: [
    {
      step: '1',
      name: 'DETECT',
      desc: 'Detect emergency vehicles and traffic conditions via connected telemetry.',
      icon: 'Ambulance'
    },
    {
      step: '2',
      name: 'PREDICT',
      desc: 'Estimate congestion and arrival times across upcoming intersections.',
      icon: 'Activity'
    },
    {
      step: '3',
      name: 'OPTIMIZE',
      desc: 'Evaluate emergency routes and compare alternative arterial corridors.',
      icon: 'Navigation'
    },
    {
      step: '4',
      name: 'RESOLVE',
      desc: 'Coordinate multiple emergency vehicles approaching conflicting intersections.',
      icon: 'Cpu'
    },
    {
      step: '5',
      name: 'COORDINATE',
      desc: 'Generate an emergency corridor sequence with simulated traffic signal timing.',
      icon: 'TrafficLight'
    },
    {
      step: '6',
      name: 'INFORM',
      desc: 'Provide status and ETA information to authorized stakeholders and receiving ERs.',
      icon: 'Hospital'
    }
  ],

  demoMetrics: {
    emergencyEventsSimulated: 12,
    intersectionsCoordinated: 4,
    ambulancesCoordinated: 2,
    estimatedDelayAvoided: '2m 18s',
    decisionConfidence: '96%',
    travelDelayReduction: '-32%',
    simulatedTimeSaved: '2.8 min',
    averageResponseTime: '06:14 min',
    intersectionWaitTime: '4.2 sec',
    totalSimulatedTrips: 1248,
    corridorStatus: 'SAFE CORRIDOR SEQUENCE COMPLETED',
    label: 'DEMO DATA'
  },

  analyticsData: {
    hourlyData: [
      { time: '06:00', traditional: 14.2, resQClear: 9.1, saved: 5.1 },
      { time: '08:00', traditional: 22.8, resQClear: 14.3, saved: 8.5 },
      { time: '10:00', traditional: 26.4, resQClear: 16.8, saved: 9.6 },
      { time: '12:00', traditional: 19.5, resQClear: 12.9, saved: 6.6 },
      { time: '14:00', traditional: 18.2, resQClear: 12.0, saved: 6.2 },
      { time: '16:00', traditional: 21.6, resQClear: 13.7, saved: 7.9 },
      { time: '18:00', traditional: 28.5, resQClear: 17.2, saved: 11.3 },
      { time: '20:00', traditional: 24.0, resQClear: 15.1, saved: 8.9 },
      { time: '22:00', traditional: 15.0, resQClear: 10.2, saved: 4.8 }
    ],
    corridorPerformance: [
      { name: 'Anna Salai Arterial', baseline: 18.4, resQClear: 11.8, efficiency: '+35.8%' },
      { name: 'Poonamallee High Rd', baseline: 22.1, resQClear: 14.5, efficiency: '+34.4%' },
      { name: 'GST Corridor', baseline: 16.8, resQClear: 11.2, efficiency: '+33.3%' },
      { name: 'Inner Ring Road', baseline: 19.5, resQClear: 13.6, efficiency: '+30.2%' }
    ],
    delaySources: [
      { category: 'Intersection Red Lights', before: '42%', after: '8%' },
      { category: 'Bottleneck Traffic Congestion', before: '36%', after: '14%' },
      { category: 'Pedestrian & Turning Conflicts', before: '14%', after: '6%' },
      { category: 'Free Flow Transit', before: '8%', after: '72%' }
    ]
  }
};

window.RESQCLEAR_DATA = RESQCLEAR_DATA;
window.AMBUCLEAR_DATA = RESQCLEAR_DATA;

/* ===== END FILE: data.js ===== */

/* ===== START FILE: simulation.js ===== */
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

/* ===== END FILE: simulation.js ===== */

/* ===== START FILE: components.js ===== */
// resQClear UI Components & Enterprise SVG Icon Library (React 18)
// [React hooks initialized at top level]

// --- ICONS (Scalable SVG Icons) ---
const Icons = {
  Ambulance: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-2.92-1.026A1 1 0 0 0 18 13v5" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M8 8h4" />
      <path d="M10 6v4" />
    </svg>
  ),
  Activity: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  ShieldAlert: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  ShieldCheck: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Shield: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Zap: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Radio: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  ),
  Navigation: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  ),
  Hospital: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
      <path d="M10 14h4" />
      <path d="M10 17h4" />
    </svg>
  ),
  TrafficLight: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <circle cx="12" cy="6" r="2" fill="#ef4444" />
      <circle cx="12" cy="12" r="2" fill="#f59e0b" />
      <circle cx="12" cy="18" r="2" fill="#10b981" />
    </svg>
  ),
  Play: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" {...props}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Pause: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" {...props}>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  ),
  RotateCcw: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 2v6h6" />
      <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
    </svg>
  ),
  Volume2: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  ),
  VolumeX: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  ),
  BarChart3: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Settings: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Presentation: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  CheckCircle2: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  AlertTriangle: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Compass: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  ArrowRight: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Cpu: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  Bell: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Camera: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  Layers: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Lock: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  X: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Info: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  HelpCircle: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Crosshair: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  ),
  TrendingUp: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
};

// --- LOGO COMPONENT ---
function ResQClearLogo({ size = "default" }) {
  const isSmall = size === "sm" || size === "small";
  return (
    <div className="flex items-center space-x-2.5 select-none">
      <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-0.5 shadow-md shadow-emerald-500/20">
        <div className={`bg-slate-950 rounded-[10px] ${isSmall ? 'p-1.5' : 'p-2'} flex items-center justify-center`}>
          <div className="relative">
            <Icons.Ambulance className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'} text-emerald-400`} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-1.5">
          <span className={`font-extrabold tracking-tight text-white ${isSmall ? 'text-base' : 'text-xl'}`}>
            resQ<span className="text-emerald-400">Clear</span>
          </span>
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
            PROTOTYPE
          </span>
        </div>
        {!isSmall && (
          <p className="text-[9px] text-slate-400 tracking-wider uppercase font-mono font-medium">
            EMERGENCY TRAFFIC COORDINATION
          </p>
        )}
      </div>
    </div>
  );
}

// Export for app bundle
window.Icons = Icons;
window.ResQClearLogo = ResQClearLogo;
window.AmbuClearLogo = ResQClearLogo;

/* ===== END FILE: components.js ===== */

/* ===== START FILE: LiveMap.js ===== */
// resQClear Interactive City Digital Twin Simulation Map (Hero Canvas Engine)
// 60 FPS Tactical Grid, Emergency Corridors, Intersections & Live Telemetry Overlay
// [React hooks initialized at top level]

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

/* ===== END FILE: LiveMap.js ===== */

/* ===== START FILE: ConflictEngineModal.js ===== */
// resQClear Conflict Resolution Engine & Decision Factors Intelligence Panel
// Core Startup Intelligence: Decision Panel, Telemetry, Sequence, & Explainability
// [React hooks initialized at top level]

function ConflictEnginePanel({ simState, onClose }) {
  const { conflictState = {}, ambulances = [], intersections = [] } = simState || {};
  const [showWhyModal, setShowWhyModal] = useState(false);

  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const stage = conflictState.stage || 'IDLE';
  const isDetected = stage === 'DETECTING' || stage === 'PREDICTING';
  const isAnalyzing = stage === 'ANALYZING' || stage === 'GENERATING_SEQUENCE';
  const isAActive = stage === 'PRIORITY_A' || stage === 'A_CLEARED';
  const isBActive = stage === 'PRIORITY_B';
  const isBothCleared = stage === 'BOTH_CLEARED';

  // Sequence Flow Stages for Visual Progress Tracker
  const sequenceStages = [
    { key: 'DETECTING', label: 'DETECTING' },
    { key: 'PREDICTING', label: 'PREDICTING' },
    { key: 'ANALYZING', label: 'ANALYZING CONFLICT' },
    { key: 'GENERATING', label: 'GENERATING SAFE SEQUENCE' },
    { key: 'PRIORITY_A', label: 'PRIORITY 01: AMB-104' },
    { key: 'A_CLEARED', label: 'INTERSECTION CLEARED' },
    { key: 'PRIORITY_B', label: 'PRIORITY 02: AMB-208' },
    { key: 'B_CLEARED', label: 'INTERSECTION CLEARED' },
    { key: 'BOTH_CLEARED', label: 'CONFLICT RESOLVED' }
  ];

  const getCurrentStepIndex = () => {
    switch (stage) {
      case 'DETECTING': return 0;
      case 'PREDICTING': return 1;
      case 'ANALYZING': return 2;
      case 'GENERATING_SEQUENCE': return 3;
      case 'PRIORITY_A': return 4;
      case 'A_CLEARED': return 5;
      case 'PRIORITY_B': return 6;
      case 'BOTH_CLEARED': return 8;
      default: return isBothCleared ? 8 : 4;
    }
  };

  const currentIdx = getCurrentStepIndex();

  return (
    <div className="glass-panel rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl bg-slate-950/95 space-y-5">
      {/* 1. Header & Junction Identifier */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Icons.ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-extrabold text-base sm:text-lg text-white">CONFLICT RESOLUTION ENGINE</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-bold uppercase">
                CORE AI MODEL
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              CONFLICT JUNCTION: <strong className="text-white">INT-04 (Central Conflict Junction)</strong> • Vector Collision Arbitration
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            CONFLICT RISK: <strong className="text-red-400">HIGH</strong>
          </span>
          <span className="px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
            CONFIDENCE: 96% (SIMULATION ESTIMATE)
          </span>
        </div>
      </div>

      {/* 2. Main High-Impact Dynamic Status Banner */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all ${
        isBothCleared
          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
          : isAActive || isBActive
          ? 'bg-cyan-950/30 border-cyan-500/50 text-cyan-300'
          : isAnalyzing
          ? 'bg-amber-950/30 border-amber-500/50 text-amber-300'
          : 'bg-red-950/40 border-red-500/50 text-red-300'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0">
            {isBothCleared ? (
              <Icons.CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <Icons.AlertTriangle className="w-5 h-5 text-amber-400 animate-pulse" />
            )}
          </div>
          <div>
            <div className="font-extrabold text-sm font-mono uppercase tracking-wide flex items-center space-x-2">
              <span>{conflictState.bannerText || '⚠ MULTIPLE EMERGENCY CONFLICT DETECTED'}</span>
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {conflictState.bannerSubtext || 'AMB-104 (North) & AMB-208 (South) converging on INT-04. AI-assisted sequence formulating.'}
            </div>
          </div>
        </div>

        {/* Explainability Button: WHY THIS DECISION? */}
        <button
          onClick={() => setShowWhyModal(true)}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-mono text-xs font-bold transition-all flex items-center space-x-1.5 flex-shrink-0"
        >
          <Icons.HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>WHY THIS DECISION?</span>
        </button>
      </div>

      {/* 3. Sequential Progress Timeline Bar */}
      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-2 flex justify-between">
          <span>AI ARBITRATION SEQUENCE PROGRESS</span>
          <span className="text-emerald-400">STAGE {currentIdx + 1} OF {sequenceStages.length}</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1 font-mono text-[9px] text-center">
          {sequenceStages.map((stg, i) => {
            const isPast = i < currentIdx;
            const isCurrent = i === currentIdx;
            return (
              <div
                key={stg.key}
                className={`p-1.5 rounded-lg border leading-tight transition-all ${
                  isCurrent
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md ring-1 ring-emerald-400'
                    : isPast
                    ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                {stg.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Side-by-Side Dual Ambulance Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ambulance A Telemetry Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isAActive ? 'bg-emerald-950/30 border-emerald-500/70 shadow-lg shadow-emerald-950/50' : 'bg-slate-900/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping flex-shrink-0"></span>
              <span className="font-bold text-sm text-white whitespace-nowrap">{ambA.id || 'AMB-104'}</span>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">({ambA.name})</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/40 font-bold whitespace-nowrap">
              CRITICAL
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">ETA TO INT-04:</div>
              <div className="font-bold text-emerald-400 text-sm">{ambA.currentIntersectionEta || 43} sec</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">DISTANCE TO INT-04:</div>
              <div className="font-bold text-white text-sm">{ambA.distanceToConflict || 555} m</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">APPROACH VECTOR:</div>
              <div className="font-medium text-slate-200">North Link (Sector 1)</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">CURRENT SPEED:</div>
              <div className="font-bold text-slate-200">{ambA.speed || 42} km/h</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-xs font-mono">
            <span className="text-slate-400">RECOMMENDED SEQUENCE:</span>
            <span className="px-3 py-1 rounded bg-emerald-500 text-slate-950 font-bold">
              01 → PRIORITY 01
            </span>
          </div>
        </div>

        {/* Ambulance B Telemetry Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isBActive ? 'bg-emerald-950/30 border-emerald-500/70 shadow-lg shadow-emerald-950/50' : 'bg-slate-900/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0"></span>
              <span className="font-bold text-sm text-white whitespace-nowrap">{ambB.id || 'AMB-208'}</span>
              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">({ambB.name})</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/40 font-bold whitespace-nowrap">
              CRITICAL
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">ETA TO INT-04:</div>
              <div className="font-bold text-amber-400 text-sm">{ambB.currentIntersectionEta || 50} sec</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">DISTANCE TO INT-04:</div>
              <div className="font-bold text-white text-sm">{ambB.distanceToConflict || 555} m</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">APPROACH VECTOR:</div>
              <div className="font-medium text-slate-200">South Link (Sector 2)</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">CURRENT SPEED:</div>
              <div className="font-bold text-slate-200">{ambB.speed || 40} km/h</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-xs font-mono">
            <span className="text-slate-400">RECOMMENDED SEQUENCE:</span>
            <span className={`px-3 py-1 rounded font-bold ${
              isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              02 → PRIORITY 02
            </span>
          </div>
        </div>
      </div>

      {/* 5. DECISION FACTORS & ARBITRATION MATRIX */}
      <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">DECISION FACTORS & ARBITRATION MATRIX</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-slate-400">DECISION CONFIDENCE:</span>
            <span className="font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              96% (SIMULATION ESTIMATE)
            </span>
          </div>
        </div>

        {/* 6 Core Decision Factors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• ETA</div>
            <div className="font-bold text-emerald-400 mt-0.5">43s vs 50s</div>
            <div className="text-[9px] text-slate-500">7s Delta</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Distance</div>
            <div className="font-bold text-white mt-0.5">555m vs 555m</div>
            <div className="text-[9px] text-slate-500">Equal Radius</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Approach Vector</div>
            <div className="font-bold text-white mt-0.5">North vs South</div>
            <div className="text-[9px] text-slate-500">Cross-axis</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Occupancy</div>
            <div className="font-bold text-amber-400 mt-0.5">1 Vehicle/Slot</div>
            <div className="text-[9px] text-slate-500">Non-simultaneous</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Traffic Density</div>
            <div className="font-bold text-red-400 mt-0.5">High (+2.4m)</div>
            <div className="text-[9px] text-slate-500">Anna Salai Link</div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[9px] text-slate-400 uppercase">• Conflict Risk</div>
            <div className="font-bold text-red-400 mt-0.5">HIGH</div>
            <div className="text-[9px] text-slate-500">Simultaneous Demand</div>
          </div>
        </div>

        {/* Recommended Sequence & Reason */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase">RECOMMENDED SEQUENCE</div>
            <div className="font-mono font-extrabold text-emerald-400 text-sm mt-0.5">
              01 → AMB-104 &nbsp;|&nbsp; 02 → AMB-208
            </div>
            <div className="text-slate-300 mt-1">
              <strong>Reason:</strong> "Sequential clearance minimizes simultaneous intersection occupancy."
            </div>
          </div>

          <div className="text-right font-mono text-[11px] text-slate-400 flex-shrink-0">
            <div>SIMULATED SIGNAL CONTROL:</div>
            <strong className="text-emerald-400">{conflictState.signalPhase || 'NORMAL CYCLE'}</strong>
          </div>
        </div>
      </div>

      {/* 6. Emergency Corridor Visualization */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300 font-bold uppercase">EMERGENCY CORRIDOR VISUALIZATION</span>
          <span className="text-slate-400">
            CORRIDOR STATUS: <strong className={isBothCleared ? 'text-teal-300' : isAActive || isBActive ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}>
              {isBothCleared ? 'CLEARED' : isAActive || isBActive ? 'ACTIVE' : 'INACTIVE'}
            </strong>
          </span>
        </div>

        <div className="flex items-center justify-between overflow-x-auto py-2 px-1 text-xs font-mono text-center gap-2">
          <div className="p-2 rounded-lg bg-slate-950 border border-red-500/40 text-red-400 min-w-[100px]">
            <Icons.Ambulance className="w-4 h-4 mx-auto mb-1 text-red-400" />
            <span className="font-bold">AMBULANCE</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]">
            <span className="text-[10px] text-slate-500 block">NODE 1</span>
            <span className="font-bold text-white">INT-01</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]">
            <span className="text-[10px] text-slate-500 block">NODE 2</span>
            <span className="font-bold text-white">INT-02</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-emerald-500/50 text-emerald-400 min-w-[120px] ring-1 ring-emerald-500/30">
            <span className="text-[10px] text-emerald-500 block">CONFLICT JUNCTION</span>
            <span className="font-bold text-emerald-300">INT-04</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]">
            <span className="text-[10px] text-slate-500 block">NODE 3</span>
            <span className="font-bold text-white">INT-06</span>
          </div>
          <span className="text-slate-600 font-bold">↓</span>
          <div className="p-2 rounded-lg bg-slate-950 border border-emerald-500/40 text-emerald-400 min-w-[110px]">
            <Icons.Hospital className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
            <span className="font-bold">HOSPITAL</span>
          </div>
        </div>
      </div>

      {/* 7. "WHY THIS DECISION?" Explainability Modal */}
      {showWhyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="max-w-xl w-full bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl space-y-4 font-sans">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Icons.HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">Why This Decision?</h3>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">TRANSPARENT AI EXPLAINABILITY</span>
                </div>
              </div>
              <button
                onClick={() => setShowWhyModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed">
              <strong className="text-white">Core Arbitration Summary:</strong><br />
              "AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy."
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="font-mono text-slate-400 font-bold uppercase text-[10px]">Key Factors Evaluated:</div>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>ETA Delta:</strong> AMB-104 predicted ETA is 43s vs AMB-208 ETA of 50s.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Momentum Preservation:</strong> Sequential green wave allows AMB-104 to clear INT-04 without deceleration, leaving the intersection open for AMB-208.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Deadlock Prevention:</strong> Eliminates cross-axis convergence where both vehicles arrive concurrently.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Simulated Signal Control:</strong> Phase transfer occurs automatically the moment AMB-104 passes the intersection boundary.</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowWhyModal(false)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs transition-all"
              >
                Close Explanation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.ConflictEnginePanel = ConflictEnginePanel;

/* ===== END FILE: ConflictEngineModal.js ===== */

/* ===== START FILE: RightStatusPanel.js ===== */
// resQClear Right-Side Operations & Intelligence Panel
// System Intelligence, AI Traffic Insight, Before vs After & Live Chronology
// [React hooks initialized at top level]

function RightStatusPanel({ simState, onApplyRoute }) {
  const {
    events = [],
    liveMetrics = {},
    ambulances = [],
    aiInsight = {},
    systemIntelligence = {},
    conflictState = {}
  } = simState || {};

  const getEventBadge = (type) => {
    switch (type) {
      case 'alert':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'priority':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'success':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      case 'warning':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'alert':
        return <Icons.AlertTriangle className="w-3.5 h-3.5 text-red-400" />;
      case 'priority':
      case 'success':
        return <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Icons.Radio className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4 overflow-y-auto pr-1">
      {/* 1. DEDICATED "SYSTEM INTELLIGENCE" PANEL */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">SYSTEM INTELLIGENCE</span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
            LIVE ENGINE
          </span>
        </div>

        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">TRAFFIC ANALYSIS</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Congestion detected</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">ROUTE ANALYSIS</span>
            <span className={`font-bold flex items-center space-x-1 ${aiInsight.applied ? 'text-emerald-400' : 'text-slate-300'}`}>
              <Icons.CheckCircle2 className={`w-3 h-3 ${aiInsight.applied ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{aiInsight.applied ? 'Alternate Route Applied' : 'Alternate route evaluated'}</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">CONFLICT ANALYSIS</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Multi-ambulance conflict detected</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">SEQUENCE</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Priority order generated</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">CORRIDOR</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Emergency corridor simulated</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">HOSPITAL ETA</span>
            <span className="text-emerald-400 font-bold flex items-center space-x-1">
              <Icons.CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>ETA updated</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. AI TRAFFIC INSIGHT CARD */}
      <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wide">AI TRAFFIC INSIGHT</span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
            SIMULATION ESTIMATE
          </span>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-1 font-sans">
          <p className="font-semibold text-white">
            "High traffic density detected on Anna Salai North Link."
          </p>
          <div className="flex justify-between text-xs font-mono pt-1">
            <span className="text-slate-400">Predicted delay:</span>
            <span className="text-red-400 font-bold">+2.4 min</span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Alternative route:</span>
            <span className="text-cyan-300 font-bold">Route B</span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Estimated improvement:</span>
            <span className="text-emerald-400 font-bold">2m 18s</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400">
            SIMULATION ESTIMATE
          </span>
          <button
            onClick={() => onApplyRoute()}
            disabled={aiInsight.applied}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center space-x-1.5 ${
              aiInsight.applied
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
            }`}
          >
            {aiInsight.applied ? (
              <>
                <Icons.CheckCircle2 className="w-3.5 h-3.5" />
                <span>Alternate Applied</span>
              </>
            ) : (
              <>
                <Icons.Navigation className="w-3.5 h-3.5" />
                <span>SIMULATE ALTERNATE ROUTE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. "BEFORE vs AFTER" COMPARISON PANEL */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">BEFORE vs AFTER COMPARISON</span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
            SIMULATION RESULT
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          {/* WITHOUT resQClear */}
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-red-500/20 space-y-1.5">
            <div className="text-[10px] font-bold text-red-400 uppercase">WITHOUT resQClear</div>
            <div className="text-slate-400 text-[11px] font-sans">• Traffic congestion</div>
            <div className="text-slate-400 text-[11px] font-sans">• Intersection waiting</div>
            <div className="text-slate-400 text-[11px] font-sans">• Uncoordinated emergency movement</div>
            <div className="pt-1 border-t border-slate-800/80 flex justify-between text-[11px]">
              <span className="text-slate-500">Baseline ETA:</span>
              <strong className="text-red-400">08:34</strong>
            </div>
          </div>

          {/* WITH resQClear */}
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-1.5">
            <div className="text-[10px] font-bold text-emerald-400 uppercase">WITH resQClear</div>
            <div className="text-slate-200 text-[11px] font-sans">• Coordinated sequence</div>
            <div className="text-slate-200 text-[11px] font-sans">• Emergency corridor</div>
            <div className="text-slate-200 text-[11px] font-sans">• Reduced simulated delay</div>
            <div className="pt-1 border-t border-slate-800/80 flex justify-between text-[11px]">
              <span className="text-slate-500">Optimized ETA:</span>
              <strong className="text-emerald-400">06:16</strong>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300">ESTIMATED DIFFERENCE:</span>
          <strong className="text-emerald-400 text-sm">02:18 min saved</strong>
        </div>
      </div>

      {/* 4. LIVE EVENT TIMELINE */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex-1 flex flex-col min-h-[300px]">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <h3 className="font-bold text-sm text-white">Event Timeline</h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">LIVE CHRONOLOGY</span>
        </div>

        <div className="space-y-2.5 overflow-y-auto flex-1 max-h-[360px] pr-1 font-mono">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start space-x-2.5 text-xs"
            >
              <div className="mt-0.5">{getEventIcon(evt.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] text-slate-400 font-bold">{evt.time}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] border ${getEventBadge(evt.type)}`}>
                    {evt.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-slate-200 text-xs leading-snug font-sans">{evt.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.RightStatusPanel = RightStatusPanel;

/* ===== END FILE: RightStatusPanel.js ===== */

/* ===== START FILE: AmbulanceFleetView.js ===== */
// resQClear Ambulance Fleet Management Cards View
// Enterprise Telemetry Cards with Dynamic Live Telemetry & Patient Triage
// [React hooks initialized at top level]

function AmbulanceFleetView({ simState, onTriggerAmbulance }) {
  const { ambulances = [] } = simState || {};
  const [selectedAmb, setSelectedAmb] = useState(ambulances[0]?.id || 'AMB-104');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Active Emergency Fleet Telemetry</h2>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
              SIMULATION TELEMETRY
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Emergency severity provided by authorized emergency personnel • Traffic coordination priority
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            FLEET IN SERVICE: <strong className="text-white">{ambulances.length}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
            2 CRITICAL ALS ACTIVE
          </span>
        </div>
      </div>

      {/* Ambulance Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ambulances.map((amb) => {
          const isSelected = selectedAmb === amb.id;
          const isCritical = amb.status === 'CRITICAL';

          return (
            <div
              key={amb.id}
              onClick={() => setSelectedAmb(amb.id)}
              className={`glass-panel rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-emerald-500 shadow-xl shadow-emerald-950/40 bg-slate-900/95'
                  : 'border-slate-800 hover:border-slate-700 bg-slate-950/80'
              }`}
            >
              <div>
                {/* Top Row: ID, SubStatus, Emergency Level Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isCritical ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}>
                      <Icons.Ambulance className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-extrabold text-lg text-white font-mono">{amb.id}</h3>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                          {amb.name}
                        </span>
                      </div>
                      <p className="text-xs text-red-400 font-mono font-bold mt-0.5">{amb.subStatus || amb.status}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${
                      isCritical ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                    }`}>
                      {amb.status}
                    </span>
                    <div className="text-[10px] font-mono text-emerald-400 font-bold mt-1">PRIORITY 0{amb.priorityRank}</div>
                  </div>
                </div>

                {/* State Badge */}
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 mb-3 text-xs font-mono flex items-center justify-between">
                  <span className="text-slate-400 text-[10px]">CURRENT STATE:</span>
                  <span className="text-emerald-400 font-bold text-[11px]">{amb.currentState || 'IN TRANSIT'}</span>
                </div>

                {/* Live Telemetry Grid (Speed, Distance, ETA, Intersection ETA) */}
                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">SPEED:</span>
                    <span className="text-emerald-400 font-bold text-sm">{amb.speed} {amb.speedUnit}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">TOTAL DISTANCE:</span>
                    <span className="text-white font-bold text-sm">{amb.distance}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">HOSPITAL ETA:</span>
                    <span className="text-white font-bold text-sm">{amb.eta} min</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px]">INTERSECTION ETA:</span>
                    <span className="text-cyan-400 font-bold text-sm">{amb.currentIntersectionEta || 43} sec</span>
                  </div>
                </div>

                {/* Location, Destination & Route Details */}
                <div className="space-y-2 text-xs font-mono mb-4 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Current Location:</span>
                    <span className="text-white font-medium">{amb.origin}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Destination:</span>
                    <span className="text-emerald-400 font-bold">{amb.destination}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Route Status:</span>
                    <span className="text-teal-300 font-bold">{amb.routeStatus}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Paramedic Lead:</span>
                    <span className="text-slate-200">{amb.driver}</span>
                  </div>
                </div>

                {/* Patient Condition & Triage */}
                {amb.patient && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 font-mono text-[10px]">TRIAGE CONDITION:</span>
                      <span className="text-red-400 font-mono font-bold text-[10px]">{amb.patient.age}</span>
                    </div>
                    <div className="font-semibold text-white mb-2 font-sans">{amb.patient.condition}</div>
                    
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-900 pt-1.5">
                      <span>HR: <strong className="text-white">{amb.patient.vitals.hr}</strong> bpm</span>
                      <span>BP: <strong className="text-white">{amb.patient.vitals.bp}</strong></span>
                      <span>SpO2: <strong className="text-emerald-400">{amb.patient.vitals.spo2}%</strong></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  BATTERY: {amb.batteryCharge} • O2: {amb.oxygenLevel}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTriggerAmbulance(amb.id);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 transition-all"
                >
                  Locate on Map
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.AmbulanceFleetView = AmbulanceFleetView;

/* ===== END FILE: AmbulanceFleetView.js ===== */

/* ===== START FILE: HospitalView.js ===== */
// resQClear Hospital Emergency Receiving & Trauma Readiness Dashboard
// Synchronized ER Bay Notifications & Bed Capacity Telemetry
// [React hooks initialized at top level]

function HospitalView({ simState }) {
  const { hospitals = [], ambulances = [] } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Hospital Emergency Receiving Hubs</h2>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
              SIMULATION HUBS
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Simulated ambulance arrival preparation • Telemetry synchronized for ER trauma bay readiness
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            RECEIVING HOSPITALS: <strong className="text-white">{hospitals.length}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            TRAUMA BAYS PREPARED
          </span>
        </div>
      </div>

      {/* Hospital Stations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {hospitals.map((hosp) => {
          const incomingAmb = ambulances.find((a) => a.id === hosp.assignedAmbulance) || {};
          const isReady = hosp.erStatus === 'READY';

          return (
            <div
              key={hosp.id}
              className="glass-panel rounded-2xl p-6 border border-slate-800 bg-slate-950/90 flex flex-col justify-between"
            >
              <div>
                {/* Hospital Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icons.Hospital className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-white">{hosp.name}</h3>
                      <p className="text-xs text-slate-400 font-mono">{hosp.location} • {hosp.traumaLevel}</p>
                    </div>
                  </div>
                </div>

                {/* ER Status Badge */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-5 text-xs font-mono">
                  <span className="text-slate-400">ER STATUS:</span>
                  <span className={`px-2.5 py-1 rounded font-bold border ${
                    isReady ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    {isReady ? 'READY' : 'STANDBY'}
                  </span>
                </div>

                {/* Incoming Transport Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/25 mb-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 uppercase">INCOMING TRANSPORT:</span>
                    <span className="text-emerald-400 font-extrabold text-sm">{hosp.assignedAmbulance}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">ETA:</div>
                      <div className="text-2xl font-extrabold text-white font-mono">{incomingAmb.eta || hosp.eta} <span className="text-xs font-normal text-slate-400">min</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">EMERGENCY:</div>
                      <span className="inline-block mt-1 px-2.5 py-1 rounded text-[11px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                        {incomingAmb.status || 'CRITICAL'}
                      </span>
                    </div>
                  </div>

                  {incomingAmb.patient && (
                    <div className="text-xs text-slate-300 pt-2 border-t border-slate-800/80 font-sans">
                      <strong>Triage:</strong> {incomingAmb.patient.condition} ({incomingAmb.patient.age})
                    </div>
                  )}
                </div>

                {/* AMBULANCE ARRIVAL PREPARATION */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white uppercase">AMBULANCE ARRIVAL PREPARATION</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center space-x-2">
                    <Icons.Bell className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>"Emergency arrival notification generated."</span>
                  </div>
                </div>

                {/* Preparation Checklist */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-mono font-bold text-slate-300 uppercase">Hospital Readiness Checklist:</div>
                  {hosp.readiness.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Doctor & Bed Capacity & Credibility Note */}
              <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-[10px]">LEAD PHYSICIAN:</span>
                    <strong className="text-slate-200">{hosp.leadDoctor}</strong>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px]">ICU BEDS FREE:</span>
                    <strong className="text-emerald-400">{hosp.icuFree} Available</strong>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 text-center pt-1 border-t border-slate-900">
                  Simulated hospital readiness • Not connected to real hospital ER infrastructure
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.HospitalView = HospitalView;

/* ===== END FILE: HospitalView.js ===== */

/* ===== START FILE: AnalyticsView.js ===== */
// resQClear Traffic Analytics & Performance Metrics Component
// Enterprise Visualization with Response Times, Wait Times, Delay Reductions & Corridor Stats
// [React hooks initialized at top level]

function AnalyticsView({ simState }) {
  const { analyticsData = RESQCLEAR_DATA.analyticsData, demoMetrics = RESQCLEAR_DATA.demoMetrics } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Emergency Traffic Analytics & Corridors</h2>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
              DEMO DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Simulated demonstration analytics • Empirical corridor performance modeling
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            TOTAL SIMULATED RUNS: <strong className="text-white">{demoMetrics.totalSimulatedTrips || 1248}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            CONFIDENCE: {demoMetrics.decisionConfidence || '96%'}
          </span>
        </div>
      </div>

      {/* 6 Core Analytical Performance Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Emergency Response Time</div>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">06:14 min</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Avg per critical route</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Intersection Waiting Time</div>
          <div className="text-xl font-extrabold text-cyan-400 mt-1">4.2 sec</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Reduced from 48s baseline</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Traffic Congestion Delay</div>
          <div className="text-xl font-extrabold text-teal-300 mt-1">-32.4%</div>
          <div className="text-[9px] text-slate-500 mt-0.5">2m 18s avoided</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Route Efficiency</div>
          <div className="text-xl font-extrabold text-purple-400 mt-1">+33.8%</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Corridor flow boost</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Corridor Activations</div>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">14 Nodes</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Dynamic phase overrides</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Multi-Ambulance Conflicts</div>
          <div className="text-xl font-extrabold text-amber-400 mt-1">12 Events</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Zero cross-axis deadlock</div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Travel Time Comparison SVG Chart */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Emergency Response Time Comparison (Minutes)</h3>
              <p className="text-xs text-slate-400 font-mono">Hourly transit duration: Traditional siren baseline vs resQClear AI corridor</p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="text-slate-300">Traditional Siren Baseline</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">resQClear AI Corridor</span>
              </div>
            </div>
          </div>

          {/* SVG Bar Chart */}
          <div className="h-64 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 700 220" preserveAspectRatio="none">
              {/* Horizontal Grid lines */}
              {[0, 50, 100, 150, 200].map((y, i) => (
                <g key={i}>
                  <line x1="40" y1={y} x2="680" y2={y} stroke="#1e293b" strokeWidth="1" />
                  <text x="15" y={y + 4} fill="#64748b" fontSize="10" fontFamily="monospace">{30 - (i * 6)}m</text>
                </g>
              ))}

              {/* Data Bars */}
              {analyticsData.hourlyData.map((item, idx) => {
                const x = 70 + idx * 65;
                const hBase = (item.traditional / 30) * 180;
                const yBase = 200 - hBase;

                const valResQ = item.resQClear || 10;
                const hResQ = (valResQ / 30) * 180;
                const yResQ = 200 - hResQ;

                return (
                  <g key={idx}>
                    {/* Baseline Bar (Red) */}
                    <rect x={x - 14} y={yBase} width="12" height={hBase} rx="2" fill="#ef4444" opacity="0.45" />
                    {/* resQClear Bar (Emerald) */}
                    <rect x={x} y={yResQ} width="12" height={hResQ} rx="2" fill="#10b981" />
                    {/* Time Label */}
                    <text x={x - 2} y="215" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">{item.time}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Peak Hour Avoidance: <strong>11.3 min delay avoided during 18:00 rush hour</strong></span>
            <span className="text-emerald-400 font-bold">Corridor Efficiency Boost: +33.8%</span>
          </div>
        </div>

        {/* Delay Source Distribution */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Delay Source Distribution</h3>
            <p className="text-xs text-slate-400 font-mono mb-6">Before vs After AI Corridor Activation</p>

            <div className="space-y-4">
              {analyticsData.delaySources.map((source, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">{source.category}</span>
                    <span className="text-slate-400">{source.before} → <strong className="text-emerald-400">{source.after}</strong></span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden flex border border-slate-800">
                    <div className="bg-red-500/50 h-full" style={{ width: source.before }}></div>
                    <div className="bg-emerald-400 h-full" style={{ width: source.after }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
            All analytics shown are simulated demonstration data.
          </div>
        </div>
      </div>
    </div>
  );
}

window.AnalyticsView = AnalyticsView;

/* ===== END FILE: AnalyticsView.js ===== */

/* ===== START FILE: TrafficNetworkView.js ===== */
// resQClear Traffic Network & Intersections Control View
// Network Status, 6 Intersections, Simulated Signals, and Congestion Overview
// [React hooks initialized at top level]

function TrafficNetworkView({ simState }) {
  const { intersections = [], conflictState = {}, networkStatus = {}, congestionZones = [], ambulances = [] } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Smart Traffic Signal Network (Simulated)</h2>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
              SIMULATED SIGNAL CONTROL
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Simulated signal phase timing & emergency green-wave corridor transitions
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            TOTAL NODES: <strong className="text-white">{intersections.length}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            60 FPS DIGITAL TWIN
          </span>
        </div>
      </div>

      {/* 17. NETWORK STATUS OVERVIEW VIEW */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono">
        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-white">{networkStatus.intersectionsOnline || 6}</div>
          <div className="text-[11px] text-emerald-400 font-bold mt-0.5">INTERSECTIONS ONLINE</div>
          <div className="text-[9px] text-slate-500 mt-1">V2X Grid Connected</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-white">{networkStatus.ambulancesTracked || 3}</div>
          <div className="text-[11px] text-cyan-400 font-bold mt-0.5">AMBULANCES TRACKED</div>
          <div className="text-[9px] text-slate-500 mt-1">2 Critical ALS + 1 Urgent</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-white">{networkStatus.hospitalsAvailable || 3}</div>
          <div className="text-[11px] text-teal-300 font-bold mt-0.5">HOSPITALS AVAILABLE</div>
          <div className="text-[9px] text-slate-500 mt-1">Trauma Bays Prepared</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className="text-2xl font-extrabold text-amber-400">{congestionZones.filter(z => z.active).length}</div>
          <div className="text-[11px] text-amber-400 font-bold mt-0.5">CONGESTION ZONES DETECTED</div>
          <div className="text-[9px] text-slate-500 mt-1">Anna Salai & Usman Bottlenecks</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
          <div className={`text-2xl font-extrabold ${networkStatus.activeConflicts > 0 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
            {networkStatus.activeConflicts || 0}
          </div>
          <div className="text-[11px] text-red-400 font-bold mt-0.5">ACTIVE CONFLICT</div>
          <div className="text-[9px] text-slate-500 mt-1">{networkStatus.activeConflicts > 0 ? 'INT-04 Arbitration Active' : 'All Clear'}</div>
        </div>
      </div>

      {/* 6 Intersections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {intersections.map((inter) => {
          const isConflictNode = inter.id === 'int-4';
          const hasEmergencyPriority = inter.priorityVehicle !== null || (isConflictNode && conflictState.stage && conflictState.stage !== 'IDLE');

          return (
            <div
              key={inter.id}
              className={`glass-panel rounded-2xl p-6 border transition-all ${
                isConflictNode && hasEmergencyPriority
                  ? 'border-red-500/80 bg-red-950/20 shadow-xl shadow-red-950/40'
                  : 'border-slate-800 bg-slate-950/80'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isConflictNode ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    <Icons.TrafficLight className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-white">{inter.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">{inter.code || inter.id.toUpperCase()} • Simulated Coordinates: ({inter.x}, {inter.y})</p>
                  </div>
                </div>
              </div>

              {/* Phasing Lamps Status */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] mb-1">NORTH-SOUTH AXIS:</span>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${
                      inter.northSouth === 'GREEN' ? 'traffic-lamp active-green' :
                      inter.northSouth === 'YELLOW' ? 'traffic-lamp active-yellow' : 'traffic-lamp active-red'
                    }`}></span>
                    <strong className="text-white">{inter.northSouth}</strong>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] mb-1">EAST-WEST AXIS:</span>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${
                      inter.eastWest === 'GREEN' ? 'traffic-lamp active-green' :
                      inter.eastWest === 'YELLOW' ? 'traffic-lamp active-yellow' : 'traffic-lamp active-red'
                    }`}></span>
                    <strong className="text-white">{inter.eastWest}</strong>
                  </div>
                </div>
              </div>

              {/* Priority State */}
              <div className="space-y-2 text-xs font-mono mb-4 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Phase Timer:</span>
                  <span className="text-emerald-400 font-bold">{Math.max(1, Math.round(inter.timer || 12))} sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Emergency Override:</span>
                  <span className={hasEmergencyPriority ? 'text-red-400 font-bold animate-pulse' : 'text-slate-400'}>
                    {hasEmergencyPriority ? `ACTIVE (${inter.priorityVehicle || 'CONFLICT ARBITRATION'})` : 'STANDBY'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Simulated Signal Mode:</span>
                  <span className="text-teal-300 font-medium">{inter.modeLabel || 'NORMAL CYCLE'}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SIMULATED SIGNAL CONTROL: <strong className="text-emerald-400">OK</strong></span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  LATENCY: 18ms
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.TrafficNetworkView = TrafficNetworkView;

/* ===== END FILE: TrafficNetworkView.js ===== */

/* ===== START FILE: SettingsView.js ===== */
// resQClear Settings & Simulation Parameters View
// [React hooks initialized at top level]

function SettingsView({ simState, onReset }) {
  const [cityGrid, setCityGrid] = useState('chennai');
  const [v2xLatency, setV2xLatency] = useState(25);
  const [conflictHorizon, setConflictHorizon] = useState(300);
  const [greenWaveLead, setGreenWaveLead] = useState(15);
  const [autoReroute, setAutoReroute] = useState(true);

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-slate-800">
        <h2 className="text-2xl font-extrabold text-white">Simulation Engine & V2X Parameters</h2>
        <p className="text-sm text-slate-400">Configure simulated smart-city parameters, mesh latency, and algorithmic thresholds.</p>
      </div>

      <div className="space-y-6">
        {/* City Grid Selection */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Icons.Compass className="w-5 h-5 text-emerald-400" />
            <span>Target Urban Simulation Grid</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'chennai', name: 'Chennai Central Grid', desc: 'Anna Salai & Poonamallee corridors (Active)', active: true },
              { id: 'bengaluru', name: 'Bengaluru Silk Board Grid', desc: 'High-density Outer Ring Road test scenario', active: false },
              { id: 'mumbai', name: 'Mumbai Western Express Grid', desc: 'Flyover & coastal arterial mesh modeling', active: false }
            ].map((grid) => (
              <button
                key={grid.id}
                onClick={() => setCityGrid(grid.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  cityGrid === grid.id
                    ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-sm text-white">{grid.name}</div>
                <div className="text-xs text-slate-400 mt-1">{grid.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Algorithm Parameters */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Icons.Cpu className="w-5 h-5 text-cyan-400" />
            <span>AI Conflict Engine Thresholds</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Conflict Detection Radius (Horizon):</span>
                <strong className="text-emerald-400">{conflictHorizon} meters</strong>
              </div>
              <input
                type="range"
                min="100"
                max="600"
                step="50"
                value={conflictHorizon}
                onChange={(e) => setConflictHorizon(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Distance at which converging emergency trajectories trigger arbitration</span>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Green Wave Pre-emption Lead Time:</span>
                <strong className="text-emerald-400">{greenWaveLead} seconds</strong>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={greenWaveLead}
                onChange={(e) => setGreenWaveLead(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Seconds before ambulance arrival to transition signals through Yellow to Green</span>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Simulated V2X Mesh Latency:</span>
                <strong className="text-teal-300">{v2xLatency} ms</strong>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={v2xLatency}
                onChange={(e) => setV2xLatency(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Simulated latency for edge node packet transmission</span>
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-slate-300 mb-2">Dynamic Congestion Auto-Bypass:</span>
              <button
                onClick={() => setAutoReroute(!autoReroute)}
                className={`p-3 rounded-xl border font-bold flex items-center justify-between ${
                  autoReroute
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                <span>{autoReroute ? 'ENABLED (AUTOMATIC)' : 'MANUAL CONFIRMATION'}</span>
                <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Prototype Reset */}
        <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-white">Reset Simulation Database</h4>
            <p className="text-xs text-slate-400 mt-0.5">Restore all vehicle positions, traffic light cycles, and telemetry caches.</p>
          </div>
          <button
            onClick={onReset}
            className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-mono font-bold transition-all"
          >
            Reset All State
          </button>
        </div>
      </div>
    </div>
  );
}

window.SettingsView = SettingsView;

/* ===== END FILE: SettingsView.js ===== */

/* ===== START FILE: DemoControls.js ===== */
// resQClear Dedicated Simulation Demo Controls Bar
// Enterprise Control Room Actions: Playback, Hero Scenario, Speed, and Event Injections
// [React hooks initialized at top level]

function DemoControls({ simState, onRunScenario, onStart, onPause, onReset, onTriggerA, onTriggerB, onTriggerBoth, onCreateJam, onClearJam, onSetSpeed, onToggleSound, soundEnabled }) {
  const { isRunning, speedMultiplier, scenarioRunning, scenarioStep } = simState || {};

  return (
    <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl flex flex-wrap items-center justify-between gap-3">
      {/* Left Group: HERO BUTTON (RUN EMERGENCY SCENARIO) */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onRunScenario}
          className={`relative px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm font-mono flex items-center space-x-2 transition-all shadow-xl ${
            scenarioRunning
              ? 'bg-gradient-to-r from-red-500 to-emerald-500 text-slate-950 ring-2 ring-emerald-400 animate-pulse'
              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30 hover:scale-105'
          }`}
        >
          <Icons.Zap className="w-4 h-4 text-slate-950" />
          <span>RUN EMERGENCY SCENARIO</span>
        </button>

        {/* Step Indicator when Scenario is Running */}
        {scenarioRunning && (
          <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-400">STEP:</span>
            <span className="text-emerald-400 font-bold">{scenarioStep || 1} / 16</span>
          </div>
        )}
      </div>

      {/* Middle Group: Standard Playback Controls */}
      <div className="flex items-center space-x-2">
        {isRunning ? (
          <button
            onClick={onPause}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 hover:border-slate-600 transition-all"
            title="Pause Simulation"
          >
            <Icons.Pause className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onStart}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 hover:border-slate-600 transition-all"
            title="Start Simulation"
          >
            <Icons.Play className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={onReset}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 transition-all"
          title="Reset Simulation"
        >
          <Icons.RotateCcw className="w-4 h-4" />
        </button>

        {/* Speed Multipliers */}
        <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px] font-mono">
          {[1.0, 1.5, 2.0, 4.0].map((spd) => (
            <button
              key={spd}
              onClick={() => onSetSpeed(spd)}
              className={`px-2 py-0.5 rounded-lg transition-all ${
                speedMultiplier === spd ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>

      {/* Right Group: Manual Event Injections */}
      <div className="flex flex-wrap items-center space-x-2 text-xs font-mono">
        <button
          onClick={onTriggerBoth}
          className="px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-all font-semibold flex items-center space-x-1"
        >
          <Icons.AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span>Both Emergencies</span>
        </button>

        <button
          onClick={onTriggerA}
          className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
        >
          Ambulance A
        </button>

        <button
          onClick={onTriggerB}
          className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
        >
          Ambulance B
        </button>

        <button
          onClick={onCreateJam}
          className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all"
          title="Inject Traffic Jam"
        >
          Traffic Jam
        </button>

        <button
          onClick={onClearJam}
          className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700 transition-all"
          title="Clear Traffic Jam"
        >
          Clear Jam
        </button>

        {/* Audio Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-1.5 rounded-lg border transition-all ${
            soundEnabled
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-slate-900 text-slate-500 border-slate-800'
          }`}
          title={soundEnabled ? 'Mute Radio Sound FX' : 'Enable Radio Sound FX'}
        >
          {soundEnabled ? <Icons.Volume2 className="w-4 h-4" /> : <Icons.VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

window.DemoControls = DemoControls;

/* ===== END FILE: DemoControls.js ===== */

/* ===== START FILE: PresentationMode.js ===== */
// resQClear Startup Presentation & Pitch Mode Component
// Cinematic, High-Density Operations Deck for Investors & Municipal Stakeholders
// [React hooks initialized at top level]

function PresentationMode({ simState, onExit, onRunScenario }) {
  const { conflictState = {}, liveMetrics = {}, ambulances = [], events = [], intersections = [] } = simState || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const narrativeSteps = [
    {
      id: 1,
      tag: 'STEP 01',
      title: 'NORMAL TRAFFIC ACTIVE',
      desc: 'Urban grid operates under standard cyclic signal phasing across all 6 intersections.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 2,
      tag: 'STEP 02',
      title: 'AMBULANCE A DISPATCHED (CARDIAC)',
      desc: 'AMB-104 dispatched from Anna Nagar heading toward Government Hospital under Critical STEMI triage.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 3,
      tag: 'STEP 03',
      title: 'AMBULANCE B DISPATCHED (POLYTRAUMA)',
      desc: 'AMB-208 dispatched simultaneously from T. Nagar heading toward Apollo Hospital.',
      icon: Icons.Ambulance,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 4,
      tag: 'STEP 04',
      title: 'CROSS-AXIS CONFLICT DETECTED',
      desc: 'resQClear detects both critical ALS units converging on INT-04 simultaneously (43s vs 50s ETA).',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 5,
      tag: 'STEP 05',
      title: 'AI-ASSISTED SEQUENCE GENERATED',
      desc: 'Scoring model evaluates ETA, approach vectors, and occupancy: Priority 01 granted to AMB-104 (7s earlier).',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    },
    {
      id: 6,
      tag: 'STEP 06',
      title: 'SIMULATED GREEN CORRIDOR: AMB-104',
      desc: 'Emergency green wave locked for North link. AMB-104 proceeds through INT-04 with zero deceleration.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 7,
      tag: 'STEP 07',
      title: 'AMB-104 INTERSECTION CLEARED',
      desc: 'AMB-104 clears conflict zone. System immediately transitions signal phase to secondary corridor.',
      icon: Icons.CheckCircle2,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    },
    {
      id: 8,
      tag: 'STEP 08',
      title: 'SIMULATED GREEN CORRIDOR: AMB-208',
      desc: 'South corridor green wave active. AMB-208 proceeds through INT-04 smoothly without complete stop.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 9,
      tag: 'STEP 09',
      title: 'AMB-208 INTERSECTION CLEARED',
      desc: 'Secondary critical vehicle safely cleared without cross-axis deadlock or emergency braking.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 10,
      tag: 'STEP 10',
      title: 'CONFLICT RESOLVED & CYCLES RESTORED',
      desc: 'Both emergency routes coordinated successfully. Simulated delay avoided: 2m 18s.',
      icon: Icons.ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }
  ];

  // Map simulation state to active narrative slide
  useEffect(() => {
    if (conflictState.stage === 'DETECTING') setCurrentSlide(3);
    else if (conflictState.stage === 'ANALYZING') setCurrentSlide(4);
    else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(5);
    else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(6);
    else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(7);
    else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(9);
  }, [conflictState.stage]);

  const activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-300 overflow-y-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <ResQClearLogo />
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold">
            PRESENTATION MODE • PITCH DECK
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setCurrentSlide(0);
              onRunScenario();
            }}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center space-x-2 transition-all shadow-lg shadow-emerald-500/20"
          >
            <Icons.Zap className="w-4 h-4" />
            <span>Launch Automated Scenario</span>
          </button>

          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-all"
          >
            Exit Presentation
          </button>
        </div>
      </div>

      {/* Main Presentation Grid: MAP, AMBULANCES, CONFLICT ENGINE, SIGNAL, TIMELINE, METRICS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-4">
        {/* Left Side (7 Cols): MAP HERO */}
        <div className="lg:col-span-7 h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
          <LiveMap simState={simState} />
        </div>

        {/* Right Side (5 Cols): CONFLICT ENGINE + TELEMETRY + TIMELINE + NARRATIVE */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Narrative Slide */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${activeStep.border} ${activeStep.color} bg-slate-950`}>
                {activeStep.tag} • STEP {currentSlide + 1} OF 10
              </span>
              <span className="text-xs font-mono text-slate-400">PITCH STORY</span>
            </div>

            <div className="flex items-start space-x-3.5 my-2">
              <div className={`p-3 rounded-2xl bg-slate-950 border ${activeStep.border} ${activeStep.color} flex-shrink-0`}>
                <activeStep.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                  {activeStep.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeStep.desc}
                </p>
              </div>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center space-x-1.5 pt-4 border-t border-slate-800/80 overflow-x-auto">
              {narrativeSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          {/* Key Ambulances & Conflict State Snapshot */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white">AMB-104</span>
                <span className="text-[10px] text-red-400 font-bold">CRITICAL</span>
              </div>
              <div className="text-slate-400 text-[11px]">ETA: <strong className="text-emerald-400">{ambA.currentIntersectionEta || 43}s</strong></div>
              <div className="text-slate-400 text-[11px]">Distance: <strong className="text-white">{ambA.distanceToConflict || 555}m</strong></div>
              <div className="text-[10px] text-emerald-400 font-bold mt-1">PRIORITY 01</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white">AMB-208</span>
                <span className="text-[10px] text-red-400 font-bold">CRITICAL</span>
              </div>
              <div className="text-slate-400 text-[11px]">ETA: <strong className="text-amber-400">{ambB.currentIntersectionEta || 50}s</strong></div>
              <div className="text-slate-400 text-[11px]">Distance: <strong className="text-white">{ambB.distanceToConflict || 555}m</strong></div>
              <div className="text-[10px] text-slate-300 font-bold mt-1">PRIORITY 02</div>
            </div>
          </div>

          {/* Traffic Signal Simulation Indicator */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-2">
              <Icons.TrafficLight className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400">INT-04 SIGNAL PHASE:</span>
            </div>
            <strong className="text-emerald-400">{conflictState.signalPhase || 'NORMAL CYCLE'}</strong>
          </div>

          {/* Metrics Summary */}
          <div className="grid grid-cols-3 gap-2 font-mono text-center">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-base font-extrabold text-white">2</div>
              <div className="text-[9px] text-slate-400">Ambulances Coordinated</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-base font-extrabold text-teal-300">1</div>
              <div className="text-[9px] text-slate-400">Conflict Junction</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-base font-extrabold text-emerald-400">2m 18s</div>
              <div className="text-[9px] text-slate-400">Est. Delay Avoided</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Navigation */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-white font-bold transition-all"
        >
          ← Previous
        </button>

        <span className="hidden sm:inline">resQClear: “Clear the way. Save lives.” • Simulation Prototype</span>

        <button
          onClick={() => setCurrentSlide(Math.min(narrativeSteps.length - 1, currentSlide + 1))}
          disabled={currentSlide === narrativeSteps.length - 1}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

window.PresentationMode = PresentationMode;

/* ===== END FILE: PresentationMode.js ===== */

/* ===== START FILE: TopNav.js ===== */
// resQClear Operations Center Top Navigation Bar
// Enterprise Control Room Styling & Real-Time Telemetry Badges
// [React hooks initialized at top level]

function TopNav({ simState, onLaunchScenario, onTogglePresentation, onToggleSound, soundEnabled, onOpenLanding }) {
  const [timeStr, setTimeStr] = useState('');
  const { conflictState = {}, scenarioRunning = false, scenarioStep = 1, networkStatus = {} } = simState || {};

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0 flex-shrink-0">
      {/* Left: Logo & Core Status Indicators */}
      <div className="flex items-center space-x-4">
        <div onClick={onOpenLanding} className="cursor-pointer" title="Go to resQClear Landing Page">
          <ResQClearLogo size="default" />
        </div>

        {/* Status Indicators Pill Group */}
        <div className="hidden xl:flex items-center space-x-3 pl-3 border-l border-slate-800 text-[11px] font-mono">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SIMULATION ACTIVE</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>CHENNAI DIGITAL TWIN</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{networkStatus.intersectionsOnline || 6} INTERSECTIONS ONLINE</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>SYSTEM HEALTH: NORMAL</span>
          </div>
        </div>
      </div>

      {/* Middle: Compact Status Badge for Medium Screens */}
      <div className="hidden md:flex xl:hidden items-center space-x-2">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>SIMULATION ACTIVE • 6 SIGNALS ONLINE</span>
        </div>
      </div>

      {/* Right: Clock, Action Buttons, Audio, User Profile */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Live Clock */}
        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner">
          <span className="text-slate-400 text-[10px]">IST</span>
          <span className="text-emerald-400 font-bold tracking-wider">{timeStr || '13:55:32'}</span>
        </div>

        {/* SCENARIO DEMO Button */}
        <button
          onClick={onLaunchScenario}
          className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 transition-all border ${
            scenarioRunning
              ? 'bg-gradient-to-r from-red-500/30 to-emerald-500/30 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/40 animate-pulse'
              : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-950/40'
          }`}
          title="Run Automated Dual Ambulance Conflict Demo"
        >
          <Icons.Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">SCENARIO DEMO</span>
          <span className="sm:hidden">DEMO</span>
          {scenarioRunning && (
            <span className="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 text-[9px] font-extrabold">
              {scenarioStep}/16
            </span>
          )}
        </button>

        {/* PRESENTATION MODE Button */}
        <button
          onClick={onTogglePresentation}
          className="px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-400 text-xs font-mono font-bold transition-all flex items-center space-x-1.5"
          title="Startup Pitch Presentation Mode"
        >
          <Icons.Presentation className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden md:inline">PRESENTATION MODE</span>
          <span className="md:hidden">PITCH</span>
        </button>

        {/* Radio Audio Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-xl border transition-all ${
            soundEnabled
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
              : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
          }`}
          title={soundEnabled ? 'Radio SFX On' : 'Radio SFX Muted'}
        >
          {soundEnabled ? <Icons.Volume2 className="w-4 h-4" /> : <Icons.VolumeX className="w-4 h-4" />}
        </button>

        {/* User Operator Profile */}
        <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-inner">
            OP
          </div>
          <div className="hidden 2xl:block text-left text-xs font-mono leading-tight">
            <div className="text-white font-bold">Chennai Ops Desk</div>
            <div className="text-[10px] text-slate-400">Emergency Corridor Lead</div>
          </div>
        </div>
      </div>
    </header>
  );
}

window.TopNav = TopNav;

/* ===== END FILE: TopNav.js ===== */

/* ===== START FILE: Sidebar.js ===== */
// resQClear Operations Center Left Sidebar Navigation
// Clean Enterprise Proportions, Active Badges, and Section Organization
// [React hooks initialized at top level]

function Sidebar({ currentTab, setTab, simState, onTogglePresentation, onOpenLanding }) {
  const { ambulances = [], conflictState = {}, networkStatus = {} } = simState || {};
  const hasConflict = conflictState.stage && conflictState.stage !== 'IDLE';

  const navItems = [
    { id: 'overview', label: 'Overview & Map', icon: Icons.Compass, badge: 'LIVE' },
    { id: 'conflict', label: 'Conflict Engine', icon: Icons.ShieldAlert, badge: hasConflict ? 'ALERT' : null, alert: hasConflict },
    { id: 'ambulances', label: 'Ambulances', icon: Icons.Ambulance, badge: ambulances.length },
    { id: 'network', label: 'Traffic Network', icon: Icons.TrafficLight, badge: `${networkStatus.intersectionsOnline || 6}` },
    { id: 'hospitals', label: 'Hospitals', icon: Icons.Hospital, badge: `${networkStatus.hospitalsAvailable || 3}` },
    { id: 'analytics', label: 'Analytics', icon: Icons.BarChart3 },
    { id: 'settings', label: 'Settings', icon: Icons.Settings }
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950/85 backdrop-blur-md flex flex-col justify-between p-4 flex-shrink-0">
      {/* Top Navigation Items */}
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
            OPERATIONS CENTER
          </div>

          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium font-mono transition-all group ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold shadow-md shadow-emerald-950/40'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/80 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                    item.alert
                      ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                      : isActive
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-900 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions: Presentation Mode & Landing Page Link */}
      <div className="space-y-3 pt-4 border-t border-slate-800/80">
        <button
          onClick={onTogglePresentation}
          className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold transition-all shadow-inner"
        >
          <Icons.Presentation className="w-4 h-4 text-purple-400" />
          <span>Launch Pitch Deck</span>
        </button>

        <button
          onClick={onOpenLanding}
          className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-mono transition-all"
        >
          <Icons.Layers className="w-3.5 h-3.5" />
          <span>Landing Page</span>
        </button>

        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-500 leading-tight text-center">
          resQClear Prototype v2.0 • Digital Twin
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;

/* ===== END FILE: Sidebar.js ===== */

/* ===== START FILE: LandingPage.js ===== */
// resQClear Product Landing Page Component
// Enterprise Architecture, 6-Stage How It Works, Phased Roadmap, and Simulated Impact
// [React hooks initialized at top level]

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

/* ===== END FILE: LandingPage.js ===== */

/* ===== START FILE: app.js ===== */
// resQClear Root Application Component
// Master Controller for Digital Twin Simulation, Operations Dashboard, & Pitch Deck
// [React hooks initialized at top level]

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

/* ===== END FILE: app.js ===== */

})();
