schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SearchIndex
legacy_uri:: urn:visionclaw:concept:spatial-computing:search-index
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
      "vc:value": "sha256-12-8d7221011d1a"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SearchIndex"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10031"
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
      "vc:value": "Search Index"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:search-index"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:search-index"
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
    "@id": "urn:visionflow:page:d8f5155d74e0bb57e1fa9978e5f5bf6aed52fb07de26a955b1290c82d76216ab@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:search-index",
  "@type": "OntologyClass",
  "label": "Search Index",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:data-structure",
      "vc:label": "Data Structure"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:d8f5155d74e0bb57e1fa9978e5f5bf6aed52fb07de26a955b1290c82d76216ab"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d8f5155d74e0bb57e1fa9978e5f5bf6aed52fb07de26a955b1290c82d76216ab@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A data structure that maps terms, embeddings, or attributes to document locations, enabling rapid retrieval of relevant content from large metaverse asset catalogues through inverted indexes, vector indexes, or hybrid approaches.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:fast-query-response",
      "vc:label": "Fast Query Response"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d8f5155d74e0bb57e1fa9978e5f5bf6aed52fb07de26a955b1290c82d76216ab@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
