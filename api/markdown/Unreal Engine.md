public:: true

# Unreal Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eded4bf26967be95e460085f0b8f5201477f636a8ba9030889b2bd56d95f2d96",
  "@type": "Page",
  "vc:slug": "unreal-engine",
  "title": "Unreal Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nanite",
      "vc:label": "Nanite"
    },
    {
      "@id": "urn:visionflow:linked:lumen",
      "vc:label": "Lumen"
    },
    {
      "@id": "urn:visionflow:linked:gpu-rendering",
      "vc:label": "GPU Rendering"
    },
    {
      "@id": "urn:visionflow:linked:virtual-production",
      "vc:label": "Virtual Production"
    },
    {
      "@id": "urn:visionflow:linked:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-domain",
      "vc:label": "Metaverse Domain"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-domain",
      "vc:label": "Computer Vision Domain"
    },
    {
      "@id": "urn:visionflow:linked:3-d-reconstruction",
      "vc:label": "3D Reconstruction"
    },
    {
      "@id": "urn:visionflow:linked:creative-media-domain",
      "vc:label": "Creative Media Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Unreal Engine"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unreal-engine",
  "@type": "Class",
  "label": "Unreal Engine",
  "definition": "Unreal Engine is a real-time three-dimensional creation tool and game engine developed by Epic Games. It provides rendering, physics, animation, audio and scripting systems used to build games, virtual production environments, architectural visualisations and simulations. The engine is widely adopted for its high-fidelity rendering, its visual scripting system Blueprints, and its use in film and television virtual production with LED volume stages.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:creative-media-domain",
      "label": "Creative Media Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:nanite",
        "label": "Nanite"
      },
      {
        "@id": "urn:ngm:class:lumen",
        "label": "Lumen"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-rendering",
        "label": "GPU Rendering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-production",
        "label": "Virtual Production"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:metaverse-domain",
        "label": "Metaverse Domain"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:unreal-engine:75dd5240e4ff",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eded4bf26967be95e460085f0b8f5201477f636a8ba9030889b2bd56d95f2d96"
  },
  "vc:resolutions": [
    {
      "raw": "[[Nanite]]",
      "resolved": "urn:visionflow:linked:nanite",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lumen]]",
      "resolved": "urn:visionflow:linked:lumen",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPU Rendering]]",
      "resolved": "urn:visionflow:linked:gpu-rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Production]]",
      "resolved": "urn:visionflow:linked:virtual-production",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:linked:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Domain]]",
      "resolved": "urn:visionflow:linked:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision Domain]]",
      "resolved": "urn:visionflow:linked:computer-vision-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Reconstruction]]",
      "resolved": "urn:visionflow:linked:3-d-reconstruction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creative Media Domain]]",
      "resolved": "urn:visionflow:linked:creative-media-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Unreal Engine is a real-time three-dimensional creation tool and game engine developed by Epic Games. It provides rendering, physics, animation, audio and scripting systems used to build games, virtual production environments, architectural visualisations and simulations. The engine is widely adopted for its high-fidelity rendering, its visual scripting system Blueprints, and its use in film and television virtual production with LED volume stages.

- ### Semantic Classification
  - owl-class:: media:UnrealEngine
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Creative Media Domain]]
  - bridges-to:: [[Computer Vision Domain]], [[3D Reconstruction]]
  - has-part:: [[Nanite]], [[Lumen]]
  - requires:: [[GPU Rendering]]
  - enables:: [[Virtual Production]], [[Digital Twin]], [[Metaverse Domain]]

- ### Content
  - Unreal Engine combines a real-time renderer with editors for level design, materials, animation and particle effects, and supports both C++ programming and the node-based Blueprints visual scripting system. This dual approach lets engineers and non-programmers collaborate on interactive content within a single toolset.
  - Recent generations introduced Nanite, a virtualised geometry system that streams highly detailed meshes, and Lumen, a dynamic global illumination and reflections solution. Together these reduce the manual work of baking lighting and authoring levels of detail, allowing cinematic-quality scenes to run interactively.
  - Beyond games, the engine has become a standard in virtual production, where camera tracking drives real-time backgrounds projected onto LED walls. It is also used for digital twins, training simulations and metaverse experiences, positioning it as a general-purpose platform for interactive three-dimensional media.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
