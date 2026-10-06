// resQClear City Map, Fleet, Hospital, and Network Data

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
      readiness: [
        { item: 'Cath Lab 02 Pre-warmed', done: true },
        { item: 'Cardiology Triage Team Alerted', done: true },
        { item: 'Rapid ER Bay 1 Reserved', done: true },
        { item: 'Direct Telemetry Connected', done: true }
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
      patient: {
        condition: 'Acute STEMI (Heart Attack)',
        age: '54 M',
        vitals: { hr: 122, bp: '160/95', spo2: 94, rhythm: 'ST-Elevation' },
        priorityScore: 94
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
        [13.0850, 80.2100], // Anna Nagar West
        [13.0820, 80.2250], // Roundabout
        [13.0780, 80.2420], // Kilpauk Medical
        [13.0750, 80.2580], // Central Conflict Junction
        [13.0790, 80.2680], // Poonamallee Arterial
        [13.0827, 80.2785]  // Government Hospital
      ],
      progress: 0.05,
      currentIntersectionEta: 12, // seconds
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
      patient: {
        condition: 'Severe Polytrauma (MVA Collision)',
        age: '29 F',
        vitals: { hr: 135, bp: '90/60', spo2: 91, rhythm: 'Sinus Tachycardia' },
        priorityScore: 92
      },
      color: '#ef4444',
      trailColor: 'rgba(239, 68, 68, 0.4)',
      corridorColor: '#10b981',
      // Simulation Path heading towards same Central Junction from South
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
        [13.0418, 80.2341], // T. Nagar Panagal Park
        [13.0500, 80.2420], // Usman Road Flyover
        [13.0620, 80.2500], // Anna Salai South
        [13.0750, 80.2580], // Central Conflict Junction
        [13.0680, 80.2550], // Thousand Lights Arterial
        [13.0604, 80.2520]  // Apollo Emergency Center
      ],
      progress: 0.04,
      currentIntersectionEta: 19, // seconds
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
      patient: {
        condition: 'Acute Respiratory Distress',
        age: '68 M',
        vitals: { hr: 98, bp: '135/85', spo2: 88, rhythm: 'Regular' },
        priorityScore: 78
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
        [13.0067, 80.2025], // Guindy
        [13.0200, 80.2200], // Mount Road Sector
        [13.0338, 80.2505]  // Kauvery Hub
      ],
      progress: 0.35,
      currentIntersectionEta: 45,
      distanceToConflict: 720,
      priorityRank: 3
    }
  ],

  intersections: [
    {
      id: 'int-1',
      name: 'Anna Nagar Roundabout (Int. 1)',
      x: 280,
      y: 160,
      state: 'GREEN', // RED, YELLOW, GREEN, PRIORITY
      timer: 18,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0
    },
    {
      id: 'int-2',
      name: 'Kilpauk Medical Signal (Int. 2)',
      x: 450,
      y: 160,
      state: 'GREEN',
      timer: 14,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0
    },
    {
      id: 'int-3',
      name: 'T. Nagar Usman Road Cross (Int. 3)',
      x: 280,
      y: 540,
      state: 'GREEN',
      timer: 22,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      cooldown: 0
    },
    {
      id: 'int-4',
      name: 'Central Conflict Junction (Int. 4)',
      x: 450,
      y: 350,
      state: 'NORMAL_CYCLE', // NORMAL_CYCLE, EMERGENCY_REQUESTED, PRIORITY_A, PRIORITY_B, ALL_CLEAR
      timer: 8,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      subState: 'NORMAL',
      hasConflict: false,
      conflictDetails: null,
      cooldown: 0
    },
    {
      id: 'int-5',
      name: 'Poonamallee Arterial Crossing (Int. 5)',
      x: 620,
      y: 350,
      state: 'GREEN',
      timer: 20,
      northSouth: 'RED',
      eastWest: 'GREEN',
      priorityVehicle: null,
      cooldown: 0
    },
    {
      id: 'int-6',
      name: 'Govt Hospital North Gate (Int. 6)',
      x: 780,
      y: 350,
      state: 'GREEN',
      timer: 15,
      northSouth: 'GREEN',
      eastWest: 'RED',
      priorityVehicle: null,
      cooldown: 0
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
    travelDelayReduction: '-32%',
    simulatedTimeSaved: '2.8 min',
    intersectionsCoordinated: 14,
    routeConfidence: '98.4%',
    carbonReduction: '-18.2%',
    averageResponseTime: '06:14 min',
    totalSimulatedTrips: 1248,
    zeroCollisionSafetyRecord: '100%'
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
window.AMBUCLEAR_DATA = RESQCLEAR_DATA; // backward compatibility alias
