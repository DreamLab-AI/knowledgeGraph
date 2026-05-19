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
  "definition": "Graphics Library Transmission Format (glTF) is a royalty-free, open interoperable 3D asset format developed by Khronos Group, designed for efficient runtime transmission and loading of 3D scenes across native and web-based engines, serving as a foundational standard for metaverse asset interopera...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:3-d-asset-standard",
      "label": "3D Asset Standard"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-3-d-content",
        "label": "Cross-Platform 3D Content"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
