import { describe, it, expect, vi } from 'vitest';
import {
  type Init,
  type LoadScope,
  type Positions,
  type ReturnBuffer,
  type Start,
  type Stop,
  type SharedPositions,
  type Settled,
  canUseSharedMemory,
  isMainToWorker,
  isWorkerToMain,
  transferablesFor,
} from '../protocol';

describe('transferablesFor', () => {
  it('transfers the LoadScope buffer', () => {
    const buffer = new ArrayBuffer(64);
    const msg: LoadScope = { type: 'loadScope', buffer, nodeCount: 3, generation: 1 };
    expect(transferablesFor(msg)).toEqual([buffer]);
  });

  it('transfers the ReturnBuffer buffer', () => {
    const buffer = new ArrayBuffer(24);
    const msg: ReturnBuffer = { type: 'returnBuffer', buffer, generation: 2 };
    expect(transferablesFor(msg)).toEqual([buffer]);
  });

  it('transfers nothing for control messages', () => {
    const init: Init = { type: 'init', wasmUrl: '' };
    const start: Start = { type: 'start' };
    const stop: Stop = { type: 'stop' };
    expect(transferablesFor(init)).toEqual([]);
    expect(transferablesFor(start)).toEqual([]);
    expect(transferablesFor(stop)).toEqual([]);
  });
});

describe('type guards', () => {
  it('accept well-formed messages in both directions', () => {
    const shared: SharedPositions = { type: 'sharedPositions', sab: new ArrayBuffer(8) as unknown as SharedArrayBuffer, generation: 0 };
    const settled: Settled = { type: 'settled', alpha: 0.001, generation: 0 };
    expect(isWorkerToMain(shared)).toBe(true);
    expect(isWorkerToMain(settled)).toBe(true);
    expect(isMainToWorker({ type: 'start' })).toBe(true);
  });

  it('reject non-objects and typeless payloads', () => {
    expect(isWorkerToMain(null)).toBe(false);
    expect(isWorkerToMain(42)).toBe(false);
    expect(isWorkerToMain({})).toBe(false);
    expect(isMainToWorker(undefined)).toBe(false);
    expect(isMainToWorker({ notType: 1 })).toBe(false);
  });
});

describe('canUseSharedMemory', () => {
  it('is false when crossOriginIsolated is not true', () => {
    // jsdom default: crossOriginIsolated is false/undefined.
    expect(canUseSharedMemory()).toBe(false);
  });

  it('stays false even under crossOriginIsolated (SAB transport disabled 2026-07-23 — unsynchronised read/write race exploded positions to ~1e20 and blanked the view; ping-pong is the sole transport)', () => {
    const g = globalThis as { crossOriginIsolated?: boolean };
    const prev = g.crossOriginIsolated;
    g.crossOriginIsolated = true;
    expect(canUseSharedMemory()).toBe(false);
    g.crossOriginIsolated = prev;
  });
});

describe('positions frame shape (round-trip through a mock port)', () => {
  it('carries generation and alpha, transfers its buffer', () => {
    const buffer = new ArrayBuffer(24);
    const frame: Positions = { type: 'positions', buffer, generation: 7, alpha: 0.25 };
    const post = vi.fn();
    post(frame, transferablesFor({ type: 'returnBuffer', buffer, generation: 7 }));
    expect(frame.generation).toBe(7);
    expect(frame.alpha).toBeCloseTo(0.25);
    expect(post).toHaveBeenCalledWith(frame, [buffer]);
  });
});
