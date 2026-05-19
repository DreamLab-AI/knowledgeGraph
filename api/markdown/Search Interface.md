schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SearchInterface
legacy_uri:: urn:visionclaw:concept:spatial-computing:search-interface
public:: true

# Search Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b74a0f43c8a8a7b0644ae18b38785ae9d9e40142f051654b8a9fab0dd1c21278",
  "@type": "Page",
  "vc:slug": "search-interface",
  "title": "Search Interface",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:user-query-experience",
      "vc:label": "User Query Experience"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:user-interface",
      "vc:label": "User Interface"
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
      "vc:value": "sha256-12-37b4fe14e07b"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SearchInterface"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10032"
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
      "vc:value": "Search Interface"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:search-interface"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:search-interface"
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
    "@id": "urn:visionflow:page:b74a0f43c8a8a7b0644ae18b38785ae9d9e40142f051654b8a9fab0dd1c21278@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:search-interface",
  "@type": "Class",
  "label": "Search Interface",
  "definition": "User-facing components that enable query input, result presentation, and navigation through search results in metaverse platforms, including text fields, voice input, spatial gestures, and augmented reality overlays for asset and experience discovery.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:user-interface",
      "label": "User Interface"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:user-query-experience",
        "label": "User Query Experience"
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
  "@id": "urn:visionflow:annotation:link-resolutions:search-interface:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b74a0f43c8a8a7b0644ae18b38785ae9d9e40142f051654b8a9fab0dd1c21278"
  },
  "vc:resolutions": [
    {
      "raw": "[[User Query Experience]]",
      "resolved": "urn:visionflow:linked:user-query-experience",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Interface]]",
      "resolved": "urn:visionflow:owl:class:user-interface",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b74a0f43c8a8a7b0644ae18b38785ae9d9e40142f051654b8a9fab0dd1c21278@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - User-facing components that enable query input, result presentation, and navigation through search results in metaverse platforms, including text fields, voice input, spatial gestures, and augmented reality overlays for asset and experience discovery.

- ### Semantic Classification
  - owl-class:: spatial-computing:SearchInterface
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[User Interface]]
  - enables:: [[User Query Experience]]

- ### Content

  - #### Interface Modalities
		- Text-based query input
		- Voice and natural language commands
		- Gesture-based spatial search
		- Visual search with image input
		- AR overlay result presentation
  - #### Design Elements
		- Autocomplete suggestions
		- Faceted filtering options
		- Infinite scroll result lists
		- 3D spatial result displays
		- Relevance feedback mechanisms

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
