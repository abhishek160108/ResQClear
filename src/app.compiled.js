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
  _excluded24 = ["className"];
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

  var RESQCLEAR_DATA = {
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
      integrationNote: 'Hospital notification simulated',
      readiness: [{
        item: 'Cath Lab 02 Pre-warmed',
        done: true
      }, {
        item: 'Cardiology Triage Team Alerted',
        done: true
      }, {
        item: 'Rapid ER Bay 1 Reserved',
        done: true
      }, {
        item: 'Direct Telemetry Connected (Simulated)',
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
      integrationNote: 'Hospital notification simulated',
      readiness: [{
        item: 'Surgical Suite 04 Prepped',
        done: true
      }, {
        item: 'Blood Bank Cross-match 4 Units O-',
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
      integrationNote: 'Hospital notification simulated',
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
      origin: 'Anna Nagar',
      destination: 'Government Hospital',
      destinationId: 'hosp-1',
      speed: 46,
      // km/h
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
      // Simulation Path (Coordinates along the road grid)
      path: [{
        x: 120,
        y: 160,
        name: 'Anna Nagar West Terminal'
      }, {
        x: 280,
        y: 160,
        name: 'Roundabout Sector 3'
      }, {
        x: 450,
        y: 160,
        name: 'Kilpauk Medical Signal'
      }, {
        x: 450,
        y: 350,
        name: 'Central Conflict Junction (Int. 4)'
      }, {
        x: 620,
        y: 350,
        name: 'Poonamallee Arterial'
      }, {
        x: 780,
        y: 350,
        name: 'Hospital Access Boulevard'
      }, {
        x: 780,
        y: 160,
        name: 'Government Hospital ER Bay'
      }],
      geoPath: [[13.0850, 80.2100], [13.0820, 80.2250], [13.0780, 80.2420], [13.0750, 80.2580], [13.0790, 80.2680], [13.0827, 80.2785]],
      progress: 0.05,
      currentIntersectionEta: 43,
      // seconds (realistic demo value)
      distanceToConflict: 180,
      // meters
      priorityRank: 1
    }, {
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
        name: 'Usman Road Flyover Base'
      }, {
        x: 450,
        y: 540,
        name: 'Anna Salai South Link'
      }, {
        x: 450,
        y: 350,
        name: 'Central Conflict Junction (Int. 4)'
      }, {
        x: 620,
        y: 350,
        name: 'Poonamallee Arterial'
      }, {
        x: 780,
        y: 350,
        name: 'Hospital Access Boulevard'
      }, {
        x: 780,
        y: 540,
        name: 'Apollo Emergency Bay'
      }],
      geoPath: [[13.0418, 80.2341], [13.0500, 80.2420], [13.0620, 80.2500], [13.0750, 80.2580], [13.0680, 80.2550], [13.0604, 80.2520]],
      progress: 0.04,
      currentIntersectionEta: 50,
      // seconds (realistic demo value)
      distanceToConflict: 290,
      // meters
      priorityRank: 2
    }, {
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
        name: 'Usman Road Flyover Base'
      }, {
        x: 180,
        y: 560,
        name: 'Kauvery Hub ER Bay'
      }],
      geoPath: [[13.0067, 80.2025], [13.0200, 80.2200], [13.0338, 80.2505]],
      progress: 0.35,
      currentIntersectionEta: 75,
      distanceToConflict: 720,
      priorityRank: 3
    }],
    intersections: [{
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
      active: true
    }, {
      id: 'cong-2',
      name: 'Usman Flyover Peak Bottleneck',
      x: 360,
      y: 540,
      radius: 35,
      severity: 'MODERATE',
      delayImpact: '+1.8 min',
      color: 'rgba(245, 158, 11, 0.3)',
      active: true
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
      totalSimulatedTrips: 1248,
      corridorStatus: 'SAFE CORRIDOR SEQUENCE COMPLETED'
    },
    productRoadmap: [{
      phase: 'PHASE 1',
      title: 'Digital Twin Simulation',
      status: 'Current',
      isCurrent: true,
      desc: '60 FPS collision conflict arbitration engine & traffic corridor visualization'
    }, {
      phase: 'PHASE 2',
      title: 'Ambulance GPS MVP',
      status: 'Next',
      isCurrent: false,
      desc: 'Paramedic vehicle telemetry client with live GPS precision tracking'
    }, {
      phase: 'PHASE 3',
      title: 'Real-Time Traffic Data',
      status: 'Planned',
      isCurrent: false,
      desc: 'City-wide traffic sensor and sensor-mesh ingestion feeds'
    }, {
      phase: 'PHASE 4',
      title: 'Hospital / Ambulance Pilot',
      status: 'Planned',
      isCurrent: false,
      desc: 'Controlled pilot with partner emergency departments and trauma centers'
    }, {
      phase: 'PHASE 5',
      title: 'Authorized Traffic Infrastructure Integration',
      status: 'Future',
      isCurrent: false,
      desc: 'Municipal traffic command center API integration subject to regulatory approval'
    }],
    howItWorksSteps: [{
      step: '1',
      name: 'DETECT',
      desc: 'Emergency vehicle detected via connected telemetry',
      icon: 'Ambulance'
    }, {
      step: '2',
      name: 'PREDICT',
      desc: 'Traffic congestion and ETA to intersection analyzed',
      icon: 'Activity'
    }, {
      step: '3',
      name: 'RESOLVE',
      desc: 'Conflicting emergency routes coordinated by AI decision model',
      icon: 'Cpu'
    }, {
      step: '4',
      name: 'COORDINATE',
      desc: 'Emergency corridor sequence simulated with dynamic green wave',
      icon: 'TrafficLight'
    }, {
      step: '5',
      name: 'INFORM',
      desc: 'Hospital and control-room status updated in real-time',
      icon: 'Hospital'
    }],
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
  window.AMBUCLEAR_DATA = RESQCLEAR_DATA; // backward compatibility alias

  /* ===== END FILE: data.js ===== */

  /* ===== START FILE: simulation.js ===== */
  // resQClear Real-Time Traffic & Emergency Simulation Engine
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

      // Event Log (Realistic operations chronology)
      this.events = [{
        id: 1,
        time: '18:42:00',
        type: 'system',
        message: 'resQClear Simulation Grid Engine Initialized • 6 Signal Nodes Online'
      }, {
        id: 2,
        time: '18:42:05',
        type: 'info',
        message: 'V2X Conflict Arbitration Engine Ready (Simulation Mode)'
      }];

      // Conflict State
      this.conflictState = {
        detected: false,
        stage: 'IDLE',
        // IDLE, DETECTED, RESOLVING, PRIORITY_A, A_CLEARED, PRIORITY_B, BOTH_CLEARED
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
        timeSavedSec: 138,
        // 2m 18s
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
          scenarioRunning: this.scenarioRunning,
          scenarioStep: this.scenarioStep,
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
        this.events = [newEvent].concat(_toConsumableArray(this.events.slice(0, 40)));
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
          bannerType: 'info'
        };
        this.scenarioRunning = false;
        this.scenarioStep = 0;
        this.scenarioTimer = 0;
        this.aiInsight.applied = false;
        this.logEvent('info', 'Simulation reset to default corridor parameters.');
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
        var scaled = progress * totalSegments;
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

        // Update normal traffic lights timers
        this.intersections.forEach(function (inter) {
          if (inter.id !== 'int-4' || _this4.conflictState.stage === 'IDLE' || _this4.conflictState.stage === 'BOTH_CLEARED') {
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
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        var ambB = this.ambulances.find(function (a) {
          return a.id === 'AMB-208';
        });

        // Move ambulances along paths
        this.ambulances.forEach(function (amb) {
          var speedFactor = 0.035;

          // In conflict resolution stage, AMB-B holds/decelerates while AMB-A clears
          if (amb.id === 'AMB-208' && _this4.conflictState.stage === 'PRIORITY_A' && amb.progress > 0.45 && amb.progress < 0.52) {
            speedFactor = 0.006;
          } else if (amb.id === 'AMB-104' && _this4.conflictState.stage === 'PRIORITY_A') {
            speedFactor = 0.048; // Accelerated priority clearance
          } else if (amb.id === 'AMB-208' && _this4.conflictState.stage === 'PRIORITY_B') {
            speedFactor = 0.052; // Now B proceeds through
          }
          amb.progress += speedFactor * dt;
          if (amb.progress > 0.98) {
            amb.progress = 0.98;
          }

          // Update current position
          var pos = _this4.getPointOnPath(amb.path, amb.progress);
          amb.currentX = pos.x;
          amb.currentY = pos.y;
          amb.heading = pos.angle;

          // Distance and ETA to conflict junction (Intersection 4 is at x: 450, y: 350)
          var targetDist = Math.hypot(450 - pos.x, 350 - pos.y);
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
        this.civilianVehicles.forEach(function (car) {
          var isYielding = false;
          _this4.ambulances.forEach(function (amb) {
            if (amb.currentX && amb.currentY) {
              var dist = Math.hypot(car.x - amb.currentX, car.y - amb.currentY);
              if (dist < 60) {
                isYielding = true;
              }
            }
          });
          car.yielding = isYielding;
          var currentSpeed = isYielding ? car.speed * 0.2 : car.speed;
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
    }, {
      key: "evaluateIntersectionConflict",
      value: function evaluateIntersectionConflict(ambA, ambB, dt) {
        var _this5 = this;
        if (!ambA || !ambB) return;
        var int4 = this.intersections.find(function (i) {
          return i.id === 'int-4';
        });
        var aApproaching = ambA.progress >= 0.30 && ambA.progress < 0.58;
        var bApproaching = ambB.progress >= 0.28 && ambB.progress < 0.58;
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
          setTimeout(function () {
            if (_this5.conflictState.stage === 'DETECTED') {
              _this5.conflictState.stage = 'RESOLVING';
              _this5.conflictState.bannerText = 'AI-ASSISTED CONFLICT RESOLUTION';
              _this5.conflictState.bannerSubtext = 'Evaluating ETA, distance, and intersection occupancy. Resolving traffic coordination priority...';
              _this5.conflictState.bannerType = 'warning';
              _this5.logEvent('info', 'AI-ASSISTED SEQUENCE GENERATED: Transparent scoring model evaluated.');
              _this5.notify();

              // 3. PRIORITY 01 TO AMBULANCE A
              setTimeout(function () {
                if (_this5.conflictState.stage === 'RESOLVING') {
                  _this5.conflictState.stage = 'PRIORITY_A';
                  _this5.conflictState.bannerText = 'AMB-104 — PRIORITY 01';
                  _this5.conflictState.bannerSubtext = 'Reason: AMB-104 reaches conflict zone earlier (43s vs 50s). Simulated emergency corridor active.';
                  _this5.conflictState.bannerType = 'success';
                  _this5.conflictState.decision = {
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
                  _this5.logEvent('priority', 'AMB-104 PRIORITY 01 ACTIVATED: Simulated green wave active for North corridor.');
                  if (window.soundEngine) window.soundEngine.playPriorityChime();
                  _this5.notify();
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
          setTimeout(function () {
            if (_this5.conflictState.stage === 'A_CLEARED') {
              _this5.conflictState.stage = 'PRIORITY_B';
              _this5.conflictState.bannerText = 'AMB-208 — PRIORITY 02';
              _this5.conflictState.bannerSubtext = 'South corridor green wave active. AMB-208 clearing intersection...';
              _this5.conflictState.bannerType = 'success';
              int4.state = 'PRIORITY_B';
              int4.modeLabel = 'SIMULATED EMERGENCY CORRIDOR';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              int4.priorityVehicle = 'AMB-208';
              _this5.logEvent('priority', 'AMB-208 PRIORITY 02 ACTIVATED: South corridor clearance engaged.');
              if (window.soundEngine) window.soundEngine.playPriorityChime();
              _this5.notify();
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
          setTimeout(function () {
            if (_this5.conflictState.stage === 'BOTH_CLEARED') {
              int4.state = 'NORMAL_CYCLE';
              int4.modeLabel = 'NORMAL CYCLE';
              int4.northSouth = 'GREEN';
              int4.eastWest = 'RED';
              _this5.notify();
            }
          }, 2500);
          this.notify();
        }
      }

      // AI Route Application
    }, {
      key: "applyAiRoute",
      value: function applyAiRoute() {
        this.aiInsight.applied = true;
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        if (ambA) {
          ambA.routeStatus = 'ALTERNATE ROUTE APPLIED';
          ambA.eta = '05:24'; // -1m 18s
          this.liveMetrics.timeSavedSec = 178; // Increased simulated savings
          this.logEvent('info', 'SIMULATION ESTIMATE: Alternate corridor applied for AMB-104. Estimated delay avoided: 2m 18s.');
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
          ambA.progress = 0.1;
          this.logEvent('info', 'AMB-104 dispatched from Anna Nagar West (Simulated).');
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
          ambB.progress = 0.1;
          this.logEvent('info', 'AMB-208 dispatched from T. Nagar Panagal Park (Simulated).');
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
          ambA.progress = 0.25;
          ambB.progress = 0.22;
          this.logEvent('alert', 'CRITICAL MULTI-AMBULANCE EVENT: Simultaneous dispatch simulated.');
          this.notify();
        }
      }
    }, {
      key: "createTrafficJam",
      value: function createTrafficJam() {
        this.congestionZones.forEach(function (z) {
          return z.active = true;
        });
        this.logEvent('warning', 'SIMULATION: Peak congestion surge injected along Anna Salai link (+2.4 min delay).');
        this.notify();
      }
    }, {
      key: "clearTraffic",
      value: function clearTraffic() {
        this.congestionZones.forEach(function (z) {
          return z.active = false;
        });
        this.logEvent('info', 'SIMULATION: Traffic congestion cleared. Free flow transit restored.');
        this.notify();
      }

      // AUTOMATED HERO SCENARIO (12 Sequential Steps)
    }, {
      key: "runEmergencyScenario",
      value: function runEmergencyScenario() {
        this.reset();
        this.scenarioRunning = true;
        this.scenarioStep = 1;
        this.scenarioTimer = 0;
        this.speedMultiplier = 1.2;
        var ambA = this.ambulances.find(function (a) {
          return a.id === 'AMB-104';
        });
        var ambB = this.ambulances.find(function (a) {
          return a.id === 'AMB-208';
        });
        if (ambA && ambB) {
          ambA.progress = 0.15;
          ambB.progress = 0.12;
        }
        this.logEvent('alert', 'CRITICAL MULTI-AMBULANCE EVENT INITIALIZED: Scenario demo executing.');
        this.notify();
      }
    }, {
      key: "updateScenarioScript",
      value: function updateScenarioScript(dt) {
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
  // AmbuClear UI Components (React 18)
  // [React hooks]

  // --- ICONS (Clean, scalable SVG Lucide-style icons) ---
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
    Zap: function Zap(_ref4) {
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
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }));
    },
    Radio: function Radio(_ref5) {
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
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      }));
    },
    Navigation: function Navigation(_ref6) {
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
        points: "3 11 22 2 13 21 11 13 3 11"
      }));
    },
    Hospital: function Hospital(_ref7) {
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
    TrafficLight: function TrafficLight(_ref8) {
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
    Play: function Play(_ref9) {
      var _ref9$className = _ref9.className,
        className = _ref9$className === void 0 ? "w-5 h-5" : _ref9$className,
        props = _objectWithoutProperties(_ref9, _excluded9);
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
    Pause: function Pause(_ref10) {
      var _ref10$className = _ref10.className,
        className = _ref10$className === void 0 ? "w-5 h-5" : _ref10$className,
        props = _objectWithoutProperties(_ref10, _excluded10);
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
    RotateCcw: function RotateCcw(_ref11) {
      var _ref11$className = _ref11.className,
        className = _ref11$className === void 0 ? "w-5 h-5" : _ref11$className,
        props = _objectWithoutProperties(_ref11, _excluded11);
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
    Volume2: function Volume2(_ref12) {
      var _ref12$className = _ref12.className,
        className = _ref12$className === void 0 ? "w-5 h-5" : _ref12$className,
        props = _objectWithoutProperties(_ref12, _excluded12);
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
    VolumeX: function VolumeX(_ref13) {
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
    BarChart3: function BarChart3(_ref14) {
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
    Settings: function Settings(_ref15) {
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
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      }));
    },
    Presentation: function Presentation(_ref16) {
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
    CheckCircle2: function CheckCircle2(_ref17) {
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
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
    },
    AlertTriangle: function AlertTriangle(_ref18) {
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
    Compass: function Compass(_ref19) {
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
      }, props), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      }));
    },
    ArrowRight: function ArrowRight(_ref20) {
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
      }, props), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "12 5 19 12 12 19"
      }));
    },
    Cpu: function Cpu(_ref21) {
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
    Bell: function Bell(_ref22) {
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
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }));
    },
    Camera: function Camera(_ref23) {
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
      }, props), /*#__PURE__*/React.createElement("path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "13",
        r: "3"
      }));
    },
    Layers: function Layers(_ref24) {
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
      }, props), /*#__PURE__*/React.createElement("polygon", {
        points: "12 2 2 7 12 12 22 7 12 2"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "2 17 12 22 22 17"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "2 12 12 17 22 12"
      }));
    }
  };

  // --- LOGO COMPONENT ---
  function ResQClearLogo(_ref25) {
    var _ref25$size = _ref25.size,
      size = _ref25$size === void 0 ? "default" : _ref25$size;
    var isSmall = size === "sm";
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2.5 group cursor-pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 p-0.5 shadow-lg shadow-emerald-500/20"
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
      className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
    }, "AI-V2X")), !isSmall && /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-slate-400 tracking-wider uppercase font-mono"
    }, "Emergency Traffic Coordination")));
  }

  // Export for app.js
  window.Icons = Icons;
  window.ResQClearLogo = ResQClearLogo;
  window.AmbuClearLogo = ResQClearLogo; // alias for backwards compatibility

  /* ===== END FILE: components.js ===== */

  /* ===== START FILE: LiveMap.js ===== */
  // resQClear Interactive City Digital Twin Simulation & Future Infrastructure Modal
  // [React hooks]

  function LiveMap(_ref26) {
    var simState = _ref26.simState,
      onSelectAmbulance = _ref26.onSelectAmbulance,
      onApplyRoute = _ref26.onApplyRoute;
    var canvasRef = useRef(null);
    var _useState = useState('TACTICAL'),
      _useState2 = _slicedToArray(_useState, 2),
      mapMode = _useState2[0],
      setMapMode = _useState2[1]; // 'TACTICAL' (Digital Twin Simulation - Active)
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
    var _ref27 = simState || {},
      _ref27$ambulances = _ref27.ambulances,
      ambulances = _ref27$ambulances === void 0 ? [] : _ref27$ambulances,
      _ref27$intersections = _ref27.intersections,
      intersections = _ref27$intersections === void 0 ? [] : _ref27$intersections,
      _ref27$congestionZone = _ref27.congestionZones,
      congestionZones = _ref27$congestionZone === void 0 ? [] : _ref27$congestionZone,
      _ref27$hospitals = _ref27.hospitals,
      hospitals = _ref27$hospitals === void 0 ? [] : _ref27$hospitals,
      _ref27$civilianVehicl = _ref27.civilianVehicles,
      civilianVehicles = _ref27$civilianVehicl === void 0 ? [] : _ref27$civilianVehicl,
      _ref27$conflictState = _ref27.conflictState,
      conflictState = _ref27$conflictState === void 0 ? {} : _ref27$conflictState,
      _ref27$aiInsight = _ref27.aiInsight,
      aiInsight = _ref27$aiInsight === void 0 ? {} : _ref27$aiInsight;
    var ambA = ambulances.find(function (a) {
      return a.id === 'AMB-104';
    }) || {};
    var ambB = ambulances.find(function (a) {
      return a.id === 'AMB-208';
    }) || {};
    var int4 = intersections.find(function (i) {
      return i.id === 'int-4';
    }) || {};

    // --- 1. TACTICAL CANVAS DIGITAL TWIN RENDERER (60 FPS) ---
    useEffect(function () {
      var canvas = canvasRef.current;
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width = canvas.width;
      var height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Dark Urban Base Map Grid
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (var x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (var y = 0; y < height; y += 40) {
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
      var roads = [{
        x1: 40,
        y1: 160,
        x2: 880,
        y2: 160,
        name: 'Poonamallee High Road',
        width: 36
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
        width: 36
      }, {
        x1: 280,
        y1: 40,
        x2: 280,
        y2: 660,
        name: '1st Avenue Cross Corridor',
        width: 34
      }, {
        x1: 450,
        y1: 40,
        x2: 450,
        y2: 660,
        name: 'EVR Periyar Central Spine',
        width: 42,
        primary: true
      }, {
        x1: 620,
        y1: 40,
        x2: 620,
        y2: 660,
        name: 'Hospital Access Highway',
        width: 34
      }, {
        x1: 780,
        y1: 120,
        x2: 780,
        y2: 580,
        name: 'Medical Center Access Link',
        width: 30
      }];
      roads.forEach(function (r) {
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
        ctx.moveTo(r.x1, r.y1 - r.width / 2);
        ctx.lineTo(r.x2, r.y2 - r.width / 2);
        ctx.moveTo(r.x1, r.y1 + r.width / 2);
        ctx.lineTo(r.x2, r.y2 + r.width / 2);
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
      congestionZones.forEach(function (zone) {
        if (!zone.active) return;
        var grad = ctx.createRadialGradient(zone.x, zone.y, 5, zone.x, zone.y, zone.radius);
        grad.addColorStop(0, zone.severity === 'HIGH' ? 'rgba(239, 68, 68, 0.45)' : 'rgba(245, 158, 11, 0.35)');
        grad.addColorStop(0.7, zone.severity === 'HIGH' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.1)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = zone.severity === 'HIGH' ? '#ef4444' : '#f59e0b';
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.fillText("CONGESTION ".concat(zone.delayImpact), zone.x - 30, zone.y - zone.radius - 4);
      });

      // Green Wave Emergency Corridors & Normal Routes
      ambulances.forEach(function (amb) {
        if (!amb.path || amb.path.length < 2) return;

        // Normal Route Path (Blue tint baseline)
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        amb.path.forEach(function (pt, i) {
          if (i === 0) ctx.moveTo(pt.x, pt.y);else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Active Green Wave Simulated Emergency Corridor
        if (amb.currentX && amb.currentY) {
          var isPriorityA = amb.id === 'AMB-104' && conflictState.stage === 'PRIORITY_A';
          var isPriorityB = amb.id === 'AMB-208' && conflictState.stage === 'PRIORITY_B';
          var isGreenWave = isPriorityA || isPriorityB;
          ctx.strokeStyle = isGreenWave ? '#10b981' : 'rgba(16, 185, 129, 0.65)';
          ctx.lineWidth = isGreenWave ? 8 : 6;
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = isGreenWave ? 14 : 6;
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
            var arrowX = amb.currentX + Math.cos(amb.heading) * 20;
            var arrowY = amb.currentY + Math.sin(amb.heading) * 20;
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

      // Intersections with Clear IDs and Simulated Signals
      intersections.forEach(function (inter) {
        ctx.save();
        ctx.translate(inter.x, inter.y);

        // Junction ID Label
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(inter.code || inter.id.toUpperCase(), -18, -28);

        // Conflict Junction Special Highlight
        if (inter.id === 'int-4') {
          var isConflict = conflictState.stage && conflictState.stage !== 'IDLE' && conflictState.stage !== 'BOTH_CLEARED';
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
        var isRed = inter.northSouth === 'RED';
        ctx.fillStyle = isRed ? '#ef4444' : '#450a0a';
        ctx.beginPath();
        ctx.arc(0, -12, 4, 0, Math.PI * 2);
        ctx.fill();

        // Yellow Lamp
        var isYellow = inter.northSouth === 'YELLOW';
        ctx.fillStyle = isYellow ? '#f59e0b' : '#451a03';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();

        // Green Lamp
        var isGreen = inter.northSouth === 'GREEN';
        ctx.fillStyle = isGreen ? '#10b981' : '#022c22';
        ctx.beginPath();
        ctx.arc(0, 12, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Destination Hospitals
      hospitals.forEach(function (hosp) {
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
      ambulances.forEach(function (amb) {
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
        ctx.fillText("".concat(amb.id, " (").concat(amb.name, ")"), amb.currentX - 28, amb.currentY - 18);
      });
    }, [simState]);
    return /*#__PURE__*/React.createElement("div", {
      className: "relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between pointer-events-none gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 pointer-events-auto bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-xl"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMapMode('TACTICAL');
      },
      className: "px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 transition-all ".concat(mapMode === 'TACTICAL' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white')
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
    }), /*#__PURE__*/React.createElement("span", null, "60 FPS ENGINE ACTIVE")))), /*#__PURE__*/React.createElement("div", {
      className: "relative w-full h-full flex-1"
    }, /*#__PURE__*/React.createElement("canvas", {
      ref: canvasRef,
      width: 920,
      height: 680,
      className: "w-full h-full object-contain cursor-crosshair"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-4 right-4 z-20 transition-all ".concat(cctvExpanded ? 'w-80 h-56 sm:w-96 sm:h-64' : 'w-48 h-32', " bg-slate-950/95 rounded-xl border border-slate-700 shadow-2xl overflow-hidden pointer-events-auto flex flex-col")
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
      className: "flex-1 relative bg-slate-900 overflow-hidden flex items-center justify-center p-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-scanlines opacity-20 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-center font-mono text-[10px] space-y-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-emerald-400 font-bold"
    }, "LIVE CCTV STREAM (SIMULATED)"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[9px]"
    }, "Intersection 4 \u2022 Central Corridor"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-500 text-[8px]"
    }, int4.modeLabel || 'NORMAL CYCLE')))), showLegend && /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5 shadow-xl pointer-events-auto max-w-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase font-bold border-b border-slate-800 pb-1"
    }, "Map Legend"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-1.5 rounded bg-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "GREEN: Emergency Corridor")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-1.5 rounded bg-red-500"
    }), /*#__PURE__*/React.createElement("span", null, "RED: Critical Congestion")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-1.5 rounded bg-amber-500"
    }), /*#__PURE__*/React.createElement("span", null, "AMBER: Moderate Congestion")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-1.5 rounded bg-sky-400"
    }), /*#__PURE__*/React.createElement("span", null, "BLUE: Normal Route")))), showRealWorldLockedModal && /*#__PURE__*/React.createElement("div", {
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
    }, "\u25CB Phase 4: Authorized Municipal Pilot"))), /*#__PURE__*/React.createElement("div", {
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
  // resQClear Multi-Ambulance Conflict Engine & Decision Factors Panel
  // [React hooks]

  function ConflictEnginePanel(_ref28) {
    var simState = _ref28.simState,
      onClose = _ref28.onClose;
    var _ref29 = simState || {},
      _ref29$conflictState = _ref29.conflictState,
      conflictState = _ref29$conflictState === void 0 ? {} : _ref29$conflictState,
      _ref29$ambulances = _ref29.ambulances,
      ambulances = _ref29$ambulances === void 0 ? [] : _ref29$ambulances,
      _ref29$intersections = _ref29.intersections,
      intersections = _ref29$intersections === void 0 ? [] : _ref29$intersections;
    var ambA = ambulances.find(function (a) {
      return a.id === 'AMB-104';
    }) || {};
    var ambB = ambulances.find(function (a) {
      return a.id === 'AMB-208';
    }) || {};
    var int4 = intersections.find(function (i) {
      return i.id === 'int-4';
    }) || {};
    var isDetected = conflictState.stage === 'DETECTED';
    var isResolving = conflictState.stage === 'RESOLVING';
    var isAActive = conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'A_CLEARED';
    var isBActive = conflictState.stage === 'PRIORITY_B';
    var isBothCleared = conflictState.stage === 'BOTH_CLEARED';
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
    }, "CRITICAL MULTI-AMBULANCE EVENT"), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold"
    }, "SIMULATION")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono"
    }, "Convergence Node: Central Conflict Junction (INT-04) \u2022 AMB-104 & AMB-208"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 font-mono text-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
    }, "ENGINE: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, "AI-V2X ARBITRATION")), isBothCleared ? /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "CONFLICT RESOLVED")) : /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold animate-pulse"
    }, "AI-ASSISTED DECISION IN PROGRESS"))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border flex items-center justify-between transition-all ".concat(isBothCleared ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' : isAActive || isBActive ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300' : isResolving ? 'bg-amber-950/30 border-amber-500/40 text-amber-300' : 'bg-red-950/40 border-red-500/50 text-red-300')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, isBothCleared ? /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-5 h-5 text-emerald-400"
    }) : /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
      className: "w-5 h-5 text-amber-400 animate-pulse"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-extrabold text-sm font-mono uppercase tracking-wide"
    }, conflictState.bannerText || 'MULTIPLE EMERGENCY CONFLICT DETECTED'), /*#__PURE__*/React.createElement("div", {
      className: "text-xs opacity-90 mt-0.5"
    }, conflictState.bannerSubtext || 'Two critical ALS units approaching the same intersection from opposing vectors.'))), /*#__PURE__*/React.createElement("div", {
      className: "hidden sm:block text-right font-mono text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400 text-[10px]"
    }, "SEQUENCE STATUS"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-white"
    }, isBothCleared ? 'SAFE CORRIDOR COMPLETED' : isBActive ? 'STAGE 02 / 02' : isAActive ? 'STAGE 01 / 02' : 'ARBITRATING'))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border transition-all ".concat(isAActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-sm text-white"
    }, "AMB-104 (Ambulance A)")), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold"
    }, "CRITICAL")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Target Node:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "INT-04 (Central Conflict)")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Approach Vector:"), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-slate-200"
    }, "North Corridors (Anna Nagar)")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Destination:"), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-emerald-400"
    }, "Government Hospital")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Distance to INT-04:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, ambA.distanceToConflict || 180, " m")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Intersection ETA:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-emerald-400"
    }, ambA.currentIntersectionEta || 43, " sec")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Current Velocity:"), /*#__PURE__*/React.createElement("span", null, ambA.speed || 46, " km/h"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-mono"
    }, "COORDINATION PRIORITY:"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold px-2.5 py-0.5 rounded ".concat(isAActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300')
    }, "PRIORITY 01"))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border transition-all ".concat(isBActive ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/40' : 'bg-slate-900/60 border-slate-800')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2.5 h-2.5 rounded-full bg-amber-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-sm text-white"
    }, "AMB-208 (Ambulance B)")), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold"
    }, "CRITICAL")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Target Node:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, "INT-04 (Central Conflict)")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Approach Vector:"), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-slate-200"
    }, "South Link (T. Nagar)")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Destination:"), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-emerald-400"
    }, "Apollo Hospital")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Distance to INT-04:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-white"
    }, ambB.distanceToConflict || 290, " m")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Intersection ETA:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-amber-400"
    }, ambB.currentIntersectionEta || 50, " sec")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-slate-300"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "Current Velocity:"), /*#__PURE__*/React.createElement("span", null, ambB.speed || 40, " km/h"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-mono"
    }, "COORDINATION PRIORITY:"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold px-2.5 py-0.5 rounded ".concat(isBActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300')
    }, "PRIORITY 02 (Secondary)")))), /*#__PURE__*/React.createElement("div", {
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
    }, "Confidence:"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30"
    }, "96% (SIMULATION ESTIMATE)"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "ETA to Intersection"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-white mt-0.5"
    }, "AMB-104: 43s"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, "AMB-208: 50s")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Emergency Severity"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-red-400 mt-0.5"
    }, "AMB-104: Critical"), /*#__PURE__*/React.createElement("div", {
      className: "text-red-400"
    }, "AMB-208: Critical")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Conflict Probability"), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-red-400 mt-0.5"
    }, "HIGH (Cross-Axis)"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, "Overlap: 6.2s window")), /*#__PURE__*/React.createElement("div", {
      className: "p-2 rounded-lg bg-slate-950 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Recommended Sequence"), /*#__PURE__*/React.createElement("div", {
      className: "font-extrabold text-emerald-400 mt-0.5"
    }, "AMB-104 \u2192 AMB-208"), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, "Sequential Clearance"))), /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400 font-mono"
    }, "Arbitration Reason:"), " AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict and maintains continuous vehicle momentum."), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg border flex items-center space-x-2 ".concat(isAActive || isBActive || isBothCleared ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400')
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "1."), /*#__PURE__*/React.createElement("span", null, "AMB-104 PRIORITY 01"), isAActive && /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3.5 h-3.5 text-emerald-400 ml-auto"
    })), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg border flex items-center space-x-2 ".concat(isBActive || isBothCleared ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400')
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "2."), /*#__PURE__*/React.createElement("span", null, "AMB-208 PRIORITY 02"), isBActive && /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3.5 h-3.5 text-emerald-400 ml-auto"
    })), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-lg border flex items-center space-x-2 ".concat(isBothCleared ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400')
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "3."), /*#__PURE__*/React.createElement("span", null, "CONFLICT RESOLVED"), isBothCleared && /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3.5 h-3.5 text-emerald-400 ml-auto"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement(Icons.Shield, {
      className: "w-3.5 h-3.5 text-cyan-400"
    }), /*#__PURE__*/React.createElement("span", null, "Traffic coordination priority \u2022 Emergency severity provided by authorized emergency personnel.")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 text-slate-400"
    }, /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
      className: "w-3.5 h-3.5 text-amber-500/80"
    }), /*#__PURE__*/React.createElement("span", null, "Simulation decision \u2014 not connected to real traffic infrastructure."))));
  }
  window.ConflictEnginePanel = ConflictEnginePanel;

  /* ===== END FILE: ConflictEngineModal.js ===== */

  /* ===== START FILE: RightStatusPanel.js ===== */
  // resQClear Right-Side Live Status & Emergency Event Stream Panel
  // [React hooks]

  function RightStatusPanel(_ref30) {
    var simState = _ref30.simState,
      onApplyRoute = _ref30.onApplyRoute;
    var _ref31 = simState || {},
      _ref31$events = _ref31.events,
      events = _ref31$events === void 0 ? [] : _ref31$events,
      _ref31$liveMetrics = _ref31.liveMetrics,
      liveMetrics = _ref31$liveMetrics === void 0 ? {} : _ref31$liveMetrics,
      _ref31$ambulances = _ref31.ambulances,
      ambulances = _ref31$ambulances === void 0 ? [] : _ref31$ambulances,
      _ref31$aiInsight = _ref31.aiInsight,
      aiInsight = _ref31$aiInsight === void 0 ? {} : _ref31$aiInsight;
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
      className: "text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
    }, "SIMULATION ESTIMATE")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-300 leading-relaxed space-y-1 font-sans"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-white"
    }, "High traffic density detected on Anna Salai North Link."), /*#__PURE__*/React.createElement("p", {
      className: "text-amber-400 font-mono text-[11px]"
    }, "Predicted delay: +2.4 min"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400 text-[11px]"
    }, "Alternative route may reduce simulated delay.")), /*#__PURE__*/React.createElement("div", {
      className: "pt-2 border-t border-slate-800 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-mono text-emerald-400 font-bold"
    }, "ESTIMATED SAVINGS: 2 min 18 sec"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onApplyRoute();
      },
      disabled: aiInsight.applied,
      className: "px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all flex items-center space-x-1.5 ".concat(aiInsight.applied ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20')
    }, aiInsight.applied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "Route Applied")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.Navigation, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/React.createElement("span", null, "SIMULATE ALTERNATE ROUTE"))))), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-2xl border border-slate-800 flex-1 flex flex-col min-h-[320px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pb-3 mb-3 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-red-500 animate-ping"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-sm text-white"
    }, "Emergency Events")), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono text-slate-400"
    }, "OPERATIONS LOG")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2.5 overflow-y-auto flex-1 max-h-[380px] pr-1"
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
        className: "font-mono text-[10px] text-slate-400"
      }, evt.time), /*#__PURE__*/React.createElement("span", {
        className: "px-1.5 py-0.2 rounded text-[9px] font-mono border ".concat(getEventBadge(evt.type))
      }, evt.type.toUpperCase())), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-200 text-xs leading-snug"
      }, evt.message)));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-2xl border border-slate-800 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "CORRIDOR CLEARANCE SPEED"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, liveMetrics.avgSpeed || 44.2, " km/h")), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-500",
      style: {
        width: "".concat(Math.min(100, liveMetrics.avgSpeed / 60 * 100), "%")
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 block text-[10px]"
    }, "EST. DELAY AVOIDED:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-white text-xs"
    }, "2m 18s (Simulated)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 block text-[10px]"
    }, "SIGNALS SYNCED:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400 text-xs"
    }, "4 Intersections")))));
  }
  window.RightStatusPanel = RightStatusPanel;

  /* ===== END FILE: RightStatusPanel.js ===== */

  /* ===== START FILE: AmbulanceFleetView.js ===== */
  // resQClear Ambulance Fleet Management Cards View
  // [React hooks]

  function AmbulanceFleetView(_ref32) {
    var _ambulances$;
    var simState = _ref32.simState,
      onTriggerAmbulance = _ref32.onTriggerAmbulance;
    var _ref33 = simState || {},
      _ref33$ambulances = _ref33.ambulances,
      ambulances = _ref33$ambulances === void 0 ? [] : _ref33$ambulances;
    var _useState9 = useState(((_ambulances$ = ambulances[0]) === null || _ambulances$ === void 0 ? void 0 : _ambulances$.id) || 'AMB-104'),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedAmb = _useState10[0],
      setSelectedAmb = _useState10[1];
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Active Emergency Fleet Telemetry"), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold"
    }, "SIMULATION DATA")), /*#__PURE__*/React.createElement("p", {
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
        className: "glass-panel rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden ".concat(isSelected ? 'border-emerald-500 shadow-xl shadow-emerald-950/40 bg-slate-900/90' : 'border-slate-800 hover:border-slate-700 bg-slate-950/80')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center space-x-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(isCritical ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40')
      }, /*#__PURE__*/React.createElement(Icons.Ambulance, {
        className: "w-5 h-5"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        className: "font-extrabold text-base text-white"
      }, amb.id), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400 font-mono"
      }, amb.name, " \u2022 ", amb.vehicleModel))), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-0.5 rounded text-[10px] font-mono font-bold border ".concat(isCritical ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40')
      }, amb.status), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-mono text-slate-400 mt-1"
      }, "PRIORITY 0", amb.priorityRank))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 text-xs font-mono"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "CURRENT SPEED:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-bold text-sm"
      }, amb.speed, " ", amb.speedUnit)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "HOSPITAL ETA:"), /*#__PURE__*/React.createElement("span", {
        className: "text-white font-bold text-sm"
      }, amb.eta, " min")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "DISTANCE REMAINING:"), /*#__PURE__*/React.createElement("span", {
        className: "text-slate-200 font-medium"
      }, amb.distance)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 block text-[10px]"
      }, "INTERSECTION ETA:"), /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-400 font-bold"
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
        className: "text-teal-300 font-medium"
      }, amb.routeStatus)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "Driver / Paramedic:"), /*#__PURE__*/React.createElement("span", {
        className: "text-slate-200"
      }, amb.driver))), amb.patient && /*#__PURE__*/React.createElement("div", {
        className: "p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-1"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 font-mono text-[10px]"
      }, "AUTHORIZED TRIAGE:"), /*#__PURE__*/React.createElement("span", {
        className: "text-red-400 font-mono font-bold text-[10px]"
      }, amb.patient.age)), /*#__PURE__*/React.createElement("div", {
        className: "font-semibold text-white mb-2"
      }, amb.patient.condition), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-900 pt-1.5"
      }, /*#__PURE__*/React.createElement("span", null, "HR: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-white"
      }, amb.patient.vitals.hr), " bpm"), /*#__PURE__*/React.createElement("span", null, "BP: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-white"
      }, amb.patient.vitals.bp)), /*#__PURE__*/React.createElement("span", null, "SpO2: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-emerald-400"
      }, amb.patient.vitals.spo2, "%")))), /*#__PURE__*/React.createElement("div", {
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
  // resQClear Hospital Receiving & Trauma Readiness Dashboard
  // [React hooks]

  function HospitalView(_ref34) {
    var simState = _ref34.simState;
    var _ref35 = simState || {},
      _ref35$hospitals = _ref35.hospitals,
      hospitals = _ref35$hospitals === void 0 ? [] : _ref35$hospitals,
      _ref35$ambulances = _ref35.ambulances,
      ambulances = _ref35$ambulances === void 0 ? [] : _ref35$ambulances;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-extrabold text-white"
    }, "Hospital Emergency Receiving Hubs"), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold"
    }, "SIMULATION")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "Hospital notification simulated \u2022 Telemetry synchronized for ER bay preparation")), /*#__PURE__*/React.createElement("div", {
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
      }, "TRAUMA BAY STATUS:"), /*#__PURE__*/React.createElement("span", {
        className: "px-2.5 py-1 rounded font-bold border ".concat(isReady ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40')
      }, hosp.erStatus === 'READY' ? 'READY (TEAM NOTIFIED)' : 'STANDBY')), /*#__PURE__*/React.createElement("div", {
        className: "p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/25 mb-5 space-y-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between text-xs font-mono"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400"
      }, "INCOMING TRANSPORT:"), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-400 font-bold"
      }, hosp.assignedAmbulance)), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-mono text-slate-400 uppercase"
      }, "ESTIMATED ARRIVAL (ETA)"), /*#__PURE__*/React.createElement("div", {
        className: "text-2xl font-extrabold text-white font-mono"
      }, incomingAmb.eta || hosp.eta, " ", /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-normal text-slate-400"
      }, "min"))), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-mono text-slate-400 uppercase"
      }, "EMERGENCY STATUS"), /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold"
      }, incomingAmb.status || 'CRITICAL'))), incomingAmb.patient && /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-slate-300 pt-2 border-t border-slate-800/80"
      }, /*#__PURE__*/React.createElement("strong", null, "Triage:"), " ", incomingAmb.patient.condition, " (", incomingAmb.patient.age, ")")), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2 mb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-xs font-mono font-bold text-slate-300 uppercase"
      }, "Hospital Preparation Protocol:"), hosp.readiness.map(function (item, idx) {
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
        className: "text-[10px] text-slate-400 text-center pt-1 border-t border-slate-900"
      }, hosp.integrationNote || 'Hospital notification simulated')));
    })));
  }
  window.HospitalView = HospitalView;

  /* ===== END FILE: HospitalView.js ===== */

  /* ===== START FILE: AnalyticsView.js ===== */
  // resQClear Traffic Analytics & Performance Metrics Component
  // [React hooks]

  function AnalyticsView(_ref36) {
    var simState = _ref36.simState;
    var _ref37 = simState || {},
      _ref37$analyticsData = _ref37.analyticsData,
      analyticsData = _ref37$analyticsData === void 0 ? RESQCLEAR_DATA.analyticsData : _ref37$analyticsData,
      _ref37$demoMetrics = _ref37.demoMetrics,
      demoMetrics = _ref37$demoMetrics === void 0 ? RESQCLEAR_DATA.demoMetrics : _ref37$demoMetrics;
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
    }, "SIMULATION DATA")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "All analytics shown are simulated demonstration data.")), /*#__PURE__*/React.createElement("div", {
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
    }, "Simulated Travel Time"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-emerald-400 mt-1"
    }, "06:14 min"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 mt-0.5"
    }, "Avg per critical route")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Estimated Delay Avoided"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-teal-300 mt-1"
    }, "2m 18s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 mt-0.5"
    }, "Peak bottleneck savings")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Intersection Wait Time"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-cyan-400 mt-1"
    }, "4.2 sec"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 mt-0.5"
    }, "Reduced from 48s base")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Route Efficiency"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-purple-400 mt-1"
    }, "+33.8%"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 mt-0.5"
    }, "Corridor flow boost")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Corridor Activations"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-emerald-400 mt-1"
    }, "14 Nodes"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 mt-0.5"
    }, "Dynamic phase overrides")), /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Conflict Events"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-extrabold text-amber-400 mt-1"
    }, "12 Events"), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] text-slate-400 mt-0.5"
    }, "Zero cross-axis deadlock"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center justify-between gap-2 mb-6"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-white"
    }, "Simulated Ambulance Transit Time (Minutes)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono"
    }, "Hourly response comparison: Traditional siren vs resQClear AI corridor")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-4 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded-full bg-red-400/80"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "Traditional Siren Base")), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("span", null, "Rush Hour Savings: ", /*#__PURE__*/React.createElement("strong", null, "11.3 min avoided during 18:00 peak")), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, "Average Corridor Improvement: +33.8%"))), /*#__PURE__*/React.createElement("div", {
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
      className: "mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center"
    }, "All analytics shown are simulated demonstration data."))));
  }
  window.AnalyticsView = AnalyticsView;

  /* ===== END FILE: AnalyticsView.js ===== */

  /* ===== START FILE: TrafficNetworkView.js ===== */
  // resQClear Traffic Network & Intersections Control View
  // [React hooks]

  function TrafficNetworkView(_ref38) {
    var simState = _ref38.simState;
    var _ref39 = simState || {},
      _ref39$intersections = _ref39.intersections,
      intersections = _ref39$intersections === void 0 ? [] : _ref39$intersections,
      _ref39$conflictState = _ref39.conflictState,
      conflictState = _ref39$conflictState === void 0 ? {} : _ref39$conflictState;
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
    }, "SIMULATION")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 font-mono mt-1"
    }, "Simulated signal phase timing & emergency green-wave corridor transitions")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 text-xs font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
    }, "TOTAL NODES: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, intersections.length)), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold"
    }, "V2X SIMULATION SYNC"))), /*#__PURE__*/React.createElement("div", {
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
      }, inter.code || inter.id.toUpperCase(), " \u2022 Simulation Coordinates: (", inter.x, ", ", inter.y, ")")))), /*#__PURE__*/React.createElement("div", {
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
      }, "Cycle Mode:"), /*#__PURE__*/React.createElement("span", {
        className: "text-teal-300 font-medium"
      }, inter.modeLabel || 'NORMAL CYCLE'))), /*#__PURE__*/React.createElement("div", {
        className: "pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400"
      }, /*#__PURE__*/React.createElement("span", null, "SIMULATION INTEGRATION: ", /*#__PURE__*/React.createElement("strong", {
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
  // [React hooks]

  function SettingsView(_ref40) {
    var simState = _ref40.simState,
      onReset = _ref40.onReset;
    var _useState11 = useState('chennai'),
      _useState12 = _slicedToArray(_useState11, 2),
      cityGrid = _useState12[0],
      setCityGrid = _useState12[1];
    var _useState13 = useState(25),
      _useState14 = _slicedToArray(_useState13, 2),
      v2xLatency = _useState14[0],
      setV2xLatency = _useState14[1];
    var _useState15 = useState(300),
      _useState16 = _slicedToArray(_useState15, 2),
      conflictHorizon = _useState16[0],
      setConflictHorizon = _useState16[1];
    var _useState17 = useState(15),
      _useState18 = _slicedToArray(_useState17, 2),
      greenWaveLead = _useState18[0],
      setGreenWaveLead = _useState18[1];
    var _useState19 = useState(true),
      _useState20 = _slicedToArray(_useState19, 2),
      autoReroute = _useState20[0],
      setAutoReroute = _useState20[1];
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
  // [React hooks]

  function DemoControls(_ref41) {
    var simState = _ref41.simState,
      onRunScenario = _ref41.onRunScenario,
      onStart = _ref41.onStart,
      onPause = _ref41.onPause,
      onReset = _ref41.onReset,
      onTriggerA = _ref41.onTriggerA,
      onTriggerB = _ref41.onTriggerB,
      onTriggerBoth = _ref41.onTriggerBoth,
      onCreateJam = _ref41.onCreateJam,
      onClearJam = _ref41.onClearJam,
      onSetSpeed = _ref41.onSetSpeed,
      onToggleSound = _ref41.onToggleSound,
      soundEnabled = _ref41.soundEnabled;
    var _ref42 = simState || {},
      isRunning = _ref42.isRunning,
      speedMultiplier = _ref42.speedMultiplier,
      scenarioRunning = _ref42.scenarioRunning,
      scenarioStep = _ref42.scenarioStep;
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
    }, scenarioStep || 1, " / 12"))), /*#__PURE__*/React.createElement("div", {
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
  // resQClear Startup Pitch Presentation Mode Component
  // [React hooks]

  function PresentationMode(_ref43) {
    var simState = _ref43.simState,
      onExit = _ref43.onExit,
      onRunScenario = _ref43.onRunScenario;
    var _ref44 = simState || {},
      _ref44$conflictState = _ref44.conflictState,
      conflictState = _ref44$conflictState === void 0 ? {} : _ref44$conflictState,
      _ref44$liveMetrics = _ref44.liveMetrics,
      liveMetrics = _ref44$liveMetrics === void 0 ? {} : _ref44$liveMetrics;
    var _useState21 = useState(0),
      _useState22 = _slicedToArray(_useState21, 2),
      currentSlide = _useState22[0],
      setCurrentSlide = _useState22[1];
    var narrativeSteps = [{
      id: 1,
      tag: 'STEP 01',
      title: 'EMERGENCY DETECTED',
      desc: 'High-priority cardiac alert dispatched from Anna Nagar. resQClear vehicle telemetry immediately acquires emergency unit location.',
      icon: Icons.Ambulance,
      color: 'text-red-400',
      border: 'border-red-500/40'
    }, {
      id: 2,
      tag: 'STEP 02',
      title: 'TRAFFIC CONGESTION PREDICTED',
      desc: 'Predictive neural model detects severe bottleneck (+2.4 min delay) along primary arterial corridor.',
      icon: Icons.Activity,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    }, {
      id: 3,
      tag: 'STEP 03',
      title: 'MULTIPLE EMERGENCY VEHICLES DETECTED',
      desc: 'Secondary critical ALS unit dispatched simultaneously from T. Nagar heading toward Apollo Hospital.',
      icon: Icons.AlertTriangle,
      color: 'text-red-400',
      border: 'border-red-500/40'
    }, {
      id: 4,
      tag: 'STEP 04',
      title: 'CONFLICT INTERSECTION IDENTIFIED',
      desc: 'Convergence analysis identifies impending simultaneous arrival at Intersection 4 (Central Conflict Junction).',
      icon: Icons.Crosshair,
      color: 'text-amber-400',
      border: 'border-amber-500/40'
    }, {
      id: 5,
      tag: 'STEP 05',
      title: 'AI-ASSISTED CONFLICT RESOLUTION',
      desc: 'Transparent scoring model evaluates ETA (43s vs 50s), distance, and turning movements to formulate sequential priority.',
      icon: Icons.Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40'
    }, {
      id: 6,
      tag: 'STEP 06',
      title: 'AMB-104 — PRIORITY 01',
      desc: 'Simulated emergency corridor locked on North-South axis. Traffic signal turns green for AMB-104.',
      icon: Icons.TrafficLight,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 7,
      tag: 'STEP 07',
      title: 'INTERSECTION CLEARED',
      desc: 'AMB-104 safely clears intersection without deceleration. System immediately initiates phase transfer.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 8,
      tag: 'STEP 08',
      title: 'AMB-208 — PRIORITY 02',
      desc: 'South corridor emergency green wave activated for AMB-208. Secondary clearance proceeds smoothly.',
      icon: Icons.TrafficLight,
      color: 'text-teal-300',
      border: 'border-teal-500/40'
    }, {
      id: 9,
      tag: 'STEP 09',
      title: 'INTERSECTION CLEARED',
      desc: 'AMB-208 clears intersection safely without coming to a complete stop.',
      icon: Icons.CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }, {
      id: 10,
      tag: 'STEP 10',
      title: 'EMERGENCY ROUTES COORDINATED',
      desc: 'Both emergency routes coordinated successfully. Traffic signal returns to normal municipal cycle.',
      icon: Icons.ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40'
    }];

    // Map simulation state to active narrative slide
    useEffect(function () {
      if (conflictState.stage === 'DETECTED') setCurrentSlide(2);else if (conflictState.stage === 'RESOLVING') setCurrentSlide(4);else if (conflictState.stage === 'PRIORITY_A') setCurrentSlide(5);else if (conflictState.stage === 'A_CLEARED') setCurrentSlide(6);else if (conflictState.stage === 'PRIORITY_B') setCurrentSlide(7);else if (conflictState.stage === 'BOTH_CLEARED') setCurrentSlide(9);
    }, [conflictState.stage]);
    var activeStep = narrativeSteps[currentSlide] || narrativeSteps[0];
    var isFinalSlide = currentSlide === narrativeSteps.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pb-4 border-b border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, null), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline-block px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-mono font-bold"
    }, "PRESENTATION MODE \u2022 INVESTOR / HACKATHON DEMO")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setCurrentSlide(0);
        onRunScenario();
      },
      className: "px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center space-x-2 transition-all shadow-lg shadow-emerald-500/20"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "Re-Run Live Scenario")), /*#__PURE__*/React.createElement("button", {
      onClick: onExit,
      className: "px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-all"
    }, "Exit Presentation Mode"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-7 h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative"
    }, /*#__PURE__*/React.createElement(LiveMap, {
      simState: simState
    })), /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-5 space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full text-xs font-mono font-bold border ".concat(activeStep.border, " ").concat(activeStep.color, " bg-slate-950")
    }, activeStep.tag, " \u2022 STEP ", currentSlide + 1, " OF 10"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono text-slate-400"
    }, "SIMULATION DEMO")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start space-x-4 my-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3.5 rounded-2xl bg-slate-950 border ".concat(activeStep.border, " ").concat(activeStep.color)
    }, /*#__PURE__*/React.createElement(activeStep.icon, {
      className: "w-7 h-7"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug"
    }, activeStep.title), /*#__PURE__*/React.createElement("p", {
      className: "mt-2 text-sm text-slate-300 leading-relaxed"
    }, activeStep.desc))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1.5 pt-6 border-t border-slate-800/80 overflow-x-auto pb-1"
    }, narrativeSteps.map(function (s, idx) {
      return /*#__PURE__*/React.createElement("button", {
        key: s.id,
        onClick: function onClick() {
          return setCurrentSlide(idx);
        },
        className: "h-2.5 rounded-full transition-all ".concat(currentSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'),
        title: s.title
      });
    }))), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-mono text-slate-400 uppercase tracking-wider font-bold"
    }, "SIMULATED DEMO IMPACT"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3 font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-extrabold text-emerald-400"
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 leading-tight"
    }, "Ambulances Coordinated")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-extrabold text-teal-300"
    }, "1"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 leading-tight"
    }, "Conflict Node Resolved")), /*#__PURE__*/React.createElement("div", {
      className: "p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-lg font-extrabold text-cyan-400"
    }, "2m 18s"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 leading-tight"
    }, "Est. Delay Avoided"))), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-mono text-slate-400 text-center pt-1"
    }, "resQClear: \u201CClear the way. Save lives.\u201D \u2022 Simulation Prototype")))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentSlide(Math.max(0, currentSlide - 1));
      },
      disabled: currentSlide === 0,
      className: "px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-white font-bold transition-all"
    }, "\u2190 Previous Step"), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline"
    }, "Use controls or run scenario to observe dynamic progression"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentSlide(Math.min(narrativeSteps.length - 1, currentSlide + 1));
      },
      disabled: currentSlide === narrativeSteps.length - 1,
      className: "px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold transition-all"
    }, "Next Step \u2192")));
  }
  window.PresentationMode = PresentationMode;

  /* ===== END FILE: PresentationMode.js ===== */

  /* ===== START FILE: TopNav.js ===== */
  // resQClear Operations Center Top Navigation Bar
  // [React hooks]

  function TopNav(_ref45) {
    var simState = _ref45.simState,
      onLaunchScenario = _ref45.onLaunchScenario,
      onTogglePresentation = _ref45.onTogglePresentation,
      onToggleSound = _ref45.onToggleSound,
      soundEnabled = _ref45.soundEnabled,
      onOpenLanding = _ref45.onOpenLanding;
    var _useState23 = useState(''),
      _useState24 = _slicedToArray(_useState23, 2),
      timeStr = _useState24[0],
      setTimeStr = _useState24[1];
    var _ref46 = simState || {},
      _ref46$conflictState = _ref46.conflictState,
      conflictState = _ref46$conflictState === void 0 ? {} : _ref46$conflictState,
      _ref46$scenarioRunnin = _ref46.scenarioRunning,
      scenarioRunning = _ref46$scenarioRunnin === void 0 ? false : _ref46$scenarioRunnin;
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
    var getSystemStatus = function getSystemStatus() {
      if (conflictState.stage === 'DETECTED' || conflictState.stage === 'RESOLVING') {
        return {
          text: 'AI CONFLICT ARBITRATION ACTIVE',
          color: 'text-red-400',
          bg: 'bg-red-500/15',
          border: 'border-red-500/40',
          dot: 'bg-red-500 animate-ping'
        };
      }
      if (conflictState.stage === 'PRIORITY_A' || conflictState.stage === 'PRIORITY_B') {
        return {
          text: 'SIMULATED EMERGENCY CORRIDOR ENGAGED',
          color: 'text-emerald-400',
          bg: 'bg-emerald-500/15',
          border: 'border-emerald-500/40',
          dot: 'bg-emerald-400 animate-pulse'
        };
      }
      return {
        text: 'GRID NORMAL • 6 SIGNALS ONLINE',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        dot: 'bg-emerald-400'
      };
    };
    var status = getSystemStatus();
    return /*#__PURE__*/React.createElement("header", {
      className: "h-16 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-4"
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onOpenLanding,
      className: "cursor-pointer",
      title: "Go to Landing Page"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, {
      size: "default"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-bold"
    }, "SIMULATION MODE"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "|"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "CHENNAI METRO GRID"))), /*#__PURE__*/React.createElement("div", {
      className: "hidden md:flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border ".concat(status.bg, " ").concat(status.border, " ").concat(status.color)
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full ".concat(status.dot)
    }), /*#__PURE__*/React.createElement("span", null, status.text))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 sm:space-x-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "IST"), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400 font-bold"
    }, timeStr || '18:42:00')), /*#__PURE__*/React.createElement("button", {
      onClick: onLaunchScenario,
      className: "hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-500/20 to-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-mono font-bold transition-all",
      title: "Run Dual Ambulance Conflict Scenario"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-3.5 h-3.5 text-emerald-400"
    }), /*#__PURE__*/React.createElement("span", null, "Scenario Demo")), /*#__PURE__*/React.createElement("button", {
      onClick: onTogglePresentation,
      className: "inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 text-xs font-mono font-bold transition-all",
      title: "Startup Presentation Pitch Mode"
    }, /*#__PURE__*/React.createElement(Icons.Presentation, {
      className: "w-3.5 h-3.5 text-purple-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden md:inline"
    }, "Pitch Mode")), /*#__PURE__*/React.createElement("button", {
      onClick: onToggleSound,
      className: "p-2 rounded-xl border transition-all ".concat(soundEnabled ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-slate-900 text-slate-500 border-slate-800'),
      title: soundEnabled ? 'Radio Audio On' : 'Radio Audio Muted'
    }, soundEnabled ? /*#__PURE__*/React.createElement(Icons.Volume2, {
      className: "w-4 h-4"
    }) : /*#__PURE__*/React.createElement(Icons.VolumeX, {
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2.5 pl-2 border-l border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-xs shadow-inner"
    }, "SR"), /*#__PURE__*/React.createElement("div", {
      className: "hidden xl:block text-left text-xs font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-white font-bold leading-tight"
    }, "Cmdr. S. Ramanathan"), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400"
    }, "Emergency Ops Lead")))));
  }
  window.TopNav = TopNav;

  /* ===== END FILE: TopNav.js ===== */

  /* ===== START FILE: Sidebar.js ===== */
  // resQClear Operations Center Left Sidebar Navigation
  // [React hooks]

  function Sidebar(_ref47) {
    var currentTab = _ref47.currentTab,
      setTab = _ref47.setTab,
      simState = _ref47.simState,
      onTogglePresentation = _ref47.onTogglePresentation,
      onOpenLanding = _ref47.onOpenLanding;
    var _ref48 = simState || {},
      _ref48$ambulances = _ref48.ambulances,
      ambulances = _ref48$ambulances === void 0 ? [] : _ref48$ambulances,
      _ref48$conflictState = _ref48.conflictState,
      conflictState = _ref48$conflictState === void 0 ? {} : _ref48$conflictState;
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
      badge: '6'
    }, {
      id: 'hospitals',
      label: 'Hospitals',
      icon: Icons.Hospital,
      badge: '3'
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
      className: "w-64 border-r border-slate-800 bg-slate-950/80 backdrop-blur-md flex flex-col justify-between p-4 flex-shrink-0"
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
      className: "p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-400 leading-tight text-center"
    }, "resQClear Prototype v1.2 \u2022 AI-V2X Sim")));
  }
  window.Sidebar = Sidebar;

  /* ===== END FILE: Sidebar.js ===== */

  /* ===== START FILE: LandingPage.js ===== */
  // resQClear Landing Page Component
  // [React hooks]

  function LandingPage(_ref49) {
    var onLaunchDemo = _ref49.onLaunchDemo,
      onLaunchScenario = _ref49.onLaunchScenario;
    var scrollToSection = function scrollToSection(id) {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black"
    }, /*#__PURE__*/React.createElement("header", {
      className: "sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, null), /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline-block px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 font-bold"
    }, "SIMULATION MODE")), /*#__PURE__*/React.createElement("nav", {
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
    }, "Conflict Resolution"), /*#__PURE__*/React.createElement("button", {
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
      className: "hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
    }, /*#__PURE__*/React.createElement(Icons.Zap, {
      className: "w-3.5 h-3.5 text-amber-400"
    }), /*#__PURE__*/React.createElement("span", null, "Auto Scenario")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onLaunchDemo();
      },
      className: "inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
    }, /*#__PURE__*/React.createElement("span", null, "Launch Live Demo"), /*#__PURE__*/React.createElement(Icons.ArrowRight, {
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
    }, "An AI-assisted emergency traffic coordination platform designed to coordinate ambulance movement through congested urban intersections and formulate dynamic corridor priority."), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onLaunchDemo();
      },
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold font-mono text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02]"
    }, /*#__PURE__*/React.createElement(Icons.Play, {
      className: "w-4 h-4 text-slate-950"
    }), /*#__PURE__*/React.createElement("span", null, "Launch Live Demo")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return scrollToSection('how-it-works');
      },
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-medium font-mono text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
    }, /*#__PURE__*/React.createElement("span", null, "See How It Works"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 text-xs font-mono text-slate-400 flex items-center justify-center space-x-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-amber-400"
    }), /*#__PURE__*/React.createElement("span", null, "Simulation Prototype \u2022 Zero Paid API Keys Required \u2022 Visual Signal Simulation"))), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("span", null, "UNITS DETECTED: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, "2 ALS")), /*#__PURE__*/React.createElement("button", {
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
    }, "SCENARIO: DUAL AMBULANCE CONVERGENCE"), /*#__PURE__*/React.createElement("span", {
      className: "text-red-400 font-bold animate-pulse"
    }, "HIGH CONFLICT RISK")), /*#__PURE__*/React.createElement("div", {
      className: "relative flex items-center justify-center py-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center space-y-2 font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-red-400 font-bold flex items-center justify-center space-x-1"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDE91 AMB-104 (North)"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u2193 (43s ETA)")), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs shadow-lg"
    }, "\uD83D\uDEA6 INTERSECTION 4 \u2022 AI ARBITRATION (A \u2192 B)"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-amber-400 font-bold flex items-center justify-center space-x-1"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDE91 AMB-208 (South)"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u2191 (50s ETA)")))), /*#__PURE__*/React.createElement("div", {
      className: "z-10 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 p-2 rounded-lg border border-slate-800 text-slate-400"
    }, /*#__PURE__*/React.createElement("span", null, "ARBITRATION: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-400"
    }, "AMB-104 Priority 01")), /*#__PURE__*/React.createElement("span", null, "CONFIDENCE: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-white"
    }, "96% (Simulation Estimate)")))), /*#__PURE__*/React.createElement("div", {
      className: "lg:col-span-5 space-y-3 font-mono text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 uppercase"
    }, "Decision Model"), /*#__PURE__*/React.createElement("div", {
      className: "text-white font-bold mt-1"
    }, "Sequential Corridor Priority"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400 text-[11px] mt-1 font-sans"
    }, "AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict without manual police intervention.")), /*#__PURE__*/React.createElement("div", {
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
    }, "HOW RESQCLEAR WORKS"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl sm:text-3xl font-extrabold text-white mt-2"
    }, "From Detection to Coordination"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-400 mt-2 font-sans"
    }, "A streamlined 5-stage coordination lifecycle explaining the platform in 20 seconds.")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs"
    }, RESQCLEAR_DATA.howItWorksSteps.map(function (step) {
      return /*#__PURE__*/React.createElement("div", {
        key: step.step,
        className: "p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-4"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs"
      }, step.step), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] text-slate-500"
      }, "STAGE 0", step.step)), /*#__PURE__*/React.createElement("h4", {
        className: "font-extrabold text-white text-sm tracking-wide mb-2 group-hover:text-emerald-400 transition-colors"
      }, step.name), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-400 text-xs font-sans leading-relaxed"
      }, step.desc)));
    })))), /*#__PURE__*/React.createElement("section", {
      id: "problem",
      className: "py-16"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-8 rounded-3xl bg-slate-900/80 border border-red-500/20 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-red-400 text-xs font-mono font-bold uppercase mb-3"
    }, /*#__PURE__*/React.createElement(Icons.AlertTriangle, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "The Urban Emergency Problem")), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-extrabold text-white leading-snug"
    }, "Ambulances lose critical minutes at congested intersections and cross-axis bottlenecks."), /*#__PURE__*/React.createElement("p", {
      className: "mt-4 text-sm text-slate-300 leading-relaxed font-sans"
    }, "Traditional sirens rely solely on civilian yielding and line-of-sight visual reaction. In high-density urban grids, blocked intersections, red-light queues, and simultaneous multi-ambulance dispatches create severe bottlenecks when seconds matter most.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400"
    }, "Simulated Average Urban Transit Delay: ", /*#__PURE__*/React.createElement("strong", {
      className: "text-red-400"
    }, "+8.5 to 14.2 min during peak hours"))), /*#__PURE__*/React.createElement("div", {
      className: "p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-3"
    }, /*#__PURE__*/React.createElement(Icons.ShieldCheck, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, "The resQClear Solution")), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-extrabold text-white leading-snug"
    }, "AI-assisted route coordination and simulated green-wave emergency corridor sequencing."), /*#__PURE__*/React.createElement("ul", {
      className: "mt-4 space-y-2 text-xs font-mono text-slate-300"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, "Real-time connected ambulance tracking & ETA forecasting")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, "Multi-ambulance intersection collision & priority arbitration")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, "Dynamic signal phase management (Simulated green waves)")), /*#__PURE__*/React.createElement("li", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle2, {
      className: "w-4 h-4 text-emerald-400 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, "Direct hospital ER telemetry & trauma bay pre-notification")))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400"
    }, "Estimated Delay Avoided: ", /*#__PURE__*/React.createElement("strong", null, "2m 18s per critical corridor trip (Simulation Estimate)")))))), /*#__PURE__*/React.createElement("section", {
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
    }, "Our phased approach ensures safety, regulatory alignment, and empirical validation before real-world infrastructure interfacing.")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs"
    }, RESQCLEAR_DATA.productRoadmap.map(function (p, idx) {
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
    }, "SIMULATION")), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-cyan-400"
    }, "4"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Intersections Coordinated"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
    }, "SIMULATION")), /*#__PURE__*/React.createElement("div", {
      className: "p-5 rounded-2xl bg-slate-900 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl sm:text-3xl font-extrabold text-teal-300"
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] text-slate-300 mt-1"
    }, "Ambulances Coordinated"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-2 text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
    }, "SIMULATION")), /*#__PURE__*/React.createElement("div", {
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
    }, "SIMULATION"))))), /*#__PURE__*/React.createElement("footer", {
      className: "mt-auto border-t border-slate-800/80 bg-slate-950 py-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center md:text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3"
    }, /*#__PURE__*/React.createElement(ResQClearLogo, {
      size: "small"
    }), /*#__PURE__*/React.createElement("span", null, "\u2022 \u201CClear the way. Save lives.\u201D")), /*#__PURE__*/React.createElement("div", {
      className: "max-w-xl text-[11px] text-slate-400 leading-normal"
    }, "resQClear is a simulation prototype. Traffic-signal actions shown in this demo are not connected to real-world traffic infrastructure."))));
  }
  window.LandingPage = LandingPage;

  /* ===== END FILE: LandingPage.js ===== */

  /* ===== START FILE: app.js ===== */
  // resQClear Root Application Component
  // [React hooks]

  function App() {
    var _simState$conflictSta, _simState$conflictSta2;
    var _useState25 = useState('landing'),
      _useState26 = _slicedToArray(_useState25, 2),
      view = _useState26[0],
      setView = _useState26[1]; // 'landing' | 'dashboard'
    var _useState27 = useState('overview'),
      _useState28 = _slicedToArray(_useState27, 2),
      currentTab = _useState28[0],
      setTab = _useState28[1]; // 'overview' | 'conflict' | 'ambulances' | 'network' | 'hospitals' | 'analytics' | 'settings'
    var _useState29 = useState(false),
      _useState30 = _slicedToArray(_useState29, 2),
      isPresentationMode = _useState30[0],
      setIsPresentationMode = _useState30[1];
    var _useState31 = useState(true),
      _useState32 = _slicedToArray(_useState31, 2),
      soundEnabled = _useState32[0],
      setSoundEnabled = _useState32[1];
    var _useState33 = useState(window.simulationEngine.getState()),
      _useState34 = _slicedToArray(_useState33, 2),
      simState = _useState34[0],
      setSimState = _useState34[1];
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
      className: "mt-auto pt-4 pb-2 border-t border-slate-900 text-center text-xs font-mono text-slate-400"
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
    }));
  }

  // Mount Root
  var rootElement = document.getElementById('root');
  var root = ReactDOM.createRoot(rootElement);
  root.render( /*#__PURE__*/React.createElement(App, null));

  /* ===== END FILE: app.js ===== */
})();