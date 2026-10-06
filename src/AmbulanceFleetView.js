// resQClear Ambulance Fleet Management Cards View
const { useState } = React;

function AmbulanceFleetView({ simState, onTriggerAmbulance }) {
  const { ambulances = [] } = simState || {};
  const [selectedAmb, setSelectedAmb] = useState(ambulances[0]?.id || 'AMB-104');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Active Emergency Fleet Management</h2>
          <p className="text-sm text-slate-400">Advanced Life Support (ALS) & Critical Care Transport Units</p>
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
                    isCritical ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
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
                  <span className="text-slate-400 block text-[10px]">ROUTE STATUS:</span>
                  <span className="text-teal-300 font-medium">{amb.routeStatus}</span>
                </div>
              </div>

              {/* Transit Details */}
              <div className="space-y-2 text-xs font-mono mb-4 text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Current Origin:</span>
                  <span className="text-white font-medium">{amb.origin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Hospital:</span>
                  <span className="text-emerald-400 font-bold">{amb.destination}</span>
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
                    <span className="text-slate-400 font-mono text-[10px]">PATIENT TRIAGE:</span>
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
