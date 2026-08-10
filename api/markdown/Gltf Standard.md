public:: true

# Gltf Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:846c88a8c22ae4a3e9bca2678364be22268b9a2ef5f6c80d43ea0b424ab025b2",
  "@type": "Page",
  "vc:slug": "gltf-standard",
  "title": "Gltf Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-asset-standard",
      "vc:label": "3D Asset Standard"
    },
    {
      "@id": "urn:visionflow:linked:cross-platform-3-d-content",
      "vc:label": "Cross-Platform 3D Content"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9908"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gltf Standard"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gltf-standard",
  "@type": "Class",
  "label": "Gltf Standard",
  "definition": "Graphics Library Transmission Format (glTF) is a royalty-free, open interoperable 3D asset format developed by Khronos Group, designed for efficient runtime transmission and loading of 3D scenes across native and web-based engines, serving as a foundational standard for metaverse asset interoperability. Standardised as ISO/IEC 12113:2022, glTF 2.0 supports geometry, PBR materials, skeletal animation, morph targets, and a modular extension system enabling progressive capability extension.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:sc-standards-and-interop",
    "label": "Standards and Interoperability"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:pbr-materials",
        "label": "PBR Materials"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse-standards-forum",
        "label": "Metaverse Standards Forum"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-serialisation",
        "label": "JSON Serialisation"
      },
      {
        "@id": "urn:ngm:class:web-gl",
        "label": "WebGL"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-content",
        "label": "Cross-Platform 3D Content"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time 3D Rendering"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:open-standard",
        "label": "Open Standard"
      },
      {
        "@id": "urn:ngm:class:royalty-free-licensing",
        "label": "Royalty-Free Licensing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:3-d-asset-standard",
        "label": "3D Asset Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:avatar-standard",
        "label": "Avatar Standard"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:iso-iec",
        "label": "ISO/IEC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:universal-scene-description",
        "label": "USD Universal Scene Description"
      },
      {
        "@id": "urn:ngm:class:fbx",
        "label": "FBX Format"
      },
      {
        "@id": "urn:ngm:class:obj-format",
        "label": "OBJ Format"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:3-d-asset-standard",
        "label": "3D Asset Standard"
      },
      {
        "@id": "urn:ngm:class:neural-radiance-fields",
        "label": "Neural Radiance Fields"
      },
      {
        "@id": "urn:ngm:class:gaussian-splatting",
        "label": "Gaussian Splatting"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:vrm-format",
        "label": "VRM Avatar Format"
      },
      {
        "@id": "urn:ngm:class:e-commerce-3-d",
        "label": "E-Commerce 3D"
      },
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gltf-2-0",
      "label": "glTF 2.0"
    },
    {
      "@id": "urn:ngm:class:graphics-library-transmission-format",
      "label": "Graphics Library Transmission Format"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gltf-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:846c88a8c22ae4a3e9bca2678364be22268b9a2ef5f6c80d43ea0b424ab025b2"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Asset Standard]]",
      "resolved": "urn:visionflow:linked:3-d-asset-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Platform 3D Content]]",
      "resolved": "urn:visionflow:linked:cross-platform-3-d-content",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Graphics Library Transmission Format (glTF) is a royalty-free, open interoperable 3D asset format developed by Khronos Group, designed for efficient runtime transmission and loading of 3D scenes across native and web-based engines, serving as a foundational standard for metaverse asset interoperability.

- ### Semantic Classification
  - owl-class:: spatial-computing:GltfStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D Asset Standard]]
  - enables:: [[Cross-Platform 3D Content]]

