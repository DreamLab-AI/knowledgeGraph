/*! coi-serviceworker v0.1.7 — Cross-Origin-Isolation service-worker shim.
 *
 * Vendored, MIT-licensed. Original: https://github.com/gzuidhof/coi-serviceworker
 * Copyright (c) 2021 Guido Zuidhof. Written from the published shim; kept as a
 * single self-contained file (no build step) per ADR-NG-001 §3.
 *
 * GitHub Pages cannot set COOP/COEP response headers, so `crossOriginIsolated`
 * (and therefore SharedArrayBuffer) is unavailable by default. This worker
 * intercepts navigations and same-origin responses and re-serves them with
 * `Cross-Origin-Opener-Policy: same-origin` + `Cross-Origin-Embedder-Policy:
 * require-corp` (and `Cross-Origin-Resource-Policy: cross-origin` on
 * sub-resources), which flips the page into a cross-origin-isolated context on
 * the next load. Degrades safely: over plain http (non-localhost), or where the
 * SW cannot register, the site keeps working via the transferable ping-pong
 * fallback (protocol.ts) — isolation is an optimisation, never a requirement.
 */

/* eslint-disable */
// @ts-nocheck

let coepCredentialless = false;

if (typeof window === 'undefined') {
  // ---- service-worker context ----
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

  self.addEventListener('message', (ev) => {
    if (!ev.data) return;
    if (ev.data.type === 'deregister') {
      self.registration.unregister().then(() => self.clients.matchAll()).then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      });
    } else if (ev.data.type === 'coepCredentialless') {
      coepCredentialless = ev.data.value;
    }
  });

  self.addEventListener('fetch', function (event) {
    const r = event.request;
    if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') return;

    const request =
      coepCredentialless && r.mode === 'no-cors'
        ? new Request(r, { credentials: 'omit' })
        : r;

    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 0) return response;

          const headers = new Headers(response.headers);
          headers.set('Cross-Origin-Embedder-Policy', coepCredentialless ? 'credentialless' : 'require-corp');
          if (!coepCredentialless) headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
          headers.set('Cross-Origin-Opener-Policy', 'same-origin');

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers,
          });
        })
        .catch((e) => console.error(e))
    );
  });
} else {
  // ---- page context (this file loaded as a normal script) ----
  (() => {
    const reloadedBySelf = window.sessionStorage.getItem('coiReloadedBySelf');
    window.sessionStorage.removeItem('coiReloadedBySelf');
    const coepDegrading = reloadedBySelf === 'coepdegrade';

    const n = navigator;
    if (n.serviceWorker && n.serviceWorker.controller) {
      n.serviceWorker.controller.postMessage({ type: 'coepCredentialless', value: coepCredentialless });
    }

    const coi = {
      shouldRegister: () => !reloadedBySelf,
      shouldDeregister: () => false,
      coepCredentialless: () => !(window.chrome || window.netscape),
      coepDegrade: () => !coepDegrading,
      doReload: () => window.location.reload(),
      quiet: false,
      ...window.coi,
    };

    coepCredentialless = coi.coepCredentialless();

    if (!window.crossOriginIsolated && !coepDegrading && coi.shouldDeregister()) {
      if (n.serviceWorker && n.serviceWorker.controller) {
        n.serviceWorker.controller.postMessage({ type: 'deregister' });
      }
    }

    if (window.crossOriginIsolated !== false || !coi.shouldRegister()) return;

    if (!window.isSecureContext) {
      if (!coi.quiet) console.log('COOP/COEP Service Worker not registered, a secure context is required.');
      return;
    }

    if (n.serviceWorker) {
      n.serviceWorker.register(window.document.currentScript.src).then(
        (registration) => {
          if (!coi.quiet) console.log('COOP/COEP Service Worker registered', registration.scope);

          registration.addEventListener('updatefound', () => {
            if (!coi.quiet) console.log('Reloading page to make use of updated COOP/COEP Service Worker.');
            window.sessionStorage.setItem('coiReloadedBySelf', 'updatefound');
            coi.doReload();
          });

          if (registration.active && !n.serviceWorker.controller) {
            if (!coi.quiet) console.log('Reloading page to make use of COOP/COEP Service Worker.');
            window.sessionStorage.setItem('coiReloadedBySelf', 'notcontrolling');
            coi.doReload();
          }
        },
        (err) => {
          if (!coi.quiet) console.error('COOP/COEP Service Worker failed to register:', err);
        }
      );
    }
  })();
}
