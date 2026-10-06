# resQClear — AI-Powered Emergency Traffic Coordination

> **“Clear the way. Save lives.”**  
> *AI-powered emergency traffic coordination that helps ambulances navigate congestion, resolve intersection conflicts, and coordinate safer, faster emergency routes.*

---

## 🚑 Project Overview

**resQClear** is a professional, startup-quality web application prototype built for smart city emergency traffic management. It simulates how an intelligent V2X (Vehicle-to-Everything) and predictive AI traffic network coordinates emergency green corridors for critical Advanced Life Support (ALS) ambulances while safely arbitrating multi-vehicle intersection conflicts.

> ⚠️ **DEMO / SIMULATION DISCLAIMER:**  
> resQClear is a prototype demonstration and simulation platform. Traffic-signal control and emergency coordination demonstrated in this application are visual simulations and are **not connected to real-world municipal infrastructure**.

---

## ✨ Key Features

### 1. 🚦 Dual-Ambulance Intersection Conflict Resolution (Centerpiece)
- Simulates the critical real-world scenario where **Ambulance A (AMB-104)** and **Ambulance B (AMB-208)** converge simultaneously on the same central crossroads (**Intersection 4**).
- **Automated AI Conflict Engine**:
  - Computes sub-second arrival ETAs (12s vs 19s), distance, velocity, and patient triage urgency.
  - Grants sequential clearance: **AMBULANCE A (Priority 01) → AMBULANCE B (Priority 02)**.
  - Dynamically controls traffic signal lamps (Red → Yellow → Green Emergency Override) and releases corridors once cleared with zero close-call collisions.

### 2. 🗺️ High-Fidelity 60FPS City Map Simulation & Real-World Live Traffic Demo
- **Real-World Geographic Map Layer (Leaflet / OpenStreetMap / CartoDB Dark Matter)**:
  - Toggle between Real-World Cartography and Digital Twin Tactical Simulation.
  - Actual city coordinates for Chennai medical corridors: Anna Nagar, Poonamallee High Rd, Central Station, Greams Road, Apollo Emergency Center, Rajiv Gandhi Govt General Hospital.
  - Live traffic congestion layers, dynamic route polylines, and real-world incident simulations.
- **Digital Twin Tactical View**:
  - Real-time road network with asphalt styling, dashed lane dividers, pedestrian crosswalks, and sector zone boundaries.
  - Live civilian traffic that autonomously detects sirens and performs yielding maneuvers.
  - Ambulances with flashing red/blue light bars, directional headlight beams, siren sound waves, and forward green-wave corridors.
  - **Picture-in-Picture CCTV Camera Feed (CAM-04)** showing a close-up street view of Central Conflict Junction 4.

### 3. 📊 Emergency Operations Center Dashboard
- **Live Emergencies & Chronological Event Stream**: Real-time dispatch telemetry and milestone logging.
- **Ambulance Fleet Telematics**: Cardiac vitals (HR, BP, SpO2), driver details, speed gauges, and battery/O2 levels.
- **Hospital Receiving Triage**: ER trauma bay readiness checklist, cath-lab pre-warming, and direct patient vital sync.
- **Traffic Analytics**: Comparison charts of baseline vs resQClear transit times, delay reduction distributions, and corridor benchmarks (clearly labeled **SIMULATION DATA**).
- **AI Insights Panel**: Real-time traffic alerts with interactive **"Apply Route"** bypass triggers.

### 4. 🎬 Startup Presentation & Pitch Mode
- Fullscreen cinematic pitch deck overlay demonstrating the 8-phase narrative:
  1. *Ambulance Emergency Detected*
  2. *Traffic Congestion Predicted*
  3. *Multiple Emergency Vehicles Detected*
  4. *AI Conflict Resolution*
  5. *Emergency Corridor Created*
  6. *Ambulance A Cleared*
  7. *Ambulance B Cleared*
  8. *Route Complete (3.6 min Simulated Time Saved)*

### 5. 🎮 Dedicated Demo Controls
- **RUN EMERGENCY SCENARIO**: One-click automated 12-step hero sequence.
- Manual triggers for Ambulance A, Ambulance B, Both Emergencies, Traffic Jam injection, Speed Multipliers (1x to 4x), and Procedural Web Audio radio effects.

---

## 🚀 Quick Start (Local Setup)

The prototype is built with **zero external server dependencies** and can be run immediately using either Node.js or Python:

### Option A: Using Node.js
```bash
# Run the built-in HTTP server
node server.js
```
Open your browser at **`http://localhost:3000`**

### Option B: Using Python
```bash
# Run via Python's built-in HTTP server
python -m http.server 3000
```
Open your browser at **`http://localhost:3000`**

---

## 🛠️ Technology Stack

- **Frontend Core:** React 18, HTML5 Canvas, SVG Vector Graphics, Leaflet.js
- **Map Cartography:** OpenStreetMap & CartoDB Dark Matter tiles (free, zero API key)
- **Styling & HUD:** Tailwind CSS, Glassmorphism, Custom CSS Radar/Pulse Keyframes
- **Icons:** Scalable Lucide-style SVG icon system
- **Audio Engine:** HTML5 Web Audio API (procedural emergency chimes, radio squelch, and conflict pulses)
- **Runtime:** Zero-dependency Node.js / Python static server

---

## 📄 License

MIT License © 2026 resQClear Technologies.