- ### Content

  ## Technical Overview

  ### Format Characteristics
  - JSON-based structure with binary geometry data
  - Vendor and runtime neutral specification
  - Optimised for web and real-time applications
  - Compact and efficient runtime processing

  ### ISO Standardisation
  - ISO/IEC 12113:2022 International Standard (July 2022)
  - Regular updates to maintain alignment
  - Khronos maintains reference specification
  - Open standard available for any use

  ## 2024 Developments

  ### New Extensions
  - KHR_interactivity: Interactive behaviours (June 2024)
  - KHR_materials_dispersion: Light dispersion (April 2024)
  - Physics metadata standardisation (2024-2025)
  - Audio metadata extensions planned

  ### VRM Collaboration
  - VRM Consortium partnership (October 2024)
  - Platform-independent avatar standard
  - Based on glTF 2.0 foundation
  - Metaverse avatar interoperability

  ## Metaverse Standards Forum

  ### Working Group Activities
  - glTF/USD 3D Asset Interoperability Working Group
  - Alignment between glTF and USD ecosystems
  - Shared requirements and roadmaps
  - Cross-industry collaboration

  ### Emerging Technologies
  - Neural Radiance Fields (NeRFs) exploration
  - Gaussian Splats investigation
  - New 3D representation formats
  - Real-time rendering optimisation

  ## Technical Capabilities

  ### Supported Features
  - Geometry and mesh data
  - PBR (Physically Based Rendering) materials
  - Skeletal animation
  - Morph targets and blend shapes

  ### Extensions System
  - Modular extension architecture
  - Vendor-specific extensions
  - Ratified Khronos extensions
  - Backward compatibility

  ## Applications

  ### Platform Support
  - Web browsers (WebGL, WebGPU)
  - Game engines (Unity, Unreal)
  - Native applications
  - AR/VR headsets

  ### Use Cases
  - Metaverse asset exchange
  - E-commerce 3D products
  - Digital twins
  - Interactive experiences

- ### Current Landscape (2026)
  - In June 2026 the Khronos 3D Formats Working Group announced glTF 2.1, a focused backward-compatible revision of the core specification aimed at large composed scenes rather than single assets, adding external asset referencing/instantiation, multi-file packaging, shapes and bounding-volume hierarchies, unified file references, embedded thumbnails, 64-bit GLB (lifting the 4 GiB ceiling for geospatial and high-fidelity data) and stable cross-file unique IDs.
  - glTF 2.1 promotes four previously optional ratified extensions to required core functionality: EXT_texture_webp, KHR_materials_emissive_strength, KHR_mesh_quantization and KHR_node_visibility, with the specification being drafted openly on GitHub.
  - KHR_interactivity, which encodes portable self-contained behaviour graphs directly inside a glTF asset, was submitted for ratification in mid-July 2026 after a public-comment draft; it distils established engine practice (Unity Visual Scripting, Unreal Blueprints, NVIDIA Omniverse Action Graph) into a safe node-based graph, and relies on companion extensions such as KHR_animation_pointer, KHR_node_hoverability and KHR_node_selectability.
  - Early KHR_interactivity support already spans Babylon.js, Needle's UnityGLTF exporter, Google's Android XR via the Jetpack XR SDK, Magic Leap, Amazon (prototype authoring tool) and UX3D's glTF Sample Viewer, signalling cross-engine buy-in ahead of ratification.
  - Beyond interactivity, active working-group tracks in 2025-2026 cover a physics extension built on the NVIDIA/Apple/Pixar rigid-body schema, avatar extensions (drawing on VRM, with Meta contributing), 3D Gaussian Splatting capture and compression (led in part by Huawei), subsurface/diffuse-transmission PBR, MaterialX node graphs feeding glTF PBR, and the glX composition schema.
  - glTF's standards footprint continues to widen: the core format is ISO/IEC 12113:2022, it is embedded in ISO X3Dv4 (ISO 19775-1:2023) and MPEG-I scene description (ISO 23090-14:2023), and ISO/TS 32007 defines glTF-in-PDF, positioning it as the foundational interchange layer alongside USD.
  - Open challenges as of 2026 include finalising a portable yet secure interactivity runtime across divergent engines, standardising Gaussian-splat compression, converging glTF and OpenUSD workflows without fragmentation, and managing the proliferation of market-specific vendor extensions while keeping the core lean.

- ### References
  - 1. Khronos Group (2026). glTF Interactivity Extension Submitted for Ratification. https://gamesbeat.com/gltf-web-graphics-standard-files-for-gets-interactivity-extension/
  - 2. Amanda K. Morgan / Khronos Group (2026). glTF 2.1 Development Update with Khronos Working Group. https://www.linkedin.com/posts/amanda-k-morgan_3dtiles-activity-7470874291895459841-7vCK
  - 3. Khronos Group (2024). glTF Interactivity Specification Released for Public Comment. https://www.khronos.org/blog/gltf-interactivity-specification-released-for-public-comment
  - 4. Metaverse Standards Forum (2025). State of 3D Asset Interoperability using USD and glTF (SIGGRAPH BOF). https://metaverse-standards.org/wp-content/uploads/glTF-USD-BOF-SIGGRAPH-Vancouver-Aug25-FINAL.pdf
  - 5. Khronos Group (2026). SIGGRAPH 2026 - glTF 2.1 and Beyond. https://www.youtube.com/watch?v=ibaYELTnFWM

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
