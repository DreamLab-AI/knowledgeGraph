public:: true

# Vector Databases
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c04884803f95f4e3e7b0c45cacd91bcbeab3ad2059708a22fe96944780b84067",
  "@type": "Page",
  "vc:slug": "vector-databases",
  "title": "Vector Databases",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:embeddings",
      "vc:label": "Embeddings"
    },
    {
      "@id": "urn:visionflow:linked:vector-search",
      "vc:label": "Vector Search"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:semantic-search",
      "vc:label": "Semantic Search"
    },
    {
      "@id": "urn:visionflow:linked:vector-database",
      "vc:label": "Vector Database"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vector Databases"
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
  "@id": "urn:ngm:class:vector-databases",
  "@type": "Class",
  "label": "Vector Databases",
  "definition": "Database systems specialised for storing high-dimensional vector embeddings and performing similarity search over them, typically using approximate nearest neighbour indexing.",
  "domain": "artificial-intelligence",
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
        "@id": "urn:ngm:class:embeddings",
        "label": "Embeddings"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vector-search",
        "label": "Vector Search"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vector-databases:0081104edaf4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c04884803f95f4e3e7b0c45cacd91bcbeab3ad2059708a22fe96944780b84067"
  },
  "vc:resolutions": [
    {
      "raw": "[[Embeddings]]",
      "resolved": "urn:visionflow:linked:embeddings",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vector Search]]",
      "resolved": "urn:visionflow:linked:vector-search",
      "kind": "StubLink"
    },
    {
      "raw": "[[Retrieval-Augmented Generation]]",
      "resolved": "urn:visionflow:linked:retrieval-augmented-generation",
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
  - Database systems specialised for storing high-dimensional vector embeddings and performing similarity search over them, typically using approximate nearest neighbour indexing.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:VectorDatabases
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Vector Database]]
  - bridges-to:: [[Semantic Search]]
  - requires:: [[Embeddings]]
  - enables:: [[Vector Search]], [[Retrieval-Augmented Generation]]

- ### Content
  - Vector databases store embeddings, which are dense numeric representations of text, images or other data produced by machine learning models. They index these vectors so that, given a query vector, the system can efficiently return the most similar stored items using distance or similarity metrics.
  - To scale to large collections they rely on approximate nearest neighbour algorithms that trade a small loss of exactness for substantial speed gains. Vector databases are a core component of semantic search and retrieval-augmented generation pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
