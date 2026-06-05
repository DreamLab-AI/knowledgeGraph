public:: true

# Search Index
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8f5155d74e0bb57e1fa9978e5f5bf6aed52fb07de26a955b1290c82d76216ab",
  "@type": "Page",
  "vc:slug": "search-index",
  "title": "Search Index",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fast-query-response",
      "vc:label": "Fast Query Response"
    },
    {
      "@id": "urn:visionflow:owl:class:data-structure",
      "vc:label": "Data Structure"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10031"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Search Index"
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
  "@id": "urn:ngm:class:search-index",
  "@type": "Class",
  "label": "Search Index",
  "definition": "A data structure that maps terms, embeddings, or attributes to document locations, enabling rapid retrieval of relevant content from large metaverse asset catalogues through inverted indexes, vector indexes, or hybrid approaches.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:fast-query-response",
        "label": "Fast Query Response"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-structure",
        "label": "Data Structure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:search-index:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d8f5155d74e0bb57e1fa9978e5f5bf6aed52fb07de26a955b1290c82d76216ab"
  },
  "vc:resolutions": [
    {
      "raw": "[[Fast Query Response]]",
      "resolved": "urn:visionflow:linked:fast-query-response",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Structure]]",
      "resolved": "urn:visionflow:owl:class:data-structure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A data structure that maps terms, embeddings, or attributes to document locations, enabling rapid retrieval of relevant content from large metaverse asset catalogues through inverted indexes, vector indexes, or hybrid approaches.

- ### Semantic Classification
  - owl-class:: spatial-computing:SearchIndex
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Structure]]
  - enables:: [[Fast Query Response]]

- ### Content

  - #### Index Types
		- Inverted index for text search
		- Vector index for semantic similarity
		- B-tree for range queries
		- Geospatial index for location search
		- Graph index for relationship traversal
  - #### Technologies
		- Apache Lucene indexing library
		- HNSW for approximate nearest neighbour
		- FAISS for vector similarity
		- Pinecone managed vector database
		- Milvus open source vector search

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
