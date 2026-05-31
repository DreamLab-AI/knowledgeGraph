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
  "definition": "Microsoft Mesh is a platform for shared mixed reality experiences that lets people in different physical locations join a common virtual space using avatars or holographic representations.",
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
    "requires": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      },
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
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
