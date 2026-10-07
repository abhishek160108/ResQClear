// resQClear Hospital Emergency Receiving & Trauma Readiness Dashboard
// Synchronized ER Bay Notifications & Bed Capacity Telemetry
const { useState } = React;

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
