// Production Build Script for resQClear (100% Offline, Precompiled, and Self-Healing)
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

let rawBundle = `
(function() {
  'use strict';
  const { useState, useEffect, useRef, useMemo, useCallback } = React;
`;

filesInOrder.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/^(?:const|var|let)\s*\{[^}]*useState[^}]*\}\s*=\s*React;?/gm, '// [React hooks]');
    rawBundle += `\n/* ===== START FILE: ${file} ===== */\n` + content + `\n/* ===== END FILE: ${file} ===== */\n`;
  }
});

rawBundle += `
})();
`;

fs.writeFileSync(path.join(srcDir, 'bundle.js'), rawBundle, 'utf8');

// Read precompiled JavaScript from src/app.compiled.js
let compiledCode = fs.readFileSync(path.join(srcDir, 'app.compiled.js'), 'utf8');

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>resQClear — Emergency Traffic Coordination</title>
  <meta name="description" content="AI-assisted emergency traffic coordination platform designed to coordinate ambulance movement through congested urban intersections." />
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'><path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2'/><path d='M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-2.92-1.026A1 1 0 0 0 18 13v5'/><circle cx='7' cy='18' r='2'/><circle cx='17' cy='18' r='2'/></svg>" />

  <!-- Global Diagnostic Error Handler -->
  <script>
    window.onerror = function(msg, url, line, col, error) {
      console.error('GLOBAL ERROR:', msg, 'Line:', line, error);
    };
  </script>

  <!-- Local Offline Tailwind CSS -->
  <script src="src/vendor/tailwind.js"></script>
  <script>
    if (window.tailwind) {
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              brand: {
                emerald: '#10b981',
                cyan: '#06b6d4',
                red: '#ef4444',
                amber: '#f59e0b',
                dark: '#030712'
              }
            },
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace']
            }
          }
        }
      };
    }
  </script>

  <!-- Local Offline React 18 & ReactDOM 18 -->
  <script src="src/vendor/react.production.min.js"></script>
  <script src="src/vendor/react-dom.production.min.js"></script>

  <!-- Local Offline Leaflet CSS & JS -->
  <link rel="stylesheet" href="src/vendor/leaflet.css" />
  <script src="src/vendor/leaflet.js"></script>

  <!-- Custom CSS Styling -->
  <link rel="stylesheet" href="src/styles.css" />
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-emerald-500 selection:text-black">
  <div id="root"></div>

  <!-- Precompiled Pure JavaScript Application -->
  <script>
${compiledCode}
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('✅ Generated 100% offline standalone index.html (' + (htmlContent.length / 1024).toFixed(1) + ' KB)');
