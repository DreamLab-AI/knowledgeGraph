public:: true

# Babylon Js
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:babylon-js", "@type":"Page", "title":"Babylon Js", "vc:slug":"babylon-js", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:babylon-js",
  "@type": "Class",
  "label": "Babylon Js",
  "definition": "Babylon.js is an open-source, JavaScript and TypeScript real-time 3D rendering engine for the web that drives interactive graphics, games, and immersive experiences through WebGL and WebGPU backends. It provides a scene graph, physically based rendering, a node-based material system, glTF asset loading, an animation system, physics integration, and first-class WebXR support for virtual and augmented reality. As a spatial-computing framework it is a common foundation for browser-delivered metaverse and 3D applications, abstracting low-level GPU programming behind a high-level scene and entity API.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rendering-engine",
      "label": "Rendering Engine"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      },
      {
        "@id": "urn:ngm:class:gl-tf",
        "label": "glTF"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:three-js",
        "label": "Three.js"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:three-js",
        "label": "Three.js"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Babylon Js]] is an open-source JavaScript and TypeScript [[Rendering Engine]] for the web that drives interactive 3D graphics, games, and immersive experiences through WebGL and [[WebGPU]] backends.
  - It provides a [[Scene Graph]], [[Physically Based Rendering]], a node-based material system, [[glTF]] asset loading, animation, physics, and first-class [[WebXR]] support.
  - As a spatial-computing framework it is a common foundation for browser-delivered 3D and metaverse applications, abstracting GPU programming behind a high-level API.

- ### Overview
  - Babylon.js targets the full browser-3D stack: it renders, manages scenes, loads assets, handles input and cameras, and orchestrates the per-frame [[Rendering Pipeline]].
  - It supports both WebGL2 and [[WebGPU]] backends, letting the same scene exploit modern compute and rendering features where available and fall back gracefully otherwise.
  - The engine emphasises a complete, batteries-included framework with editor tooling, a node material editor, and an inspector, contrasting with leaner libraries like [[Three.js]] that favour minimal core plus ecosystem.
  - Its native [[WebXR]] integration makes it a frequent choice for immersive web and browser-based metaverse experiences.

- ### Key aspects
  - #### Scene graph and entities
    - Hierarchical [[Scene Graph]] of meshes, transform nodes, lights, and cameras with parent-child transforms.
    - Component systems for behaviours, animations, and physics colliders.
  - #### Materials and shading
    - [[Physically Based Rendering]] materials, a visual node material editor that compiles to [[Shader]] code, and post-processing pipelines.
    - Custom shaders and effects layered over the standard pipeline.
  - #### Asset pipeline
    - First-class [[glTF]] and GLB import, texture and animation loading, and scene serialisation.
  - #### Rendering backends
    - Abstraction over WebGL and [[WebGPU]], enabling compute-driven effects and modern GPU features through one [[Rendering Pipeline]].
  - #### Immersive and interaction
    - Built-in [[WebXR]] sessions, controllers, hand tracking, and AR/VR camera rigs.

- ### Applications
  - #### Immersive web and metaverse
    - Browser-delivered 3D worlds, social spaces, and product configurators using [[WebXR]].
  - #### Games and interactive media
    - Web-native games and rich interactive visualisations built on a [[Game Engine]]-like feature set.
  - #### Visualisation and digital twins
    - Engineering, scientific, and architectural visualisation rendered with [[Real-Time Rendering]] in the browser.

- ### Relationships
  - subClassOf:: [[Rendering Engine]]
  - uses:: [[WebGPU]]
  - uses:: [[Shader]]
  - implements:: [[Rendering Pipeline]]
  - implements:: [[Physically Based Rendering]]
  - supports:: [[WebXR]]
  - supports:: [[glTF]]
  - hasPart:: [[Scene Graph]]
  - requires:: [[WebGPU]]
  - enables:: [[Real-Time Rendering]]
  - dependsOn:: [[Rendering Pipeline]]
  - contrastsWith:: [[Three.js]]
  - bridgesTo:: [[WebXR]]
  - bridgesTo:: [[Game Engine]]
  - relatedTo:: [[Three.js]]
  - relatedTo:: [[Real-Time Rendering]]
  - relatedTo:: [[Scene Graph]]

- ### Provenance
  - sources::
  - updated:: 2026-06-15
