public:: true

# Vector Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a29827a1113505d89f80626d760748f798557d2638b450cf13cf975b6fd25e7",
  "@type": "Page",
  "vc:slug": "vector-store",
  "title": "Vector Store",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:vector-database",
      "vc:label": "Vector Database"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vector Store"
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
  "@id": "urn:ngm:class:vector-store",
  "@type": "Class",
  "label": "Vector Store",
  "definition": "A storage system optimised for holding high-dimensional vector embeddings and retrieving them by similarity. It supports nearest-neighbour search used in semantic retrieval and machine learning applications.",
  "domain": "data-management",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:vector-database",
      "label": "Vector Database"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vector-store:8964adba1a30",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a29827a1113505d89f80626d760748f798557d2638b450cf13cf975b6fd25e7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Vector Database]]",
      "resolved": "urn:visionflow:linked:vector-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
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
  - A storage system optimised for holding high-dimensional vector embeddings and retrieving them by similarity. It supports nearest-neighbour search used in semantic retrieval and machine learning applications.

- ### Semantic Classification
  - owl-class:: data-management:VectorStore
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Vector Database]]
  - bridges-to:: [[Knowledge Representation]]
  - requires:: [[Vector Database]]
  - enables:: [[Natural Language Processing]]

- ### Content
  - A vector store keeps embeddings produced by models and indexes them so that queries can find the most similar items using metrics such as cosine similarity or Euclidean distance. It often uses approximate nearest-neighbour indexes for scale.
  - Vector stores underpin semantic search and retrieval-augmented generation, where a query is embedded and matched against stored vectors to find relevant documents or records.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
