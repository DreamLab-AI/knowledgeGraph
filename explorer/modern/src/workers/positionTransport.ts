/**
 * positionTransport.ts — pure, worker-global-free helpers for the physics
 * worker's zero-copy position transport (ADR-NG-001 §3, protocol.ts).
 *
 * Two transports exist:
 *   'shared'   — a single SharedArrayBuffer the worker writes in place every
 *                tick; published once via SharedPositions; the main thread reads
 *                it each frame with no messaging and no transfer.
 *   'pingpong' — a double-buffered pair of ArrayBuffers. Each publishable tick
 *                the worker copies positions into a free buffer and TRANSFERS it
 *                out (Positions); the main thread reads it and hands it back
 *                (ReturnBuffer). While one buffer is in flight the worker keeps
 *                ticking into the other, so the sim never stalls.
 *
 * This module is imported by both `physics.worker.ts` and the vitest suite; it
 * touches no worker/DOM globals so the swap logic is unit-testable in jsdom.
 */

/** Bytes for a position buffer of `nodeCount` 2-D points ([x,y] f32 each). */
export function positionByteLength(nodeCount: number): number {
  return Math.max(0, nodeCount) * 2 * Float32Array.BYTES_PER_ELEMENT;
}

/**
 * Copy the live wasm position view into a transport-owned Float32Array.
 * Copies `min(src.length, dst.length)` floats so a stale-length view (e.g. the
 * wasm buffer grew and reports more) never overruns the transport buffer. This
 * is the ONE copy per tick, and it happens in the worker — never on the main
 * thread's render path.
 */
export function copyPositions(src: Float32Array, dst: Float32Array): void {
  if (src.length === dst.length) {
    dst.set(src);
    return;
  }
  const n = Math.min(src.length, dst.length);
  dst.set(src.subarray(0, n));
}

/**
 * Double-buffer pool for the transferable ping-pong transport. Owns exactly two
 * ArrayBuffers of identical byteLength. `acquire()` hands out a buffer to write
 * into and transfer; `release()` takes a returned buffer back. When both buffers
 * are in flight (main thread has not returned either yet) `acquire()` yields
 * `undefined` and the caller skips publishing that frame — the sim keeps ticking
 * regardless.
 *
 * Invariant: a buffer is either free (in the pool) or in flight (acquired, not
 * yet released) — never both, never lost. Transfer changes object identity;
 * the worker's generation guard rejects stale messages, while this pool
 * bounds returned buffers by size and the outstanding transfer count.
 */
export class DoubleBuffer {
  readonly byteLength: number;
  private inFlight = 0;
  private static readonly SIZE = 2;
  private free: ArrayBuffer[];

  constructor(byteLength: number) {
    this.byteLength = byteLength;
    const a = new ArrayBuffer(byteLength);
    const b = new ArrayBuffer(byteLength);
    this.free = [a, b];
  }

  /** Number of buffers currently available to write into (0, 1 or 2). */
  get freeCount(): number {
    return this.free.length;
  }

  /** Pop a free buffer to compute into, or undefined when both are in flight. */
  acquire(): ArrayBuffer | undefined {
    const buffer = this.free.pop();
    if (buffer !== undefined) this.inFlight++;
    return buffer;
  }

  /**
   * Return one in-flight buffer of the right size. Generation validation
   * belongs to the caller because transferred objects have new identities.
   */
  release(buf: ArrayBuffer): boolean {
    if (buf.byteLength !== this.byteLength) return false;
    if (this.inFlight === 0) return false;
    if (this.free.includes(buf)) return false;
    this.inFlight--;
    this.free.push(buf);
    return true;
  }

  /** True when neither buffer is in flight. */
  get allFree(): boolean {
    return this.free.length === DoubleBuffer.SIZE;
  }
}
