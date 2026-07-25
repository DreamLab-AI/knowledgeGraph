/**
 * Ambient module declarations for stylesheet side-effect imports.
 *
 * Vite resolves `import './x.css'` at build time, but `tsc` needs a type for it.
 * The project had no such declaration (every `.css` import errored under
 * `tsc -b`); this supplies the standard one project-wide.
 */

declare module '*.css';
declare module '*.scss';
