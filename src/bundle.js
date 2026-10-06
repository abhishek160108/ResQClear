
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

const RESQCLEAR_DATA = {
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
      integrationNote: 'Hospital notification simulated',
      readiness: [
        { item: 'Cath Lab 02 Pre-warmed', done: true },
        { item: 'Cardiology Triage Team Alerted', done: true },
        { item: 'Rapid ER Bay 1 Reserved', done: true },
        { item: 'Direct Telemetry Connected (Simulated)', done: true }
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
      integrationNote: 'Hospital notification simulated',
      readiness: [
        { item: 'Surgical Suite 04 Prepped', done: true },
        { item: 'Blood Bank Cross-match 4 Units O-', done: true },
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
      integrationNote: 'Hospital notification simulated',
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
      origin: 'Anna Nagar',
      destination: 'Government Hospital',
      destinationId: 'hosp-1',
      speed: 46, // km/h
      speedUnit: 'km/h',
      eta: '06:42',
      distance: '3.8 km',
      routeStatus: 'OPTIMIZED',
      driver: 'S. Murugan (Paramedic Lead)',
      vehicleModel: 'Force Traveller Advance ALS',
      oxygenLevel: '98%',
      batteryCharge: '94%',
      triageSource: 'Severity provided by authorized emergency personnel',
      patient: {
        condition: 'Acute STEMI (Heart Attack)',
        age: '54 M',
        vitals: { hr: 122, bp: '160/95', spo2: 94, rhythm: 'ST-Elevation' },
        severityNote: 'Critical Emergency Dispatched'
      },
      color: '#ef4444',
      trailColor: 'rgba(239, 68, 68, 0.4)',
      corridorColor: '#10b981',
      // Simulation Path (Coordinates along the road grid)
      path: [
        { x: 120, y: 160, name: 'Anna Nagar West Terminal' },
        { x: 280, y: 160, name: 'Roundabout Sector 3' },
        { x: 450, y: 160, name: 'Kilpauk Medical Signal' },
        { x: 450, y: 350, name: 'Central Conflict Junction (Int. 4)' },
        { x: 620, y: 350, name: 'Poonamallee Arterial' },
        { x: 780, y: 350, name: 'Hospital Access Boulevard' },
        { x: 780, y: 160, name: 'Government Hospital ER Bay' }
      ],
      geoPath: [
        [13.0850, 80.2100],
        [13.0820, 80.2250],
        [13.0780, 80.2420],
        [13.0750, 80.2580],
        [13.0790, 80.2680],
        [13.0827, 80.2785]
      ],
      progress: 0.05,
      currentIntersectionEta: 43, // seconds (realistic demo value)
      distanceToConflict: 180, // meters
      priorityRank: 1
    },
    {
      id: 'AMB-208',
      name: 'Ambulance B',
      status: 'CRITICAL',
      origin: 'T. Nagar',
      destination: 'Apollo Hospital',
      destinationId: 'hosp-2',
      speed: 40,
      speedUnit: 'km/h',
      eta: '08:15',
      distance: '4.2 km',
      routeStatus: 'OPTIMIZED',
      driver: 'R. Vijay (Critical Care Paramedic)',
      vehicleModel: 'Tata Winger Type-D ICU',
      oxygenLevel: '95%',
      batteryCharge: '89%',
      triageSource: 'Severity provided by authorized emergency personnel',
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
        { x: 280, y: 540, name: 'Usman Road Flyover Base' },
        { x: 450, y: 540, name: 'Anna Salai South Link' },
        { x: 450, y: 350, name: 'Central Conflict Junction (Int. 4)' },
        { x: 620, y: 350, name: 'Poonamallee Arterial' },
        { x: 780, y: 350, name: 'Hospital Access Boulevard' },
        { x: 780, y: 540, name: 'Apollo Emergency Bay' }
      ],
      geoPath: [
        [13.0418, 80.2341],
        [13.0500, 80.2420],
        [13.0620, 80.2500],
        [13.0750, 80.2580],
        [13.0680, 80.2550],
        [13.0604, 80.2520]
      ],
      progress: 0.04,
      currentIntersectionEta: 50, // seconds (realistic demo value)
      distanceToConflict: 290, // meters
      priorityRank: 2
    },
    {
      id: 'AMB-312',
      name: 'Ambulance C',
      status: 'URGENT',
      origin: 'Guindy Industrial',
      destination: 'Kauvery Hub',
      destinationId: 'hosp-3',
      speed: 48,
      speedUnit: 'km/h',
      eta: '12:40',
      distance: '5.1 km',
      routeStatus: 'CORRIDOR ACTIVE',
      driver: 'M. Anand (EMS Team)',
      vehicleModel: 'Mahindra Supro Ambulance',
      oxygenLevel: '99%',
      batteryCharge: '96%',
      triageSource: 'Severity provided by authorized emergency personnel',
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
        { x: 280, y: 540, name: 'Usman Road Flyover Base' },
        { x: 180, y: 560, name: 'Kauvery Hub ER Bay' }
      ],
      geoPath: [
        [13.0067, 80.2025],
        [13.0200, 80.2200],
        [13.0338, 80.2505]
      ],
      progress: 0.35,
      currentIntersectionEta: 75,
      distanceToConflict: 720,
      priorityRank: 3
    }
  ],

  intersections: [
    {
      id: 'int-1',
      code: 'INT-01',
      name: 'Anna Nagar Roundabout (INT-01)',
      x: 280,
      y: 160,
      state: 'GREEN',
      timer: 18,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE'
    },
    {
      id: 'int-2',
      code: 'INT-02',
      name: 'Kilpauk Medical Signal (INT-02)',
      x: 450,
      y: 160,
      state: 'GREEN',
      timer: 14,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE'
    },
    {
      id: 'int-3',
      code: 'INT-03',
      name: 'T. Nagar Usman Road Cross (INT-03)',
      x: 280,
      y: 540,
      state: 'GREEN',
      timer: 22,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE'
    },
    {
      id: 'int-4',
      code: 'INT-04',
      name: 'Central Conflict Junction (INT-04)',
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
      modeLabel: 'NORMAL CYCLE'
    },
    {
      id: 'int-5',
      code: 'INT-05',
      name: 'Poonamallee Arterial Crossing (INT-05)',
      x: 620,
      y: 350,
      state: 'GREEN',
      timer: 20,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE'
    },
    {
      id: 'int-6',
      code: 'INT-06',
      name: 'Govt Hospital North Gate (INT-06)',
      x: 780,
      y: 350,
      state: 'GREEN',
      timer: 15,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0,
      modeLabel: 'NORMAL CYCLE'
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
      active: true
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
      active: true
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
    totalSimulatedTrips: 1248,
    corridorStatus: 'SAFE CORRIDOR SEQUENCE COMPLETED'
  },

  productRoadmap: [
    { phase: 'PHASE 1', title: 'Digital Twin Simulation', status: 'Current', isCurrent: true, desc: '60 FPS collision conflict arbitration engine & traffic corridor visualization' },
    { phase: 'PHASE 2', title: 'Ambulance GPS MVP', status: 'Next', isCurrent: false, desc: 'Paramedic vehicle telemetry client with live GPS precision tracking' },
    { phase: 'PHASE 3', title: 'Real-Time Traffic Data', status: 'Planned', isCurrent: false, desc: 'City-wide traffic sensor and sensor-mesh ingestion feeds' },
    { phase: 'PHASE 4', title: 'Hospital / Ambulance Pilot', status: 'Planned', isCurrent: false, desc: 'Controlled pilot with partner emergency departments and trauma centers' },
    { phase: 'PHASE 5', title: 'Authorized Traffic Infrastructure Integration', status: 'Future', isCurrent: false, desc: 'Municipal traffic command center API integration subject to regulatory approval' }
  ],

  howItWorksSteps: [
    { step: '1', name: 'DETECT', desc: 'Emergency vehicle detected via connected telemetry', icon: 'Ambulance' },
    { step: '2', name: 'PREDICT', desc: 'Traffic congestion and ETA to intersection analyzed', icon: 'Activity' },
    { step: '3', name: 'RESOLVE', desc: 'Conflicting emergency routes coordinated by AI decision model', icon: 'Cpu' },
    { step: '4', name: 'COORDINATE', desc: 'Emergency corridor sequence simulated with dynamic green wave', icon: 'TrafficLight' },
    { step: '5', name: 'INFORM', desc: 'Hospital and control-room status updated in real-time', icon: 'Hospital' }
  ],

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
window.AMBUCLEAR_DATA = RESQCLEAR_DATA; // backward compatibility alias

/* ===== END FILE: data.js ===== */

/* ===== START FILE: simulation.js ===== */
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

/* ===== END FILE: simulation.js ===== */

/* ===== START FILE: components.js ===== */
// AmbuClear UI Components (React 18)
// [React hooks initialized at top level]

// --- ICONS (Clean, scalable SVG Lucide-style icons) ---
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
  )
};

