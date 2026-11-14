import { describe, it, expect } from 'vitest';
import { DoubleBuffer, copyPositions, positionByteLength } from '../positionTransport';

describe('positionByteLength', () => {
  it('is 8 bytes per node (2 f32)', () => {
    expect(positionByteLength(0)).toBe(0);
    expect(positionByteLength(1)).toBe(8);
    expect(positionByteLength(300)).toBe(2400);
  });
  it('clamps negatives to 0', () => {
    expect(positionByteLength(-5)).toBe(0);
  });
});

describe('copyPositions', () => {
  it('copies equal-length arrays wholesale', () => {
    const src = Float32Array.from([1, 2, 3, 4]);
    const dst = new Float32Array(4);
    copyPositions(src, dst);
    expect(Array.from(dst)).toEqual([1, 2, 3, 4]);
  });
  it('never overruns dst when src is longer (grown wasm view)', () => {
    const src = Float32Array.from([1, 2, 3, 4, 5, 6]);
    const dst = new Float32Array(4);
    copyPositions(src, dst);
    expect(Array.from(dst)).toEqual([1, 2, 3, 4]);
  });
  it('leaves the tail untouched when src is shorter', () => {
    const src = Float32Array.from([9, 9]);
    const dst = Float32Array.from([0, 0, 7, 7]);
    copyPositions(src, dst);
    expect(Array.from(dst)).toEqual([9, 9, 7, 7]);
  });
});

describe('DoubleBuffer ping-pong swap', () => {
  it('reclaims a transferred buffer whose object identity changed', () => {
    const db = new DoubleBuffer(8);
    const original = db.acquire()!;
    const returned = structuredClone(original, { transfer: [original] });
    expect(original.byteLength).toBe(0);
    expect(db.release(returned)).toBe(true);
    expect(db.freeCount).toBe(2);
    expect(db.acquire()).toBe(returned);
  });
  it('keeps both slots reusable across repeated two-way transfers', () => {
    const db = new DoubleBuffer(8);
    for (let frame = 0; frame < 20; frame++) {
      const first = db.acquire()!;
      const second = db.acquire()!;
      expect(db.acquire()).toBeUndefined();
      for (const outbound of [first, second]) {
        const onMain = structuredClone(outbound, { transfer: [outbound] });
        expect(outbound.byteLength).toBe(0);
        const onWorker = structuredClone(onMain, { transfer: [onMain] });
        expect(onMain.byteLength).toBe(0);
        expect(db.release(onWorker)).toBe(true);
      }
      expect(db.allFree).toBe(true);
      expect(db.freeCount).toBe(2);
    }
  });

  it('hands out exactly two distinct buffers of the right size', () => {
    const db = new DoubleBuffer(24);
    expect(db.freeCount).toBe(2);
    const a = db.acquire()!;
    const b = db.acquire()!;
    expect(a).toBeInstanceOf(ArrayBuffer);
    expect(b).toBeInstanceOf(ArrayBuffer);
    expect(a).not.toBe(b);
    expect(a.byteLength).toBe(24);
    expect(db.freeCount).toBe(0);
  });

  it('yields undefined when both buffers are in flight', () => {
    const db = new DoubleBuffer(8);
    db.acquire();
    db.acquire();
    expect(db.acquire()).toBeUndefined();
    expect(db.allFree).toBe(false);
  });

  it('reclaims a returned buffer for reuse', () => {
    const db = new DoubleBuffer(8);
    const a = db.acquire()!;
    db.acquire();
    expect(db.release(a)).toBe(true);
    expect(db.acquire()).toBe(a); // the reclaimed one comes back
  });

  it('rejects duplicate, unsolicited and wrong-sized returns', () => {
    const db = new DoubleBuffer(8);
    const a = db.acquire()!;
    expect(db.release(a)).toBe(true);
    expect(db.release(a)).toBe(false); // already free
    expect(db.release(new ArrayBuffer(8))).toBe(false); // no outstanding transfer
    expect(db.release(new ArrayBuffer(16))).toBe(false); // wrong size
    expect(db.freeCount).toBe(2);
  });

  it('models a full ping-pong round: acquire → in-flight → return → acquire', () => {
    const db = new DoubleBuffer(8);
    const frame1 = db.acquire()!; // worker computes frame 1, transfers it
    expect(db.freeCount).toBe(1);
    const frame2 = db.acquire()!; // worker computes frame 2 into the other
    expect(db.freeCount).toBe(0);
    expect(db.acquire()).toBeUndefined(); // stalled until main returns one
    db.release(frame1); // main returns frame 1
    const frame3 = db.acquire()!;
    expect(frame3).toBe(frame1); // reused, no allocation
    expect(frame2).not.toBe(frame3);
  });
});
