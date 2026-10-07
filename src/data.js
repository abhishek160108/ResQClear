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
