# resQClear — Emergency Traffic Coordination

> **“Clear the way. Save lives.”**  
> *An AI-assisted emergency traffic coordination platform designed to coordinate ambulance movement through congested urban intersections.*

---

## 🚑 Project Overview

**resQClear** is a professional, startup-quality web application prototype built for smart city emergency traffic management. It simulates how an intelligent V2X (Vehicle-to-Everything) and predictive AI traffic network coordinates emergency green corridors for critical Advanced Life Support (ALS) ambulances while safely arbitrating multi-vehicle intersection conflicts.

> ⚠️ **MANDATORY SIMULATION DISCLAIMER:**  
> **resQClear is a simulation prototype. Traffic-signal actions shown in this demo are not connected to real-world traffic infrastructure.**

---

## ✨ Key Capabilities

### 1. 🚦 Multi-Ambulance Intersection Conflict Resolution (Centerpiece Hero Demo)
- Simulates the critical real-world scenario where **AMB-104 (Ambulance A)** and **AMB-208 (Ambulance B)** converge simultaneously on the same central crossroads (**Intersection 4 / INT-04**).
- **AI-Assisted Conflict Resolution Engine**:
  - Transparent scoring model evaluating: ETA to intersection, distance, emergency severity (provided by authorized personnel), conflict probability, and intersection occupancy.
  - Grants sequential coordination: **AMB-104 (Priority 01) → AMB-208 (Priority 02)**.
  - Reason: *"AMB-104 reaches the conflict zone earlier. Sequential clearance minimizes intersection occupancy conflict."*
  - Dynamically transitions signals (Normal → Emergency Priority Request [Yellow] → Green Wave Lock) and returns to normal cycle once cleared.

### 2. 🗺️ High-Fidelity 60FPS Digital Twin Simulation Map
- **Digital Twin Tactical View**:
  - Real-time road network with asphalt styling, dashed lane dividers, pedestrian crosswalks, and sector zone boundaries.
  - Clear Intersection IDs (**INT-01** through **INT-06**).
  - Clear Map Legend: Green (Emergency corridor), Red (Critical congestion), Amber (Moderate congestion), Blue (Normal route).
  - Live civilian traffic autonomously yielding to approaching sirens.
  - Ambulances with flashing beacons, directional headlight beams, and forward green-wave corridors.
  - **Picture-in-Picture CCTV Stream (CAM-04)** showing a live simulated camera view of Central Conflict Junction 4.
- **Real-World Live Map (Locked / Future Modal)**:
  - Transparently explains future municipal integration roadmap subject to technical and regulatory approval.

### 3. 🔄 "From Detection to Coordination" (Why resQClear?)
1. **DETECT**: Emergency vehicle detected via connected telemetry
2. **PREDICT**: Traffic congestion and ETA to intersection analyzed
3. **RESOLVE**: Conflicting emergency routes coordinated by AI decision model
4. **COORDINATE**: Emergency corridor sequence simulated with dynamic green wave
5. **INFORM**: Hospital and control-room status updated in real-time

### 4. 📊 Emergency Operations Center Suite
- **Live Operations Chronology**: Real-time dispatch telemetry and milestone event logging.
- **Ambulance Fleet Telematics**: Cardiac vitals (HR, BP, SpO2), driver details, speed gauges, and intersection ETAs (labeled **SIMULATION DATA**).
- **Hospital Receiving Triage**: Trauma bay readiness checklist, cath-lab pre-warming, and direct patient vital sync (*Hospital notification simulated*).
- **Traffic Analytics**: Comparison charts of baseline vs resQClear transit times, delay reduction distributions, and corridor benchmarks (labeled **SIMULATION DATA**).
- **AI Traffic Insights**: Real-time congestion alerts with interactive **"SIMULATE ALTERNATE ROUTE"** bypass trigger.

### 5. 🎬 Startup Presentation & Pitch Mode (10-Step Narrative)
- Fullscreen cinematic pitch deck overlay demonstrating the 10-step sequence:
  1. *Emergency Detected*
  2. *Traffic Congestion Predicted*
  3. *Multiple Emergency Vehicles Detected*
  4. *Conflict Intersection Identified*
  5. *AI-Assisted Conflict Resolution*
  6. *AMB-104 — Priority 01*
  7. *Intersection Cleared*
  8. *AMB-208 — Priority 02*
  9. *Intersection Cleared*
  10. *Emergency Routes Coordinated*
- Final Screen with verified simulated demo impact metrics.

### 6. 🎮 Dedicated Demo Controls
- **RUN EMERGENCY SCENARIO**: One-click automated 12-step hero sequence.
- Manual triggers for Ambulance A, Ambulance B, Both Emergencies, Traffic Jam injection, Speed Multipliers (1x to 4x), and Procedural Web Audio radio effects.

---

## 🗺️ Product Roadmap

- **Phase 1: Digital Twin Simulation** (✓ Current - Complete)
- **Phase 2: Ambulance GPS MVP** (Next)
- **Phase 3: Real-Time Traffic Data** (Planned)
- **Phase 4: Hospital / Ambulance Pilot** (Planned)
- **Phase 5: Authorized Traffic Infrastructure Integration** (Future)

---

## 🚀 Quick Start (Local Setup)

The prototype is built with **zero external server dependencies** and can be run immediately:

### Option A: Using Python
```bash
python -m http.server 3000
```
Open your browser at **`http://localhost:3000`**

### Option B: Using Node.js
```bash
node server.js
```
Open your browser at **`http://localhost:3000`**

---

## 🛠️ Technology Stack

- **Frontend Core:** React 18, HTML5 Canvas, SVG Vector Graphics, Leaflet.js
- **Styling & HUD:** Tailwind CSS, Glassmorphism, Custom CSS Radar/Pulse Keyframes
- **Icons:** Scalable Lucide-style SVG icon system
- **Audio Engine:** HTML5 Web Audio API (procedural emergency chimes, radio squelch, and conflict pulses)
- **Runtime:** Zero-dependency Node.js / Python static server

---

## 📄 License

MIT License © 2026 resQClear Technologies.
