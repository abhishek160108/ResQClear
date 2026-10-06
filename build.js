// Build script to bundle all resQClear JS/JSX components into a single unified script
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const filesInOrder = [
  'sound.js',
  'data.js',
  'simulation.js',
  'components.js',
  'LiveMap.js',
  'ConflictEngineModal.js',
  'RightStatusPanel.js',
  'AmbulanceFleetView.js',
  'HospitalView.js',
  'AnalyticsView.js',
  'TrafficNetworkView.js',
  'SettingsView.js',
  'DemoControls.js',
  'PresentationMode.js',
  'TopNav.js',
  'Sidebar.js',
  'LandingPage.js',
  'app.js'
];

let unifiedCode = `
// resQClear Master Bundle
(function() {
  'use strict';
  const { useState, useEffect, useRef, useMemo, useCallback } = React;
`;

filesInOrder.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove duplicate top-level React hook const/var destructuring
    content = content.replace(/^(?:const|var|let)\s*\{[^}]*useState[^}]*\}\s*=\s*React;?/gm, '// [React hooks initialized at top level]');
    unifiedCode += `\n/* ===== START FILE: ${file} ===== */\n` + content + `\n/* ===== END FILE: ${file} ===== */\n`;
  } else {
    console.warn(`File not found: ${file}`);
  }
});

unifiedCode += `
})();
`;

const bundlePath = path.join(srcDir, 'bundle.js');
fs.writeFileSync(bundlePath, unifiedCode, 'utf8');
console.log(`Successfully generated ${bundlePath} (${(unifiedCode.length / 1024).toFixed(1)} KB)`);
