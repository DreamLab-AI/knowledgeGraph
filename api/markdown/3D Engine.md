public:: true

# 3D Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7020754142b489fd593975b4b32172b02ab5d31db07ff3c44a027ba779a1eff2",
  "@type": "Page",
  "vc:slug": "3-d-engine",
  "title": "3D Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computational-geometry",
      "vc:label": "Computational Geometry"
    },
    {
      "@id": "urn:visionflow:linked:3-d-engine",
      "vc:label": "3D Engine"
    },
    {
      "@id": "urn:visionflow:linked:physics-simulation-engine",
      "vc:label": "Physics Simulation Engine"
    },
    {
      "@id": "urn:visionflow:linked:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-game-engine",
      "vc:label": "https://en.wikipedia.org/wiki/Game_engine"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-unity-3-d-com-manual-index-html",
      "vc:label": "https://docs.unity3d.com/Manual/index.html"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "3D Engine"
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
  "@id": "urn:ngm:class:3-d-engine",
  "@type": "Class",
  "label": "3D Engine",
  "definition": "A 3D engine is software that handles the representation, rendering, and often the physics and animation of three-dimensional scenes. It forms the core of many games and simulations.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:game-engine",
      "label": "Game Engine"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:computational-geometry",
        "label": "Computational Geometry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-engine",
        "label": "3D Engine"
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
  "@id": "urn:visionflow:annotation:link-resolutions:3-d-engine:1492a742b231",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7020754142b489fd593975b4b32172b02ab5d31db07ff3c44a027ba779a1eff2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computational Geometry]]",
      "resolved": "urn:visionflow:linked:computational-geometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Engine]]",
      "resolved": "urn:visionflow:linked:3-d-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Physics Simulation Engine]]",
      "resolved": "urn:visionflow:linked:physics-simulation-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:linked:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Game_engine]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-game-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.unity3d.com/Manual/index.html]]",
      "resolved": "urn:visionflow:linked:https-docs-unity-3-d-com-manual-index-html",
      "kind": "StubLink"
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
  - A 3D engine is software that handles the representation, rendering, and often the physics and animation of three-dimensional scenes. It forms the core of many games and simulations.

- ### Semantic Classification
  - owl-class:: general:3DEngine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Game Engine]]
  - bridges-to:: [[Physics Simulation Engine]]
  - requires:: [[Computational Geometry]]
  - enables:: [[3D Engine]]

- ### Content
  - A 3D engine manages geometry, materials, lighting, and cameras to produce images of a virtual scene. It typically drives the graphics processor through a rendering pipeline and may include subsystems for physics, animation, and audio.
  - These engines provide tools and abstractions so that developers can build interactive applications without writing low-level graphics code for each platform. They are used in games, simulations, and visualisation.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Game_engine]], [[https://docs.unity3d.com/Manual/index.html]]
  - migration-date:: 2026-05-29T00:00:00Z
