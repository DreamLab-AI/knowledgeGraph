public:: true

# AltspaceVR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdc8633b1e3e328ccb14a674a3d53f12cc14c317bb1b9eec2b9e11c94f56403c",
  "@type": "Page",
  "vc:slug": "altspace-vr",
  "title": "AltspaceVR",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:linked:virtual-world",
      "vc:label": "Virtual World"
    },
    {
      "@id": "urn:visionflow:linked:virtual-reality",
      "vc:label": "Virtual Reality"
    },
    {
      "@id": "urn:visionflow:linked:microsoft-mesh",
      "vc:label": "Microsoft Mesh"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-domain",
      "vc:label": "Metaverse Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AltspaceVR"
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
  "@id": "urn:ngm:class:altspace-vr",
  "@type": "Class",
  "label": "AltspaceVR",
  "definition": "AltspaceVR was a social virtual reality platform offering avatar-based gatherings, events and shared spaces, later acquired by Microsoft and eventually shut down.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse-domain",
      "label": "Metaverse Domain"
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
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
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
  "@id": "urn:visionflow:annotation:link-resolutions:altspace-vr:904cf3053391",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cdc8633b1e3e328ccb14a674a3d53f12cc14c317bb1b9eec2b9e11c94f56403c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:linked:virtual-world",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Reality]]",
      "resolved": "urn:visionflow:linked:virtual-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microsoft Mesh]]",
      "resolved": "urn:visionflow:linked:microsoft-mesh",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Domain]]",
      "resolved": "urn:visionflow:linked:metaverse-domain",
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
  - AltspaceVR was a social virtual reality platform offering avatar-based gatherings, events and shared spaces, later acquired by Microsoft and eventually shut down.

- ### Semantic Classification
  - owl-class:: metaverse:AltspaceVR
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Domain]]
  - bridges-to:: [[Virtual Reality]], [[Microsoft Mesh]]
  - requires:: [[Avatar System]]
  - enables:: [[Virtual World]]

- ### Content
  - AltspaceVR let users attend live events, meetups and shows as avatars in shared rooms accessible from headsets and desktops. It was an early example of persistent social VR with hosted events.
  - After acquisition by Microsoft its concepts informed later enterprise collaboration work, and the service was retired as focus shifted to Microsoft Mesh. It represents an earlier generation of social virtual worlds.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
