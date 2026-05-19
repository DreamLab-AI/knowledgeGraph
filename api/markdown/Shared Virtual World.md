schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SharedVirtualWorld
legacy_uri:: urn:visionclaw:concept:spatial-computing:shared-virtual-world
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-9ff82fdbf273"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SharedVirtualWorld"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10044"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Virtual World"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:shared-virtual-world"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:shared-virtual-world"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e1dd77201f50b3cf46140cc1dc4454c0a9c207b9b2200649a09cdf3f1cff1c77@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
      "@id": "urn:ngm:class:virtual-environment",
      "label": "Virtual Environment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:digital-social-presence",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e1dd77201f50b3cf46140cc1dc4454c0a9c207b9b2200649a09cdf3f1cff1c77@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
