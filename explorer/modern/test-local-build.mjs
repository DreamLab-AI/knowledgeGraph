#!/usr/bin/env node
import { chromium } from 'playwright';

async function testLocalBuild() {
  console.log('Testing local production build...\n');

  const browser = await chromium.launch({
    headless: false,
    executablePath: '/usr/bin/chromium',
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();

  // Track errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
      console.log(`❌ [ERROR] ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    errors.push(error.message);
    console.log(`❌ [PAGE ERROR] ${error.message}`);
  });

  try {
    console.log('Loading http://localhost:8766...\n');
    await page.goto('http://localhost:8766', {
      waitUntil: 'networkidle',
      timeout: 10000
    });

    // Wait a bit for React to render
    await page.waitForTimeout(3000);

    // Check if the app crashed
    const errorBoundary = await page.evaluate(() => {
      return document.body.textContent?.includes('Unexpected Application Error');
    });

    if (errorBoundary) {
      console.log('❌ LOCAL BUILD ALSO HAS ERROR BOUNDARY!\n');
    } else {
      console.log('✅ No error boundary found\n');
    }

    // Check for canvas
    const hasCanvas = await page.evaluate(() => !!document.querySelector('canvas'));
    console.log(`Canvas: ${hasCanvas ? '✓' : '✗'}`);

    // Check for errors
    console.log(`\nTotal errors: ${errors.length}`);
    if (errors.length > 0) {
      console.log('Errors:', errors);
    }

    // Take screenshot
    await page.screenshot({
      path: '/home/devuser/workspace/logseq/docs/local-build-test.png',
      fullPage: true
    });

    console.log('\n📸 Screenshot saved to docs/local-build-test.png');

  } catch (error) {
    console.error('Test failed:', error.message);
  }

  // Keep browser open
  await new Promise(() => {});
}

testLocalBuild().catch(console.error);
