#!/usr/bin/env node
import { chromium } from 'playwright';

async function verifyWasmDeployment() {
  console.log('🌐 Verifying WASM deployment on live site');
  console.log('📍 URL: https://narrativegoldmine.com/ontology\n');

  const browser = await chromium.launch({
    headless: false,
    executablePath: '/usr/bin/chromium',
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();

  // Track console logs
  const logs = {
    wasm: [],
    d3: [],
    errors: [],
    all: []
  };

  page.on('console', msg => {
    const text = msg.text();
    const type = msg.type();

    logs.all.push({ type, text, time: new Date().toISOString() });

    if (text.includes('[WASM]') || text.includes('WASM') || text.includes('WebVowl')) {
      logs.wasm.push(text);
      console.log(`\x1b[32m[WASM] ${text}\x1b[0m`);
    } else if (text.includes('[D3]') || text.includes('d3-force')) {
      logs.d3.push(text);
      console.log(`\x1b[33m[D3] ${text}\x1b[0m`);
    } else if (type === 'error') {
      logs.errors.push(text);
      console.log(`\x1b[31m[ERROR] ${text}\x1b[0m`);
    }
  });

  console.log('⏳ Loading page...\n');

  await page.goto('https://narrativegoldmine.com/ontology', {
    waitUntil: 'domcontentloaded',
    timeout: 20000
  }).catch(() => {});

  // Check build hash
  const buildInfo = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[src*="index-"]'));
    const indexScript = scripts.find(s => s.src.includes('index-'));
    const hash = indexScript ? indexScript.src.match(/index-([^.]+)\.js/)?.[1] : 'unknown';

    return {
      hash,
      url: window.location.href,
      title: document.title
    };
  });

  console.log(`📦 Build Hash: ${buildInfo.hash}`);
  console.log(`🔗 URL: ${buildInfo.url}`);
  console.log(`📄 Title: ${buildInfo.title}\n`);

  // Wait for canvas and simulation
  console.log('⏳ Waiting for canvas...\n');
  await page.waitForSelector('canvas', { timeout: 10000 }).catch(() => {
    console.log('⚠️  Canvas not found');
  });

  await page.waitForTimeout(3000);

  // Measure FPS
  console.log('📊 Measuring frame rate...\n');
  const fpsData = await page.evaluate(() => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();

      function count() {
        frames++;
        const elapsed = performance.now() - start;
        if (elapsed < 3000) {
          requestAnimationFrame(count);
        } else {
          resolve({
            frames,
            elapsed,
            fps: (frames / elapsed) * 1000
          });
        }
      }
      requestAnimationFrame(count);
    });
  });

  console.log(`🎬 Frame Rate: ${fpsData.fps.toFixed(1)} FPS`);
  console.log(`   Frames: ${fpsData.frames} in ${(fpsData.elapsed / 1000).toFixed(2)}s\n`);

  // Check overlay state over time
  console.log('⏱️  Monitoring overlay for 12 seconds...\n');

  const overlayStates = [];
  for (let i = 0; i <= 12; i += 2) {
    await page.waitForTimeout(2000);

    const state = await page.evaluate(() => {
      const allDivs = Array.from(document.querySelectorAll('div'));
      const overlay = allDivs.find(div =>
        div.textContent?.trim() === 'Simulating...' &&
        div.children.length === 0
      );

      return {
        hasOverlay: !!overlay,
        hasCanvas: !!document.querySelector('canvas'),
        nodeCount: document.querySelectorAll('circle, mesh').length
      };
    });

    overlayStates.push({ time: i, ...state });

    const status = state.hasOverlay ? '\x1b[31mVISIBLE\x1b[0m' : '\x1b[32mHIDDEN\x1b[0m';
    console.log(`[${i}s] Overlay: ${status} | Canvas: ${state.hasCanvas ? '✓' : '✗'} | Nodes: ${state.nodeCount}`);
  }

  // Take screenshots
  console.log('\n📸 Taking screenshots...\n');
  await page.screenshot({
    path: '/home/devuser/workspace/logseq/docs/wasm-deployment-verification.png',
    fullPage: true
  });

  // Memory usage
  const memory = await page.evaluate(() => {
    if (performance.memory) {
      return {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
      };
    }
    return null;
  });

  // Final summary
  console.log('\n' + '═'.repeat(80));
  console.log('📊 VERIFICATION RESULTS');
  console.log('═'.repeat(80) + '\n');

  console.log(`Build Hash: ${buildInfo.hash}`);
  console.log(`FPS: ${fpsData.fps.toFixed(1)} ${fpsData.fps > 10 ? '✅ GOOD' : '❌ LOW'}`);

  if (memory) {
    console.log(`Memory: ${memory.used} MB / ${memory.total} MB ${memory.used < 100 ? '✅ GOOD' : '⚠️  HIGH'}`);
  }

  console.log(`\nWASM Logs: ${logs.wasm.length} ${logs.wasm.length > 0 ? '✅ WASM ACTIVE' : '❌ NO WASM'}`);
  console.log(`D3 Logs: ${logs.d3.length} ${logs.d3.length === 0 ? '✅ D3 REMOVED' : '⚠️  D3 STILL PRESENT'}`);
  console.log(`Errors: ${logs.errors.length} ${logs.errors.length === 0 ? '✅ NO ERRORS' : '❌ HAS ERRORS'}`);

  const overlayDisappeared = overlayStates.some(s => !s.hasOverlay);
  const overlayTime = overlayStates.find(s => !s.hasOverlay)?.time || 'never';

  console.log(`\nOverlay: ${overlayDisappeared ? `✅ Disappeared after ${overlayTime}s` : '❌ Still visible after 12s'}`);

  // Verdict
  console.log('\n' + '═'.repeat(80));

  const wasmWorking = logs.wasm.length > 0;
  const goodFps = fpsData.fps > 10;
  const overlayWorks = overlayDisappeared;
  const noErrors = logs.errors.length === 0;

  if (wasmWorking && goodFps && overlayWorks && noErrors) {
    console.log('✅ WASM DEPLOYMENT SUCCESSFUL!');
    console.log('   - WASM physics engine active');
    console.log('   - Performance excellent (>10 FPS)');
    console.log('   - Overlay timeout working');
    console.log('   - No errors detected');
  } else {
    console.log('⚠️  DEPLOYMENT ISSUES DETECTED:');
    if (!wasmWorking) console.log('   ❌ WASM not initializing');
    if (!goodFps) console.log(`   ❌ Low FPS: ${fpsData.fps.toFixed(1)}`);
    if (!overlayWorks) console.log('   ❌ Overlay not disappearing');
    if (!noErrors) console.log(`   ❌ ${logs.errors.length} errors`);
  }

  console.log('═'.repeat(80) + '\n');

  console.log('📸 Screenshot: docs/wasm-deployment-verification.png');
  console.log('🔍 Browser window left open for inspection\n');

  // Keep browser open
  await new Promise(() => {});
}

verifyWasmDeployment().catch(err => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
