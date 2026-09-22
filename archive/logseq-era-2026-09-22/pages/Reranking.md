public:: true

# Reranking

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:reranking", "@type":"Page", "title":"Reranking", "vc:slug":"reranking", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reranking",
  "@type": "Class",
  "label": "Reranking",
  "definition": "Reranking is a second-stage retrieval step in which an initial, computationally cheap set of candidate documents or passages is reordered by a more expensive, higher-precision model that scores each candidate's relevance to the query more accurately. It is a standard component of retrieval-augmented generation and search pipelines, where a fast retriever (such as a bi-encoder or lexical index) first narrows a large corpus down to a manageable candidate set, and a cross-encoder or learned ranker then refines the ordering. Reranking improves precision at the cost of additional latency, so candidate set sizes are tuned to balance quality and speed.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-retrieval",
      "label": "Information Retrieval"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agentic-rag",
        "label": "Agentic RAG"
      },
      {
        "@id": "urn:ngm:class:context-engineering",
        "label": "Context Engineering"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Reranking is a second-stage retrieval step in which an initial, computationally cheap set of candidate documents or passages is reordered by a more expensive, higher-precision model that scores each candidate's relevance to the query more accurately. It is a standard component of retrieval-augmented generation and search pipelines, where a fast retriever (such as a bi-encoder or lexical index) first narrows a large corpus down to a manageable candidate set, and a cross-encoder or learned ranker then refines the ordering. Reranking improves precision at the cost of additional latency, so candidate set sizes are tuned to balance quality and speed.
- ### Relationships
	- partOf:: [[Information Retrieval]]
	- relatedTo:: [[Agentic RAG]]
	- relatedTo:: [[Context Engineering]]
