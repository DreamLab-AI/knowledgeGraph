/**
 * coi-register.ts — production-guarded registration of the coi-serviceworker
 * shim (ADR-NG-001 §3). The shim flips the page into a cross-origin-isolated
 * context so the physics worker can use SharedArrayBuffer; where it can't
 * (plain http, no SW support, dev), the transferable ping-pong fallback keeps
 * the site fully functional — this is an optimisation, never a launch gate.
 *
 * The decision is factored into a pure `shouldRegisterCoi` so it is unit-tested
 * without a DOM or a service-worker.
 */

/** URL of the vendored shim in `public/` (copied to the site root at build). */
export const COI_SW_URL = '/coi-serviceworker.js';

export interface CoiEnv {
  /** Production build? (dev never registers — Vite serves plain http.) */
  isProd: boolean;
  /** `navigator.serviceWorker` present in this context? */
  hasServiceWorker: boolean;
  /** Already `crossOriginIsolated`? (SAB already available — nothing to do.) */
  alreadyIsolated: boolean;
  /** Secure context? (SW registration requires https or localhost.) */
  isSecureContext: boolean;
}

/**
 * Pure predicate: register the COI shim only in production, in a secure context,
 * where service workers exist and the page is not already isolated. Any false
 * short-circuits to the ping-pong fallback with no side effects.
 */
export function shouldRegisterCoi(env: CoiEnv): boolean {
  if (!env.isProd) return false;
  if (env.alreadyIsolated) return false;
  if (!env.hasServiceWorker) return false;
  if (!env.isSecureContext) return false;
  return true;
}

/** Read the ambient browser environment into a {@link CoiEnv}. */
function readEnv(): CoiEnv {
  const g = globalThis as {
    crossOriginIsolated?: boolean;
    isSecureContext?: boolean;
    navigator?: { serviceWorker?: unknown };
  };
  // import.meta.env.PROD is inlined by Vite; guard for non-Vite (test) contexts.
  const isProd =
    typeof import.meta !== 'undefined' &&
    (import.meta as { env?: { PROD?: boolean } }).env?.PROD === true;

  return {
    isProd,
    hasServiceWorker: typeof g.navigator === 'object' && !!g.navigator?.serviceWorker,
    alreadyIsolated: g.crossOriginIsolated === true,
    isSecureContext: g.isSecureContext !== false,
  };
}

/**
 * Register the coi-serviceworker in production. Loading the shim as a normal
 * script triggers its page-context branch (register + one-time reload to gain
 * isolation). Idempotent and fail-open: any error is swallowed and the site
 * proceeds on the ping-pong transport. Safe to call once at boot (main.tsx).
 */
export function registerCoiServiceWorker(env: CoiEnv = readEnv()): void {
  if (!shouldRegisterCoi(env)) return;
  try {
    const doc = (globalThis as { document?: Document }).document;
    if (!doc) return;
    // Existing script tag? Don't double-inject.
    if (doc.querySelector(`script[src="${COI_SW_URL}"]`)) return;
    const s = doc.createElement('script');
    s.src = COI_SW_URL;
    s.async = true;
    doc.head.appendChild(s);
  } catch {
    /* fail-open: ping-pong fallback carries the site. */
  }
}
