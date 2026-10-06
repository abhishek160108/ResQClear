// resQClear Hospital Receiving & Trauma Readiness Dashboard
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
