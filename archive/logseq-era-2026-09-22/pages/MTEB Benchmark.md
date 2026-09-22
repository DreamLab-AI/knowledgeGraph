public:: true

# MTEB Benchmark
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mteb-benchmark",
  "@type": "Page",
  "vc:slug": "mteb-benchmark",
  "title": "MTEB Benchmark",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mteb-benchmark",
  "@type": "Class",
  "label": "MTEB Benchmark",
  "definition": "MTEB (Massive Text Embedding Benchmark) is a standardised evaluation suite that measures text embedding models across many tasks, including retrieval, classification, clustering, reranking, and semantic similarity, over numerous datasets and languages. It provides a public leaderboard that has become the reference for comparing embedding models. Strong MTEB scores are widely used to select embeddings for semantic search and retrieval-augmented generation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:evaluation-metric",
      "label": "Evaluation Metric"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:semantic-search",
        "label": "Semantic Search"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation-rag",
        "label": "Retrieval Augmented Generation - RAG"
      }
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - MTEB is the Massive Text Embedding Benchmark, evaluating embedding models across retrieval, clustering, and similarity tasks. It standardises model selection for [[Semantic Search]] and [[Retrieval-Augmented Generation (RAG)]].
- ### Content
  - By aggregating dozens of tasks and datasets into a single leaderboard, MTEB exposes how embeddings generalise beyond any one objective, discouraging overfitting to a single benchmark. Practitioners consult it to balance retrieval quality, multilinguality, dimensionality, and inference cost when choosing an embedding model.
