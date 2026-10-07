"use strict";

var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"],
  _excluded9 = ["className"],
  _excluded10 = ["className"],
  _excluded11 = ["className"],
  _excluded12 = ["className"],
  _excluded13 = ["className"],
  _excluded14 = ["className"],
  _excluded15 = ["className"],
  _excluded16 = ["className"],
  _excluded17 = ["className"],
  _excluded18 = ["className"],
  _excluded19 = ["className"],
  _excluded20 = ["className"],
  _excluded21 = ["className"],
  _excluded22 = ["className"],
  _excluded23 = ["className"],
  _excluded24 = ["className"],
  _excluded25 = ["className"],
  _excluded26 = ["className"],
  _excluded27 = ["className"],
  _excluded28 = ["className"],
  _excluded29 = ["className"],
  _excluded30 = ["className"],
  _excluded31 = ["className"],
  _excluded32 = ["className"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// resQClear Master Bundle
(function () {
  'use strict';

  var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect,
    useRef = _React.useRef,
    useMemo = _React.useMemo,
    useCallback = _React.useCallback;

  /* ===== START FILE: sound.js ===== */
  // AmbuClear Procedural Sound FX Engine (Web Audio API)
  // Provides realistic emergency dispatch radio chimes, conflict alert pulses, and priority clear confirmation sounds
  var SoundEngine = /*#__PURE__*/function () {
    function SoundEngine() {
      _classCallCheck(this, SoundEngine);
      this.audioCtx = null;
      this.enabled = true;
    }
    _createClass(SoundEngine, [{
      key: "init",
      value: function init() {
        if (!this.audioCtx && typeof window !== 'undefined') {
          var AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            this.audioCtx = new AudioContext();
          }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
      }

      // Subtle radio squelch / notification beep
    }, {
      key: "playBeep",
      value: function playBeep() {
        var freq = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 880;
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.08;
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sine';
        if (!this.enabled) return;
        try {
          this.init();
          if (!this.audioCtx) return;
          var osc = this.audioCtx.createOscillator();
          var gain = this.audioCtx.createGain();
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
    }, {
      key: "playConflictAlert",
      value: function playConflictAlert() {
        if (!this.enabled) return;
        try {
          this.init();
          if (!this.audioCtx) return;
          var now = this.audioCtx.currentTime;
          var osc1 = this.audioCtx.createOscillator();
          var osc2 = this.audioCtx.createOscillator();
          var gain = this.audioCtx.createGain();
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
    }, {
      key: "playPriorityChime",
      value: function playPriorityChime() {
        var _this = this;
        if (!this.enabled) return;
        try {
          this.init();
          if (!this.audioCtx) return;
          var now = this.audioCtx.currentTime;
          [523.25, 659.25, 783.99, 1046.50].forEach(function (freq, i) {
            var osc = _this.audioCtx.createOscillator();
            var gain = _this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.06);
            gain.gain.setValueAtTime(0.04, now + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.3);
            osc.connect(gain);
            gain.connect(_this.audioCtx.destination);
            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.35);
          });
        } catch (e) {}
      }

      // Intersection Cleared Sound
    }, {
      key: "playClearChime",
      value: function playClearChime() {
        var _this2 = this;
        if (!this.enabled) return;
        try {
          this.init();
          if (!this.audioCtx) return;
          var now = this.audioCtx.currentTime;
          [880, 1174.66].forEach(function (freq, i) {
            var osc = _this2.audioCtx.createOscillator();
            var gain = _this2.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.08);
            gain.gain.setValueAtTime(0.05, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.25);
            osc.connect(gain);
            gain.connect(_this2.audioCtx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.28);
          });
        } catch (e) {}
      }

      // Siren pulse blip
    }, {
      key: "playSirenBlip",
      value: function playSirenBlip() {
        if (!this.enabled) return;
        try {
          this.init();
          if (!this.audioCtx) return;
          var now = this.audioCtx.currentTime;
          var osc = this.audioCtx.createOscillator();
          var gain = this.audioCtx.createGain();
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
    }]);
    return SoundEngine;
  }();
  window.soundEngine = new SoundEngine();

  /* ===== END FILE: sound.js ===== */

  /* ===== START FILE: data.js ===== */
  // resQClear City Map, Fleet, Hospital, and Network Simulation Data
  // Enterprise Operations Center & Digital Twin Prototype

  var RESQCLEAR_DATA = {
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
    hospitals: [{
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
      readiness: [{
        item: 'Cath Lab 02 Pre-warmed & Staffed',
        done: true
      }, {
        item: 'Cardiology Triage Team Alerted',
        done: true
      }, {
        item: 'Rapid ER Bay 1 Reserved',
        done: true
      }, {
        item: 'Direct Telemetry Feed Initialized (Simulated)',
        done: true
      }]
    }, {
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
      readiness: [{
        item: 'Surgical Suite 04 Prepped',
        done: true
      }, {
        item: 'Blood Bank Cross-match 4 Units O- on Standby',
        done: true
      }, {
        item: 'CT Neuro-Scan on Priority Standby',
        done: true
      }, {
        item: 'Code Red Resuscitation Team Stationed',
        done: true
      }]
    }, {
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
      readiness: [{
        item: 'ER Bay 03 Ready',
        done: true
      }, {
        item: 'Triage Nurse Assigned',
        done: true
      }]
    }],
    initialAmbulances: [{
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
        vitals: {
          hr: 122,
          bp: '160/95',
          spo2: 94,
          rhythm: 'ST-Elevation'
        },
        severityNote: 'Critical Emergency Dispatched'
      },
      color: '#ef4444',
      trailColor: 'rgba(239, 68, 68, 0.4)',
      corridorColor: '#10b981',
      path: [{
        x: 120,
        y: 160,
        name: 'Anna Nagar West Terminal'
      }, {
        x: 280,
        y: 160,
        name: 'INT-01: Anna Nagar Roundabout'
      }, {
        x: 450,
        y: 160,
        name: 'INT-02: Kilpauk Medical Signal'
      }, {
        x: 450,
        y: 350,
        name: 'INT-04: Central Conflict Junction'
      }, {
        x: 620,
        y: 350,
        name: 'INT-05: Poonamallee Arterial'
      }, {
        x: 780,
        y: 350,
        name: 'INT-06: Hospital Access Boulevard'
      }, {
        x: 780,
        y: 160,
        name: 'Government Hospital ER Bay'
      }],
      progress: 0.12,
      currentIntersectionEta: 43,
      distanceToConflict: 555,
      priorityRank: 1,
      approachDirection: 'North Approach (Sector 1)'
    }, {
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
        vitals: {
          hr: 135,
          bp: '90/60',
          spo2: 91,
          rhythm: 'Sinus Tachycardia'
        },
        severityNote: 'Critical Emergency Dispatched'
      },
      color: '#ef4444',
      trailColor: 'rgba(239, 68, 68, 0.4)',
      corridorColor: '#10b981',
      path: [{
        x: 120,
        y: 540,
        name: 'T. Nagar Panagal Park'
      }, {
        x: 280,
        y: 540,
        name: 'INT-03: Usman Road Flyover Base'
      }, {
        x: 450,
        y: 540,
        name: 'Anna Salai South Link'
      }, {
        x: 450,
        y: 350,
        name: 'INT-04: Central Conflict Junction'
      }, {
        x: 620,
        y: 350,
        name: 'INT-05: Poonamallee Arterial'
      }, {
        x: 780,
        y: 350,
        name: 'INT-06: Hospital Access Boulevard'
      }, {
        x: 780,
        y: 540,
        name: 'Apollo Emergency Bay'
      }],
      progress: 0.10,
      currentIntersectionEta: 50,
      distanceToConflict: 555,
      priorityRank: 2,
      approachDirection: 'South Approach (Sector 2)'
    }, {
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
        vitals: {
          hr: 98,
          bp: '135/85',
          spo2: 88,
          rhythm: 'Regular'
        },
        severityNote: 'Urgent Transit Protocol'
      },
      color: '#f59e0b',
      trailColor: 'rgba(245, 158, 11, 0.3)',
      corridorColor: '#10b981',
      path: [{
        x: 120,
        y: 350,
        name: 'Guindy Base'
      }, {
        x: 280,
        y: 350,
        name: 'Mount Road Sector'
      }, {
        x: 280,
        y: 540,
        name: 'INT-03: Usman Road Flyover Base'
      }, {
        x: 180,
        y: 560,
        name: 'Kauvery Hub ER Bay'
      }],
      progress: 0.35,
      currentIntersectionEta: 75,
      distanceToConflict: 720,
      priorityRank: 3,
      approachDirection: 'Southwest Link'
    }],
    intersections: [{
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }],
    congestionZones: [{
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
    }, {
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
    }, {
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
    }, {
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
    }],
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
      factorsList: [{
        label: 'ETA to Junction',
        val: 'AMB-104: 43s | AMB-208: 50s (7s difference)'
      }, {
        label: 'Distance',
        val: '555m vs 555m (Equal convergence distance)'
      }, {
        label: 'Approach Direction',
        val: 'Opposing perpendicular vectors on INT-04'
      }, {
        label: 'Intersection Occupancy',
        val: 'Single vehicle capacity per clearance window'
      }, {
        label: 'Traffic Density',
        val: 'Anna Salai link: High (+2.4 min density)'
      }, {
        label: 'Route Conflict Probability',
        val: 'HIGH (Simultaneous intersection demand)'
      }],
      recommendedSequence: [{
        rank: '01',
        vehicle: 'AMB-104',
        action: 'Immediate Emergency Corridor',
        reason: 'Reaches junction 7s earlier'
      }, {
        rank: '02',
        vehicle: 'AMB-208',
        action: 'Hold/Controlled Deceleration',
        reason: 'Clear second sequentially'
      }],
      reasoning: 'Sequential clearance minimizes simultaneous intersection occupancy and preserves momentum without stopping both emergency vehicles.',
      confidence: '96%',
      confidenceLabel: 'SIMULATION ESTIMATE'
    },
    whyExplanation: {
      title: 'Why This Decision?',
      summary: 'AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy.',
      detailedPoints: ['ETA Delta: AMB-104 arrives in 43 seconds compared to AMB-208 arriving in 50 seconds.', 'Momentum Preservation: Granting Priority 01 to AMB-104 allows it to pass through INT-04 without deceleration, clearing the intersection just before AMB-208 arrives.', 'Zero Deadlock Guarantee (Simulated): Eliminates the scenario where both ambulances attempt to cross simultaneously, requiring abrupt emergency braking in the intersection.', 'Secondary Green Wave: Once AMB-104 clears, INT-04 immediately switches green for AMB-208 (Priority 02).'],
      disclaimer: 'This explanation is generated by the resQClear simulation decision model for transparent, explainable emergency coordination.'
    },
    productRoadmap: [{
      phase: 'PHASE 1',
      title: 'Digital Twin Simulation',
      status: 'CURRENT',
      isCurrent: true,
      desc: '60 FPS multi-ambulance conflict engine, corridor simulation, and operations center UI.'
    }, {
      phase: 'PHASE 2',
      title: 'Ambulance GPS MVP',
      status: 'NEXT',
      isCurrent: false,
      desc: 'Dedicated telemetry mobile/in-vehicle client with high-precision GPS tracking for paramedics.'
    }, {
      phase: 'PHASE 3',
      title: 'Real-Time Traffic Data',
      status: 'PLANNED',
      isCurrent: false,
      desc: 'City-wide traffic sensor mesh and mapping API ingestion for live congestion heatmaps.'
    }, {
      phase: 'PHASE 4',
      title: 'Ambulance + Hospital Pilot',
      status: 'PLANNED',
      isCurrent: false,
      desc: 'Controlled trial with participating ambulance fleet operators and receiving trauma centers.'
    }, {
      phase: 'PHASE 5',
      title: 'Authorized Traffic Infrastructure Integration',
      status: 'FUTURE',
      isCurrent: false,
      desc: 'Municipal traffic command center API integration subject to regulatory & civic authorization.'
    }],
    howItWorksSteps: [{
      step: '1',
      name: 'DETECT',
      desc: 'Detect emergency vehicles and traffic conditions via connected telemetry.',
      icon: 'Ambulance'
    }, {
      step: '2',
      name: 'PREDICT',
      desc: 'Estimate congestion and arrival times across upcoming intersections.',
      icon: 'Activity'
    }, {
      step: '3',
      name: 'OPTIMIZE',
      desc: 'Evaluate emergency routes and compare alternative arterial corridors.',
      icon: 'Navigation'
    }, {
      step: '4',
      name: 'RESOLVE',
      desc: 'Coordinate multiple emergency vehicles approaching conflicting intersections.',
      icon: 'Cpu'
    }, {
      step: '5',
      name: 'COORDINATE',
      desc: 'Generate an emergency corridor sequence with simulated traffic signal timing.',
      icon: 'TrafficLight'
    }, {
      step: '6',
      name: 'INFORM',
      desc: 'Provide status and ETA information to authorized stakeholders and receiving ERs.',
      icon: 'Hospital'
    }],
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
      hourlyData: [{
        time: '06:00',
        traditional: 14.2,
        resQClear: 9.1,
        saved: 5.1
      }, {
        time: '08:00',
        traditional: 22.8,
        resQClear: 14.3,
        saved: 8.5
      }, {
        time: '10:00',
        traditional: 26.4,
        resQClear: 16.8,
        saved: 9.6
      }, {
        time: '12:00',
        traditional: 19.5,
        resQClear: 12.9,
        saved: 6.6
      }, {
        time: '14:00',
        traditional: 18.2,
        resQClear: 12.0,
        saved: 6.2
      }, {
        time: '16:00',
        traditional: 21.6,
        resQClear: 13.7,
        saved: 7.9
      }, {
        time: '18:00',
        traditional: 28.5,
        resQClear: 17.2,
        saved: 11.3
      }, {
        time: '20:00',
        traditional: 24.0,
        resQClear: 15.1,
        saved: 8.9
      }, {
        time: '22:00',
        traditional: 15.0,
        resQClear: 10.2,
        saved: 4.8
      }],
      corridorPerformance: [{
        name: 'Anna Salai Arterial',
        baseline: 18.4,
        resQClear: 11.8,
        efficiency: '+35.8%'
      }, {
        name: 'Poonamallee High Rd',
        baseline: 22.1,
        resQClear: 14.5,
        efficiency: '+34.4%'
      }, {
        name: 'GST Corridor',
        baseline: 16.8,
        resQClear: 11.2,
        efficiency: '+33.3%'
      }, {
        name: 'Inner Ring Road',
        baseline: 19.5,
        resQClear: 13.6,
        efficiency: '+30.2%'
      }],
      delaySources: [{
        category: 'Intersection Red Lights',
        before: '42%',
        after: '8%'
      }, {
        category: 'Bottleneck Traffic Congestion',
        before: '36%',
        after: '14%'
      }, {
        category: 'Pedestrian & Turning Conflicts',
        before: '14%',
        after: '6%'
      }, {
        category: 'Free Flow Transit',
        before: '8%',
        after: '72%'
      }]
    }
  };
  window.RESQCLEAR_DATA = RESQCLEAR_DATA;
  window.AMBUCLEAR_DATA = RESQCLEAR_DATA;

  /* ===== END FILE: data.js ===== */

  /* ===== START FILE: simulation.js ===== */
  // resQClear Real-Time Traffic & Emergency Simulation Engine
  // Enterprise Operations Center & Digital Twin Simulation Core
  var SimulationEngine = /*#__PURE__*/function () {
    function SimulationEngine() {
      _classCallCheck(this, SimulationEngine);
      this.isRunning = true;
      this.speedMultiplier = 1.0;
      this.ambulances = JSON.parse(JSON.stringify(RESQCLEAR_DATA.initialAmbulances));
      this.intersections = JSON.parse(JSON.stringify(RESQCLEAR_DATA.intersections));
      this.congestionZones = JSON.parse(JSON.stringify(RESQCLEAR_DATA.congestionZones));
      this.hospitals = JSON.parse(JSON.stringify(RESQCLEAR_DATA.hospitals));

      // Civilian traffic
      this.civilianVehicles = this.initCivilianTraffic();

      // Event Log (Realistic operations chronology with exact clock timestamps)
      this.events = [{
        id: 1,
        time: '13:50:18',
        type: 'system',
        message: 'resQClear Simulation Grid Engine Initialized • 6 Signal Nodes Online'
      }, {
        id: 2,
        time: '13:50:20',
        type: 'info',
        message: 'Emergency vehicle tracking initialized • Telemetry stream active'
      }, {
        id: 3,
        time: '13:50:25',
        type: 'info',
        message: 'V2X Conflict Arbitration Engine Ready (Digital Twin Simulation)'
      }];

      // Conflict State
      this.conflictState = {
        detected: false,
        stage: 'IDLE',
        // IDLE, DETECTING, PREDICTING, ANALYZING, GENERATING_SEQUENCE, PRIORITY_A, A_CLEARED, PRIORITY_B, B_CLEARED, BOTH_CLEARED
        ambA: null,
        ambB: null,
        decision: null,
        bannerText: '',
        bannerSubtext: '',
        bannerType: 'info',
        // alert, warning, success, info
        signalPhase: 'NORMAL CYCLE',
        // NORMAL CYCLE, EMERGENCY PRIORITY REQUESTED, SIGNAL PREPARING, GREEN CORRIDOR ACTIVE, AMBULANCE PASSING, CORRIDOR CLEARED, NORMAL CYCLE RESTORED
        corridorStatusA: 'INACTIVE',
        // INACTIVE, ACTIVE, CLEARED
        corridorStatusB: 'INACTIVE',
        whyModalOpen: false
      };

      // System Intelligence Status
      this.systemIntelligence = {
        trafficAnalysis: {
          label: 'TRAFFIC ANALYSIS',
          status: 'Congestion detected',
          active: true,
          done: true
        },
        routeAnalysis: {
          label: 'ROUTE ANALYSIS',
          status: 'Alternate route evaluated',
          active: false,
          done: false
        },
        conflictAnalysis: {
          label: 'CONFLICT ANALYSIS',
          status: 'Multi-ambulance conflict detected',
          active: false,
          done: false
        },
        sequence: {
          label: 'SEQUENCE',
          status: 'Priority order generated',
          active: false,
          done: false
        },
        corridor: {
          label: 'CORRIDOR',
          status: 'Emergency corridor simulated',
          active: false,
          done: false
        },
        hospitalEta: {
          label: 'HOSPITAL ETA',
          status: 'ETA synchronized with ER',
          active: true,
          done: true
        }
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
        timeSavedSec: 138,
        // 2m 18s
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
    _createClass(SimulationEngine, [{
      key: "subscribe",
      value: function subscribe(callback) {
        var _this3 = this;
        this.listeners.push(callback);
        return function () {
          _this3.listeners = _this3.listeners.filter(function (cb) {
            return cb !== callback;
          });
        };
      }
    }, {
      key: "notify",
      value: function notify() {
        var state = this.getState();
        this.listeners.forEach(function (cb) {
          return cb(state);
        });
      }
    }, {
      key: "getState",
      value: function getState() {
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
    }, {
      key: "initCivilianTraffic",
      value: function initCivilianTraffic() {
        var cars = [];
        var colors = ['#64748b', '#94a3b8', '#cbd5e1', '#475569', '#38bdf8', '#fbbf24'];
        var roads = [{
          start: {
            x: 50,
            y: 160
          },
          end: {
            x: 880,
            y: 160
          },
          dir: 'E'
        }, {
          start: {
            x: 880,
            y: 160
          },
          end: {
            x: 50,
            y: 160
          },
          dir: 'W'
        }, {
          start: {
            x: 50,
            y: 350
          },
          end: {
            x: 880,
            y: 350
          },
          dir: 'E'
        }, {
          start: {
            x: 880,
            y: 350
          },
          end: {
            x: 50,
            y: 350
          },
          dir: 'W'
        }, {
          start: {
            x: 50,
            y: 540
          },
          end: {
            x: 880,
            y: 540
          },
          dir: 'E'
        }, {
          start: {
            x: 880,
            y: 540
          },
          end: {
            x: 50,
            y: 540
          },
          dir: 'W'
        }, {
          start: {
            x: 280,
            y: 50
          },
          end: {
            x: 280,
            y: 650
          },
          dir: 'S'
        }, {
          start: {
            x: 450,
            y: 50
          },
          end: {
            x: 450,
            y: 650
          },
          dir: 'S'
        }, {
          start: {
            x: 620,
            y: 50
          },
          end: {
            x: 620,
            y: 650
          },
          dir: 'S'
        }, {
          start: {
            x: 450,
            y: 650
          },
          end: {
            x: 450,
            y: 50
          },
          dir: 'N'
        }];
        roads.forEach(function (road, idx) {
          for (var i = 0; i < 3; i++) {
            var t = i / 3 + Math.random() * 0.15;
            var x = road.start.x + (road.end.x - road.start.x) * t;
            var y = road.start.y + (road.end.y - road.start.y) * t;
            cars.push({
              id: "civ-".concat(idx, "-").concat(i),
              x: x,
              y: y,
              road: road,
              t: t,
              speed: 0.0008 + Math.random() * 0.0006,
              color: colors[Math.floor(Math.random() * colors.length)],
              yielding: false
            });
          }
        });
        return cars;
      }
    }, {
      key: "logEvent",
      value: function logEvent(type, message) {
        var now = new Date();
        var time = now.toTimeString().split(' ')[0];
        var newEvent = {
          id: Date.now() + Math.random(),
          time: time,
          type: type,
          message: message
        };
        this.events = [newEvent].concat(_toConsumableArray(this.events.slice(0, 35)));
      }
    }, {
      key: "start",
      value: function start() {
        this.isRunning = true;
        this.lastTimestamp = performance.now();
        if (!this.requestFrameId) {
          this.requestFrameId = requestAnimationFrame(this.loop);
        }
        this.notify();
      }
    }, {
      key: "pause",
      value: function pause() {
        this.isRunning = false;
        this.notify();
      }
    }, {
      key: "setSpeed",
      value: function setSpeed(multiplier) {
        this.speedMultiplier = multiplier;
        this.notify();
      }
    }, {
      key: "reset",
      value: function reset() {
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
          trafficAnalysis: {
            label: 'TRAFFIC ANALYSIS',
            status: 'Congestion detected',
            active: true,
            done: true
          },
          routeAnalysis: {
            label: 'ROUTE ANALYSIS',
            status: 'Alternate route evaluated',
            active: false,
            done: false
          },
          conflictAnalysis: {
            label: 'CONFLICT ANALYSIS',
            status: 'Multi-ambulance conflict detected',
            active: false,
            done: false
          },
          sequence: {
            label: 'SEQUENCE',
            status: 'Priority order generated',
            active: false,
            done: false
          },
          corridor: {
            label: 'CORRIDOR',
            status: 'Emergency corridor simulated',
            active: false,
            done: false
          },
          hospitalEta: {
            label: 'HOSPITAL ETA',
            status: 'ETA synchronized with ER',
            active: true,
            done: true
          }
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
    }, {
      key: "toggleWhyModal",
      value: function toggleWhyModal(isOpen) {
        this.conflictState.whyModalOpen = isOpen !== undefined ? isOpen : !this.conflictState.whyModalOpen;
        this.notify();
      }
    }, {
      key: "closeScenarioCompleteModal",
      value: function closeScenarioCompleteModal() {
        this.scenarioCompleteModal = false;
        this.notify();
      }
    }, {
      key: "getPointOnPath",
      value: function getPointOnPath(path, progress) {
        if (!path || path.length < 2) return path[0] || {
          x: 0,
          y: 0
        };
        var totalSegments = path.length - 1;
        var scaled = Math.max(0, Math.min(progress, 0.9999)) * totalSegments;
        var segIndex = Math.min(Math.floor(scaled), totalSegments - 1);
        var segProgress = scaled - segIndex;
        var p1 = path[segIndex];
        var p2 = path[segIndex + 1];
        var x = p1.x + (p2.x - p1.x) * segProgress;
        var y = p1.y + (p2.y - p1.y) * segProgress;
        var angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        return {
          x: x,
          y: y,
          angle: angle,
          currentSegment: segIndex
        };
      }
    }, {
      key: "update",
      value: function update(deltaTime) {
        var _this4 = this;
        if (!this.isRunning) return;
        var dt = deltaTime / 1000 * this.speedMultiplier;

        // 1. Update normal traffic light cycles for standard intersections
        this.intersections.forEach(function (inter) {
          if (inter.id !== 'int-4' || _this4.conflictState.stage === 'IDLE' || _this4.conflictState.stage === 'BOTH_CLEARED') {
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
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        var ambB = this.ambulances.find(function (a) {
          return a.id === 'AMB-208';
        });
        var ambC = this.ambulances.find(function (a) {
          return a.id === 'AMB-312';
        });

        // 2. Animate Ambulances & Live Telemetry
        this.ambulances.forEach(function (amb) {
          var speedFactor = 0.034;

          // In conflict priority phase, adjust speeds realistically
          if (amb.id === 'AMB-208' && _this4.conflictState.stage === 'PRIORITY_A' && amb.progress > 0.44 && amb.progress < 0.52) {
            speedFactor = 0.008; // Holding / decelerating
            amb.currentState = 'HOLDING FOR PRIORITY 01';
          } else if (amb.id === 'AMB-104' && _this4.conflictState.stage === 'PRIORITY_A') {
            speedFactor = 0.048; // Accelerating through green corridor
            amb.currentState = 'CLEARING INTERSECTION (PRIORITY 01)';
          } else if (amb.id === 'AMB-208' && _this4.conflictState.stage === 'PRIORITY_B') {
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
          var pos = _this4.getPointOnPath(amb.path, amb.progress);
          amb.currentX = pos.x;
          amb.currentY = pos.y;
          amb.heading = pos.angle;

          // Dynamic Live Telemetry updates (Speed 41 -> 42 -> 43 km/h with subtle micro-fluctuation)
          var baseSpeed = amb.id === 'AMB-104' ? 42 : amb.id === 'AMB-208' ? 40 : 48;
          var speedJitter = Math.sin(performance.now() / 800 + (amb.id === 'AMB-104' ? 0 : 2)) * 1.8;
          amb.speed = Math.round((baseSpeed + speedJitter) * 10) / 10;

          // Distance to conflict junction INT-04 (x: 450, y: 350)
          var distPx = Math.hypot(450 - pos.x, 350 - pos.y);
          if (amb.progress < 0.50) {
            // Counting down from 555m -> 510m -> 462m -> ...
            var remainingFraction = Math.max(0, (0.50 - amb.progress) / 0.38);
            amb.distanceToConflict = Math.max(0, Math.round(555 * remainingFraction));
          } else {
            amb.distanceToConflict = 0;
          }

          // Intersection ETA countdown (43s -> 39s -> 34s -> ...)
          if (amb.id === 'AMB-104') {
            if (amb.progress < 0.50) {
              var etaFrac = Math.max(0, (0.50 - amb.progress) / 0.38);
              amb.currentIntersectionEta = Math.max(1, Math.round(43 * etaFrac));
            } else {
              amb.currentIntersectionEta = 0;
            }
          } else if (amb.id === 'AMB-208') {
            if (amb.progress < 0.50) {
              var _etaFrac = Math.max(0, (0.50 - amb.progress) / 0.40);
              amb.currentIntersectionEta = Math.max(2, Math.round(50 * _etaFrac));
            } else {
              amb.currentIntersectionEta = 0;
            }
          } else {
            amb.currentIntersectionEta = Math.max(5, Math.round(amb.distanceToConflict / (amb.speed / 3.6)));
          }
        });

        // 3. Civilian cars yielding behavior
        this.civilianVehicles.forEach(function (car) {
          var isYielding = false;
          _this4.ambulances.forEach(function (amb) {
            if (amb.currentX && amb.currentY) {
              var dist = Math.hypot(car.x - amb.currentX, car.y - amb.currentY);
              if (dist < 65) {
                isYielding = true;
              }
            }
          });
          car.yielding = isYielding;
          var currentSpeed = isYielding ? car.speed * 0.15 : car.speed;
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
    }, {
      key: "evaluateIntersectionConflict",
      value: function evaluateIntersectionConflict(ambA, ambB, dt) {
        var _this5 = this;
        if (!ambA || !ambB) return;
        var int4 = this.intersections.find(function (i) {
          return i.id === 'int-4';
        });
        var aApproaching = ambA.progress >= 0.28 && ambA.progress < 0.56;
        var bApproaching = ambB.progress >= 0.25 && ambB.progress < 0.56;

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
          setTimeout(function () {
            if (_this5.conflictState.stage === 'DETECTING') {
              _this5.conflictState.stage = 'ANALYZING';
              _this5.conflictState.bannerText = 'ANALYZING CONFLICT & ETAS';
              _this5.conflictState.bannerSubtext = 'Evaluating ETA (43s vs 50s), distance (555m), approach vectors, and intersection occupancy...';
              _this5.conflictState.bannerType = 'warning';
              _this5.conflictState.signalPhase = 'SIGNAL PREPARING';
              int4.modeLabel = 'SIGNAL PREPARING';
              int4.simulatedPhase = 'SIGNAL PREPARING';
              _this5.logEvent('info', '13:51:24 AI-assisted sequence generated: ETA differential 7 sec evaluated.');
              _this5.notify();

              // STEP 3: GENERATING SAFE SEQUENCE & PRIORITY 01 TO AMB-104
              setTimeout(function () {
                if (_this5.conflictState.stage === 'ANALYZING') {
                  _this5.conflictState.stage = 'PRIORITY_A';
                  _this5.conflictState.bannerText = 'PRIORITY 01: AMB-104';
                  _this5.conflictState.bannerSubtext = 'Reason: AMB-104 reaches conflict zone 7s earlier. Simulated emergency corridor active for North link.';
                  _this5.conflictState.bannerType = 'success';
                  _this5.conflictState.signalPhase = 'GREEN CORRIDOR ACTIVE';
                  _this5.conflictState.corridorStatusA = 'ACTIVE';
                  _this5.systemIntelligence.sequence.active = true;
                  _this5.systemIntelligence.sequence.done = true;
                  _this5.systemIntelligence.corridor.active = true;
                  _this5.systemIntelligence.corridor.done = true;
                  _this5.conflictState.decision = {
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
                  _this5.logEvent('priority', '13:51:25 AMB-104 priority activated: Simulated green wave active for North corridor.');
                  _this5.logEvent('info', '13:51:29 Emergency corridor active: North-South green wave locked.');
                  if (window.soundEngine) window.soundEngine.playPriorityChime();
                  _this5.notify();
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
          setTimeout(function () {
            if (_this5.conflictState.stage === 'A_CLEARED') {
              _this5.conflictState.stage = 'PRIORITY_B';
              _this5.conflictState.bannerText = 'PRIORITY 02: AMB-208';
              _this5.conflictState.bannerSubtext = 'South corridor emergency green wave active. AMB-208 clearing intersection...';
              _this5.conflictState.bannerType = 'success';
              _this5.conflictState.signalPhase = 'GREEN CORRIDOR ACTIVE';
              _this5.conflictState.corridorStatusB = 'ACTIVE';
              int4.state = 'PRIORITY_B';
              int4.modeLabel = 'GREEN CORRIDOR ACTIVE (AMB-208)';
              int4.simulatedPhase = 'GREEN CORRIDOR ACTIVE';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              int4.priorityVehicle = 'AMB-208';
              _this5.logEvent('priority', '13:51:35 AMB-208 priority activated: South corridor clearance engaged.');
              if (window.soundEngine) window.soundEngine.playPriorityChime();
              _this5.notify();
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
          setTimeout(function () {
            if (_this5.conflictState.stage === 'BOTH_CLEARED') {
              int4.state = 'NORMAL_CYCLE';
              int4.modeLabel = 'NORMAL CYCLE';
              int4.simulatedPhase = 'NORMAL CYCLE';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              _this5.conflictState.signalPhase = 'NORMAL CYCLE';
              _this5.notify();
            }
          }, 2500);
          this.notify();
        }
      }

      // AI Alternate Route Application
    }, {
      key: "applyAiRoute",
      value: function applyAiRoute() {
        this.aiInsight.applied = true;
        this.systemIntelligence.routeAnalysis.active = true;
        this.systemIntelligence.routeAnalysis.done = true;
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
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
    }, {
      key: "triggerAmbulanceA",
      value: function triggerAmbulanceA() {
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        if (ambA) {
          ambA.progress = 0.12;
          this.logEvent('info', '13:50:40 AMB-104 dispatched from Anna Nagar West (Simulated Emergency).');
          this.notify();
        }
      }
    }, {
      key: "triggerAmbulanceB",
      value: function triggerAmbulanceB() {
        var ambB = this.ambulances.find(function (a) {
          return a.id === 'AMB-208';
        });
        if (ambB) {
          ambB.progress = 0.10;
          this.logEvent('info', '13:50:42 AMB-208 dispatched from T. Nagar Panagal Park (Simulated Emergency).');
          this.notify();
        }
      }
    }, {
      key: "triggerBothEmergencies",
      value: function triggerBothEmergencies() {
        this.reset();
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        var ambB = this.ambulances.find(function (a) {
          return a.id === 'AMB-208';
        });
        if (ambA && ambB) {
          ambA.progress = 0.22;
          ambB.progress = 0.19;
          this.logEvent('alert', '13:51:10 CRITICAL MULTI-AMBULANCE EVENT: Simultaneous dispatches active.');
          this.notify();
        }
      }
    }, {
      key: "createTrafficJam",
      value: function createTrafficJam() {
        this.congestionZones.forEach(function (z) {
          return z.active = true;
        });
        this.logEvent('warning', '13:50:50 SIMULATION: Peak congestion surge injected along Anna Salai link (+2.4 min delay).');
        this.notify();
      }
    }, {
      key: "clearTraffic",
      value: function clearTraffic() {
        this.congestionZones.forEach(function (z) {
          return z.active = false;
        });
        this.logEvent('info', '13:50:55 SIMULATION: Traffic congestion cleared. Free-flow transit active.');
        this.notify();
      }

      // AUTOMATED HERO SCENARIO DEMO (16 Sequential Steps)
    }, {
      key: "runEmergencyScenario",
      value: function runEmergencyScenario() {
        this.reset();
        this.scenarioRunning = true;
        this.scenarioStep = 1;
        this.scenarioTimer = 0;
        this.scenarioCompleteModal = false;
        this.speedMultiplier = 1.25;
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        var ambB = this.ambulances.find(function (a) {
          return a.id === 'AMB-208';
        });
        if (ambA && ambB) {
          ambA.progress = 0.14;
          ambB.progress = 0.11;
        }
        this.logEvent('system', '13:51:18 Step 1: Start normal traffic grid simulation.');
        this.notify();
      }
    }, {
      key: "updateScenarioScript",
      value: function updateScenarioScript(dt) {
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
          this.congestionZones.forEach(function (z) {
            return z.active = true;
          });
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
    }, {
      key: "loop",
      value: function loop(timestamp) {
        var deltaTime = timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;
        this.update(deltaTime);
        this.notify();
        this.requestFrameId = requestAnimationFrame(this.loop);
      }
    }]);
    return SimulationEngine;
  }(); // Instantiate global simulation engine
  window.simulationEngine = new SimulationEngine();

  /* ===== END FILE: simulation.js ===== */

  /* ===== START FILE: components.js ===== */
  // resQClear UI Components & Enterprise SVG Icon Library (React 18)
  // [React hooks initialized at top level]

  // --- ICONS (Scalable SVG Icons) ---
  var Icons = {
    Ambulance: function Ambulance(_ref) {
      var _ref$className = _ref.className,
        className = _ref$className === void 0 ? "w-5 h-5" : _ref$className,
        props = _objectWithoutProperties(_ref, _excluded);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-2.92-1.026A1 1 0 0 0 18 13v5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "7",
        cy: "18",
        r: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "17",
        cy: "18",
        r: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 8h4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 6v4"
      }));
    },
    Activity: function Activity(_ref2) {
      var _ref2$className = _ref2.className,
        className = _ref2$className === void 0 ? "w-5 h-5" : _ref2$className,
        props = _objectWithoutProperties(_ref2, _excluded2);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polyline", {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
      }));
    },
    ShieldAlert: function ShieldAlert(_ref3) {
      var _ref3$className = _ref3.className,
        className = _ref3$className === void 0 ? "w-5 h-5" : _ref3$className,
        props = _objectWithoutProperties(_ref3, _excluded3);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }));
    },
    ShieldCheck: function ShieldCheck(_ref4) {
      var _ref4$className = _ref4.className,
        className = _ref4$className === void 0 ? "w-5 h-5" : _ref4$className,
        props = _objectWithoutProperties(_ref4, _excluded4);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "9 12 11 14 15 10"
      }));
    },
    Shield: function Shield(_ref5) {
      var _ref5$className = _ref5.className,
        className = _ref5$className === void 0 ? "w-5 h-5" : _ref5$className,
        props = _objectWithoutProperties(_ref5, _excluded5);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }));
    },
    Zap: function Zap(_ref6) {
      var _ref6$className = _ref6.className,
        className = _ref6$className === void 0 ? "w-5 h-5" : _ref6$className,
        props = _objectWithoutProperties(_ref6, _excluded6);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }));
    },
    Radio: function Radio(_ref7) {
      var _ref7$className = _ref7.className,
        className = _ref7$className === void 0 ? "w-5 h-5" : _ref7$className,
        props = _objectWithoutProperties(_ref7, _excluded7);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      }));
    },
    Navigation: function Navigation(_ref8) {
      var _ref8$className = _ref8.className,
        className = _ref8$className === void 0 ? "w-5 h-5" : _ref8$className,
        props = _objectWithoutProperties(_ref8, _excluded8);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "3 11 22 2 13 21 11 13 3 11"
      }));
    },
    Hospital: function Hospital(_ref9) {
      var _ref9$className = _ref9.className,
        className = _ref9$className === void 0 ? "w-5 h-5" : _ref9$className,
        props = _objectWithoutProperties(_ref9, _excluded9);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 20h20"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 9h4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 7v4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 14h4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 17h4"
      }));
    },
    TrafficLight: function TrafficLight(_ref10) {
      var _ref10$className = _ref10.className,
        className = _ref10$className === void 0 ? "w-5 h-5" : _ref10$className,
        props = _objectWithoutProperties(_ref10, _excluded10);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "2",
        width: "12",
        height: "20",
        rx: "3"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "6",
        r: "2",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2",
        fill: "#f59e0b"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "18",
        r: "2",
        fill: "#10b981"
      }));
    },
    Play: function Play(_ref11) {
      var _ref11$className = _ref11.className,
        className = _ref11$className === void 0 ? "w-5 h-5" : _ref11$className,
        props = _objectWithoutProperties(_ref11, _excluded11);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "1"
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "5 3 19 12 5 21 5 3"
      }));
    },
    Pause: function Pause(_ref12) {
      var _ref12$className = _ref12.className,
        className = _ref12$className === void 0 ? "w-5 h-5" : _ref12$className,
        props = _objectWithoutProperties(_ref12, _excluded12);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "1"
      }, props), /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "4",
        width: "4",
        height: "16"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "14",
        y: "4",
        width: "4",
        height: "16"
      }));
    },
    RotateCcw: function RotateCcw(_ref13) {
      var _ref13$className = _ref13.className,
        className = _ref13$className === void 0 ? "w-5 h-5" : _ref13$className,
        props = _objectWithoutProperties(_ref13, _excluded13);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M3 2v6h6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 13a9 9 0 1 0 3-7.7L3 8"
      }));
    },
    Volume2: function Volume2(_ref14) {
      var _ref14$className = _ref14.className,
        className = _ref14$className === void 0 ? "w-5 h-5" : _ref14$className,
        props = _objectWithoutProperties(_ref14, _excluded14);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
      }));
    },
    VolumeX: function VolumeX(_ref15) {
      var _ref15$className = _ref15.className,
        className = _ref15$className === void 0 ? "w-5 h-5" : _ref15$className,
        props = _objectWithoutProperties(_ref15, _excluded15);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "23",
        y1: "9",
        x2: "17",
        y2: "15"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "17",
        y1: "9",
        x2: "23",
        y2: "15"
      }));
    },
    BarChart3: function BarChart3(_ref16) {
      var _ref16$className = _ref16.className,
        className = _ref16$className === void 0 ? "w-5 h-5" : _ref16$className,
        props = _objectWithoutProperties(_ref16, _excluded16);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("line", {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "10"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "14"
      }));
    },
    Settings: function Settings(_ref17) {
      var _ref17$className = _ref17.className,
        className = _ref17$className === void 0 ? "w-5 h-5" : _ref17$className,
        props = _objectWithoutProperties(_ref17, _excluded17);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      }));
    },
    Presentation: function Presentation(_ref18) {
      var _ref18$className = _ref18.className,
        className = _ref18$className === void 0 ? "w-5 h-5" : _ref18$className,
        props = _objectWithoutProperties(_ref18, _excluded18);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8",
        y1: "21",
        x2: "16",
        y2: "21"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "21"
      }));
    },
    CheckCircle2: function CheckCircle2(_ref19) {
      var _ref19$className = _ref19.className,
        className = _ref19$className === void 0 ? "w-5 h-5" : _ref19$className,
        props = _objectWithoutProperties(_ref19, _excluded19);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
    },
    AlertTriangle: function AlertTriangle(_ref20) {
      var _ref20$className = _ref20.className,
        className = _ref20$className === void 0 ? "w-5 h-5" : _ref20$className,
        props = _objectWithoutProperties(_ref20, _excluded20);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }));
    },
    Compass: function Compass(_ref21) {
      var _ref21$className = _ref21.className,
        className = _ref21$className === void 0 ? "w-5 h-5" : _ref21$className,
        props = _objectWithoutProperties(_ref21, _excluded21);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      }));
    },
    ArrowRight: function ArrowRight(_ref22) {
      var _ref22$className = _ref22.className,
        className = _ref22$className === void 0 ? "w-5 h-5" : _ref22$className,
        props = _objectWithoutProperties(_ref22, _excluded22);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "12 5 19 12 12 19"
      }));
    },
    Cpu: function Cpu(_ref23) {
      var _ref23$className = _ref23.className,
        className = _ref23$className === void 0 ? "w-5 h-5" : _ref23$className,
        props = _objectWithoutProperties(_ref23, _excluded23);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "1",
        x2: "9",
        y2: "4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "15",
        y1: "1",
        x2: "15",
        y2: "4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "20",
        x2: "9",
        y2: "23"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "15",
        y1: "20",
        x2: "15",
        y2: "23"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "9",
        x2: "23",
        y2: "9"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "14",
        x2: "23",
        y2: "14"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "1",
        y1: "9",
        x2: "4",
        y2: "9"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "1",
        y1: "14",
        x2: "4",
        y2: "14"
      }));
    },
    Bell: function Bell(_ref24) {
      var _ref24$className = _ref24.className,
        className = _ref24$className === void 0 ? "w-5 h-5" : _ref24$className,
        props = _objectWithoutProperties(_ref24, _excluded24);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }));
    },
    Camera: function Camera(_ref25) {
      var _ref25$className = _ref25.className,
        className = _ref25$className === void 0 ? "w-5 h-5" : _ref25$className,
        props = _objectWithoutProperties(_ref25, _excluded25);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "13",
        r: "3"
      }));
    },
    Layers: function Layers(_ref26) {
      var _ref26$className = _ref26.className,
        className = _ref26$className === void 0 ? "w-5 h-5" : _ref26$className,
        props = _objectWithoutProperties(_ref26, _excluded26);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "12 2 2 7 12 12 22 7 12 2"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "2 17 12 22 22 17"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "2 12 12 17 22 12"
      }));
    },
    Lock: function Lock(_ref27) {
      var _ref27$className = _ref27.className,
        className = _ref27$className === void 0 ? "w-5 h-5" : _ref27$className,
        props = _objectWithoutProperties(_ref27, _excluded27);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4"
      }));
    },
    X: function X(_ref28) {
      var _ref28$className = _ref28.className,
        className = _ref28$className === void 0 ? "w-5 h-5" : _ref28$className,
        props = _objectWithoutProperties(_ref28, _excluded28);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }));
    },
    Info: function Info(_ref29) {
      var _ref29$className = _ref29.className,
        className = _ref29$className === void 0 ? "w-5 h-5" : _ref29$className,
        props = _objectWithoutProperties(_ref29, _excluded29);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }));
    },
    HelpCircle: function HelpCircle(_ref30) {
      var _ref30$className = _ref30.className,
        className = _ref30$className === void 0 ? "w-5 h-5" : _ref30$className,
        props = _objectWithoutProperties(_ref30, _excluded30);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }));
    },
    Crosshair: function Crosshair(_ref31) {
      var _ref31$className = _ref31.className,
        className = _ref31$className === void 0 ? "w-5 h-5" : _ref31$className,
        props = _objectWithoutProperties(_ref31, _excluded31);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "22",
        y1: "12",
        x2: "18",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "12",
        x2: "2",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "18"
      }));
    },
    TrendingUp: function TrendingUp(_ref32) {
      var _ref32$className = _ref32.className,
        className = _ref32$className === void 0 ? "w-5 h-5" : _ref32$className,
        props = _objectWithoutProperties(_ref32, _excluded32);
      return /*#__PURE__*/React.createElement("svg", _extends({
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), /*#__PURE__*/React.createElement("polyline", {
        points: "23 6 13.5 15.5 8.5 10.5 1 18"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "17 6 23 6 23 12"
      }));
    }
  };

  // --- LOGO COMPONENT ---
  function ResQClearLogo(_ref33) {
    var _ref33$size = _ref33.size,
      size = _ref33$size === void 0 ? "default" : _ref33$size;
    var isSmall = size === "sm" || size === "small";
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2.5 select-none"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-0.5 shadow-md shadow-emerald-500/20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-950 rounded-[10px] ".concat(isSmall ? 'p-1.5' : 'p-2', " flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement(Icons.Ambulance, {
      className: "".concat(isSmall ? 'w-4 h-4' : 'w-5 h-5', " text-emerald-400")
    }), /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"
    }), /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-extrabold tracking-tight text-white ".concat(isSmall ? 'text-base' : 'text-xl')
    }, "resQ", /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400"
    }, "Clear")), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold uppercase"
    }, "PROTOTYPE")), !isSmall && /*#__PURE__*/React.createElement("p", {
      className: "text-[9px] text-slate-400 tracking-wider uppercase font-mono font-medium"
    }, "EMERGENCY TRAFFIC COORDINATION")));
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

  function LiveMap(_ref34) {
    var simState = _ref34.simState,
      onSelectAmbulance = _ref34.onSelectAmbulance,
      onApplyRoute = _ref34.onApplyRoute;
    var canvasRef = useRef(null);
    var _useState = useState('TACTICAL'),
      _useState2 = _slicedToArray(_useState, 2),
      mapMode = _useState2[0],
      setMapMode = _useState2[1];
    var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showRealWorldLockedModal = _useState4[0],
      setShowRealWorldLockedModal = _useState4[1];
    var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      cctvExpanded = _useState6[0],
      setCctvExpanded = _useState6[1];
    var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      showLegend = _useState8[0],
      setShowLegend = _useState8[1];
    var _ref35 = simState || {},
      _ref35$ambulances = _ref35.ambulances,
      ambulances = _ref35$ambulances === void 0 ? [] : _ref35$ambulances,
      _ref35$intersections = _ref35.intersections,
      intersections = _ref35$intersections === void 0 ? [] : _ref35$intersections,
      _ref35$congestionZone = _ref35.congestionZones,
      congestionZones = _ref35$congestionZone === void 0 ? [] : _ref35$congestionZone,
      _ref35$hospitals = _ref35.hospitals,
      hospitals = _ref35$hospitals === void 0 ? [] : _ref35$hospitals,
      _ref35$civilianVehicl = _ref35.civilianVehicles,
      civilianVehicles = _ref35$civilianVehicl === void 0 ? [] : _ref35$civilianVehicl,
      _ref35$conflictState = _ref35.conflictState,
      conflictState = _ref35$conflictState === void 0 ? {} : _ref35$conflictState,
      _ref35$aiInsight = _ref35.aiInsight,
      aiInsight = _ref35$aiInsight === void 0 ? {} : _ref35$aiInsight;
    var ambA = ambulances.find(function (a) {
      return a.id === 'AMB-104';
    }) || {};
    var ambB = ambulances.find(function (a) {
      return a.id === 'AMB-208';
    }) || {};
    var int4 = intersections.find(function (i) {
      return i.id === 'int-4';
    }) || {};

    // --- 60 FPS TACTICAL DIGITAL TWIN RENDERER ---
    useEffect(function () {
      var canvas = canvasRef.current;
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width = canvas.width;
      var height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Dark Operations Center Base Map Grid
      ctx.fillStyle = '#060a12';
      ctx.fillRect(0, 0, width, height);

      // Subtle Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      for (var x = 0; x < width; x += 36) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (var y = 0; y < height; y += 36) {
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
      var roads = [{
        x1: 40,
        y1: 160,
        x2: 880,
        y2: 160,
        name: 'Poonamallee High Road',
        width: 34
      }, {
        x1: 40,
        y1: 350,
        x2: 880,
        y2: 350,
        name: 'Anna Salai Express Arterial',
        width: 44,
        primary: true
      }, {
        x1: 40,
        y1: 540,
        x2: 880,
        y2: 540,
        name: 'Grand Southern Trunk (GST)',
        width: 34
      }, {
        x1: 280,
        y1: 40,
        x2: 280,
        y2: 650,
        name: '1st Avenue Cross Corridor',
        width: 32
      }, {
        x1: 450,
        y1: 40,
        x2: 450,
        y2: 650,
        name: 'EVR Periyar Central Spine',
        width: 42,
        primary: true
      }, {
        x1: 620,
        y1: 40,
        x2: 620,
        y2: 650,
        name: 'Hospital Access Highway',
        width: 32
      }, {
        x1: 780,
        y1: 120,
        x2: 780,
        y2: 580,
        name: 'Medical Center Access Link',
        width: 28
      }];
      roads.forEach(function (r) {
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
        ctx.moveTo(r.x1, r.y1 - r.width / 2);
        ctx.lineTo(r.x2, r.y2 - r.width / 2);
        ctx.moveTo(r.x1, r.y1 + r.width / 2);
        ctx.lineTo(r.x2, r.y2 + r.width / 2);
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
      congestionZones.forEach(function (zone) {
        if (!zone.active) return;
        var isHigh = zone.severity === 'HIGH';
        var grad = ctx.createRadialGradient(zone.x, zone.y, 4, zone.x, zone.y, zone.radius);
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
        ctx.fillText("CONGESTION ".concat(zone.delayImpact), zone.x - 32, zone.y - zone.radius - 3);
      });

      // Emergency Corridors & Normal Routes
      ambulances.forEach(function (amb) {
        if (!amb.path || amb.path.length < 2) return;

        // BLUE: Baseline / Normal Route
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        amb.path.forEach(function (pt, i) {
          if (i === 0) ctx.moveTo(pt.x, pt.y);else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // GREEN: Active Emergency Corridor (Forward Wave Animation)
        if (amb.currentX && amb.currentY) {
          var isPriorityA = amb.id === 'AMB-104' && (conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'A_CLEARED');
          var isPriorityB = amb.id === 'AMB-208' && (conflictState.stage === 'PRIORITY_B' || conflictState.stage === 'BOTH_CLEARED');
          var isCorridorActive = isPriorityA || isPriorityB || amb.id === 'AMB-312';
          ctx.strokeStyle = isCorridorActive ? '#10b981' : 'rgba(16, 185, 129, 0.5)';
          ctx.lineWidth = isCorridorActive ? 8 : 5;
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = isCorridorActive ? 12 : 4;
          ctx.beginPath();
          ctx.moveTo(amb.currentX, amb.currentY);
          var nextIdx = Math.min(amb.path.length - 1, amb.progress > 0.5 ? 4 : 3);
          for (var i = nextIdx; i < Math.min(amb.path.length, nextIdx + 2); i++) {
            ctx.lineTo(amb.path[i].x, amb.path[i].y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Route Direction Arrows
          if (amb.heading !== undefined) {
            var arrowX = amb.currentX + Math.cos(amb.heading) * 22;
            var arrowY = amb.currentY + Math.sin(amb.heading) * 22;
            ctx.fillStyle = '#10b981';
            ctx.beginPath();
            ctx.arc(arrowX, arrowY, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Civilian Vehicles
      civilianVehicles.forEach(function (car) {
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
      intersections.forEach(function (inter) {
        ctx.save();
        ctx.translate(inter.x, inter.y);

        // Intersection Code Label (e.g., INT-04)
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.fillStyle = inter.id === 'int-4' ? '#38bdf8' : '#94a3b8';
        ctx.fillText(inter.code || inter.id.toUpperCase(), -18, -26);

        // Central Conflict Junction INT-04 Special Box & Rings
        if (inter.id === 'int-4') {
          var isConflict = conflictState.stage && conflictState.stage !== 'IDLE' && conflictState.stage !== 'BOTH_CLEARED';
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
        var isRed = inter.northSouth === 'RED';
        ctx.fillStyle = isRed ? '#ef4444' : '#450a0a';
        ctx.beginPath();
        ctx.arc(0, -11, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Yellow Lamp
        var isYellow = inter.northSouth === 'YELLOW';
        ctx.fillStyle = isYellow ? '#f59e0b' : '#451a03';
        ctx.beginPath();
        ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Green Lamp
        var isGreen = inter.northSouth === 'GREEN';
        ctx.fillStyle = isGreen ? '#10b981' : '#022c22';
        ctx.beginPath();
        ctx.arc(0, 11, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 3 Destination Hospitals
      hospitals.forEach(function (hosp) {
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
      ambulances.forEach(function (amb) {
        if (!amb.currentX || !amb.currentY) return;
        ctx.save();
        ctx.translate(amb.currentX, amb.currentY);
        ctx.rotate(amb.heading || 0);

        // Siren Pulse
        var isCritical = amb.status === 'CRITICAL';
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
        ctx.fillText("".concat(amb.id, " (").concat(amb.speed, " ").concat(amb.speedUnit, ")"), amb.currentX - 32, amb.currentY - 18);
      });
    }, [simState]);
    return /*#__PURE__*/React.createElement("div", {
      className: "relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col shadow-2xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-3.5 left-3.5 right-3.5 z-20 flex flex-wrap items-center justify-between pointer-events-none gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 pointer-events-auto bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-xl"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMapMode('TACTICAL');
      },
      className: "px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 bg-emerald-500 text-slate-950 shadow-md transition-all"
    }, /*#__PURE__*/React.createElement(Icons.Layers, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "DIGITAL TWIN SIMULATION"), /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-emerald-950 ml-1"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowRealWorldLockedModal(true);
      },
      className: "px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 text-slate-400 hover:text-slate-200 transition-all",
      title: "Real-World Live Map Infrastructure Integration"
    }, /*#__PURE__*/React.createElement(Icons.Lock, {
      className: "w-3.5 h-3.5 text-slate-500"
    }), /*#__PURE__*/React.createElement("span", null, "REAL-WORLD LIVE MAP"), /*#__PURE__*/React.createElement("span", {
      className: "px-1.5 py-0.2 rounded bg-slate-800 text-[9px] text-amber-400 font-mono"
    }, "FUTURE"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 pointer-events-auto"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowLegend(!showLegend);
      },
      className: "px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement(Icons.Compass, {
      className: "w-3.5 h-3.5 text-cyan-400"
    }), /*#__PURE__*/React.createElement("span", null, showLegend ? 'Hide Legend' : 'Show Legend')), /*#__PURE__*/React.createElement("div", {
      className: "hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATED SIGNAL CONTROL ACTIVE")))), /*#__PURE__*/React.createElement("div", {
      className: "relative w-full h-full flex-1"
    }, /*#__PURE__*/React.createElement("canvas", {
      ref: canvasRef,
      width: 920,
      height: 680,
      className: "w-full h-full object-contain cursor-crosshair"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-3.5 right-3.5 z-20 transition-all ".concat(cctvExpanded ? 'w-80 h-56 sm:w-96 sm:h-64' : 'w-48 h-32', " bg-slate-950/95 rounded-xl border border-slate-700 shadow-2xl overflow-hidden pointer-events-auto flex flex-col")
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-6 bg-slate-900 border-b border-slate-800 px-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "CAM-04"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "\u2022 INT-04")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCctvExpanded(!cctvExpanded);
      },
      className: "text-slate-400 hover:text-white text-[9px]"
    }, cctvExpanded ? 'Minimize' : 'Expand')), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 relative bg-slate-900/90 overflow-hidden flex items-center justify-center p-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center font-mono text-[10px] space-y-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-emerald-400 font-bold"
    }, "LIVE CCTV STREAM (SIMULATED)"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-300 text-[9px]"
    }, "Intersection 4 \u2022 Central Corridor"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[8px]"
    }, int4.modeLabel || 'NORMAL CYCLE')))), showLegend && /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-3.5 left-3.5 z-20 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5 shadow-xl pointer-events-auto max-w-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase font-bold border-b border-slate-800 pb-1"
    }, "Map Legend"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3.5 h-1.5 rounded bg-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "GREEN: Emergency Corridor")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3.5 h-1.5 rounded bg-red-500"
    }), /*#__PURE__*/React.createElement("span", null, "RED: Critical Congestion")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3.5 h-1.5 rounded bg-amber-500"
    }), /*#__PURE__*/React.createElement("span", null, "AMBER: Congestion")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3.5 h-1.5 rounded bg-sky-400"
    }), /*#__PURE__*/React.createElement("span", null, "BLUE: Normal Route")), /*#__PURE__*/React.createElement("div", {
      className: "pt-1 text-[9px] text-slate-500 border-t border-slate-900"
    }, "INT-01 to INT-06: Simulated Signals"))), showRealWorldLockedModal && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400"
    }, /*#__PURE__*/React.createElement(Icons.Lock, {
      className: "w-5 h-5"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-base text-white"
    }, "Real-World Infrastructure Integration"), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono text-amber-400 font-bold uppercase"
    }, "LOCKED / FUTURE PHASE"))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowRealWorldLockedModal(false);
      },
      className: "p-1 rounded-lg text-slate-400 hover:text-white"
    }, /*#__PURE__*/React.createElement(Icons.X, {
      className: "w-5 h-5"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 text-xs text-slate-300 leading-relaxed font-sans"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-amber-300"
    }, "Live infrastructure integration is not enabled in this prototype."), /*#__PURE__*/React.createElement("p", null, "Future versions may integrate authorized traffic, ambulance, and hospital systems subject to technical and regulatory approval."), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] space-y-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 uppercase font-bold"
    }, "Planned Roadmap:"), /*#__PURE__*/React.createElement("div", {
      className: "text-emerald-400"
    }, "\u2713 Phase 1: Digital Twin Simulation (Current)"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-300"
    }, "\u25CB Phase 2: Ambulance GPS MVP (Next)"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, "\u25CB Phase 3: Real-Time Traffic Sensor Ingestion"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, "\u25CB Phase 4: Ambulance + Hospital Pilot"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, "\u25CB Phase 5: Authorized Traffic Infrastructure Integration"))), /*#__PURE__*/React.createElement("div", {
      className: "pt-3 border-t border-slate-800 flex justify-end"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowRealWorldLockedModal(false);
      },
      className: "px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-all"
    }, "Return to Digital Twin Simulation")))));
  }
  window.LiveMap = LiveMap;

  /* ===== END FILE: LiveMap.js ===== */

  /* ===== START FILE: ConflictEngineModal.js ===== */
  // resQClear Conflict Resolution Engine & Decision Factors Intelligence Panel
  // Core Startup Intelligence: Decision Panel, Telemetry, Sequence, & Explainability
  // [React hooks initialized at top level]

  function ConflictEnginePanel(_ref36) {
    var simState = _ref36.simState,
      onClose = _ref36.onClose;
    var _ref37 = simState || {},
      _ref37$conflictState = _ref37.conflictState,
      conflictState = _ref37$conflictState === void 0 ? {} : _ref37$conflictState,
      _ref37$ambulances = _ref37.ambulances,
      ambulances = _ref37$ambulances === void 0 ? [] : _ref37$ambulances,
      _ref37$intersections = _ref37.intersections,
      intersections = _ref37$intersections === void 0 ? [] : _ref37$intersections;
    var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showWhyModal = _useState10[0],
      setShowWhyModal = _useState10[1];
    var ambA = ambulances.find(function (a) {
      return a.id === 'AMB-104';
    }) || {};
    var ambB = ambulances.find(function (a) {
      return a.id === 'AMB-208';
    }) || {};
    var int4 = intersections.find(function (i) {
      return i.id === 'int-4';
    }) || {};
    var stage = conflictState.stage || 'IDLE';
    var isDetected = stage === 'DETECTING' || stage === 'PREDICTING';
    var isAnalyzing = stage === 'ANALYZING' || stage === 'GENERATING_SEQUENCE';
    var isAActive = stage === 'PRIORITY_A' || stage === 'A_CLEARED';
    var isBActive = stage === 'PRIORITY_B';
    var isBothCleared = stage === 'BOTH_CLEARED';

    // Sequence Flow Stages for Visual Progress Tracker
    var sequenceStages = [{
      key: 'DETECTING',
      label: 'DETECTING'
    }, {
      key: 'PREDICTING',
      label: 'PREDICTING'
    }, {
      key: 'ANALYZING',
      label: 'ANALYZING CONFLICT'
    }, {
      key: 'GENERATING',
      label: 'GENERATING SAFE SEQUENCE'
    }, {
      key: 'PRIORITY_A',
      label: 'PRIORITY 01: AMB-104'
    }, {
      key: 'A_CLEARED',
      label: 'INTERSECTION CLEARED'
    }, {
      key: 'PRIORITY_B',
      label: 'PRIORITY 02: AMB-208'
    }, {
      key: 'B_CLEARED',
      label: 'INTERSECTION CLEARED'
    }, {
      key: 'BOTH_CLEARED',
      label: 'CONFLICT RESOLVED'
    }];
    var getCurrentStepIndex = function getCurrentStepIndex() {
      switch (stage) {
        case 'DETECTING':
          return 0;
        case 'PREDICTING':
          return 1;
        case 'ANALYZING':
          return 2;
        case 'GENERATING_SEQUENCE':
          return 3;
        case 'PRIORITY_A':
          return 4;
        case 'A_CLEARED':
          return 5;
        case 'PRIORITY_B':
          return 6;
        case 'BOTH_CLEARED':
          return 8;
        default:
          return isBothCleared ? 8 : 4;
      }
    };
    var currentIdx = getCurrentStepIndex();
    return /*#__PURE__*/React.createElement("div", {
      className: "glass-panel rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl bg-slate-950/95 space-y-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400"
    }, /*#__PURE__*/React.createElement(Icons.ShieldAlert, {
      className: "w-5 h-5"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-extrabold text-base sm:text-lg text-white"
    }, "CONFLICT RESOLUTION ENGINE"), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-bold uppercase"
    }, "CORE AI MODEL")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono"
    }, "CONFLICT JUNCTION: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, "INT-04 (Central Conflict Junction)"), " \u2022 Vector Collision Arbitration"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 font-mono text-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
    }, "CONFLICT RISK: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-red-400"
    }, "HIGH")), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold"
    }, "CONFIDENCE: 96% (SIMULATION ESTIMATE)"))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all ".concat(isBothCleared ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300' : isAActive || isBActive ? 'bg-cyan-950/30 border-cyan-500/50 text-cyan-300' : isAnalyzing ? 'bg-amber-950/30 border-amber-500/50 text-amber-300' : 'bg-red-950/40 border-red-500/50 text-red-300')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0"
    }, isBothCleared ? /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-5 h-5 text-emerald-400"
    }) : /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
      className: "w-5 h-5 text-amber-400 animate-pulse"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-extrabold text-sm font-mono uppercase tracking-wide flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", null, conflictState.bannerText || '⚠ MULTIPLE EMERGENCY CONFLICT DETECTED')), /*#__PURE__*/React.createElement("div", {
      className: "text-xs opacity-90 mt-0.5"
    }, conflictState.bannerSubtext || 'AMB-104 (North) & AMB-208 (South) converging on INT-04. AI-assisted sequence formulating.'))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowWhyModal(true);
      },
      className: "px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-mono text-xs font-bold transition-all flex items-center space-x-1.5 flex-shrink-0"
    }, /*#__PURE__*/React.createElement(Icons.HelpCircle, {
      className: "w-3.5 h-3.5 text-cyan-400"
    }), /*#__PURE__*/React.createElement("span", null, "WHY THIS DECISION?"))), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-900/90 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono text-slate-400 uppercase font-bold mb-2 flex justify-between"
    }, /*#__PURE__*/React.createElement("span", null, "AI ARBITRATION SEQUENCE PROGRESS"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400"
    }, "STAGE ", currentIdx + 1, " OF ", sequenceStages.length)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1 font-mono text-[9px] text-center"
    }, sequenceStages.map(function (stg, i) {
      var isPast = i < currentIdx;
      var isCurrent = i === currentIdx;
      return /*#__PURE__*/React.createElement("div", {
        key: stg.key,
        className: "p-1.5 rounded-lg border leading-tight transition-all ".concat(isCurrent ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md ring-1 ring-emerald-400' : isPast ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30' : 'bg-slate-950 text-slate-400 border-slate-800')
      }, stg.label);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border transition-all ".concat(isAActive ? 'bg-emerald-950/30 border-emerald-500/70 shadow-lg shadow-emerald-950/50' : 'bg-slate-900/70 border-slate-800')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2.5 h-2.5 rounded-full bg-red-500 animate-ping flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-sm text-white whitespace-nowrap"
    }, ambA.id || 'AMB-104'), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400 font-mono whitespace-nowrap"
    }, "(", ambA.name, ")")), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/40 font-bold whitespace-nowrap"
    }, "CRITICAL")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2 text-xs font-mono mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "ETA TO INT-04:"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-emerald-400 text-sm"
    }, ambA.currentIntersectionEta || 43, " sec")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "DISTANCE TO INT-04:"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-white text-sm"
    }, ambA.distanceToConflict || 555, " m")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "APPROACH VECTOR:"), /*#__PURE__*/React.createElement("div", {
      className: "font-medium text-slate-200"
    }, "North Link (Sector 1)")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "CURRENT SPEED:"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-slate-200"
    }, ambA.speed || 42, " km/h"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-2.5 border-t border-slate-800 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "RECOMMENDED SEQUENCE:"), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded bg-emerald-500 text-slate-950 font-bold"
    }, "01 \u2192 PRIORITY 01"))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border transition-all ".concat(isBActive ? 'bg-emerald-950/30 border-emerald-500/70 shadow-lg shadow-emerald-950/50' : 'bg-slate-900/70 border-slate-800')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-sm text-white whitespace-nowrap"
    }, ambB.id || 'AMB-208'), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400 font-mono whitespace-nowrap"
    }, "(", ambB.name, ")")), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/40 font-bold whitespace-nowrap"
    }, "CRITICAL")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2 text-xs font-mono mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "ETA TO INT-04:"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-amber-400 text-sm"
    }, ambB.currentIntersectionEta || 50, " sec")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "DISTANCE TO INT-04:"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-white text-sm"
    }, ambB.distanceToConflict || 555, " m")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "APPROACH VECTOR:"), /*#__PURE__*/React.createElement("div", {
      className: "font-medium text-slate-200"
    }, "South Link (Sector 2)")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "CURRENT SPEED:"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-slate-200"
    }, ambB.speed || 40, " km/h"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-2.5 border-t border-slate-800 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "RECOMMENDED SEQUENCE:"), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded font-bold ".concat(isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300')
    }, "02 \u2192 PRIORITY 02")))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.Cpu, {
      className: "w-4 h-4 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono font-bold text-white uppercase tracking-wider"
    }, "DECISION FACTORS & ARBITRATION MATRIX")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "DECISION CONFIDENCE:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30"
    }, "96% (SIMULATION ESTIMATE)"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 uppercase"
    }, "\u2022 ETA"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-emerald-400 mt-0.5"
    }, "43s vs 50s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500"
    }, "7s Delta")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 uppercase"
    }, "\u2022 Distance"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-white mt-0.5"
    }, "555m vs 555m"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500"
    }, "Equal Radius")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 uppercase"
    }, "\u2022 Approach Vector"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-white mt-0.5"
    }, "North vs South"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500"
    }, "Cross-axis")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 uppercase"
    }, "\u2022 Occupancy"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-amber-400 mt-0.5"
    }, "1 Vehicle/Slot"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500"
    }, "Non-simultaneous")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 uppercase"
    }, "\u2022 Traffic Density"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-red-400 mt-0.5"
    }, "High (+2.4m)"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500"
    }, "Anna Salai Link")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 uppercase"
    }, "\u2022 Conflict Risk"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-red-400 mt-0.5"
    }, "HIGH"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500"
    }, "Simultaneous Demand"))), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-mono text-[10px] text-slate-400 uppercase"
    }, "RECOMMENDED SEQUENCE"), /*#__PURE__*/React.createElement("div", {
      className: "font-mono font-extrabold text-emerald-400 text-sm mt-0.5"
    }, "01 \u2192 AMB-104 \xA0|\xA0 02 \u2192 AMB-208"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-300 mt-1"
    }, /*#__PURE__*/React.createElement("strong", null, "Reason:"), " \"Sequential clearance minimizes simultaneous intersection occupancy.\"")), /*#__PURE__*/React.createElement("div", {
      className: "text-right font-mono text-[11px] text-slate-400 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", null, "SIMULATED SIGNAL CONTROL:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, conflictState.signalPhase || 'NORMAL CYCLE')))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 font-bold uppercase"
    }, "EMERGENCY CORRIDOR VISUALIZATION"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "CORRIDOR STATUS: ", /*#__PURE__*/React.createElement("strong", {
      className: isBothCleared ? 'text-teal-300' : isAActive || isBActive ? 'text-emerald-400 animate-pulse' : 'text-slate-400'
    }, isBothCleared ? 'CLEARED' : isAActive || isBActive ? 'ACTIVE' : 'INACTIVE'))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between overflow-x-auto py-2 px-1 text-xs font-mono text-center gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-red-500/40 text-red-400 min-w-[100px]"
    }, /*#__PURE__*/React.createElement(Icons.Ambulance, {
      className: "w-4 h-4 mx-auto mb-1 text-red-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "AMBULANCE")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-600 font-bold"
    }, "\u2193"), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 block"
    }, "NODE 1"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "INT-01")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-600 font-bold"
    }, "\u2193"), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 block"
    }, "NODE 2"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "INT-02")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-600 font-bold"
    }, "\u2193"), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-emerald-500/50 text-emerald-400 min-w-[120px] ring-1 ring-emerald-500/30"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-emerald-500 block"
    }, "CONFLICT JUNCTION"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-emerald-300"
    }, "INT-04")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-600 font-bold"
    }, "\u2193"), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 min-w-[110px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 block"
    }, "NODE 3"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "INT-06")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-600 font-bold"
    }, "\u2193"), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-emerald-500/40 text-emerald-400 min-w-[110px]"
    }, /*#__PURE__*/React.createElement(Icons.Hospital, {
      className: "w-4 h-4 mx-auto mb-1 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "HOSPITAL")))), showWhyModal && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-xl w-full bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 shadow-2xl space-y-4 font-sans"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between border-b border-slate-800 pb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
    }, /*#__PURE__*/React.createElement(Icons.HelpCircle, {
      className: "w-5 h-5"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-extrabold text-base text-white"
    }, "Why This Decision?"), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono text-cyan-400 uppercase font-bold"
    }, "TRANSPARENT AI EXPLAINABILITY"))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowWhyModal(false);
      },
      className: "p-1 rounded-lg text-slate-400 hover:text-white"
    }, /*#__PURE__*/React.createElement(Icons.X, {
      className: "w-5 h-5"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, "Core Arbitration Summary:"), /*#__PURE__*/React.createElement("br", null), "\"AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy.\""), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2.5 text-xs text-slate-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-mono text-slate-400 font-bold uppercase text-[10px]"
    }, "Key Factors Evaluated:"), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-2 pl-2"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex items-start space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "ETA Delta:"), " AMB-104 predicted ETA is 43s vs AMB-208 ETA of 50s.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-start space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Momentum Preservation:"), " Sequential green wave allows AMB-104 to clear INT-04 without deceleration, leaving the intersection open for AMB-208.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-start space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Deadlock Prevention:"), " Eliminates cross-axis convergence where both vehicles arrive concurrently.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-start space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Simulated Signal Control:"), " Phase transfer occurs automatically the moment AMB-104 passes the intersection boundary.")))), /*#__PURE__*/React.createElement("div", {
      className: "pt-3 border-t border-slate-800 flex justify-end"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowWhyModal(false);
      },
      className: "px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs transition-all"
    }, "Close Explanation")))));
  }
  window.ConflictEnginePanel = ConflictEnginePanel;

  /* ===== END FILE: ConflictEngineModal.js ===== */

  /* ===== START FILE: RightStatusPanel.js ===== */
  // resQClear Right-Side Operations & Intelligence Panel
  // System Intelligence, AI Traffic Insight, Before vs After & Live Chronology
  // [React hooks initialized at top level]

  function RightStatusPanel(_ref38) {
    var simState = _ref38.simState,
      onApplyRoute = _ref38.onApplyRoute;
    var _ref39 = simState || {},
      _ref39$events = _ref39.events,
      events = _ref39$events === void 0 ? [] : _ref39$events,
      _ref39$liveMetrics = _ref39.liveMetrics,
      liveMetrics = _ref39$liveMetrics === void 0 ? {} : _ref39$liveMetrics,
      _ref39$ambulances = _ref39.ambulances,
      ambulances = _ref39$ambulances === void 0 ? [] : _ref39$ambulances,
      _ref39$aiInsight = _ref39.aiInsight,
      aiInsight = _ref39$aiInsight === void 0 ? {} : _ref39$aiInsight,
      _ref39$systemIntellig = _ref39.systemIntelligence,
      systemIntelligence = _ref39$systemIntellig === void 0 ? {} : _ref39$systemIntellig,
      _ref39$conflictState = _ref39.conflictState,
      conflictState = _ref39$conflictState === void 0 ? {} : _ref39$conflictState;
    var getEventBadge = function getEventBadge(type) {
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
    var getEventIcon = function getEventIcon(type) {
      switch (type) {
        case 'alert':
          return /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
            className: "w-3.5 h-3.5 text-red-400"
          });
        case 'priority':
        case 'success':
          return /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
            className: "w-3.5 h-3.5 text-emerald-400"
          });
        default:
          return /*#__PURE__*/React.createElement(Icons.Radio, {
            className: "w-3.5 h-3.5 text-slate-400"
          });
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full space-y-4 overflow-y-auto pr-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between border-b border-slate-800/80 pb-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.Cpu, {
      className: "w-4 h-4 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono font-bold text-white uppercase tracking-wider"
    }, "SYSTEM INTELLIGENCE")), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold"
    }, "LIVE ENGINE")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "TRAFFIC ANALYSIS"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3 h-3 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Congestion detected"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "ROUTE ANALYSIS"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold flex items-center space-x-1 ".concat(aiInsight.applied ? 'text-emerald-400' : 'text-slate-300')
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3 h-3 ".concat(aiInsight.applied ? 'text-emerald-400' : 'text-slate-500')
    }), /*#__PURE__*/React.createElement("span", null, aiInsight.applied ? 'Alternate Route Applied' : 'Alternate route evaluated'))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "CONFLICT ANALYSIS"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3 h-3 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Multi-ambulance conflict detected"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "SEQUENCE"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3 h-3 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Priority order generated"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "CORRIDOR"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3 h-3 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Emergency corridor simulated"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "HOSPITAL ETA"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3 h-3 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "ETA updated"))))), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/20 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-4 h-4 text-cyan-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono font-bold text-white uppercase tracking-wide"
    }, "AI TRAFFIC INSIGHT")), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold"
    }, "SIMULATION ESTIMATE")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-300 leading-relaxed space-y-1 font-sans"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-white"
    }, "\"High traffic density detected on Anna Salai North Link.\""), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-xs font-mono pt-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Predicted delay:"), /*#__PURE__*/React.createElement("span", {
      className: "text-red-400 font-bold"
    }, "+2.4 min")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Alternative route:"), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-300 font-bold"
    }, "Route B")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Estimated improvement:"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "2m 18s"))), /*#__PURE__*/React.createElement("div", {
      className: "pt-2 border-t border-slate-800 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono text-slate-400"
    }, "SIMULATION ESTIMATE"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onApplyRoute();
      },
      disabled: aiInsight.applied,
      className: "px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center space-x-1.5 ".concat(aiInsight.applied ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20')
    }, aiInsight.applied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "Alternate Applied")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.Navigation, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATE ALTERNATE ROUTE"))))), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-2xl border border-slate-800 bg-slate-950/90 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between border-b border-slate-800/80 pb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono font-bold text-white uppercase tracking-wider"
    }, "BEFORE vs AFTER COMPARISON"), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800"
    }, "SIMULATION RESULT")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-900/80 border border-red-500/20 space-y-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-red-400 uppercase"
    }, "WITHOUT resQClear"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px] font-sans"
    }, "\u2022 Traffic congestion"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px] font-sans"
    }, "\u2022 Intersection waiting"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px] font-sans"
    }, "\u2022 Uncoordinated emergency movement"), /*#__PURE__*/React.createElement("div", {
      className: "pt-1 border-t border-slate-800/80 flex justify-between text-[11px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "Baseline ETA:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-red-400"
    }, "08:34"))), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-emerald-400 uppercase"
    }, "WITH resQClear"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-200 text-[11px] font-sans"
    }, "\u2022 Coordinated sequence"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-200 text-[11px] font-sans"
    }, "\u2022 Emergency corridor"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-200 text-[11px] font-sans"
    }, "\u2022 Reduced simulated delay"), /*#__PURE__*/React.createElement("div", {
      className: "pt-1 border-t border-slate-800/80 flex justify-between text-[11px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "Optimized ETA:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, "06:16")))), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "ESTIMATED DIFFERENCE:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400 text-sm"
    }, "02:18 min saved"))), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-2xl border border-slate-800 flex-1 flex flex-col min-h-[300px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pb-3 mb-3 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-red-500 animate-ping"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-sm text-white"
    }, "Event Timeline")), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono text-slate-400"
    }, "LIVE CHRONOLOGY")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2.5 overflow-y-auto flex-1 max-h-[360px] pr-1 font-mono"
    }, events.map(function (evt) {
      return /*#__PURE__*/React.createElement("div", {
        key: evt.id,
        className: "p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start space-x-2.5 text-xs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-0.5"
      }, getEventIcon(evt.type)), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-0.5"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] text-slate-400 font-bold"
      }, evt.time), /*#__PURE__*/React.createElement("span", {
        className: "px-1.5 py-0.2 rounded text-[9px] border ".concat(getEventBadge(evt.type))
      }, evt.type.toUpperCase())), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-200 text-xs leading-snug font-sans"
      }, evt.message)));
    }))));
  }
  window.RightStatusPanel = RightStatusPanel;

  /* ===== END FILE: RightStatusPanel.js ===== */

  /* ===== START FILE: AmbulanceFleetView.js ===== */
  // resQClear Ambulance Fleet Management Cards View
  // Enterprise Telemetry Cards with Dynamic Live Telemetry & Patient Triage
  // [React hooks initialized at top level]

  function AmbulanceFleetView(_ref40) {
    var _ambulances$;
    var simState = _ref40.simState,
      onTriggerAmbulance = _ref40.onTriggerAmbulance;
    var _ref41 = simState || {},
      _ref41$ambulances = _ref41.ambulances,
      ambulances = _ref41$ambulances === void 0 ? [] : _ref41$ambulances;
    var _useState11 = useState(((_ambulances$ = ambulances[0]) === null || _ambulances$ === void 0 ? void 0 : _ambulances$.id) || 'AMB-104'),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedAmb = _useState12[0],
      setSelectedAmb = _useState12[1];
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Active Emergency Fleet Telemetry"), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold"
    }, "SIMULATION TELEMETRY")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "Emergency severity provided by authorized emergency personnel \u2022 Traffic coordination priority")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
    }, "FLEET IN SERVICE: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, ambulances.length)), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 font-bold"
    }, "2 CRITICAL ALS ACTIVE"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    }, ambulances.map(function (amb) {
      var isSelected = selectedAmb === amb.id;
      var isCritical = amb.status === 'CRITICAL';
      return /*#__PURE__*/React.createElement("div", {
        key: amb.id,
        onClick: function onClick() {
          return setSelectedAmb(amb.id);
        },
        className: "glass-panel rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ".concat(isSelected ? 'border-emerald-500 shadow-xl shadow-emerald-950/40 bg-slate-900/95' : 'border-slate-800 hover:border-slate-700 bg-slate-950/80')
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-11 h-11 rounded-xl flex items-center justify-center ".concat(isCritical ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40')
      }, /*#__PURE__*/React.createElement(Icons.Ambulance, {
        className: "w-6 h-6"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-2"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-extrabold text-lg text-white font-mono"
      }, amb.id), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300"
      }, amb.name)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-red-400 font-mono font-bold mt-0.5"
      }, amb.subStatus || amb.status))), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: "px-2.5 py-1 rounded text-xs font-mono font-bold border ".concat(isCritical ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40')
      }, amb.status), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-mono text-emerald-400 font-bold mt-1"
      }, "PRIORITY 0", amb.priorityRank))), /*#__PURE__*/React.createElement("div", {
        className: "p-2 rounded-lg bg-slate-950 border border-slate-800 mb-3 text-xs font-mono flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 text-[10px]"
      }, "CURRENT STATE:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-bold text-[11px]"
      }, amb.currentState || 'IN TRANSIT')), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-2 rounded-lg bg-slate-950 border border-slate-800/80"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "SPEED:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-bold text-sm"
      }, amb.speed, " ", amb.speedUnit)), /*#__PURE__*/React.createElement("div", {
        className: "p-2 rounded-lg bg-slate-950 border border-slate-800/80"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "TOTAL DISTANCE:"), /*#__PURE__*/React.createElement("span", {
        className: "text-white font-bold text-sm"
      }, amb.distance)), /*#__PURE__*/React.createElement("div", {
        className: "p-2 rounded-lg bg-slate-950 border border-slate-800/80"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "HOSPITAL ETA:"), /*#__PURE__*/React.createElement("span", {
        className: "text-white font-bold text-sm"
      }, amb.eta, " min")), /*#__PURE__*/React.createElement("div", {
        className: "p-2 rounded-lg bg-slate-950 border border-slate-800/80"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "INTERSECTION ETA:"), /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-400 font-bold text-sm"
      }, amb.currentIntersectionEta || 43, " sec"))), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2 text-xs font-mono mb-4 text-slate-300"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Current Location:"), /*#__PURE__*/React.createElement("span", {
        className: "text-white font-medium"
      }, amb.origin)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Destination:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-bold"
      }, amb.destination)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Route Status:"), /*#__PURE__*/React.createElement("span", {
        className: "text-teal-300 font-bold"
      }, amb.routeStatus)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Paramedic Lead:"), /*#__PURE__*/React.createElement("span", {
        className: "text-slate-200"
      }, amb.driver))), amb.patient && /*#__PURE__*/React.createElement("div", {
        className: "p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-1"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 font-mono text-[10px]"
      }, "TRIAGE CONDITION:"), /*#__PURE__*/React.createElement("span", {
        className: "text-red-400 font-mono font-bold text-[10px]"
      }, amb.patient.age)), /*#__PURE__*/React.createElement("div", {
        className: "font-semibold text-white mb-2 font-sans"
      }, amb.patient.condition), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-900 pt-1.5"
      }, /*#__PURE__*/React.createElement("span", null, "HR: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-white"
      }, amb.patient.vitals.hr), " bpm"), /*#__PURE__*/React.createElement("span", null, "BP: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-white"
      }, amb.patient.vitals.bp)), /*#__PURE__*/React.createElement("span", null, "SpO2: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-emerald-400"
      }, amb.patient.vitals.spo2, "%"))))), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] font-mono text-slate-400"
      }, "BATTERY: ", amb.batteryCharge, " \u2022 O2: ", amb.oxygenLevel), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick(e) {
          e.stopPropagation();
          onTriggerAmbulance(amb.id);
        },
        className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 transition-all"
      }, "Locate on Map")));
    })));
  }
  window.AmbulanceFleetView = AmbulanceFleetView;

  /* ===== END FILE: AmbulanceFleetView.js ===== */

  /* ===== START FILE: HospitalView.js ===== */
  // resQClear Hospital Emergency Receiving & Trauma Readiness Dashboard
  // Synchronized ER Bay Notifications & Bed Capacity Telemetry
  // [React hooks initialized at top level]

  function HospitalView(_ref42) {
    var simState = _ref42.simState;
    var _ref43 = simState || {},
      _ref43$hospitals = _ref43.hospitals,
      hospitals = _ref43$hospitals === void 0 ? [] : _ref43$hospitals,
      _ref43$ambulances = _ref43.ambulances,
      ambulances = _ref43$ambulances === void 0 ? [] : _ref43$ambulances;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Hospital Emergency Receiving Hubs"), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold"
    }, "SIMULATION HUBS")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "Simulated ambulance arrival preparation \u2022 Telemetry synchronized for ER trauma bay readiness")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
    }, "RECEIVING HOSPITALS: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, hospitals.length)), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold"
    }, "TRAUMA BAYS PREPARED"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
    }, hospitals.map(function (hosp) {
      var incomingAmb = ambulances.find(function (a) {
        return a.id === hosp.assignedAmbulance;
      }) || {};
      var isReady = hosp.erStatus === 'READY';
      return /*#__PURE__*/React.createElement("div", {
        key: hosp.id,
        className: "glass-panel rounded-2xl p-6 border border-slate-800 bg-slate-950/90 flex flex-col justify-between"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400"
      }, /*#__PURE__*/React.createElement(Icons.Hospital, {
        className: "w-6 h-6"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        className: "font-extrabold text-base text-white"
      }, hosp.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 font-mono"
      }, hosp.location, " \u2022 ", hosp.traumaLevel)))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-5 text-xs font-mono"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "ER STATUS:"), /*#__PURE__*/React.createElement("span", {
        className: "px-2.5 py-1 rounded font-bold border ".concat(isReady ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40')
      }, isReady ? 'READY' : 'STANDBY')), /*#__PURE__*/React.createElement("div", {
        className: "p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/25 mb-4 space-y-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between text-xs font-mono"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 uppercase"
      }, "INCOMING TRANSPORT:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-extrabold text-sm"
      }, hosp.assignedAmbulance)), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-3 pt-1"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-mono text-slate-400 uppercase"
      }, "ETA:"), /*#__PURE__*/React.createElement("div", {
        className: "text-2xl font-extrabold text-white font-mono"
      }, incomingAmb.eta || hosp.eta, " ", /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-normal text-slate-400"
      }, "min"))), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-mono text-slate-400 uppercase"
      }, "EMERGENCY:"), /*#__PURE__*/React.createElement("span", {
        className: "inline-block mt-1 px-2.5 py-1 rounded text-[11px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold"
      }, incomingAmb.status || 'CRITICAL'))), incomingAmb.patient && /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-slate-300 pt-2 border-t border-slate-800/80 font-sans"
      }, /*#__PURE__*/React.createElement("strong", null, "Triage:"), " ", incomingAmb.patient.condition, " (", incomingAmb.patient.age, ")")), /*#__PURE__*/React.createElement("div", {
        className: "p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 space-y-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-mono font-bold text-white uppercase"
      }, "AMBULANCE ARRIVAL PREPARATION"), /*#__PURE__*/React.createElement("span", {
        className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping"
      })), /*#__PURE__*/React.createElement("div", {
        className: "p-2.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center space-x-2"
      }, /*#__PURE__*/React.createElement(Icons.Bell, {
        className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0"
      }), /*#__PURE__*/React.createElement("span", null, "\"Emergency arrival notification generated.\""))), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2 mb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-xs font-mono font-bold text-slate-300 uppercase"
      }, "Hospital Readiness Checklist:"), hosp.readiness.map(function (item, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center space-x-2 text-xs text-slate-300"
        }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
          className: "w-3.5 h-3.5 text-emerald-400 flex-shrink-0"
        }), /*#__PURE__*/React.createElement("span", null, item.item));
      }))), /*#__PURE__*/React.createElement("div", {
        className: "pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex flex-col space-y-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "block text-[10px]"
      }, "LEAD PHYSICIAN:"), /*#__PURE__*/React.createElement("strong", {
        className: "text-slate-200"
      }, hosp.leadDoctor)), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: "block text-[10px]"
      }, "ICU BEDS FREE:"), /*#__PURE__*/React.createElement("strong", {
        className: "text-emerald-400"
      }, hosp.icuFree, " Available"))), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] text-slate-500 text-center pt-1 border-t border-slate-900"
      }, "Simulated hospital readiness \u2022 Not connected to real hospital ER infrastructure")));
    })));
  }
  window.HospitalView = HospitalView;

  /* ===== END FILE: HospitalView.js ===== */

  /* ===== START FILE: AnalyticsView.js ===== */
  // resQClear Traffic Analytics & Performance Metrics Component
  // Enterprise Visualization with Response Times, Wait Times, Delay Reductions & Corridor Stats
  // [React hooks initialized at top level]

  function AnalyticsView(_ref44) {
    var simState = _ref44.simState;
    var _ref45 = simState || {},
      _ref45$analyticsData = _ref45.analyticsData,
      analyticsData = _ref45$analyticsData === void 0 ? RESQCLEAR_DATA.analyticsData : _ref45$analyticsData,
      _ref45$demoMetrics = _ref45.demoMetrics,
      demoMetrics = _ref45$demoMetrics === void 0 ? RESQCLEAR_DATA.demoMetrics : _ref45$demoMetrics;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Emergency Traffic Analytics & Corridors"), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold"
    }, "DEMO DATA")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "Simulated demonstration analytics \u2022 Empirical corridor performance modeling")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
    }, "TOTAL SIMULATED RUNS: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, demoMetrics.totalSimulatedTrips || 1248)), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold"
    }, "CONFIDENCE: ", demoMetrics.decisionConfidence || '96%'))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Emergency Response Time"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-emerald-400 mt-1"
    }, "06:14 min"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-0.5"
    }, "Avg per critical route")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Intersection Waiting Time"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-cyan-400 mt-1"
    }, "4.2 sec"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-0.5"
    }, "Reduced from 48s baseline")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Traffic Congestion Delay"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-teal-300 mt-1"
    }, "-32.4%"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-0.5"
    }, "2m 18s avoided")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Route Efficiency"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-purple-400 mt-1"
    }, "+33.8%"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-0.5"
    }, "Corridor flow boost")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Corridor Activations"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-emerald-400 mt-1"
    }, "14 Nodes"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-0.5"
    }, "Dynamic phase overrides")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Multi-Ambulance Conflicts"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-amber-400 mt-1"
    }, "12 Events"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-0.5"
    }, "Zero cross-axis deadlock"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-2 mb-6"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-white"
    }, "Emergency Response Time Comparison (Minutes)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono"
    }, "Hourly transit duration: Traditional siren baseline vs resQClear AI corridor")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-4 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded-full bg-red-400/80"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "Traditional Siren Baseline")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded-full bg-emerald-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "resQClear AI Corridor")))), /*#__PURE__*/React.createElement("div", {
      className: "h-64 w-full relative"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "w-full h-full",
      viewBox: "0 0 700 220",
      preserveAspectRatio: "none"
    }, [0, 50, 100, 150, 200].map(function (y, i) {
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("line", {
        x1: "40",
        y1: y,
        x2: "680",
        y2: y,
        stroke: "#1e293b",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "15",
        y: y + 4,
        fill: "#64748b",
        fontSize: "10",
        fontFamily: "monospace"
      }, 30 - i * 6, "m"));
    }), analyticsData.hourlyData.map(function (item, idx) {
      var x = 70 + idx * 65;
      var hBase = item.traditional / 30 * 180;
      var yBase = 200 - hBase;
      var valResQ = item.resQClear || 10;
      var hResQ = valResQ / 30 * 180;
      var yResQ = 200 - hResQ;
      return /*#__PURE__*/React.createElement("g", {
        key: idx
      }, /*#__PURE__*/React.createElement("rect", {
        x: x - 14,
        y: yBase,
        width: "12",
        height: hBase,
        rx: "2",
        fill: "#ef4444",
        opacity: "0.45"
      }), /*#__PURE__*/React.createElement("rect", {
        x: x,
        y: yResQ,
        width: "12",
        height: hResQ,
        rx: "2",
        fill: "#10b981"
      }), /*#__PURE__*/React.createElement("text", {
        x: x - 2,
        y: "215",
        fill: "#94a3b8",
        fontSize: "10",
        fontFamily: "monospace",
        textAnchor: "middle"
      }, item.time));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", null, "Peak Hour Avoidance: ", /*#__PURE__*/React.createElement("strong", null, "11.3 min delay avoided during 18:00 rush hour")), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "Corridor Efficiency Boost: +33.8%"))), /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-white mb-1"
    }, "Delay Source Distribution"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mb-6"
    }, "Before vs After AI Corridor Activation"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, analyticsData.delaySources.map(function (source, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "space-y-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between text-xs font-mono"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-300"
      }, source.category), /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, source.before, " \u2192 ", /*#__PURE__*/React.createElement("strong", {
        className: "text-emerald-400"
      }, source.after))), /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 h-2 rounded-full overflow-hidden flex border border-slate-800"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-red-500/50 h-full",
        style: {
          width: source.before
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "bg-emerald-400 h-full",
        style: {
          width: source.after
        }
      })));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center"
    }, "All analytics shown are simulated demonstration data."))));
  }
  window.AnalyticsView = AnalyticsView;

  /* ===== END FILE: AnalyticsView.js ===== */

  /* ===== START FILE: TrafficNetworkView.js ===== */
  // resQClear Traffic Network & Intersections Control View
  // Network Status, 6 Intersections, Simulated Signals, and Congestion Overview
  // [React hooks initialized at top level]

  function TrafficNetworkView(_ref46) {
    var simState = _ref46.simState;
    var _ref47 = simState || {},
      _ref47$intersections = _ref47.intersections,
      intersections = _ref47$intersections === void 0 ? [] : _ref47$intersections,
      _ref47$conflictState = _ref47.conflictState,
      conflictState = _ref47$conflictState === void 0 ? {} : _ref47$conflictState,
      _ref47$networkStatus = _ref47.networkStatus,
      networkStatus = _ref47$networkStatus === void 0 ? {} : _ref47$networkStatus,
      _ref47$congestionZone = _ref47.congestionZones,
      congestionZones = _ref47$congestionZone === void 0 ? [] : _ref47$congestionZone,
      _ref47$ambulances = _ref47.ambulances,
      ambulances = _ref47$ambulances === void 0 ? [] : _ref47$ambulances;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Smart Traffic Signal Network (Simulated)"), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold"
    }, "SIMULATED SIGNAL CONTROL")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "Simulated signal phase timing & emergency green-wave corridor transitions")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
    }, "TOTAL NODES: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, intersections.length)), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold"
    }, "60 FPS DIGITAL TWIN"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-extrabold text-white"
    }, networkStatus.intersectionsOnline || 6), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-emerald-400 font-bold mt-0.5"
    }, "INTERSECTIONS ONLINE"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-1"
    }, "V2X Grid Connected")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-extrabold text-white"
    }, networkStatus.ambulancesTracked || 3), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-cyan-400 font-bold mt-0.5"
    }, "AMBULANCES TRACKED"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-1"
    }, "2 Critical ALS + 1 Urgent")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-extrabold text-white"
    }, networkStatus.hospitalsAvailable || 3), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-teal-300 font-bold mt-0.5"
    }, "HOSPITALS AVAILABLE"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-1"
    }, "Trauma Bays Prepared")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-extrabold text-amber-400"
    }, congestionZones.filter(function (z) {
      return z.active;
    }).length), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-amber-400 font-bold mt-0.5"
    }, "CONGESTION ZONES DETECTED"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-1"
    }, "Anna Salai & Usman Bottlenecks")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-extrabold ".concat(networkStatus.activeConflicts > 0 ? 'text-red-400 animate-pulse' : 'text-emerald-400')
    }, networkStatus.activeConflicts || 0), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-red-400 font-bold mt-0.5"
    }, "ACTIVE CONFLICT"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-500 mt-1"
    }, networkStatus.activeConflicts > 0 ? 'INT-04 Arbitration Active' : 'All Clear'))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    }, intersections.map(function (inter) {
      var isConflictNode = inter.id === 'int-4';
      var hasEmergencyPriority = inter.priorityVehicle !== null || isConflictNode && conflictState.stage && conflictState.stage !== 'IDLE';
      return /*#__PURE__*/React.createElement("div", {
        key: inter.id,
        className: "glass-panel rounded-2xl p-6 border transition-all ".concat(isConflictNode && hasEmergencyPriority ? 'border-red-500/80 bg-red-950/20 shadow-xl shadow-red-950/40' : 'border-slate-800 bg-slate-950/80')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(isConflictNode ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30')
      }, /*#__PURE__*/React.createElement(Icons.TrafficLight, {
        className: "w-5 h-5"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        className: "font-extrabold text-base text-white"
      }, inter.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 font-mono"
      }, inter.code || inter.id.toUpperCase(), " \u2022 Simulated Coordinates: (", inter.x, ", ", inter.y, ")")))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px] mb-1"
      }, "NORTH-SOUTH AXIS:"), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-3 h-3 rounded-full ".concat(inter.northSouth === 'GREEN' ? 'traffic-lamp active-green' : inter.northSouth === 'YELLOW' ? 'traffic-lamp active-yellow' : 'traffic-lamp active-red')
      }), /*#__PURE__*/React.createElement("strong", {
        className: "text-white"
      }, inter.northSouth))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px] mb-1"
      }, "EAST-WEST AXIS:"), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-3 h-3 rounded-full ".concat(inter.eastWest === 'GREEN' ? 'traffic-lamp active-green' : inter.eastWest === 'YELLOW' ? 'traffic-lamp active-yellow' : 'traffic-lamp active-red')
      }), /*#__PURE__*/React.createElement("strong", {
        className: "text-white"
      }, inter.eastWest)))), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2 text-xs font-mono mb-4 text-slate-300"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Current Phase Timer:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-bold"
      }, Math.max(1, Math.round(inter.timer || 12)), " sec")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Emergency Override:"), /*#__PURE__*/React.createElement("span", {
        className: hasEmergencyPriority ? 'text-red-400 font-bold animate-pulse' : 'text-slate-400'
      }, hasEmergencyPriority ? "ACTIVE (".concat(inter.priorityVehicle || 'CONFLICT ARBITRATION', ")") : 'STANDBY')), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Simulated Signal Mode:"), /*#__PURE__*/React.createElement("span", {
        className: "text-teal-300 font-medium"
      }, inter.modeLabel || 'NORMAL CYCLE'))), /*#__PURE__*/React.createElement("div", {
        className: "pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400"
      }, /*#__PURE__*/React.createElement("span", null, "SIMULATED SIGNAL CONTROL: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-emerald-400"
      }, "OK")), /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
      }, "LATENCY: 18ms")));
    })));
  }
  window.TrafficNetworkView = TrafficNetworkView;

  /* ===== END FILE: TrafficNetworkView.js ===== */

  /* ===== START FILE: SettingsView.js ===== */
  // resQClear Settings & Simulation Parameters View
  // [React hooks initialized at top level]

  function SettingsView(_ref48) {
    var simState = _ref48.simState,
      onReset = _ref48.onReset;
    var _useState13 = useState('chennai'),
      _useState14 = _slicedToArray(_useState13, 2),
      cityGrid = _useState14[0],
      setCityGrid = _useState14[1];
    var _useState15 = useState(25),
      _useState16 = _slicedToArray(_useState15, 2),
      v2xLatency = _useState16[0],
      setV2xLatency = _useState16[1];
    var _useState17 = useState(300),
      _useState18 = _slicedToArray(_useState17, 2),
      conflictHorizon = _useState18[0],
      setConflictHorizon = _useState18[1];
    var _useState19 = useState(15),
      _useState20 = _slicedToArray(_useState19, 2),
      greenWaveLead = _useState20[0],
      setGreenWaveLead = _useState20[1];
    var _useState21 = useState(true),
      _useState22 = _slicedToArray(_useState21, 2),
      autoReroute = _useState22[0],
      setAutoReroute = _useState22[1];
    return /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Simulation Engine & V2X Parameters"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-400"
    }, "Configure simulated smart-city parameters, mesh latency, and algorithmic thresholds.")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-6 rounded-2xl border border-slate-800 space-y-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-white flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.Compass, {
      className: "w-5 h-5 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Target Urban Simulation Grid")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
    }, [{
      id: 'chennai',
      name: 'Chennai Central Grid',
      desc: 'Anna Salai & Poonamallee corridors (Active)',
      active: true
    }, {
      id: 'bengaluru',
      name: 'Bengaluru Silk Board Grid',
      desc: 'High-density Outer Ring Road test scenario',
      active: false
    }, {
      id: 'mumbai',
      name: 'Mumbai Western Express Grid',
      desc: 'Flyover & coastal arterial mesh modeling',
      active: false
    }].map(function (grid) {
      return /*#__PURE__*/React.createElement("button", {
        key: grid.id,
        onClick: function onClick() {
          return setCityGrid(grid.id);
        },
        className: "p-4 rounded-xl border text-left transition-all ".concat(cityGrid === grid.id ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-lg' : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200')
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-bold text-sm text-white"
      }, grid.name), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-slate-400 mt-1"
      }, grid.desc));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-6 rounded-2xl border border-slate-800 space-y-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-white flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.Cpu, {
      className: "w-5 h-5 text-cyan-400"
    }), /*#__PURE__*/React.createElement("span", null, "AI Conflict Engine Thresholds")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300 mb-2"
    }, /*#__PURE__*/React.createElement("span", null, "Conflict Detection Radius (Horizon):"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, conflictHorizon, " meters")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "100",
      max: "600",
      step: "50",
      value: conflictHorizon,
      onChange: function onChange(e) {
        return setConflictHorizon(Number(e.target.value));
      },
      className: "w-full accent-emerald-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 mt-1 block"
    }, "Distance at which converging emergency trajectories trigger arbitration")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300 mb-2"
    }, /*#__PURE__*/React.createElement("span", null, "Green Wave Pre-emption Lead Time:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, greenWaveLead, " seconds")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "5",
      max: "30",
      step: "1",
      value: greenWaveLead,
      onChange: function onChange(e) {
        return setGreenWaveLead(Number(e.target.value));
      },
      className: "w-full accent-emerald-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 mt-1 block"
    }, "Seconds before ambulance arrival to transition signals through Yellow to Green")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300 mb-2"
    }, /*#__PURE__*/React.createElement("span", null, "Simulated V2X Mesh Latency:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-teal-300"
    }, v2xLatency, " ms")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "5",
      max: "100",
      step: "5",
      value: v2xLatency,
      onChange: function onChange(e) {
        return setV2xLatency(Number(e.target.value));
      },
      className: "w-full accent-teal-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 mt-1 block"
    }, "Simulated latency for edge node packet transmission")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 mb-2"
    }, "Dynamic Congestion Auto-Bypass:"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setAutoReroute(!autoReroute);
      },
      className: "p-3 rounded-xl border font-bold flex items-center justify-between ".concat(autoReroute ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-slate-900 text-slate-400 border-slate-800')
    }, /*#__PURE__*/React.createElement("span", null, autoReroute ? 'ENABLED (AUTOMATIC)' : 'MANUAL CONFIRMATION'), /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-sm text-white"
    }, "Reset Simulation Database"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 mt-0.5"
    }, "Restore all vehicle positions, traffic light cycles, and telemetry caches.")), /*#__PURE__*/React.createElement("button", {
      onClick: onReset,
      className: "px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-mono font-bold transition-all"
    }, "Reset All State"))));
  }
  window.SettingsView = SettingsView;

  /* ===== END FILE: SettingsView.js ===== */

  /* ===== START FILE: DemoControls.js ===== */
  // resQClear Dedicated Simulation Demo Controls Bar
  // Enterprise Control Room Actions: Playback, Hero Scenario, Speed, and Event Injections
  // [React hooks initialized at top level]

  function DemoControls(_ref49) {
    var simState = _ref49.simState,
      onRunScenario = _ref49.onRunScenario,
      onStart = _ref49.onStart,
      onPause = _ref49.onPause,
      onReset = _ref49.onReset,
      onTriggerA = _ref49.onTriggerA,
      onTriggerB = _ref49.onTriggerB,
      onTriggerBoth = _ref49.onTriggerBoth,
      onCreateJam = _ref49.onCreateJam,
      onClearJam = _ref49.onClearJam,
      onSetSpeed = _ref49.onSetSpeed,
      onToggleSound = _ref49.onToggleSound,
      soundEnabled = _ref49.soundEnabled;
    var _ref50 = simState || {},
      isRunning = _ref50.isRunning,
      speedMultiplier = _ref50.speedMultiplier,
      scenarioRunning = _ref50.scenarioRunning,
      scenarioStep = _ref50.scenarioStep;
    return /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl flex flex-wrap items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onRunScenario,
      className: "relative px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm font-mono flex items-center space-x-2 transition-all shadow-xl ".concat(scenarioRunning ? 'bg-gradient-to-r from-red-500 to-emerald-500 text-slate-950 ring-2 ring-emerald-400 animate-pulse' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30 hover:scale-105')
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-4 h-4 text-slate-950"
    }), /*#__PURE__*/React.createElement("span", null, "RUN EMERGENCY SCENARIO")), scenarioRunning && /*#__PURE__*/React.createElement("div", {
      className: "hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "STEP:"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, scenarioStep || 1, " / 16"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, isRunning ? /*#__PURE__*/React.createElement("button", {
      onClick: onPause,
      className: "p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 hover:border-slate-600 transition-all",
      title: "Pause Simulation"
    }, /*#__PURE__*/React.createElement(Icons.Pause, {
      className: "w-4 h-4"
    })) : /*#__PURE__*/React.createElement("button", {
      onClick: onStart,
      className: "p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 hover:border-slate-600 transition-all",
      title: "Start Simulation"
    }, /*#__PURE__*/React.createElement(Icons.Play, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: onReset,
      className: "p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 transition-all",
      title: "Reset Simulation"
    }, /*#__PURE__*/React.createElement(Icons.RotateCcw, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px] font-mono"
    }, [1.0, 1.5, 2.0, 4.0].map(function (spd) {
      return /*#__PURE__*/React.createElement("button", {
        key: spd,
        onClick: function onClick() {
          return onSetSpeed(spd);
        },
        className: "px-2 py-0.5 rounded-lg transition-all ".concat(speedMultiplier === spd ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white')
      }, spd, "x");
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center space-x-2 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onTriggerBoth,
      className: "px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-all font-semibold flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
      className: "w-3.5 h-3.5 text-red-400"
    }), /*#__PURE__*/React.createElement("span", null, "Both Emergencies")), /*#__PURE__*/React.createElement("button", {
      onClick: onTriggerA,
      className: "hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
    }, "Ambulance A"), /*#__PURE__*/React.createElement("button", {
      onClick: onTriggerB,
      className: "hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
    }, "Ambulance B"), /*#__PURE__*/React.createElement("button", {
      onClick: onCreateJam,
      className: "px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all",
      title: "Inject Traffic Jam"
    }, "Traffic Jam"), /*#__PURE__*/React.createElement("button", {
      onClick: onClearJam,
      className: "px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700 transition-all",
      title: "Clear Traffic Jam"
    }, "Clear Jam"), /*#__PURE__*/React.createElement("button", {
      onClick: onToggleSound,
      className: "p-1.5 rounded-lg border transition-all ".concat(soundEnabled ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-slate-900 text-slate-500 border-slate-800'),
      title: soundEnabled ? 'Mute Radio Sound FX' : 'Enable Radio Sound FX'
    }, soundEnabled ? /*#__PURE__*/React.createElement(Icons.Volume2, {
      className: "w-4 h-4"
    }) : /*#__PURE__*/React.createElement(Icons.VolumeX, {
      className: "w-4 h-4"
    }))));
  }
  window.DemoControls = DemoControls;

  /* ===== END FILE: DemoControls.js ===== */

  /* ===== START FILE: PresentationMode.js ===== */
  // resQClear Startup Presentation & Pitch Mode Component
  // Cinematic, High-Density Operations Deck for Investors & Municipal Stakeholders
  // [React hooks initialized at top level]

  function PresentationMode(_ref51) {
    var simState = _ref51.simState,
      onExit = _ref51.onExit,
      onRunScenario = _ref51.onRunScenario;
    var _ref52 = simState || {},
      _ref52$conflictState = _ref52.conflictState,
      conflictState = _ref52$conflictState === void 0 ? {} : _ref52$conflictState,
      _ref52$liveMetrics = _ref52.liveMetrics,
      liveMetrics = _ref52$liveMetrics === void 0 ? {} : _ref52$liveMetrics,
      _ref52$ambulances = _ref52.ambulances,
      ambulances = _ref52$ambulances === void 0 ? [] : _ref52$ambulances,
      _ref52$events = _ref52.events,
      events = _ref52$events === void 0 ? [] : _ref52$events,
      _ref52$intersections = _ref52.intersections,
      intersections = _ref52$intersections === void 0 ? [] : _ref52$intersections;
    var _useState23 = useState(0),
      _useState24 = _slicedToArray(_useState23, 2),
      currentSlide = _useState24[0],
      setCurrentSlide = _useState24[1];
    var ambA = ambulances.find(function (a) {
      return a.id === 'AMB-104';
    }) || {};
    var ambB = ambulances.find(function (a) {
      return a.id === 'AMB-208';
    }) || {};
    var int4 = intersections.find(function (i) {
      return i.id === 'int-4';
    }) || {};
    var narrativeSteps = [{
      id: 1,
      tag: 'STEP 01',
      title: 'NORMAL TRAFFIC ACTIVE',
      desc: 'Urban grid operates under standard cyclic signal phasing across all 6 intersections.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 2,
      tag: 'STEP 02',
      title: 'AMBULANCE A DISPATCHED (CARDIAC)',
      desc: 'AMB-104 dispatched from Anna Nagar heading toward Government Hospital under Critical STEMI triage.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    }, {
      id: 3,
      tag: 'STEP 03',
      title: 'AMBULANCE B DISPATCHED (POLYTRAUMA)',
      desc: 'AMB-208 dispatched simultaneously from T. Nagar heading toward Apollo Hospital.',
      icon: Icons.Ambulance,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    }, {
      id: 4,
      tag: 'STEP 04',
      title: 'CROSS-AXIS CONFLICT DETECTED',
      desc: 'resQClear detects both critical ALS units converging on INT-04 simultaneously (43s vs 50s ETA).',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    }, {
      id: 5,
      tag: 'STEP 05',
      title: 'AI-ASSISTED SEQUENCE GENERATED',
      desc: 'Scoring model evaluates ETA, approach vectors, and occupancy: Priority 01 granted to AMB-104 (7s earlier).',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    }, {
      id: 6,
      tag: 'STEP 06',
      title: 'SIMULATED GREEN CORRIDOR: AMB-104',
      desc: 'Emergency green wave locked for North link. AMB-104 proceeds through INT-04 with zero deceleration.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 7,
      tag: 'STEP 07',
      title: 'AMB-104 INTERSECTION CLEARED',
      desc: 'AMB-104 clears conflict zone. System immediately transitions signal phase to secondary corridor.',
      icon: Icons.CheckCircle2,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    }, {
      id: 8,
      tag: 'STEP 08',
      title: 'SIMULATED GREEN CORRIDOR: AMB-208',
      desc: 'South corridor green wave active. AMB-208 proceeds through INT-04 smoothly without complete stop.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 9,
      tag: 'STEP 09',
      title: 'AMB-208 INTERSECTION CLEARED',
      desc: 'Secondary critical vehicle safely cleared without cross-axis deadlock or emergency braking.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 10,
      tag: 'STEP 10',
      title: 'CONFLICT RESOLVED & CYCLES RESTORED',
      desc: 'Both emergency routes coordinated successfully. Simulated delay avoided: 2m 18s.',
      icon: Icons.ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }];

    // Map simulation state to active narrative slide
    useEffect(function () {
      if (conflictState.stage === 'DETECTING') setCurrentSlide(3);else if (conflictState.stage === 'ANALYZING') setCurrentSlide(4);else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(5);else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(6);else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(7);else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(9);
    }, [conflictState.stage]);
    var activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];
    return /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-300 overflow-y-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pb-3 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, null), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline-block px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold"
    }, "PRESENTATION MODE \u2022 PITCH DECK")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setCurrentSlide(0);
        onRunScenario();
      },
      className: "px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center space-x-2 transition-all shadow-lg shadow-emerald-500/20"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "Launch Automated Scenario")), /*#__PURE__*/React.createElement("button", {
      onClick: onExit,
      className: "px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-all"
    }, "Exit Presentation"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-7 h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
    }, /*#__PURE__*/React.createElement(LiveMap, {
      simState: simState
    })), /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-5 space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full text-xs font-mono font-bold border ".concat(activeStep.border, " ").concat(activeStep.color, " bg-slate-950")
    }, activeStep.tag, " \u2022 STEP ", currentSlide + 1, " OF 10"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono text-slate-400"
    }, "PITCH STORY")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start space-x-3.5 my-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-2xl bg-slate-950 border ".concat(activeStep.border, " ").concat(activeStep.color, " flex-shrink-0")
    }, /*#__PURE__*/React.createElement(activeStep.icon, {
      className: "w-6 h-6"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug"
    }, activeStep.title), /*#__PURE__*/React.createElement("p", {
      className: "mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans"
    }, activeStep.desc))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 pt-4 border-t border-slate-800/80 overflow-x-auto"
    }, narrativeSteps.map(function (s, idx) {
      return /*#__PURE__*/React.createElement("button", {
        key: s.id,
        onClick: function onClick() {
          return setCurrentSlide(idx);
        },
        className: "h-2 rounded-full transition-all ".concat(currentSlide === idx ? 'w-7 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'),
        title: s.title
      });
    }))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3 font-mono text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "AMB-104"), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-red-400 font-bold"
    }, "CRITICAL")), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px]"
    }, "ETA: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, ambA.currentIntersectionEta || 43, "s")), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px]"
    }, "Distance: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, ambA.distanceToConflict || 555, "m")), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-emerald-400 font-bold mt-1"
    }, "PRIORITY 01")), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "AMB-208"), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-red-400 font-bold"
    }, "CRITICAL")), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px]"
    }, "ETA: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-amber-400"
    }, ambB.currentIntersectionEta || 50, "s")), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[11px]"
    }, "Distance: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, ambB.distanceToConflict || 555, "m")), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-300 font-bold mt-1"
    }, "PRIORITY 02"))), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between font-mono text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.TrafficLight, {
      className: "w-4 h-4 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "INT-04 SIGNAL PHASE:")), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, conflictState.signalPhase || 'NORMAL CYCLE')), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-2 font-mono text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-base font-extrabold text-white"
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400"
    }, "Ambulances Coordinated")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-base font-extrabold text-teal-300"
    }, "1"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400"
    }, "Conflict Junction")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-base font-extrabold text-emerald-400"
    }, "2m 18s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400"
    }, "Est. Delay Avoided"))))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-slate-400"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentSlide(Math.max(0, currentSlide - 1));
      },
      disabled: currentSlide === 0,
      className: "px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-white font-bold transition-all"
    }, "\u2190 Previous"), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline"
    }, "resQClear: \u201CClear the way. Save lives.\u201D \u2022 Simulation Prototype"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentSlide(Math.min(narrativeSteps.length - 1, currentSlide + 1));
      },
      disabled: currentSlide === narrativeSteps.length - 1,
      className: "px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-all"
    }, "Next \u2192")));
  }
  window.PresentationMode = PresentationMode;

  /* ===== END FILE: PresentationMode.js ===== */

  /* ===== START FILE: TopNav.js ===== */
  // resQClear Operations Center Top Navigation Bar
  // Enterprise Control Room Styling & Real-Time Telemetry Badges
  // [React hooks initialized at top level]

  function TopNav(_ref53) {
    var simState = _ref53.simState,
      onLaunchScenario = _ref53.onLaunchScenario,
      onTogglePresentation = _ref53.onTogglePresentation,
      onToggleSound = _ref53.onToggleSound,
      soundEnabled = _ref53.soundEnabled,
      onOpenLanding = _ref53.onOpenLanding;
    var _useState25 = useState(''),
      _useState26 = _slicedToArray(_useState25, 2),
      timeStr = _useState26[0],
      setTimeStr = _useState26[1];
    var _ref54 = simState || {},
      _ref54$conflictState = _ref54.conflictState,
      conflictState = _ref54$conflictState === void 0 ? {} : _ref54$conflictState,
      _ref54$scenarioRunnin = _ref54.scenarioRunning,
      scenarioRunning = _ref54$scenarioRunnin === void 0 ? false : _ref54$scenarioRunnin,
      _ref54$scenarioStep = _ref54.scenarioStep,
      scenarioStep = _ref54$scenarioStep === void 0 ? 1 : _ref54$scenarioStep,
      _ref54$networkStatus = _ref54.networkStatus,
      networkStatus = _ref54$networkStatus === void 0 ? {} : _ref54$networkStatus;
    useEffect(function () {
      var updateTime = function updateTime() {
        var now = new Date();
        setTimeStr(now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }));
      };
      updateTime();
      var timer = setInterval(updateTime, 1000);
      return function () {
        return clearInterval(timer);
      };
    }, []);
    return /*#__PURE__*/React.createElement("header", {
      className: "h-16 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-4"
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onOpenLanding,
      className: "cursor-pointer",
      title: "Go to resQClear Landing Page"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, {
      size: "default"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hidden xl:flex items-center space-x-3 pl-3 border-l border-slate-800 text-[11px] font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATION ACTIVE")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-cyan-400"
    }), /*#__PURE__*/React.createElement("span", null, "CHENNAI DIGITAL TWIN")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, networkStatus.intersectionsOnline || 6, " INTERSECTIONS ONLINE")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "SYSTEM HEALTH: NORMAL")))), /*#__PURE__*/React.createElement("div", {
      className: "hidden md:flex xl:hidden items-center space-x-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATION ACTIVE \u2022 6 SIGNALS ONLINE"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 sm:space-x-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 text-[10px]"
    }, "IST"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold tracking-wider"
    }, timeStr || '13:55:32')), /*#__PURE__*/React.createElement("button", {
      onClick: onLaunchScenario,
      className: "px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 transition-all border ".concat(scenarioRunning ? 'bg-gradient-to-r from-red-500/30 to-emerald-500/30 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/40 animate-pulse' : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-950/40'),
      title: "Run Automated Dual Ambulance Conflict Demo"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-3.5 h-3.5 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline"
    }, "SCENARIO DEMO"), /*#__PURE__*/React.createElement("span", {
      className: "sm:hidden"
    }, "DEMO"), scenarioRunning && /*#__PURE__*/React.createElement("span", {
      className: "px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 text-[9px] font-extrabold"
    }, scenarioStep, "/16")), /*#__PURE__*/React.createElement("button", {
      onClick: onTogglePresentation,
      className: "px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-400 text-xs font-mono font-bold transition-all flex items-center space-x-1.5",
      title: "Startup Pitch Presentation Mode"
    }, /*#__PURE__*/React.createElement(Icons.Presentation, {
      className: "w-3.5 h-3.5 text-purple-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden md:inline"
    }, "PRESENTATION MODE"), /*#__PURE__*/React.createElement("span", {
      className: "md:hidden"
    }, "PITCH")), /*#__PURE__*/React.createElement("button", {
      onClick: onToggleSound,
      className: "p-2 rounded-xl border transition-all ".concat(soundEnabled ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20' : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'),
      title: soundEnabled ? 'Radio SFX On' : 'Radio SFX Muted'
    }, soundEnabled ? /*#__PURE__*/React.createElement(Icons.Volume2, {
      className: "w-4 h-4"
    }) : /*#__PURE__*/React.createElement(Icons.VolumeX, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 pl-2 border-l border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-inner"
    }, "OP"), /*#__PURE__*/React.createElement("div", {
      className: "hidden 2xl:block text-left text-xs font-mono leading-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-white font-bold"
    }, "Chennai Ops Desk"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "Emergency Corridor Lead")))));
  }
  window.TopNav = TopNav;

  /* ===== END FILE: TopNav.js ===== */

  /* ===== START FILE: Sidebar.js ===== */
  // resQClear Operations Center Left Sidebar Navigation
  // Clean Enterprise Proportions, Active Badges, and Section Organization
  // [React hooks initialized at top level]

  function Sidebar(_ref55) {
    var currentTab = _ref55.currentTab,
      setTab = _ref55.setTab,
      simState = _ref55.simState,
      onTogglePresentation = _ref55.onTogglePresentation,
      onOpenLanding = _ref55.onOpenLanding;
    var _ref56 = simState || {},
      _ref56$ambulances = _ref56.ambulances,
      ambulances = _ref56$ambulances === void 0 ? [] : _ref56$ambulances,
      _ref56$conflictState = _ref56.conflictState,
      conflictState = _ref56$conflictState === void 0 ? {} : _ref56$conflictState,
      _ref56$networkStatus = _ref56.networkStatus,
      networkStatus = _ref56$networkStatus === void 0 ? {} : _ref56$networkStatus;
    var hasConflict = conflictState.stage && conflictState.stage !== 'IDLE';
    var navItems = [{
      id: 'overview',
      label: 'Overview & Map',
      icon: Icons.Compass,
      badge: 'LIVE'
    }, {
      id: 'conflict',
      label: 'Conflict Engine',
      icon: Icons.ShieldAlert,
      badge: hasConflict ? 'ALERT' : null,
      alert: hasConflict
    }, {
      id: 'ambulances',
      label: 'Ambulances',
      icon: Icons.Ambulance,
      badge: ambulances.length
    }, {
      id: 'network',
      label: 'Traffic Network',
      icon: Icons.TrafficLight,
      badge: "".concat(networkStatus.intersectionsOnline || 6)
    }, {
      id: 'hospitals',
      label: 'Hospitals',
      icon: Icons.Hospital,
      badge: "".concat(networkStatus.hospitalsAvailable || 3)
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: Icons.BarChart3
    }, {
      id: 'settings',
      label: 'Settings',
      icon: Icons.Settings
    }];
    return /*#__PURE__*/React.createElement("aside", {
      className: "w-64 border-r border-slate-800 bg-slate-950/85 backdrop-blur-md flex flex-col justify-between p-4 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 mb-2"
    }, "OPERATIONS CENTER"), navItems.map(function (item) {
      var isActive = currentTab === item.id;
      return /*#__PURE__*/React.createElement("button", {
        key: item.id,
        onClick: function onClick() {
          return setTab(item.id);
        },
        className: "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium font-mono transition-all group ".concat(isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold shadow-md shadow-emerald-950/40' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/80 border border-transparent')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-3"
      }, /*#__PURE__*/React.createElement(item.icon, {
        className: "w-4 h-4 ".concat(isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200')
      }), /*#__PURE__*/React.createElement("span", null, item.label)), item.badge && /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] px-2 py-0.5 rounded-md font-bold ".concat(item.alert ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' : isActive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-900 text-slate-400')
      }, item.badge));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pt-4 border-t border-slate-800/80"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onTogglePresentation,
      className: "w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold transition-all shadow-inner"
    }, /*#__PURE__*/React.createElement(Icons.Presentation, {
      className: "w-4 h-4 text-purple-400"
    }), /*#__PURE__*/React.createElement("span", null, "Launch Pitch Deck")), /*#__PURE__*/React.createElement("button", {
      onClick: onOpenLanding,
      className: "w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-mono transition-all"
    }, /*#__PURE__*/React.createElement(Icons.Layers, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "Landing Page")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-500 leading-tight text-center"
    }, "resQClear Prototype v2.0 \u2022 Digital Twin")));
  }
  window.Sidebar = Sidebar;

  /* ===== END FILE: Sidebar.js ===== */

  /* ===== START FILE: LandingPage.js ===== */
  // resQClear Product Landing Page Component
  // Enterprise Architecture, 6-Stage How It Works, Phased Roadmap, and Simulated Impact
  // [React hooks initialized at top level]

  function LandingPage(_ref57) {
    var onLaunchDemo = _ref57.onLaunchDemo,
      onLaunchScenario = _ref57.onLaunchScenario;
    var scrollToSection = function scrollToSection(id) {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black"
    }, /*#__PURE__*/React.createElement("header", {
      className: "sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, null), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold"
    }, "DIGITAL TWIN SIMULATION")), /*#__PURE__*/React.createElement("nav", {
      className: "hidden md:flex items-center space-x-7 text-xs font-mono font-medium text-slate-300"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('problem');
      },
      className: "hover:text-emerald-400 transition-colors"
    }, "Problem"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('how-it-works');
      },
      className: "hover:text-emerald-400 transition-colors"
    }, "How It Works"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('conflict-demo');
      },
      className: "hover:text-emerald-400 transition-colors"
    }, "Conflict Engine"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('roadmap');
      },
      className: "hover:text-emerald-400 transition-colors"
    }, "Roadmap"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('impact');
      },
      className: "hover:text-emerald-400 transition-colors"
    }, "Simulated Impact")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onLaunchScenario();
      },
      className: "hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-3.5 h-3.5 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Scenario Demo")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onLaunchDemo();
      },
      className: "inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
    }, /*#__PURE__*/React.createElement("span", null, "Launch Live Dashboard"), /*#__PURE__*/React.createElement(Icons.ArrowRight, {
      className: "w-4 h-4"
    }))))), /*#__PURE__*/React.createElement("section", {
      className: "relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-grid-pattern"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-inner"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping"
    }), /*#__PURE__*/React.createElement("span", null, "EMERGENCY TRAFFIC COORDINATION PLATFORM")), /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
    }, "Clear the way. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400"
    }, "Save lives.")), /*#__PURE__*/React.createElement("p", {
      className: "mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
    }, "AI-assisted emergency traffic coordination for safer and more efficient ambulance movement through congested urban intersections."), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onLaunchDemo();
      },
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold font-mono text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02]"
    }, /*#__PURE__*/React.createElement(Icons.Play, {
      className: "w-4 h-4 text-slate-950"
    }), /*#__PURE__*/React.createElement("span", null, "Launch Live Dashboard")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('how-it-works');
      },
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-medium font-mono text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
    }, /*#__PURE__*/React.createElement("span", null, "How resQClear Works"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 text-xs font-mono text-slate-400 flex items-center justify-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-amber-400"
    }), /*#__PURE__*/React.createElement("span", null, "Digital Twin Simulation Prototype \u2022 Simulated Signal Control \u2022 Chennai Metro Grid"))), /*#__PURE__*/React.createElement("div", {
      id: "conflict-demo",
      className: "mt-14 relative rounded-2xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-emerald-950/50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative rounded-[14px] bg-slate-950 p-4 sm:p-6 overflow-hidden border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center space-x-1.5 text-emerald-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATION MODE ACTIVE")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "|"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "CENTRAL CONFLICT JUNCTION (INT-04)")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-4 mt-2 sm:mt-0 text-slate-400"
    }, /*#__PURE__*/React.createElement("span", null, "UNITS CONVERGING: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, "AMB-104 & AMB-208")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onLaunchScenario();
      },
      className: "px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 font-bold transition-all"
    }, "RUN HERO CONFLICT DEMO"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-7 h-64 bg-slate-900/90 rounded-xl border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between z-10 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "SCENARIO: DUAL CRITICAL CONVERGENCE"), /*#__PURE__*/React.createElement("span", {
      className: "text-red-400 font-bold animate-pulse"
    }, "\u26A0 CONFLICT DETECTED")), /*#__PURE__*/React.createElement("div", {
      className: "relative flex items-center justify-center py-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center space-y-2 font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-red-400 font-bold flex items-center justify-center space-x-1"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDE91 AMB-104 (North)"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u2193 (ETA: 43s | Dist: 555m)")), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs shadow-lg"
    }, "\uD83D\uDEA6 INT-04 \u2022 SEQUENTIAL CLEARANCE (01: AMB-104 \u2192 02: AMB-208)"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-amber-400 font-bold flex items-center justify-center space-x-1"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDE91 AMB-208 (South)"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u2191 (ETA: 50s | Dist: 555m)")))), /*#__PURE__*/React.createElement("div", {
      className: "z-10 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 p-2 rounded-lg border border-slate-800 text-slate-400"
    }, /*#__PURE__*/React.createElement("span", null, "RECOMMENDED SEQUENCE: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, "01 \u2192 AMB-104 | 02 \u2192 AMB-208")), /*#__PURE__*/React.createElement("span", null, "CONFIDENCE: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, "96% (SIMULATION ESTIMATE)")))), /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-5 space-y-3 font-mono text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Decision Logic"), /*#__PURE__*/React.createElement("div", {
      className: "text-white font-bold mt-1"
    }, "Sequential Corridor Clearance"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400 text-[11px] mt-1 font-sans"
    }, "\"AMB-104 is predicted to reach the conflict zone 7 seconds earlier. Sequential clearance reduces the probability of simultaneous intersection occupancy.\"")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-emerald-400 font-extrabold text-base"
    }, "2m 18s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "Est. Delay Avoided")), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-cyan-400 font-extrabold text-base"
    }, "4 Nodes"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "Signals Coordinated"))))))))), /*#__PURE__*/React.createElement("section", {
      id: "how-it-works",
      className: "py-16 bg-slate-900/50 border-y border-slate-800/80"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-12"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest"
    }, "SYSTEM ARCHITECTURE"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl sm:text-3xl font-extrabold text-white mt-2"
    }, "HOW resQClear WORKS"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-400 mt-2 font-sans"
    }, "From detection to safe sequence coordination across congested urban grids.")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 font-mono text-xs"
    }, RESQCLEAR_DATA.howItWorksSteps.map(function (step) {
      return /*#__PURE__*/React.createElement("div", {
        key: step.step,
        className: "p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs"
      }, step.step), /*#__PURE__*/React.createElement("span", {
        className: "text-[9px] text-slate-500"
      }, "STAGE 0", step.step)), /*#__PURE__*/React.createElement("h4", {
        className: "font-extrabold text-white text-sm tracking-wide mb-1.5 group-hover:text-emerald-400 transition-colors"
      }, step.name), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-400 text-xs font-sans leading-relaxed"
      }, step.desc)));
    })))), /*#__PURE__*/React.createElement("section", {
      id: "problem",
      className: "py-16"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-12"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest"
    }, "COMPARATIVE EVALUATION"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl sm:text-3xl font-extrabold text-white mt-2"
    }, "BEFORE vs AFTER resQClear"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-mono text-amber-400 mt-2"
    }, "SIMULATION RESULT \u2022 Empirical comparison across urban corridors")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-8 rounded-3xl bg-slate-900/80 border border-red-500/25 flex flex-col justify-between space-y-6"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-red-400 text-xs font-bold uppercase mb-2"
    }, /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "WITHOUT resQClear")), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-extrabold text-white leading-snug font-sans"
    }, "Uncoordinated Emergency Transit"), /*#__PURE__*/React.createElement("ul", {
      className: "mt-4 space-y-2.5 text-xs text-slate-300 font-sans"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-red-400"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Traffic congestion:"), " Ambulances stuck behind dense vehicle queues.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-red-400"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Intersection waiting:"), " Complete stops at red-light phases and cross-traffic.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-red-400"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Uncoordinated movement:"), " Multi-ambulance deadlocks at common junctions.")))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center text-slate-400"
    }, /*#__PURE__*/React.createElement("span", null, "Baseline Simulated ETA:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-red-400 text-base"
    }, "08:34 min")))), /*#__PURE__*/React.createElement("div", {
      className: "p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between space-y-6"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase mb-2"
    }, /*#__PURE__*/React.createElement(Icons.ShieldCheck, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "WITH resQClear")), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-extrabold text-white leading-snug font-sans"
    }, "AI-Assisted Emergency Coordination"), /*#__PURE__*/React.createElement("ul", {
      className: "mt-4 space-y-2.5 text-xs text-slate-300 font-sans"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Coordinated sequence:"), " Automated priority arbitration at conflict nodes.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Emergency corridor:"), " Dynamic simulated green wave preserving momentum.")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Reduced simulated delay:"), " 2m 18s saved per critical route trip.")))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl bg-slate-950 border border-emerald-500/30 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center text-slate-300"
    }, /*#__PURE__*/React.createElement("span", null, "Optimized Simulated ETA:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400 text-base"
    }, "06:16 min (-02:18)"))))))), /*#__PURE__*/React.createElement("section", {
      id: "roadmap",
      className: "py-16 bg-slate-900/40 border-y border-slate-800/80"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-12"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest"
    }, "PRODUCT ROADMAP"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl sm:text-3xl font-extrabold text-white mt-2"
    }, "From Simulation to Infrastructure Integration"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-400 mt-2 font-sans"
    }, "Phased evolution to ensure rigorous safety and regulatory alignment before civic deployment.")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs"
    }, RESQCLEAR_DATA.productRoadmap.map(function (p) {
      return /*#__PURE__*/React.createElement("div", {
        key: p.phase,
        className: "p-5 rounded-2xl border flex flex-col justify-between ".concat(p.isCurrent ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-950 border-slate-800')
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] text-slate-400"
      }, p.phase), /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-0.5 rounded text-[10px] font-bold ".concat(p.isCurrent ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-400')
      }, p.status)), /*#__PURE__*/React.createElement("h4", {
        className: "font-extrabold text-white text-sm mb-2"
      }, p.title), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-400 text-xs font-sans leading-relaxed"
      }, p.desc)));
    })))), /*#__PURE__*/React.createElement("section", {
      id: "impact",
      className: "py-16"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-12"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest"
    }, "BENCHMARK METRICS"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl sm:text-3xl font-extrabold text-white mt-2"
    }, "Simulated Performance Gains"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-mono text-amber-400 mt-2"
    }, "All metrics below are simulation demonstration estimates")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-white"
    }, "12"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Emergency Events"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
    }, "DEMO DATA")), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-cyan-400"
    }, "4"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Intersections Coordinated"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
    }, "DEMO DATA")), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-teal-300"
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Ambulances Coordinated"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
    }, "DEMO DATA")), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-emerald-400"
    }, "2m 18s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Est. Delay Avoided"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400"
    }, "SIMULATION ESTIMATE")), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-purple-400"
    }, "96%"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Decision Confidence"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
    }, "SIMULATION ESTIMATE"))))), /*#__PURE__*/React.createElement("footer", {
      className: "mt-auto border-t border-slate-800/80 bg-slate-950 py-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center md:text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, {
      size: "small"
    }), /*#__PURE__*/React.createElement("span", null, "\u2022 \u201CClear the way. Save lives.\u201D")), /*#__PURE__*/React.createElement("div", {
      className: "max-w-xl text-[11px] text-slate-400 leading-normal"
    }, "resQClear is currently a digital twin simulation prototype. Signal actions and telemetry shown are simulated and not connected to real government traffic signals, live ambulances, or municipal infrastructure."))));
  }
  window.LandingPage = LandingPage;

  /* ===== END FILE: LandingPage.js ===== */

  /* ===== START FILE: app.js ===== */
  // resQClear Root Application Component
  // Master Controller for Digital Twin Simulation, Operations Dashboard, & Pitch Deck
  // [React hooks initialized at top level]

  function App() {
    var _simState$conflictSta, _simState$conflictSta2;
    var _useState27 = useState('landing'),
      _useState28 = _slicedToArray(_useState27, 2),
      view = _useState28[0],
      setView = _useState28[1]; // 'landing' | 'dashboard'
    var _useState29 = useState('overview'),
      _useState30 = _slicedToArray(_useState29, 2),
      currentTab = _useState30[0],
      setTab = _useState30[1]; // 'overview' | 'conflict' | 'ambulances' | 'network' | 'hospitals' | 'analytics' | 'settings'
    var _useState31 = useState(false),
      _useState32 = _slicedToArray(_useState31, 2),
      isPresentationMode = _useState32[0],
      setIsPresentationMode = _useState32[1];
    var _useState33 = useState(true),
      _useState34 = _slicedToArray(_useState33, 2),
      soundEnabled = _useState34[0],
      setSoundEnabled = _useState34[1];
    var _useState35 = useState(window.simulationEngine.getState()),
      _useState36 = _slicedToArray(_useState35, 2),
      simState = _useState36[0],
      setSimState = _useState36[1];
    useEffect(function () {
      var unsubscribe = window.simulationEngine.subscribe(function (state) {
        setSimState(state);
      });
      return function () {
        return unsubscribe();
      };
    }, []);
    var handleLaunchDemo = function handleLaunchDemo() {
      setView('dashboard');
      setTab('overview');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    var handleLaunchScenario = function handleLaunchScenario() {
      setView('dashboard');
      setTab('overview');
      window.simulationEngine.runEmergencyScenario();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    var handleToggleSound = function handleToggleSound() {
      var newState = window.soundEngine ? window.soundEngine.toggle() : false;
      setSoundEnabled(newState);
    };
    var handleApplyRoute = function handleApplyRoute() {
      window.simulationEngine.applyAiRoute();
    };
    var handleTriggerAmbulance = function handleTriggerAmbulance(id) {
      if (id === 'AMB-104') window.simulationEngine.triggerAmbulanceA();else if (id === 'AMB-208') window.simulationEngine.triggerAmbulanceB();
      setView('dashboard');
      setTab('overview');
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black"
    }, view === 'landing' ? /*#__PURE__*/React.createElement(LandingPage, {
      onLaunchDemo: handleLaunchDemo,
      onLaunchScenario: handleLaunchScenario
    }) :
    /*#__PURE__*/
    /* 2. Operations Center Live Dashboard */
    React.createElement("div", {
      className: "min-h-screen flex flex-col bg-slate-950"
    }, /*#__PURE__*/React.createElement(TopNav, {
      simState: simState,
      onLaunchScenario: function onLaunchScenario() {
        return window.simulationEngine.runEmergencyScenario();
      },
      onTogglePresentation: function onTogglePresentation() {
        return setIsPresentationMode(true);
      },
      onToggleSound: handleToggleSound,
      soundEnabled: soundEnabled,
      onOpenLanding: function onOpenLanding() {
        return setView('landing');
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col lg:flex-row overflow-hidden"
    }, /*#__PURE__*/React.createElement(Sidebar, {
      currentTab: currentTab,
      setTab: setTab,
      simState: simState,
      onTogglePresentation: function onTogglePresentation() {
        return setIsPresentationMode(true);
      },
      onOpenLanding: function onOpenLanding() {
        return setView('landing');
      }
    }), /*#__PURE__*/React.createElement("main", {
      className: "flex-1 p-4 sm:p-6 overflow-y-auto flex flex-col space-y-4"
    }, currentTab === 'overview' && /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-[480px] sm:h-[540px] w-full relative"
    }, /*#__PURE__*/React.createElement(LiveMap, {
      simState: simState,
      onSelectAmbulance: handleTriggerAmbulance,
      onApplyRoute: handleApplyRoute
    })), ((_simState$conflictSta = simState.conflictState) === null || _simState$conflictSta === void 0 ? void 0 : _simState$conflictSta.stage) && ((_simState$conflictSta2 = simState.conflictState) === null || _simState$conflictSta2 === void 0 ? void 0 : _simState$conflictSta2.stage) !== 'IDLE' && /*#__PURE__*/React.createElement(ConflictEnginePanel, {
      simState: simState
    }), /*#__PURE__*/React.createElement(DemoControls, {
      simState: simState,
      onRunScenario: function onRunScenario() {
        return window.simulationEngine.runEmergencyScenario();
      },
      onStart: function onStart() {
        return window.simulationEngine.start();
      },
      onPause: function onPause() {
        return window.simulationEngine.pause();
      },
      onReset: function onReset() {
        return window.simulationEngine.reset();
      },
      onTriggerA: function onTriggerA() {
        return window.simulationEngine.triggerAmbulanceA();
      },
      onTriggerB: function onTriggerB() {
        return window.simulationEngine.triggerAmbulanceB();
      },
      onTriggerBoth: function onTriggerBoth() {
        return window.simulationEngine.triggerBothEmergencies();
      },
      onCreateJam: function onCreateJam() {
        return window.simulationEngine.createTrafficJam();
      },
      onClearJam: function onClearJam() {
        return window.simulationEngine.clearTraffic();
      },
      onSetSpeed: function onSetSpeed(s) {
        return window.simulationEngine.setSpeed(s);
      },
      onToggleSound: handleToggleSound,
      soundEnabled: soundEnabled
    })), currentTab === 'conflict' && /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement(ConflictEnginePanel, {
      simState: simState
    }), /*#__PURE__*/React.createElement("div", {
      className: "h-[420px] w-full"
    }, /*#__PURE__*/React.createElement(LiveMap, {
      simState: simState
    })), /*#__PURE__*/React.createElement(DemoControls, {
      simState: simState,
      onRunScenario: function onRunScenario() {
        return window.simulationEngine.runEmergencyScenario();
      },
      onStart: function onStart() {
        return window.simulationEngine.start();
      },
      onPause: function onPause() {
        return window.simulationEngine.pause();
      },
      onReset: function onReset() {
        return window.simulationEngine.reset();
      },
      onTriggerA: function onTriggerA() {
        return window.simulationEngine.triggerAmbulanceA();
      },
      onTriggerB: function onTriggerB() {
        return window.simulationEngine.triggerAmbulanceB();
      },
      onTriggerBoth: function onTriggerBoth() {
        return window.simulationEngine.triggerBothEmergencies();
      },
      onCreateJam: function onCreateJam() {
        return window.simulationEngine.createTrafficJam();
      },
      onClearJam: function onClearJam() {
        return window.simulationEngine.clearTraffic();
      },
      onSetSpeed: function onSetSpeed(s) {
        return window.simulationEngine.setSpeed(s);
      },
      onToggleSound: handleToggleSound,
      soundEnabled: soundEnabled
    })), currentTab === 'ambulances' && /*#__PURE__*/React.createElement(AmbulanceFleetView, {
      simState: simState,
      onTriggerAmbulance: handleTriggerAmbulance
    }), currentTab === 'network' && /*#__PURE__*/React.createElement(TrafficNetworkView, {
      simState: simState
    }), currentTab === 'hospitals' && /*#__PURE__*/React.createElement(HospitalView, {
      simState: simState
    }), currentTab === 'analytics' && /*#__PURE__*/React.createElement(AnalyticsView, {
      simState: simState
    }), currentTab === 'settings' && /*#__PURE__*/React.createElement(SettingsView, {
      simState: simState,
      onReset: function onReset() {
        return window.simulationEngine.reset();
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-auto pt-4 pb-2 border-t border-slate-900 text-center text-xs font-mono text-slate-500"
    }, "\u201CresQClear is a simulation prototype. Traffic-signal actions shown in this demo are not connected to real-world traffic infrastructure.\u201D")), (currentTab === 'overview' || currentTab === 'conflict') && /*#__PURE__*/React.createElement("aside", {
      className: "w-full lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-950/80 backdrop-blur-md p-4 flex-shrink-0"
    }, /*#__PURE__*/React.createElement(RightStatusPanel, {
      simState: simState,
      onApplyRoute: handleApplyRoute
    })))), isPresentationMode && /*#__PURE__*/React.createElement(PresentationMode, {
      simState: simState,
      onExit: function onExit() {
        return setIsPresentationMode(false);
      },
      onRunScenario: function onRunScenario() {
        return window.simulationEngine.runEmergencyScenario();
      }
    }), simState.scenarioCompleteModal && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-xl w-full bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center relative overflow-hidden font-sans"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATION COMPLETE")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-mono text-slate-400 uppercase tracking-widest mb-1"
    }, "RESQCLEAR"), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug"
    }, "MULTI-AMBULANCE CONFLICT RESOLVED"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs sm:text-sm text-slate-300 mt-2"
    }, "Coordinated 2 critical emergency vehicles sequentially through a single shared intersection without cross-axis deadlock.")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-2xl bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-white"
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 mt-0.5"
    }, "Emergency Vehicles Coordinated")), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-2xl bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-teal-300"
    }, "1"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 mt-0.5"
    }, "Conflict Junction (INT-04)")), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-2xl bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-cyan-300"
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 mt-0.5"
    }, "Emergency Corridors")), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-2xl bg-slate-950 border border-emerald-500/30"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-emerald-400"
    }, "2m 18s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 mt-0.5"
    }, "Estimated Delay Avoided"))), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] font-mono text-slate-500 border-t border-slate-800/80 pt-3"
    }, "Simulation Estimate \u2022 Prototype demonstration data"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        window.simulationEngine.closeScenarioCompleteModal();
        window.simulationEngine.runEmergencyScenario();
      },
      className: "w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
    }, "Re-Run Scenario Demo"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        window.simulationEngine.closeScenarioCompleteModal();
        setTab('analytics');
      },
      className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs border border-slate-700 transition-all"
    }, "Explore Analytics"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return window.simulationEngine.closeScenarioCompleteModal();
      },
      className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800 transition-all"
    }, "Close Summary")))));
  }

  // Mount Root
  var rootElement = document.getElementById('root');
  var root = ReactDOM.createRoot(rootElement);
  root.render( /*#__PURE__*/React.createElement(App, null));

  /* ===== END FILE: app.js ===== */
})();