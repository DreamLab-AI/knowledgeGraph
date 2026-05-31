public:: true

# Vector Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f8d46944f9f6fa19d258b5df4b1c42db19ac46648f8424827fd7934dac9db149",
  "@type": "Page",
  "vc:slug": "vector-search",
  "title": "Vector Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:embeddings",
      "vc:label": "Embeddings"
    },
    {
      "@id": "urn:visionflow:linked:semantic-search",
      "vc:label": "Semantic Search"
    },
    {
      "@id": "urn:visionflow:linked:vector-database",
      "vc:label": "Vector Database"
    },
    {
      "@id": "urn:visionflow:linked:information-retrieval",
      "vc:label": "Information Retrieval"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vector Search"
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
  "@id": "urn:ngm:class:vector-search",
  "@type": "Class",
  "label": "Vector Search",
  "definition": "The retrieval of items whose vector embeddings are most similar to a query vector, typically using distance metrics and approximate nearest neighbour indexing for efficiency.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-retrieval",
      "label": "Information Retrieval"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:embeddings",
        "label": "Embeddings"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vector-search:b91bdf2c4ce2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f8d46944f9f6fa19d258b5df4b1c42db19ac46648f8424827fd7934dac9db149"
  },
  "vc:resolutions": [
    {
      "raw": "[[Embeddings]]",
      "resolved": "urn:visionflow:linked:embeddings",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Search]]",
      "resolved": "urn:visionflow:linked:semantic-search",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vector Database]]",
      "resolved": "urn:visionflow:linked:vector-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Retrieval]]",
      "resolved": "urn:visionflow:linked:information-retrieval",
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
  - The retrieval of items whose vector embeddings are most similar to a query vector, typically using distance metrics and approximate nearest neighbour indexing for efficiency.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:VectorSearch
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Information Retrieval]]
  - bridges-to:: [[Vector Database]], [[Information Retrieval]]
  - requires:: [[Embeddings]]
  - enables:: [[Semantic Search]]

- ### Content
  - Vector search finds the items in a collection whose embeddings lie closest to a query embedding under a similarity measure such as cosine similarity or Euclidean distance. Because exhaustive comparison is expensive at scale, it relies on approximate nearest neighbour indexes that return near-optimal results quickly.
  - It underpins semantic search, recommendation and retrieval-augmented generation, where meaning rather than exact keyword match determines relevance. Vector databases provide the indexing and serving infrastructure for vector search at scale.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
