import { describe, it, expect } from 'vitest';
import { shouldRegisterCoi, COI_SW_URL, type CoiEnv } from '../coi-register';

const base: CoiEnv = {
  isProd: true,
  hasServiceWorker: true,
  alreadyIsolated: false,
  isSecureContext: true,
};

describe('shouldRegisterCoi', () => {
  it('registers in a production, secure, SW-capable, non-isolated context', () => {
    expect(shouldRegisterCoi(base)).toBe(true);
  });

  it('never registers in development (dev serves plain http; fallback carries it)', () => {
    expect(shouldRegisterCoi({ ...base, isProd: false })).toBe(false);
  });

  it('does nothing when already cross-origin-isolated', () => {
    expect(shouldRegisterCoi({ ...base, alreadyIsolated: true })).toBe(false);
  });

  it('degrades to ping-pong when service workers are unavailable', () => {
    expect(shouldRegisterCoi({ ...base, hasServiceWorker: false })).toBe(false);
  });

  it('does not register in an insecure context (plain http, non-localhost)', () => {
    expect(shouldRegisterCoi({ ...base, isSecureContext: false })).toBe(false);
  });

  it('exposes the vendored shim at the site root', () => {
    expect(COI_SW_URL).toBe('/coi-serviceworker.js');
  });
});
