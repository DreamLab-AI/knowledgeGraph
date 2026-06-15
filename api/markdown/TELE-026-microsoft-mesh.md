public:: true

# TELE-026-microsoft-mesh
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6952023c097f4b2a27a74b0b3e62744d740822e86480e2bfbab94d326400fd58",
  "@type": "Page",
  "vc:slug": "tele-026-microsoft-mesh",
  "title": "TELE-026-microsoft-mesh",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:linked:spatial-anchors",
      "vc:label": "Spatial Anchors"
    },
    {
      "@id": "urn:visionflow:linked:remote-collaboration",
      "vc:label": "Remote Collaboration"
    },
    {
      "@id": "urn:visionflow:linked:mixed-reality",
      "vc:label": "Mixed Reality"
    },
    {
      "@id": "urn:visionflow:linked:telepresence",
      "vc:label": "Telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-026-microsoft-mesh"
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
  "@id": "urn:ngm:class:tele-026-microsoft-mesh",
  "@type": "Class",
  "label": "TELE-026-microsoft-mesh",
  "definition": "Microsoft Mesh is a platform for shared mixed reality experiences that lets people in different physical locations join a common virtual space using avatars or holographic representations, integrating with Microsoft Teams to deliver immersive collaboration scenarios such as design review, training and distributed meetings.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      },
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      },
      {
        "@id": "urn:ngm:class:holographic-rendering",
        "label": "Holographic Rendering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:microsoft-teams",
        "label": "Microsoft Teams"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      },
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      },
      {
        "@id": "urn:ngm:class:azure",
        "label": "Azure Cloud"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:azure",
        "label": "Azure Cloud"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:real-time-synchronisation",
        "label": "Real-Time Synchronisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:shared-virtual-space",
        "label": "Shared Virtual Environment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Azure Spatial Anchors"
      },
      {
        "@id": "urn:ngm:class:holographic-rendering",
        "label": "Holographic Rendering"
      },
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:tele-025-microsoft-hololens",
        "label": "HoloLens"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mesh-for-microsoft-teams",
      "label": "Mesh for Microsoft Teams"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-026-microsoft-mesh:053ee505596f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6952023c097f4b2a27a74b0b3e62744d740822e86480e2bfbab94d326400fd58"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Anchors]]",
      "resolved": "urn:visionflow:linked:spatial-anchors",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Remote Collaboration]]",
      "resolved": "urn:visionflow:linked:remote-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality]]",
      "resolved": "urn:visionflow:linked:mixed-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:linked:telepresence",
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
  - Microsoft Mesh is a platform for shared mixed reality experiences that lets people in different physical locations join a common virtual space using avatars or holographic representations.

- ### Semantic Classification
  - owl-class:: metaverse:TELE026microsoftmesh
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Mixed Reality]]
  - requires:: [[Avatar System]], [[Spatial Anchors]]
  - enables:: [[Remote Collaboration]]

- ### Content
  - Microsoft Mesh is a Microsoft platform for shared mixed reality, allowing geographically separated participants to occupy a single virtual space through avatars and to interact with shared 3D content. It integrates with Microsoft Teams to add immersive meeting spaces alongside conventional video calls.
  - The platform builds on spatial anchoring, avatar representation and cloud-hosted scene state so that the same virtual environment is presented consistently to each participant. It is intended for collaboration scenarios such as design review, training and distributed meetings rather than general consumer social use.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
