// Test & Production Babel standalone compilation on raw bundle with local offline caching
const fs = require('fs');
const https = require('https');
const path = require('path');

const bundle = fs.readFileSync(path.join(__dirname, 'src', 'bundle.js'), 'utf8');
const cachePath = path.join(__dirname, 'src', 'vendor', 'babel.min.js');

function compileWithBabel(babelSource) {
  try {
    const sandbox = { window: {}, console, process };
    const vm = require('vm');
    vm.createContext(sandbox);
    vm.runInContext(babelSource, sandbox);
    const Babel = sandbox.Babel || sandbox.window.Babel;
    
    console.log('Compiling bundle with Babel...');
    const transformed = Babel.transform(bundle, {
      presets: ['react', 'env']
    }).code;

    console.log('✅ Babel compilation SUCCESS! Output length:', transformed.length);
    fs.writeFileSync(path.join(__dirname, 'src', 'app.compiled.js'), transformed, 'utf8');
    console.log('✅ Generated src/app.compiled.js (Precompiled Pure JavaScript)');
  } catch (err) {
    console.error('❌ Babel compilation error:', err);
  }
}

if (fs.existsSync(cachePath)) {
  console.log('Using local cached Babel standalone from src/vendor/babel.min.js...');
  const babelSource = fs.readFileSync(cachePath, 'utf8');
  compileWithBabel(babelSource);
} else {
  const babelUrl = 'https://unpkg.com/@babel/standalone@7.24.0/babel.min.js';
  console.log('Fetching Babel standalone to verify bundle compilation and caching locally...');

  https.get(babelUrl, (res) => {
    let babelSource = '';
    res.on('data', (chunk) => babelSource += chunk);
    res.on('end', () => {
      fs.writeFileSync(cachePath, babelSource, 'utf8');
      console.log('Saved Babel standalone cache to src/vendor/babel.min.js');
      compileWithBabel(babelSource);
    });
  }).on('error', (err) => {
    console.error('Network error downloading Babel:', err);
  });
}