// --- LOGO COMPONENT ---
function ResQClearLogo({ size = "default" }) {
  const isSmall = size === "sm";
  return (
    <div className="flex items-center space-x-2.5 group cursor-pointer">
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-0.5 shadow-lg shadow-emerald-500/20`}>
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
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            AI-V2X
          </span>
        </div>
        {!isSmall && (
          <p className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
            Emergency Traffic Coordination
          </p>
        )}
      </div>
    </div>
  );
}

// Export for app.js
window.Icons = Icons;
window.ResQClearLogo = ResQClearLogo;
window.AmbuClearLogo = ResQClearLogo; // alias for backwards compatibility

/* ===== END FILE: components.js ===== */

/* ===== START FILE: LiveMap.js ===== */
// resQClear Interactive City Digital Twin Simulation & Future Infrastructure Modal
// [React hooks initialized at top level]

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

/* ===== END FILE: LiveMap.js ===== */

/* ===== START FILE: ConflictEngineModal.js ===== */
// resQClear Multi-Ambulance Conflict Engine & Decision Factors Panel
// [React hooks initialized at top level]

function ConflictEnginePanel({ simState, onClose }) {
  const { conflictState = {}, ambulances = [], intersections = [] } = simState || {};
  const ambA = ambulances.find(a => a.id === 'AMB-104') || {};
  const ambB = ambulances.find(a => a.id === 'AMB-208') || {};
  const int4 = intersections.find(i => i.id === 'int-4') || {};

  const isDetected = conflictState.stage === 'DETECTED';
  const isResolving = conflictState.stage === 'RESOLVING';
  const isAActive = conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'A_CLEARED';
  const isBActive = conflictState.stage === 'PRIORITY_B';
  const isBothCleared = conflictState.stage === 'BOTH_CLEARED';

  return (
    <div className="glass-panel rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl bg-slate-950/95 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Icons.ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-extrabold text-base sm:text-lg text-white">CRITICAL MULTI-AMBULANCE EVENT</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                SIMULATION
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Convergence Node: Central Conflict Junction (INT-04) • AMB-104 & AMB-208
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
            ENGINE: <strong className="text-emerald-400">AI-V2X ARBITRATION</strong>
          </span>
          {isBothCleared ? (
            <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center space-x-1.5">
              <Icons.CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONFLICT RESOLVED</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold animate-pulse">
              AI-ASSISTED DECISION IN PROGRESS
            </span>
          )}
        </div>
      </div>

      {/* Main Status Alert Banner */}
      <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
        isBothCleared
          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
          : isAActive || isBActive
          ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300'
          : isResolving
          ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
          : 'bg-red-950/40 border-red-500/50 text-red-300'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            {isBothCleared ? (
              <Icons.CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <Icons.AlertTriangle className="w-5 h-5 text-amber-400 animate-pulse" />
            )}
          </div>
          <div>
            <div className="font-extrabold text-sm font-mono uppercase tracking-wide">
              {conflictState.bannerText || 'MULTIPLE EMERGENCY CONFLICT DETECTED'}
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {conflictState.bannerSubtext || 'Two critical ALS units approaching the same intersection from opposing vectors.'}
            </div>
          </div>
        </div>

        <div className="hidden sm:block text-right font-mono text-xs">
          <div className="text-slate-400 text-[10px]">SEQUENCE STATUS</div>
          <div className="font-bold text-white">
            {isBothCleared ? 'SAFE CORRIDOR COMPLETED' : isBActive ? 'STAGE 02 / 02' : isAActive ? 'STAGE 01 / 02' : 'ARBITRATING'}
          </div>
        </div>
      </div>

      {/* Side-by-Side Telemetry & Approach Direction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ambulance A Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isAActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-sm text-white">AMB-104 (Ambulance A)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
              CRITICAL
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Target Node:</span>
              <span className="font-bold text-white">INT-04 (Central Conflict)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Approach Vector:</span>
              <span className="font-medium text-slate-200">North Corridors (Anna Nagar)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Destination:</span>
              <span className="font-medium text-emerald-400">Government Hospital</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Distance to INT-04:</span>
              <span className="font-bold text-white">{ambA.distanceToConflict || 180} m</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Intersection ETA:</span>
              <span className="font-bold text-emerald-400">{ambA.currentIntersectionEta || 43} sec</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Current Velocity:</span>
              <span>{ambA.speed || 46} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">COORDINATION PRIORITY:</span>
            <span className={`font-mono font-bold px-2.5 py-0.5 rounded ${
              isAActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              PRIORITY 01
            </span>
          </div>
        </div>

        {/* Ambulance B Card */}
        <div className={`p-4 rounded-xl border transition-all ${
          isBActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="font-bold text-sm text-white">AMB-208 (Ambulance B)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
              CRITICAL
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Target Node:</span>
              <span className="font-bold text-white">INT-04 (Central Conflict)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Approach Vector:</span>
              <span className="font-medium text-slate-200">South Link (T. Nagar)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Destination:</span>
              <span className="font-medium text-emerald-400">Apollo Hospital</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Distance to INT-04:</span>
              <span className="font-bold text-white">{ambB.distanceToConflict || 290} m</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Intersection ETA:</span>
              <span className="font-bold text-amber-400">{ambB.currentIntersectionEta || 50} sec</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Current Velocity:</span>
              <span>{ambB.speed || 40} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">COORDINATION PRIORITY:</span>
            <span className={`font-mono font-bold px-2.5 py-0.5 rounded ${
              isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              PRIORITY 02 (Secondary)
            </span>
          </div>
        </div>
      </div>

      {/* Transparent Decision Factors Scoring Model */}
      <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div className="flex items-center space-x-2">
            <Icons.Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">DECISION FACTORS & ARBITRATION MATRIX</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-slate-400">Confidence:</span>
            <span className="font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              96% (SIMULATION ESTIMATE)
            </span>
          </div>
        </div>

        {/* Factors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">ETA to Intersection</div>
            <div className="font-bold text-white mt-0.5">AMB-104: 43s</div>
            <div className="text-slate-400">AMB-208: 50s</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Emergency Severity</div>
            <div className="font-bold text-red-400 mt-0.5">AMB-104: Critical</div>
            <div className="text-red-400">AMB-208: Critical</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Conflict Probability</div>
            <div className="font-bold text-red-400 mt-0.5">HIGH (Cross-Axis)</div>
            <div className="text-slate-400">Overlap: 6.2s window</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Recommended Sequence</div>
            <div className="font-extrabold text-emerald-400 mt-0.5">AMB-104 → AMB-208</div>
            <div className="text-slate-400">Sequential Clearance</div>
          </div>
        </div>

        {/* Reason Explanation */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <strong className="text-emerald-400 font-mono">Arbitration Reason:</strong> AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict and maintains continuous vehicle momentum.
        </div>

        {/* Sequence Progress Tracker */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-mono">
          <div className={`p-2.5 rounded-lg border flex items-center space-x-2 ${
            isAActive || isBActive || isBothCleared ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}>
            <span className="font-bold">1.</span>
            <span>AMB-104 PRIORITY 01</span>
            {isAActive && <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />}
          </div>

          <div className={`p-2.5 rounded-lg border flex items-center space-x-2 ${
            isBActive || isBothCleared ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}>
            <span className="font-bold">2.</span>
            <span>AMB-208 PRIORITY 02</span>
            {isBActive && <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />}
          </div>

          <div className={`p-2.5 rounded-lg border flex items-center space-x-2 ${
            isBothCleared ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'
          }`}>
            <span className="font-bold">3.</span>
            <span>CONFLICT RESOLVED</span>
            {isBothCleared && <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />}
          </div>
        </div>
      </div>

      {/* Disclaimers & Regulatory Positioning */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center space-x-1.5">
          <Icons.Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>Traffic coordination priority • Emergency severity provided by authorized emergency personnel.</span>
        </div>
        <div className="flex items-center space-x-1.5 text-slate-400">
          <Icons.AlertTriangle className="w-3.5 h-3.5 text-amber-500/80" />
          <span>Simulation decision — not connected to real traffic infrastructure.</span>
        </div>
      </div>
    </div>
  );
}

window.ConflictEnginePanel = ConflictEnginePanel;

/* ===== END FILE: ConflictEngineModal.js ===== */

/* ===== START FILE: RightStatusPanel.js ===== */
// resQClear Right-Side Live Status & Emergency Event Stream Panel
// [React hooks initialized at top level]

function RightStatusPanel({ simState, onApplyRoute }) {
  const { events = [], liveMetrics = {}, ambulances = [], aiInsight = {} } = simState || {};

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
      {/* AI Traffic Insight Card */}
      <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wide">AI TRAFFIC INSIGHT</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            SIMULATION ESTIMATE
          </span>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-1 font-sans">
          <p className="font-semibold text-white">
            High traffic density detected on Anna Salai North Link.
          </p>
          <p className="text-amber-400 font-mono text-[11px]">
            Predicted delay: +2.4 min
          </p>
          <p className="text-slate-400 text-[11px]">
            Alternative route may reduce simulated delay.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            ESTIMATED SAVINGS: 2 min 18 sec
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
                <span>Route Applied</span>
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

      {/* Live Emergency Events Stream */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex-1 flex flex-col min-h-[320px]">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <h3 className="font-bold text-sm text-white">Emergency Events</h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">OPERATIONS LOG</span>
        </div>

        <div className="space-y-2.5 overflow-y-auto flex-1 max-h-[380px] pr-1">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start space-x-2.5 text-xs"
            >
              <div className="mt-0.5">{getEventIcon(evt.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-[10px] text-slate-400">{evt.time}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono border ${getEventBadge(evt.type)}`}>
                    {evt.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-slate-200 text-xs leading-snug">{evt.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corridor Telemetry Snapshot */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">CORRIDOR CLEARANCE SPEED</span>
          <span className="text-emerald-400 font-bold">{liveMetrics.avgSpeed || 44.2} km/h</span>
        </div>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, (liveMetrics.avgSpeed / 60) * 100)}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
          <div>
            <span className="text-slate-400 block text-[10px]">EST. DELAY AVOIDED:</span>
            <strong className="text-white text-xs">2m 18s (Simulated)</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">SIGNALS SYNCED:</span>
            <strong className="text-emerald-400 text-xs">4 Intersections</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

window.RightStatusPanel = RightStatusPanel;

/* ===== END FILE: RightStatusPanel.js ===== */

/* ===== START FILE: AmbulanceFleetView.js ===== */
// resQClear Ambulance Fleet Management Cards View
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
            <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
              SIMULATION DATA
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
              className={`glass-panel rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'border-emerald-500 shadow-xl shadow-emerald-950/40 bg-slate-900/90'
                  : 'border-slate-800 hover:border-slate-700 bg-slate-950/80'
              }`}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCritical ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}>
                    <Icons.Ambulance className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-white">{amb.id}</h3>
                    <p className="text-xs text-slate-400 font-mono">{amb.name} • {amb.vehicleModel}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                    isCritical ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}>
                    {amb.status}
                  </span>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">PRIORITY 0{amb.priorityRank}</div>
                </div>
              </div>

              {/* Vital Telemetry Stats */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">CURRENT SPEED:</span>
                  <span className="text-emerald-400 font-bold text-sm">{amb.speed} {amb.speedUnit}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">HOSPITAL ETA:</span>
                  <span className="text-white font-bold text-sm">{amb.eta} min</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">DISTANCE REMAINING:</span>
                  <span className="text-slate-200 font-medium">{amb.distance}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">INTERSECTION ETA:</span>
                  <span className="text-cyan-400 font-bold">{amb.currentIntersectionEta || 43} sec</span>
                </div>
              </div>

              {/* Transit Details */}
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
                  <span className="text-teal-300 font-medium">{amb.routeStatus}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Driver / Paramedic:</span>
                  <span className="text-slate-200">{amb.driver}</span>
                </div>
              </div>

              {/* Patient Condition Details */}
              {amb.patient && (
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 font-mono text-[10px]">AUTHORIZED TRIAGE:</span>
                    <span className="text-red-400 font-mono font-bold text-[10px]">{amb.patient.age}</span>
                  </div>
                  <div className="font-semibold text-white mb-2">{amb.patient.condition}</div>
                  
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-900 pt-1.5">
                    <span>HR: <strong className="text-white">{amb.patient.vitals.hr}</strong> bpm</span>
                    <span>BP: <strong className="text-white">{amb.patient.vitals.bp}</strong></span>
                    <span>SpO2: <strong className="text-emerald-400">{amb.patient.vitals.spo2}%</strong></span>
                  </div>
                </div>
              )}

              {/* Action Button */}
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
// resQClear Hospital Receiving & Trauma Readiness Dashboard
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
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
              SIMULATION
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Hospital notification simulated • Telemetry synchronized for ER bay preparation
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

                {/* Status Badge */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-5 text-xs font-mono">
                  <span className="text-slate-400">TRAUMA BAY STATUS:</span>
                  <span className={`px-2.5 py-1 rounded font-bold border ${
                    isReady ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    {hosp.erStatus === 'READY' ? 'READY (TEAM NOTIFIED)' : 'STANDBY'}
                  </span>
                </div>

                {/* Incoming Ambulance Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/25 mb-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">INCOMING TRANSPORT:</span>
                    <span className="text-emerald-400 font-bold">{hosp.assignedAmbulance}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">ESTIMATED ARRIVAL (ETA)</div>
                      <div className="text-2xl font-extrabold text-white font-mono">{incomingAmb.eta || hosp.eta} <span className="text-xs font-normal text-slate-400">min</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">EMERGENCY STATUS</div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                        {incomingAmb.status || 'CRITICAL'}
                      </span>
                    </div>
                  </div>

                  {incomingAmb.patient && (
                    <div className="text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                      <strong>Triage:</strong> {incomingAmb.patient.condition} ({incomingAmb.patient.age})
                    </div>
                  )}
                </div>

                {/* Preparation Checklist */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-mono font-bold text-slate-300 uppercase">Hospital Preparation Protocol:</div>
                  {hosp.readiness.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Doctor & Bed Capacity & Note */}
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
                <div className="text-[10px] text-slate-400 text-center pt-1 border-t border-slate-900">
                  {hosp.integrationNote || 'Hospital notification simulated'}
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
              SIMULATION DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            All analytics shown are simulated demonstration data.
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

      {/* 6 Key Simulated Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Simulated Travel Time</div>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">06:14 min</div>
          <div className="text-[9px] text-slate-400 mt-0.5">Avg per critical route</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Estimated Delay Avoided</div>
          <div className="text-xl font-extrabold text-teal-300 mt-1">2m 18s</div>
          <div className="text-[9px] text-slate-400 mt-0.5">Peak bottleneck savings</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Intersection Wait Time</div>
          <div className="text-xl font-extrabold text-cyan-400 mt-1">4.2 sec</div>
          <div className="text-[9px] text-slate-400 mt-0.5">Reduced from 48s base</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Route Efficiency</div>
          <div className="text-xl font-extrabold text-purple-400 mt-1">+33.8%</div>
          <div className="text-[9px] text-slate-400 mt-0.5">Corridor flow boost</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Corridor Activations</div>
          <div className="text-xl font-extrabold text-emerald-400 mt-1">14 Nodes</div>
          <div className="text-[9px] text-slate-400 mt-0.5">Dynamic phase overrides</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Conflict Events</div>
          <div className="text-xl font-extrabold text-amber-400 mt-1">12 Events</div>
          <div className="text-[9px] text-slate-400 mt-0.5">Zero cross-axis deadlock</div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Travel Time Comparison SVG Chart */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Simulated Ambulance Transit Time (Minutes)</h3>
              <p className="text-xs text-slate-400 font-mono">Hourly response comparison: Traditional siren vs resQClear AI corridor</p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="text-slate-300">Traditional Siren Base</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">resQClear AI Corridor</span>
              </div>
            </div>
          </div>

          {/* SVG Bar / Area Chart */}
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
            <span>Rush Hour Savings: <strong>11.3 min avoided during 18:00 peak</strong></span>
            <span className="text-emerald-400 font-bold">Average Corridor Improvement: +33.8%</span>
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

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center">
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
// [React hooks initialized at top level]

function TrafficNetworkView({ simState }) {
  const { intersections = [], conflictState = {} } = simState || {};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-extrabold text-white">Smart Traffic Signal Network (Simulated)</h2>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
              SIMULATION
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
            V2X SIMULATION SYNC
          </span>
        </div>
      </div>

      {/* Intersections Grid */}
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
                    <p className="text-xs text-slate-400 font-mono">{inter.code || inter.id.toUpperCase()} • Simulation Coordinates: ({inter.x}, {inter.y})</p>
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
                  <span className="text-slate-400">Cycle Mode:</span>
                  <span className="text-teal-300 font-medium">{inter.modeLabel || 'NORMAL CYCLE'}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SIMULATION INTEGRATION: <strong className="text-emerald-400">OK</strong></span>
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
// [React hooks initialized at top level]

function DemoControls({ simState, onRunScenario, onStart, onPause, onReset, onTriggerA, onTriggerB, onTriggerBoth, onCreateJam, onClearJam, onSetSpeed, onToggleSound, soundEnabled }) {
  const { isRunning, speedMultiplier, scenarioRunning, scenarioStep } = simState || {};

  return (
    <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl flex flex-wrap items-center justify-between gap-3">
      {/* Left Group: HERO BUTTON (Run Emergency Scenario) */}
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
            <span className="text-emerald-400 font-bold">{scenarioStep || 1} / 12</span>
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
// resQClear Startup Pitch Presentation Mode Component
// [React hooks initialized at top level]

function PresentationMode({ simState, onExit, onRunScenario }) {
  const { conflictState = {}, liveMetrics = {} } = simState || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const narrativeSteps = [
    {
      id: 1,
      tag: 'STEP 01',
      title: 'EMERGENCY DETECTED',
      desc: 'High-priority cardiac alert dispatched from Anna Nagar. resQClear vehicle telemetry immediately acquires emergency unit location.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 2,
      tag: 'STEP 02',
      title: 'TRAFFIC CONGESTION PREDICTED',
      desc: 'Predictive neural model detects severe bottleneck (+2.4 min delay) along primary arterial corridor.',
      icon: Icons.Activity,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 3,
      tag: 'STEP 03',
      title: 'MULTIPLE EMERGENCY VEHICLES DETECTED',
      desc: 'Secondary critical ALS unit dispatched simultaneously from T. Nagar heading toward Apollo Hospital.',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    },
    {
      id: 4,
      tag: 'STEP 04',
      title: 'CONFLICT INTERSECTION IDENTIFIED',
      desc: 'Convergence analysis identifies impending simultaneous arrival at Intersection 4 (Central Conflict Junction).',
      icon: Icons.Crosshair,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    },
    {
      id: 5,
      tag: 'STEP 05',
      title: 'AI-ASSISTED CONFLICT RESOLUTION',
      desc: 'Transparent scoring model evaluates ETA (43s vs 50s), distance, and turning movements to formulate sequential priority.',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    },
    {
      id: 6,
      tag: 'STEP 06',
      title: 'AMB-104 — PRIORITY 01',
      desc: 'Simulated emergency corridor locked on North-South axis. Traffic signal turns green for AMB-104.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 7,
      tag: 'STEP 07',
      title: 'INTERSECTION CLEARED',
      desc: 'AMB-104 safely clears intersection without deceleration. System immediately initiates phase transfer.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 8,
      tag: 'STEP 08',
      title: 'AMB-208 — PRIORITY 02',
      desc: 'South corridor emergency green wave activated for AMB-208. Secondary clearance proceeds smoothly.',
      icon: Icons.TrafficLight,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    },
    {
      id: 9,
      tag: 'STEP 09',
      title: 'INTERSECTION CLEARED',
      desc: 'AMB-208 clears intersection safely without coming to a complete stop.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    },
    {
      id: 10,
      tag: 'STEP 10',
      title: 'EMERGENCY ROUTES COORDINATED',
      desc: 'Both emergency routes coordinated successfully. Traffic signal returns to normal municipal cycle.',
      icon: Icons.ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }
  ];

  // Map simulation state to active narrative slide
  useEffect(() => {
    if (conflictState.stage === 'DETECTED') setCurrentSlide(2);
    else if (conflictState.stage === 'RESOLVING') setCurrentSlide(4);
    else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(5);
    else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(6);
    else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(7);
    else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(9);
  }, [conflictState.stage]);

  const activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];
  const isFinalSlide = currentSlide === narrativeSteps.length - 1;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <ResQClearLogo />
          <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold">
            PRESENTATION MODE • INVESTOR / HACKATHON DEMO
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
            <span>Re-Run Live Scenario</span>
          </button>

          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-all"
          >
            Exit Presentation Mode
          </button>
        </div>
      </div>

      {/* Main Presentation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        {/* Left Side: Live Simulation Map View */}
        <div className="lg:col-span-7 h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
          <LiveMap simState={simState} />
        </div>

        {/* Right Side: High-Impact Narrative Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Top Indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${activeStep.border} ${activeStep.color} bg-slate-950`}>
                {activeStep.tag} • STEP {currentSlide + 1} OF 10
              </span>
              <span className="text-xs font-mono text-slate-400">SIMULATION DEMO</span>
            </div>

            <div className="flex items-start space-x-4 my-4">
              <div className={`p-3.5 rounded-2xl bg-slate-950 border ${activeStep.border} ${activeStep.color}`}>
                <activeStep.icon className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {activeStep.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>
            </div>

            {/* Step Navigation Dots */}
            <div className="flex items-center space-x-1.5 pt-6 border-t border-slate-800/80 overflow-x-auto pb-1">
              {narrativeSteps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  title={s.title}
                />
              ))}
            </div>
          </div>

          {/* Impact Summary Metrics / Final Slide Summary */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
              SIMULATED DEMO IMPACT
            </div>

            <div className="grid grid-cols-3 gap-3 font-mono">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-emerald-400">2</div>
                <div className="text-[10px] text-slate-400 leading-tight">Ambulances Coordinated</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-teal-300">1</div>
                <div className="text-[10px] text-slate-400 leading-tight">Conflict Node Resolved</div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-cyan-400">2m 18s</div>
                <div className="text-[10px] text-slate-400 leading-tight">Est. Delay Avoided</div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-400 text-center pt-1">
              resQClear: “Clear the way. Save lives.” • Simulation Prototype
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-white font-bold transition-all"
        >
          ← Previous Step
        </button>

        <span className="hidden sm:inline">Use controls or run scenario to observe dynamic progression</span>

        <button
          onClick={() => setCurrentSlide(Math.min(narrativeSteps.length - 1, currentSlide + 1))}
          disabled={currentSlide === narrativeSteps.length - 1}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-all"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}

window.PresentationMode = PresentationMode;

/* ===== END FILE: PresentationMode.js ===== */

/* ===== START FILE: TopNav.js ===== */
// resQClear Operations Center Top Navigation Bar
// [React hooks initialized at top level]

function TopNav({ simState, onLaunchScenario, onTogglePresentation, onToggleSound, soundEnabled, onOpenLanding }) {
  const [timeStr, setTimeStr] = useState('');
  const { conflictState = {}, scenarioRunning = false } = simState || {};

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const getSystemStatus = () => {
    if (conflictState.stage === 'DETECTED' || conflictState.stage === 'RESOLVING') {
      return { text: 'AI CONFLICT ARBITRATION ACTIVE', color: 'text-red-400', bg: 'bg-red-500/15', border: 'border-red-500/40', dot: 'bg-red-500 animate-ping' };
    }
    if (conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'PRIORITY_B') {
      return { text: 'SIMULATED EMERGENCY CORRIDOR ENGAGED', color: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40', dot: 'bg-emerald-400 animate-pulse' };
    }
    return { text: 'GRID NORMAL • 6 SIGNALS ONLINE', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-400' };
  };

  const status = getSystemStatus();

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0">
      {/* Left: Logo & Persistent SIMULATION MODE Badge */}
      <div className="flex items-center space-x-4">
        <div onClick={onOpenLanding} className="cursor-pointer" title="Go to Landing Page">
          <ResQClearLogo size="default" />
        </div>

        <div className="hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white font-bold">SIMULATION MODE</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">CHENNAI METRO GRID</span>
        </div>
      </div>

      {/* Middle: Live System Status Pill */}
      <div className="hidden md:flex items-center space-x-3">
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${status.bg} ${status.border} ${status.color}`}>
          <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>
          <span>{status.text}</span>
        </div>
      </div>

      {/* Right: Clock, Presentation Mode, Audio, User Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Live Clock */}
        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
          <span className="text-slate-400">IST</span>
          <span className="text-emerald-400 font-bold">{timeStr || '18:42:00'}</span>
        </div>

        {/* Hero Scenario Trigger */}
        <button
          onClick={onLaunchScenario}
          className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-500/20 to-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-mono font-bold transition-all"
          title="Run Dual Ambulance Conflict Scenario"
        >
          <Icons.Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>Scenario Demo</span>
        </button>

        {/* Presentation Mode Toggle */}
        <button
          onClick={onTogglePresentation}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 text-xs font-mono font-bold transition-all"
          title="Startup Presentation Pitch Mode"
        >
          <Icons.Presentation className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden md:inline">Pitch Mode</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-xl border transition-all ${
            soundEnabled
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-slate-900 text-slate-500 border-slate-800'
          }`}
          title={soundEnabled ? 'Radio Audio On' : 'Radio Audio Muted'}
        >
          {soundEnabled ? <Icons.Volume2 className="w-4 h-4" /> : <Icons.VolumeX className="w-4 h-4" />}
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2.5 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-xs shadow-inner">
            SR
          </div>
          <div className="hidden xl:block text-left text-xs font-mono">
            <div className="text-white font-bold leading-tight">Cmdr. S. Ramanathan</div>
            <div className="text-[10px] text-slate-400">Emergency Ops Lead</div>
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
// [React hooks initialized at top level]

function Sidebar({ currentTab, setTab, simState, onTogglePresentation, onOpenLanding }) {
  const { ambulances = [], conflictState = {} } = simState || {};
  const hasConflict = conflictState.stage && conflictState.stage !== 'IDLE';

  const navItems = [
    { id: 'overview', label: 'Overview & Map', icon: Icons.Compass, badge: 'LIVE' },
    { id: 'conflict', label: 'Conflict Engine', icon: Icons.ShieldAlert, badge: hasConflict ? 'ALERT' : null, alert: hasConflict },
    { id: 'ambulances', label: 'Ambulances', icon: Icons.Ambulance, badge: ambulances.length },
    { id: 'network', label: 'Traffic Network', icon: Icons.TrafficLight, badge: '6' },
    { id: 'hospitals', label: 'Hospitals', icon: Icons.Hospital, badge: '3' },
    { id: 'analytics', label: 'Analytics', icon: Icons.BarChart3 },
    { id: 'settings', label: 'Settings', icon: Icons.Settings }
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950/80 backdrop-blur-md flex flex-col justify-between p-4 flex-shrink-0">
      {/* Top Nav Items */}
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

        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-400 leading-tight text-center">
          resQClear Prototype v1.2 • AI-V2X Sim
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;

/* ===== END FILE: Sidebar.js ===== */

/* ===== START FILE: LandingPage.js ===== */
// resQClear Landing Page Component
// [React hooks initialized at top level]

function LandingPage({ onLaunchDemo, onLaunchScenario }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ResQClearLogo />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold">
              SIMULATION MODE
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono font-medium text-slate-300">
            <button onClick={() => scrollToSection('problem')} className="hover:text-emerald-400 transition-colors">Problem</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-emerald-400 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('conflict-demo')} className="hover:text-emerald-400 transition-colors">Conflict Resolution</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-emerald-400 transition-colors">Roadmap</button>
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              <span>Launch Live Demo</span>
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
              An AI-assisted emergency traffic coordination platform designed to coordinate ambulance movement through congested urban intersections and formulate dynamic corridor priority.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onLaunchDemo()}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold font-mono text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02]"
              >
                <Icons.Play className="w-4 h-4 text-slate-950" />
                <span>Launch Live Demo</span>
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-medium font-mono text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
              >
                <span>See How It Works</span>
              </button>
            </div>

            <div className="mt-6 text-xs font-mono text-slate-400 flex items-center justify-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Simulation Prototype • Zero Paid API Keys Required • Visual Signal Simulation</span>
            </div>
          </div>

          {/* Interactive Hero Scenario Visual Preview Box */}
          <div className="mt-14 relative rounded-2xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-emerald-950/50">
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
                  <span>UNITS DETECTED: <strong className="text-white">2 ALS</strong></span>
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
                    <span className="text-slate-300">SCENARIO: DUAL AMBULANCE CONVERGENCE</span>
                    <span className="text-red-400 font-bold animate-pulse">HIGH CONFLICT RISK</span>
                  </div>

                  <div className="relative flex items-center justify-center py-4">
                    <div className="text-center space-y-2 font-mono">
                      <div className="text-xs text-red-400 font-bold flex items-center justify-center space-x-1">
                        <span>🚑 AMB-104 (North)</span>
                        <span className="text-slate-500">↓ (43s ETA)</span>
                      </div>
                      <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs shadow-lg">
                        🚦 INTERSECTION 4 • AI ARBITRATION (A → B)
                      </div>
                      <div className="text-xs text-amber-400 font-bold flex items-center justify-center space-x-1">
                        <span>🚑 AMB-208 (South)</span>
                        <span className="text-slate-500">↑ (50s ETA)</span>
                      </div>
                    </div>
                  </div>

                  <div className="z-10 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 p-2 rounded-lg border border-slate-800 text-slate-400">
                    <span>ARBITRATION: <strong className="text-emerald-400">AMB-104 Priority 01</strong></span>
                    <span>CONFIDENCE: <strong className="text-white">96% (Simulation Estimate)</strong></span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Decision Model</div>
                    <div className="text-white font-bold mt-1">Sequential Corridor Priority</div>
                    <p className="text-slate-400 text-[11px] mt-1 font-sans">
                      AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict without manual police intervention.
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

      {/* Requirement 13: "From Detection to Coordination" (Why resQClear?) */}
      <section id="how-it-works" className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              HOW RESQCLEAR WORKS
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              From Detection to Coordination
            </h3>
            <p className="text-sm text-slate-400 mt-2 font-sans">
              A streamlined 5-stage coordination lifecycle explaining the platform in 20 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
            {RESQCLEAR_DATA.howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      {step.step}
                    </span>
                    <span className="text-[10px] text-slate-500">STAGE 0{step.step}</span>
                  </div>
                  <h4 className="font-extrabold text-white text-sm tracking-wide mb-2 group-hover:text-emerald-400 transition-colors">
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

      {/* Problem & Solution Section */}
      <section id="problem" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* The Problem */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-red-400 text-xs font-mono font-bold uppercase mb-3">
                  <Icons.AlertTriangle className="w-4 h-4" />
                  <span>The Urban Emergency Problem</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-snug">
                  Ambulances lose critical minutes at congested intersections and cross-axis bottlenecks.
                </h3>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed font-sans">
                  Traditional sirens rely solely on civilian yielding and line-of-sight visual reaction. In high-density urban grids, blocked intersections, red-light queues, and simultaneous multi-ambulance dispatches create severe bottlenecks when seconds matter most.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                Simulated Average Urban Transit Delay: <strong className="text-red-400">+8.5 to 14.2 min during peak hours</strong>
              </div>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-3">
                  <Icons.ShieldCheck className="w-4 h-4" />
                  <span>The resQClear Solution</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-snug">
                  AI-assisted route coordination and simulated green-wave emergency corridor sequencing.
                </h3>
                <ul className="mt-4 space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center space-x-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Real-time connected ambulance tracking & ETA forecasting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Multi-ambulance intersection collision & priority arbitration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Dynamic signal phase management (Simulated green waves)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct hospital ER telemetry & trauma bay pre-notification</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400">
                Estimated Delay Avoided: <strong>2m 18s per critical corridor trip (Simulation Estimate)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirement 18: Future Roadmap Section */}
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
              Our phased approach ensures safety, regulatory alignment, and empirical validation before real-world infrastructure interfacing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
            {RESQCLEAR_DATA.productRoadmap.map((p, idx) => (
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
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">SIMULATION</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">4</div>
              <div className="text-[11px] text-slate-300 mt-1">Intersections Coordinated</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">SIMULATION</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">2</div>
              <div className="text-[11px] text-slate-300 mt-1">Ambulances Coordinated</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">SIMULATION</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">2m 18s</div>
              <div className="text-[11px] text-slate-300 mt-1">Est. Delay Avoided</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400">SIMULATION ESTIMATE</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">96%</div>
              <div className="text-[11px] text-slate-300 mt-1">Decision Confidence</div>
              <span className="inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">SIMULATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Disclaimer Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <ResQClearLogo size="small" />
            <span>• “Clear the way. Save lives.”</span>
          </div>

          <div className="max-w-xl text-[11px] text-slate-400 leading-normal">
            resQClear is a simulation prototype. Traffic-signal actions shown in this demo are not connected to real-world traffic infrastructure.
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

/* ===== END FILE: app.js ===== */

})();
