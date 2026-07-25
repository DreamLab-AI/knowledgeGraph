/**
 * Ambient declaration for `troika-three-text` (ships no bundled types). The
 * SDF `Text` object extends THREE.Mesh with layout props (text, fontSize,
 * anchorX/Y, colour, outline…) and an async `sync()`. Declared loosely: this is
 * a rendering-only dependency exercised in LabelsTopN, not a typed API surface.
 */
declare module 'troika-three-text' {
  import { Mesh } from 'three';
  export interface Text extends Mesh {
    text: string;
    sync(callback?: () => void): void;
    dispose(): void;
    // troika owns a single SDF material with depthTest/depthWrite toggles.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    material: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [prop: string]: any;
  }
  export const Text: { new (): Text };
  export function preloadFont(
    options: { font?: string; characters?: string },
    callback: () => void,
  ): void;
}
