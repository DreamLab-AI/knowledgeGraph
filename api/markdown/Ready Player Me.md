public:: true

# Ready Player Me
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c380ca49d001b6b2a8b0e751e53a3139a077813123c2cd062293a52c2377d19",
  "@type": "Page",
  "vc:slug": "ready-player-me",
  "title": "Ready Player Me",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar",
      "vc:label": "Avatar"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ready Player Me"
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
  "@id": "urn:ngm:class:ready-player-me",
  "@type": "Class",
  "label": "Ready Player Me",
  "definition": "Ready Player Me is a platform for creating cross-application 3D avatars that can be used across games and virtual environments.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:avatar",
      "label": "Avatar"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ready-player-me:59cd1f0c108c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c380ca49d001b6b2a8b0e751e53a3139a077813123c2cd062293a52c2377d19"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar]]",
      "resolved": "urn:visionflow:linked:avatar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
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
  - Ready Player Me is a platform for creating cross-application 3D avatars that can be used across games and virtual environments.

- ### Semantic Classification
  - owl-class:: metaverse:ReadyPlayerMe
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Avatar]]
  - bridges-to:: [[Digital Identity]]
  - requires:: [[Avatar]]
  - enables:: [[Metaverse]]

- ### Content
  - Ready Player Me provides tools for generating personalised 3D avatars that developers can integrate into applications and virtual worlds.
  - The avatars are designed to be portable across multiple compatible games and metaverse platforms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
