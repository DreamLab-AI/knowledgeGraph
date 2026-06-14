public:: true

# Query Encoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:query-encoder",
  "@type": "Page",
  "vc:slug": "query-encoder",
  "title": "Query Encoder",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:query-encoder",
  "@type": "Class",
  "label": "Query Encoder",
  "definition": "A query encoder is a neural model component that maps a search query into a dense vector embedding within a shared semantic space, enabling similarity comparison against encoded documents. In dual-encoder retrieval architectures it is paired with a document encoder, allowing fast approximate-nearest-neighbour search over precomputed passage embeddings. It is a core building block of dense retrieval and retrieval-augmented generation pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval Augmented Generation - RAG"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A query encoder embeds a user query into a dense vector for similarity matching against documents. It is a constituent part of [[Retrieval-Augmented Generation (RAG)]] and [[Semantic Search]] systems.
- ### Content
  - In dual-encoder (bi-encoder) designs, the query encoder runs at inference time while document embeddings are precomputed and indexed, giving low-latency retrieval. Training typically uses contrastive objectives with positive and hard-negative passages. Quality hinges on alignment between the query and document encoders' shared embedding space.
