/**
 * diag.ts — build-proof diagnostics.
 *
 * The production build strips ALL console calls (`drop_console: true` in
 * vite.config), which silently deleted every runtime breadcrumb and made
 * "no console errors on prod" observations meaningless (T2 investigation,
 * 2026-07-23). This sink survives minification: entries land in a global
 * ring buffer readable from devtools/CDP via `globalThis.__NG_DIAG__`,
 * and ALSO go to the console in dev builds where it still exists.
 */

type DiagEntry = [epochMs: number, label: string, data: unknown];

const MAX_ENTRIES = 200;

export function diag(label: string, data?: unknown): void {
  const g = globalThis as { __NG_DIAG__?: DiagEntry[] };
  const buf = (g.__NG_DIAG__ ??= []);
  buf.push([Date.now(), label, data]);
  if (buf.length > MAX_ENTRIES) buf.splice(0, buf.length - MAX_ENTRIES);
  try {
    // Stripped from production bundles; alive in dev.
    console.info('[ng]', label, data);
  } catch {
    /* consoleless environment */
  }
}
