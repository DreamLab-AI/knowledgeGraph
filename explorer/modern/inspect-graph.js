#!/usr/bin/env node

/**
 * Inspect the broken ontology graph page
 */

const { chromium } = require('playwright');

async function inspectGraph() {
  const browser = await chromium.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Collect console messages
  const consoleMessages = [];
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    consoleMessages.push({ type, text });
    console.log(`[${type.toUpperCase()}]`, text);
  });

  // Collect errors
  const errors = [];
  page.on('pageerror', error => {
    errors.push(error.toString());
    console.error('[PAGE ERROR]', error.toString());
  });

  // Track network failures
  page.on('requestfailed', request => {
    console.error('[REQUEST FAILED]', request.url(), request.failure());
  });

  try {
    console.log('Navigating to https://narrativegoldmine.com/');
    await page.goto('https://narrativegoldmine.com/', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    await page.screenshot({ path: '/home/devuser/workspace/logseq/docs/homepage-screenshot.png' });
    console.log('Screenshot saved: homepage-screenshot.png');

    // Look for the ontology graph link
    console.log('\nLooking for ontology graph link...');
    const links = await page.evaluate(() => {
      const allLinks = Array.from(document.querySelectorAll('a'));
      return allLinks.map(a => ({
        href: a.href,
        text: a.textContent.trim()
      }));
    });

    console.log('Found links:', links.filter(l => l.text.toLowerCase().includes('graph') || l.text.toLowerCase().includes('ontology')));

    // Try to find and click the ontology graph link
    const graphLink = await page.locator('a:has-text("ontology"), a:has-text("graph")').first();

    if (await graphLink.count() > 0) {
      console.log('\nClicking ontology graph link...');
      await graphLink.click();
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
        console.log('Network idle timeout - continuing anyway');
      });

      await page.screenshot({ path: '/home/devuser/workspace/logseq/docs/graph-page-screenshot.png' });
      console.log('Screenshot saved: graph-page-screenshot.png');

      // Check for canvas/WebGL
      const canvasInfo = await page.evaluate(() => {
        const canvases = Array.from(document.querySelectorAll('canvas'));
        return {
          count: canvases.length,
          details: canvases.map(c => ({
            width: c.width,
            height: c.height,
            context: c.getContext('webgl') ? 'webgl' : c.getContext('2d') ? '2d' : 'none'
          }))
        };
      });

      console.log('\nCanvas elements:', JSON.stringify(canvasInfo, null, 2));

      // Check for React errors
      const reactErrors = await page.evaluate(() => {
        return window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__?.errors || [];
      });

      console.log('\nReact errors:', reactErrors);

      // Wait a bit for any async errors
      await page.waitForTimeout(5000);

    } else {
      console.log('Could not find ontology graph link');

      // List all links for debugging
      const allLinks = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map(a => a.textContent.trim());
      });
      console.log('All links on page:', allLinks);
    }

  } catch (error) {
    console.error('Error during inspection:', error);
  } finally {
    // Summary
    console.log('\n=== SUMMARY ===');
    console.log(`Console messages: ${consoleMessages.length}`);
    console.log(`Errors: ${errors.length}`);

    if (errors.length > 0) {
      console.log('\nErrors found:');
      errors.forEach(err => console.log('  -', err));
    }

    console.log('\nConsole log types:',
      consoleMessages.reduce((acc, msg) => {
        acc[msg.type] = (acc[msg.type] || 0) + 1;
        return acc;
      }, {})
    );

    // Keep browser open for manual inspection
    console.log('\nBrowser will stay open for 60 seconds for manual inspection...');
    await page.waitForTimeout(60000);

    await browser.close();
  }
}

inspectGraph().catch(console.error);
