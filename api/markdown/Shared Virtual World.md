public:: true

# Shared Virtual World
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e1dd77201f50b3cf46140cc1dc4454c0a9c207b9b2200649a09cdf3f1cff1c77",
  "@type": "Page",
  "vc:slug": "shared-virtual-world",
  "title": "Shared Virtual World",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-social-presence",
      "vc:label": "Digital Social Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-environment",
      "vc:label": "Virtual Environment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10044"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Virtual World"
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
  "@id": "urn:ngm:class:shared-virtual-world",
  "@type": "Class",
  "label": "Shared Virtual World",
  "definition": "A persistent, synchronous three-dimensional digital environment where unlimited users interact simultaneously through avatars, featuring continuous data persistence for identity, assets, and social relationships across sessions while supporting real-time rendering and cross-platform access.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:virtual-environment",
      "label": "Virtual Environment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:social-presence",
        "label": "Digital Social Presence"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:shared-virtual-world:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e1dd77201f50b3cf46140cc1dc4454c0a9c207b9b2200649a09cdf3f1cff1c77"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Social Presence]]",
      "resolved": "urn:visionflow:linked:digital-social-presence",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Environment]]",
      "resolved": "urn:visionflow:owl:class:virtual-environment",
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
  - A persistent, synchronous three-dimensional digital environment where unlimited users interact simultaneously through avatars, featuring continuous data persistence for identity, assets, and social relationships across sessions while supporting real-time rendering and cross-platform access.

- ### Semantic Classification
  - owl-class:: spatial-computing:SharedVirtualWorld
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Virtual Environment]]
  - enables:: [[Digital Social Presence]]

- ### Content

  #### Key Characteristics
		- Persistence across user sessions
		- Synchronous multi-user interaction
		- Individual sense of presence
		- Continuity of digital identity
		- Interoperable asset systems
  - #### Leading Platforms
		- Decentraland (blockchain-based)
		- The Sandbox (GameFi focused)
		- Second Life (social metaverse)
		- VRChat (social VR platform)
		- Somnium Space (VR world)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
