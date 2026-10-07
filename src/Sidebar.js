// resQClear Operations Center Left Sidebar Navigation
// Clean Enterprise Proportions, Active Badges, and Section Organization
const { useState } = React;

function Sidebar({ currentTab, setTab, simState, onTogglePresentation, onOpenLanding }) {
  const { ambulances = [], conflictState = {}, networkStatus = {} } = simState || {};
  const hasConflict = conflictState.stage && conflictState.stage !== 'IDLE';

  const navItems = [
    { id: 'overview', label: 'Overview & Map', icon: Icons.Compass, badge: 'LIVE' },
    { id: 'conflict', label: 'Conflict Engine', icon: Icons.ShieldAlert, badge: hasConflict ? 'ALERT' : null, alert: hasConflict },
    { id: 'ambulances', label: 'Ambulances', icon: Icons.Ambulance, badge: ambulances.length },
    { id: 'network', label: 'Traffic Network', icon: Icons.TrafficLight, badge: `${networkStatus.intersectionsOnline || 6}` },
    { id: 'hospitals', label: 'Hospitals', icon: Icons.Hospital, badge: `${networkStatus.hospitalsAvailable || 3}` },
    { id: 'analytics', label: 'Analytics', icon: Icons.BarChart3 },
    { id: 'settings', label: 'Settings', icon: Icons.Settings }
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950/85 backdrop-blur-md flex flex-col justify-between p-4 flex-shrink-0">
      {/* Top Navigation Items */}
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
            OPERATIONS CENTER
          </div>

          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium font-mono transition-all group ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold shadow-md shadow-emerald-950/40'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/80 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                    item.alert
                      ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse'
                      : isActive
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-900 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions: Presentation Mode & Landing Page Link */}
      <div className="space-y-3 pt-4 border-t border-slate-800/80">
        <button
          onClick={onTogglePresentation}
          className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold transition-all shadow-inner"
        >
          <Icons.Presentation className="w-4 h-4 text-purple-400" />
          <span>Launch Pitch Deck</span>
        </button>

        <button
          onClick={onOpenLanding}
          className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-mono transition-all"
        >
          <Icons.Layers className="w-3.5 h-3.5" />
          <span>Landing Page</span>
        </button>

        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-500 leading-tight text-center">
          resQClear Prototype v2.0 • Digital Twin
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
