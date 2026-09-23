---
okf_version: "0.2"
type: Class
title: Babylon Js
resource: urn:ngm:class:babylon-js
domain: spatial-computing
description: Babylon.js is an open-source, JavaScript and TypeScript real-time 3D rendering engine for the web that drives interactive graphics, games, and immersive experiences through WebGL and WebGPU backends. It provides a scene graph, physically based rendering, a node-based material system, glTF asset loading, an animation system, physics integration, and first-class WebXR support for virtual and augment
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:rendering-engine
hasPart:
  - urn:ngm:class:scene-graph
requires:
  - urn:ngm:class:webgpu
enables:
  - urn:ngm:class:real-time-rendering
dependsOn:
  - urn:ngm:class:rendering-pipeline
implements:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:physically-based-rendering
contrastsWith:
  - urn:ngm:class:three-js
bridgesTo:
  - urn:ngm:class:web-xr
  - urn:ngm:class:game-engine
uses:
  - urn:ngm:class:webgpu
  - urn:ngm:class:shader
supports:
  - urn:ngm:class:web-xr
  - urn:ngm:class:gltf-standard
relatedTo:
  - urn:ngm:class:three-js
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:scene-graph
---

# Babylon Js

Babylon.js is an open-source, JavaScript and TypeScript real-time 3D rendering engine for the web that drives interactive graphics, games, and immersive experiences through WebGL and WebGPU backends. It provides a scene graph, physically based rendering, a node-based material system, glTF asset loading, an animation system, physics integration, and first-class WebXR support for virtual and augmented reality. As a spatial-computing framework it is a common foundation for browser-delivered metaverse and 3D applications, abstracting low-level GPU programming behind a high-level scene and entity API.
