// Build a 100% Fully Self-Contained, Zero-Dependency index.html
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const vendorDir = path.join(srcDir, 'vendor');

const reactCode = fs.readFileSync(path.join(vendorDir, 'react.production.min.js'), 'utf8');
const reactDomCode = fs.readFileSync(path.join(vendorDir, 'react-dom.production.min.js'), 'utf8');
const tailwindCode = fs.readFileSync(path.join(vendorDir, 'tailwind.js'), 'utf8');
const leafletJs = fs.readFileSync(path.join(vendorDir, 'leaflet.js'), 'utf8');
const leafletCss = fs.readFileSync(path.join(vendorDir, 'leaflet.css'), 'utf8');
const stylesCss = fs.readFileSync(path.join(srcDir, 'styles.css'), 'utf8');
const appCompiledJs = fs.readFileSync(path.join(srcDir, 'app.compiled.js'), 'utf8');

const standaloneHtml = `<!DOCTYPE html>
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
      const root = document.getElementById('root');
      if (root && (!root.innerHTML || root.innerHTML.trim() === '')) {
        root.innerHTML = '<div style="padding:40px;color:#ef4444;font-family:monospace;background:#030712;min-height:100vh;"><h3>Application Initialization Error</h3><pre>' + msg + '\\nLine: ' + line + '</pre></div>';
      }
    };
  </script>

  <!-- Inline Leaflet CSS -->
  <style>
${leafletCss}
  </style>

  <!-- Inline Custom Styles CSS -->
  <style>
${stylesCss}
  </style>

  <!-- Inline Tailwind CSS Engine -->
  <script>
${tailwindCode}
  </script>
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

  <!-- Inline React 18 & ReactDOM 18 -->
  <script>
${reactCode}
  </script>
  <script>
${reactDomCode}
  </script>

  <!-- Inline Leaflet JS -->
  <script>
${leafletJs}
  </script>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-emerald-500 selection:text-black">
  <div id="root">
    <div style="min-height:100vh;background:#030712;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#10b981;font-family:monospace;">
      <div style="font-size:18px;font-weight:bold;margin-bottom:8px;">Initializing resQClear...</div>
      <div style="font-size:12px;color:#64748b;">AI-Assisted Emergency Traffic Coordination</div>
    </div>
  </div>

  <!-- Inline Precompiled Pure JavaScript Application -->
  <script>
${appCompiledJs}
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), standaloneHtml, 'utf8');
console.log('✅ Generated 100% Self-Contained index.html (' + (standaloneHtml.length / 1024).toFixed(1) + ' KB)');
