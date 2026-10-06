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
