public:: true

# openusd
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c4ea0e096531dc1295b5be0a0beeb773708fb2edf2d941d9c69a887f44a2fbd",
  "@type": "Page",
  "vc:slug": "open-usd",
  "title": "openusd",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-usd",
  "@type": "Class",
  "label": "OpenUSD",
  "definition": "OpenUSD (Universal Scene Description) is an open-source framework, scene-graph data model, and file format developed by Pixar Animation Studios for composing, simulating, collaborating on, and exchanging richly structured 3D scenes across digital content creation tools and real-time rendering pipelines. Its layered composition engine allows multiple teams or tools to contribute non-destructive overrides to a shared hierarchical scene graph with full time-sampled animation support, making it the de facto interchange format for large-scale visual effects, game engine, and industrial simulation pipelines. Governed since 2023 by the Alliance for OpenUSD (AOUSD) and progressing toward ISO/IEC 22886 standardisation, OpenUSD underpins NVIDIA Omniverse, Apple visionOS/RealityKit, and major digital twin platforms.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:universal-scene-description", "label": "Universal Scene Description"},
    {"@id": "urn:ngm:class:usd-file-format", "label": "USD File Format"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:usd-composition-arcs", "label": "USD Composition Arcs"},
      {"@id": "urn:ngm:class:usd-schema-plugin", "label": "USD Schema Plugin"},
      {"@id": "urn:ngm:class:usdz-package-format", "label": "USDZ Package Format"},
      {"@id": "urn:ngm:class:usd-hydra-renderer", "label": "USD Hydra Renderer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-content-pipeline", "label": "3D Content Pipeline"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:collaborative-3-d-editing", "label": "Collaborative 3D Editing"},
      {"@id": "urn:ngm:class:augmented-reality-content", "label": "Augmented Reality Content"},
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:scene-graph", "label": "Scene Graph"},
      {"@id": "urn:ngm:class:hierarchical-data-model", "label": "Hierarchical Data Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:materialx", "label": "MaterialX"},
      {"@id": "urn:ngm:class:mdl-material-definition-language", "label": "MDL Material Definition Language"},
      {"@id": "urn:ngm:class:skeletal-animation", "label": "Skeletal Animation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:non-destructive-workflow", "label": "Non-Destructive Workflow"},
      {"@id": "urn:ngm:class:level-of-detail", "label": "Level of Detail"},
      {"@id": "urn:ngm:class:procedural-geometry", "label": "Procedural Geometry"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:alliance-for-openusd", "label": "Alliance for OpenUSD"},
      {"@id": "urn:ngm:class:iso-iec-22886", "label": "ISO/IEC 22886"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:gltf-standard", "label": "glTF Standard"},
      {"@id": "urn:ngm:class:fbx-format", "label": "FBX Format"},
      {"@id": "urn:ngm:class:collada-format", "label": "COLLADA Format"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:3-d-asset", "label": "3D Asset"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"},
      {"@id": "urn:ngm:class:nvidia-omniverse", "label": "NVIDIA Omniverse"},
      {"@id": "urn:ngm:class:realitykit", "label": "RealityKit"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:autonomous-vehicle-simulation", "label": "Autonomous Vehicle Simulation"},
      {"@id": "urn:ngm:class:industrial-metaverse", "label": "Industrial Metaverse"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - OpenUSD (Universal Scene Description) is an open-source [[Scene Graph]] framework, data model, and family of file formats created by [[Pixar Animation Studios]] for composing, simulating, collaborating on, and exchanging richly structured 3D scenes across heterogeneous tools and rendering pipelines. Its layered [[Composition Arc]] engine allows multiple teams to contribute non-destructive overrides to a shared [[Hierarchical Data Model]] with time-sampled animation, making it the de facto interchange format for large-scale [[Visual Effects Pipeline]], [[Game Engine]], and industrial [[Digital Twin]] workflows. Since 2023 it has been governed by the [[Alliance for OpenUSD]] (AOUSD) and is progressing toward [[ISO/IEC 22886]] standardisation as the universal language for [[Spatial Computing]] content.

- ### Overview
  - OpenUSD solves a fundamental problem in 3D production: how do dozens of departments — modelling, rigging, animation, shading, lighting, FX, layout — collaborate on a single scene without destructively overwriting each other's data? USD's answer is a layered, override-based [[Scene Graph]] where each department's contributions exist in separate files (layers), combined at runtime by a composition engine.
  - Originally developed internally at [[Pixar Animation Studios]] for productions including *Brave* and *Inside Out*, USD was open-sourced in 2016. Its design was shaped by the demands of feature-film production but proved general enough for games, real-time simulation, and industrial applications.
  - The [[Alliance for OpenUSD]] (AOUSD), formed in August 2023 by Pixar, Apple, Autodesk, NVIDIA, and Adobe, now steers the specification and promotes cross-industry interoperability. Members include Epic Games, Siemens, Sony, and many DCC tool vendors.

- ### Key Components
  - **Scene Graph and Prims**
    - The fundamental unit is the *prim* (primitive), a named node in the [[Hierarchical Data Model]] that carries typed *properties* (attributes and relationships). Prims are organised in a namespace hierarchy (e.g. `/World/Characters/Hero`) and typed by *schemas* that define expected properties.
  - **Composition Arcs**
    - USD's power derives from its six [[Composition Arc]] types — **sublayers**, **references**, **payloads**, **inherits**, **specialises**, and **variants** — that combine layers according to a well-defined precedence order (LIVRPS). This enables non-destructive [[Override]], asset instancing, LOD switching, and shot-specific variations without duplicating geometry.
    - [[Payload]] arcs allow deferred loading of heavy geometry, critical for managing scene complexity in large-scale [[Digital Twin]] and [[Autonomous Vehicle Simulation]] datasets.
  - **USD Hydra Renderer**
    - [[USD Hydra Renderer]] is a pluggable rendering architecture that decouples scene traversal from renderer implementation. Render delegates allow the same USD scene to be sent to Storm (OpenGL/Metal preview), Arnold, RenderMan, V-Ray, Cycles, or [[NVIDIA Omniverse]]'s RTX renderer without modifying scene data.
  - **Schemas and Plugins**
    - UsdGeom: meshes, curves, point clouds, NURBS surfaces, bounding boxes, camera and coordinate system definitions.
    - UsdSkel: skeletal rig and skinning data for [[Skeletal Animation]].
    - UsdLux: physically-based [[Lighting Model]] definitions compatible with [[MaterialX]] and MDL shaders.
    - UsdPhysics: rigid-body and constraint properties consumed by [[Physics Simulation]] engines such as NVIDIA PhysX and Havok.
    - UsdShade / [[MaterialX]] / [[MDL Material Definition Language]]: layered material and shader network representation.
  - **File Formats**
    - `.usda`: human-readable ASCII; ideal for version control and debugging.
    - `.usdc` ("crate"): compact binary; fast I/O for large production scenes.
    - `.usdz`: ZIP archive bundling `.usd` and texture assets; designed for [[Augmented Reality Content]] distribution on iOS, Android, and [[Apple visionOS]].

- ### Applications and Use Cases
  - **Visual Effects and Animation**
    - USD is the primary interchange format at [[Pixar Animation Studios]], [[Walt Disney Animation Studios]], [[Industrial Light & Magic]], and most major VFX studios. It replaced proprietary per-studio formats and enables vendors and facilities to exchange [[3D Asset]] data reliably.
  - **Real-Time Engines**
    - [[Unreal Engine]] (5.x), [[Unity]], and [[Godot Engine]] support USD import/export, enabling asset pipelines to flow between DCC tools and games without lossy re-export through [[FBX Format]].
  - **NVIDIA Omniverse**
    - [[NVIDIA Omniverse]] is built entirely on [[USD Hydra Renderer]] and OpenUSD as its scene-interchange and collaboration protocol. It enables multi-user, real-time collaborative editing and physics simulation for [[Digital Twin]] applications in manufacturing, logistics, robotics, and [[Autonomous Vehicle Simulation]].
  - **Apple Ecosystem**
    - Apple mandates [[USDZ Package Format]] for AR Quick Look on iOS, macOS, and [[Apple visionOS]]. [[RealityKit]] uses USD as its scene format, making OpenUSD the principal [[Augmented Reality Content]] delivery format across Apple platforms.
  - **Industrial Digital Twins**
    - Siemens Teamcenter, Bentley Systems, and PTC Creo have added USD export to bridge CAD workflows to real-time [[Digital Twin]] environments. USD's variant mechanism enables configuration management directly within the scene graph.
  - **Autonomous Vehicles**
    - Waymo, Zoox, and other AV developers use USD to represent large-scale sensor simulation environments and annotated datasets, taking advantage of payload-based deferred loading and schema-extensibility for sensor metadata.

- ### Relationships
  - hasPart:: [[USD Composition Arcs]]
  - hasPart:: [[USD Schema Plugin]]
  - hasPart:: [[USDZ Package Format]]
  - hasPart:: [[USD Hydra Renderer]]
  - enables:: [[3D Content Pipeline]]
  - enables:: [[Digital Twin]]
  - enables:: [[Collaborative 3D Editing]]
  - enables:: [[Augmented Reality Content]]
  - enables:: [[Physics Simulation]]
  - requires:: [[Scene Graph]]
  - requires:: [[Hierarchical Data Model]]
  - uses:: [[MaterialX]]
  - uses:: [[MDL Material Definition Language]]
  - uses:: [[Skeletal Animation]]
  - supports:: [[Non-Destructive Workflow]]
  - supports:: [[Level of Detail]]
  - supports:: [[Procedural Geometry]]
  - standardizedBy:: [[Alliance for OpenUSD]]
  - standardizedBy:: [[ISO/IEC 22886]]
  - contrastsWith:: [[glTF Standard]]
  - contrastsWith:: [[FBX Format]]
  - contrastsWith:: [[COLLADA Format]]
  - relatedTo:: [[3D Asset]]
  - relatedTo:: [[Rendering Pipeline]]
  - relatedTo:: [[NVIDIA Omniverse]]
  - relatedTo:: [[RealityKit]]
  - bridges-to:: [[Autonomous Vehicle Simulation]]
  - bridges-to:: [[Industrial Metaverse]]

- ### Standards and Context
  - **Alliance for OpenUSD (AOUSD)**: The governance body formed in 2023 by Pixar, Apple, Autodesk, NVIDIA, and Adobe. It maintains the specification, conformance test suite, and reference implementation at `openusd.org`.
  - **ISO/IEC 22886**: The international standardisation track for USD as a universal 3D scene exchange format, developed under JTC 1/SC 24 (Computer Graphics, Image Processing).
  - **Relationship to glTF**: [[glTF Standard]] (Khronos Group) optimises for compact, runtime-ready delivery of individual assets; OpenUSD optimises for composable, production-pipeline scene description. They are complementary: glTF handles the "last mile" delivery; USD handles the production master. The AOUSD and Khronos have published interoperability guidance.
  - **Relationship to MaterialX**: [[MaterialX]] (Academy Software Foundation) is the preferred material and shader definition language within the USD ecosystem for cross-renderer portability, replacing vendor-specific MDL in many pipelines.
  - **VFX Reference Platform**: The annual [[VFX Reference Platform]] specifies USD versions alongside Python, OpenEXR, and other DCC dependencies to ensure binary compatibility across Linux-based VFX studios.

- ### Provenance
  - sources:: openusd.org; AOUSD specification; Pixar USD documentation; NVIDIA Omniverse developer docs; Apple developer documentation (RealityKit/USDZ)
  - updated:: 2026-06-13
