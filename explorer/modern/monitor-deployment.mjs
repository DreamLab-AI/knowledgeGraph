#!/usr/bin/env node
import { chromium } from 'playwright';

async function monitorDeployment() {
  console.log('🔍 Monitoring deployment...\n');
  console.log('GitHub Actions build typically takes 5-10 minutes');
  console.log('Will check every 30 seconds for new build\n');

  let previousHash = null;
  let checkCount = 0;
  const maxChecks = 20; // 10 minutes max

  const browser = await chromium.launch({
    headless: false,
    executablePath: '/usr/bin/chromium',
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();

  while (checkCount < maxChecks) {
    checkCount++;
    console.log(`[Check ${checkCount}/${maxChecks}] Checking deployment...`);

    try {
      await page.goto('https://narrativegoldmine.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      }).catch(() => {});

      await page.waitForTimeout(2000);

      const buildInfo = await page.evaluate(() => {
        const scripts = Array.from(document.querySelectorAll('script[src*="index-"]'));
        const indexScript = scripts.find(s => s.src.includes('index-'));
        const hash = indexScript ? indexScript.src.match(/index-([^.]+)\\.js/)?.[1] : 'unknown';

        const hasError = document.body.textContent?.includes('Unexpected Application Error');
        const hasCanvas = !!document.querySelector('canvas');

        return { hash, hasError, hasCanvas };
      });

      if (!previousHash) {
        previousHash = buildInfo.hash;
        console.log(`📦 Current build hash: ${buildInfo.hash}`);
        console.log(`⏳ Waiting for new deployment...\n`);
      } else if (buildInfo.hash !== previousHash) {
        console.log(`\n🎉 NEW DEPLOYMENT DETECTED!`);
        console.log(`📦 New build hash: ${buildInfo.hash}`);
        console.log(`📦 Previous hash: ${previousHash}\n`);

        // Check for errors
        if (buildInfo.hasError) {
          console.log('❌ ERROR: Application still has error boundary!');
        } else {
          console.log('✅ No error boundary found');
        }

        // Check for canvas
        console.log(`Canvas: ${buildInfo.hasCanvas ? '✓' : '✗'}`);

        // Check for WASM files
        const wasmCheck = await page.evaluate(async () => {
          try {
            const response = await fetch('/assets/webvowl_wasm_bg-C-dQj0xK.wasm');
            return { exists: response.ok, status: response.status };
          } catch {
            return { exists: false, status: 'error' };
          }
        });

        console.log(`WASM file: ${wasmCheck.exists ? '✓ (status: ' + wasmCheck.status + ')' : '✗ (not found)'}`);

        // Wait for potential rendering
        await page.waitForTimeout(5000);

        // Take screenshot
        await page.screenshot({
          path: '/home/devuser/workspace/logseq/docs/deployment-verified.png',
          fullPage: true
        });

        console.log('\n📸 Screenshot: docs/deployment-verified.png');

        if (!buildInfo.hasError && buildInfo.hasCanvas && wasmCheck.exists) {
          console.log('\n✅ DEPLOYMENT SUCCESSFUL!');
        } else {
          console.log('\n⚠️  Deployment completed but issues detected');
        }

        break;
      }

      await page.waitForTimeout(30000); // Wait 30 seconds

    } catch (error) {
      console.error(`Error checking deployment: ${error.message}`);
    }
  }

  if (checkCount >= maxChecks) {
    console.log('\n⏱️  Timeout: No new deployment detected after 10 minutes');
  }

  // Keep browser open
  await new Promise(() => {});
}

monitorDeployment().catch(console.error);
