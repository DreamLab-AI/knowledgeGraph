Three.js is an open-source JavaScript 3D graphics library that provides a high-level scene-graph abstraction over WebGL (and, increasingly, WebGPU), enabling interactive 3D experiences that run in any modern web browser without plugins. It supplies cameras, lights, materials, geometry primitives, model loaders, animation and post-processing systems, and first-class WebXR support, making it the most widely adopted foundation for browser-based 3D visualisation, product configurators and immersive web experiences.

### Semantic Classification

### Content

## Definition

**Three.js**, created by Ricardo Cabello (mr.doob) in 2010, is the de facto standard library for 3D graphics on the web. Raw [[WebGL]] exposes a low-level, stateful rasterisation API; Three.js wraps it in an object-oriented [[Scene Graph]] — `Scene`, `Object3D`, `Mesh`, `Camera`, `Light` — so developers compose scenes declaratively and let the renderer handle buffer management, shader compilation and draw-call submission. The library ships perspective and orthographic cameras, physically based materials (`MeshStandardMaterial`, `MeshPhysicalMaterial`), a full lighting model with shadow mapping, skeletal and morph-target animation, raycasting for picking, and loaders for glTF, OBJ, FBX and Draco/KTX2-compressed assets.

Distribution is deliberately lightweight: an MIT-licensed ES module with no build-step requirement, a large `examples/jsm` ecosystem (orbit controls, post-processing passes, XR helpers), and releases cut roughly monthly (versioned r150, r160, ...). Its `WebXRManager` makes stereoscopic rendering and controller input largely automatic, so the same scene can serve desktop, mobile and VR/AR headsets — the reason Three.js is a common substrate for [[WebXR]] experiences and immersive data visualisation, including knowledge-graph renderers of the kind used in the VisionFlow ecosystem.

Its principal alternative, [[Babylon Js]], offers a more batteries-included engine (built-in physics, GUI, inspector) with corporate backing from Microsoft; Three.js favours a smaller core plus community extensions, and has the larger ecosystem — React Three Fiber, drei and Threlte expose it idiomatically to React and Svelte applications.

## Current Landscape

Three.js dominates browser 3D by adoption: over 100k GitHub stars, use in countless award-winning WebGL sites, scientific viewers, digital twins and NeRF/Gaussian-splat viewers. The strategic shift is the migration from WebGL 2 to WebGPU, which crossed the production threshold in 2025-26:

- **WebGPURenderer went zero-config production-ready in r171 (September 2025)**: `import * as THREE from 'three/webgpu'` gives WebGPU rendering with automatic fallback to a built-in WebGL 2 backend — no bundler tweaks, polyfills, or `navigator.gpu` checks.
- **Browser support is now universal**: Apple shipped WebGPU in Safari 26 (September 2025) across macOS, iOS, iPadOS and visionOS — the last major-browser holdout — joining Chrome/Edge (v113+, 2023) and Firefox (v141+); the WebGL 2 fallback still covers the residual minority.
- **Recent releases**: r180 (September 2025) added HDR support to WebGPURenderer and removed the deprecated RGBMLoader; r182 (December 2025) is a recent stable; r184 (March 2026) eliminated per-frame allocations to steady frame rates on complex scenes.
- **TSL is the renderer-agnostic material path**: node materials transpile to WGSL on the WebGPU backend and GLSL on the WebGL 2 fallback, but classic `ShaderMaterial`/`RawShaderMaterial` and `EffectComposer` passes must be ported to the node/TSL post-processing stack. Compute shaders now enable million-unit particle systems and GPU collision on the same scene graph.

  **Sources**:

- https://threejs.org/manual/en/webgpurenderer.html
- https://www.utsubo.com/blog/threejs-2026-what-changed

