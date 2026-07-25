public:: true

# MetaversePlatforms
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0eb7bdeecf305b4e90a972883aa71d8bb5fc5c44e687da3dfa7785d35b7a7e34",
  "@type": "Page",
  "vc:slug": "metaverse-platforms",
  "title": "MetaversePlatforms",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:virtual-world",
      "vc:label": "Virtual World"
    },
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:linked:microsoft-mesh",
      "vc:label": "Microsoft Mesh"
    },
    {
      "@id": "urn:visionflow:linked:altspace-vr",
      "vc:label": "AltspaceVR"
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
      "vc:value": "MetaversePlatforms"
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
  "@id": "urn:ngm:class:metaverse-platforms",
  "@type": "Class",
  "label": "MetaversePlatforms",
  "definition": "MetaversePlatforms denotes the category of systems that host persistent, shared 3D virtual worlds with avatars, user interaction and often user-generated content and economies.",
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
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:metaverse-platforms:7f9e3116d3d6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0eb7bdeecf305b4e90a972883aa71d8bb5fc5c44e687da3dfa7785d35b7a7e34"
  },
  "vc:resolutions": [
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:linked:virtual-world",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microsoft Mesh]]",
      "resolved": "urn:visionflow:linked:microsoft-mesh",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AltspaceVR]]",
      "resolved": "urn:visionflow:linked:altspace-vr",
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
  - MetaversePlatforms denotes the category of systems that host persistent, shared 3D virtual worlds with avatars, user interaction and often user-generated content and economies.

- ### Semantic Classification
  - owl-class:: metaverse:MetaversePlatforms
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Domain]]
  - bridges-to:: [[Microsoft Mesh]], [[AltspaceVR]]
  - requires:: [[Virtual World]]
  - enables:: [[Avatar System]]

- ### Content
  - Metaverse platforms provide the servers, networking, avatar systems and content tooling that let many users share a persistent 3D space. They differ in openness, target audience and whether they emphasise social, enterprise or creative use.
  - Examples span enterprise collaboration spaces and consumer social worlds, built on common ingredients of avatars and shared state. The category connects virtual worlds to specific platform implementations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
