public:: true

# Microsoft Mesh
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4520e6ec246dd5f227bf105672cd1ea5801aa17bd7efb4a661e48077d3a9c287",
  "@type": "Page",
  "vc:slug": "microsoft-mesh",
  "title": "Microsoft Mesh",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:linked:mixed-reality",
      "vc:label": "Mixed Reality"
    },
    {
      "@id": "urn:visionflow:linked:virtual-world",
      "vc:label": "Virtual World"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Microsoft Mesh"
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
  "@id": "urn:ngm:class:microsoft-mesh",
  "@type": "Class",
  "label": "Microsoft Mesh",
  "definition": "Microsoft Mesh is a platform for shared mixed-reality experiences that lets distributed participants meet as avatars in persistent 3D spaces across headsets and conventional devices.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
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
  "@id": "urn:visionflow:annotation:link-resolutions:microsoft-mesh:c5b132596e4b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4520e6ec246dd5f227bf105672cd1ea5801aa17bd7efb4a661e48077d3a9c287"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality]]",
      "resolved": "urn:visionflow:linked:mixed-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:linked:virtual-world",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Domain]]",
      "resolved": "urn:visionflow:linked:metaverse",
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
  - Microsoft Mesh is a platform for shared mixed-reality experiences that lets distributed participants meet as avatars in persistent 3D spaces across headsets and conventional devices.

- ### Semantic Classification
  - owl-class:: metaverse:MicrosoftMesh
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Domain]]
  - bridges-to:: [[Virtual World]], [[Spatial Computing Paradigm]]
  - requires:: [[Avatar System]]
  - enables:: [[Mixed Reality]]

- ### Content
  - Microsoft Mesh provides avatar-based presence, shared spatial content and collaboration features integrated with Microsoft's productivity tools, accessible from headsets and standard screens. It targets enterprise meetings and events rather than open social worlds.
  - Mesh succeeded earlier social VR efforts at Microsoft and reuses avatar and spatial concepts common to shared virtual worlds. It connects avatar systems to mixed-reality collaboration.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
