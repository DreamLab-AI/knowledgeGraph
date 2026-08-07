public:: true

# Three.js
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09fa0ad0367bea5191d38052cac2faf643e96813d73b1bb9325b59a10895925c",
  "@type": "Page",
  "vc:slug": "three-js",
  "title": "Three.js",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graphics-library",
      "vc:label": "Graphics Library"
    },
    {
      "@id": "urn:visionflow:linked:web-gl",
      "vc:label": "WebGL"
    },
    {
      "@id": "urn:visionflow:linked:scene-graph",
      "vc:label": "Scene Graph"
    },
    {
      "@id": "urn:visionflow:linked:babylon-js",
      "vc:label": "Babylon Js"
    },
    {
      "@id": "urn:visionflow:linked:web-xr",
      "vc:label": "WebXR"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:three-js",
  "@type": "Class",
  "label": "Three.js",
  "definition": "Three.js is an open-source JavaScript 3D graphics library that provides a high-level scene-graph abstraction over WebGL (and, increasingly, WebGPU), enabling interactive 3D experiences that run in any modern web browser without plugins. It supplies cameras, lights, materials, geometry primitives, model loaders, animation and post-processing systems, and first-class WebXR support, making it the most widely adopted foundation for browser-based 3D visualisation, product configurators and immersive web experiences.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:graphics-library",
    "label": "Graphics Library"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:web-gl",
        "label": "WebGL"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:babylon-js",
        "label": "Babylon.js"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Three.js is an open-source JavaScript 3D graphics library that provides a high-level scene-graph abstraction over WebGL (and, increasingly, WebGPU), enabling interactive 3D experiences that run in any modern web browser without plugins. It supplies cameras, lights, materials, geometry primitives, model loaders, animation and post-processing systems, and first-class WebXR support, making it the most widely adopted foundation for browser-based 3D visualisation, product configurators and immersive web experiences."

- ### Semantic Classification
  - owl-class:: spatial-computing:ThreeJs
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Graphics Library]]
  - uses:: [[WebGL]]
  - contrasts-with:: [[Babylon Js]]
  - bridges-to:: [[WebXR]]

- ### Content

  ## Definition

  **Three.js**, created by Ricardo Cabello (mr.doob) in 2010, is the de facto standard library for 3D graphics on the web. Raw [[WebGL]] exposes a low-level, stateful rasterisation API; Three.js wraps it in an object-oriented [[Scene Graph]] — `Scene`, `Object3D`, `Mesh`, `Camera`, `Light` — so developers compose scenes declaratively and let the renderer handle buffer management, shader compilation and draw-call submission. The library ships perspective and orthographic cameras, physically based materials (`MeshStandardMaterial`, `MeshPhysicalMaterial`), a full lighting model with shadow mapping, skeletal and morph-target animation, raycasting for picking, and loaders for glTF, OBJ, FBX and Draco/KTX2-compressed assets.

  Distribution is deliberately lightweight: an MIT-licensed ES module with no build-step requirement, a large `examples/jsm` ecosystem (orbit controls, post-processing passes, XR helpers), and releases cut roughly monthly (versioned r150, r160, ...). Its `WebXRManager` makes stereoscopic rendering and controller input largely automatic, so the same scene can serve desktop, mobile and VR/AR headsets — the reason Three.js is a common substrate for [[WebXR]] experiences and immersive data visualisation, including knowledge-graph renderers of the kind used in the VisionFlow ecosystem.

  Its principal alternative, [[Babylon Js]], offers a more batteries-included engine (built-in physics, GUI, inspector) with corporate backing from Microsoft; Three.js favours a smaller core plus community extensions, and has the larger ecosystem — React Three Fiber, drei and Threlte expose it idiomatically to React and Svelte applications.

  ## Current Landscape

  Three.js dominates browser 3D by adoption: over 100k GitHub stars, use in countless award-winning WebGL sites, scientific viewers, digital twins and NeRF/Gaussian-splat viewers. The strategic shift is the migration from WebGL 2 to WebGPU: `WebGPURenderer` and the node-based TSL material system reached production quality through 2024-2025, bringing compute shaders and modern GPU pipelines to the same scene-graph API. Performance work centres on instancing, batched meshes and reducing draw-call overhead, keeping complex scenes at 60-90 FPS even on mobile and standalone XR hardware.
