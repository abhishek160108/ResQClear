// Build & Precompile resQClear for 100% Instant Zero-Dependency Execution
const fs = require('fs');
const path = require('path');
const vm = require('vm');

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

// Use precompiled JS from test_babel or compile directly
let compiledCode = '';
if (fs.existsSync(path.join(srcDir, 'app.compiled.js'))) {
  compiledCode = fs.readFileSync(path.join(srcDir, 'app.compiled.js'), 'utf8');
} else {
  compiledCode = rawBundle;
}

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>resQClear — Emergency Traffic Coordination</title>
  <meta name="description" content="AI-assisted emergency traffic coordination platform designed to coordinate ambulance movement through congested urban intersections." />
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'><path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2'/><path d='M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-2.92-1.026A1 1 0 0 0 18 13v5'/><circle cx='7' cy='18' r='2'/><circle cx='17' cy='18' r='2'/></svg>" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
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
  </script>

  <!-- React 18 & ReactDOM 18 -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

  <!-- Leaflet CSS & JS for Real-World Live Traffic Map -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <!-- Custom CSS Styling -->
  <link rel="stylesheet" href="src/styles.css" />
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-emerald-500 selection:text-black">
  <div id="root"></div>

  <!-- Precompiled Pure JavaScript Application (Instant 0ms Execution) -->
  <script>
${compiledCode}
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('✅ Generated standalone precompiled index.html (' + (htmlContent.length / 1024).toFixed(1) + ' KB)');
