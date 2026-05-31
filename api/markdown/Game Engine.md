public:: true
alias:: GameEngine

# Game Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a207f69c3bdc74fc1b861656b9b4b422aed55f788385c38d735e51d8e8a7acb",
  "@type": "Page",
  "vc:slug": "game-engine",
  "title": "Game Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-engine",
      "vc:label": "3D Engine"
    },
    {
      "@id": "urn:visionflow:linked:asset-management-system",
      "vc:label": "Asset Management System"
    },
    {
      "@id": "urn:visionflow:linked:audio-engine",
      "vc:label": "Audio Engine"
    },
    {
      "@id": "urn:visionflow:linked:development-infrastructure",
      "vc:label": "Development Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:graphics-driver",
      "vc:label": "Graphics Driver"
    },
    {
      "@id": "urn:visionflow:linked:interactive-experience",
      "vc:label": "Interactive Experience"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-101",
      "vc:label": "Metaverse 101"
    },
    {
      "@id": "urn:visionflow:linked:multiplayer-gameplay",
      "vc:label": "Multiplayer Gameplay"
    },
    {
      "@id": "urn:visionflow:linked:oma3-media-wg",
      "vc:label": "OMA3 Media WG"
    },
    {
      "@id": "urn:visionflow:linked:scripting-runtime",
      "vc:label": "Scripting Runtime"
    },
    {
      "@id": "urn:visionflow:linked:siggraph-pipeline-wg",
      "vc:label": "SIGGRAPH Pipeline WG"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-infrastructure",
      "vc:label": "Compute Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:creative-media-domain",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:owl:class:hardware-acceleration",
      "vc:label": "Hardware Acceleration"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:operating-system",
      "vc:label": "Operating System"
    },
    {
      "@id": "urn:visionflow:owl:class:physics-engine",
      "vc:label": "Physics Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:platform-layer",
      "vc:label": "PlatformLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:procedural-content-generation",
      "vc:label": "Procedural Content Generation"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-rendering-pipeline",
      "vc:label": "Real-Time Rendering Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-pipeline",
      "vc:label": "Rendering Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:scene-graph",
      "vc:label": "Scene Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:software-platform",
      "vc:label": "Software Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world-creation",
      "vc:label": "Virtual World Creation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20129"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Game Engine"
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
  "@id": "urn:ngm:class:game-engine",
  "@type": "Class",
  "label": "Game Engine",
  "definition": "Software framework providing core functionality for rendering, physics, and interaction in real-time 3D environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:software-platform",
      "label": "Software Platform"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:asset-management-system",
        "label": "Asset Management System"
      },
      {
        "@id": "urn:ngm:class:audio-engine",
        "label": "Audio Engine"
      },
      {
        "@id": "urn:ngm:class:scripting-runtime",
        "label": "Scripting Runtime"
      },
      {
        "@id": "urn:ngm:class:physics-engine",
        "label": "Physics Engine"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering-pipeline",
        "label": "Real-Time Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interactive-experience",
        "label": "Interactive Experience"
      },
      {
        "@id": "urn:ngm:class:multiplayer-gameplay",
        "label": "Multiplayer Gameplay"
      },
      {
        "@id": "urn:ngm:class:procedural-content-generation",
        "label": "Procedural Content Generation"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:virtual-world-creation",
        "label": "Virtual World Creation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:development-infrastructure",
        "label": "Development Infrastructure"
      },
      {
        "@id": "urn:ngm:class:software-platform",
        "label": "Software Platform"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:game-engine:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2a207f69c3bdc74fc1b861656b9b4b422aed55f788385c38d735e51d8e8a7acb"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Engine]]",
      "resolved": "urn:visionflow:linked:3-d-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Management System]]",
      "resolved": "urn:visionflow:linked:asset-management-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audio Engine]]",
      "resolved": "urn:visionflow:linked:audio-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Development Infrastructure]]",
      "resolved": "urn:visionflow:linked:development-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Driver]]",
      "resolved": "urn:visionflow:linked:graphics-driver",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interactive Experience]]",
      "resolved": "urn:visionflow:linked:interactive-experience",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse 101]]",
      "resolved": "urn:visionflow:linked:metaverse-101",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multiplayer Gameplay]]",
      "resolved": "urn:visionflow:linked:multiplayer-gameplay",
      "kind": "StubLink"
    },
    {
      "raw": "[[OMA3 Media WG]]",
      "resolved": "urn:visionflow:linked:oma3-media-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scripting Runtime]]",
      "resolved": "urn:visionflow:linked:scripting-runtime",
      "kind": "StubLink"
    },
    {
      "raw": "[[SIGGRAPH Pipeline WG]]",
      "resolved": "urn:visionflow:linked:siggraph-pipeline-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:compute-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:owl:class:graphics-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware Acceleration]]",
      "resolved": "urn:visionflow:owl:class:hardware-acceleration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Operating System]]",
      "resolved": "urn:visionflow:owl:class:operating-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physics Engine]]",
      "resolved": "urn:visionflow:owl:class:physics-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PlatformLayer]]",
      "resolved": "urn:visionflow:owl:class:platform-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Procedural Content Generation]]",
      "resolved": "urn:visionflow:owl:class:procedural-content-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:owl:class:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering Pipeline]]",
      "resolved": "urn:visionflow:owl:class:real-time-rendering-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rendering Pipeline]]",
      "resolved": "urn:visionflow:owl:class:rendering-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scene Graph]]",
      "resolved": "urn:visionflow:owl:class:scene-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Platform]]",
      "resolved": "urn:visionflow:owl:class:software-platform",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World Creation]]",
      "resolved": "urn:visionflow:owl:class:virtual-world-creation",
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
  - Software framework providing core functionality for rendering, physics, and interaction in real-time 3D environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:GameEngine
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[CreativeMediaDomain]]
  - implemented-in-layer:: [[PlatformLayer]]

- ### Relationships
  - has-part:: [[Rendering Pipeline]], [[Physics Engine]], [[Scene Graph]], [[Audio Engine]], [[Scripting Runtime]], [[Asset Management System]], [[Real-Time Rendering Pipeline]]
  - is-part-of:: [[Software Platform]], [[Development Infrastructure]]
  - requires:: [[Graphics API]], [[Compute Infrastructure]], [[Operating System]]
  - enables:: [[Real-Time Rendering]], [[Interactive Experience]], [[Procedural Content Generation]], [[Multiplayer Gameplay]], [[Virtual World Creation]]
  - depends-on:: [[3D Engine]], [[Graphics Driver]], [[Hardware Acceleration]]

- ### Content
  Game Engine — content pending enrichment.

- ### Provenance
  - sources:: [[Metaverse 101]], [[SIGGRAPH Pipeline WG]], [[OMA3 Media WG]]
  - migration-date:: 2026-04-26T00:00:00Z
